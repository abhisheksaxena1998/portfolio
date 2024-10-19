import{k as e,h as n,i as t,a as r,_ as o,d as a,c as i,e as u,b as c,j as s,g as f}from"./@babel.BGkJ1U9u.js";import{c as v}from"./classnames.BmZ8OyLm.js";import{c as l,q as d,B as m,Q as p,d as E,j as y,s as h,R as k}from"./rc-util.DIscDwjl.js";import{r as A}from"./react.DlfX74Oz.js";var L=["children"],b=A.createContext({});function g(n){var t=n.children,r=e(n,L);return A.createElement(b.Provider,{value:r},t)}var C=function(e){n(i,e);var a=t(i);function i(){return r(this,i),a.apply(this,arguments)}return o(i,[{key:"render",value:function(){return this.props.children}}]),i}(A.Component),R="none",w="appear",S="enter",j="leave",P="none",N="prepare",O="start",T="active",M="end",x="prepared";function V(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit".concat(e)]="webkit".concat(n),t["Moz".concat(e)]="moz".concat(n),t["ms".concat(e)]="MS".concat(n),t["O".concat(e)]="o".concat(n.toLowerCase()),t}var D,z,F,I=(D=l(),z="undefined"!=typeof window?window:{},F={animationend:V("Animation","AnimationEnd"),transitionend:V("Transition","TransitionEnd")},D&&("AnimationEvent"in z||delete F.animationend.animation,"TransitionEvent"in z||delete F.transitionend.transition),F),K={};if(l()){var q=document.createElement("div");K=q.style}var B={};function H(e){if(B[e])return B[e];var n=I[e];if(n)for(var t=Object.keys(n),r=t.length,o=0;o<r;o+=1){var a=t[o];if(Object.prototype.hasOwnProperty.call(n,a)&&a in K)return B[e]=n[a],B[e]}return""}var Q=H("animationend"),U=H("transitionend"),W=!(!Q||!U),_=Q||"animationend",G=U||"transitionend";function J(e,n){return e?"object"===a(e)?e[n.replace(/-\w/g,(function(e){return e[1].toUpperCase()}))]:"".concat(e,"-").concat(n):null}var X=l()?A.useLayoutEffect:A.useEffect;var Y=[N,O,T,M],Z=[N,x],$=!1;function ee(e){return e===T||e===M}const ne=function(e,n,t){var r=m(P),o=i(r,2),a=o[0],u=o[1],c=function(){var e=A.useRef(null);function n(){d.cancel(e.current)}return A.useEffect((function(){return function(){n()}}),[]),[function t(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;n();var a=d((function(){o<=1?r({isCanceled:function(){return a!==e.current}}):t(r,o-1)}));e.current=a},n]}(),s=i(c,2),f=s[0],v=s[1];var l=n?Z:Y;return X((function(){if(a!==P&&a!==M){var e=l.indexOf(a),n=l[e+1],r=t(a);r===$?u(n,!0):n&&f((function(e){function t(){e.isCanceled()||u(n,!0)}!0===r?t():Promise.resolve(r).then(t)}))}}),[e,a]),A.useEffect((function(){return function(){v()}}),[]),[function(){u(N,!0)},a]};function te(e,n,t,r){var o=r.motionEnter,a=void 0===o||o,s=r.motionAppear,f=void 0===s||s,v=r.motionLeave,l=void 0===v||v,d=r.motionDeadline,y=r.motionLeaveImmediately,h=r.onAppearPrepare,k=r.onEnterPrepare,L=r.onLeavePrepare,b=r.onAppearStart,g=r.onEnterStart,C=r.onLeaveStart,P=r.onAppearActive,M=r.onEnterActive,V=r.onLeaveActive,D=r.onAppearEnd,z=r.onEnterEnd,F=r.onLeaveEnd,I=r.onVisibleChanged,K=m(),q=i(K,2),B=q[0],H=q[1],Q=p(R),U=i(Q,2),W=U[0],J=U[1],Y=m(null),Z=i(Y,2),te=Z[0],re=Z[1],oe=W(),ae=A.useRef(!1),ie=A.useRef(null);function ue(){return t()}var ce=A.useRef(!1);function se(){J(R),re(null,!0)}var fe=E((function(e){var n=W();if(n!==R){var t=ue();if(!e||e.deadline||e.target===t){var r,o=ce.current;n===w&&o?r=null==D?void 0:D(t,e):n===S&&o?r=null==z?void 0:z(t,e):n===j&&o&&(r=null==F?void 0:F(t,e)),o&&!1!==r&&se()}}})),ve=function(e){var n=A.useRef();function t(n){n&&(n.removeEventListener(G,e),n.removeEventListener(_,e))}return A.useEffect((function(){return function(){t(n.current)}}),[]),[function(r){n.current&&n.current!==r&&t(n.current),r&&r!==n.current&&(r.addEventListener(G,e),r.addEventListener(_,e),n.current=r)},t]}(fe),le=i(ve,1)[0],de=function(e){switch(e){case w:return c(c(c({},N,h),O,b),T,P);case S:return c(c(c({},N,k),O,g),T,M);case j:return c(c(c({},N,L),O,C),T,V);default:return{}}},me=A.useMemo((function(){return de(oe)}),[oe]),pe=ne(oe,!e,(function(e){if(e===N){var n=me[N];return n?n(ue()):$}var t;he in me&&re((null===(t=me[he])||void 0===t?void 0:t.call(me,ue(),null))||null);return he===T&&oe!==R&&(le(ue()),d>0&&(clearTimeout(ie.current),ie.current=setTimeout((function(){fe({deadline:!0})}),d))),he===x&&se(),true})),Ee=i(pe,2),ye=Ee[0],he=Ee[1],ke=ee(he);ce.current=ke,X((function(){H(n);var t,r=ae.current;ae.current=!0,!r&&n&&f&&(t=w),r&&n&&a&&(t=S),(r&&!n&&l||!r&&y&&!n&&l)&&(t=j);var o=de(t);t&&(e||o[N])?(J(t),ye()):J(R)}),[n]),A.useEffect((function(){(oe===w&&!f||oe===S&&!a||oe===j&&!l)&&J(R)}),[f,a,l]),A.useEffect((function(){return function(){ae.current=!1,clearTimeout(ie.current)}}),[]);var Ae=A.useRef(!1);A.useEffect((function(){B&&(Ae.current=!0),void 0!==B&&oe===R&&((Ae.current||B)&&(null==I||I(B)),Ae.current=!0)}),[B,oe]);var Le=te;return me[N]&&he===O&&(Le=u({transition:"none"},Le)),[oe,he,Le,null!=B?B:n]}const re=function(e){var n=e;"object"===a(e)&&(n=e.transitionSupport);var t=A.forwardRef((function(e,t){var r=e.visible,o=void 0===r||r,a=e.removeOnLeave,s=void 0===a||a,f=e.forceRender,l=e.children,d=e.motionName,m=e.leavedClassName,p=e.eventProps,E=function(e,t){return!(!e.motionName||!n||!1===t)}(e,A.useContext(b).motion),L=A.useRef(),g=A.useRef();var w=te(E,o,(function(){try{return L.current instanceof HTMLElement?L.current:k(g.current)}catch(e){return null}}),e),S=i(w,4),j=S[0],P=S[1],T=S[2],M=S[3],x=A.useRef(M);M&&(x.current=!0);var V,D=A.useCallback((function(e){L.current=e,y(t,e)}),[t]),z=u(u({},p),{},{visible:o});if(l)if(j===R)V=M?l(u({},z),D):!s&&x.current&&m?l(u(u({},z),{},{className:m}),D):f||!s&&!m?l(u(u({},z),{},{style:{display:"none"}}),D):null;else{var F;P===N?F="prepare":ee(P)?F="active":P===O&&(F="start");var I=J(d,"".concat(j,"-").concat(F));V=l(u(u({},z),{},{className:v(J(d,j),c(c({},I,I&&F),d,"string"==typeof d)),style:T}),D)}else V=null;A.isValidElement(V)&&h(V)&&(V.ref||(V=A.cloneElement(V,{ref:D})));return A.createElement(C,{ref:g},V)}));return t.displayName="CSSMotion",t}(W);var oe="add",ae="keep",ie="remove",ue="removed";function ce(e){var n;return n=e&&"object"===a(e)&&"key"in e?e:{key:e},u(u({},n),{},{key:String(n.key)})}function se(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(ce)}var fe=["component","children","onVisibleChanged","onAllRemoved"],ve=["status"],le=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];const de=function(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:re,v=function(a){n(l,a);var v=t(l);function l(){var e;r(this,l);for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return e=v.call.apply(v,[this].concat(t)),c(s(e),"state",{keyEntities:[]}),c(s(e),"removeKey",(function(n){e.setState((function(e){return{keyEntities:e.keyEntities.map((function(e){return e.key!==n?e:u(u({},e),{},{status:ue})}))}}),(function(){0===e.state.keyEntities.filter((function(e){return e.status!==ue})).length&&e.props.onAllRemoved&&e.props.onAllRemoved()}))})),e}return o(l,[{key:"render",value:function(){var n=this,t=this.state.keyEntities,r=this.props,o=r.component,a=r.children,c=r.onVisibleChanged;r.onAllRemoved;var s=e(r,fe),v=o||A.Fragment,l={};return le.forEach((function(e){l[e]=s[e],delete s[e]})),delete s.keys,A.createElement(v,s,t.map((function(t,r){var o=t.status,s=e(t,ve),v=o===oe||o===ae;return A.createElement(i,f({},l,{key:s.key,visible:v,eventProps:s,onVisibleChanged:function(e){null==c||c(e,{key:s.key}),e||n.removeKey(s.key)}}),(function(e,n){return a(u(u({},e),{},{index:r}),n)}))})))}}],[{key:"getDerivedStateFromProps",value:function(e,n){var t=e.keys,r=n.keyEntities,o=se(t),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[],r=0,o=n.length,a=se(e),i=se(n);a.forEach((function(e){for(var n=!1,a=r;a<o;a+=1){var c=i[a];if(c.key===e.key){r<a&&(t=t.concat(i.slice(r,a).map((function(e){return u(u({},e),{},{status:oe})}))),r=a),t.push(u(u({},c),{},{status:ae})),r+=1,n=!0;break}}n||t.push(u(u({},e),{},{status:ie}))})),r<o&&(t=t.concat(i.slice(r).map((function(e){return u(u({},e),{},{status:oe})}))));var c={};return t.forEach((function(e){var n=e.key;c[n]=(c[n]||0)+1})),Object.keys(c).filter((function(e){return c[e]>1})).forEach((function(e){(t=t.filter((function(n){var t=n.key,r=n.status;return t!==e||r!==ie}))).forEach((function(n){n.key===e&&(n.status=ae)}))})),t}(r,o);return{keyEntities:a.filter((function(e){var n=r.find((function(n){var t=n.key;return e.key===t}));return!n||n.status!==ue||e.status!==ie}))}}}]),l}(A.Component);return c(v,"defaultProps",{component:"div"}),v}(W);export{re as C,g as M,de as a};
