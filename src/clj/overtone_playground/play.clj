(ns overtone-playground.play
  (:use [overtone.live])
  (:require [overtone-playground.server-sente :as s]))


;; (def server (o/osc-server 44101 "osc-clj"))

;; server
;; (def client (osc/osc-client "127.0.0.1" 44100))
;; (osc-send client "/test")
;; (zero-conf-off)
;; (osc-listen server (fn [msg] (println msg)) :debug)
;; (osc-rm-listener server :debug)
;; (osc-handle server "/1/fader1" (fn [msg] (control-foo (first (:args msg)))))

;;   (def server (s/run-http-server))


;;   (defsynth noisemaker [freq 220 out-bus 0 volume 70]
;;     (out out-bus (* (/ volume 100) (lf-tri:ar freq))))

;;   (def n (noisemaker))

;;   (def other (s/event-msg-handler (fn [p]
;;                                     (ctl n :volume (* 100 (first (:args p)))))))

