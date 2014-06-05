;; Anything you type in here will be executed
;; immediately with the results shown on the
;; right.
(use 'overtone.live)
;; (def server (osc-server 44100 "osc-clj"))
(zero-conf-off)
(osc-listen server (fn [msg] (println msg)) :debug)
(osc-rm-listener server :debug)
(osc-handle server "/1/fader1" (fn [msg] (control-foo (first (:args msg)))))
(definst foo [freq 440] (sin-osc freq))
(defn control-foo
 [val]
 (let [val (scale-range val 0 1 50 1000)]
      (ctl foo :freq val)))
(foo)
(stop)
(overtone.studio.scope/scope)
;; Define a function for convenience
(defn note->hz [music-note]
    (midi->hz (note music-note)))
(defsynth sin-out [bus 20 freq 440]
  (out bus (sin-osc freq)))

(defsynth filter-lin [bus-in 20 bus-out 0]
  (out bus-out (lpf (in bus-in) (mouse-x 40 5000 EXP))))

(sin-out 20)
(filter-lin)
(sample-player samp-buf :buf 0)
(stop)
()
(demo 7 (lpf (mix (saw [50 (line 100 1600 5) 101 100.5]))
                  (lin-lin (lf-tri (line 2 20 5)) -1 1 400 4000)))
(demo 5 (saw (note->hz :C5)))
(demo 7 (mix (saw [:C5 (line 100 1600 5) 101 100.5])))


(overtone.studio.scope/scope)


(require 'overtone.studio.scope)
(overtone.studio.scope/bus-freqs->buf)
(require 'overtone.examples.synthesis.fourier)
(require 'clojure.core.matrix 'clojure.core.matrix.operators)
(clojure.core.matrix/set-current-implementation :vectorz)  ;; use Vectorz as default matrix implementation
(stop)
((overtone.sc.synth/synth (out 0 (sin-osc 440))))
;; (load-sample (freesound-path 237233))
((out 20 (sin-osc 440)))
(buffer-data)

(def samp-buf (sample "/Users/contrarian/Music/iTunes/iTunes Media/Music/Unknown Artist/Unknown Album/combat.wav"))
(demo 5 (play-buf samp-buf))
(demo 5 ((overtone.sc.synth/synth (out 0 (samp-buf)))))
(def snare (freesound 26903))

(def arr (into-array Double/TYPE (buffer-read snare)))
(play-buf samp-buf)
(def abc (mikera.matrixx.algo.FFT. 8192))
(.complexForward abc arr)
(definst foo [freq 220] (* (line:kr 1 1 10 FREE) 0.3 (saw freq)))
(definst trem [freq 440 depth 10 rate 6 length 3]
    (* 0.3
       (line:kr 1 1 length FREE)
       (saw (+ freq (* depth (sin-osc:kr rate))))))
(trem 200 60 2 10)
(kill trem)
(foo 160)
(foo 120)
((overtone.sc.synth/synth "hello" (out 20 (sin-osc 440))))
((overtone.sc.synth/synth "goodbye" (out 0 (in 20))))
(overtone.studio.scope/scope samp-buf)
(def b (buffer 8192))
(def s (mix (saw [50 101 100.5])))
(def f (fft b s))

(def buf (buffer 2048))
(demo 10
  (let [rate 10
        src (* 0.8 (white-noise))
        freqs (fft buf src)
            filtered (pv-rand-comb freqs 0.95 (impulse:kr rate))]
    (pan2 (ifft filtered))))
(def ff (fft :buffer buf :in (sin-osc 440)))
(demo 1 (sin-osc ff))
(macroexpand '(demo 1 (sin-osc ff)))
(def v (buffer-data buf))
(count (seq v))
(overtone.sc.synth/synth "hello" (out 0 (hold (sin-osc 440) 5 :done FREE)))
(show-graphviz-synth sin-wave)
(demo 5 (mix (saw [50 (line 100 1600 5) 101 100.5])))
(macroexpand '(demo 5 (mix (saw [50 (line 100 1600 5) 101 100.5]))))
(demo 7 (lpf (mix (saw [50 (line 100 1600 5) 101 100.5]))
                  (lin-lin (lf-tri (line 2 20 5)) -1 1 400 4000)))
(ctl foo :freq 120)
(definst sin-wave [freq 440 attack 0.01 sustain 0.4 release 0.1 vol 0.4]
  (* (env-gen (lin attack sustain release) 1 1 0 1 FREE)
     (sin-osc freq)
     vol))
(sin-wave)
(definst saw-wave [freq 440 attack 0.01 sustain 0.4 release 0.1 vol 0.4]
  (* (env-gen (lin attack sustain release) 1 1 0 1 FREE)
     (saw freq)
     vol))
(saw-wave 440 0.01 1 0.2 1)

(definst square-wave [freq 440 attack 0.01 sustain 0.4 release 0.1 vol 0.4]
  (* (env-gen (lin attack sustain release) 1 1 0 1 FREE)
     (lf-pulse:ar freq)
     vol))
(square-wave)

(definst noisey [freq 440 attack 0.01 sustain 0.4 release 0.1 vol 0.4]
  (* (env-gen (lin attack sustain release) 1 1 0 1 FREE)
     (pink-noise) ; also have (white-noise) and others...
     vol))
(noisey)

(definst triangle-wave [freq 440 attack 0.01 sustain 0.1 release 0.4 vol 0.4]
  (* (env-gen (lin attack sustain release) 1 1 0 1 FREE)
     (lf-tri freq)
     vol))
(triangle-wave)
(definst spooky-house [freq 440 width 0.2
                         attack 0.3 sustain 4 release 0.3
                         vol 0.4]
  (* (env-gen (lin attack sustain release) 1 1 0 1 FREE)
     (sin-osc (+ freq (* 20 (lf-pulse:kr 0.5 0 width))))
     vol))
(spooky-house)
(demo 10 (lpf (saw 100) (mouse-x 40 5000 EXP)))
(demo 10 (hpf (saw 100) (mouse-x 40 5000 EXP)))
(demo 30 (bpf (saw 100) (mouse-x 40 5000 EXP) (mouse-y 0.01 1 LIN)))
(let [freq 220]
  (demo (pluck (* (* 1 (square-wave)) (env-gen (perc 0.001 2) :action FREE)) 1 3 (/ 1 freq))))
(demo (pluck (sin-osc 640)))



(definst c-hat [amp 0.8 t 0.04]
  (let [env (env-gen (perc 0.001 t) 1 1 0 1 FREE)
        noise (white-noise)
        sqr (* (env-gen (perc 0.01 0.04)) (pulse 880 0.2))
        filt (bpf (+ sqr noise) 9000 0.5)]
    (* amp env filt)))


(definst o-hat [amp 0.8 t 0.5]
  (let [env (env-gen (perc 0.001 t) 1 1 0 1 FREE)
        noise (white-noise)
        sqr (* (env-gen (perc 0.01 0.04)) (pulse 880 0.2))
        filt (bpf (+ sqr noise) 9000 0.5)]
    (* amp env filt)))

(defn swinger [beat]
  (at (metro beat) (o-hat))
  (at (metro (inc beat)) (c-hat))
  (at (metro (+ 1.65 beat)) (c-hat))
  (apply-at (metro (+ 2 beat)) #'swinger (+ 2 beat) []))

; define a metronome at a given tempo, expressed in beats per minute.
(def metro (metronome 120))

(swinger (metro))
(stop)
;; We use a saw-wave that we defined in the oscillators tutorial
(definst saw-wave [freq 440 attack 0.01 sustain 0.4 release 0.1 vol 0.4]
  (* (env-gen (env-lin attack sustain release) 1 1 0 1 FREE)
     (saw freq)
     vol))

;; We can play notes using frequency in Hz
(saw-wave 440)
(saw-wave 523.25)
(saw-wave 261.62) ; This is C4

;; We can also play notes using MIDI note values
(saw-wave (midi->hz 69))
(saw-wave (midi->hz 72))
(saw-wave (midi->hz 60)) ; This is C4

;; We can play notes using standard music notes as well
(saw-wave (midi->hz (note :A4)))
(saw-wave (midi->hz (note :C5)))
(saw-wave (midi->hz (note :C4))) ; This is C4! Surprised?

;; Define a function for convenience
(defn note->hz [music-note]
    (midi->hz (note music-note)))

; Slightly less to type
(saw-wave (note->hz :C5))

;; Let's make it even easier
(defn saw2 [music-note]
    (saw-wave (midi->hz (note music-note))))

;; Great!
(saw2 :A4)
(saw2 :C5)
(saw2 :C4)

;; Let's play some chords


;; this is one possible implementation of play-chord
(defn play-chord [a-chord]
  (doseq [note a-chord] (saw2 note)))

;; We can play many types of chords.
;; For the complete list, visit https://github.com/overtone/overtone/blob/master/src/overtone/music/pitch.clj and search for "def CHORD"
(play-chord (chord :C5 :major))

;; We can play a chord progression on the synth
;; using times:
(defn chord-progression-time []
  (let [time (now)]
    (at time (play-chord (chord :C4 :major)))
    (at (+ 2000 time) (play-chord (chord :G3 :major)))
    (at (+ 3000 time) (play-chord (chord :F3 :sus4)))
    (at (+ 4300 time) (play-chord (chord :F3 :major)))
    (at (+ 5000 time) (play-chord (chord :G3 :major)))))

(chord-progression-time)
(now)
;; or beats:
(defonce metro (metronome 220))
(metro)
(defn chord-progression-beat [m beat-num]
  (at (m (+ 0 beat-num)) (play-chord (chord :C4 :major)))
  (at (m (+ 1 beat-num)) (play-chord (chord :G3 :major)))
  (at (m (+ 2 beat-num)) (play-chord (chord :A3 :minor)))
  (at (m (+ 3 beat-num)) (play-chord (chord :F3 :major)))
)

(chord-progression-beat metro (metro))

;; We can use recursion to keep playing the chord progression
(defn chord-progression-beat [m beat-num]
  (at (m (+ 0 beat-num)) (play-chord (chord :C4 :major)))
  (at (m (+ 4 beat-num)) (play-chord (chord :G3 :major)))
  (at (m (+ 8 beat-num)) (play-chord (chord :A3 :minor)))
  (at (m (+ 12 beat-num)) (play-chord (chord :F3 :major)))
  (at (m (+ 14 beat-num)) (play-chord (chord :F3 :major7)))
  (at (m (+ 15 beat-num)) (play-chord (chord :D3 :major)))
  (apply-at (m (+ 16 beat-num)) chord-progression-beat m (+ 16 beat-num) [])
)

(chord-progression-beat metro (metro))
(stop)
