(ns overtone-playground.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [cljs.core.match.macros :refer (match)])
  (:require [cljs.core.async :as async :refer [put! chan alts!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.dom :as gdom]
            [clojure.string :as string]
            [taoensso.sente :as sente :refer (cb-success?)]
            [cljs.core.match]))

(defn- logf [fmt & xs] (prn fmt xs))

(defn clamp [v low high]
  (cond
   (< v low) low
   (> v high) high
   :else v))

(enable-console-print!)
(js/React.initializeTouchEvents true)

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Note the same path as before
       {:type :ws ; e/o #{:auto :ajax :ws}
       })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )

(defn- event-handler [[id data :as ev] _]
  (logf "Event: %s" ev)
  (match [id data]
    ;; TODO Match your events here <...>
    [:chsk/state {:first-open? true}]
    (logf "Channel socket successfully established!")
    [:chsk/state new-state] (logf "Chsk state change: %s" new-state)
    [:chsk/recv  payload]   (logf "Push event from server: %s" payload)
    :else (logf "Unmatched event: %s" ev)))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-handler ch-chsk))

(defprotocol Topic
  (topic* [p t])
  (topic* [p]))


(defn pub
  "Creates and returns a pub(lication) of the supplied channel,
  partitioned into topics by the topic-fn. topic-fn will be applied to
  each value on the channel and the result will determine the 'topic'
  on which that value will be put. Channels can be subscribed to
  receive copies of topics using 'sub', and unsubscribed using
  'unsub'. Each topic will be handled by an internal mult on a
  dedicated channel. By default these internal channels are
  unbuffered, but a buf-fn can be supplied which, given a topic,
  creates a buffer with desired properties.

  Each item is distributed to all subs in parallel and synchronously,
  i.e. each sub must accept before the next item is distributed. Use
  buffering/windowing to prevent slow subs from holding up the pub.

  Items received when there are no matching subs get dropped.

  Note that if buf-fns are used then each topic is handled
  asynchronously, i.e. if a channel is subscribed to more than one
  topic it should not expect them to be interleaved identically with
  the source."
  ([ch topic-fn] (pub ch topic-fn (constantly nil)))
  ([ch topic-fn buf-fn]
   (let [mults (atom {}) ;;topic->mult
         ensure-mult (fn [topic]
                       (or (get @mults topic)
                           (get (swap! mults
                                       #(if (% topic) % (assoc % topic (async/mult (async/chan (buf-fn topic))))))
                                topic)))
         p (reify
             async/Mux
             (muxch* [_] ch)

             Topic
             (topic* [_ topic] (if (get @mults topic)
                                 true
                                 false))
             (topic* [_] (keys @mults))

             async/Pub
             (sub* [p topic ch close?]
                   (let [m (ensure-mult topic)]
                     (async/tap m ch close?)))
             (unsub* [p topic ch]
                     (when-let [m (get @mults topic)]
                       (async/untap m ch)))
             (unsub-all* [_] (reset! mults {}))
             (unsub-all* [_ topic] (swap! mults dissoc topic)))]
     (go-loop []
              (let [val (<! ch)]
                (if (nil? val)
                  (doseq [m (vals @mults)]
                    (async/close! (async/muxch* m)))
                  (let [topic (topic-fn val)
                        m (get @mults topic)]
                    (when m
                      (when-not (>! (async/muxch* m) val)
                        (swap! mults dissoc topic)))
                    (recur)))))
     p)))


(extend-type js/TouchList
  ISeqable
  (-seq [l] (for [i (range (.. l -length))]
              (aget l i))))
(defn log [e]
  (.log js/console e))

(def app-state (atom {:root [{:path "container" :type :container :x 40 :y 70
                              :children [#_{:path "foo" :type :draggable :x 10 :y 10 :x-bounds [200 400] :y-bounds [200 400]}
                                         {:path "bar" :type :slider :x 100 :y 100 :val 0 :width 60 :height 300 :nub-width 50 :nub-height 40}]}]}))

(defn update-opts [{:keys [parent-pos] :as opts} data]
  (assoc opts :path-chain (conj (:path-chain opts) (:path data)) :parent-pos {:x (+ (:x parent-pos) (:x data)) :y (+ (:y parent-pos) (:y data))}))

(defmulti component (fn [spec _ _] (:type spec)))

(defn draggable [data owner {:keys [pub-sub path-chain parent-pos] :as opts}]
  (let [move (chan)
        up (chan)
        _ (go
           (while true
             (let [move-e (async/<! move)]
               (chsk-send! [:osc/message {:path (:path @data) :args move-e}])
               (om/transact! data (fn [data] (assoc data
                                               :x (apply clamp (- (:x move-e) (:-off-x data)) (:x-bounds data))
                                               :y (apply clamp (- (:y move-e) (:-off-y data)) (:y-bounds data))))))))
        _ (go
           (while true
             (let [up-e (async/<! up)]
               (let [[_ identifier] (string/split (:type up-e) #"#")
                     s (om/get-state owner)]
                 (om/set-state! owner :hello (inc (or (:hello s) 0)))
                 (async/unsub pub-sub :mouseMove move)
                 (async/unsub pub-sub :mouseUp up)
                 (async/unsub pub-sub (keyword (str "touchMove#" identifier)) move)
                 (async/unsub pub-sub (keyword (str "touchEnd#" identifier)) up)
                 (om/transact! data (fn [d] (dissoc d :-active-touch)))))))]
    (reify
      om/IRender
      (render [_]
              (dom/div (clj->js {:className "nub"
                                 :style {:WebkitTransform (str "matrix(1,0,0,1," (:x data) "," (:y  data) ")")}
                                 :onMouseDown (fn [e]
                                                (.preventDefault e)
                                                (when-not (:-active-touch @data)
                                                  (om/transact! data (fn [pos] (assoc pos :-off-x (- (aget e "clientX") (:x pos))
                                                                                      :-off-y (- (aget e "clientY") (:y pos))
                                                                                       :-active-touch :mouse)))
                                                  (async/sub pub-sub :mouseMove move)
                                                  (async/sub pub-sub :mouseUp up)))
                                 :onTouchStart (fn [e]
                                                 (.preventDefault e)
                                                 (om/set-state! owner :goodbye (inc (or (:goodbye (om/get-state owner)) 0)))
                                                 (when-not (:-active-touch @data)
                                                   (let [touch (aget (.. e -targetTouches) 0)]
                                                     (om/transact! data (fn [pos] (assoc pos :-off-x (- (aget touch "clientX") (:x pos))
                                                                                           :-off-y (- (aget touch "clientY") (:y pos))
                                                                                           :-active-touch (.. touch -identifier))))
                                                     (async/sub pub-sub (keyword (str "touchMove#" (str (.. touch -identifier)))) move)
                                                     (async/sub pub-sub (keyword (str "touchEnd#" (str (.. touch -identifier)))) up))))}) "")))))

(defmethod component :draggable [data owner opts]
  (draggable data owner opts))

(defn container [data owner {:keys [pub-sub path-chain parent-pos] :as opts}]
  (reify
   om/IRender
   (render [_]
           (dom/div (clj->js {:className (or (:class data) "container")
                              :style {:position "absolute"
                                      :WebkitTransform (str "matrix(1,0,0,1," (:x data) "," (:y  data) ")")}})
                    (apply dom/div (clj->js {:style {:position "relative"}})
                           (om/build-all component (:children data) {:opts (update-opts opts data)}))))))

(defmethod component :container [data owner opts]
  (container data owner opts))

(defn slider [data owner {:keys [pub-sub path-chain parent-pos] :as opts}]
  (let [move (chan)
        up (chan)
        _ (go
           (while true
             (let [move-e (async/<! move)]
               (om/transact! data (fn [data]
                                    (assoc data
                                      :val (.abs js/Math
                                                 (- (/ (clamp
                                                        (- (:y move-e) (:y parent-pos) (:y data) (/ (:nub-height data) 2))
                                                        0
                                                        (- (:height data) (:nub-height data)))
                                                       (- (:height data) (:nub-height data)))
                                                    1)))))
               (chsk-send! [:osc/message {:path (:path @data) :args (list (:val @data))}]))))
        _ (go
           (while true
             (let [up-e (async/<! up)]
               (let [[_ identifier] (string/split (:type up-e) #"#")]
                 (async/unsub pub-sub :mouseMove move)
                 (async/unsub pub-sub :mouseUp up)
                 (async/unsub pub-sub (keyword (str "touchMove#" identifier)) move)
                 (async/unsub pub-sub (keyword (str "touchEnd#" identifier)) up)
                 (om/set-state! owner {})))))]
    (reify
      om/IRenderState
      (render-state [_ state]
              (dom/div (clj->js {:className (or (:class data) "slider")
                                 :style {:position "absolute"
                                         :WebkitTransform (str "matrix(1,0,0,1," (:x data) "," (:y  data) ")")
                                         :width (str (:width data) "px")
                                         :height (str (:height data) "px")}
                                 :onMouseDown (fn [e]
                                                (.preventDefault e)
                                                (when-not (:active-touch state)
                                                  (om/set-state! owner {:off-y (- (aget e "clientY") (:y @data))
                                                                       :active-touch :mouse})
                                                  (async/sub pub-sub :mouseMove move)
                                                  (async/sub pub-sub :mouseUp up)))
                                 :onTouchStart (fn [e]
                                                 (.preventDefault e)
                                                 (when-not (:active-touch state)
                                                   (let [touch (aget (.. e -targetTouches) 0)]
                                                     (om/set-state! owner {:off-y (- (aget touch "clientY") (:y @data))
                                                                          :active-touch (.. touch -identifier)})
                                                     (async/sub pub-sub (keyword (str "touchMove#" (str (.. touch -identifier)))) move)
                                                     (async/sub pub-sub (keyword (str "touchEnd#" (str (.. touch -identifier)))) up))))})
                                (dom/div (clj->js {:className "slider-nub"
                                                   :style {:width (str (:nub-width data) "px")
                                                           :height (str (:nub-height data) "px")
                                                           :WebkitTransform (str "matrix(1,0,0,1," (/ (- (:width data) (:nub-width data)) 2) "," (* (.abs js/Math (- (:val data) 1)) (- (:height data) (:nub-height data))) ")")}
                                                   })))))))

(defmethod component :slider [data owner opts]
  (slider data owner opts))

(defn topic-fn [v]
;;   (prn (:type v))
  (keyword (:type v)))

(defn extract-mouse-event [e type]
  {:type type :x (aget e "clientX") :y (aget e "clientY") :time (aget e "timeStamp")})

(defn extract-touch-event [e type time]
  {:type (keyword (str (name type) "#" (str (aget e "identifier")))) :x (aget e "clientX") :y (aget e "clientY") :time time})

(defn stage [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
                (let [in (chan)
                      out (pub in topic-fn)]
                  (om/set-state! owner {:in in :out out})))
    om/IRenderState
    (render-state [_ {in :in out :out}]
                  (let [put (fn [e] (async/put! in e))
                        on-touch (fn [type e]
                                   (.preventDefault e)
                                   (let [time (aget e "timeStamp")]
                                     (doseq [touch (aget e "changedTouches")]
                                       (put (extract-touch-event touch type time)))))]
                    (dom/div #js {:className "window"
                                  :onMouseMove (fn [e]
                                                 (.preventDefault e)
                                                 (put (extract-mouse-event e :mouseMove)))
                                  :onMouseUp (fn [e]
                                               (.preventDefault e)
                                               (put (extract-mouse-event e :mouseUp)))
                                  :onTouchMove (partial on-touch :touchMove)
                                  :onTouchEnd  (partial on-touch :touchEnd)
                                  :onTouchCancel (partial on-touch :touchEnd)}
                             (apply dom/div nil
                                    (om/build-all component (:root data) {:opts {:pub-sub out :path-chain [] :parent-pos {:x 0 :y 0}}})))))))

(defn clickable [data owner]
  (reify
    om/IRender
    (render [_]
            (dom/button #js {:onClick #(om/transact! data :count inc)} (:count data)))))

(om/root stage app-state
         {:target (gdom/getElement "container")})
