import{r as e}from"./react.DlfX74Oz.js";import{h as n,i as t,j as r}from"./@rc-component.CaAxqRoJ.js";import{t as o,o as l,G as a,d as c,j as i,A as u,c as s,q as f,J as d,T as m,L as p,l as v,f as x,E as h,p as y,D as C}from"./rc-util.DIscDwjl.js";import{c as w,d as g,b as E,e as S,g as b,k as N,f as R}from"./@babel.BGkJ1U9u.js";import{c as k}from"./classnames.BmZ8OyLm.js";import{R as I}from"./rc-resize-observer.onB48-vm.js";import{L}from"./rc-virtual-list.Bugby_hm.js";var H={},T="rc-table-internal-hook",M=n(),W=M.makeImmutable,K=M.responseImmutable,z=M.useImmutableMark,O=t(),P=e.createContext({renderWithProps:!1});function B(e){var n=[],t={};return e.forEach((function(e){for(var r,o=e||{},l=o.key,a=o.dataIndex,c=l||(r=a,null==r?[]:Array.isArray(r)?r:[r]).join("-")||"RC_TABLE_KEY";t[c];)c="".concat(c,"_next");t[c]=!0,n.push(c)})),n}function A(e){return null!=e}function j(n,t,r,c,i,u){var s=e.useContext(P),f=z();return o((function(){if(A(c))return[c];var o,l=null==t||""===t?[]:Array.isArray(t)?t:[t],u=a(n,l),f=u,d=void 0;if(i){var m=i(u,n,r);!(o=m)||"object"!==g(o)||Array.isArray(o)||e.isValidElement(o)?f=m:(f=m.children,d=m.props,s.renderWithProps=!0)}return[f,d]}),[f,n,c,t,i,r],(function(e,n){if(u){var t=w(e,2)[1],r=w(n,2)[1];return u(r,t)}return!!s.renderWithProps||!l(e,n,!0)}))}function F(n){var t,o,l,a,i,u,s,f,d=n.component,m=n.children,p=n.ellipsis,v=n.scope,x=n.prefixCls,h=n.className,y=n.align,C=n.record,N=n.render,R=n.dataIndex,I=n.renderIndex,L=n.shouldCellUpdate,H=n.index,T=n.rowType,M=n.colSpan,W=n.rowSpan,K=n.fixLeft,z=n.fixRight,P=n.firstFixLeft,B=n.lastFixLeft,A=n.firstFixRight,F=n.lastFixRight,_=n.appendNode,D=n.additionalProps,X=void 0===D?{}:D,V=n.isSticky,U="".concat(x,"-cell"),Y=r(O,["supportSticky","allColumnsFixedLeft","rowHoverable"]),q=Y.supportSticky,G=Y.allColumnsFixedLeft,J=Y.rowHoverable,Q=j(C,R,I,m,N,L),Z=w(Q,2),$=Z[0],ee=Z[1],ne={},te="number"==typeof K&&q,re="number"==typeof z&&q;te&&(ne.position="sticky",ne.left=K),re&&(ne.position="sticky",ne.right=z);var oe=null!==(t=null!==(o=null!==(l=null==ee?void 0:ee.colSpan)&&void 0!==l?l:X.colSpan)&&void 0!==o?o:M)&&void 0!==t?t:1,le=null!==(a=null!==(i=null!==(u=null==ee?void 0:ee.rowSpan)&&void 0!==u?u:X.rowSpan)&&void 0!==i?i:W)&&void 0!==a?a:1,ae=function(e,n){return r(O,(function(t){var r,o,l,a;return[(r=e,o=n||1,l=t.hoverStartRow,a=t.hoverEndRow,r<=a&&r+o-1>=l),t.onHover]}))}(H,le),ce=w(ae,2),ie=ce[0],ue=ce[1],se=c((function(e){var n;C&&ue(H,H+le-1),null==X||null===(n=X.onMouseEnter)||void 0===n||n.call(X,e)})),fe=c((function(e){var n;C&&ue(-1,-1),null==X||null===(n=X.onMouseLeave)||void 0===n||n.call(X,e)}));if(0===oe||0===le)return null;var de=null!==(s=X.title)&&void 0!==s?s:function(n){var t,r=n.ellipsis,o=n.rowType,l=n.children,a=!0===r?{showTitle:!0}:r;return a&&(a.showTitle||"header"===o)&&("string"==typeof l||"number"==typeof l?t=l.toString():e.isValidElement(l)&&"string"==typeof l.props.children&&(t=l.props.children)),t}({rowType:T,ellipsis:p,children:$}),me=k(U,h,(E(E(E(E(E(E(E(E(E(E(f={},"".concat(U,"-fix-left"),te&&q),"".concat(U,"-fix-left-first"),P&&q),"".concat(U,"-fix-left-last"),B&&q),"".concat(U,"-fix-left-all"),B&&G&&q),"".concat(U,"-fix-right"),re&&q),"".concat(U,"-fix-right-first"),A&&q),"".concat(U,"-fix-right-last"),F&&q),"".concat(U,"-ellipsis"),p),"".concat(U,"-with-append"),_),"".concat(U,"-fix-sticky"),(te||re)&&V&&q),E(f,"".concat(U,"-row-hover"),!ee&&ie)),X.className,null==ee?void 0:ee.className),pe={};y&&(pe.textAlign=y);var ve=S(S(S(S({},ne),X.style),pe),null==ee?void 0:ee.style),xe=$;return"object"!==g(xe)||Array.isArray(xe)||e.isValidElement(xe)||(xe=null),p&&(B||A)&&(xe=e.createElement("span",{className:"".concat(U,"-content")},xe)),e.createElement(d,b({},ee,X,{className:me,style:ve,title:de,scope:v,onMouseEnter:J?se:void 0,onMouseLeave:J?fe:void 0,colSpan:1!==oe?oe:null,rowSpan:1!==le?le:null}),_,xe)}const _=e.memo(F);function D(e,n,t,r,o){var l,a,c=t[e]||{},i=t[n]||{};"left"===c.fixed?l=r.left["rtl"===o?n:e]:"right"===i.fixed&&(a=r.right["rtl"===o?e:n]);var u=!1,s=!1,f=!1,d=!1,m=t[n+1],p=t[e-1],v=m&&!m.fixed||p&&!p.fixed||t.every((function(e){return"left"===e.fixed}));if("rtl"===o){if(void 0!==l)d=!(p&&"left"===p.fixed)&&v;else if(void 0!==a){f=!(m&&"right"===m.fixed)&&v}}else if(void 0!==l){u=!(m&&"left"===m.fixed)&&v}else if(void 0!==a){s=!(p&&"right"===p.fixed)&&v}return{fixLeft:l,fixRight:a,lastFixLeft:u,firstFixRight:s,lastFixRight:f,firstFixLeft:d,isSticky:r.isSticky}}var X=e.createContext({});var V=["children"];function U(e){return e.children}U.Row=function(n){var t=n.children,r=N(n,V);return e.createElement("tr",r,t)},U.Cell=function(n){var t=n.className,o=n.index,l=n.children,a=n.colSpan,c=void 0===a?1:a,i=n.rowSpan,u=n.align,s=r(O,["prefixCls","direction"]),f=s.prefixCls,d=s.direction,m=e.useContext(X),p=m.scrollColumnIndex,v=m.stickyOffsets,x=o+c-1+1===p?c+1:c,h=D(o,o+x-1,m.flattenColumns,v,d);return e.createElement(_,b({className:t,index:o,component:"td",prefixCls:f,record:null,dataIndex:null,align:u,colSpan:x,rowSpan:i,render:function(){return l}},h))};const Y=K((function(n){var t=n.children,o=n.stickyOffsets,l=n.flattenColumns,a=r(O,"prefixCls"),c=l.length-1,i=l[c],u=e.useMemo((function(){return{stickyOffsets:o,flattenColumns:l,scrollColumnIndex:null!=i&&i.scrollbar?c:null}}),[i,l,c,o]);return e.createElement(X.Provider,{value:u},e.createElement("tfoot",{className:"".concat(a,"-summary")},t))}));var q=U;function G(e,n,t,r,o,l,a){e.push({record:n,indent:t,index:a});var c=l(n),i=null==o?void 0:o.has(c);if(n&&Array.isArray(n[r])&&i)for(var u=0;u<n[r].length;u+=1)G(e,n[r][u],t+1,r,o,l,u)}function J(n,t,r,o){return e.useMemo((function(){if(null!=r&&r.size){for(var e=[],l=0;l<(null==n?void 0:n.length);l+=1){G(e,n[l],0,t,r,o,l)}return e}return null==n?void 0:n.map((function(e,n){return{record:e,indent:0,index:n}}))}),[n,t,r,o])}function Q(e,n,t,o){var l,a=r(O,["prefixCls","fixedInfoList","flattenColumns","expandableType","expandRowByClick","onTriggerExpand","rowClassName","expandedRowClassName","indentSize","expandIcon","expandedRowRender","expandIconColumnIndex","expandedKeys","childrenColumnName","rowExpandable","onRow"]),i=a.flattenColumns,u=a.expandableType,s=a.expandedKeys,f=a.childrenColumnName,d=a.onTriggerExpand,m=a.rowExpandable,p=a.onRow,v=a.expandRowByClick,x=a.rowClassName,h="nest"===u,y="row"===u&&(!m||m(e)),C=y||h,w=s&&s.has(n),g=f&&e&&e[f],E=c(d),b=null==p?void 0:p(e,t),N=null==b?void 0:b.onClick;"string"==typeof x?l=x:"function"==typeof x&&(l=x(e,t,o));var R=B(i);return S(S({},a),{},{columnsKey:R,nestExpandable:h,expanded:w,hasNestChildren:g,record:e,onTriggerExpand:E,rowSupportExpand:y,expandable:C,rowProps:S(S({},b),{},{className:k(l,null==b?void 0:b.className),onClick:function(n){v&&C&&d(e,n);for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];null==N||N.apply(void 0,[n].concat(r))}})})}function Z(n){var t=n.prefixCls,o=n.children,l=n.component,a=n.cellComponent,c=n.className,i=n.expanded,u=n.colSpan,s=n.isEmpty,f=r(O,["scrollbarSize","fixHeader","fixColumn","componentWidth","horizonScroll"]),d=f.scrollbarSize,m=f.fixHeader,p=f.fixColumn,v=f.componentWidth,x=f.horizonScroll,h=o;return(s?x&&v:p)&&(h=e.createElement("div",{style:{width:v-(m&&!s?d:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(t,"-expanded-row-fixed")},h)),e.createElement(l,{className:c,style:{display:i?null:"none"}},e.createElement(_,{component:a,prefixCls:t,colSpan:u},h))}function $(n,t,r,o,l){var a,c,i=n.record,u=n.prefixCls,s=n.columnsKey,f=n.fixedInfoList,d=n.expandIconColumnIndex,m=n.nestExpandable,p=n.indentSize,v=n.expandIcon,x=n.expanded,h=n.hasNestChildren,y=n.onTriggerExpand,C=s[r],w=f[r];return r===(d||0)&&m&&(a=e.createElement(e.Fragment,null,e.createElement("span",{style:{paddingLeft:"".concat(p*o,"px")},className:"".concat(u,"-row-indent indent-level-").concat(o)}),v({prefixCls:u,expanded:x,expandable:h,record:i,onExpand:y}))),t.onCell&&(c=t.onCell(i,l)),{key:C,fixedInfo:w,appendCellNode:a,additionalCellProps:c||{}}}const ee=K((function(n){var t=n.className,r=n.style,o=n.record,l=n.index,a=n.renderIndex,c=n.rowKey,i=n.indent,u=void 0===i?0:i,s=n.rowComponent,f=n.cellComponent,d=n.scopeCellComponent,m=Q(o,c,l,u),p=m.prefixCls,v=m.flattenColumns,x=m.expandedRowClassName,h=m.expandedRowRender,y=m.rowProps,C=m.expanded,w=m.rowSupportExpand,g=e.useRef(!1);g.current||(g.current=C);var E,N=x&&x(o,l,u),R=e.createElement(s,b({},y,{"data-row-key":c,className:k(t,"".concat(p,"-row"),"".concat(p,"-row-level-").concat(u),null==y?void 0:y.className,u>=1?N:""),style:S(S({},r),null==y?void 0:y.style)}),v.map((function(n,t){var r=n.render,c=n.dataIndex,i=n.className,s=$(m,n,t,u,l),v=s.key,x=s.fixedInfo,h=s.appendCellNode,y=s.additionalCellProps;return e.createElement(_,b({className:i,ellipsis:n.ellipsis,align:n.align,scope:n.rowScope,component:n.rowScope?d:f,prefixCls:p,key:v,record:o,index:l,renderIndex:a,dataIndex:c,render:r,shouldCellUpdate:n.shouldCellUpdate},x,{appendNode:h,additionalProps:y}))})));if(w&&(g.current||C)){var I=h(o,l,u+1,C);E=e.createElement(Z,{expanded:C,className:k("".concat(p,"-expanded-row"),"".concat(p,"-expanded-row-level-").concat(u+1),N),prefixCls:p,component:s,cellComponent:f,colSpan:v.length,isEmpty:!1},I)}return e.createElement(e.Fragment,null,R,E)}));function ne(n){var t=n.columnKey,r=n.onColumnResize,o=e.useRef();return e.useEffect((function(){o.current&&r(t,o.current.offsetWidth)}),[]),e.createElement(I,{data:t},e.createElement("td",{ref:o,style:{padding:0,border:0,height:0}},e.createElement("div",{style:{height:0,overflow:"hidden"}}," ")))}function te(n){var t=n.prefixCls,r=n.columnsKey,o=n.onColumnResize;return e.createElement("tr",{"aria-hidden":"true",className:"".concat(t,"-measure-row"),style:{height:0,fontSize:0}},e.createElement(I.Collection,{onBatchResize:function(e){e.forEach((function(e){var n=e.data,t=e.size;o(n,t.offsetWidth)}))}},r.map((function(n){return e.createElement(ne,{key:n,columnKey:n,onColumnResize:o})}))))}const re=K((function(n){var t,o=n.data,l=n.measureColumnWidth,a=r(O,["prefixCls","getComponent","onColumnResize","flattenColumns","getRowKey","expandedKeys","childrenColumnName","emptyNode"]),c=a.prefixCls,i=a.getComponent,u=a.onColumnResize,s=a.flattenColumns,f=a.getRowKey,d=a.expandedKeys,m=a.childrenColumnName,p=a.emptyNode,v=J(o,m,d,f),x=e.useRef({renderWithProps:!1}),h=i(["body","wrapper"],"tbody"),y=i(["body","row"],"tr"),C=i(["body","cell"],"td"),w=i(["body","cell"],"th");t=o.length?v.map((function(n,t){var r=n.record,o=n.indent,l=n.index,a=f(r,t);return e.createElement(ee,{key:a,rowKey:a,record:r,index:t,renderIndex:l,rowComponent:y,cellComponent:C,scopeCellComponent:w,getRowKey:f,indent:o})})):e.createElement(Z,{expanded:!0,className:"".concat(c,"-placeholder"),prefixCls:c,component:y,cellComponent:C,colSpan:s.length,isEmpty:!0},p);var g=B(s);return e.createElement(P.Provider,{value:x.current},e.createElement(h,{className:"".concat(c,"-tbody")},l&&e.createElement(te,{prefixCls:c,columnsKey:g,onColumnResize:u}),t))}));var oe=["expandable"],le="RC_TABLE_INTERNAL_COL_DEFINE";var ae=["columnType"];function ce(n){for(var t=n.colWidths,o=n.columns,l=n.columCount,a=r(O,["tableLayout"]).tableLayout,c=[],i=!1,u=(l||o.length)-1;u>=0;u-=1){var s=t[u],f=o&&o[u],d=void 0,m=void 0;if(f&&(d=f[le],"auto"===a&&(m=f.minWidth)),s||m||d||i){var p=d||{};p.columnType;var v=N(p,ae);c.unshift(e.createElement("col",b({key:u,style:{width:s,minWidth:m}},v))),i=!0}}return e.createElement("colgroup",null,c)}var ie=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];var ue=e.forwardRef((function(n,t){var o=n.className,l=n.noData,a=n.columns,c=n.flattenColumns,u=n.colWidths,s=n.columCount,f=n.stickyOffsets,d=n.direction,m=n.fixHeader,p=n.stickyTopOffset,v=n.stickyBottomOffset,x=n.stickyClassName,h=n.onScroll,y=n.maxContentScroll,C=n.children,w=N(n,ie),g=r(O,["prefixCls","scrollbarSize","isSticky","getComponent"]),b=g.prefixCls,I=g.scrollbarSize,L=g.isSticky,H=(0,g.getComponent)(["header","table"],"table"),T=L&&!m?0:I,M=e.useRef(null),W=e.useCallback((function(e){i(t,e),i(M,e)}),[]);e.useEffect((function(){var e;function n(e){var n=e,t=n.currentTarget,r=n.deltaX;r&&(h({currentTarget:t,scrollLeft:t.scrollLeft+r}),e.preventDefault())}return null===(e=M.current)||void 0===e||e.addEventListener("wheel",n,{passive:!1}),function(){var e;null===(e=M.current)||void 0===e||e.removeEventListener("wheel",n)}}),[]);var K=e.useMemo((function(){return c.every((function(e){return e.width}))}),[c]),z=c[c.length-1],P={fixed:z?z.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(b,"-cell-scrollbar")}}},B=e.useMemo((function(){return T?[].concat(R(a),[P]):a}),[T,a]),A=e.useMemo((function(){return T?[].concat(R(c),[P]):c}),[T,c]),j=e.useMemo((function(){var e=f.right,n=f.left;return S(S({},f),{},{left:"rtl"===d?[].concat(R(n.map((function(e){return e+T}))),[0]):n,right:"rtl"===d?e:[].concat(R(e.map((function(e){return e+T}))),[0]),isSticky:L})}),[T,f,L]),F=function(n,t){return e.useMemo((function(){for(var e=[],r=0;r<t;r+=1){var o=n[r];if(void 0===o)return null;e[r]=o}return e}),[n.join("_"),t])}(u,s);return e.createElement("div",{style:S({overflow:"hidden"},L?{top:p,bottom:v}:{}),ref:W,className:k(o,E({},x,!!x))},e.createElement(H,{style:{tableLayout:"fixed",visibility:l||F?null:"hidden"}},(!l||!y||K)&&e.createElement(ce,{colWidths:F?[].concat(R(F),[T]):[],columCount:s+1,columns:A}),C(S(S({},w),{},{stickyOffsets:j,columns:B,flattenColumns:A}))))}));const se=e.memo(ue);var fe=function(n){var t,o=n.cells,l=n.stickyOffsets,a=n.flattenColumns,c=n.rowComponent,i=n.cellComponent,u=n.onHeaderRow,s=n.index,f=r(O,["prefixCls","direction"]),d=f.prefixCls,m=f.direction;u&&(t=u(o.map((function(e){return e.column})),s));var p=B(o.map((function(e){return e.column})));return e.createElement(c,t,o.map((function(n,t){var r,o=n.column,c=D(n.colStart,n.colEnd,a,l,m);return o&&o.onHeaderCell&&(r=n.column.onHeaderCell(o)),e.createElement(_,b({},n,{scope:o.title?n.colSpan>1?"colgroup":"col":null,ellipsis:o.ellipsis,align:o.align,component:i,prefixCls:d,key:p[t]},c,{additionalProps:r,rowType:"header"}))})))};const de=K((function(n){var t=n.stickyOffsets,o=n.columns,l=n.flattenColumns,a=n.onHeaderRow,c=r(O,["prefixCls","getComponent"]),i=c.prefixCls,u=c.getComponent,s=e.useMemo((function(){return function(e){var n=[];!function e(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;n[o]=n[o]||[];var l=r;return t.filter(Boolean).map((function(t){var r={key:t.key,className:t.className||"",children:t.title,column:t,colStart:l},a=1,c=t.children;return c&&c.length>0&&(a=e(c,l,o+1).reduce((function(e,n){return e+n}),0),r.hasSubColumns=!0),"colSpan"in t&&(a=t.colSpan),"rowSpan"in t&&(r.rowSpan=t.rowSpan),r.colSpan=a,r.colEnd=r.colStart+a-1,n[o].push(r),l+=a,a}))}(e,0);for(var t=n.length,r=function(e){n[e].forEach((function(n){"rowSpan"in n||n.hasSubColumns||(n.rowSpan=t-e)}))},o=0;o<t;o+=1)r(o);return n}(o)}),[o]),f=u(["header","wrapper"],"thead"),d=u(["header","row"],"tr"),m=u(["header","cell"],"th");return e.createElement(f,{className:"".concat(i,"-thead")},s.map((function(n,r){return e.createElement(fe,{key:r,flattenColumns:l,cells:n,stickyOffsets:t,rowComponent:d,cellComponent:m,onHeaderRow:a,index:r})})))}));function me(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"number"==typeof n?n:n.endsWith("%")?e*parseFloat(n)/100:null}var pe=["children"],ve=["fixed"];function xe(n){return u(n).filter((function(n){return e.isValidElement(n)})).map((function(e){var n=e.key,t=e.props,r=t.children,o=N(t,pe),l=S({key:n},o);return r&&(l.children=xe(r)),l}))}function he(e){return e.filter((function(e){return e&&"object"===g(e)&&!e.hidden})).map((function(e){var n=e.children;return n&&n.length>0?S(S({},e),{},{children:he(n)}):e}))}function ye(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key";return e.filter((function(e){return e&&"object"===g(e)})).reduce((function(e,t,r){var o=t.fixed,l=!0===o?"left":o,a="".concat(n,"-").concat(r),c=t.children;return c&&c.length>0?[].concat(R(e),R(ye(c,a).map((function(e){return S({fixed:l},e)})))):[].concat(R(e),[S(S({key:a},t),{},{fixed:l})])}),[])}function Ce(n,t){var r=n.prefixCls,o=n.columns,l=n.children,a=n.expandable,c=n.expandedKeys,i=n.columnTitle,u=n.getRowKey,s=n.onTriggerExpand,f=n.expandIcon,d=n.rowExpandable,m=n.expandIconColumnIndex,p=n.direction,v=n.expandRowByClick,x=n.columnWidth,h=n.fixed,y=n.scrollWidth,C=n.clientWidth,g=e.useMemo((function(){return he((o||xe(l)||[]).slice())}),[o,l]),b=e.useMemo((function(){if(a){var n=g.slice();if(!n.includes(H)){var t=m||0;t>=0&&n.splice(t,0,H)}var o=n.indexOf(H);n=n.filter((function(e,n){return e!==H||n===o}));var l,p=g[o];l="left"!==h&&!h||m?"right"!==h&&!h||m!==g.length?p?p.fixed:null:"right":"left";var y=E(E(E(E(E(E({},le,{className:"".concat(r,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),"title",i),"fixed",l),"className","".concat(r,"-row-expand-icon-cell")),"width",x),"render",(function(n,t,o){var l=u(t,o),a=c.has(l),i=!d||d(t),m=f({prefixCls:r,expanded:a,expandable:i,record:t,onExpand:s});return v?e.createElement("span",{onClick:function(e){return e.stopPropagation()}},m):m}));return n.map((function(e){return e===H?y:e}))}return g.filter((function(e){return e!==H}))}),[a,g,u,c,f,p]),R=e.useMemo((function(){var e=b;return t&&(e=t(e)),e.length||(e=[{render:function(){return null}}]),e}),[t,b,p]),k=e.useMemo((function(){return"rtl"===p?function(e){return e.map((function(e){var n=e.fixed,t=N(e,ve),r=n;return"left"===n?r="right":"right"===n&&(r="left"),S({fixed:r},t)}))}(ye(R)):ye(R)}),[R,p,y]),I=e.useMemo((function(){for(var e=-1,n=k.length-1;n>=0;n-=1){var t=k[n].fixed;if("left"===t||!0===t){e=n;break}}if(e>=0)for(var r=0;r<=e;r+=1){var o=k[r].fixed;if("left"!==o&&!0!==o)return!0}var l=k.findIndex((function(e){return"right"===e.fixed}));if(l>=0)for(var a=l;a<k.length;a+=1){if("right"!==k[a].fixed)return!0}return!1}),[k]),L=function(n,t,r){return e.useMemo((function(){if(t&&t>0){var e=0,o=0;n.forEach((function(n){var r=me(t,n.width);r?e+=r:o+=1}));var l=Math.max(t,r),a=Math.max(l-e,o),c=o,i=a/o,u=0,s=n.map((function(e){var n=S({},e),r=me(t,n.width);if(r)n.width=r;else{var o=Math.floor(i);n.width=1===c?a:o,a-=o,c-=1}return u+=n.width,n}));if(u<l){var f=l/u;a=l,s.forEach((function(e,n){var t=Math.floor(e.width*f);e.width=n===s.length-1?a:t,a-=t}))}return[s,Math.max(u,l)]}return[n,t]}),[n,t,r])}(k,y,C),T=w(L,2),M=T[0],W=T[1];return[R,M,W,I]}function we(n){var t=n.prefixCls,r=n.record,o=n.onExpand,l=n.expanded,a=n.expandable,c="".concat(t,"-row-expand-icon");if(!a)return e.createElement("span",{className:k(c,"".concat(t,"-row-spaced"))});return e.createElement("span",{className:k(c,E(E({},"".concat(t,"-row-expanded"),l),"".concat(t,"-row-collapsed"),!l)),onClick:function(e){o(r,e),e.stopPropagation()}})}function ge(n,t,r){var o=function(e){var n,t=e.expandable,r=N(e,oe);return!1===(n="expandable"in e?S(S({},r),t):r).showExpandColumn&&(n.expandIconColumnIndex=-1),n}(n),l=o.expandIcon,a=o.expandedRowKeys,c=o.defaultExpandedRowKeys,i=o.defaultExpandAllRows,u=o.expandedRowRender,s=o.onExpand,f=o.onExpandedRowsChange,d=l||we,m=o.childrenColumnName||"children",p=e.useMemo((function(){return u?"row":!!(n.expandable&&n.internalHooks===T&&n.expandable.__PARENT_RENDER_ICON__||t.some((function(e){return e&&"object"===g(e)&&e[m]})))&&"nest"}),[!!u,t]),v=e.useState((function(){return c||(i?function(e,n,t){var r=[];return function e(o){(o||[]).forEach((function(o,l){r.push(n(o,l)),e(o[t])}))}(e),r}(t,r,m):[])})),x=w(v,2),h=x[0],y=x[1],C=e.useMemo((function(){return new Set(a||h||[])}),[a,h]),E=e.useCallback((function(e){var n,o=r(e,t.indexOf(e)),l=C.has(o);l?(C.delete(o),n=R(C)):n=[].concat(R(C),[o]),y(n),s&&s(!l,e),f&&f(n)}),[r,C,t,s,f]);return[o,p,C,d,m,E]}function Ee(n){var t=e.useRef(n),r=e.useState({}),o=w(r,2)[1],l=e.useRef(null),a=e.useRef([]);return e.useEffect((function(){return function(){l.current=null}}),[]),[t.current,function(e){a.current.push(e);var n=Promise.resolve();l.current=n,n.then((function(){if(l.current===n){var e=a.current,r=t.current;a.current=[],e.forEach((function(e){t.current=e(t.current)})),l.current=null,r!==t.current&&o({})}}))}]}var Se=s()?window:null;function be(n){var t=n.className,r=n.children;return e.createElement("div",{className:t},r)}var Ne=function(n,t){var o,l,a=n.scrollBodyRef,c=n.onScroll,i=n.offsetScroll,u=n.container,s=r(O,"prefixCls"),v=(null===(o=a.current)||void 0===o?void 0:o.scrollWidth)||0,x=(null===(l=a.current)||void 0===l?void 0:l.clientWidth)||0,h=v&&x*(x/v),y=e.useRef(),C=Ee({scrollLeft:0,isHiddenScrollBar:!0}),g=w(C,2),b=g[0],N=g[1],R=e.useRef({delta:0,x:0}),I=e.useState(!1),L=w(I,2),H=L[0],T=L[1],M=e.useRef(null);e.useEffect((function(){return function(){f.cancel(M.current)}}),[]);var W=function(){T(!1)},K=function(e){var n,t=(e||(null===(n=window)||void 0===n?void 0:n.event)).buttons;if(H&&0!==t){var r=R.current.x+e.pageX-R.current.x-R.current.delta;r<=0&&(r=0),r+h>=x&&(r=x-h),c({scrollLeft:r/x*(v+2)}),R.current.x=e.pageX}else H&&T(!1)},z=function(){M.current=f((function(){if(a.current){var e=p(a.current).top,n=e+a.current.offsetHeight,t=u===window?document.documentElement.scrollTop+window.innerHeight:p(u).top+u.clientHeight;n-m()<=t||e>=t-i?N((function(e){return S(S({},e),{},{isHiddenScrollBar:!0})})):N((function(e){return S(S({},e),{},{isHiddenScrollBar:!1})}))}}))},P=function(e){N((function(n){return S(S({},n),{},{scrollLeft:e/v*x||0})}))};return e.useImperativeHandle(t,(function(){return{setScrollLeft:P,checkScrollBarVisible:z}})),e.useEffect((function(){var e=d(document.body,"mouseup",W,!1),n=d(document.body,"mousemove",K,!1);return z(),function(){e.remove(),n.remove()}}),[h,H]),e.useEffect((function(){var e=d(u,"scroll",z,!1),n=d(window,"resize",z,!1);return function(){e.remove(),n.remove()}}),[u]),e.useEffect((function(){b.isHiddenScrollBar||N((function(e){var n=a.current;return n?S(S({},e),{},{scrollLeft:n.scrollLeft/n.scrollWidth*n.clientWidth}):e}))}),[b.isHiddenScrollBar]),v<=x||!h||b.isHiddenScrollBar?null:e.createElement("div",{style:{height:m(),width:x,bottom:i},className:"".concat(s,"-sticky-scroll")},e.createElement("div",{onMouseDown:function(e){e.persist(),R.current.delta=e.pageX-b.scrollLeft,R.current.x=0,T(!0),e.preventDefault()},ref:y,className:k("".concat(s,"-sticky-scroll-bar"),E({},"".concat(s,"-sticky-scroll-bar-active"),H)),style:{width:"".concat(h,"px"),transform:"translate3d(".concat(b.scrollLeft,"px, 0, 0)")}}))};const Re=e.forwardRef(Ne);var ke="rc-table",Ie=[],Le={};function He(){return"No Data"}function Te(n,t){var r=S({rowKey:"key",prefixCls:ke,emptyText:He},n),i=r.prefixCls,u=r.className,s=r.rowClassName,f=r.style,d=r.data,m=r.rowKey,p=r.scroll,N=r.tableLayout,R=r.direction,L=r.title,H=r.footer,M=r.summary,W=r.caption,K=r.id,z=r.showHeader,P=r.components,j=r.emptyText,F=r.onRow,_=r.onHeaderRow,X=r.onScroll,V=r.internalHooks,q=r.transformColumns,G=r.internalRefs,J=r.tailor,Q=r.getContainerWidth,Z=r.sticky,$=r.rowHoverable,ee=void 0===$||$,ne=d||Ie,te=!!ne.length,oe=V===T,le=e.useCallback((function(e,n){return a(P,e)||n}),[P]),ae=e.useMemo((function(){return"function"==typeof m?m:function(e){return e&&e[m]}}),[m]),ie=le(["body"]),ue=function(){var n=e.useState(-1),t=w(n,2),r=t[0],o=t[1],l=e.useState(-1),a=w(l,2),c=a[0],i=a[1];return[r,c,e.useCallback((function(e,n){o(e),i(n)}),[])]}(),fe=w(ue,3),me=fe[0],pe=fe[1],ve=fe[2],xe=ge(r,ne,ae),he=w(xe,6),ye=he[0],we=he[1],Ne=he[2],Te=he[3],Me=he[4],We=he[5],Ke=null==p?void 0:p.x,ze=e.useState(0),Oe=w(ze,2),Pe=Oe[0],Be=Oe[1],Ae=Ce(S(S(S({},r),ye),{},{expandable:!!ye.expandedRowRender,columnTitle:ye.columnTitle,expandedKeys:Ne,getRowKey:ae,onTriggerExpand:We,expandIcon:Te,expandIconColumnIndex:ye.expandIconColumnIndex,direction:R,scrollWidth:oe&&J&&"number"==typeof Ke?Ke:null,clientWidth:Pe}),oe?q:null),je=w(Ae,4),Fe=je[0],_e=je[1],De=je[2],Xe=je[3],Ve=null!=De?De:Ke,Ue=e.useMemo((function(){return{columns:Fe,flattenColumns:_e}}),[Fe,_e]),Ye=e.useRef(),qe=e.useRef(),Ge=e.useRef(),Je=e.useRef();e.useImperativeHandle(t,(function(){return{nativeElement:Ye.current,scrollTo:function(e){var n,t;if(Ge.current instanceof HTMLElement){var r=e.index,o=e.top,l=e.key;if("number"!=typeof(t=o)||Number.isNaN(t)){var a,c=null!=l?l:ae(ne[r]);null===(a=Ge.current.querySelector('[data-row-key="'.concat(c,'"]')))||void 0===a||a.scrollIntoView()}else{var i;null===(i=Ge.current)||void 0===i||i.scrollTo({top:o})}}else null!==(n=Ge.current)&&void 0!==n&&n.scrollTo&&Ge.current.scrollTo(e)}}}));var Qe,Ze,$e,en=e.useRef(),nn=e.useState(!1),tn=w(nn,2),rn=tn[0],on=tn[1],ln=e.useState(!1),an=w(ln,2),cn=an[0],un=an[1],sn=Ee(new Map),fn=w(sn,2),dn=fn[0],mn=fn[1],pn=B(_e).map((function(e){return dn.get(e)})),vn=e.useMemo((function(){return pn}),[pn.join("_")]),xn=function(n,t,r){return e.useMemo((function(){var e=t.length,o=function(e,r,o){for(var l=[],a=0,c=e;c!==r;c+=o)l.push(a),t[c].fixed&&(a+=n[c]||0);return l},l=o(0,e,1),a=o(e-1,-1,-1).reverse();return"rtl"===r?{left:a,right:l}:{left:l,right:a}}),[n,t,r])}(vn,_e,R),hn=p&&A(p.y),yn=p&&A(Ve)||Boolean(ye.fixed),Cn=yn&&_e.some((function(e){return e.fixed})),wn=e.useRef(),gn=function(n,t){var r="object"===g(n)?n:{},o=r.offsetHeader,l=void 0===o?0:o,a=r.offsetSummary,c=void 0===a?0:a,i=r.offsetScroll,u=void 0===i?0:i,s=r.getContainer,f=(void 0===s?function(){return Se}:s)()||Se,d=!!n;return e.useMemo((function(){return{isSticky:d,stickyClassName:d?"".concat(t,"-sticky-holder"):"",offsetHeader:l,offsetSummary:c,offsetScroll:u,container:f}}),[d,u,l,c,t,f])}(Z,i),En=gn.isSticky,Sn=gn.offsetHeader,bn=gn.offsetSummary,Nn=gn.offsetScroll,Rn=gn.stickyClassName,kn=gn.container,In=e.useMemo((function(){return null==M?void 0:M(ne)}),[M,ne]),Ln=(hn||En)&&e.isValidElement(In)&&In.type===U&&In.props.fixed;hn&&(Ze={overflowY:te?"scroll":"auto",maxHeight:p.y}),yn&&(Qe={overflowX:"auto"},hn||(Ze={overflowY:"hidden"}),$e={width:!0===Ve?"auto":Ve,minWidth:"100%"});var Hn=e.useCallback((function(e,n){v(Ye.current)&&mn((function(t){if(t.get(e)!==n){var r=new Map(t);return r.set(e,n),r}return t}))}),[]),Tn=function(){var n=e.useRef(null),t=e.useRef();function r(){window.clearTimeout(t.current)}return e.useEffect((function(){return r}),[]),[function(e){n.current=e,r(),t.current=window.setTimeout((function(){n.current=null,t.current=void 0}),100)},function(){return n.current}]}(),Mn=w(Tn,2),Wn=Mn[0],Kn=Mn[1];function zn(e,n){n&&("function"==typeof n?n(e):n.scrollLeft!==e&&(n.scrollLeft=e,n.scrollLeft!==e&&setTimeout((function(){n.scrollLeft=e}),0)))}var On=c((function(e){var n,t=e.currentTarget,r=e.scrollLeft,o="rtl"===R,l="number"==typeof r?r:t.scrollLeft,a=t||Le;Kn()&&Kn()!==a||(Wn(a),zn(l,qe.current),zn(l,Ge.current),zn(l,en.current),zn(l,null===(n=wn.current)||void 0===n?void 0:n.setScrollLeft));var c=t||qe.current;if(c){var i="number"==typeof Ve?Ve:c.scrollWidth,u=c.clientWidth;if(i===u)return on(!1),void un(!1);o?(on(-l<i-u),un(-l>0)):(on(l>0),un(l<i-u))}})),Pn=c((function(e){On(e),null==X||X(e)})),Bn=function(){var e;yn&&Ge.current?On({currentTarget:C(Ge.current),scrollLeft:null===(e=Ge.current)||void 0===e?void 0:e.scrollLeft}):(on(!1),un(!1))},An=e.useRef(!1);e.useEffect((function(){An.current&&Bn()}),[yn,d,Fe.length]),e.useEffect((function(){An.current=!0}),[]);var jn=e.useState(0),Fn=w(jn,2),_n=Fn[0],Dn=Fn[1],Xn=e.useState(!0),Vn=w(Xn,2),Un=Vn[0],Yn=Vn[1];e.useEffect((function(){J&&oe||(Ge.current instanceof Element?Dn(x(Ge.current).width):Dn(x(Je.current).width)),Yn(h("position","sticky"))}),[]),e.useEffect((function(){oe&&G&&(G.body.current=Ge.current)}));var qn,Gn=e.useCallback((function(n){return e.createElement(e.Fragment,null,e.createElement(de,n),"top"===Ln&&e.createElement(Y,n,In))}),[Ln,In]),Jn=e.useCallback((function(n){return e.createElement(Y,n,In)}),[In]),Qn=le(["table"],"table"),Zn=e.useMemo((function(){return N||(Cn?"max-content"===Ve?"auto":"fixed":hn||En||_e.some((function(e){return e.ellipsis}))?"fixed":"auto")}),[hn,Cn,_e,N,En]),$n={colWidths:vn,columCount:_e.length,stickyOffsets:xn,onHeaderRow:_,fixHeader:hn,scroll:p},et=e.useMemo((function(){return te?null:"function"==typeof j?j():j}),[te,j]),nt=e.createElement(re,{data:ne,measureColumnWidth:hn||yn||En}),tt=e.createElement(ce,{colWidths:_e.map((function(e){return e.width})),columns:_e}),rt=null!=W?e.createElement("caption",{className:"".concat(i,"-caption")},W):void 0,ot=y(r,{data:!0}),lt=y(r,{aria:!0});if(hn||En){var at;"function"==typeof ie?(at=ie(ne,{scrollbarSize:_n,ref:Ge,onScroll:On}),$n.colWidths=_e.map((function(e,n){var t=e.width,r=n===_e.length-1?t-_n:t;return"number"!=typeof r||Number.isNaN(r)?0:r}))):at=e.createElement("div",{style:S(S({},Qe),Ze),onScroll:Pn,ref:Ge,className:k("".concat(i,"-body"))},e.createElement(Qn,b({style:S(S({},$e),{},{tableLayout:Zn})},lt),rt,tt,nt,!Ln&&In&&e.createElement(Y,{stickyOffsets:xn,flattenColumns:_e},In)));var ct=S(S(S({noData:!ne.length,maxContentScroll:yn&&"max-content"===Ve},$n),Ue),{},{direction:R,stickyClassName:Rn,onScroll:On});qn=e.createElement(e.Fragment,null,!1!==z&&e.createElement(se,b({},ct,{stickyTopOffset:Sn,className:"".concat(i,"-header"),ref:qe}),Gn),at,Ln&&"top"!==Ln&&e.createElement(se,b({},ct,{stickyBottomOffset:bn,className:"".concat(i,"-summary"),ref:en}),Jn),En&&Ge.current&&Ge.current instanceof Element&&e.createElement(Re,{ref:wn,offsetScroll:Nn,scrollBodyRef:Ge,onScroll:On,container:kn}))}else qn=e.createElement("div",{style:S(S({},Qe),Ze),className:k("".concat(i,"-content")),onScroll:On,ref:Ge},e.createElement(Qn,b({style:S(S({},$e),{},{tableLayout:Zn})},lt),rt,tt,!1!==z&&e.createElement(de,b({},$n,Ue)),nt,In&&e.createElement(Y,{stickyOffsets:xn,flattenColumns:_e},In)));var it=e.createElement("div",b({className:k(i,u,E(E(E(E(E(E(E(E(E(E({},"".concat(i,"-rtl"),"rtl"===R),"".concat(i,"-ping-left"),rn),"".concat(i,"-ping-right"),cn),"".concat(i,"-layout-fixed"),"fixed"===N),"".concat(i,"-fixed-header"),hn),"".concat(i,"-fixed-column"),Cn),"".concat(i,"-fixed-column-gapped"),Cn&&Xe),"".concat(i,"-scroll-horizontal"),yn),"".concat(i,"-has-fix-left"),_e[0]&&_e[0].fixed),"".concat(i,"-has-fix-right"),_e[_e.length-1]&&"right"===_e[_e.length-1].fixed)),style:f,id:K,ref:Ye},ot),L&&e.createElement(be,{className:"".concat(i,"-title")},L(ne)),e.createElement("div",{ref:Je,className:"".concat(i,"-container")},qn),H&&e.createElement(be,{className:"".concat(i,"-footer")},H(ne)));yn&&(it=e.createElement(I,{onResize:function(e){var n,t=e.width;null===(n=wn.current)||void 0===n||n.checkScrollBarVisible();var r=Ye.current?Ye.current.offsetWidth:t;oe&&Q&&Ye.current&&(r=Q(Ye.current,r)||r),r!==Pe&&(Bn(),Be(r))}},it));var ut=function(e,n,t){var r=e.map((function(r,o){return D(o,o,e,n,t)}));return o((function(){return r}),[r],(function(e,n){return!l(e,n)}))}(_e,xn,R),st=e.useMemo((function(){return{scrollX:Ve,prefixCls:i,getComponent:le,scrollbarSize:_n,direction:R,fixedInfoList:ut,isSticky:En,supportSticky:Un,componentWidth:Pe,fixHeader:hn,fixColumn:Cn,horizonScroll:yn,tableLayout:Zn,rowClassName:s,expandedRowClassName:ye.expandedRowClassName,expandIcon:Te,expandableType:we,expandRowByClick:ye.expandRowByClick,expandedRowRender:ye.expandedRowRender,onTriggerExpand:We,expandIconColumnIndex:ye.expandIconColumnIndex,indentSize:ye.indentSize,allColumnsFixedLeft:_e.every((function(e){return"left"===e.fixed})),emptyNode:et,columns:Fe,flattenColumns:_e,onColumnResize:Hn,hoverStartRow:me,hoverEndRow:pe,onHover:ve,rowExpandable:ye.rowExpandable,onRow:F,getRowKey:ae,expandedKeys:Ne,childrenColumnName:Me,rowHoverable:ee}}),[Ve,i,le,_n,R,ut,En,Un,Pe,hn,Cn,yn,Zn,s,ye.expandedRowClassName,Te,we,ye.expandRowByClick,ye.expandedRowRender,We,ye.expandIconColumnIndex,ye.indentSize,et,Fe,_e,Hn,me,pe,ve,ye.rowExpandable,F,ae,Ne,Me,ee]);return e.createElement(O.Provider,{value:st},it)}var Me=e.forwardRef(Te);function We(e){return W(Me,e)}var Ke=We();Ke.EXPAND_COLUMN=H,Ke.INTERNAL_HOOKS=T,Ke.Column=function(e){return null},Ke.ColumnGroup=function(e){return null},Ke.Summary=q;var ze=t(null),Oe=t(null);function Pe(n){var t=n.rowInfo,o=n.column,l=n.colIndex,a=n.indent,c=n.index,i=n.component,u=n.renderIndex,s=n.record,f=n.style,d=n.className,m=n.inverse,p=n.getHeight,v=o.render,x=o.dataIndex,h=o.className,y=o.width,C=r(Oe,["columnsOffset"]).columnsOffset,w=$(t,o,l,a,c),g=w.key,E=w.fixedInfo,N=w.appendCellNode,R=w.additionalCellProps,I=R.style,L=R.colSpan,H=void 0===L?1:L,T=R.rowSpan,M=void 0===T?1:T,W=function(e,n,t){return t[e+(n||1)]-(t[e]||0)}(l-1,H,C),K=H>1?y-W:0,z=S(S(S({},I),f),{},{flex:"0 0 ".concat(W,"px"),width:"".concat(W,"px"),marginRight:K,pointerEvents:"auto"}),O=e.useMemo((function(){return m?M<=1:0===H||0===M||M>1}),[M,H,m]);O?z.visibility="hidden":m&&(z.height=null==p?void 0:p(M));var P=O?function(){return null}:v,B={};return 0!==M&&0!==H||(B.rowSpan=1,B.colSpan=1),e.createElement(_,b({className:k(h,d),ellipsis:o.ellipsis,align:o.align,scope:o.rowScope,component:i,prefixCls:t.prefixCls,key:g,record:s,index:c,renderIndex:u,dataIndex:x,render:P,shouldCellUpdate:o.shouldCellUpdate},E,{appendNode:N,additionalProps:S(S({},R),{},{style:z},B)}))}var Be=["data","index","className","rowKey","style","extra","getHeight"],Ae=K(e.forwardRef((function(n,t){var o,l=n.data,a=n.index,c=n.className,i=n.rowKey,u=n.style,s=n.extra,f=n.getHeight,d=N(n,Be),m=l.record,p=l.indent,v=l.index,x=r(O,["prefixCls","flattenColumns","fixColumn","componentWidth","scrollX"]),h=x.scrollX,y=x.flattenColumns,C=x.prefixCls,w=x.fixColumn,g=x.componentWidth,R=r(ze,["getComponent"]).getComponent,I=Q(m,i,a,p),L=R(["body","row"],"div"),H=R(["body","cell"],"div"),T=I.rowSupportExpand,M=I.expanded,W=I.rowProps,K=I.expandedRowRender,z=I.expandedRowClassName;if(T&&M){var P=K(m,a,p+1,M),B=null==z?void 0:z(m,a,p),A={};w&&(A={style:E({},"--virtual-width","".concat(g,"px"))});var j="".concat(C,"-expanded-row-cell");o=e.createElement(L,{className:k("".concat(C,"-expanded-row"),"".concat(C,"-expanded-row-level-").concat(p+1),B)},e.createElement(_,{component:H,prefixCls:C,className:k(j,E({},"".concat(j,"-fixed"),w)),additionalProps:A},P))}var F=S(S({},u),{},{width:h});s&&(F.position="absolute",F.pointerEvents="none");var D=e.createElement(L,b({},W,d,{"data-row-key":i,ref:T?null:t,className:k(c,"".concat(C,"-row"),null==W?void 0:W.className,E({},"".concat(C,"-row-extra"),s)),style:S(S({},F),null==W?void 0:W.style)}),y.map((function(n,t){return e.createElement(Pe,{key:t,component:H,rowInfo:I,column:n,colIndex:t,indent:p,index:a,renderIndex:v,record:m,inverse:s,getHeight:f})})));return T?e.createElement("div",{ref:t},D,o):D}))),je=K(e.forwardRef((function(n,t){var o=n.data,l=n.onScroll,a=r(O,["flattenColumns","onColumnResize","getRowKey","prefixCls","expandedKeys","childrenColumnName","scrollX"]),c=a.flattenColumns,i=a.onColumnResize,u=a.getRowKey,s=a.expandedKeys,f=a.prefixCls,d=a.childrenColumnName,m=a.scrollX,p=r(ze),v=p.sticky,x=p.scrollY,h=p.listItemHeight,y=p.getComponent,C=p.onScroll,E=e.useRef(),S=J(o,d,s,u),b=e.useMemo((function(){var e=0;return c.map((function(n){var t=n.width;return[n.key,t,e+=t]}))}),[c]),N=e.useMemo((function(){return b.map((function(e){return e[2]}))}),[b]);e.useEffect((function(){b.forEach((function(e){var n=w(e,2),t=n[0],r=n[1];i(t,r)}))}),[b]),e.useImperativeHandle(t,(function(){var e,n={scrollTo:function(e){var n;null===(n=E.current)||void 0===n||n.scrollTo(e)},nativeElement:null===(e=E.current)||void 0===e?void 0:e.nativeElement};return Object.defineProperty(n,"scrollLeft",{get:function(){var e;return(null===(e=E.current)||void 0===e?void 0:e.getScrollInfo().x)||0},set:function(e){var n;null===(n=E.current)||void 0===n||n.scrollTo({left:e})}}),n}));var R=function(e,n){var t,r=null===(t=S[n])||void 0===t?void 0:t.record,o=e.onCell;if(o){var l,a=o(r,n);return null!==(l=null==a?void 0:a.rowSpan)&&void 0!==l?l:1}return 1},k=e.useMemo((function(){return{columnsOffset:N}}),[N]),I="".concat(f,"-tbody"),H=y(["body","wrapper"]),T={};return v&&(T.position="sticky",T.bottom=0,"object"===g(v)&&v.offsetScroll&&(T.bottom=v.offsetScroll)),e.createElement(Oe.Provider,{value:k},e.createElement(L,{fullHeight:!1,ref:E,prefixCls:"".concat(I,"-virtual"),styles:{horizontalScrollBar:T},className:I,height:x,itemHeight:h||24,data:S,itemKey:function(e){return u(e.record)},component:H,scrollWidth:m,onVirtualScroll:function(e){var n,t=e.x;l({currentTarget:null===(n=E.current)||void 0===n?void 0:n.nativeElement,scrollLeft:t})},onScroll:C,extraRender:function(n){var t=n.start,r=n.end,o=n.getSize,l=n.offsetY;if(r<0)return null;for(var a=c.filter((function(e){return 0===R(e,t)})),i=t,s=function(e){if(!(a=a.filter((function(n){return 0===R(n,e)}))).length)return i=e,1},f=t;f>=0&&!s(f);f-=1);for(var d=c.filter((function(e){return 1!==R(e,r)})),m=r,p=function(e){if(!(d=d.filter((function(n){return 1!==R(n,e)}))).length)return m=Math.max(e-1,r),1},v=r;v<S.length&&!p(v);v+=1);for(var x=[],h=function(e){if(!S[e])return 1;c.some((function(n){return R(n,e)>1}))&&x.push(e)},y=i;y<=m;y+=1)h(y);return x.map((function(n){var t=S[n],r=u(t.record,n),a=o(r);return e.createElement(Ae,{key:n,data:t,rowKey:r,index:n,style:{top:-l+a.top},extra:!0,getHeight:function(e){var t=n+e-1,l=u(S[t].record,t),a=o(r,l);return a.bottom-a.top}})}))}},(function(n,t,r){var o=u(n.record,t);return e.createElement(Ae,{data:n,rowKey:o,index:t,style:r.style})})))}))),Fe=function(n,t){var r=t.ref,o=t.onScroll;return e.createElement(je,{ref:r,data:n,onScroll:o})};function _e(n,t){var r=n.data,o=n.columns,l=n.scroll,i=n.sticky,u=n.prefixCls,s=void 0===u?ke:u,f=n.className,d=n.listItemHeight,m=n.components,p=n.onScroll,v=l||{},x=v.x,h=v.y;"number"!=typeof x&&(x=1),"number"!=typeof h&&(h=500);var y=c((function(e,n){return a(m,e)||n})),C=c(p),w=e.useMemo((function(){return{sticky:i,scrollY:h,listItemHeight:d,getComponent:y,onScroll:C}}),[i,h,d,y,C]);return e.createElement(ze.Provider,{value:w},e.createElement(Ke,b({},n,{className:k(f,"".concat(s,"-virtual")),scroll:S(S({},l),{},{x:x}),components:S(S({},m),{},{body:null!=r&&r.length?Fe:void 0}),columns:o,internalHooks:T,tailor:!0,ref:t})))}var De=e.forwardRef(_e);function Xe(e){return W(De,e)}Xe();export{H as E,q as F,le as I,Xe as a,T as b,xe as c,We as g};
