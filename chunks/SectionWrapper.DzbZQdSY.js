import{j as a}from"./react.DlfX74Oz.js";import{s as i}from"./styles.BMfF9tGN.js";import{m as e}from"./framer-motion.BKBc6LeW.js";const s=a=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:a}}}),t=(a,i,e,s)=>({hidden:{x:"left"===a?100:"right"===a?-100:0,y:"up"===a?100:"down"===a?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:i,delay:e,duration:s,ease:"easeOut"}}}),n=(a,i,e,s)=>({hidden:{x:"left"===a?"-100%":"right"===a?"100%":0,y:"up"===a||"down"===a?"100%":0},show:{x:0,y:0,transition:{type:i,delay:e,duration:s,ease:"easeOut"}}}),o={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},r=(s,t)=>function(){return a.jsxs(e.section,{variants:{hidden:{},show:{transition:{staggerChildren:n,delayChildren:o||0}}},initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${i.padding} max-w-7xl mx-auto relative z-0`,children:[a.jsx("span",{className:"hash-span",id:t,children:" "}),a.jsx(s,{})]});var n,o};export{r as S,o as c,t as f,n as s,s as t};
