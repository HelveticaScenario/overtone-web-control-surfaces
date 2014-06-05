(ns overtone-playground.server-sente
  (:require [compojure.core     :as comp :refer (defroutes routes GET POST)]
            [compojure.route    :as route]
            [compojure.handler  :as comp-handler]
            [org.httpkit.server :as http-kit-server]
            [clojure.core.match :as match :refer (match)]
            [hiccup.core        :as hiccup]
            [hiccup.page        :as page]
            [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
            [taoensso.sente :as sente]))

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )


(defn home [req]
  (page/html5
   [:head
    (page/include-css "/css/main.css")]
   [:body
;;     [:script#lt_ws {:src "http://localhost:50806/socket.io/lighttable/ws.js"}]
    [:div#container]
    [:script {:src "//cdnjs.cloudflare.com/ajax/libs/react/0.9.0/react.min.js"}]
    [:script {:src "js/out/goog/base.js"}]
    [:script {:src "js/main.js"}]
    [:script "goog.require('overtone_playground.core');"]]))

(defroutes ring-handler
  (-> (routes
    (GET "/" req (home req))
    (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
    (POST "/chsk" req (ring-ajax-post                req))
    (route/resources "/") ; Static files, notably public/main.js (our cljs target)
    (route/not-found "<h1>Page not found</h1>")
    )
      compojure.handler/site)
  )

(defn- logf [fmt & xs] (println (apply format fmt xs)))

(defn run-http-server []
  (let [s   (http-kit-server/run-server (var ring-handler) {:port 8080})
        uri (format "http://localhost:%s/" (:local-port (meta s)))]
    (logf "Http-kit server is running at `%s`" uri)
    #_(.browse (java.awt.Desktop/getDesktop)
             (java.net.URI. uri))))

#_(defonce http-server (run-http-server))

(defn event-msg-handler [f]
  (sente/start-chsk-router-loop! (fn
   [{:as ev-msg :keys [ring-req event ?reply-fn]} _]
   (let [session (:session ring-req)
         uid     (:uid session)
         [id data :as ev] event]

;;      (logf "Event: %s" ev)
     (match [id data]
            [:osc/message payload] (f payload)
            :else
            (do (logf "Unmatched event: %s" ev)
              (when-not (:dummy-reply-fn? (meta ?reply-fn))
                (?reply-fn {:umatched-event-as-echoed-from-from-server ev})))))) ch-chsk))
