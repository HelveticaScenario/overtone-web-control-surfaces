(use 'overtone.live)
(require 'overtone.studio.scope)
(def buf (buffer 2048))
(def my-bus (audio-bus))

(def num-buffer-channels 1)

(def looper-buf (buffer (* 44100 0.2) num-buffer-channels))

(vec (buffer-data looper-buf))
(defsynth noisemaker [freq 220 out-bus 0 ]
  (out out-bus (sin-osc:ar freq)))

;; looper states/modes:
;; 0 - record
;; 1 - overdub (not fully implemented yet)
;; 2 - play
;; 3 - stop
(defsynth looper [input-bus 0 output-bus 0 mode 3]
  (let [input (in:ar input-bus)
          record (= mode 0)
          record-trig (trig:ar record 0.01)
          overdub (= mode 1)
          overdub-trig (trig:ar overdub 0.01)
          play (= mode 2)
          play-trig (trig:ar play 0.01)
          stop (= mode 3)
          stop-trig (trig:ar stop 0.01)
          record-level (select:ar mode [1 1 0 0])
          pre-level (select:ar mode [0 1 1 1])
          loop-length (latch:ar :in (timer:ar record-trig) :trig (or overdub-trig play-trig stop-trig))
;; when we have a measured time - use it as the loop restart measure
          auto-restart-loop (* play (t-duty:ar :dur loop-length :reset (or record-trig play-trig)))
;; also, restart the loop when the user preses record or play
          restart-loop (or record-trig play-trig auto-restart-loop)]
         (record-buf:ar [input] looper-buf :rec-level record-level :pre-level pre-level :trigger restart-loop :loop 0)
         (out:ar output-bus (+ (* (or overdub play) (play-buf:ar num-buffer-channels looper-buf :trigger restart-loop :start-pos 0 :loop 1)) input))))


(defsynth noisemaker [freq 220 out-bus 0 ]
  (out out-bus (lf-tri:ar freq)))

(def n (noisemaker 20 my-bus))

(def lop (looper my-bus 0 0))

;; (overtone.studio.scope/scope buf)
(overtone.studio.scope/bus-freqs->buf my-bus buf)


;; (kill noisemaker)
