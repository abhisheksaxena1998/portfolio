import{r}from"./react.DlfX74Oz.js";import{P as t}from"./prop-types.DurDQcTs.js";import{h as e}from"./hoist-non-react-statics.DNgf3Sin.js";function n(){return n=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},n.apply(this,arguments)}var o={},a=0;function i(i,c){return c=c||{},function(s){var d=s.displayName||s.name||"Component",p=function(t){var e,n;function d(r,e){var n;return(n=t.call(this,r,e)||this).state={},n.__scriptURL="",n}n=t,(e=d).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var p=d.prototype;return p.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+a++),this.__scriptLoaderID},p.setupScriptURL=function(){return this.__scriptURL="function"==typeof i?i():i,this.__scriptURL},p.asyncScriptLoaderHandleLoad=function(r){var t=this;this.setState(r,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},p.asyncScriptLoaderTriggerOnScriptLoaded=function(){var r=o[this.__scriptURL];if(!r||!r.loaded)throw new Error("Script is not loaded.");for(var t in r.observers)r.observers[t](r);delete window[c.callbackName]},p.componentDidMount=function(){var r=this,t=this.setupScriptURL(),e=this.asyncScriptLoaderGetScriptLoaderID(),n=c,a=n.globalName,i=n.callbackName,s=n.scriptId;if(a&&void 0!==window[a]&&(o[t]={loaded:!0,observers:{}}),o[t]){var d=o[t];return d&&(d.loaded||d.errored)?void this.asyncScriptLoaderHandleLoad(d):void(d.observers[e]=function(t){return r.asyncScriptLoaderHandleLoad(t)})}var p={};p[e]=function(t){return r.asyncScriptLoaderHandleLoad(t)},o[t]={loaded:!1,observers:p};var u=document.createElement("script");for(var f in u.src=t,u.async=!0,c.attributes)u.setAttribute(f,c.attributes[f]);s&&(u.id=s);var l=function(r){if(o[t]){var e=o[t].observers;for(var n in e)r(e[n])&&delete e[n]}};i&&"undefined"!=typeof window&&(window[i]=function(){return r.asyncScriptLoaderTriggerOnScriptLoaded()}),u.onload=function(){var r=o[t];r&&(r.loaded=!0,l((function(t){return!i&&(t(r),!0)})))},u.onerror=function(){var r=o[t];r&&(r.errored=!0,l((function(t){return t(r),!0})))},document.body.appendChild(u)},p.componentWillUnmount=function(){var r=this.__scriptURL;if(!0===c.removeOnUnmount)for(var t=document.getElementsByTagName("script"),e=0;e<t.length;e+=1)t[e].src.indexOf(r)>-1&&t[e].parentNode&&t[e].parentNode.removeChild(t[e]);var n=o[r];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===c.removeOnUnmount&&delete o[r])},p.render=function(){var t=c.globalName,e=this.props;e.asyncScriptOnLoad;var n=e.forwardedRef,o=function(r,t){if(null==r)return{};var e,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)e=a[n],t.indexOf(e)>=0||(o[e]=r[e]);return o}(e,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(o[t]=void 0!==window[t]?window[t]:void 0),o.ref=n,r.createElement(s,o)},d}(r.Component),u=r.forwardRef((function(t,e){return r.createElement(p,n({},t,{forwardedRef:e}))}));return u.displayName="AsyncScriptLoader("+d+")",u.propTypes={asyncScriptOnLoad:t.func},e(u,s)}}export{i as m};
