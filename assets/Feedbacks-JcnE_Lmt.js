import{R as g,j as e}from"./index-aWk6bGbh.js";import{m as o,s as t}from"./styles-677GbWdC.js";import{S as b,f as N,t as w}from"./SectionWrapper-FGOqxUXy.js";import{t as v}from"./index-zrPh9aRe.js";const u=g.memo(({index:s,testimonial:a,image:l,event:p,repo_url:i,redirect_url:c,forks:r,stars:x,visitors:n,points:m,isMobile:j,award_text:d,award_link:f})=>e.jsxs(o.div,{variants:!j&&N("","spring",s*.5,.75),className:"bg-black-200 p-10 rounded-3xl xs:w-[] w-full",children:[e.jsx("p",{className:"text-white font-black text-[40px]",children:p}),e.jsxs("div",{className:"mt-1",children:[e.jsx("p",{className:"text-white tracking-wider text-[18px]",children:a}),d&&e.jsx("a",{href:f,children:e.jsx("div",{className:"text-white tracking-wider text-[18px] mt-2",children:e.jsx("p",{className:"award-text",children:d})})}),e.jsxs("div",{className:"mt-7 flex justify-between items-center gap-1 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row",children:[e.jsxs("div",{className:"flex-4 flex flex-col px-3 py-1 gap-5",children:[m&&m.map(h=>e.jsxs("p",{className:"mt-1 text-secondary text-[18px]",children:[e.jsx("span",{className:"blue-text-gradient",children:"●"}),h]},h)),i&&e.jsxs(e.Fragment,{children:[e.jsx("a",{href:c,children:e.jsx("img",{loading:"lazy",src:i,alt:`feedback_by-${s}`,className:"w-[20rem]"})}),e.jsx("span",{className:"text-white font-medium text-[16px]",children:e.jsx("span",{className:"blue-text-gradient",children:e.jsxs("a",{href:c,children:["Repository Statistics:",e.jsxs("p",{className:"flex flex-row py-4",children:[n&&e.jsx("img",{src:n,alt:"github visitors"}),x&&e.jsx("img",{src:x,alt:"github stars"}),r&&e.jsx("img",{src:r,alt:"github forks"})]})]})})})]})]}),e.jsx("img",{loading:"lazy",src:l,alt:`feedback_by-${s}`,className:"w-[15rem] h-[15rem] rounded-full object-cover"})]})]})]})),y=()=>{const s=window.innerWidth<768;return e.jsxs("div",{className:"mt-12 bg-black-100 rounded-[20px]",children:[e.jsx("div",{className:`bg-tertiary rounded-2xl ${t.padding} min-h-[300px]`,children:e.jsxs(o.div,{variants:!s&&w(),children:[e.jsx("p",{className:t.sectionSubText}),e.jsx("h2",{className:t.sectionHeadText,children:"ACHIEVEMENTS."})]})}),e.jsx("div",{className:`-mt-20 pb-14 ${t.paddingX} flex flex-wrap gap-7`,children:v.map((a,l)=>e.jsx(u,{index:l,isMobile:s,...a},a.event))})]})},$=b(y,"achievements");export{$ as default};
