const e=[];function t(e,t,o=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;const r=e.length;if(t.length!==r)return!1;for(let n=0;n<r;n++)if(!o(e[n],t[n]))return!1;return!0}function o(o,r=null,n=!1,s={}){null===r&&(r=[o]);for(const l of e)if(t(r,l.keys,l.equal)){if(n)return;if(Object.prototype.hasOwnProperty.call(l,"error"))throw l.error;if(Object.prototype.hasOwnProperty.call(l,"response"))return s.lifespan&&s.lifespan>0&&(l.timeout&&clearTimeout(l.timeout),l.timeout=setTimeout(l.remove,s.lifespan)),l.response;if(!n)throw l.promise}const i={keys:r,equal:s.equal,remove:()=>{const t=e.indexOf(i);-1!==t&&e.splice(t,1)},promise:(f=o,"object"==typeof f&&"function"==typeof f.then?o:o(...r)).then((e=>{i.response=e,s.lifespan&&s.lifespan>0&&(i.timeout=setTimeout(i.remove,s.lifespan))})).catch((e=>i.error=e))};var f;if(e.push(i),!n)throw i.promise}const r=(e,t,r)=>o(e,t,!1,r),n=(e,t,r)=>{o(e,t,!0,r)},s=o=>{if(void 0===o||0===o.length)e.splice(0,e.length);else{const r=e.find((e=>t(o,e.keys,e.equal)));r&&r.remove()}};export{s as c,n as p,r as s};
