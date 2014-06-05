// Compiled by ClojureScript 0.0-2202
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.encore');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
taoensso.sente.chan_QMARK_ = (function chan_QMARK_(x){return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.sente.validate_event_form = (function validate_event_form(x){if(!(cljs.core.vector_QMARK_.call(null,x)))
{return new cljs.core.Keyword(null,"wrong-type","wrong-type",1225767628);
} else
{if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [1,null,2,null], null), null).call(null,cljs.core.count.call(null,x))))
{return new cljs.core.Keyword(null,"wrong-length","wrong-length",2503597688);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__136977 = x;var ev_id = cljs.core.nth.call(null,vec__136977,0,null);var _ = cljs.core.nth.call(null,vec__136977,1,null);if(!((ev_id instanceof cljs.core.Keyword)))
{return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",1493951486);
} else
{if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id)))
{return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1327792248);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
} else
{return null;
}
}
}
});
/**
* Valid [ev-id ?ev-data] form?
*/
taoensso.sente.event_QMARK_ = (function event_QMARK_(x){return (taoensso.sente.validate_event_form.call(null,x) == null);
});
taoensso.sente.assert_event = (function assert_event(x){var temp__4126__auto__ = taoensso.sente.validate_event_form.call(null,x);if(cljs.core.truth_(temp__4126__auto__))
{var _QMARK_err = temp__4126__auto__;var err_fmt = [cljs.core.str((function (){var G__136979 = _QMARK_err;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",1017020587),G__136979))
{return "Malformed event (unknown error).";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1327792248),G__136979))
{return "Malformed event (`ev-id` should be a namespaced keyword).";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",1493951486),G__136979))
{return "Malformed event (`ev-id` should be a namespaced keyword).";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"wrong-length","wrong-length",2503597688),G__136979))
{return "Malformed event (wrong length).";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"wrong-type","wrong-type",1225767628),G__136979))
{return "Malformed event (wrong type).";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));
} else
{return null;
}
}
}
}
}
}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",894090618),x], null));
} else
{return null;
}
});
taoensso.sente.cb_success_QMARK_ = (function cb_success_QMARK_(cb_reply){return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",4144514162),null,new cljs.core.Keyword("chsk","error","chsk/error",1304116950),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",4193310845),null], null), null).call(null,cb_reply));
});
/**
* edn -> [clj ?cb-uuid]
*/
taoensso.sente.unwrap_edn_msg_with__QMARK_cb__GT_clj = (function unwrap_edn_msg_with__QMARK_cb__GT_clj(edn){var msg = cljs.reader.read_string.call(null,edn);var _QMARK_cb_uuid = (function (){var and__3469__auto__ = cljs.core.map_QMARK_.call(null,msg);if(and__3469__auto__)
{return new cljs.core.Keyword("chsk","cb-uuid","chsk/cb-uuid",1730902389).cljs$core$IFn$_invoke$arity$1(msg);
} else
{return and__3469__auto__;
}
})();var clj = ((cljs.core.not.call(null,_QMARK_cb_uuid))?msg:new cljs.core.Keyword("chsk","clj","chsk/clj",1207886781).cljs$core$IFn$_invoke$arity$1(msg));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid], null);
});
taoensso.sente.assert_send_args = (function assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){taoensso.sente.assert_event.call(null,x);
if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-1583490870,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"?cb","?cb",-1640467817,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",-1640434800,null),cljs.core.list(new cljs.core.Symbol("encore","nneg-int?","encore/nneg-int?",-1421067858,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-1583490870,null))))))].join('')));
}
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.sente.chan_QMARK_.call(null,_QMARK_cb)))
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"?cb","?cb",-1640467817,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-1637301977,null),new cljs.core.Symbol(null,"?cb","?cb",-1640467817,null)),cljs.core.list(new cljs.core.Symbol(null,"chan?","chan?",-1545907994,null),new cljs.core.Symbol(null,"?cb","?cb",-1640467817,null)))))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function pull_unused_cb_fn_BANG_(cbs_waiting_,cb_uuid){if(cljs.core.truth_(cb_uuid))
{return cljs.core.first.call(null,cljs.core.swap_BANG_.call(null,cbs_waiting_,(function (p__136982){var vec__136983 = p__136982;var _ = cljs.core.nth.call(null,vec__136983,0,null);var m = cljs.core.nth.call(null,vec__136983,1,null);var temp__4124__auto__ = m.call(null,cb_uuid);if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cljs.core.dissoc.call(null,m,cb_uuid)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);
}
})));
} else
{return null;
}
});
/**
* clj -> [edn ?cb-uuid]
*/
taoensso.sente.wrap_clj__GT_edn_msg_with__QMARK_cb = (function wrap_clj__GT_edn_msg_with__QMARK_cb(cbs_waiting_,clj,_QMARK_timeout_ms,_QMARK_cb_fn){var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null):null);var msg = ((cljs.core.not.call(null,_QMARK_cb_uuid))?clj:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("chsk","clj","chsk/clj",1207886781),clj,new cljs.core.Keyword("chsk","cb-uuid","chsk/cb-uuid",1730902389),_QMARK_cb_uuid], null));var edn = cljs.core.pr_str.call(null,msg);if(cljs.core.truth_(_QMARK_cb_uuid))
{cljs.core.swap_BANG_.call(null,cbs_waiting_,((function (_QMARK_cb_uuid,msg,edn){
return (function (p__137010){var vec__137011 = p__137010;var _ = cljs.core.nth.call(null,vec__137011,0,null);var m = cljs.core.nth.call(null,vec__137011,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,_QMARK_cb_uuid,_QMARK_cb_fn)], null);
});})(_QMARK_cb_uuid,msg,edn))
);
if(cljs.core.truth_(_QMARK_timeout_ms))
{var c__7494__auto___137036 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7494__auto___137036,_QMARK_cb_uuid,msg,edn){
return (function (){var f__7495__auto__ = (function (){var switch__7479__auto__ = ((function (c__7494__auto___137036,_QMARK_cb_uuid,msg,edn){
return (function (state_137022){var state_val_137023 = (state_137022[1]);if((state_val_137023 === 5))
{var inst_137020 = (state_137022[2]);var state_137022__$1 = state_137022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_137022__$1,inst_137020);
} else
{if((state_val_137023 === 4))
{var state_137022__$1 = state_137022;var statearr_137024_137037 = state_137022__$1;(statearr_137024_137037[2] = null);
(statearr_137024_137037[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_137023 === 3))
{var inst_137015 = (state_137022[7]);var inst_137017 = inst_137015.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",4193310845));var state_137022__$1 = state_137022;var statearr_137025_137038 = state_137022__$1;(statearr_137025_137038[2] = inst_137017);
(statearr_137025_137038[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_137023 === 2))
{var inst_137015 = (state_137022[7]);var inst_137014 = (state_137022[2]);var inst_137015__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,cbs_waiting_,_QMARK_cb_uuid);var state_137022__$1 = (function (){var statearr_137026 = state_137022;(statearr_137026[8] = inst_137014);
(statearr_137026[7] = inst_137015__$1);
return statearr_137026;
})();if(cljs.core.truth_(inst_137015__$1))
{var statearr_137027_137039 = state_137022__$1;(statearr_137027_137039[1] = 3);
} else
{var statearr_137028_137040 = state_137022__$1;(statearr_137028_137040[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_137023 === 1))
{var inst_137012 = cljs.core.async.timeout.call(null,_QMARK_timeout_ms);var state_137022__$1 = state_137022;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_137022__$1,2,inst_137012);
} else
{return null;
}
}
}
}
}
});})(c__7494__auto___137036,_QMARK_cb_uuid,msg,edn))
;return ((function (switch__7479__auto__,c__7494__auto___137036,_QMARK_cb_uuid,msg,edn){
return (function() {
var state_machine__7480__auto__ = null;
var state_machine__7480__auto____0 = (function (){var statearr_137032 = [null,null,null,null,null,null,null,null,null];(statearr_137032[0] = state_machine__7480__auto__);
(statearr_137032[1] = 1);
return statearr_137032;
});
var state_machine__7480__auto____1 = (function (state_137022){while(true){
var ret_value__7481__auto__ = (function (){try{while(true){
var result__7482__auto__ = switch__7479__auto__.call(null,state_137022);if(cljs.core.keyword_identical_QMARK_.call(null,result__7482__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7482__auto__;
}
break;
}
}catch (e137033){if((e137033 instanceof Object))
{var ex__7483__auto__ = e137033;var statearr_137034_137041 = state_137022;(statearr_137034_137041[5] = ex__7483__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_137022);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e137033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7481__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__137042 = state_137022;
state_137022 = G__137042;
continue;
}
} else
{return ret_value__7481__auto__;
}
break;
}
});
state_machine__7480__auto__ = function(state_137022){
switch(arguments.length){
case 0:
return state_machine__7480__auto____0.call(this);
case 1:
return state_machine__7480__auto____1.call(this,state_137022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7480__auto____0;
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7480__auto____1;
return state_machine__7480__auto__;
})()
;})(switch__7479__auto__,c__7494__auto___137036,_QMARK_cb_uuid,msg,edn))
})();var state__7496__auto__ = (function (){var statearr_137035 = f__7495__auto__.call(null);(statearr_137035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7494__auto___137036);
return statearr_137035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7496__auto__);
});})(c__7494__auto___137036,_QMARK_cb_uuid,msg,edn))
);
} else
{}
} else
{}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn,_QMARK_cb_uuid], null);
});
taoensso.sente.IChSocket = (function (){var obj137044 = {};return obj137044;
})();
taoensso.sente.chsk_send_BANG_ = (function() {
var chsk_send_BANG_ = null;
var chsk_send_BANG___2 = (function (chsk,ev){if((function (){var and__3469__auto__ = chsk;if(and__3469__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2;
} else
{return and__3469__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2(chsk,ev);
} else
{var x__4108__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3481__auto__ = (taoensso.sente.chsk_send_BANG_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (taoensso.sente.chsk_send_BANG_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!",chsk);
}
}
})().call(null,chsk,ev);
}
});
var chsk_send_BANG___4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){if((function (){var and__3469__auto__ = chsk;if(and__3469__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4;
} else
{return and__3469__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4(chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
} else
{var x__4108__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3481__auto__ = (taoensso.sente.chsk_send_BANG_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (taoensso.sente.chsk_send_BANG_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!",chsk);
}
}
})().call(null,chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
}
});
chsk_send_BANG_ = function(chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
switch(arguments.length){
case 2:
return chsk_send_BANG___2.call(this,chsk,ev);
case 4:
return chsk_send_BANG___4.call(this,chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = chsk_send_BANG___2;
chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = chsk_send_BANG___4;
return chsk_send_BANG_;
})()
;
taoensso.sente.chsk_make_BANG_ = (function chsk_make_BANG_(chsk){if((function (){var and__3469__auto__ = chsk;if(and__3469__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_make_BANG_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_make_BANG_$arity$1(chsk);
} else
{var x__4108__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3481__auto__ = (taoensso.sente.chsk_make_BANG_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (taoensso.sente.chsk_make_BANG_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-make!",chsk);
}
}
})().call(null,chsk);
}
});
taoensso.sente.chsk_reconnect_BANG_ = (function chsk_reconnect_BANG_(chsk){if((function (){var and__3469__auto__ = chsk;if(and__3469__auto__)
{return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1;
} else
{return and__3469__auto__;
}
})())
{return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else
{var x__4108__auto__ = (((chsk == null))?null:chsk);return (function (){var or__3481__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
})().call(null,chsk);
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function merge_GT_chsk_state_BANG_(p__137045,merge_state){var map__137048 = p__137045;var map__137048__$1 = ((cljs.core.seq_QMARK_.call(null,map__137048))?cljs.core.apply.call(null,cljs.core.hash_map,map__137048):map__137048);var chsk = map__137048__$1;var state_ = cljs.core.get.call(null,map__137048__$1,new cljs.core.Keyword(null,"state_","state_",4416389472));var chs = cljs.core.get.call(null,map__137048__$1,new cljs.core.Keyword(null,"chs","chs",1014002720));var vec__137049 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__137048,map__137048__$1,chsk,state_,chs){
return (function (old_state){var new_state = cljs.core.merge.call(null,old_state,merge_state);return taoensso.encore.swapped.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null));
});})(map__137048,map__137048__$1,chsk,state_,chs))
);var old_state = cljs.core.nth.call(null,vec__137049,0,null);var new_state = cljs.core.nth.call(null,vec__137049,1,null);if(cljs.core.not_EQ_.call(null,old_state,new_state))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(chs),new_state);
return new_state;
} else
{return null;
}
});
taoensso.sente.wrap_cb_chan_as_fn = (function wrap_cb_chan_as_fn(_QMARK_cb,ev){if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)))
{return _QMARK_cb;
} else
{if(taoensso.sente.chan_QMARK_.call(null,_QMARK_cb))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"chan?","chan?",-1545907994,null),new cljs.core.Symbol(null,"?cb","?cb",-1640467817,null))))].join('')));
}
taoensso.sente.assert_event.call(null,ev);
var vec__137051 = ev;var ev_id = cljs.core.nth.call(null,vec__137051,0,null);var _ = cljs.core.nth.call(null,vec__137051,1,null);var cb_ch = _QMARK_cb;return ((function (vec__137051,ev_id,_,cb_ch){
return (function (reply){return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__137051,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function receive_buffered_evs_BANG_(ch_recv,clj){if(cljs.core.vector_QMARK_.call(null,clj))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-1302740715,null),new cljs.core.Symbol(null,"clj","clj",-1640432934,null))))].join('')));
}
var buffered_evs = clj;var seq__137056 = cljs.core.seq.call(null,buffered_evs);var chunk__137057 = null;var count__137058 = 0;var i__137059 = 0;while(true){
if((i__137059 < count__137058))
{var ev = cljs.core._nth.call(null,chunk__137057,i__137059);taoensso.sente.assert_event.call(null,ev);
cljs.core.async.put_BANG_.call(null,ch_recv,ev);
{
var G__137060 = seq__137056;
var G__137061 = chunk__137057;
var G__137062 = count__137058;
var G__137063 = (i__137059 + 1);
seq__137056 = G__137060;
chunk__137057 = G__137061;
count__137058 = G__137062;
i__137059 = G__137063;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__137056);if(temp__4126__auto__)
{var seq__137056__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__137056__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__137056__$1);{
var G__137064 = cljs.core.chunk_rest.call(null,seq__137056__$1);
var G__137065 = c__4229__auto__;
var G__137066 = cljs.core.count.call(null,c__4229__auto__);
var G__137067 = 0;
seq__137056 = G__137064;
chunk__137057 = G__137065;
count__137058 = G__137066;
i__137059 = G__137067;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__137056__$1);taoensso.sente.assert_event.call(null,ev);
cljs.core.async.put_BANG_.call(null,ch_recv,ev);
{
var G__137068 = cljs.core.next.call(null,seq__137056__$1);
var G__137069 = null;
var G__137070 = 0;
var G__137071 = 0;
seq__137056 = G__137068;
chunk__137057 = G__137069;
count__137058 = G__137070;
i__137059 = G__137071;
continue;
}
}
} else
{return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function handle_when_handshake_BANG_(chsk,clj){if((cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",1281878251))))
{var vec__137074 = clj;var _ = cljs.core.nth.call(null,vec__137074,0,null);var vec__137075 = cljs.core.nth.call(null,vec__137074,1,null);var uid = cljs.core.nth.call(null,vec__137075,0,null);var csrf_token = cljs.core.nth.call(null,vec__137075,1,null);if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,csrf_token)))
{taoensso.encore.warnf.call(null,"NO CSRF TOKEN AVAILABLE");
} else
{}
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1119852199),true,new cljs.core.Keyword(null,"uid","uid",1014020034),uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",4176868610),csrf_token], null));
return new cljs.core.Keyword(null,"handled","handled",1706707630);
} else
{return null;
}
});

