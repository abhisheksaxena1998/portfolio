import{r as e}from"./react.DlfX74Oz.js";var t,r,n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,a=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&l(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&l(e,r,t[r]);return e};function f(e,t,r){if(!e)return;if(!0===r(e))return e;let n=e.child;for(;n;){const e=f(n,t,r);if(e)return e;n=n.sibling}}function d(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}"undefined"==typeof window||!(null==(t=window.document)?void 0:t.createElement)&&"ReactNative"!==(null==(r=window.navigator)?void 0:r.product)?e.useEffect:e.useLayoutEffect;const p=console.error;console.error=function(){const e=[...arguments].join("");if(!(null==e?void 0:e.startsWith("Warning:"))||!e.includes("useContext"))return p.apply(this,arguments);console.error=p};const y=d(e.createContext(null));class m extends e.Component{render(){return e.createElement(y.Provider,{value:this._reactInternals},this.props.children)}}function v(){const t=function(){const t=e.useContext(y);if(null===t)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const r=e.useId();return e.useMemo((()=>{for(const e of[t,null==t?void 0:t.alternate]){if(!e)continue;const t=f(e,!1,(e=>{let t=e.memoizedState;for(;t;){if(t.memoizedState===r)return!0;t=t.next}}));if(t)return t}}),[t,r])}(),[r]=e.useState((()=>new Map));r.clear();let n=t;for(;n;){if(n.type&&"object"==typeof n.type){const t=void 0===n.type._context&&n.type.Provider===n.type?n.type:n.type._context;t&&t!==y&&!r.has(t)&&r.set(t,e.useContext(d(t)))}n=n.return}return r}function b(){const t=v();return e.useMemo((()=>Array.from(t.keys()).reduce(((r,n)=>c=>{return e.createElement(r,null,e.createElement(n.Provider,(u=a({},c),s={value:t.get(n)},o(u,i(s)))));var u,s}),(t=>e.createElement(m,a({},t))))),[t])}export{m as F,b as u};
