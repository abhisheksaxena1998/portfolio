import{r as x,g as pe}from"./index-aWk6bGbh.js";import{P as d}from"./index-tNRL5aFu.js";var de=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function U(){return U=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},U.apply(this,arguments)}function ue(e,n){if(e==null)return{};var o={},r=Object.keys(e),t,s;for(s=0;s<r.length;s++)t=r[s],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}function O(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fe(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,k(e,n)}function k(e,n){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},k(e,n)}var L=function(e){fe(n,e);function n(){var r;return r=e.call(this)||this,r.handleExpired=r.handleExpired.bind(O(r)),r.handleErrored=r.handleErrored.bind(O(r)),r.handleChange=r.handleChange.bind(O(r)),r.handleRecaptchaRef=r.handleRecaptchaRef.bind(O(r)),r}var o=n.prototype;return o.getCaptchaFunction=function(t){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[t]:this.props.grecaptcha[t]:null},o.getValue=function(){var t=this.getCaptchaFunction("getResponse");return t&&this._widgetId!==void 0?t(this._widgetId):null},o.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},o.execute=function(){var t=this.getCaptchaFunction("execute");if(t&&this._widgetId!==void 0)return t(this._widgetId);this._executeRequested=!0},o.executeAsync=function(){var t=this;return new Promise(function(s,b){t.executionResolve=s,t.executionReject=b,t.execute()})},o.reset=function(){var t=this.getCaptchaFunction("reset");t&&this._widgetId!==void 0&&t(this._widgetId)},o.forceReset=function(){var t=this.getCaptchaFunction("reset");t&&t()},o.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},o.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},o.handleChange=function(t){this.props.onChange&&this.props.onChange(t),this.executionResolve&&(this.executionResolve(t),delete this.executionReject,delete this.executionResolve)},o.explicitRender=function(){var t=this.getCaptchaFunction("render");if(t&&this._widgetId===void 0){var s=document.createElement("div");this._widgetId=t(s,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(s)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},o.componentDidMount=function(){this.explicitRender()},o.componentDidUpdate=function(){this.explicitRender()},o.handleRecaptchaRef=function(t){this.captcha=t},o.render=function(){var t=this.props;t.sitekey,t.onChange,t.theme,t.type,t.tabindex,t.onExpired,t.onErrored,t.size,t.stoken,t.grecaptcha,t.badge,t.hl,t.isolated;var s=ue(t,de);return x.createElement("div",U({},s,{ref:this.handleRecaptchaRef}))},n}(x.Component);L.displayName="ReCAPTCHA";L.propTypes={sitekey:d.string.isRequired,onChange:d.func,grecaptcha:d.object,theme:d.oneOf(["dark","light"]),type:d.oneOf(["image","audio"]),tabindex:d.number,onExpired:d.func,onErrored:d.func,size:d.oneOf(["compact","normal","invisible"]),stoken:d.string,hl:d.string,badge:d.oneOf(["bottomright","bottomleft","inline"]),isolated:d.bool};L.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var oe={exports:{}},a={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=typeof Symbol=="function"&&Symbol.for,q=p?Symbol.for("react.element"):60103,G=p?Symbol.for("react.portal"):60106,E=p?Symbol.for("react.fragment"):60107,P=p?Symbol.for("react.strict_mode"):60108,$=p?Symbol.for("react.profiler"):60114,j=p?Symbol.for("react.provider"):60109,I=p?Symbol.for("react.context"):60110,V=p?Symbol.for("react.async_mode"):60111,T=p?Symbol.for("react.concurrent_mode"):60111,C=p?Symbol.for("react.forward_ref"):60112,A=p?Symbol.for("react.suspense"):60113,le=p?Symbol.for("react.suspense_list"):60120,N=p?Symbol.for("react.memo"):60115,D=p?Symbol.for("react.lazy"):60116,he=p?Symbol.for("react.block"):60121,ye=p?Symbol.for("react.fundamental"):60117,me=p?Symbol.for("react.responder"):60118,ve=p?Symbol.for("react.scope"):60119;function u(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case q:switch(e=e.type,e){case V:case T:case E:case $:case P:case A:return e;default:switch(e=e&&e.$$typeof,e){case I:case C:case D:case N:case j:return e;default:return n}}case G:return n}}}function ie(e){return u(e)===T}a.AsyncMode=V;a.ConcurrentMode=T;a.ContextConsumer=I;a.ContextProvider=j;a.Element=q;a.ForwardRef=C;a.Fragment=E;a.Lazy=D;a.Memo=N;a.Portal=G;a.Profiler=$;a.StrictMode=P;a.Suspense=A;a.isAsyncMode=function(e){return ie(e)||u(e)===V};a.isConcurrentMode=ie;a.isContextConsumer=function(e){return u(e)===I};a.isContextProvider=function(e){return u(e)===j};a.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===q};a.isForwardRef=function(e){return u(e)===C};a.isFragment=function(e){return u(e)===E};a.isLazy=function(e){return u(e)===D};a.isMemo=function(e){return u(e)===N};a.isPortal=function(e){return u(e)===G};a.isProfiler=function(e){return u(e)===$};a.isStrictMode=function(e){return u(e)===P};a.isSuspense=function(e){return u(e)===A};a.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===E||e===T||e===$||e===P||e===A||e===le||typeof e=="object"&&e!==null&&(e.$$typeof===D||e.$$typeof===N||e.$$typeof===j||e.$$typeof===I||e.$$typeof===C||e.$$typeof===ye||e.$$typeof===me||e.$$typeof===ve||e.$$typeof===he)};a.typeOf=u;oe.exports=a;var ge=oe.exports,K=ge,be={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Se={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ae={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},B={};B[K.ForwardRef]=Se;B[K.Memo]=ae;function te(e){return K.isMemo(e)?ae:B[e.$$typeof]||be}var xe=Object.defineProperty,Re=Object.getOwnPropertyNames,re=Object.getOwnPropertySymbols,we=Object.getOwnPropertyDescriptor,Oe=Object.getPrototypeOf,ne=Object.prototype;function ce(e,n,o){if(typeof n!="string"){if(ne){var r=Oe(n);r&&r!==ne&&ce(e,r,o)}var t=Re(n);re&&(t=t.concat(re(n)));for(var s=te(e),b=te(n),_=0;_<t.length;++_){var f=t[_];if(!_e[f]&&!(o&&o[f])&&!(b&&b[f])&&!(s&&s[f])){var v=we(n,f);try{xe(e,f,v)}catch{}}}}return e}var Le=ce;const Ee=pe(Le);function z(){return z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},z.apply(this,arguments)}function Pe(e,n){if(e==null)return{};var o={},r=Object.keys(e),t,s;for(s=0;s<r.length;s++)t=r[s],!(n.indexOf(t)>=0)&&(o[t]=e[t]);return o}function $e(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}var y={},je=0;function Ie(e,n){return n=n||{},function(r){var t=r.displayName||r.name||"Component",s=function(_){$e(f,_);function f(g,c){var i;return i=_.call(this,g,c)||this,i.state={},i.__scriptURL="",i}var v=f.prototype;return v.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+je++),this.__scriptLoaderID},v.setupScriptURL=function(){return this.__scriptURL=typeof e=="function"?e():e,this.__scriptURL},v.asyncScriptLoaderHandleLoad=function(c){var i=this;this.setState(c,function(){return i.props.asyncScriptOnLoad&&i.props.asyncScriptOnLoad(i.state)})},v.asyncScriptLoaderTriggerOnScriptLoaded=function(){var c=y[this.__scriptURL];if(!c||!c.loaded)throw new Error("Script is not loaded.");for(var i in c.observers)c.observers[i](c);delete window[n.callbackName]},v.componentDidMount=function(){var c=this,i=this.setupScriptURL(),h=this.asyncScriptLoaderGetScriptLoaderID(),m=n,Y=m.globalName,F=m.callbackName,J=m.scriptId;if(Y&&typeof window[Y]<"u"&&(y[i]={loaded:!0,observers:{}}),y[i]){var R=y[i];if(R&&(R.loaded||R.errored)){this.asyncScriptLoaderHandleLoad(R);return}R.observers[h]=function(l){return c.asyncScriptLoaderHandleLoad(l)};return}var Q={};Q[h]=function(l){return c.asyncScriptLoaderHandleLoad(l)},y[i]={loaded:!1,observers:Q};var S=document.createElement("script");S.src=i,S.async=!0;for(var X in n.attributes)S.setAttribute(X,n.attributes[X]);J&&(S.id=J);var Z=function(w){if(y[i]){var se=y[i],M=se.observers;for(var ee in M)w(M[ee])&&delete M[ee]}};F&&typeof window<"u"&&(window[F]=function(){return c.asyncScriptLoaderTriggerOnScriptLoaded()}),S.onload=function(){var l=y[i];l&&(l.loaded=!0,Z(function(w){return F?!1:(w(l),!0)}))},S.onerror=function(){var l=y[i];l&&(l.errored=!0,Z(function(w){return w(l),!0}))},document.body.appendChild(S)},v.componentWillUnmount=function(){var c=this.__scriptURL;if(n.removeOnUnmount===!0)for(var i=document.getElementsByTagName("script"),h=0;h<i.length;h+=1)i[h].src.indexOf(c)>-1&&i[h].parentNode&&i[h].parentNode.removeChild(i[h]);var m=y[c];m&&(delete m.observers[this.asyncScriptLoaderGetScriptLoaderID()],n.removeOnUnmount===!0&&delete y[c])},v.render=function(){var c=n.globalName,i=this.props;i.asyncScriptOnLoad;var h=i.forwardedRef,m=Pe(i,["asyncScriptOnLoad","forwardedRef"]);return c&&typeof window<"u"&&(m[c]=typeof window[c]<"u"?window[c]:void 0),m.ref=h,x.createElement(r,m)},f}(x.Component),b=x.forwardRef(function(_,f){return x.createElement(s,z({},_,{forwardedRef:f}))});return b.displayName="AsyncScriptLoader("+t+")",b.propTypes={asyncScriptOnLoad:d.func},Ee(b,r)}}var H="onloadcallback",Te="grecaptcha";function W(){return typeof window<"u"&&window.recaptchaOptions||{}}function Ce(){var e=W(),n=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+n+"/recaptcha/enterprise.js?onload="+H+"&render=explicit":"https://"+n+"/recaptcha/api.js?onload="+H+"&render=explicit"}const De=Ie(Ce,{callbackName:H,globalName:Te,attributes:W().nonce?{nonce:W().nonce}:{}})(L);export{L as ReCAPTCHA,De as default};
