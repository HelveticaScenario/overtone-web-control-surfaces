(ns overtone-playground.core
  (:require [overtone-playground.play]))

;; (defn foo
;;   "I don't do a whole lot."
;;   [x]
;;   (println x "Hello, World!"))

;; ;; (o/demo (o/sin-osc 440))

;; (def window [300 500])

;; (defn setup []
;;   (q/smooth)                          ;; Turn on anti-aliasing
;;   (q/frame-rate 10)                    ;; Set framerate to 1 FPS
;;   (q/background 200))                 ;; Set the background colour to
;;                                     ;; a nice shade of grey.
;; (def c (atom 0))

;; (defn draw []
;;   (q/stroke 255)             ;; Set the stroke colour to a random grey
;;   (q/stroke-weight 0)       ;; Set the stroke thickness randomly
;;   (q/fill 255)               ;; Set the fill colour to a random grey

;;   (let [w 5
;;         spaces (/ (window 0) w)
;;         h     (q/random (window 1))       ;; Set the diameter to a value between 0 and 100
;;         x     (* (+ w 1) (int (q/random spaces)))      ;; Set the x coord randomly within the sketch
;;         y   (- (window 1) h) ]     ;; Set the y coord randomly within the sketch
;;     (q/rect x y w h)))       ;; Draw a circle at x y with the correct diameter

;; (q/defsketch example                  ;; Define a new sketch named example
;;   :title "Oh so many grey circles"  ;; Set the title of the sketch
;;   :setup setup                      ;; Specify the setup fn
;;   :draw draw                        ;; Specify the draw fn
;;   :size (vec window))                  ;; You struggle to beat the golden ratio
