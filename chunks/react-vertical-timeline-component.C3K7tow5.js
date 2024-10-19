import{d as e,g as t}from"./classnames.BmZ8OyLm.js";import{r as l}from"./react.DlfX74Oz.js";import{p as n}from"./prop-types.DurDQcTs.js";import{r as a}from"./react-intersection-observer.B3Z3ip77.js";function i(e,t){for(var l=0;l<t.length;l++){const n=t[l];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const l=Object.getOwnPropertyDescriptor(n,t);l&&Object.defineProperty(e,t,l.get?l:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r={__esModule:!0,default:void 0},o=u(l),s=u(n),c=u(e);function u(e){return e&&e.__esModule?e:{default:e}}const d=({animate:e=!0,className:t="",layout:l="2-columns",lineColor:n="#FFF",children:a})=>("object"==typeof window&&document.documentElement.style.setProperty("--line-color",n),o.default.createElement("div",{className:(0,c.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":"2-columns"===l,"vertical-timeline--one-column-left":"1-column"===l||"1-column-left"===l,"vertical-timeline--one-column-right":"1-column-right"===l})},a));d.propTypes={children:s.default.oneOfType([s.default.arrayOf(s.default.node),s.default.node]).isRequired,className:s.default.string,animate:s.default.bool,layout:s.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:s.default.string};var f=d;r.default=f;var m={__esModule:!0,default:void 0},p=h(l),v=h(n),y=h(e),g=a;function h(e){return e&&e.__esModule?e:{default:e}}const b=({children:e="",className:t="",contentArrowStyle:l=null,contentStyle:n=null,date:a="",dateClassName:i="",icon:r=null,iconClassName:o="",iconOnClick:s=null,onTimelineElementClick:c=null,iconStyle:u=null,id:d="",position:f="",style:m=null,textClassName:v="",intersectionObserverProps:h={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:b=!1})=>p.default.createElement(g.InView,h,(({inView:g,ref:h})=>p.default.createElement("div",{ref:h,id:d,className:(0,y.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===f,"vertical-timeline-element--right":"right"===f,"vertical-timeline-element--no-children":""===e}),style:m},p.default.createElement(p.default.Fragment,null,p.default.createElement("span",{style:u,onClick:s,className:(0,y.default)(o,"vertical-timeline-element-icon",{"bounce-in":g||b,"is-hidden":!(g||b)})},r),p.default.createElement("div",{style:n,onClick:c,className:(0,y.default)(v,"vertical-timeline-element-content",{"bounce-in":g||b,"is-hidden":!(g||b)})},p.default.createElement("div",{style:l,className:"vertical-timeline-element-content-arrow"}),e,p.default.createElement("span",{className:(0,y.default)(i,"vertical-timeline-element-date")},a))))));b.propTypes={children:v.default.oneOfType([v.default.arrayOf(v.default.node),v.default.node]),className:v.default.string,contentArrowStyle:v.default.shape({}),contentStyle:v.default.shape({}),date:v.default.node,dateClassName:v.default.string,icon:v.default.element,iconClassName:v.default.string,iconStyle:v.default.shape({}),iconOnClick:v.default.func,onTimelineElementClick:v.default.func,id:v.default.string,position:v.default.string,style:v.default.shape({}),textClassName:v.default.string,visible:v.default.bool,intersectionObserverProps:v.default.shape({root:v.default.object,rootMargin:v.default.string,threshold:v.default.number,triggerOnce:v.default.bool})};var N=b;m.default=N;var O={VerticalTimeline:r.default,VerticalTimelineElement:m.default};const C=i({__proto__:null,default:t(O)},[O]);export{C as i};
