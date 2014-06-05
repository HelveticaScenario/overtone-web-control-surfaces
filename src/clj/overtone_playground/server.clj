(ns overtone-playground.server
  (:import  [com.corundumstudio.socketio Configuration SocketIOServer ]
            [com.corundumstudio.socketio.listener ConnectListener DataListener])
  (:use [overtone.api]))
(immigrate-overtone-api)

(defn init-server [hostname port]
  (let [config (doto (Configuration.)
                 (.setHostname hostname)
                 (.setPort port))
        server (SocketIOServer. config)]
    server))

(defn on-event [server event f]
  (.addEventListener server event java.lang.Object (reify DataListener
                                                          (onData [_ client data ackSender] (f _ client data ackSender)))))

(defn on-connect [server f]
  (.addConnectListener server (reify ConnectListener
                                (onConnect [_ client] (f _ client)))))


(defn on-disconnect [server f]
  (.addDisconnectListener server (reify ConnectListener
                                (onConnect [_ client] (f _ client)))))

(def a (atom ()))

(defn message-fn [d client] (let [{path "path" payload "payload"} (into {} d)]
                                                         (swap! a conj {:path path :payload payload})
                                                         (if (= java.util.ArrayList (type payload))
                                                           (apply osc-send client path (into [] payload))
                                                           (osc-send client path payload))))

(defn osc-patch-server
  ([osc-port zero-conf-name] (osc-patch-server osc-port zero-conf-name nil))
  ([osc-port zero-conf-name socket-port]
     (let [socket-server (init-server "localhost" (or socket-port 64587))
           server (osc-server osc-port zero-conf-name)
           client (osc-client "127.0.0.1" osc-port)]
       (on-connect socket-server #(prn %1 %2))
       (on-event socket-server "message" (fn [_ _ d _] (message-fn d client)))


       (.start socket-server)
       (assoc server :socket-io socket-server :client client))))


(defn osc-patch-close
  "Close an osc-peer and its associated socket.io server and client. If peer has been
  registered with zeroconf, it will automatically remove it."
  [peer & wait]
  (.stop (:socket-io peer))
  (apply osc-close (:client peer) wait)
  (apply osc-close peer wait)
  peer)

(osc-debug)
(def patch-server (osc-patch-server 44100 "patch"))
(def v (first @a))
v
(= java.util.ArrayList (type (:payload v)))
(type [(into {} v)])
(type (get "path" (into {} v)))

(defn hello [a b c d] [a b c d])
(apply hello 1 6 [2 3])

(osc-listen (:client patch-server) (fn [msg] (println msg)) :debug)
(osc-listen patch-server  (fn [msg] (println msg)
                                   (osc-reply msg "hello")) :debug)
(defn send-test [patch-server]
  (osc-send (:client patch-server) "/test" (int 5)))
(send-test patch-server)
(osc-send patch-server "hello")
(osc-patch-close patch-server)

(def c (osc-client "127.0.0.1" 8000))
(osc-send c "/renoise/transport/start")
;;(.start server)
;;(.stop server)
