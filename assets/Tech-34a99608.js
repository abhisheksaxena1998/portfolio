import{j as r,r as e}from"./react-d998b26c.js";import"./Earth-a7c69335.js";import{C as s,O as a,P as i,u as m,F as n,D as p}from"./@react-three-187ad42e.js";import l from"./Loader-675f89fa.js";import"./maath-4138e411.js";import{S as c}from"./SectionWrapper-42c856eb.js";import{a as f}from"./index-8d342b17.js";import"./classnames-325479d5.js";import"./index-9f933b96.js";import"./react-dom-890fecd1.js";import"./react-router-dom-1b38aa6b.js";import"./react-router-e29e4047.js";import"./@remix-run-95056f6d.js";import"./@babel-43e769cc.js";import"./three-a42aa7ac.js";import"./react-use-measure-761a5d94.js";import"./debounce-5580f047.js";import"./its-fine-845edb61.js";import"./react-reconciler-32468f67.js";import"./scheduler-765c72db.js";import"./zustand-5d5ab9ea.js";import"./three-stdlib-949ab433.js";import"./mmd-parser-06216fd5.js";import"./react-merge-refs-239dbb3c.js";import"./suspend-react-4f9dedb1.js";import"./styles-bea25d13.js";import"./framer-motion-480b3473.js";const d=t=>{const[o]=m([t.imgUrl]);return r.jsxs(n,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[r.jsx("ambientLight",{intensity:.25}),r.jsx("directionalLight",{position:[0,0,.05]}),r.jsxs("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[r.jsx("icosahedronGeometry",{args:[1,1]}),r.jsx("meshStandardMaterial",{color:"#fff8eb",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),r.jsx(p,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],scale:1,map:o,flatShading:!0})]})]})},x=({icon:t})=>r.jsxs(s,{frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},children:[r.jsxs(e.Suspense,{fallback:r.jsx(l,{}),children:[r.jsx(a,{enableZoom:!1}),r.jsx(d,{imgUrl:t})]}),r.jsx(i,{all:!0})]}),h=()=>r.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-10",children:f.map(t=>r.jsx("div",{className:"w-28 h-28",children:r.jsx(x,{icon:t.icon})},t.name))}),q=c(h,"");export{q as default};
