// Compiled by ClojureScript 0.0-2202
goog.provide('overtone_playground.core');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('taoensso.sente');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs.core.match');
/**
* @param {...*} var_args
*/
overtone_playground.core.logf = (function() { 
var logf__delegate = function (fmt,xs){return cljs.core.prn.call(null,fmt,xs);
};
var logf = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return logf__delegate.call(this,fmt,xs);};
logf.cljs$lang$maxFixedArity = 1;
logf.cljs$lang$applyTo = (function (arglist__132287){
var fmt = cljs.core.first(arglist__132287);
var xs = cljs.core.rest(arglist__132287);
return logf__delegate(fmt,xs);
});
logf.cljs$core$IFn$_invoke$arity$variadic = logf__delegate;
return logf;
})()
;
overtone_playground.core.clamp = (function clamp(v,low,high){if((v < low))
{return low;
} else
{if((v > high))
{return high;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return v;
} else
{return null;
}
}
}
});
cljs.core.enable_console_print_BANG_.call(null);
React.initializeTouchEvents(true);
var map__132288_132289 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"ws","ws",1013908046)], null));var map__132288_132290__$1 = ((cljs.core.seq_QMARK_.call(null,map__132288_132289))?cljs.core.apply.call(null,cljs.core.hash_map,map__132288_132289):map__132288_132289);var state_132291 = cljs.core.get.call(null,map__132288_132290__$1,new cljs.core.Keyword(null,"state","state",1123661827));var send_fn_132292 = cljs.core.get.call(null,map__132288_132290__$1,new cljs.core.Keyword(null,"send-fn","send-fn",2993769631));var ch_recv_132293 = cljs.core.get.call(null,map__132288_132290__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",1704942016));var chsk_132294 = cljs.core.get.call(null,map__132288_132290__$1,new cljs.core.Keyword(null,"chsk","chsk",1016957167));overtone_playground.core.chsk = chsk_132294;
overtone_playground.core.ch_chsk = ch_recv_132293;
overtone_playground.core.chsk_send_BANG_ = send_fn_132292;
overtone_playground.core.chsk_state = state_132291;
overtone_playground.core.event_handler = (function event_handler(p__132295,_){var vec__132307 = p__132295;var id = cljs.core.nth.call(null,vec__132307,0,null);var data = cljs.core.nth.call(null,vec__132307,1,null);var ev = vec__132307;overtone_playground.core.logf.call(null,"Event: %s",ev);
try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{try{if((function (){var G__132316 = data;if(G__132316)
{var bit__4131__auto__ = (G__132316.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4131__auto__) || (G__132316.cljs$core$ILookup$))
{return true;
} else
{if((!G__132316.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__132316);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__132316);
}
})())
{try{var data_first_open_QMARK___132312 = cljs.core.get.call(null,data,new cljs.core.Keyword(null,"first-open?","first-open?",3183196490),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if((data_first_open_QMARK___132312 === true))
{return overtone_playground.core.logf.call(null,"Channel socket successfully established!");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e132317){if((e132317 instanceof Error))
{var e__5547__auto__ = e132317;if((e__5547__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__5547__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e132317;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e132315){if((e132315 instanceof Error))
{var e__5547__auto__ = e132315;if((e__5547__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__5547__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e132315;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e132313){if((e132313 instanceof Error))
{var e__5547__auto__ = e132313;if((e__5547__auto__ === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{var new_state = data;return overtone_playground.core.logf.call(null,"Chsk state change: %s",new_state);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308)))
{var payload = data;return overtone_playground.core.logf.call(null,"Push event from server: %s",payload);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e132314){if((e132314 instanceof Error))
{var e__5547__auto____$1 = e132314;if((e__5547__auto____$1 === cljs.core.match.backtrack))
{return overtone_playground.core.logf.call(null,"Unmatched event: %s",ev);
} else
{throw e__5547__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e132314;
} else
{return null;
}
}
}} else
{throw e__5547__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e132313;
} else
{return null;
}
}
}});
if(typeof overtone_playground.core.chsk_router !== 'undefined')
{} else
{overtone_playground.core.chsk_router = taoensso.sente.start_chsk_router_loop_BANG_.call(null,overtone_playground.core.event_handler,overtone_playground.core.ch_chsk);
}
overtone_playground.core.Topic = (function (){var obj132319 = {};return obj132319;
})();
overtone_playground.core.topic_STAR_ = (function topic_STAR_(p,t){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.overtone_playground$core$Topic$topic_STAR_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return p.overtone_playground$core$Topic$topic_STAR_$arity$2(p,t);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (overtone_playground.core.topic_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (overtone_playground.core.topic_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Topic.topic*",p);
}
}
})().call(null,p,t);
}
});
overtone_playground.core.topic_STAR_ = (function topic_STAR_(p){if((function (){var and__3469__auto__ = p;if(and__3469__auto__)
{return p.overtone_playground$core$Topic$topic_STAR_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return p.overtone_playground$core$Topic$topic_STAR_$arity$1(p);
} else
{var x__4108__auto__ = (((p == null))?null:p);return (function (){var or__3481__auto__ = (overtone_playground.core.topic_STAR_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (overtone_playground.core.topic_STAR_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Topic.topic*",p);
}
}
})().call(null,p);
}
});
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
overtone_playground.core.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3481__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3481__auto__,mults){
return (function (p1__132320_SHARP_){if(cljs.core.truth_(p1__132320_SHARP_.call(null,topic)))
{return p1__132320_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__132320_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3481__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof overtone_playground.core.t132443 !== 'undefined')
{} else
{
/**
* @constructor
*/
overtone_playground.core.t132443 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta132444){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta132444 = meta132444;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
overtone_playground.core.t132443.cljs$lang$type = true;
overtone_playground.core.t132443.cljs$lang$ctorStr = "overtone-playground.core/t132443";
overtone_playground.core.t132443.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"overtone-playground.core/t132443");
});})(mults,ensure_mult))
;
overtone_playground.core.t132443.prototype.cljs$core$async$Pub$ = true;
overtone_playground.core.t132443.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
overtone_playground.core.t132443.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
overtone_playground.core.t132443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
overtone_playground.core.t132443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
overtone_playground.core.t132443.prototype.overtone_playground$core$Topic$ = true;
overtone_playground.core.t132443.prototype.overtone_playground$core$Topic$topic_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic)))
{return true;
} else
{return false;
}
});})(mults,ensure_mult))
;
overtone_playground.core.t132443.prototype.overtone_playground$core$Topic$topic_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.keys.call(null,cljs.core.deref.call(null,self__.mults));
});})(mults,ensure_mult))
;
overtone_playground.core.t132443.prototype.cljs$core$async$Mux$ = true;
overtone_playground.core.t132443.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
overtone_playground.core.t132443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_132445){var self__ = this;
var _132445__$1 = this;return self__.meta132444;
});})(mults,ensure_mult))
;
overtone_playground.core.t132443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_132445,meta132444__$1){var self__ = this;
var _132445__$1 = this;return (new overtone_playground.core.t132443(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta132444__$1));
});})(mults,ensure_mult))
;
overtone_playground.core.__GT_t132443 = ((function (mults,ensure_mult){
return (function __GT_t132443(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta132444){return (new overtone_playground.core.t132443(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta132444));
});})(mults,ensure_mult))
;
}
return (new overtone_playground.core.t132443(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7494__auto___132565 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7494__auto___132565,mults,ensure_mult,p){
return (function (){var f__7495__auto__ = (function (){var switch__7479__auto__ = ((function (c__7494__auto___132565,mults,ensure_mult,p){
return (function (state_132517){var state_val_132518 = (state_132517[1]);if((state_val_132518 === 7))
{var inst_132513 = (state_132517[2]);var state_132517__$1 = state_132517;var statearr_132519_132566 = state_132517__$1;(statearr_132519_132566[2] = inst_132513);
(statearr_132519_132566[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 20))
{var state_132517__$1 = state_132517;var statearr_132520_132567 = state_132517__$1;(statearr_132520_132567[2] = null);
(statearr_132520_132567[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 1))
{var state_132517__$1 = state_132517;var statearr_132521_132568 = state_132517__$1;(statearr_132521_132568[2] = null);
(statearr_132521_132568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 24))
{var inst_132496 = (state_132517[7]);var inst_132505 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_132496);var state_132517__$1 = state_132517;var statearr_132522_132569 = state_132517__$1;(statearr_132522_132569[2] = inst_132505);
(statearr_132522_132569[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 4))
{var inst_132448 = (state_132517[8]);var inst_132448__$1 = (state_132517[2]);var inst_132449 = (inst_132448__$1 == null);var state_132517__$1 = (function (){var statearr_132523 = state_132517;(statearr_132523[8] = inst_132448__$1);
return statearr_132523;
})();if(cljs.core.truth_(inst_132449))
{var statearr_132524_132570 = state_132517__$1;(statearr_132524_132570[1] = 5);
} else
{var statearr_132525_132571 = state_132517__$1;(statearr_132525_132571[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 15))
{var inst_132490 = (state_132517[2]);var state_132517__$1 = state_132517;var statearr_132526_132572 = state_132517__$1;(statearr_132526_132572[2] = inst_132490);
(statearr_132526_132572[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 21))
{var inst_132510 = (state_132517[2]);var state_132517__$1 = (function (){var statearr_132527 = state_132517;(statearr_132527[9] = inst_132510);
return statearr_132527;
})();var statearr_132528_132573 = state_132517__$1;(statearr_132528_132573[2] = null);
(statearr_132528_132573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 13))
{var inst_132472 = (state_132517[10]);var inst_132474 = cljs.core.chunked_seq_QMARK_.call(null,inst_132472);var state_132517__$1 = state_132517;if(inst_132474)
{var statearr_132529_132574 = state_132517__$1;(statearr_132529_132574[1] = 16);
} else
{var statearr_132530_132575 = state_132517__$1;(statearr_132530_132575[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 22))
{var inst_132502 = (state_132517[2]);var state_132517__$1 = state_132517;if(cljs.core.truth_(inst_132502))
{var statearr_132531_132576 = state_132517__$1;(statearr_132531_132576[1] = 23);
} else
{var statearr_132532_132577 = state_132517__$1;(statearr_132532_132577[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 6))
{var inst_132496 = (state_132517[7]);var inst_132448 = (state_132517[8]);var inst_132498 = (state_132517[11]);var inst_132496__$1 = topic_fn.call(null,inst_132448);var inst_132497 = cljs.core.deref.call(null,mults);var inst_132498__$1 = cljs.core.get.call(null,inst_132497,inst_132496__$1);var state_132517__$1 = (function (){var statearr_132533 = state_132517;(statearr_132533[7] = inst_132496__$1);
(statearr_132533[11] = inst_132498__$1);
return statearr_132533;
})();if(cljs.core.truth_(inst_132498__$1))
{var statearr_132534_132578 = state_132517__$1;(statearr_132534_132578[1] = 19);
} else
{var statearr_132535_132579 = state_132517__$1;(statearr_132535_132579[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 25))
{var inst_132507 = (state_132517[2]);var state_132517__$1 = state_132517;var statearr_132536_132580 = state_132517__$1;(statearr_132536_132580[2] = inst_132507);
(statearr_132536_132580[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 17))
{var inst_132472 = (state_132517[10]);var inst_132481 = cljs.core.first.call(null,inst_132472);var inst_132482 = cljs.core.async.muxch_STAR_.call(null,inst_132481);var inst_132483 = cljs.core.async.close_BANG_.call(null,inst_132482);var inst_132484 = cljs.core.next.call(null,inst_132472);var inst_132458 = inst_132484;var inst_132459 = null;var inst_132460 = 0;var inst_132461 = 0;var state_132517__$1 = (function (){var statearr_132537 = state_132517;(statearr_132537[12] = inst_132458);
(statearr_132537[13] = inst_132483);
(statearr_132537[14] = inst_132461);
(statearr_132537[15] = inst_132460);
(statearr_132537[16] = inst_132459);
return statearr_132537;
})();var statearr_132538_132581 = state_132517__$1;(statearr_132538_132581[2] = null);
(statearr_132538_132581[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 3))
{var inst_132515 = (state_132517[2]);var state_132517__$1 = state_132517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132517__$1,inst_132515);
} else
{if((state_val_132518 === 12))
{var inst_132492 = (state_132517[2]);var state_132517__$1 = state_132517;var statearr_132539_132582 = state_132517__$1;(statearr_132539_132582[2] = inst_132492);
(statearr_132539_132582[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 2))
{var state_132517__$1 = state_132517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_132517__$1,4,ch);
} else
{if((state_val_132518 === 23))
{var state_132517__$1 = state_132517;var statearr_132540_132583 = state_132517__$1;(statearr_132540_132583[2] = null);
(statearr_132540_132583[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 19))
{var inst_132448 = (state_132517[8]);var inst_132498 = (state_132517[11]);var inst_132500 = cljs.core.async.muxch_STAR_.call(null,inst_132498);var state_132517__$1 = state_132517;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_132517__$1,22,inst_132500,inst_132448);
} else
{if((state_val_132518 === 11))
{var inst_132458 = (state_132517[12]);var inst_132472 = (state_132517[10]);var inst_132472__$1 = cljs.core.seq.call(null,inst_132458);var state_132517__$1 = (function (){var statearr_132541 = state_132517;(statearr_132541[10] = inst_132472__$1);
return statearr_132541;
})();if(inst_132472__$1)
{var statearr_132542_132584 = state_132517__$1;(statearr_132542_132584[1] = 13);
} else
{var statearr_132543_132585 = state_132517__$1;(statearr_132543_132585[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 9))
{var inst_132494 = (state_132517[2]);var state_132517__$1 = state_132517;var statearr_132544_132586 = state_132517__$1;(statearr_132544_132586[2] = inst_132494);
(statearr_132544_132586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 5))
{var inst_132455 = cljs.core.deref.call(null,mults);var inst_132456 = cljs.core.vals.call(null,inst_132455);var inst_132457 = cljs.core.seq.call(null,inst_132456);var inst_132458 = inst_132457;var inst_132459 = null;var inst_132460 = 0;var inst_132461 = 0;var state_132517__$1 = (function (){var statearr_132545 = state_132517;(statearr_132545[12] = inst_132458);
(statearr_132545[14] = inst_132461);
(statearr_132545[15] = inst_132460);
(statearr_132545[16] = inst_132459);
return statearr_132545;
})();var statearr_132546_132587 = state_132517__$1;(statearr_132546_132587[2] = null);
(statearr_132546_132587[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 14))
{var state_132517__$1 = state_132517;var statearr_132550_132588 = state_132517__$1;(statearr_132550_132588[2] = null);
(statearr_132550_132588[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 16))
{var inst_132472 = (state_132517[10]);var inst_132476 = cljs.core.chunk_first.call(null,inst_132472);var inst_132477 = cljs.core.chunk_rest.call(null,inst_132472);var inst_132478 = cljs.core.count.call(null,inst_132476);var inst_132458 = inst_132477;var inst_132459 = inst_132476;var inst_132460 = inst_132478;var inst_132461 = 0;var state_132517__$1 = (function (){var statearr_132551 = state_132517;(statearr_132551[12] = inst_132458);
(statearr_132551[14] = inst_132461);
(statearr_132551[15] = inst_132460);
(statearr_132551[16] = inst_132459);
return statearr_132551;
})();var statearr_132552_132589 = state_132517__$1;(statearr_132552_132589[2] = null);
(statearr_132552_132589[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 10))
{var inst_132458 = (state_132517[12]);var inst_132461 = (state_132517[14]);var inst_132460 = (state_132517[15]);var inst_132459 = (state_132517[16]);var inst_132466 = cljs.core._nth.call(null,inst_132459,inst_132461);var inst_132467 = cljs.core.async.muxch_STAR_.call(null,inst_132466);var inst_132468 = cljs.core.async.close_BANG_.call(null,inst_132467);var inst_132469 = (inst_132461 + 1);var tmp132547 = inst_132458;var tmp132548 = inst_132460;var tmp132549 = inst_132459;var inst_132458__$1 = tmp132547;var inst_132459__$1 = tmp132549;var inst_132460__$1 = tmp132548;var inst_132461__$1 = inst_132469;var state_132517__$1 = (function (){var statearr_132553 = state_132517;(statearr_132553[12] = inst_132458__$1);
(statearr_132553[17] = inst_132468);
(statearr_132553[14] = inst_132461__$1);
(statearr_132553[15] = inst_132460__$1);
(statearr_132553[16] = inst_132459__$1);
return statearr_132553;
})();var statearr_132554_132590 = state_132517__$1;(statearr_132554_132590[2] = null);
(statearr_132554_132590[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 18))
{var inst_132487 = (state_132517[2]);var state_132517__$1 = state_132517;var statearr_132555_132591 = state_132517__$1;(statearr_132555_132591[2] = inst_132487);
(statearr_132555_132591[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132518 === 8))
{var inst_132461 = (state_132517[14]);var inst_132460 = (state_132517[15]);var inst_132463 = (inst_132461 < inst_132460);var inst_132464 = inst_132463;var state_132517__$1 = state_132517;if(cljs.core.truth_(inst_132464))
{var statearr_132556_132592 = state_132517__$1;(statearr_132556_132592[1] = 10);
} else
{var statearr_132557_132593 = state_132517__$1;(statearr_132557_132593[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7494__auto___132565,mults,ensure_mult,p))
;return ((function (switch__7479__auto__,c__7494__auto___132565,mults,ensure_mult,p){
return (function() {
var state_machine__7480__auto__ = null;
var state_machine__7480__auto____0 = (function (){var statearr_132561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_132561[0] = state_machine__7480__auto__);
(statearr_132561[1] = 1);
return statearr_132561;
});
var state_machine__7480__auto____1 = (function (state_132517){while(true){
var ret_value__7481__auto__ = (function (){try{while(true){
var result__7482__auto__ = switch__7479__auto__.call(null,state_132517);if(cljs.core.keyword_identical_QMARK_.call(null,result__7482__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7482__auto__;
}
break;
}
}catch (e132562){if((e132562 instanceof Object))
{var ex__7483__auto__ = e132562;var statearr_132563_132594 = state_132517;(statearr_132563_132594[5] = ex__7483__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132517);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e132562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7481__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__132595 = state_132517;
state_132517 = G__132595;
continue;
}
} else
{return ret_value__7481__auto__;
}
break;
}
});
state_machine__7480__auto__ = function(state_132517){
switch(arguments.length){
case 0:
return state_machine__7480__auto____0.call(this);
case 1:
return state_machine__7480__auto____1.call(this,state_132517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7480__auto____0;
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7480__auto____1;
return state_machine__7480__auto__;
})()
;})(switch__7479__auto__,c__7494__auto___132565,mults,ensure_mult,p))
})();var state__7496__auto__ = (function (){var statearr_132564 = f__7495__auto__.call(null);(statearr_132564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7494__auto___132565);
return statearr_132564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7496__auto__);
});})(c__7494__auto___132565,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
TouchList.prototype.cljs$core$ISeqable$ = true;
TouchList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (l){var l__$1 = this;var iter__4198__auto__ = ((function (l__$1){
return (function iter__132596(s__132597){return (new cljs.core.LazySeq(null,((function (l__$1){
return (function (){var s__132597__$1 = s__132597;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__132597__$1);if(temp__4126__auto__)
{var s__132597__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__132597__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__132597__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__132599 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__132598 = 0;while(true){
if((i__132598 < size__4197__auto__))
{var i = cljs.core._nth.call(null,c__4196__auto__,i__132598);cljs.core.chunk_append.call(null,b__132599,(l__$1[i]));
{
var G__132600 = (i__132598 + 1);
i__132598 = G__132600;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__132599),iter__132596.call(null,cljs.core.chunk_rest.call(null,s__132597__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__132599),null);
}
} else
{var i = cljs.core.first.call(null,s__132597__$2);return cljs.core.cons.call(null,(l__$1[i]),iter__132596.call(null,cljs.core.rest.call(null,s__132597__$2)));
}
} else
{return null;
}
break;
}
});})(l__$1))
,null,null));
});})(l__$1))
;return iter__4198__auto__.call(null,cljs.core.range.call(null,l__$1.length));
});
overtone_playground.core.log = (function log(e){return console.log(e);
});
overtone_playground.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",1017410644),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",1017337751),"container",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"container","container",602947571),new cljs.core.Keyword(null,"x","x",1013904362),40,new cljs.core.Keyword(null,"y","y",1013904363),70,new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"nub-width","nub-width",4285208678),new cljs.core.Keyword(null,"nub-height","nub-height",3207099179),new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"val","val",1014020755),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"height","height",4087841945)],[100,"bar",50,40,60,0,new cljs.core.Keyword(null,"slider","slider",4409224275),100,300])], null)], null)], null)], null));
overtone_playground.core.update_opts = (function update_opts(p__132601,data){var map__132603 = p__132601;var map__132603__$1 = ((cljs.core.seq_QMARK_.call(null,map__132603))?cljs.core.apply.call(null,cljs.core.hash_map,map__132603):map__132603);var opts = map__132603__$1;var parent_pos = cljs.core.get.call(null,map__132603__$1,new cljs.core.Keyword(null,"parent-pos","parent-pos",768065059));return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path-chain","path-chain",746377867),cljs.core.conj.call(null,new cljs.core.Keyword(null,"path-chain","path-chain",746377867).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"parent-pos","parent-pos",768065059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(parent_pos) + new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"y","y",1013904363),(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(parent_pos) + new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(data))], null));
});
overtone_playground.core.component = (function (){var method_table__4339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4340__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4341__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4342__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4343__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("component",((function (method_table__4339__auto__,prefer_table__4340__auto__,method_cache__4341__auto__,cached_hierarchy__4342__auto__,hierarchy__4343__auto__){
return (function (spec,_,___$1){return new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(spec);
});})(method_table__4339__auto__,prefer_table__4340__auto__,method_cache__4341__auto__,cached_hierarchy__4342__auto__,hierarchy__4343__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4343__auto__,method_table__4339__auto__,prefer_table__4340__auto__,method_cache__4341__auto__,cached_hierarchy__4342__auto__));
})();
overtone_playground.core.draggable = (function draggable(data,owner,p__132604){var map__132701 = p__132604;var map__132701__$1 = ((cljs.core.seq_QMARK_.call(null,map__132701))?cljs.core.apply.call(null,cljs.core.hash_map,map__132701):map__132701);var opts = map__132701__$1;var parent_pos = cljs.core.get.call(null,map__132701__$1,new cljs.core.Keyword(null,"parent-pos","parent-pos",768065059));var path_chain = cljs.core.get.call(null,map__132701__$1,new cljs.core.Keyword(null,"path-chain","path-chain",746377867));var pub_sub = cljs.core.get.call(null,map__132701__$1,new cljs.core.Keyword(null,"pub-sub","pub-sub",776671970));var move = cljs.core.async.chan.call(null);var up = cljs.core.async.chan.call(null);var _ = (function (){var c__7494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7494__auto__,move,up,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (){var f__7495__auto__ = (function (){var switch__7479__auto__ = ((function (c__7494__auto__,move,up,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (state_132723){var state_val_132724 = (state_132723[1]);if((state_val_132724 === 7))
{var inst_132705 = (state_132723[2]);var inst_132706 = [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"args","args",1016906831)];var inst_132707 = cljs.core.deref.call(null,data);var inst_132708 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(inst_132707);var inst_132709 = [inst_132708,inst_132705];var inst_132710 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_132706,inst_132709);var inst_132711 = [new cljs.core.Keyword("osc","message","osc/message",1975944569),inst_132710];var inst_132712 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_132711,null));var inst_132713 = overtone_playground.core.chsk_send_BANG_.call(null,inst_132712);var inst_132714 = (function (){var move_e = inst_132705;return ((function (move_e,inst_132705,inst_132706,inst_132707,inst_132708,inst_132709,inst_132710,inst_132711,inst_132712,inst_132713,state_val_132724,c__7494__auto__,move,up,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (data__$1){return cljs.core.assoc.call(null,data__$1,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.apply.call(null,overtone_playground.core.clamp,(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(move_e) - new cljs.core.Keyword(null,"-off-x","-off-x",2407865087).cljs$core$IFn$_invoke$arity$1(data__$1)),new cljs.core.Keyword(null,"x-bounds","x-bounds",3892469020).cljs$core$IFn$_invoke$arity$1(data__$1)),new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.apply.call(null,overtone_playground.core.clamp,(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(move_e) - new cljs.core.Keyword(null,"-off-y","-off-y",2407865088).cljs$core$IFn$_invoke$arity$1(data__$1)),new cljs.core.Keyword(null,"y-bounds","y-bounds",1340312059).cljs$core$IFn$_invoke$arity$1(data__$1)));
});
;})(move_e,inst_132705,inst_132706,inst_132707,inst_132708,inst_132709,inst_132710,inst_132711,inst_132712,inst_132713,state_val_132724,c__7494__auto__,move,up,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
})();var inst_132715 = om.core.transact_BANG_.call(null,data,inst_132714);var state_132723__$1 = (function (){var statearr_132725 = state_132723;(statearr_132725[7] = inst_132715);
(statearr_132725[8] = inst_132713);
return statearr_132725;
})();var statearr_132726_132797 = state_132723__$1;(statearr_132726_132797[2] = null);
(statearr_132726_132797[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132724 === 6))
{var inst_132719 = (state_132723[2]);var state_132723__$1 = state_132723;var statearr_132727_132798 = state_132723__$1;(statearr_132727_132798[2] = inst_132719);
(statearr_132727_132798[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132724 === 5))
{var state_132723__$1 = state_132723;var statearr_132728_132799 = state_132723__$1;(statearr_132728_132799[2] = null);
(statearr_132728_132799[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132724 === 4))
{var state_132723__$1 = state_132723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_132723__$1,7,move);
} else
{if((state_val_132724 === 3))
{var inst_132721 = (state_132723[2]);var state_132723__$1 = state_132723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132723__$1,inst_132721);
} else
{if((state_val_132724 === 2))
{var state_132723__$1 = state_132723;if(true)
{var statearr_132729_132800 = state_132723__$1;(statearr_132729_132800[1] = 4);
} else
{var statearr_132730_132801 = state_132723__$1;(statearr_132730_132801[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132724 === 1))
{var state_132723__$1 = state_132723;var statearr_132731_132802 = state_132723__$1;(statearr_132731_132802[2] = null);
(statearr_132731_132802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7494__auto__,move,up,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
;return ((function (switch__7479__auto__,c__7494__auto__,move,up,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function() {
var state_machine__7480__auto__ = null;
var state_machine__7480__auto____0 = (function (){var statearr_132735 = [null,null,null,null,null,null,null,null,null];(statearr_132735[0] = state_machine__7480__auto__);
(statearr_132735[1] = 1);
return statearr_132735;
});
var state_machine__7480__auto____1 = (function (state_132723){while(true){
var ret_value__7481__auto__ = (function (){try{while(true){
var result__7482__auto__ = switch__7479__auto__.call(null,state_132723);if(cljs.core.keyword_identical_QMARK_.call(null,result__7482__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7482__auto__;
}
break;
}
}catch (e132736){if((e132736 instanceof Object))
{var ex__7483__auto__ = e132736;var statearr_132737_132803 = state_132723;(statearr_132737_132803[5] = ex__7483__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132723);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e132736;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7481__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__132804 = state_132723;
state_132723 = G__132804;
continue;
}
} else
{return ret_value__7481__auto__;
}
break;
}
});
state_machine__7480__auto__ = function(state_132723){
switch(arguments.length){
case 0:
return state_machine__7480__auto____0.call(this);
case 1:
return state_machine__7480__auto____1.call(this,state_132723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7480__auto____0;
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7480__auto____1;
return state_machine__7480__auto__;
})()
;})(switch__7479__auto__,c__7494__auto__,move,up,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
})();var state__7496__auto__ = (function (){var statearr_132738 = f__7495__auto__.call(null);(statearr_132738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7494__auto__);
return statearr_132738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7496__auto__);
});})(c__7494__auto__,move,up,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
);
return c__7494__auto__;
})();var ___$1 = (function (){var c__7494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7494__auto__,move,up,_,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (){var f__7495__auto__ = (function (){var switch__7479__auto__ = ((function (c__7494__auto__,move,up,_,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (state_132773){var state_val_132774 = (state_132773[1]);if((state_val_132774 === 7))
{var inst_132745 = (state_132773[7]);var inst_132742 = (state_132773[8]);var inst_132749 = (state_132773[9]);var inst_132748 = (state_132773[10]);var inst_132742__$1 = (state_132773[2]);var inst_132744 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(inst_132742__$1);var inst_132745__$1 = clojure.string.split.call(null,inst_132744,/#/);var inst_132746 = cljs.core.nth.call(null,inst_132745__$1,0,null);var inst_132747 = cljs.core.nth.call(null,inst_132745__$1,1,null);var inst_132748__$1 = om.core.get_state.call(null,owner);var inst_132749__$1 = new cljs.core.Keyword(null,"hello","hello",1113066564).cljs$core$IFn$_invoke$arity$1(inst_132748__$1);var state_132773__$1 = (function (){var statearr_132775 = state_132773;(statearr_132775[7] = inst_132745__$1);
(statearr_132775[8] = inst_132742__$1);
(statearr_132775[11] = inst_132746);
(statearr_132775[12] = inst_132747);
(statearr_132775[9] = inst_132749__$1);
(statearr_132775[10] = inst_132748__$1);
return statearr_132775;
})();if(cljs.core.truth_(inst_132749__$1))
{var statearr_132776_132805 = state_132773__$1;(statearr_132776_132805[1] = 8);
} else
{var statearr_132777_132806 = state_132773__$1;(statearr_132777_132806[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132774 === 1))
{var state_132773__$1 = state_132773;var statearr_132778_132807 = state_132773__$1;(statearr_132778_132807[2] = null);
(statearr_132778_132807[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132774 === 4))
{var state_132773__$1 = state_132773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_132773__$1,7,up);
} else
{if((state_val_132774 === 6))
{var inst_132769 = (state_132773[2]);var state_132773__$1 = state_132773;var statearr_132779_132808 = state_132773__$1;(statearr_132779_132808[2] = inst_132769);
(statearr_132779_132808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132774 === 3))
{var inst_132771 = (state_132773[2]);var state_132773__$1 = state_132773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132773__$1,inst_132771);
} else
{if((state_val_132774 === 2))
{var state_132773__$1 = state_132773;if(true)
{var statearr_132780_132809 = state_132773__$1;(statearr_132780_132809[1] = 4);
} else
{var statearr_132781_132810 = state_132773__$1;(statearr_132781_132810[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132774 === 9))
{var state_132773__$1 = state_132773;var statearr_132782_132811 = state_132773__$1;(statearr_132782_132811[2] = 0);
(statearr_132782_132811[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132774 === 5))
{var state_132773__$1 = state_132773;var statearr_132783_132812 = state_132773__$1;(statearr_132783_132812[2] = null);
(statearr_132783_132812[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132774 === 10))
{var inst_132745 = (state_132773[7]);var inst_132742 = (state_132773[8]);var inst_132746 = (state_132773[11]);var inst_132747 = (state_132773[12]);var inst_132748 = (state_132773[10]);var inst_132753 = (state_132773[2]);var inst_132754 = (inst_132753 + 1);var inst_132755 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"hello","hello",1113066564),inst_132754);var inst_132756 = cljs.core.async.unsub.call(null,pub_sub,new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856),move);var inst_132757 = cljs.core.async.unsub.call(null,pub_sub,new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154),up);var inst_132758 = [cljs.core.str("touchMove#"),cljs.core.str(inst_132747)].join('');var inst_132759 = cljs.core.keyword.call(null,inst_132758);var inst_132760 = cljs.core.async.unsub.call(null,pub_sub,inst_132759,move);var inst_132761 = [cljs.core.str("touchEnd#"),cljs.core.str(inst_132747)].join('');var inst_132762 = cljs.core.keyword.call(null,inst_132761);var inst_132763 = cljs.core.async.unsub.call(null,pub_sub,inst_132762,up);var inst_132764 = (function (){var s = inst_132748;var identifier = inst_132747;var ___$1 = inst_132746;var vec__132743 = inst_132745;var up_e = inst_132742;return ((function (s,identifier,___$1,vec__132743,up_e,inst_132745,inst_132742,inst_132746,inst_132747,inst_132748,inst_132753,inst_132754,inst_132755,inst_132756,inst_132757,inst_132758,inst_132759,inst_132760,inst_132761,inst_132762,inst_132763,state_val_132774,c__7494__auto__,move,up,_,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (d){return cljs.core.dissoc.call(null,d,new cljs.core.Keyword(null,"-active-touch","-active-touch",1032957399));
});
;})(s,identifier,___$1,vec__132743,up_e,inst_132745,inst_132742,inst_132746,inst_132747,inst_132748,inst_132753,inst_132754,inst_132755,inst_132756,inst_132757,inst_132758,inst_132759,inst_132760,inst_132761,inst_132762,inst_132763,state_val_132774,c__7494__auto__,move,up,_,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
})();var inst_132765 = om.core.transact_BANG_.call(null,data,inst_132764);var state_132773__$1 = (function (){var statearr_132784 = state_132773;(statearr_132784[13] = inst_132765);
(statearr_132784[14] = inst_132757);
(statearr_132784[15] = inst_132763);
(statearr_132784[16] = inst_132755);
(statearr_132784[17] = inst_132760);
(statearr_132784[18] = inst_132756);
return statearr_132784;
})();var statearr_132785_132813 = state_132773__$1;(statearr_132785_132813[2] = null);
(statearr_132785_132813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132774 === 8))
{var inst_132749 = (state_132773[9]);var state_132773__$1 = state_132773;var statearr_132786_132814 = state_132773__$1;(statearr_132786_132814[2] = inst_132749);
(statearr_132786_132814[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7494__auto__,move,up,_,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
;return ((function (switch__7479__auto__,c__7494__auto__,move,up,_,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function() {
var state_machine__7480__auto__ = null;
var state_machine__7480__auto____0 = (function (){var statearr_132790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_132790[0] = state_machine__7480__auto__);
(statearr_132790[1] = 1);
return statearr_132790;
});
var state_machine__7480__auto____1 = (function (state_132773){while(true){
var ret_value__7481__auto__ = (function (){try{while(true){
var result__7482__auto__ = switch__7479__auto__.call(null,state_132773);if(cljs.core.keyword_identical_QMARK_.call(null,result__7482__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7482__auto__;
}
break;
}
}catch (e132791){if((e132791 instanceof Object))
{var ex__7483__auto__ = e132791;var statearr_132792_132815 = state_132773;(statearr_132792_132815[5] = ex__7483__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132773);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e132791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7481__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__132816 = state_132773;
state_132773 = G__132816;
continue;
}
} else
{return ret_value__7481__auto__;
}
break;
}
});
state_machine__7480__auto__ = function(state_132773){
switch(arguments.length){
case 0:
return state_machine__7480__auto____0.call(this);
case 1:
return state_machine__7480__auto____1.call(this,state_132773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7480__auto____0;
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7480__auto____1;
return state_machine__7480__auto__;
})()
;})(switch__7479__auto__,c__7494__auto__,move,up,_,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
})();var state__7496__auto__ = (function (){var statearr_132793 = f__7495__auto__.call(null);(statearr_132793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7494__auto__);
return statearr_132793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7496__auto__);
});})(c__7494__auto__,move,up,_,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
);
return c__7494__auto__;
})();if(typeof overtone_playground.core.t132794 !== 'undefined')
{} else
{
/**
* @constructor
*/
overtone_playground.core.t132794 = (function (map__132701,owner,data,path_chain,_,p__132604,parent_pos,move,pub_sub,up,draggable,opts,meta132795){
this.map__132701 = map__132701;
this.owner = owner;
this.data = data;
this.path_chain = path_chain;
this._ = _;
this.p__132604 = p__132604;
this.parent_pos = parent_pos;
this.move = move;
this.pub_sub = pub_sub;
this.up = up;
this.draggable = draggable;
this.opts = opts;
this.meta132795 = meta132795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
overtone_playground.core.t132794.cljs$lang$type = true;
overtone_playground.core.t132794.cljs$lang$ctorStr = "overtone-playground.core/t132794";
overtone_playground.core.t132794.cljs$lang$ctorPrWriter = ((function (move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"overtone-playground.core/t132794");
});})(move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
;
overtone_playground.core.t132794.prototype.om$core$IRender$ = true;
overtone_playground.core.t132794.prototype.om$core$IRender$render$arity$1 = ((function (move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (___$3){var self__ = this;
var ___$4 = this;return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",1004015509),"nub",new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"WebkitTransform","WebkitTransform",3777910236),[cljs.core.str("matrix(1,0,0,1,"),cljs.core.str(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join('')], null),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),((function (___$4,move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (e){e.preventDefault();
if(cljs.core.truth_(new cljs.core.Keyword(null,"-active-touch","-active-touch",1032957399).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))))
{return null;
} else
{om.core.transact_BANG_.call(null,self__.data,((function (___$4,move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (pos){return cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"-off-x","-off-x",2407865087),((e["clientX"]) - new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(pos)),new cljs.core.Keyword(null,"-off-y","-off-y",2407865088),((e["clientY"]) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(pos)),new cljs.core.Keyword(null,"-active-touch","-active-touch",1032957399),new cljs.core.Keyword(null,"mouse","mouse",1117990935));
});})(___$4,move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
);
cljs.core.async.sub.call(null,self__.pub_sub,new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856),self__.move);
return cljs.core.async.sub.call(null,self__.pub_sub,new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154),self__.up);
}
});})(___$4,move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
,new cljs.core.Keyword(null,"onTouchStart","onTouchStart",2746349332),((function (___$4,move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (e){e.preventDefault();
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"goodbye","goodbye",1220926595),((function (){var or__3481__auto__ = new cljs.core.Keyword(null,"goodbye","goodbye",1220926595).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner));if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return 0;
}
})() + 1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"-active-touch","-active-touch",1032957399).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))))
{return null;
} else
{var touch = (e.targetTouches[0]);om.core.transact_BANG_.call(null,self__.data,((function (touch,___$4,move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (pos){return cljs.core.assoc.call(null,pos,new cljs.core.Keyword(null,"-off-x","-off-x",2407865087),((touch["clientX"]) - new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(pos)),new cljs.core.Keyword(null,"-off-y","-off-y",2407865088),((touch["clientY"]) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(pos)),new cljs.core.Keyword(null,"-active-touch","-active-touch",1032957399),touch.identifier);
});})(touch,___$4,move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
);
cljs.core.async.sub.call(null,self__.pub_sub,cljs.core.keyword.call(null,[cljs.core.str("touchMove#"),cljs.core.str([cljs.core.str(touch.identifier)].join(''))].join('')),self__.move);
return cljs.core.async.sub.call(null,self__.pub_sub,cljs.core.keyword.call(null,[cljs.core.str("touchEnd#"),cljs.core.str([cljs.core.str(touch.identifier)].join(''))].join('')),self__.up);
}
});})(___$4,move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
], null)),"");
});})(move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
;
overtone_playground.core.t132794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (_132796){var self__ = this;
var _132796__$1 = this;return self__.meta132795;
});})(move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
;
overtone_playground.core.t132794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function (_132796,meta132795__$1){var self__ = this;
var _132796__$1 = this;return (new overtone_playground.core.t132794(self__.map__132701,self__.owner,self__.data,self__.path_chain,self__._,self__.p__132604,self__.parent_pos,self__.move,self__.pub_sub,self__.up,self__.draggable,self__.opts,meta132795__$1));
});})(move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
;
overtone_playground.core.__GT_t132794 = ((function (move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub){
return (function __GT_t132794(map__132701__$2,owner__$1,data__$1,path_chain__$1,___$2,p__132604__$1,parent_pos__$1,move__$1,pub_sub__$1,up__$1,draggable__$1,opts__$1,meta132795){return (new overtone_playground.core.t132794(map__132701__$2,owner__$1,data__$1,path_chain__$1,___$2,p__132604__$1,parent_pos__$1,move__$1,pub_sub__$1,up__$1,draggable__$1,opts__$1,meta132795));
});})(move,up,_,___$1,map__132701,map__132701__$1,opts,parent_pos,path_chain,pub_sub))
;
}
return (new overtone_playground.core.t132794(map__132701__$1,owner,data,path_chain,___$1,p__132604,parent_pos,move,pub_sub,up,draggable,opts,null));
});
cljs.core._add_method.call(null,overtone_playground.core.component,new cljs.core.Keyword(null,"draggable","draggable",709423359),(function (data,owner,opts){return overtone_playground.core.draggable.call(null,data,owner,opts);
}));
overtone_playground.core.container = (function container(data,owner,p__132817){var map__132822 = p__132817;var map__132822__$1 = ((cljs.core.seq_QMARK_.call(null,map__132822))?cljs.core.apply.call(null,cljs.core.hash_map,map__132822):map__132822);var opts = map__132822__$1;var parent_pos = cljs.core.get.call(null,map__132822__$1,new cljs.core.Keyword(null,"parent-pos","parent-pos",768065059));var path_chain = cljs.core.get.call(null,map__132822__$1,new cljs.core.Keyword(null,"path-chain","path-chain",746377867));var pub_sub = cljs.core.get.call(null,map__132822__$1,new cljs.core.Keyword(null,"pub-sub","pub-sub",776671970));if(typeof overtone_playground.core.t132823 !== 'undefined')
{} else
{
/**
* @constructor
*/
overtone_playground.core.t132823 = (function (pub_sub,path_chain,parent_pos,opts,map__132822,p__132817,owner,data,container,meta132824){
this.pub_sub = pub_sub;
this.path_chain = path_chain;
this.parent_pos = parent_pos;
this.opts = opts;
this.map__132822 = map__132822;
this.p__132817 = p__132817;
this.owner = owner;
this.data = data;
this.container = container;
this.meta132824 = meta132824;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
overtone_playground.core.t132823.cljs$lang$type = true;
overtone_playground.core.t132823.cljs$lang$ctorStr = "overtone-playground.core/t132823";
overtone_playground.core.t132823.cljs$lang$ctorPrWriter = ((function (map__132822,map__132822__$1,opts,parent_pos,path_chain,pub_sub){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"overtone-playground.core/t132823");
});})(map__132822,map__132822__$1,opts,parent_pos,path_chain,pub_sub))
;
overtone_playground.core.t132823.prototype.om$core$IRender$ = true;
overtone_playground.core.t132823.prototype.om$core$IRender$render$arity$1 = ((function (map__132822,map__132822__$1,opts,parent_pos,path_chain,pub_sub){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),(function (){var or__3481__auto__ = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return "container";
}
})(),new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"WebkitTransform","WebkitTransform",3777910236),[cljs.core.str("matrix(1,0,0,1,"),cljs.core.str(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join('')], null)], null)),cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",1761709211),"relative"], null)], null)),om.core.build_all.call(null,overtone_playground.core.component,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),overtone_playground.core.update_opts.call(null,self__.opts,self__.data)], null))));
});})(map__132822,map__132822__$1,opts,parent_pos,path_chain,pub_sub))
;
overtone_playground.core.t132823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__132822,map__132822__$1,opts,parent_pos,path_chain,pub_sub){
return (function (_132825){var self__ = this;
var _132825__$1 = this;return self__.meta132824;
});})(map__132822,map__132822__$1,opts,parent_pos,path_chain,pub_sub))
;
overtone_playground.core.t132823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__132822,map__132822__$1,opts,parent_pos,path_chain,pub_sub){
return (function (_132825,meta132824__$1){var self__ = this;
var _132825__$1 = this;return (new overtone_playground.core.t132823(self__.pub_sub,self__.path_chain,self__.parent_pos,self__.opts,self__.map__132822,self__.p__132817,self__.owner,self__.data,self__.container,meta132824__$1));
});})(map__132822,map__132822__$1,opts,parent_pos,path_chain,pub_sub))
;
overtone_playground.core.__GT_t132823 = ((function (map__132822,map__132822__$1,opts,parent_pos,path_chain,pub_sub){
return (function __GT_t132823(pub_sub__$1,path_chain__$1,parent_pos__$1,opts__$1,map__132822__$2,p__132817__$1,owner__$1,data__$1,container__$1,meta132824){return (new overtone_playground.core.t132823(pub_sub__$1,path_chain__$1,parent_pos__$1,opts__$1,map__132822__$2,p__132817__$1,owner__$1,data__$1,container__$1,meta132824));
});})(map__132822,map__132822__$1,opts,parent_pos,path_chain,pub_sub))
;
}
return (new overtone_playground.core.t132823(pub_sub,path_chain,parent_pos,opts,map__132822__$1,p__132817,owner,data,container,null));
});
cljs.core._add_method.call(null,overtone_playground.core.component,new cljs.core.Keyword(null,"container","container",602947571),(function (data,owner,opts){return overtone_playground.core.container.call(null,data,owner,opts);
}));
overtone_playground.core.slider = (function slider(data,owner,p__132826){var map__132912 = p__132826;var map__132912__$1 = ((cljs.core.seq_QMARK_.call(null,map__132912))?cljs.core.apply.call(null,cljs.core.hash_map,map__132912):map__132912);var opts = map__132912__$1;var parent_pos = cljs.core.get.call(null,map__132912__$1,new cljs.core.Keyword(null,"parent-pos","parent-pos",768065059));var path_chain = cljs.core.get.call(null,map__132912__$1,new cljs.core.Keyword(null,"path-chain","path-chain",746377867));var pub_sub = cljs.core.get.call(null,map__132912__$1,new cljs.core.Keyword(null,"pub-sub","pub-sub",776671970));var move = cljs.core.async.chan.call(null);var up = cljs.core.async.chan.call(null);var _ = (function (){var c__7494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7494__auto__,move,up,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function (){var f__7495__auto__ = (function (){var switch__7479__auto__ = ((function (c__7494__auto__,move,up,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function (state_132937){var state_val_132938 = (state_132937[1]);if((state_val_132938 === 7))
{var inst_132916 = (state_132937[2]);var inst_132917 = (function (){var move_e = inst_132916;return ((function (move_e,inst_132916,state_val_132938,c__7494__auto__,move,up,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function (data__$1){return cljs.core.assoc.call(null,data__$1,new cljs.core.Keyword(null,"val","val",1014020755),Math.abs(((overtone_playground.core.clamp.call(null,(((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(move_e) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(parent_pos)) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(data__$1)) - (new cljs.core.Keyword(null,"nub-height","nub-height",3207099179).cljs$core$IFn$_invoke$arity$1(data__$1) / 2)),0,(new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(data__$1) - new cljs.core.Keyword(null,"nub-height","nub-height",3207099179).cljs$core$IFn$_invoke$arity$1(data__$1))) / (new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(data__$1) - new cljs.core.Keyword(null,"nub-height","nub-height",3207099179).cljs$core$IFn$_invoke$arity$1(data__$1))) - 1)));
});
;})(move_e,inst_132916,state_val_132938,c__7494__auto__,move,up,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
})();var inst_132918 = om.core.transact_BANG_.call(null,data,inst_132917);var inst_132919 = [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"args","args",1016906831)];var inst_132920 = cljs.core.deref.call(null,data);var inst_132921 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(inst_132920);var inst_132922 = cljs.core.deref.call(null,data);var inst_132923 = new cljs.core.Keyword(null,"val","val",1014020755).cljs$core$IFn$_invoke$arity$1(inst_132922);var inst_132924 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_132923);var inst_132925 = [inst_132921,inst_132924];var inst_132926 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_132919,inst_132925);var inst_132927 = [new cljs.core.Keyword("osc","message","osc/message",1975944569),inst_132926];var inst_132928 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_132927,null));var inst_132929 = overtone_playground.core.chsk_send_BANG_.call(null,inst_132928);var state_132937__$1 = (function (){var statearr_132939 = state_132937;(statearr_132939[7] = inst_132929);
(statearr_132939[8] = inst_132918);
return statearr_132939;
})();var statearr_132940_132997 = state_132937__$1;(statearr_132940_132997[2] = null);
(statearr_132940_132997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132938 === 6))
{var inst_132933 = (state_132937[2]);var state_132937__$1 = state_132937;var statearr_132941_132998 = state_132937__$1;(statearr_132941_132998[2] = inst_132933);
(statearr_132941_132998[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132938 === 5))
{var state_132937__$1 = state_132937;var statearr_132942_132999 = state_132937__$1;(statearr_132942_132999[2] = null);
(statearr_132942_132999[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132938 === 4))
{var state_132937__$1 = state_132937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_132937__$1,7,move);
} else
{if((state_val_132938 === 3))
{var inst_132935 = (state_132937[2]);var state_132937__$1 = state_132937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132937__$1,inst_132935);
} else
{if((state_val_132938 === 2))
{var state_132937__$1 = state_132937;if(true)
{var statearr_132943_133000 = state_132937__$1;(statearr_132943_133000[1] = 4);
} else
{var statearr_132944_133001 = state_132937__$1;(statearr_132944_133001[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132938 === 1))
{var state_132937__$1 = state_132937;var statearr_132945_133002 = state_132937__$1;(statearr_132945_133002[2] = null);
(statearr_132945_133002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7494__auto__,move,up,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
;return ((function (switch__7479__auto__,c__7494__auto__,move,up,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function() {
var state_machine__7480__auto__ = null;
var state_machine__7480__auto____0 = (function (){var statearr_132949 = [null,null,null,null,null,null,null,null,null];(statearr_132949[0] = state_machine__7480__auto__);
(statearr_132949[1] = 1);
return statearr_132949;
});
var state_machine__7480__auto____1 = (function (state_132937){while(true){
var ret_value__7481__auto__ = (function (){try{while(true){
var result__7482__auto__ = switch__7479__auto__.call(null,state_132937);if(cljs.core.keyword_identical_QMARK_.call(null,result__7482__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7482__auto__;
}
break;
}
}catch (e132950){if((e132950 instanceof Object))
{var ex__7483__auto__ = e132950;var statearr_132951_133003 = state_132937;(statearr_132951_133003[5] = ex__7483__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132937);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e132950;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7481__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__133004 = state_132937;
state_132937 = G__133004;
continue;
}
} else
{return ret_value__7481__auto__;
}
break;
}
});
state_machine__7480__auto__ = function(state_132937){
switch(arguments.length){
case 0:
return state_machine__7480__auto____0.call(this);
case 1:
return state_machine__7480__auto____1.call(this,state_132937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7480__auto____0;
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7480__auto____1;
return state_machine__7480__auto__;
})()
;})(switch__7479__auto__,c__7494__auto__,move,up,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
})();var state__7496__auto__ = (function (){var statearr_132952 = f__7495__auto__.call(null);(statearr_132952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7494__auto__);
return statearr_132952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7496__auto__);
});})(c__7494__auto__,move,up,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
);
return c__7494__auto__;
})();var ___$1 = (function (){var c__7494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7494__auto__,move,up,_,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function (){var f__7495__auto__ = (function (){var switch__7479__auto__ = ((function (c__7494__auto__,move,up,_,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function (state_132978){var state_val_132979 = (state_132978[1]);if((state_val_132979 === 7))
{var inst_132956 = (state_132978[2]);var inst_132958 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(inst_132956);var inst_132959 = clojure.string.split.call(null,inst_132958,/#/);var inst_132960 = cljs.core.nth.call(null,inst_132959,0,null);var inst_132961 = cljs.core.nth.call(null,inst_132959,1,null);var inst_132962 = cljs.core.async.unsub.call(null,pub_sub,new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856),move);var inst_132963 = cljs.core.async.unsub.call(null,pub_sub,new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154),up);var inst_132964 = [cljs.core.str("touchMove#"),cljs.core.str(inst_132961)].join('');var inst_132965 = cljs.core.keyword.call(null,inst_132964);var inst_132966 = cljs.core.async.unsub.call(null,pub_sub,inst_132965,move);var inst_132967 = [cljs.core.str("touchEnd#"),cljs.core.str(inst_132961)].join('');var inst_132968 = cljs.core.keyword.call(null,inst_132967);var inst_132969 = cljs.core.async.unsub.call(null,pub_sub,inst_132968,up);var inst_132970 = om.core.set_state_BANG_.call(null,owner,cljs.core.PersistentHashMap.EMPTY);var state_132978__$1 = (function (){var statearr_132980 = state_132978;(statearr_132980[7] = inst_132969);
(statearr_132980[8] = inst_132963);
(statearr_132980[9] = inst_132962);
(statearr_132980[10] = inst_132966);
(statearr_132980[11] = inst_132960);
(statearr_132980[12] = inst_132970);
return statearr_132980;
})();var statearr_132981_133005 = state_132978__$1;(statearr_132981_133005[2] = null);
(statearr_132981_133005[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132979 === 6))
{var inst_132974 = (state_132978[2]);var state_132978__$1 = state_132978;var statearr_132982_133006 = state_132978__$1;(statearr_132982_133006[2] = inst_132974);
(statearr_132982_133006[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132979 === 5))
{var state_132978__$1 = state_132978;var statearr_132983_133007 = state_132978__$1;(statearr_132983_133007[2] = null);
(statearr_132983_133007[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132979 === 4))
{var state_132978__$1 = state_132978;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_132978__$1,7,up);
} else
{if((state_val_132979 === 3))
{var inst_132976 = (state_132978[2]);var state_132978__$1 = state_132978;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_132978__$1,inst_132976);
} else
{if((state_val_132979 === 2))
{var state_132978__$1 = state_132978;if(true)
{var statearr_132984_133008 = state_132978__$1;(statearr_132984_133008[1] = 4);
} else
{var statearr_132985_133009 = state_132978__$1;(statearr_132985_133009[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_132979 === 1))
{var state_132978__$1 = state_132978;var statearr_132986_133010 = state_132978__$1;(statearr_132986_133010[2] = null);
(statearr_132986_133010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7494__auto__,move,up,_,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
;return ((function (switch__7479__auto__,c__7494__auto__,move,up,_,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function() {
var state_machine__7480__auto__ = null;
var state_machine__7480__auto____0 = (function (){var statearr_132990 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_132990[0] = state_machine__7480__auto__);
(statearr_132990[1] = 1);
return statearr_132990;
});
var state_machine__7480__auto____1 = (function (state_132978){while(true){
var ret_value__7481__auto__ = (function (){try{while(true){
var result__7482__auto__ = switch__7479__auto__.call(null,state_132978);if(cljs.core.keyword_identical_QMARK_.call(null,result__7482__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7482__auto__;
}
break;
}
}catch (e132991){if((e132991 instanceof Object))
{var ex__7483__auto__ = e132991;var statearr_132992_133011 = state_132978;(statearr_132992_133011[5] = ex__7483__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_132978);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e132991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7481__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__133012 = state_132978;
state_132978 = G__133012;
continue;
}
} else
{return ret_value__7481__auto__;
}
break;
}
});
state_machine__7480__auto__ = function(state_132978){
switch(arguments.length){
case 0:
return state_machine__7480__auto____0.call(this);
case 1:
return state_machine__7480__auto____1.call(this,state_132978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7480__auto____0;
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7480__auto____1;
return state_machine__7480__auto__;
})()
;})(switch__7479__auto__,c__7494__auto__,move,up,_,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
})();var state__7496__auto__ = (function (){var statearr_132993 = f__7495__auto__.call(null);(statearr_132993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7494__auto__);
return statearr_132993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7496__auto__);
});})(c__7494__auto__,move,up,_,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
);
return c__7494__auto__;
})();if(typeof overtone_playground.core.t132994 !== 'undefined')
{} else
{
/**
* @constructor
*/
overtone_playground.core.t132994 = (function (owner,data,slider,path_chain,_,p__132826,parent_pos,map__132912,move,pub_sub,up,opts,meta132995){
this.owner = owner;
this.data = data;
this.slider = slider;
this.path_chain = path_chain;
this._ = _;
this.p__132826 = p__132826;
this.parent_pos = parent_pos;
this.map__132912 = map__132912;
this.move = move;
this.pub_sub = pub_sub;
this.up = up;
this.opts = opts;
this.meta132995 = meta132995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
overtone_playground.core.t132994.cljs$lang$type = true;
overtone_playground.core.t132994.cljs$lang$ctorStr = "overtone-playground.core/t132994";
overtone_playground.core.t132994.cljs$lang$ctorPrWriter = ((function (move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"overtone-playground.core/t132994");
});})(move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
;
overtone_playground.core.t132994.prototype.om$core$IRenderState$ = true;
overtone_playground.core.t132994.prototype.om$core$IRenderState$render_state$arity$2 = ((function (move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function (___$3,state){var self__ = this;
var ___$4 = this;return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",1004015509),(function (){var or__3481__auto__ = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return "slider";
}
})(),new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",1761709211),"absolute",new cljs.core.Keyword(null,"WebkitTransform","WebkitTransform",3777910236),[cljs.core.str("matrix(1,0,0,1,"),cljs.core.str(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"width","width",1127031096),[cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",4087841945),[cljs.core.str(new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("px")].join('')], null),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),((function (___$4,move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function (e){e.preventDefault();
if(cljs.core.truth_(new cljs.core.Keyword(null,"active-touch","active-touch",1351190826).cljs$core$IFn$_invoke$arity$1(state)))
{return null;
} else
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"off-y","off-y",1119553293),((e["clientY"]) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))),new cljs.core.Keyword(null,"active-touch","active-touch",1351190826),new cljs.core.Keyword(null,"mouse","mouse",1117990935)], null));
cljs.core.async.sub.call(null,self__.pub_sub,new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856),self__.move);
return cljs.core.async.sub.call(null,self__.pub_sub,new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154),self__.up);
}
});})(___$4,move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
,new cljs.core.Keyword(null,"onTouchStart","onTouchStart",2746349332),((function (___$4,move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function (e){e.preventDefault();
if(cljs.core.truth_(new cljs.core.Keyword(null,"active-touch","active-touch",1351190826).cljs$core$IFn$_invoke$arity$1(state)))
{return null;
} else
{var touch = (e.targetTouches[0]);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"off-y","off-y",1119553293),((touch["clientY"]) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))),new cljs.core.Keyword(null,"active-touch","active-touch",1351190826),touch.identifier], null));
cljs.core.async.sub.call(null,self__.pub_sub,cljs.core.keyword.call(null,[cljs.core.str("touchMove#"),cljs.core.str([cljs.core.str(touch.identifier)].join(''))].join('')),self__.move);
return cljs.core.async.sub.call(null,self__.pub_sub,cljs.core.keyword.call(null,[cljs.core.str("touchEnd#"),cljs.core.str([cljs.core.str(touch.identifier)].join(''))].join('')),self__.up);
}
});})(___$4,move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
], null)),React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"slider-nub",new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),[cljs.core.str(new cljs.core.Keyword(null,"nub-width","nub-width",4285208678).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",4087841945),[cljs.core.str(new cljs.core.Keyword(null,"nub-height","nub-height",3207099179).cljs$core$IFn$_invoke$arity$1(self__.data)),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"WebkitTransform","WebkitTransform",3777910236),[cljs.core.str("matrix(1,0,0,1,"),cljs.core.str(((new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(self__.data) - new cljs.core.Keyword(null,"nub-width","nub-width",4285208678).cljs$core$IFn$_invoke$arity$1(self__.data)) / 2)),cljs.core.str(","),cljs.core.str((Math.abs((new cljs.core.Keyword(null,"val","val",1014020755).cljs$core$IFn$_invoke$arity$1(self__.data) - 1)) * (new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(self__.data) - new cljs.core.Keyword(null,"nub-height","nub-height",3207099179).cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.str(")")].join('')], null)], null))));
});})(move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
;
overtone_playground.core.t132994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function (_132996){var self__ = this;
var _132996__$1 = this;return self__.meta132995;
});})(move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
;
overtone_playground.core.t132994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function (_132996,meta132995__$1){var self__ = this;
var _132996__$1 = this;return (new overtone_playground.core.t132994(self__.owner,self__.data,self__.slider,self__.path_chain,self__._,self__.p__132826,self__.parent_pos,self__.map__132912,self__.move,self__.pub_sub,self__.up,self__.opts,meta132995__$1));
});})(move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
;
overtone_playground.core.__GT_t132994 = ((function (move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub){
return (function __GT_t132994(owner__$1,data__$1,slider__$1,path_chain__$1,___$2,p__132826__$1,parent_pos__$1,map__132912__$2,move__$1,pub_sub__$1,up__$1,opts__$1,meta132995){return (new overtone_playground.core.t132994(owner__$1,data__$1,slider__$1,path_chain__$1,___$2,p__132826__$1,parent_pos__$1,map__132912__$2,move__$1,pub_sub__$1,up__$1,opts__$1,meta132995));
});})(move,up,_,___$1,map__132912,map__132912__$1,opts,parent_pos,path_chain,pub_sub))
;
}
return (new overtone_playground.core.t132994(owner,data,slider,path_chain,___$1,p__132826,parent_pos,map__132912__$1,move,pub_sub,up,opts,null));
});
cljs.core._add_method.call(null,overtone_playground.core.component,new cljs.core.Keyword(null,"slider","slider",4409224275),(function (data,owner,opts){return overtone_playground.core.slider.call(null,data,owner,opts);
}));
overtone_playground.core.topic_fn = (function topic_fn(v){return cljs.core.keyword.call(null,new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(v));
});
overtone_playground.core.extract_mouse_event = (function extract_mouse_event(e,type){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"x","x",1013904362),(e["clientX"]),new cljs.core.Keyword(null,"y","y",1013904363),(e["clientY"]),new cljs.core.Keyword(null,"time","time",1017464383),(e["timeStamp"])], null);
});
overtone_playground.core.extract_touch_event = (function extract_touch_event(e,type,time){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,type)),cljs.core.str("#"),cljs.core.str([cljs.core.str((e["identifier"]))].join(''))].join('')),new cljs.core.Keyword(null,"x","x",1013904362),(e["clientX"]),new cljs.core.Keyword(null,"y","y",1013904363),(e["clientY"]),new cljs.core.Keyword(null,"time","time",1017464383),time], null);
});
overtone_playground.core.stage = (function stage(data,owner){if(typeof overtone_playground.core.t133022 !== 'undefined')
{} else
{
/**
* @constructor
*/
overtone_playground.core.t133022 = (function (owner,data,stage,meta133023){
this.owner = owner;
this.data = data;
this.stage = stage;
this.meta133023 = meta133023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
overtone_playground.core.t133022.cljs$lang$type = true;
overtone_playground.core.t133022.cljs$lang$ctorStr = "overtone-playground.core/t133022";
overtone_playground.core.t133022.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"overtone-playground.core/t133022");
});
overtone_playground.core.t133022.prototype.om$core$IRenderState$ = true;
overtone_playground.core.t133022.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__133025){var self__ = this;
var map__133026 = p__133025;var map__133026__$1 = ((cljs.core.seq_QMARK_.call(null,map__133026))?cljs.core.apply.call(null,cljs.core.hash_map,map__133026):map__133026);var in$ = cljs.core.get.call(null,map__133026__$1,new cljs.core.Keyword(null,"in","in",1013907607));var out = cljs.core.get.call(null,map__133026__$1,new cljs.core.Keyword(null,"out","out",1014014656));var ___$1 = this;var put = ((function (___$1,map__133026,map__133026__$1,in$,out){
return (function (e){return cljs.core.async.put_BANG_.call(null,in$,e);
});})(___$1,map__133026,map__133026__$1,in$,out))
;var on_touch = ((function (put,___$1,map__133026,map__133026__$1,in$,out){
return (function (type,e){e.preventDefault();
var time = (e["timeStamp"]);var seq__133027 = cljs.core.seq.call(null,(e["changedTouches"]));var chunk__133028 = null;var count__133029 = 0;var i__133030 = 0;while(true){
if((i__133030 < count__133029))
{var touch = cljs.core._nth.call(null,chunk__133028,i__133030);put.call(null,overtone_playground.core.extract_touch_event.call(null,touch,type,time));
{
var G__133031 = seq__133027;
var G__133032 = chunk__133028;
var G__133033 = count__133029;
var G__133034 = (i__133030 + 1);
seq__133027 = G__133031;
chunk__133028 = G__133032;
count__133029 = G__133033;
i__133030 = G__133034;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__133027);if(temp__4126__auto__)
{var seq__133027__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__133027__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__133027__$1);{
var G__133035 = cljs.core.chunk_rest.call(null,seq__133027__$1);
var G__133036 = c__4229__auto__;
var G__133037 = cljs.core.count.call(null,c__4229__auto__);
var G__133038 = 0;
seq__133027 = G__133035;
chunk__133028 = G__133036;
count__133029 = G__133037;
i__133030 = G__133038;
continue;
}
} else
{var touch = cljs.core.first.call(null,seq__133027__$1);put.call(null,overtone_playground.core.extract_touch_event.call(null,touch,type,time));
{
var G__133039 = cljs.core.next.call(null,seq__133027__$1);
var G__133040 = null;
var G__133041 = 0;
var G__133042 = 0;
seq__133027 = G__133039;
chunk__133028 = G__133040;
count__133029 = G__133041;
i__133030 = G__133042;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(put,___$1,map__133026,map__133026__$1,in$,out))
;return React.DOM.div({"onTouchCancel": cljs.core.partial.call(null,on_touch,new cljs.core.Keyword(null,"touchEnd","touchEnd",4489308302)), "onTouchEnd": cljs.core.partial.call(null,on_touch,new cljs.core.Keyword(null,"touchEnd","touchEnd",4489308302)), "onTouchMove": cljs.core.partial.call(null,on_touch,new cljs.core.Keyword(null,"touchMove","touchMove",1377487650)), "onMouseUp": ((function (put,on_touch,___$1,map__133026,map__133026__$1,in$,out){
return (function (e){e.preventDefault();
return put.call(null,overtone_playground.core.extract_mouse_event.call(null,e,new cljs.core.Keyword(null,"mouseUp","mouseUp",2256971154)));
});})(put,on_touch,___$1,map__133026,map__133026__$1,in$,out))
, "onMouseMove": ((function (put,on_touch,___$1,map__133026,map__133026__$1,in$,out){
return (function (e){e.preventDefault();
return put.call(null,overtone_playground.core.extract_mouse_event.call(null,e,new cljs.core.Keyword(null,"mouseMove","mouseMove",1600062856)));
});})(put,on_touch,___$1,map__133026,map__133026__$1,in$,out))
, "className": "window"},cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,overtone_playground.core.component,new cljs.core.Keyword(null,"root","root",1017410644).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pub-sub","pub-sub",776671970),out,new cljs.core.Keyword(null,"path-chain","path-chain",746377867),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"parent-pos","parent-pos",768065059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0], null)], null)], null))));
});
overtone_playground.core.t133022.prototype.om$core$IWillMount$ = true;
overtone_playground.core.t133022.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var in$ = cljs.core.async.chan.call(null);var out = overtone_playground.core.pub.call(null,in$,overtone_playground.core.topic_fn);return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",1013907607),in$,new cljs.core.Keyword(null,"out","out",1014014656),out], null));
});
overtone_playground.core.t133022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133024){var self__ = this;
var _133024__$1 = this;return self__.meta133023;
});
overtone_playground.core.t133022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133024,meta133023__$1){var self__ = this;
var _133024__$1 = this;return (new overtone_playground.core.t133022(self__.owner,self__.data,self__.stage,meta133023__$1));
});
overtone_playground.core.__GT_t133022 = (function __GT_t133022(owner__$1,data__$1,stage__$1,meta133023){return (new overtone_playground.core.t133022(owner__$1,data__$1,stage__$1,meta133023));
});
}
return (new overtone_playground.core.t133022(owner,data,stage,null));
});
overtone_playground.core.clickable = (function clickable(data,owner){if(typeof overtone_playground.core.t133046 !== 'undefined')
{} else
{
/**
* @constructor
*/
overtone_playground.core.t133046 = (function (owner,data,clickable,meta133047){
this.owner = owner;
this.data = data;
this.clickable = clickable;
this.meta133047 = meta133047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
overtone_playground.core.t133046.cljs$lang$type = true;
overtone_playground.core.t133046.cljs$lang$ctorStr = "overtone-playground.core/t133046";
overtone_playground.core.t133046.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"overtone-playground.core/t133046");
});
overtone_playground.core.t133046.prototype.om$core$IRender$ = true;
overtone_playground.core.t133046.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.button({"onClick": ((function (___$1){
return (function (){return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"count","count",1108755585),cljs.core.inc);
});})(___$1))
},new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(self__.data));
});
overtone_playground.core.t133046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133048){var self__ = this;
var _133048__$1 = this;return self__.meta133047;
});
overtone_playground.core.t133046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133048,meta133047__$1){var self__ = this;
var _133048__$1 = this;return (new overtone_playground.core.t133046(self__.owner,self__.data,self__.clickable,meta133047__$1));
});
overtone_playground.core.__GT_t133046 = (function __GT_t133046(owner__$1,data__$1,clickable__$1,meta133047){return (new overtone_playground.core.t133046(owner__$1,data__$1,clickable__$1,meta133047));
});
}
return (new overtone_playground.core.t133046(owner,data,clickable,null));
});
om.core.root.call(null,overtone_playground.core.stage,overtone_playground.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("container")], null));

//# sourceMappingURL=core.js.map