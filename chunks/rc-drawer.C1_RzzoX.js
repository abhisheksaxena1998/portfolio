import{k as e,g as n,c as t,e as a,b as o}from"./@babel.BGkJ1U9u.js";import{P as r}from"./@rc-component.CaAxqRoJ.js";import{h as l,p as s,b as c,K as i,u}from"./rc-util.DIscDwjl.js";import{r as d}from"./react.DlfX74Oz.js";import{c as f}from"./classnames.BmZ8OyLm.js";import{C as v}from"./rc-motion.BpKOU8X5.js";var m=d.createContext(null),p=d.createContext({}),h=["prefixCls","className","containerRef"],y=function(t){var a=t.prefixCls,o=t.className,r=t.containerRef,c=e(t,h),i=d.useContext(p).panel,u=l(i,r);return d.createElement("div",n({className:f("".concat(a,"-content"),o),role:"dialog",ref:u},s(t,{aria:!0}),{"aria-modal":"true"},c))};function C(e){return"string"==typeof e&&String(Number(e))===e?(c(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var k={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function b(e,r){var l,c,u,p=e.prefixCls,h=e.open,b=e.placement,E=e.inline,w=e.push,x=e.forceRender,g=e.autoFocus,N=e.keyboard,M=e.classNames,R=e.rootClassName,K=e.rootStyle,S=e.zIndex,D=e.className,O=e.id,j=e.style,I=e.motion,L=e.width,P=e.height,U=e.children,F=e.mask,z=e.maskClosable,A=e.maskMotion,B=e.maskClassName,T=e.maskStyle,X=e.afterOpenChange,Y=e.onClose,H=e.onMouseEnter,V=e.onMouseOver,q=e.onMouseLeave,G=e.onClick,J=e.onKeyDown,Q=e.onKeyUp,W=e.styles,Z=e.drawerRender,$=d.useRef(),_=d.useRef(),ee=d.useRef();d.useImperativeHandle(r,(function(){return $.current}));d.useEffect((function(){var e;h&&g&&(null===(e=$.current)||void 0===e||e.focus({preventScroll:!0}))}),[h]);var ne=d.useState(!1),te=t(ne,2),ae=te[0],oe=te[1],re=d.useContext(m),le=null!==(l=null!==(c=null===(u="boolean"==typeof w?w?{}:{distance:0}:w||{})||void 0===u?void 0:u.distance)&&void 0!==c?c:null==re?void 0:re.pushDistance)&&void 0!==l?l:180,se=d.useMemo((function(){return{pushDistance:le,push:function(){oe(!0)},pull:function(){oe(!1)}}}),[le]);d.useEffect((function(){var e,n;h?null==re||null===(e=re.push)||void 0===e||e.call(re):null==re||null===(n=re.pull)||void 0===n||n.call(re)}),[h]),d.useEffect((function(){return function(){var e;null==re||null===(e=re.pull)||void 0===e||e.call(re)}}),[]);var ce=F&&d.createElement(v,n({key:"mask"},A,{visible:h}),(function(e,n){var t=e.className,o=e.style;return d.createElement("div",{className:f("".concat(p,"-mask"),t,null==M?void 0:M.mask,B),style:a(a(a({},o),T),null==W?void 0:W.mask),onClick:z&&h?Y:void 0,ref:n})})),ie="function"==typeof I?I(b):I,ue={};if(ae&&le)switch(b){case"top":ue.transform="translateY(".concat(le,"px)");break;case"bottom":ue.transform="translateY(".concat(-le,"px)");break;case"left":ue.transform="translateX(".concat(le,"px)");break;default:ue.transform="translateX(".concat(-le,"px)")}"left"===b||"right"===b?ue.width=C(L):ue.height=C(P);var de={onMouseEnter:H,onMouseOver:V,onMouseLeave:q,onClick:G,onKeyDown:J,onKeyUp:Q},fe=d.createElement(v,n({key:"panel"},ie,{visible:h,forceRender:x,onVisibleChanged:function(e){null==X||X(e)},removeOnLeave:!1,leavedClassName:"".concat(p,"-content-wrapper-hidden")}),(function(t,o){var r=t.className,l=t.style,c=d.createElement(y,n({id:O,containerRef:o,prefixCls:p,className:f(D,null==M?void 0:M.content),style:a(a({},j),null==W?void 0:W.content)},s(e,{aria:!0}),de),U);return d.createElement("div",n({className:f("".concat(p,"-content-wrapper"),null==M?void 0:M.wrapper,r),style:a(a(a({},ue),l),null==W?void 0:W.wrapper)},s(e,{data:!0})),Z?Z(c):c)})),ve=a({},K);return S&&(ve.zIndex=S),d.createElement(m.Provider,{value:se},d.createElement("div",{className:f(p,"".concat(p,"-").concat(b),R,o(o({},"".concat(p,"-open"),h),"".concat(p,"-inline"),E)),style:ve,tabIndex:-1,ref:$,onKeyDown:function(e){var n=e.keyCode,t=e.shiftKey;switch(n){case i.TAB:var a;if(n===i.TAB)if(t||document.activeElement!==ee.current){if(t&&document.activeElement===_.current){var o;null===(o=ee.current)||void 0===o||o.focus({preventScroll:!0})}}else null===(a=_.current)||void 0===a||a.focus({preventScroll:!0});break;case i.ESC:Y&&N&&(e.stopPropagation(),Y(e))}}},ce,d.createElement("div",{tabIndex:0,ref:_,style:k,"aria-hidden":"true","data-sentinel":"start"}),fe,d.createElement("div",{tabIndex:0,ref:ee,style:k,"aria-hidden":"true","data-sentinel":"end"})))}var E=d.forwardRef(b),w=function(e){var n=e.open,o=void 0!==n&&n,l=e.prefixCls,s=void 0===l?"rc-drawer":l,c=e.placement,i=void 0===c?"right":c,f=e.autoFocus,v=void 0===f||f,m=e.keyboard,h=void 0===m||m,y=e.width,C=void 0===y?378:y,k=e.mask,b=void 0===k||k,w=e.maskClosable,x=void 0===w||w,g=e.getContainer,N=e.forceRender,M=e.afterOpenChange,R=e.destroyOnClose,K=e.onMouseEnter,S=e.onMouseOver,D=e.onMouseLeave,O=e.onClick,j=e.onKeyDown,I=e.onKeyUp,L=e.panelRef,P=d.useState(!1),U=t(P,2),F=U[0],z=U[1],A=d.useState(!1),B=t(A,2),T=B[0],X=B[1];u((function(){X(!0)}),[]);var Y=!!T&&o,H=d.useRef(),V=d.useRef();u((function(){Y&&(V.current=document.activeElement)}),[Y]);var q=d.useMemo((function(){return{panel:L}}),[L]);if(!N&&!F&&!Y&&R)return null;var G={onMouseEnter:K,onMouseOver:S,onMouseLeave:D,onClick:O,onKeyDown:j,onKeyUp:I},J=a(a({},e),{},{open:Y,prefixCls:s,placement:i,autoFocus:v,keyboard:h,width:C,mask:b,maskClosable:x,inline:!1===g,afterOpenChange:function(e){var n,t;(z(e),null==M||M(e),e||!V.current||null!==(n=H.current)&&void 0!==n&&n.contains(V.current))||(null===(t=V.current)||void 0===t||t.focus({preventScroll:!0}))},ref:H},G);return d.createElement(p.Provider,{value:q},d.createElement(r,{open:Y||N||F,autoDestroy:!1,getContainer:g,autoLock:b&&(Y||F)},d.createElement(E,J)))};export{w as D};
