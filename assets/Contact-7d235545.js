import{_ as d}from"./index-1c01b3b8.js";import{r as o,a as C,j as e}from"./react-d998b26c.js";import{s as g}from"./styles-bea25d13.js";import{S as R,s as y}from"./SectionWrapper-42c856eb.js";import{notification as A}from"./antd-d6c152b0.js";import{m as b}from"./framer-motion-480b3473.js";import"./react-dom-890fecd1.js";import"./classnames-325479d5.js";import"./react-router-dom-1b38aa6b.js";import"./react-router-e29e4047.js";import"./@remix-run-95056f6d.js";import"./@ant-design-a403c479.js";import"./rc-util-6fbd7337.js";import"./react-is-e8e5dbb3.js";import"./@babel-43e769cc.js";import"./@emotion-c0b5c018.js";import"./stylis-fad5b415.js";import"./throttle-debounce-87e7e444.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./json2mq-6694b9c9.js";import"./string-convert-c60507dd.js";import"./@ctrl-fb5a5473.js";import"./rc-resize-observer-ee76393b.js";import"./rc-pagination-689bade9.js";import"./rc-picker-5c9fc3e9.js";import"./dayjs-8c906c2d.js";import"./@rc-component-93a12345.js";import"./rc-motion-1104756f.js";import"./scroll-into-view-if-needed-640b7801.js";import"./compute-scroll-into-view-50f8bc03.js";import"./rc-notification-640eed4a.js";import"./rc-dialog-144699b2.js";import"./rc-field-form-d131c68b.js";import"./async-validator-dee29e8b.js";import"./rc-select-6326b7aa.js";import"./rc-overflow-309b0131.js";import"./rc-virtual-list-146b36c3.js";import"./rc-tooltip-b02001df.js";import"./rc-dropdown-e84c210a.js";import"./rc-menu-e18a1022.js";import"./rc-checkbox-49342b76.js";import"./rc-tabs-4bc3661a.js";import"./rc-cascader-d273894e.js";import"./rc-tree-24082d90.js";import"./rc-collapse-2336b029.js";import"./rc-input-number-a86df21e.js";import"./rc-input-dfa5175e.js";import"./rc-textarea-f64ac05f.js";import"./rc-drawer-403ae98d.js";import"./rc-image-83392328.js";import"./rc-mentions-986dbed8.js";import"./rc-progress-22284798.js";import"./qrcode.react-9f9145c0.js";import"./rc-rate-14af8693.js";import"./rc-segmented-01a11e80.js";import"./rc-slider-fe241175.js";import"./rc-steps-9d441ee9.js";import"./rc-switch-65294e1c.js";import"./rc-table-401596bf.js";import"./rc-tree-select-0a47c3bb.js";import"./copy-to-clipboard-ee38022b.js";import"./toggle-selection-93f4ad84.js";import"./rc-upload-af68c002.js";const S=o.lazy(()=>d(()=>import("./@emailjs-c1ac3191.js"),[])),E=o.lazy(()=>d(()=>import("./Earth-8d62705d.js"),["assets/Earth-8d62705d.js","assets/index-1c01b3b8.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/react-dom-890fecd1.js","assets/react-router-dom-1b38aa6b.js","assets/react-router-e29e4047.js","assets/@remix-run-95056f6d.js","assets/index-e44c70e5.css","assets/@react-three-6f724e08.js","assets/@babel-43e769cc.js","assets/three-4dacbd90.js","assets/react-use-measure-761a5d94.js","assets/debounce-5580f047.js","assets/its-fine-845edb61.js","assets/react-reconciler-32468f67.js","assets/scheduler-765c72db.js","assets/zustand-5d5ab9ea.js","assets/maath-a70faed0.js","assets/three-stdlib-63fdb085.js","assets/mmd-parser-06216fd5.js","assets/ktx-parse-b17e1334.js","assets/zstddec-5cb485fa.js","assets/opentype.js-95d064b1.js","assets/react-merge-refs-239dbb3c.js","assets/suspend-react-4f9dedb1.js"])),T=o.lazy(()=>d(()=>import("./react-google-recaptcha-217abae1.js"),["assets/react-google-recaptcha-217abae1.js","assets/react-d998b26c.js","assets/classnames-325479d5.js","assets/prop-types-bef3c79f.js","assets/react-async-script-d8ed0cd6.js","assets/hoist-non-react-statics-679fe31b.js","assets/react-is-e8e5dbb3.js"])),I=C.createContext({name:"Default"}),P=()=>{var f;const[v,m]=o.useState(null),u=o.useRef(),a=o.useRef(null),[r,x]=o.useState({name:"",email:"",message:""}),[_,n]=o.useState(!1),[j,N]=A.useNotification(),l=(t,i,s,c)=>{j[t]({message:`${s}`,description:`${c}!`,placement:i})},w=o.useMemo(()=>({name:"Ant Design"}),[]),p=t=>{const{target:i}=t,{name:s,value:c}=i;x({...r,[s]:c})};o.useEffect(()=>{let t=a.current.getValue(),i=h(t);m(i)},[u,(f=a==null?void 0:a.current)==null?void 0:f.getValue(),r]);const h=t=>!!t,k=t=>{t.preventDefault(),n(!0);let i=a.current.getValue();a.current.reset();let s=h(i);m(s),v===!0?S.send("service_nseufki","template_vmxepet",{from_name:r.name,to_name:"Abhishek",from_email:r.email,to_email:"developerabhe@gmail.com",message:r.message},"sRJPnnabw6HIjFNHF").then(()=>{n(!1),x({name:"",email:"",message:""}),l("success","topRight","Thank you."," I will get back to you as soon as possible.")},()=>{n(!1),l("error","topRight","Something went wrong!","Please try again later!")}):(n(!1),l("warning","topRight","Complete captcha","Please select 'I'm not a robot'"))};return e.jsxs(I.Provider,{value:w,children:[N,e.jsxs("div",{className:"xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden",children:[e.jsxs(b.div,{variants:y("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[e.jsx("p",{className:g.sectionSubText,children:"Get in touch"}),e.jsx("h3",{className:g.sectionHeadText,children:"Contact."}),e.jsxs("form",{ref:u,onSubmit:k,className:"mt-12 flex flex-col gap-8",children:[e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Name"}),e.jsx("input",{type:"text",name:"name",value:r.name,onChange:p,placeholder:"What's your good name?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",required:!0})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your email"}),e.jsx("input",{type:"email",name:"email",value:r.email,onChange:p,placeholder:"What's your web address?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",required:!0})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Message"}),e.jsx("textarea",{rows:7,name:"message",value:r.message,onChange:p,placeholder:"What you want to say?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",required:!0})]}),e.jsx("label",{className:"flex flex-col py-4 px-0",children:e.jsx(T,{className:"recaptcha",theme:"dark",sitekey:"6LfoMWgmAAAAANR0h8irfrJoyVyv26ZvI8ILyvlp",ref:a,onChange:t=>m(t)})}),e.jsx("button",{type:"submit",className:"bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",children:_?"Sending...":"Send"})]})]}),e.jsx(b.div,{variants:y("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:e.jsx(E,{})})]})]})},Oe=R(P,"contact");export{Oe as default};
