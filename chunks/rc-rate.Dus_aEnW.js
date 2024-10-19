import{k as e,c as n,b as a,g as o}from"./@babel.BGkJ1U9u.js";import{c as t}from"./classnames.BmZ8OyLm.js";import{K as r,e as l,p as c}from"./rc-util.DIscDwjl.js";import{a as u,r as i}from"./react.DlfX74Oz.js";function f(e,n){var a=e.disabled,o=e.prefixCls,l=e.character,c=e.characterRender,i=e.index,f=e.count,d=e.value,s=e.allowHalf,v=e.focused,m=e.onHover,p=e.onClick,b=i+1,w=new Set([o]);0===d&&0===i&&v?w.add("".concat(o,"-focused")):s&&d+.5>=b&&d<b?(w.add("".concat(o,"-half")),w.add("".concat(o,"-active")),v&&w.add("".concat(o,"-focused"))):(b<=d?w.add("".concat(o,"-full")):w.add("".concat(o,"-zero")),b===d&&v&&w.add("".concat(o,"-focused")));var y="function"==typeof l?l(e):l,C=u.createElement("li",{className:t(Array.from(w)),ref:n},u.createElement("div",{onClick:a?null:function(e){p(e,i)},onKeyDown:a?null:function(e){e.keyCode===r.ENTER&&p(e,i)},onMouseMove:a?null:function(e){m(e,i)},role:"radio","aria-checked":d>i?"true":"false","aria-posinset":i+1,"aria-setsize":f,tabIndex:a?-1:0},u.createElement("div",{className:"".concat(o,"-first")},y),u.createElement("div",{className:"".concat(o,"-second")},y)));return c&&(C=c(C,e)),C}const d=u.forwardRef(f);var s=["prefixCls","className","defaultValue","value","count","allowHalf","allowClear","keyboard","character","characterRender","disabled","direction","tabIndex","autoFocus","onHoverChange","onChange","onFocus","onBlur","onKeyDown","onMouseLeave"];function v(f,v){var m,p=f.prefixCls,b=void 0===p?"rc-rate":p,w=f.className,y=f.defaultValue,C=f.value,h=f.count,E=void 0===h?5:h,R=f.allowHalf,g=void 0!==R&&R,x=f.allowClear,H=void 0===x||x,k=f.keyboard,D=void 0===k||k,L=f.character,F=void 0===L?"★":L,I=f.characterRender,N=f.disabled,T=f.direction,K=void 0===T?"ltr":T,M=f.tabIndex,j=void 0===M?0:M,B=f.autoFocus,S=f.onHoverChange,V=f.onChange,X=f.onFocus,z=f.onBlur,A=f.onKeyDown,G=f.onMouseLeave,W=e(f,s),O=(m=i.useRef({}),[function(e){return m.current[e]},function(e){return function(n){m.current[e]=n}}]),q=n(O,2),J=q[0],P=q[1],Q=u.useRef(null),U=function(){var e;N||(null===(e=Q.current)||void 0===e||e.focus())};u.useImperativeHandle(v,(function(){return{focus:U,blur:function(){var e;N||(null===(e=Q.current)||void 0===e||e.blur())}}}));var Y=l(y||0,{value:C}),Z=n(Y,2),$=Z[0],_=Z[1],ee=l(null),ne=n(ee,2),ae=ne[0],oe=ne[1],te=function(e,n){var a,o,t,r,l="rtl"===K,c=e+1;if(g){var u=J(e),i=(o=function(e){var n,a,o=e.ownerDocument,t=o.body,r=o&&o.documentElement,l=e.getBoundingClientRect();return n=l.left,a=l.top,{left:n-=r.clientLeft||t.clientLeft||0,top:a-=r.clientTop||t.clientTop||0}}(a=u),t=a.ownerDocument,r=t.defaultView||t.parentWindow,o.left+=function(e){var n=e.pageXOffset,a="scrollLeft";if("number"!=typeof n){var o=e.document;"number"!=typeof(n=o.documentElement[a])&&(n=o.body[a])}return n}(r),o.left),f=u.clientWidth;(l&&n-i>f/2||!l&&n-i<f/2)&&(c-=.5)}return c},re=function(e){_(e),null==V||V(e)},le=u.useState(!1),ce=n(le,2),ue=ce[0],ie=ce[1],fe=u.useState(null),de=n(fe,2),se=de[0],ve=de[1],me=function(e,n){var a=te(n,e.pageX);a!==ae&&(ve(a),oe(null)),null==S||S(a)},pe=function(e){N||(ve(null),oe(null),null==S||S(void 0)),e&&(null==G||G(e))},be=function(e,n){var a=te(n,e.pageX),o=!1;H&&(o=a===$),pe(),re(o?0:a),oe(o?a:null)};u.useEffect((function(){B&&!N&&U()}),[]);var we=new Array(E).fill(0).map((function(e,n){return u.createElement(d,{ref:P(n),index:n,count:E,disabled:N,prefixCls:"".concat(b,"-star"),allowHalf:g,value:null===se?$:se,onClick:be,onHover:me,key:e||n,character:F,characterRender:I,focused:ue})})),ye=t(b,w,a(a({},"".concat(b,"-disabled"),N),"".concat(b,"-rtl"),"rtl"===K));return u.createElement("ul",o({className:ye,onMouseLeave:pe,tabIndex:N?-1:j,onFocus:N?null:function(){ie(!0),null==X||X()},onBlur:N?null:function(){ie(!1),null==z||z()},onKeyDown:N?null:function(e){var n=e.keyCode,a="rtl"===K,o=g?.5:1;D&&(n===r.RIGHT&&$<E&&!a?(re($+o),e.preventDefault()):n===r.LEFT&&$>0&&!a||n===r.RIGHT&&$>0&&a?(re($-o),e.preventDefault()):n===r.LEFT&&$<E&&a&&(re($+o),e.preventDefault())),null==A||A(e)},ref:Q,role:"radiogroup"},c(W,{aria:!0,data:!0,attr:!0})),we)}const m=u.forwardRef(v);export{m as R};
