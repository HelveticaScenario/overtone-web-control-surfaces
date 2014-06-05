;; Anything you type in here will be executed
;; immediately with the results shown on the
;; right.
(def a (atom [0]))
a
(add-watch a :watch
           (fn [key reference old-state new-state]
             (prn key reference old-state new-state)))

(swap! a conj (inc (last @a)))
