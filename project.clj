(defproject overtone-playground "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [ring "1.3.0-RC1"]
                 [om "0.6.4"]
                 [overtone "0.9.1"]
;;                  [shadertone "0.2.3"]
;;                  [quil "1.7.0"]
;;                  [net.mikera/vectorz-clj "0.22.0"]
;;                  [com.github.nkzawa/socket.io-client "0.1.0"]
;;                  [com.github.nkzawa/engine.io-client "0.2.0"]
;;                  [com.corundumstudio.socketio/netty-socketio "1.6.3"]
                 [com.taoensso/sente "0.14.1"]
                 [http-kit "2.1.16"]
                 [compojure "1.1.8"]
                 [hiccup "1.0.5"]
                 [org.clojure/core.match "0.2.1"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src/clj" "src/cljs"]
  :resource-paths ["resources"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/clj" "src/cljs"]
              :compiler {
                :output-to "resources/public/js/main.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :source-map true}}]}
  :jvm-opts ["-Xmx1g"])
