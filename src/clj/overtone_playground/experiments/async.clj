(require '[clojure.core.async :as async :refer :all])

;; (def c (chan))
;; (def m (mult c))
;; (def c2 (tap m (chan)))
;; (def c3 (tap m (chan)))
;; (defn print-chan [c]
;;   (go
;;    (while true
;;      (prn (<! c)))))
;; (print-chan c2)
;; (print-chan c3)


;; (put! c "hats")

(def c (chan))
(def p (pub c #(:topic %)))

(def hats (sub p :hats (chan)))
(def caps (sub p :caps (chan)))

(defn print-topic [topic val]
  (prn topic val))

(defn loop-print-topic [topic c]
  (go
     (while true
       (let [val (<! c)]
         (print-topic topic val)))))

(loop-print-topic :hats hats)
(loop-print-topic :caps caps)

(put! c {:topic :caps :val 5})
