import{k as N,l as L,g as $,f as A,a as M,e as j}from"./@babel-d329d0e8.js";import{r as t}from"./react-e38afb93.js";import{s as F,k as G,G as I,z as K}from"./rc-util-11732fe4.js";import{i as T}from"./resize-observer-polyfill-0f9f8adb.js";var c=new Map;function V(e){e.forEach(function(i){var r,o=i.target;(r=c.get(o))===null||r===void 0||r.forEach(function(n){return n(o)})})}var O=new T(V);function X(e,i){c.has(e)||(c.set(e,new Set),O.observe(e)),c.get(e).add(i)}function Y(e,i){c.has(e)&&(c.get(e).delete(i),c.get(e).size||(O.unobserve(e),c.delete(e)))}var q=function(e){N(r,e);var i=L(r);function r(){return $(this,r),i.apply(this,arguments)}return A(r,[{key:"render",value:function(){return this.props.children}}]),r}(t.Component),m=t.createContext(null);function J(e){var i=e.children,r=e.onBatchResize,o=t.useRef(0),n=t.useRef([]),a=t.useContext(m),v=t.useCallback(function(l,s,u){o.current+=1;var d=o.current;n.current.push({size:l,element:s,data:u}),Promise.resolve().then(function(){d===o.current&&(r==null||r(n.current),n.current=[])}),a==null||a(l,s,u)},[r,a]);return t.createElement(m.Provider,{value:v},i)}function Q(e,i){var r=e.children,o=e.disabled,n=t.useRef(null),a=t.useRef(null),v=t.useContext(m),l=typeof r=="function",s=l?r(n):r,u=t.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),d=!l&&t.isValidElement(s)&&F(s),C=d?s.ref:null,D=t.useMemo(function(){return G(C,n)},[C,n]),b=function(){return I(n.current)||I(a.current)};t.useImperativeHandle(i,function(){return b()});var z=t.useRef(e);z.current=e;var E=t.useCallback(function(f){var w=z.current,_=w.onResize,P=w.data,k=f.getBoundingClientRect(),g=k.width,p=k.height,h=f.offsetWidth,R=f.offsetHeight,x=Math.floor(g),y=Math.floor(p);if(u.current.width!==x||u.current.height!==y||u.current.offsetWidth!==h||u.current.offsetHeight!==R){var W={width:x,height:y,offsetWidth:h,offsetHeight:R};u.current=W;var S=h===Math.round(g)?g:h,B=R===Math.round(p)?p:R,H=M(M({},W),{},{offsetWidth:S,offsetHeight:B});v==null||v(H,f,P),_&&Promise.resolve().then(function(){_(H,f)})}},[]);return t.useEffect(function(){var f=b();return f&&!o&&X(f,E),function(){return Y(f,E)}},[n.current,o]),t.createElement(q,{ref:a},d?t.cloneElement(s,{ref:D}):s)}var U=t.forwardRef(Q),Z="rc-observer-key";function ee(e,i){var r=e.children,o=typeof r=="function"?[r]:K(r);return o.map(function(n,a){var v=(n==null?void 0:n.key)||"".concat(Z,"-").concat(a);return t.createElement(U,j({},e,{key:v,ref:a===0?i:void 0}),n)})}var re=t.forwardRef(ee);re.Collection=J;export{re as R};
