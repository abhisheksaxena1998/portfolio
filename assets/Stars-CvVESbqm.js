import{r as e,j as i}from"./index-S090OQFS.js";import{R as P,g as w,e as y,D as m,M as z,V as M,C as j,P as C}from"./Preload-BAigKlBW.js";import{i as U}from"./index-0332b2ed.esm-oP10d936.js";import{_ as p}from"./extends-CF3RwP-h.js";const F=()=>parseInt(P.replace(/\D+/g,"")),_=F(),x=_>=154?"opaque_fragment":"output_fragment";class I extends w{constructor(r){super(r),this.onBeforeCompile=(t,o)=>{const{isWebGL2:s}=o.capabilities;t.fragmentShader=t.fragmentShader.replace(`#include <${x}>`,`
        ${s?`#include <${x}>`:`#extension GL_OES_standard_derivatives : enable
#include <${x}>`}
      vec2 cxy = 2.0 * gl_PointCoord - 1.0;
      float r = dot(cxy, cxy);
      float delta = fwidth(r);     
      float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
      gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
      #include <tonemapping_fragment>
      #include <${_>=154?"colorspace_fragment":"encodings_fragment"}>
      `)}}}const W=e.forwardRef((n,r)=>{const[t]=e.useState(()=>new I(null));return e.createElement("primitive",p({},n,{object:t,ref:r,attach:"material"}))});let c,d;const D=e.createContext(null),S=new z,A=new M,$=e.forwardRef(({children:n,range:r,limit:t=1e3,...o},s)=>{const a=e.useRef(null);e.useImperativeHandle(s,()=>a.current,[]);const[l,f]=e.useState([]),[[u,g,b]]=e.useState(()=>[new Float32Array(t*3),Float32Array.from({length:t*3},()=>1),Float32Array.from({length:t},()=>1)]);e.useEffect(()=>{a.current.geometry.attributes.position.needsUpdate=!0}),y(()=>{for(a.current.updateMatrix(),a.current.updateMatrixWorld(),S.copy(a.current.matrixWorld).invert(),a.current.geometry.drawRange.count=Math.min(t,r!==void 0?r:t,l.length),c=0;c<l.length;c++)d=l[c].current,d.getWorldPosition(A).applyMatrix4(S),A.toArray(u,c*3),a.current.geometry.attributes.position.needsUpdate=!0,d.matrixWorldNeedsUpdate=!0,d.color.toArray(g,c*3),a.current.geometry.attributes.color.needsUpdate=!0,b.set([d.size],c),a.current.geometry.attributes.size.needsUpdate=!0});const v=e.useMemo(()=>({getParent:()=>a,subscribe:E=>(f(h=>[...h,E]),()=>f(h=>h.filter(R=>R.current!==E.current)))}),[]);return e.createElement("points",p({userData:{instances:l},matrixAutoUpdate:!1,ref:a,raycast:()=>null},o),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:u.length/3,array:u,itemSize:3,usage:m}),e.createElement("bufferAttribute",{attach:"attributes-color",count:g.length/3,array:g,itemSize:3,usage:m}),e.createElement("bufferAttribute",{attach:"attributes-size",count:b.length,array:b,itemSize:1,usage:m})),e.createElement(D.Provider,{value:v},n))}),G=e.forwardRef(({children:n,positions:r,colors:t,sizes:o,stride:s=3,...a},l)=>{const f=e.useRef(null);return e.useImperativeHandle(l,()=>f.current,[]),y(()=>{const u=f.current.geometry.attributes;u.position.needsUpdate=!0,t&&(u.color.needsUpdate=!0),o&&(u.size.needsUpdate=!0)}),e.createElement("points",p({ref:f},a),e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",count:r.length/s,array:r,itemSize:s,usage:m}),t&&e.createElement("bufferAttribute",{attach:"attributes-color",count:t.length/s,array:t,itemSize:3,usage:m}),o&&e.createElement("bufferAttribute",{attach:"attributes-size",count:o.length/s,array:o,itemSize:1,usage:m})),n)}),V=e.forwardRef((n,r)=>n.positions instanceof Float32Array?e.createElement(G,p({},n,{ref:r})):e.createElement($,p({},n,{ref:r}))),k=n=>{const r=e.useRef(),[t]=e.useState(()=>U(new Float32Array(6e3),{radius:1.2}));return y((o,s)=>{r.current.rotation.x-=s/10,r.current.rotation.y-=s/15}),i.jsx("group",{rotation:[0,0,Math.PI/4],children:i.jsx(V,{ref:r,positions:t,stride:3,frustumCulled:!0,...n,children:i.jsx(W,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},L=()=>i.jsx("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:i.jsxs(j,{camera:{position:[0,0,1]},children:[i.jsx(e.Suspense,{fallback:null,children:i.jsx(k,{})}),i.jsx(C,{all:!0})]})});export{L as default};