/**
* @constructor
* @param {*} url
* @param {*} chs
* @param {*} socket_
* @param {*} kalive_ms
* @param {*} kalive_timer_
* @param {*} kalive_due_QMARK__
* @param {*} nattempt_
* @param {*} cbs_waiting_
* @param {*} state_
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.sente.ChWebSocket = (function (url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,__meta,__extmap){
this.url = url;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>9){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k137077,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k137077,new cljs.core.Keyword(null,"url","url",1014020321)))
{return self__.url;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137077,new cljs.core.Keyword(null,"chs","chs",1014002720)))
{return self__.chs;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137077,new cljs.core.Keyword(null,"socket_","socket_",3270165182)))
{return self__.socket_;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137077,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",2622924675)))
{return self__.kalive_ms;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137077,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1172590103)))
{return self__.kalive_timer_;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137077,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",3498447387)))
{return self__.kalive_due_QMARK__;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137077,new cljs.core.Keyword(null,"nattempt_","nattempt_",4600114450)))
{return self__.nattempt_;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137077,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",4586265821)))
{return self__.cbs_waiting_;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137077,new cljs.core.Keyword(null,"state_","state_",4416389472)))
{return self__.state_;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k137077,else__4070__auto__);
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
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",1014002720),self__.chs],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",3270165182),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",2622924675),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1172590103),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",3498447387),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",4600114450),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",4586265821),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",4416389472),self__.state_],null))], null),self__.__extmap));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,self__.__hash));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (9 + cljs.core.count.call(null,self__.__extmap));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"kalive-ms","kalive-ms",2622924675),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",4600114450),null,new cljs.core.Keyword(null,"chs","chs",1014002720),null,new cljs.core.Keyword(null,"socket_","socket_",3270165182),null,new cljs.core.Keyword(null,"url","url",1014020321),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",3498447387),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",4586265821),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1172590103),null,new cljs.core.Keyword(null,"state_","state_",4416389472),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__137076){var self__ = this;
var this__4074__auto____$1 = this;var pred__137079 = cljs.core.keyword_identical_QMARK_;var expr__137080 = k__4075__auto__;if(cljs.core.truth_(pred__137079.call(null,new cljs.core.Keyword(null,"url","url",1014020321),expr__137080)))
{return (new taoensso.sente.ChWebSocket(G__137076,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137079.call(null,new cljs.core.Keyword(null,"chs","chs",1014002720),expr__137080)))
{return (new taoensso.sente.ChWebSocket(self__.url,G__137076,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137079.call(null,new cljs.core.Keyword(null,"socket_","socket_",3270165182),expr__137080)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,G__137076,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137079.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",2622924675),expr__137080)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,G__137076,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137079.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1172590103),expr__137080)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__137076,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137079.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",3498447387),expr__137080)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__137076,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137079.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",4600114450),expr__137080)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__137076,self__.cbs_waiting_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137079.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",4586265821),expr__137080)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__137076,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137079.call(null,new cljs.core.Keyword(null,"state_","state_",4416389472),expr__137080)))
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__137076,self__.__meta,self__.__extmap,null));
} else
{return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__137076),null));
}
}
}
}
}
}
}
}
}
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",1014002720),self__.chs],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",3270165182),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",2622924675),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1172590103),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",3498447387),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",4600114450),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",4586265821),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",4416389472),self__.state_],null))], null),self__.__extmap));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__137076){var self__ = this;
var this__4066__auto____$1 = this;return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__137076,self__.__extmap,self__.__hash));
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2 = (function (chsk,ev){var self__ = this;
var chsk__$1 = this;return taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,ev,null,null);
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){var self__ = this;
var chsk__$1 = this;taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.wrap_cb_chan_as_fn.call(null,_QMARK_cb,ev);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1119852199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))))
{taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");
if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",4144514162));
} else
{return null;
}
} else
{var vec__137082 = taoensso.sente.wrap_clj__GT_edn_msg_with__QMARK_cb.call(null,self__.cbs_waiting_,ev,_QMARK_timeout_ms,_QMARK_cb_fn);var edn = cljs.core.nth.call(null,vec__137082,0,null);var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__137082,1,null);try{cljs.core.deref.call(null,self__.socket_).send(edn);
cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);
return new cljs.core.Keyword(null,"apparent-success","apparent-success",1519477569);
}catch (e137083){if((e137083 instanceof Error))
{var e = e137083;taoensso.encore.errorf.call(null,"Chsk send %s",e);
if(cljs.core.truth_(_QMARK_cb_uuid))
{var cb_fn_STAR__137090 = (function (){var or__3481__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return _QMARK_cb_fn;
}
})();cb_fn_STAR__137090.call(null,new cljs.core.Keyword("chsk","error","chsk/error",1304116950));
} else
{}
return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e137083;
} else
{return null;
}
}
}}
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;var temp__4126__auto__ = cljs.core.deref.call(null,self__.socket_);if(cljs.core.truth_(temp__4126__auto__))
{var s = temp__4126__auto__;return s.close();
} else
{return null;
}
});
taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_make_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;var temp__4126__auto__ = (function (){var or__3481__auto__ = (window["WebSocket"]);if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return (window["MozWebSocket"]);
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var WebSocket = temp__4126__auto__;((function (WebSocket,temp__4126__auto__,chsk__$1){
return (function connect_BANG_(){var retry_BANG_ = ((function (WebSocket,temp__4126__auto__,chsk__$1){
return (function (){var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));
taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);
return taoensso.encore.set_exp_backoff_timeout_BANG_.call(null,connect_BANG_,nattempt_STAR_);
});})(WebSocket,temp__4126__auto__,chsk__$1))
;var temp__4124__auto__ = (function (){try{return (new WebSocket(self__.url));
}catch (e137087){if((e137087 instanceof Error))
{var e = e137087;taoensso.encore.errorf.call(null,"WebSocket js/Error: %s",e);
return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e137087;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4124__auto__))
{var socket = temp__4124__auto__;return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__137088 = socket;(G__137088["onerror"] = ((function (G__137088,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){return taoensso.encore.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__137088,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);
(G__137088["onmessage"] = ((function (G__137088,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (ws_ev){var edn = (ws_ev["data"]);var vec__137089 = taoensso.sente.unwrap_edn_msg_with__QMARK_cb__GT_clj.call(null,edn);var clj = cljs.core.nth.call(null,vec__137089,0,null);var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__137089,1,null);var or__3481__auto__ = (function (){var and__3469__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,clj);if(cljs.core.truth_(and__3469__auto__))
{return cljs.core.reset_BANG_.call(null,self__.nattempt_,0);
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{if(cljs.core.truth_(_QMARK_cb_uuid))
{var temp__4124__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);if(cljs.core.truth_(temp__4124__auto____$1))
{var cb_fn = temp__4124__auto____$1;return cb_fn.call(null,clj);
} else
{return taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",clj);
}
} else
{var buffered_evs = clj;return taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"recv","recv",1017400664).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs);
}
}
});})(G__137088,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);
(G__137088["onopen"] = ((function (G__137088,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__137088,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (){if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__)))
{taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",2788090655)], null));
} else
{}
return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__137088,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__137088,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);
(G__137088["onclose"] = ((function (G__137088,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1){
return (function (_ws_ev){taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1119852199),false], null));
return retry_BANG_.call(null);
});})(G__137088,socket,temp__4124__auto__,retry_BANG_,WebSocket,temp__4126__auto__,chsk__$1))
);
return G__137088;
})());
} else
{return retry_BANG_.call(null);
}
});})(WebSocket,temp__4126__auto__,chsk__$1))
.call(null);
return chsk__$1;
} else
{return null;
}
});
taoensso.sente.ChWebSocket.cljs$lang$type = true;
taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});
taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"taoensso.sente/ChWebSocket");
});
taoensso.sente.__GT_ChWebSocket = (function __GT_ChWebSocket(url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_){return (new taoensso.sente.ChWebSocket(url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_));
});
taoensso.sente.map__GT_ChWebSocket = (function map__GT_ChWebSocket(G__137078){return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(G__137078),new cljs.core.Keyword(null,"chs","chs",1014002720).cljs$core$IFn$_invoke$arity$1(G__137078),new cljs.core.Keyword(null,"socket_","socket_",3270165182).cljs$core$IFn$_invoke$arity$1(G__137078),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",2622924675).cljs$core$IFn$_invoke$arity$1(G__137078),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1172590103).cljs$core$IFn$_invoke$arity$1(G__137078),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",3498447387).cljs$core$IFn$_invoke$arity$1(G__137078),new cljs.core.Keyword(null,"nattempt_","nattempt_",4600114450).cljs$core$IFn$_invoke$arity$1(G__137078),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",4586265821).cljs$core$IFn$_invoke$arity$1(G__137078),new cljs.core.Keyword(null,"state_","state_",4416389472).cljs$core$IFn$_invoke$arity$1(G__137078),null,cljs.core.dissoc.call(null,G__137078,new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.Keyword(null,"chs","chs",1014002720),new cljs.core.Keyword(null,"socket_","socket_",3270165182),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",2622924675),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1172590103),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",3498447387),new cljs.core.Keyword(null,"nattempt_","nattempt_",4600114450),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",4586265821),new cljs.core.Keyword(null,"state_","state_",4416389472))));
});

/**
* @constructor
* @param {*} url
* @param {*} chs
* @param {*} timeout
* @param {*} ajax_client_uuid
* @param {*} curr_xhr_
* @param {*} state_
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.sente.ChAjaxSocket = (function (url,chs,timeout,ajax_client_uuid,curr_xhr_,state_,__meta,__extmap){
this.url = url;
this.chs = chs;
this.timeout = timeout;
this.ajax_client_uuid = ajax_client_uuid;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k137092,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k137092,new cljs.core.Keyword(null,"url","url",1014020321)))
{return self__.url;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137092,new cljs.core.Keyword(null,"chs","chs",1014002720)))
{return self__.chs;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137092,new cljs.core.Keyword(null,"timeout","timeout",3994960083)))
{return self__.timeout;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137092,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",2569162690)))
{return self__.ajax_client_uuid;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137092,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",1620082506)))
{return self__.curr_xhr_;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k137092,new cljs.core.Keyword(null,"state_","state_",4416389472)))
{return self__.state_;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k137092,else__4070__auto__);
} else
{return null;
}
}
}
}
}
}
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",1014002720),self__.chs],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout","timeout",3994960083),self__.timeout],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",2569162690),self__.ajax_client_uuid],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",1620082506),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",4416389472),self__.state_],null))], null),self__.__extmap));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.__meta,self__.__extmap,self__.__hash));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (6 + cljs.core.count.call(null,self__.__extmap));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",1620082506),null,new cljs.core.Keyword(null,"chs","chs",1014002720),null,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",2569162690),null,new cljs.core.Keyword(null,"url","url",1014020321),null,new cljs.core.Keyword(null,"timeout","timeout",3994960083),null,new cljs.core.Keyword(null,"state_","state_",4416389472),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__137091){var self__ = this;
var this__4074__auto____$1 = this;var pred__137094 = cljs.core.keyword_identical_QMARK_;var expr__137095 = k__4075__auto__;if(cljs.core.truth_(pred__137094.call(null,new cljs.core.Keyword(null,"url","url",1014020321),expr__137095)))
{return (new taoensso.sente.ChAjaxSocket(G__137091,self__.chs,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137094.call(null,new cljs.core.Keyword(null,"chs","chs",1014002720),expr__137095)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,G__137091,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137094.call(null,new cljs.core.Keyword(null,"timeout","timeout",3994960083),expr__137095)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,G__137091,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137094.call(null,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",2569162690),expr__137095)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,G__137091,self__.curr_xhr_,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137094.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",1620082506),expr__137095)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,self__.ajax_client_uuid,G__137091,self__.state_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__137094.call(null,new cljs.core.Keyword(null,"state_","state_",4416389472),expr__137095)))
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,G__137091,self__.__meta,self__.__extmap,null));
} else
{return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__137091),null));
}
}
}
}
}
}
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",1014002720),self__.chs],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout","timeout",3994960083),self__.timeout],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",2569162690),self__.ajax_client_uuid],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",1620082506),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",4416389472),self__.state_],null))], null),self__.__extmap));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__137091){var self__ = this;
var this__4066__auto____$1 = this;return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,G__137091,self__.__extmap,self__.__hash));
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2 = (function (chsk,ev){var self__ = this;
var chsk__$1 = this;return taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,ev,null,null);
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){var self__ = this;
var chsk__$1 = this;taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.wrap_cb_chan_as_fn.call(null,_QMARK_cb,ev);if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1119852199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))))
{taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");
if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",4144514162));
} else
{return null;
}
} else
{taoensso.encore.ajax_lite.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"timeout","timeout",3994960083),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",3288017545),new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"params","params",4313443576),(function (){var dummy_cb_QMARK_ = cljs.core.not.call(null,_QMARK_cb_fn);var msg = ((!(dummy_cb_QMARK_))?ev:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("chsk","clj","chsk/clj",1207886781),ev,new cljs.core.Keyword("chsk","dummy-cb?","chsk/dummy-cb?",4088721351),true], null));var edn = cljs.core.pr_str.call(null,msg);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"_","_",1013904337),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"edn","edn",1014004513),edn,new cljs.core.Keyword(null,"csrf-token","csrf-token",4176868610),new cljs.core.Keyword(null,"csrf-token","csrf-token",4176868610).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))], null);
})()], null),((function (_QMARK_cb_fn,chsk__$1){
return (function ajax_cb(p__137097){var map__137099 = p__137097;var map__137099__$1 = ((cljs.core.seq_QMARK_.call(null,map__137099))?cljs.core.apply.call(null,cljs.core.hash_map,map__137099):map__137099);var error = cljs.core.get.call(null,map__137099__$1,new cljs.core.Keyword(null,"error","error",1110689146));var content = cljs.core.get.call(null,map__137099__$1,new cljs.core.Keyword(null,"content","content",1965434859));if(cljs.core.truth_(error))
{if(cljs.core._EQ_.call(null,error,new cljs.core.Keyword(null,"timeout","timeout",3994960083)))
{if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",4193310845));
} else
{return null;
}
} else
{taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1119852199),false], null));
if(cljs.core.truth_(_QMARK_cb_fn))
{return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",1304116950));
} else
{return null;
}
}
} else
{var resp_edn = content;var resp_clj = cljs.reader.read_string.call(null,resp_edn);if(cljs.core.truth_(_QMARK_cb_fn))
{_QMARK_cb_fn.call(null,resp_clj);
} else
{if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","cb-dummy-200","chsk/cb-dummy-200",3717035459)))
{taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",resp_clj);
} else
{}
}
return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1119852199),true], null));
}
});})(_QMARK_cb_fn,chsk__$1))
);
return new cljs.core.Keyword(null,"apparent-success","apparent-success",1519477569);
}
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;var temp__4126__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);if(cljs.core.truth_(temp__4126__auto__))
{var x = temp__4126__auto__;return x.abort();
} else
{return null;
}
});
taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_make_BANG_$arity$1 = (function (chsk){var self__ = this;
var chsk__$1 = this;((function (chsk__$1){
return (function async_poll_for_update_BANG_(nattempt){var retry_BANG_ = ((function (chsk__$1){
return (function (){var nattempt_STAR_ = (nattempt + 1);taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);
return taoensso.encore.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_);
});})(chsk__$1))
;var ajax_req_BANG_ = ((function (retry_BANG_,chsk__$1){
return (function (){return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.encore.ajax_lite.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"timeout","timeout",3994960083),self__.timeout,new cljs.core.Keyword(null,"resp-type","resp-type",3288017545),new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1013904337),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",2569162690),self__.ajax_client_uuid], null)], null),((function (retry_BANG_,chsk__$1){
return (function ajax_cb(p__137103){var map__137105 = p__137103;var map__137105__$1 = ((cljs.core.seq_QMARK_.call(null,map__137105))?cljs.core.apply.call(null,cljs.core.hash_map,map__137105):map__137105);var error = cljs.core.get.call(null,map__137105__$1,new cljs.core.Keyword(null,"error","error",1110689146));var content = cljs.core.get.call(null,map__137105__$1,new cljs.core.Keyword(null,"content","content",1965434859));if(cljs.core.truth_(error))
{if((cljs.core._EQ_.call(null,error,new cljs.core.Keyword(null,"timeout","timeout",3994960083))) || (cljs.core._EQ_.call(null,error,new cljs.core.Keyword(null,"abort","abort",1106515618))))
{return async_poll_for_update_BANG_.call(null,0);
} else
{taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1119852199),false], null));
return retry_BANG_.call(null);
}
} else
{var edn = content;var clj = cljs.reader.read_string.call(null,edn);var or__3481__auto___137106 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,clj);if(cljs.core.truth_(or__3481__auto___137106))
{} else
{var buffered_evs_137107 = clj;taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"recv","recv",1017400664).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs_137107);
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1119852199),true], null));
}
return async_poll_for_update_BANG_.call(null,0);
}
});})(retry_BANG_,chsk__$1))
));
});})(retry_BANG_,chsk__$1))
;var temp__4124__auto__ = (window["Pace"]);if(cljs.core.truth_(temp__4124__auto__))
{var pace = temp__4124__auto__;return pace.ignore(ajax_req_BANG_);
} else
{return ajax_req_BANG_.call(null);
}
});})(chsk__$1))
.call(null,0);
return chsk__$1;
});
taoensso.sente.ChAjaxSocket.cljs$lang$type = true;
taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});
taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"taoensso.sente/ChAjaxSocket");
});
taoensso.sente.__GT_ChAjaxSocket = (function __GT_ChAjaxSocket(url,chs,timeout,ajax_client_uuid,curr_xhr_,state_){return (new taoensso.sente.ChAjaxSocket(url,chs,timeout,ajax_client_uuid,curr_xhr_,state_));
});
taoensso.sente.map__GT_ChAjaxSocket = (function map__GT_ChAjaxSocket(G__137093){return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(G__137093),new cljs.core.Keyword(null,"chs","chs",1014002720).cljs$core$IFn$_invoke$arity$1(G__137093),new cljs.core.Keyword(null,"timeout","timeout",3994960083).cljs$core$IFn$_invoke$arity$1(G__137093),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",2569162690).cljs$core$IFn$_invoke$arity$1(G__137093),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",1620082506).cljs$core$IFn$_invoke$arity$1(G__137093),new cljs.core.Keyword(null,"state_","state_",4416389472).cljs$core$IFn$_invoke$arity$1(G__137093),null,cljs.core.dissoc.call(null,G__137093,new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.Keyword(null,"chs","chs",1014002720),new cljs.core.Keyword(null,"timeout","timeout",3994960083),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",2569162690),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",1620082506),new cljs.core.Keyword(null,"state_","state_",4416389472))));
});
/**
* @param {...*} var_args
*/
taoensso.sente.chsk_url = (function() { 
var chsk_url__delegate = function (path,p__137108){var vec__137111 = p__137108;var websocket_QMARK_ = cljs.core.nth.call(null,vec__137111,0,null);var map__137112 = taoensso.encore.get_window_location.call(null);var map__137112__$1 = ((cljs.core.seq_QMARK_.call(null,map__137112))?cljs.core.apply.call(null,cljs.core.hash_map,map__137112):map__137112);var pathname = cljs.core.get.call(null,map__137112__$1,new cljs.core.Keyword(null,"pathname","pathname",2249078690));var host = cljs.core.get.call(null,map__137112__$1,new cljs.core.Keyword(null,"host","host",1017112858));var protocol = cljs.core.get.call(null,map__137112__$1,new cljs.core.Keyword(null,"protocol","protocol",4319707658));return [cljs.core.str(((cljs.core.not.call(null,websocket_QMARK_))?protocol:((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"))),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__3481__auto__ = path;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return pathname;
}
})())].join('');
};
var chsk_url = function (path,var_args){
var p__137108 = null;if (arguments.length > 1) {
  p__137108 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return chsk_url__delegate.call(this,path,p__137108);};
chsk_url.cljs$lang$maxFixedArity = 1;
chsk_url.cljs$lang$applyTo = (function (arglist__137113){
var path = cljs.core.first(arglist__137113);
var p__137108 = cljs.core.rest(arglist__137113);
return chsk_url__delegate(path,p__137108);
});
chsk_url.cljs$core$IFn$_invoke$arity$variadic = chsk_url__delegate;
return chsk_url;
})()
;
/**
* Returns `{:keys [chsk ch-recv send-fn state]}` for new ChWebSocket/ChAjaxSocket:
* * chsk    - The IChSocket implementer. You can usually ignore this.
* * ch-recv - core.async channel that'll receive async (notably server>user)
* events.
* * send-fn - API fn to send client>server[1].
* * state   - Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
* 
* Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
* routes should be configured accordingly.
* @param {...*} var_args
*/
taoensso.sente.make_channel_socket_BANG_ = (function() { 
var make_channel_socket_BANG___delegate = function (url,p__137114){var vec__137117 = p__137114;var map__137118 = cljs.core.nth.call(null,vec__137117,0,null);var map__137118__$1 = ((cljs.core.seq_QMARK_.call(null,map__137118))?cljs.core.apply.call(null,cljs.core.hash_map,map__137118):map__137118);var lp_timeout = cljs.core.get.call(null,map__137118__$1,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",4791954826),38000);var ws_kalive_ms = cljs.core.get.call(null,map__137118__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",4354717138),38000);var recv_buf_or_n = cljs.core.get.call(null,map__137118__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1549384087),cljs.core.async.sliding_buffer.call(null,2048));var type = cljs.core.get.call(null,map__137118__$1,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"auto","auto",1016910113));var _deprecated_more_opts = cljs.core.nth.call(null,vec__137117,1,null);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",1013908046),null,new cljs.core.Keyword(null,"ajax","ajax",1016898962),null,new cljs.core.Keyword(null,"auto","auto",1016910113),null], null), null).call(null,type)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",1013908046),null,new cljs.core.Keyword(null,"ajax","ajax",1016898962),null,new cljs.core.Keyword(null,"auto","auto",1016910113),null], null), null),new cljs.core.Symbol(null,"type","type",-1636955917,null))))].join('')));
}
if(!((_deprecated_more_opts == null)))
{taoensso.encore.warnf.call(null,"`make-channel-socket!` fn signature CHANGED with Sente v0.10.0.");
} else
{}
var chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1)),new cljs.core.Keyword(null,"recv","recv",1017400664),cljs.core.async.chan.call(null,recv_buf_or_n),new cljs.core.Keyword(null,"internal","internal",1584314927),cljs.core.async.chan.call(null,recv_buf_or_n)], null);var chsk = (function (){var or__3481__auto__ = (function (){var and__3469__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",1016898962));if(and__3469__auto__)
{return taoensso.sente.chsk_make_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"kalive-ms","kalive-ms",2622924675),new cljs.core.Keyword(null,"nattempt_","nattempt_",4600114450),new cljs.core.Keyword(null,"chs","chs",1014002720),new cljs.core.Keyword(null,"socket_","socket_",3270165182),new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",3498447387),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",4586265821),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1172590103),new cljs.core.Keyword(null,"state_","state_",4416389472)],[ws_kalive_ms,cljs.core.atom.call(null,0),chs,cljs.core.atom.call(null,null),taoensso.sente.chsk_url.call(null,url,new cljs.core.Keyword(null,"ws","ws",1013908046)),cljs.core.atom.call(null,true),cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null)),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"ws","ws",1013908046),new cljs.core.Keyword(null,"open?","open?",1119852199),false], null))])));
} else
{return and__3469__auto__;
}
})();if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{var and__3469__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",1013908046));if(and__3469__auto__)
{var ajax_client_uuid = taoensso.encore.uuid_str.call(null);return taoensso.sente.chsk_make_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"url","url",1014020321),taoensso.sente.chsk_url.call(null,url),new cljs.core.Keyword(null,"chs","chs",1014002720),chs,new cljs.core.Keyword(null,"timeout","timeout",3994960083),lp_timeout,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",2569162690),ajax_client_uuid,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",1620082506),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"state_","state_",4416389472),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"ajax","ajax",1016898962),new cljs.core.Keyword(null,"open?","open?",1119852199),false], null))], null)));
} else
{return and__3469__auto__;
}
}
})();var ever_opened_QMARK__ = cljs.core.atom.call(null,false);var state_STAR_ = ((function (chs,chsk,ever_opened_QMARK__,vec__137117,map__137118,map__137118__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){if(cljs.core.truth_((function (){var or__3481__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1119852199).cljs$core$IFn$_invoke$arity$1(state));if(or__3481__auto__)
{return or__3481__auto__;
} else
{return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})()))
{return state;
} else
{cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",3183196490),true);
}
});})(chs,chsk,ever_opened_QMARK__,vec__137117,map__137118,map__137118__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
;if(cljs.core.truth_(chsk))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",1016957167),chsk,new cljs.core.Keyword(null,"send-fn","send-fn",2993769631),cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"state_","state_",4416389472).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"ch-recv","ch-recv",1704942016),cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.map_LT_.call(null,((function (chs,chsk,ever_opened_QMARK__,state_STAR_,vec__137117,map__137118,map__137118__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (ev){if(taoensso.sente.event_QMARK_.call(null,ev))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"event?","event?",1363106462,null),new cljs.core.Symbol(null,"ev","ev",-1640528278,null))))].join('')));
}
return ev;
});})(chs,chsk,ever_opened_QMARK__,state_STAR_,vec__137117,map__137118,map__137118__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"internal","internal",1584314927).cljs$core$IFn$_invoke$arity$1(chs)),cljs.core.async.map_LT_.call(null,((function (chs,chsk,ever_opened_QMARK__,state_STAR_,vec__137117,map__137118,map__137118__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (state){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",1318408525),state_STAR_.call(null,state)], null);
});})(chs,chsk,ever_opened_QMARK__,state_STAR_,vec__137117,map__137118,map__137118__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(chs)),cljs.core.async.map_LT_.call(null,((function (chs,chsk,ever_opened_QMARK__,state_STAR_,vec__137117,map__137118,map__137118__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts){
return (function (ev){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308),ev], null);
});})(chs,chsk,ever_opened_QMARK__,state_STAR_,vec__137117,map__137118,map__137118__$1,lp_timeout,ws_kalive_ms,recv_buf_or_n,type,_deprecated_more_opts))
,new cljs.core.Keyword(null,"recv","recv",1017400664).cljs$core$IFn$_invoke$arity$1(chs))], null))], null);
} else
{return null;
}
};
var make_channel_socket_BANG_ = function (url,var_args){
var p__137114 = null;if (arguments.length > 1) {
  p__137114 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_channel_socket_BANG___delegate.call(this,url,p__137114);};
make_channel_socket_BANG_.cljs$lang$maxFixedArity = 1;
make_channel_socket_BANG_.cljs$lang$applyTo = (function (arglist__137119){
var url = cljs.core.first(arglist__137119);
var p__137114 = cljs.core.rest(arglist__137119);
return make_channel_socket_BANG___delegate(url,p__137114);
});
make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = make_channel_socket_BANG___delegate;
return make_channel_socket_BANG_;
})()
;
taoensso.sente.start_chsk_router_loop_BANG_ = (function start_chsk_router_loop_BANG_(event_handler,ch){var ctrl_ch = cljs.core.async.chan.call(null);var c__7494__auto___137196 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7494__auto___137196,ctrl_ch){
return (function (){var f__7495__auto__ = (function (){var switch__7479__auto__ = ((function (c__7494__auto___137196,ctrl_ch){
return (function (state_137179){var state_val_137180 = (state_137179[1]);if((state_val_137180 === 7))
{var inst_137175 = (state_137179[2]);var state_137179__$1 = state_137179;var statearr_137181_137197 = state_137179__$1;(statearr_137181_137197[2] = inst_137175);
(statearr_137181_137197[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_137180 === 6))
{var inst_137164 = (state_137179[7]);var inst_137170 = cljs.core.nth.call(null,inst_137164,0,null);var inst_137171 = cljs.core.nth.call(null,inst_137164,1,null);var inst_137172 = event_handler.call(null,inst_137164,ch);var state_137179__$1 = (function (){var statearr_137182 = state_137179;(statearr_137182[8] = inst_137172);
(statearr_137182[9] = inst_137170);
(statearr_137182[10] = inst_137171);
return statearr_137182;
})();var statearr_137183_137198 = state_137179__$1;(statearr_137183_137198[2] = null);
(statearr_137183_137198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_137180 === 5))
{var state_137179__$1 = state_137179;var statearr_137184_137199 = state_137179__$1;(statearr_137184_137199[2] = new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",4001192801));
(statearr_137184_137199[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_137180 === 4))
{var inst_137163 = (state_137179[2]);var inst_137164 = cljs.core.nth.call(null,inst_137163,0,null);var inst_137165 = cljs.core.nth.call(null,inst_137163,1,null);var inst_137166 = (inst_137165 === ctrl_ch);var state_137179__$1 = (function (){var statearr_137185 = state_137179;(statearr_137185[7] = inst_137164);
return statearr_137185;
})();if(cljs.core.truth_(inst_137166))
{var statearr_137186_137200 = state_137179__$1;(statearr_137186_137200[1] = 5);
} else
{var statearr_137187_137201 = state_137179__$1;(statearr_137187_137201[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_137180 === 3))
{var inst_137177 = (state_137179[2]);var state_137179__$1 = state_137179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_137179__$1,inst_137177);
} else
{if((state_val_137180 === 2))
{var inst_137160 = [ch,ctrl_ch];var inst_137161 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_137160,null));var state_137179__$1 = state_137179;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_137179__$1,4,inst_137161);
} else
{if((state_val_137180 === 1))
{var state_137179__$1 = state_137179;var statearr_137188_137202 = state_137179__$1;(statearr_137188_137202[2] = null);
(statearr_137188_137202[1] = 2);
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
});})(c__7494__auto___137196,ctrl_ch))
;return ((function (switch__7479__auto__,c__7494__auto___137196,ctrl_ch){
return (function() {
var state_machine__7480__auto__ = null;
var state_machine__7480__auto____0 = (function (){var statearr_137192 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_137192[0] = state_machine__7480__auto__);
(statearr_137192[1] = 1);
return statearr_137192;
});
var state_machine__7480__auto____1 = (function (state_137179){while(true){
var ret_value__7481__auto__ = (function (){try{while(true){
var result__7482__auto__ = switch__7479__auto__.call(null,state_137179);if(cljs.core.keyword_identical_QMARK_.call(null,result__7482__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7482__auto__;
}
break;
}
}catch (e137193){if((e137193 instanceof Object))
{var ex__7483__auto__ = e137193;var statearr_137194_137203 = state_137179;(statearr_137194_137203[5] = ex__7483__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_137179);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e137193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7481__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__137204 = state_137179;
state_137179 = G__137204;
continue;
}
} else
{return ret_value__7481__auto__;
}
break;
}
});
state_machine__7480__auto__ = function(state_137179){
switch(arguments.length){
case 0:
return state_machine__7480__auto____0.call(this);
case 1:
return state_machine__7480__auto____1.call(this,state_137179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7480__auto____0;
state_machine__7480__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7480__auto____1;
return state_machine__7480__auto__;
})()
;})(switch__7479__auto__,c__7494__auto___137196,ctrl_ch))
})();var state__7496__auto__ = (function (){var statearr_137195 = f__7495__auto__.call(null);(statearr_137195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7494__auto___137196);
return statearr_137195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7496__auto__);
});})(c__7494__auto___137196,ctrl_ch))
);
return ((function (ctrl_ch){
return (function stop_BANG_(){return cljs.core.async.close_BANG_.call(null,ctrl_ch);
});
;})(ctrl_ch))
});

//# sourceMappingURL=sente.js.map