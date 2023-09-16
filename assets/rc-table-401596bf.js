import{f as $t,h as ln,i as Z}from"./@rc-component-93a12345.js";import{r as t}from"./react-d998b26c.js";import"./react-is-e8e5dbb3.js";import{c as D,d as Pe,b as P,e as h,g as J,h as Ee,f as ue}from"./@babel-43e769cc.js";import{c as q}from"./classnames-325479d5.js";import{q as Yn,o as Gn,F as qn,f as Jn,l as zn,A as Wt,c as At,I as Xe,d as On,J as Bn,h as Xt,Q as $n,D as Dt,x as Wn}from"./rc-util-6fbd7337.js";import{R as cn}from"./rc-resize-observer-ee76393b.js";import{L as Ut}from"./rc-virtual-list-146b36c3.js";var we={},Ue="rc-table-internal-hook",sn=$t(),Qn=sn.makeImmutable,Te=sn.responseImmutable,Vt=sn.useImmutableMark,ne=ln();function jt(e,r){var n=t.useRef(0);n.current+=1;var a=t.useRef(e),o=[];Object.keys(e||{}).map(function(c){var s;(e==null?void 0:e[c])!==((s=a.current)===null||s===void 0?void 0:s[c])&&o.push(c)}),a.current=e;var l=t.useRef([]);return o.length&&(l.current=o),t.useDebugValue(n.current),t.useDebugValue(l.current.join(", ")),r&&console.log("".concat(r,":"),n.current,l.current),n.current}var Yt=t.memo(function(){var e=jt();return t.createElement("h1",null,"Render Times: ",e)});Yt.displayName="RenderBlock";var Zn=t.createContext({renderWithProps:!1}),Gt="RC_TABLE_KEY";function qt(e){return e==null?[]:Array.isArray(e)?e:[e]}function Ve(e){var r=[],n={};return e.forEach(function(a){for(var o=a||{},l=o.key,c=o.dataIndex,s=l||qt(c).join("-")||Gt;n[s];)s="".concat(s,"_next");n[s]=!0,r.push(s)}),r}function an(e){return e!=null}function Jt(e){return e&&Pe(e)==="object"&&!Array.isArray(e)&&!t.isValidElement(e)}function Qt(e,r,n,a,o,l){var c=t.useContext(Zn),s=Vt(),i=Yn(function(){if(an(a))return[a];var u=r==null||r===""?[]:Array.isArray(r)?r:[r],m=qn(e,u),d=m,f=void 0;if(o){var v=o(m,e,n);Jt(v)?(d=v.children,f=v.props,c.renderWithProps=!0):d=v}return[d,f]},[s,e,a,r,o,n],function(u,m){if(l){var d=D(u,2),f=d[1],v=D(m,2),x=v[1];return l(x,f)}return c.renderWithProps?!0:!Gn(u,m,!0)});return i}function Zt(e,r,n,a){var o=e+r-1;return e<=a&&o>=n}function er(e,r){return Z(ne,function(n){var a=Zt(e,r||1,n.hoverStartRow,n.hoverEndRow);return[a,n.onHover]})}var nr=function(r){var n=r.ellipsis,a=r.rowType,o=r.children,l,c=n===!0?{showTitle:!0}:n;return c&&(c.showTitle||a==="header")&&(typeof o=="string"||typeof o=="number"?l=o.toString():t.isValidElement(o)&&typeof o.props.children=="string"&&(l=o.props.children)),l};function tr(e){var r,n,a,o,l,c,s,i,u=e.component,m=e.children,d=e.ellipsis,f=e.scope,v=e.prefixCls,x=e.className,R=e.align,C=e.record,w=e.render,g=e.dataIndex,E=e.renderIndex,H=e.shouldCellUpdate,b=e.index,I=e.rowType,z=e.colSpan,O=e.rowSpan,T=e.fixLeft,N=e.fixRight,y=e.firstFixLeft,p=e.lastFixLeft,S=e.firstFixRight,K=e.lastFixRight,_=e.appendNode,k=e.additionalProps,L=k===void 0?{}:k,F=e.isSticky,W="".concat(v,"-cell"),Y=Z(ne,["supportSticky","allColumnsFixedLeft"]),X=Y.supportSticky,pe=Y.allColumnsFixedLeft,de=Qt(C,g,E,m,w,H),te=D(de,2),A=te[0],V=te[1],Q={},fe=typeof T=="number"&&X,xe=typeof N=="number"&&X;fe&&(Q.position="sticky",Q.left=T),xe&&(Q.position="sticky",Q.right=N);var j=(r=(n=(a=V==null?void 0:V.colSpan)!==null&&a!==void 0?a:L.colSpan)!==null&&n!==void 0?n:z)!==null&&r!==void 0?r:1,U=(o=(l=(c=V==null?void 0:V.rowSpan)!==null&&c!==void 0?c:L.rowSpan)!==null&&l!==void 0?l:O)!==null&&o!==void 0?o:1,re=er(b,U),me=D(re,2),Ce=me[0],He=me[1],_e=function(Re){var G;C&&He(b,b+U-1),L==null||(G=L.onMouseEnter)===null||G===void 0||G.call(L,Re)},ye=function(Re){var G;C&&He(-1,-1),L==null||(G=L.onMouseLeave)===null||G===void 0||G.call(L,Re)};if(j===0||U===0)return null;var ae=(s=L.title)!==null&&s!==void 0?s:nr({rowType:I,ellipsis:d,children:A}),B=q(W,x,(i={},P(i,"".concat(W,"-fix-left"),fe&&X),P(i,"".concat(W,"-fix-left-first"),y&&X),P(i,"".concat(W,"-fix-left-last"),p&&X),P(i,"".concat(W,"-fix-left-all"),p&&pe&&X),P(i,"".concat(W,"-fix-right"),xe&&X),P(i,"".concat(W,"-fix-right-first"),S&&X),P(i,"".concat(W,"-fix-right-last"),K&&X),P(i,"".concat(W,"-ellipsis"),d),P(i,"".concat(W,"-with-append"),_),P(i,"".concat(W,"-fix-sticky"),(fe||xe)&&F&&X),P(i,"".concat(W,"-row-hover"),!V&&Ce),i),L.className,V==null?void 0:V.className),be={};R&&(be.textAlign=R);var ve=h(h(h(h({},Q),L.style),be),V==null?void 0:V.style),ce=A;return Pe(ce)==="object"&&!Array.isArray(ce)&&!t.isValidElement(ce)&&(ce=null),d&&(p||S)&&(ce=t.createElement("span",{className:"".concat(W,"-content")},ce)),t.createElement(u,J({},V,L,{className:B,style:ve,title:ae,scope:f,onMouseEnter:_e,onMouseLeave:ye,colSpan:j!==1?j:null,rowSpan:U!==1?U:null}),_,ce)}const Ne=t.memo(tr);function un(e,r,n,a,o,l){var c=n[e]||{},s=n[r]||{},i,u;c.fixed==="left"?i=a.left[o==="rtl"?r:e]:s.fixed==="right"&&(u=a.right[o==="rtl"?e:r]);var m=!1,d=!1,f=!1,v=!1,x=n[r+1],R=n[e-1],C=!(l!=null&&l.children);if(o==="rtl"){if(i!==void 0){var w=R&&R.fixed==="left";v=!w&&C}else if(u!==void 0){var g=x&&x.fixed==="right";f=!g&&C}}else if(i!==void 0){var E=x&&x.fixed==="left";m=!E&&C}else if(u!==void 0){var H=R&&R.fixed==="right";d=!H&&C}return{fixLeft:i,fixRight:u,lastFixLeft:m,firstFixRight:d,lastFixRight:f,firstFixLeft:v,isSticky:a.isSticky}}var et=t.createContext({});function rr(e){var r=e.className,n=e.index,a=e.children,o=e.colSpan,l=o===void 0?1:o,c=e.rowSpan,s=e.align,i=Z(ne,["prefixCls","direction"]),u=i.prefixCls,m=i.direction,d=t.useContext(et),f=d.scrollColumnIndex,v=d.stickyOffsets,x=d.flattenColumns,R=d.columns,C=n+l-1,w=C+1===f?l+1:l,g=un(n,n+w-1,x,v,m,R==null?void 0:R[n]);return t.createElement(Ne,J({className:r,index:n,component:"td",prefixCls:u,record:null,dataIndex:null,align:s,colSpan:w,rowSpan:c,render:function(){return a}},g))}var ar=["children"];function or(e){var r=e.children,n=Ee(e,ar);return t.createElement("tr",n,r)}function je(e){var r=e.children;return r}je.Row=or;je.Cell=rr;function lr(e){var r=e.children,n=e.stickyOffsets,a=e.flattenColumns,o=e.columns,l=Z(ne,"prefixCls"),c=a.length-1,s=a[c],i=t.useMemo(function(){return{stickyOffsets:n,flattenColumns:a,scrollColumnIndex:s!=null&&s.scrollbar?c:null,columns:o}},[s,a,c,n,o]);return t.createElement(et.Provider,{value:i},t.createElement("tfoot",{className:"".concat(l,"-summary")},r))}const De=Te(lr);var ir=je;function nt(e,r,n,a,o,l,c){e.push({record:r,indent:n,index:c});var s=l(r),i=o==null?void 0:o.has(s);if(r&&Array.isArray(r[a])&&i)for(var u=0;u<r[a].length;u+=1)nt(e,r[a][u],n+1,a,o,l,u)}function tt(e,r,n,a){var o=t.useMemo(function(){if(n!=null&&n.size){for(var l=[],c=0;c<(e==null?void 0:e.length);c+=1){var s=e[c];nt(l,s,0,r,n,a,c)}return l}return e==null?void 0:e.map(function(i,u){return{record:i,indent:0,index:u}})},[e,r,n,a]);return o}function rt(e){var r=e.prefixCls,n=e.children,a=e.component,o=e.cellComponent,l=e.className,c=e.expanded,s=e.colSpan,i=e.isEmpty,u=Z(ne,["scrollbarSize","fixHeader","fixColumn","componentWidth","horizonScroll"]),m=u.scrollbarSize,d=u.fixHeader,f=u.fixColumn,v=u.componentWidth,x=u.horizonScroll,R=n;return(i?x&&v:f)&&(R=t.createElement("div",{style:{width:v-(d?m:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(r,"-expanded-row-fixed")},R)),t.createElement(a,{className:l,style:{display:c?null:"none"}},t.createElement(Ne,{component:o,prefixCls:r,colSpan:s},R))}function at(e,r,n,a){var o=Z(ne,["prefixCls","fixedInfoList","flattenColumns","expandableType","expandRowByClick","onTriggerExpand","rowClassName","expandedRowClassName","indentSize","expandIcon","expandedRowRender","expandIconColumnIndex","expandedKeys","childrenColumnName","rowExpandable","onRow"]),l=o.flattenColumns,c=o.expandableType,s=o.expandedKeys,i=o.childrenColumnName,u=o.onTriggerExpand,m=o.rowExpandable,d=o.onRow,f=o.expandRowByClick,v=o.rowClassName,x=c==="nest",R=c==="row"&&(!m||m(e)),C=R||x,w=s&&s.has(r),g=i&&e&&e[i],E=Jn(u),H=d==null?void 0:d(e,n),b=H==null?void 0:H.onClick,I=function(N){f&&C&&u(e,N);for(var y=arguments.length,p=new Array(y>1?y-1:0),S=1;S<y;S++)p[S-1]=arguments[S];b==null||b.apply(void 0,[N].concat(p))},z;typeof v=="string"?z=v:typeof v=="function"&&(z=v(e,n,a));var O=Ve(l);return h(h({},o),{},{columnsKey:O,nestExpandable:x,expanded:w,hasNestChildren:g,record:e,onTriggerExpand:E,rowSupportExpand:R,expandable:C,rowProps:h(h({},H),{},{className:q(z,H==null?void 0:H.className),onClick:I})})}function ot(e,r,n,a,o){var l=e.record,c=e.prefixCls,s=e.columnsKey,i=e.fixedInfoList,u=e.expandIconColumnIndex,m=e.nestExpandable,d=e.indentSize,f=e.expandIcon,v=e.expanded,x=e.hasNestChildren,R=e.onTriggerExpand,C=s[n],w=i[n],g;n===(u||0)&&m&&(g=t.createElement(t.Fragment,null,t.createElement("span",{style:{paddingLeft:"".concat(d*a,"px")},className:"".concat(c,"-row-indent indent-level-").concat(a)}),f({prefixCls:c,expanded:v,expandable:x,record:l,onExpand:R})));var E;return r.onCell&&(E=r.onCell(l,o)),{key:C,fixedInfo:w,appendCellNode:g,additionalCellProps:E||{}}}function lt(e){var r=e.className,n=e.style,a=e.record,o=e.index,l=e.renderIndex,c=e.rowKey,s=e.indent,i=s===void 0?0:s,u=e.rowComponent,m=e.cellComponent,d=e.scopeCellComponent,f=at(a,c,o,i),v=f.prefixCls,x=f.flattenColumns,R=f.expandedRowClassName,C=f.expandedRowRender,w=f.rowProps,g=f.expanded,E=f.rowSupportExpand,H=t.useState(!1),b=D(H,2),I=b[0],z=b[1];t.useEffect(function(){g&&z(!0)},[g]);var O=t.createElement(u,J({},w,{"data-row-key":c,className:q(r,"".concat(v,"-row"),"".concat(v,"-row-level-").concat(i),w==null?void 0:w.className),style:h(h({},n),w==null?void 0:w.style)}),x.map(function(p,S){var K=p.render,_=p.dataIndex,k=p.className,L=ot(f,p,S,i,o),F=L.key,W=L.fixedInfo,Y=L.appendCellNode,X=L.additionalCellProps;return t.createElement(Ne,J({className:k,ellipsis:p.ellipsis,align:p.align,scope:p.rowScope,component:p.rowScope?d:m,prefixCls:v,key:F,record:a,index:o,renderIndex:l,dataIndex:_,render:K,shouldCellUpdate:p.shouldCellUpdate},W,{appendNode:Y,additionalProps:X}))})),T;if(E&&(I||g)){var N=C(a,o,i+1,g),y=R&&R(a,o,i);T=t.createElement(rt,{expanded:g,className:q("".concat(v,"-expanded-row"),"".concat(v,"-expanded-row-level-").concat(i+1),y),prefixCls:v,component:u,cellComponent:m,colSpan:x.length,isEmpty:!1},N)}return t.createElement(t.Fragment,null,O,T)}lt.displayName="BodyRow";const cr=Te(lt);function sr(e){var r=e.columnKey,n=e.onColumnResize,a=t.useRef();return t.useEffect(function(){a.current&&n(r,a.current.offsetWidth)},[]),t.createElement(cn,{data:r},t.createElement("td",{ref:a,style:{padding:0,border:0,height:0}},t.createElement("div",{style:{height:0,overflow:"hidden"}}," ")))}function ur(e){var r=e.prefixCls,n=e.columnsKey,a=e.onColumnResize;return t.createElement("tr",{"aria-hidden":"true",className:"".concat(r,"-measure-row"),style:{height:0,fontSize:0}},t.createElement(cn.Collection,{onBatchResize:function(l){l.forEach(function(c){var s=c.data,i=c.size;a(s,i.offsetWidth)})}},n.map(function(o){return t.createElement(sr,{key:o,columnKey:o,onColumnResize:a})})))}function it(e){var r=e.data,n=e.measureColumnWidth,a=Z(ne,["prefixCls","getComponent","onColumnResize","flattenColumns","getRowKey","expandedKeys","childrenColumnName","emptyNode"]),o=a.prefixCls,l=a.getComponent,c=a.onColumnResize,s=a.flattenColumns,i=a.getRowKey,u=a.expandedKeys,m=a.childrenColumnName,d=a.emptyNode,f=tt(r,m,u,i),v=t.useRef({renderWithProps:!1}),x=l(["body","wrapper"],"tbody"),R=l(["body","row"],"tr"),C=l(["body","cell"],"td"),w=l(["body","cell"],"th"),g;r.length?g=f.map(function(H,b){var I=H.record,z=H.indent,O=H.index,T=i(I,b);return t.createElement(cr,{key:T,rowKey:T,record:I,index:b,renderIndex:O,rowComponent:R,cellComponent:C,scopeCellComponent:w,getRowKey:i,indent:z})}):g=t.createElement(rt,{expanded:!0,className:"".concat(o,"-placeholder"),prefixCls:o,component:R,cellComponent:C,colSpan:s.length,isEmpty:!0},d);var E=Ve(s);return t.createElement(Zn.Provider,{value:v.current},t.createElement(x,{className:"".concat(o,"-tbody")},n&&t.createElement(ur,{prefixCls:o,columnsKey:E,onColumnResize:c}),g))}it.displayName="Body";const dr=Te(it);var fr=["expandable"],ct="RC_TABLE_INTERNAL_COL_DEFINE";function mr(e){var r=e.expandable,n=Ee(e,fr),a;return"expandable"in e?a=h(h({},n),r):a=n,a.showExpandColumn===!1&&(a.expandIconColumnIndex=-1),a}var vr=["columnType"];function st(e){for(var r=e.colWidths,n=e.columns,a=e.columCount,o=[],l=a||n.length,c=!1,s=l-1;s>=0;s-=1){var i=r[s],u=n&&n[s],m=u&&u[ct];if(i||m||c){var d=m||{};d.columnType;var f=Ee(d,vr);o.unshift(t.createElement("col",J({key:s,style:{width:i}},f))),c=!0}}return t.createElement("colgroup",null,o)}var pr=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];function xr(e,r){return t.useMemo(function(){for(var n=[],a=0;a<r;a+=1){var o=e[a];if(o!==void 0)n[a]=o;else return null}return n},[e.join("_"),r])}var ut=t.forwardRef(function(e,r){var n=e.className,a=e.noData,o=e.columns,l=e.flattenColumns,c=e.colWidths,s=e.columCount,i=e.stickyOffsets,u=e.direction,m=e.fixHeader,d=e.stickyTopOffset,f=e.stickyBottomOffset,v=e.stickyClassName,x=e.onScroll,R=e.maxContentScroll,C=e.children,w=Ee(e,pr),g=Z(ne,["prefixCls","scrollbarSize","isSticky"]),E=g.prefixCls,H=g.scrollbarSize,b=g.isSticky,I=b&&!m?0:H,z=t.useRef(null),O=t.useCallback(function(k){zn(r,k),zn(z,k)},[]);t.useEffect(function(){var k;function L(F){var W=F,Y=W.currentTarget,X=W.deltaX;X&&(x({currentTarget:Y,scrollLeft:Y.scrollLeft+X}),F.preventDefault())}return(k=z.current)===null||k===void 0||k.addEventListener("wheel",L),function(){var F;(F=z.current)===null||F===void 0||F.removeEventListener("wheel",L)}},[]);var T=t.useMemo(function(){return l.every(function(k){return k.width})},[l]),N=l[l.length-1],y={fixed:N?N.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(E,"-cell-scrollbar")}}},p=t.useMemo(function(){return I?[].concat(ue(o),[y]):o},[I,o]),S=t.useMemo(function(){return I?[].concat(ue(l),[y]):l},[I,l]),K=t.useMemo(function(){var k=i.right,L=i.left;return h(h({},i),{},{left:u==="rtl"?[].concat(ue(L.map(function(F){return F+I})),[0]):L,right:u==="rtl"?k:[].concat(ue(k.map(function(F){return F+I})),[0]),isSticky:b})},[I,i,b]),_=xr(c,s);return t.createElement("div",{style:h({overflow:"hidden"},b?{top:d,bottom:f}:{}),ref:O,className:q(n,P({},v,!!v))},t.createElement("table",{style:{tableLayout:"fixed",visibility:a||_?null:"hidden"}},(!a||!R||T)&&t.createElement(st,{colWidths:_?[].concat(ue(_),[I]):[],columCount:s+1,columns:S}),C(h(h({},w),{},{stickyOffsets:K,columns:p,flattenColumns:S}))))});ut.displayName="FixedHolder";const An=t.memo(ut);function dt(e){var r=e.cells,n=e.stickyOffsets,a=e.flattenColumns,o=e.rowComponent,l=e.cellComponent,c=e.tdCellComponent,s=e.onHeaderRow,i=e.index,u=Z(ne,["prefixCls","direction"]),m=u.prefixCls,d=u.direction,f;s&&(f=s(r.map(function(x){return x.column}),i));var v=Ve(r.map(function(x){return x.column}));return t.createElement(o,f,r.map(function(x,R){var C=x.column,w=un(x.colStart,x.colEnd,a,n,d,C),g;return C&&C.onHeaderCell&&(g=x.column.onHeaderCell(C)),t.createElement(Ne,J({},x,{scope:C.title?x.colSpan>1?"colgroup":"col":null,ellipsis:C.ellipsis,align:C.align,component:C.title?l:c,prefixCls:m,key:v[R]},w,{additionalProps:g,rowType:"header"}))}))}dt.displayName="HeaderRow";function Cr(e){var r=[];function n(c,s){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;r[i]=r[i]||[];var u=s,m=c.filter(Boolean).map(function(d){var f={key:d.key,className:d.className||"",children:d.title,column:d,colStart:u},v=1,x=d.children;return x&&x.length>0&&(v=n(x,u,i+1).reduce(function(R,C){return R+C},0),f.hasSubColumns=!0),"colSpan"in d&&(v=d.colSpan),"rowSpan"in d&&(f.rowSpan=d.rowSpan),f.colSpan=v,f.colEnd=f.colStart+v-1,r[i].push(f),u+=v,v});return m}n(e,0);for(var a=r.length,o=function(s){r[s].forEach(function(i){!("rowSpan"in i)&&!i.hasSubColumns&&(i.rowSpan=a-s)})},l=0;l<a;l+=1)o(l);return r}function yr(e){var r=e.stickyOffsets,n=e.columns,a=e.flattenColumns,o=e.onHeaderRow,l=Z(ne,["prefixCls","getComponent"]),c=l.prefixCls,s=l.getComponent,i=t.useMemo(function(){return Cr(n)},[n]),u=s(["header","wrapper"],"thead"),m=s(["header","row"],"tr"),d=s(["header","cell"],"th"),f=s(["header","cell"],"td");return t.createElement(u,{className:"".concat(c,"-thead")},i.map(function(v,x){var R=t.createElement(dt,{key:x,flattenColumns:a,cells:v,stickyOffsets:r,rowComponent:m,cellComponent:d,tdCellComponent:f,onHeaderRow:o,index:x});return R}))}const Xn=Te(yr);function Dn(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return typeof r=="number"?r:r.endsWith("%")?e*parseFloat(r)/100:null}function hr(e,r,n){return t.useMemo(function(){if(r&&r>0){var a=0,o=0;e.forEach(function(d){var f=Dn(r,d.width);f?a+=f:o+=1});var l=Math.max(r-a,o),c=o,s=l/o,i=0,u=e.map(function(d){var f=h({},d),v=Dn(r,f.width);if(v)f.width=v;else{var x=Math.floor(s);f.width=c===1?l:x,l-=x,c-=1}return i+=f.width,f});if(i<n){var m=n/i;l=n,u.forEach(function(d,f){var v=Math.floor(d.width*m);d.width=f===u.length-1?l:v,l-=v})}return[u,Math.max(i,n)]}return[e,r]},[e,r,n])}var gr=["children"],Sr=["fixed"];function ft(e){return Wt(e).filter(function(r){return t.isValidElement(r)}).map(function(r){var n=r.key,a=r.props,o=a.children,l=Ee(a,gr),c=h({key:n},l);return o&&(c.children=ft(o)),c})}function on(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key";return e.filter(function(n){return n&&Pe(n)==="object"}).reduce(function(n,a,o){var l=a.fixed,c=l===!0?"left":l,s="".concat(r,"-").concat(o),i=a.children;return i&&i.length>0?[].concat(ue(n),ue(on(i,s).map(function(u){return h({fixed:c},u)}))):[].concat(ue(n),[h(h({key:s},a),{},{fixed:c})])},[])}function Rr(e){return e.map(function(r){var n=r.fixed,a=Ee(r,Sr),o=n;return n==="left"?o="right":n==="right"&&(o="left"),h({fixed:o},a)})}function wr(e,r){var n=e.prefixCls,a=e.columns,o=e.children,l=e.expandable,c=e.expandedKeys,s=e.columnTitle,i=e.getRowKey,u=e.onTriggerExpand,m=e.expandIcon,d=e.rowExpandable,f=e.expandIconColumnIndex,v=e.direction,x=e.expandRowByClick,R=e.columnWidth,C=e.fixed,w=e.scrollWidth,g=e.clientWidth,E=t.useMemo(function(){return a||ft(o)},[a,o]),H=t.useMemo(function(){if(l){var y,p=E.slice();if(!p.includes(we)){var S=f||0;S>=0&&p.splice(S,0,we)}var K=p.indexOf(we);p=p.filter(function(F,W){return F!==we||W===K});var _=E[K],k;(C==="left"||C)&&!f?k="left":(C==="right"||C)&&f===E.length?k="right":k=_?_.fixed:null;var L=(y={},P(y,ct,{className:"".concat(n,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),P(y,"title",s),P(y,"fixed",k),P(y,"className","".concat(n,"-row-expand-icon-cell")),P(y,"width",R),P(y,"render",function(W,Y,X){var pe=i(Y,X),de=c.has(pe),te=d?d(Y):!0,A=m({prefixCls:n,expanded:de,expandable:te,record:Y,onExpand:u});return x?t.createElement("span",{onClick:function(Q){return Q.stopPropagation()}},A):A}),y);return p.map(function(F){return F===we?L:F})}return E.filter(function(F){return F!==we})},[l,E,i,c,m,v]),b=t.useMemo(function(){var y=H;return r&&(y=r(y)),y.length||(y=[{render:function(){return null}}]),y},[r,H,v]),I=t.useMemo(function(){return v==="rtl"?Rr(on(b)):on(b)},[b,v,w]),z=hr(I,w,g),O=D(z,2),T=O[0],N=O[1];return[b,T,N]}function Er(e){var r,n=e.prefixCls,a=e.record,o=e.onExpand,l=e.expanded,c=e.expandable,s="".concat(n,"-row-expand-icon");if(!c)return t.createElement("span",{className:q(s,"".concat(n,"-row-spaced"))});var i=function(m){o(a,m),m.stopPropagation()};return t.createElement("span",{className:q(s,(r={},P(r,"".concat(n,"-row-expanded"),l),P(r,"".concat(n,"-row-collapsed"),!l),r)),onClick:i})}function Nr(e,r,n){var a=[];function o(l){(l||[]).forEach(function(c,s){a.push(r(c,s)),o(c[n])})}return o(e),a}function br(e,r,n){var a=mr(e),o=a.expandIcon,l=a.expandedRowKeys,c=a.defaultExpandedRowKeys,s=a.defaultExpandAllRows,i=a.expandedRowRender,u=a.onExpand,m=a.onExpandedRowsChange,d=a.childrenColumnName,f=o||Er,v=d||"children",x=t.useMemo(function(){return i?"row":e.expandable&&e.internalHooks===Ue&&e.expandable.__PARENT_RENDER_ICON__||r.some(function(b){return b&&Pe(b)==="object"&&b[v]})?"nest":!1},[!!i,r]),R=t.useState(function(){return c||(s?Nr(r,n,v):[])}),C=D(R,2),w=C[0],g=C[1],E=t.useMemo(function(){return new Set(l||w||[])},[l,w]),H=t.useCallback(function(b){var I=n(b,r.indexOf(b)),z,O=E.has(I);O?(E.delete(I),z=ue(E)):z=[].concat(ue(E),[I]),g(z),u&&u(!O,b),m&&m(z)},[n,E,r,u,m]);return[a,x,E,f,v,H]}function kr(e,r,n,a){var o=e.map(function(l,c){return un(c,c,e,r,n,a==null?void 0:a[c])});return Yn(function(){return o},[o],function(l,c){return!Gn(l,c)})}function mt(e){var r=t.useRef(e),n=t.useState({}),a=D(n,2),o=a[1],l=t.useRef(null),c=t.useRef([]);function s(i){c.current.push(i);var u=Promise.resolve();l.current=u,u.then(function(){if(l.current===u){var m=c.current,d=r.current;c.current=[],m.forEach(function(f){r.current=f(r.current)}),l.current=null,d!==r.current&&o({})}})}return t.useEffect(function(){return function(){l.current=null}},[]),[r.current,s]}function Ir(e){var r=t.useRef(e||null),n=t.useRef();function a(){window.clearTimeout(n.current)}function o(c){r.current=c,a(),n.current=window.setTimeout(function(){r.current=null,n.current=void 0},100)}function l(){return r.current}return t.useEffect(function(){return a},[]),[o,l]}function Tr(){var e=t.useState(-1),r=D(e,2),n=r[0],a=r[1],o=t.useState(-1),l=D(o,2),c=l[0],s=l[1],i=t.useCallback(function(u,m){a(u),s(m)},[]);return[n,c,i]}var Un=At()?window:null;function Lr(e,r){var n=Pe(e)==="object"?e:{},a=n.offsetHeader,o=a===void 0?0:a,l=n.offsetSummary,c=l===void 0?0:l,s=n.offsetScroll,i=s===void 0?0:s,u=n.getContainer,m=u===void 0?function(){return Un}:u,d=m()||Un;return t.useMemo(function(){var f=!!e;return{isSticky:f,stickyClassName:f?"".concat(r,"-sticky-holder"):"",offsetHeader:o,offsetSummary:c,offsetScroll:i,container:d}},[i,o,c,r,d])}function Hr(e,r,n){var a=t.useMemo(function(){for(var o=[],l=[],c=0,s=0,i=0;i<r;i+=1)if(n==="rtl"){l[i]=s,s+=e[i]||0;var u=r-i-1;o[u]=c,c+=e[u]||0}else{o[i]=c,c+=e[i]||0;var m=r-i-1;l[m]=s,s+=e[m]||0}return{left:o,right:l}},[e,r,n]);return a}function Vn(e){var r=e.className,n=e.children;return t.createElement("div",{className:r},n)}var _r=function(r,n){var a,o,l=r.scrollBodyRef,c=r.onScroll,s=r.offsetScroll,i=r.container,u=Z(ne,"prefixCls"),m=((a=l.current)===null||a===void 0?void 0:a.scrollWidth)||0,d=((o=l.current)===null||o===void 0?void 0:o.clientWidth)||0,f=m&&d*(d/m),v=t.useRef(),x=mt({scrollLeft:0,isHiddenScrollBar:!1}),R=D(x,2),C=R[0],w=R[1],g=t.useRef({delta:0,x:0}),E=t.useState(!1),H=D(E,2),b=H[0],I=H[1],z=function(){I(!1)},O=function(S){S.persist(),g.current.delta=S.pageX-C.scrollLeft,g.current.x=0,I(!0),S.preventDefault()},T=function(S){var K,_=S||((K=window)===null||K===void 0?void 0:K.event),k=_.buttons;if(!b||k===0){b&&I(!1);return}var L=g.current.x+S.pageX-g.current.x-g.current.delta;L<=0&&(L=0),L+f>=d&&(L=d-f),c({scrollLeft:L/d*(m+2)}),g.current.x=S.pageX},N=function(){if(l.current){var S=Bn(l.current).top,K=S+l.current.offsetHeight,_=i===window?document.documentElement.scrollTop+window.innerHeight:Bn(i).top+i.clientHeight;K-On()<=_||S>=_-s?w(function(k){return h(h({},k),{},{isHiddenScrollBar:!0})}):w(function(k){return h(h({},k),{},{isHiddenScrollBar:!1})})}},y=function(S){w(function(K){return h(h({},K),{},{scrollLeft:S/m*d||0})})};return t.useImperativeHandle(n,function(){return{setScrollLeft:y}}),t.useEffect(function(){var p=Xe(document.body,"mouseup",z,!1),S=Xe(document.body,"mousemove",T,!1);return N(),function(){p.remove(),S.remove()}},[f,b]),t.useEffect(function(){var p=Xe(i,"scroll",N,!1),S=Xe(window,"resize",N,!1);return function(){p.remove(),S.remove()}},[i]),t.useEffect(function(){C.isHiddenScrollBar||w(function(p){var S=l.current;return S?h(h({},p),{},{scrollLeft:S.scrollLeft/S.scrollWidth*S.clientWidth}):p})},[C.isHiddenScrollBar]),m<=d||!f||C.isHiddenScrollBar?null:t.createElement("div",{style:{height:On(),width:d,bottom:s},className:"".concat(u,"-sticky-scroll")},t.createElement("div",{onMouseDown:O,ref:v,className:q("".concat(u,"-sticky-scroll-bar"),P({},"".concat(u,"-sticky-scroll-bar-active"),b)),style:{width:"".concat(f,"px"),transform:"translate3d(".concat(C.scrollLeft,"px, 0, 0)")}}))};const Mr=t.forwardRef(_r);function Kr(e){return null}function Pr(e){return null}var vt="rc-table",Fr=[],zr={};function Or(){return"No Data"}function Br(e){var r,n=h({rowKey:"key",prefixCls:vt,emptyText:Or},e),a=n.prefixCls,o=n.className,l=n.rowClassName,c=n.style,s=n.data,i=n.rowKey,u=n.scroll,m=n.tableLayout,d=n.direction,f=n.title,v=n.footer,x=n.summary,R=n.caption,C=n.id,w=n.showHeader,g=n.components,E=n.emptyText,H=n.onRow,b=n.onHeaderRow,I=n.internalHooks,z=n.transformColumns,O=n.internalRefs,T=n.tailor,N=n.getContainerWidth,y=n.sticky,p=s||Fr,S=!!p.length,K=I===Ue,_=t.useCallback(function(M,$){return qn(g,M)||$},[g]),k=t.useMemo(function(){return typeof i=="function"?i:function(M){var $=M&&M[i];return $}},[i]),L=_(["body"]),F=Tr(),W=D(F,3),Y=W[0],X=W[1],pe=W[2],de=br(n,p,k),te=D(de,6),A=te[0],V=te[1],Q=te[2],fe=te[3],xe=te[4],j=te[5],U=u==null?void 0:u.x,re=t.useState(0),me=D(re,2),Ce=me[0],He=me[1],_e=wr(h(h(h({},n),A),{},{expandable:!!A.expandedRowRender,columnTitle:A.columnTitle,expandedKeys:Q,getRowKey:k,onTriggerExpand:j,expandIcon:fe,expandIconColumnIndex:A.expandIconColumnIndex,direction:d,scrollWidth:K&&T&&typeof U=="number"?U:null,clientWidth:Ce}),K?z:null),ye=D(_e,3),ae=ye[0],B=ye[1],be=ye[2],ve=be??U,ce=t.useMemo(function(){return{columns:ae,flattenColumns:B}},[ae,B]),Se=t.useRef(),Re=t.useRef(),G=t.useRef(),dn=t.useRef(),fn=t.useRef(),Ct=t.useState(!1),mn=D(Ct,2),yt=mn[0],Fe=mn[1],ht=t.useState(!1),vn=D(ht,2),gt=vn[0],ze=vn[1],St=mt(new Map),pn=D(St,2),Rt=pn[0],wt=pn[1],Et=Ve(B),xn=Et.map(function(M){return Rt.get(M)}),Cn=t.useMemo(function(){return xn},[xn.join("_")]),Oe=Hr(Cn,B.length,d),oe=u&&an(u.y),se=u&&an(ve)||!!A.fixed,Me=se&&B.some(function(M){var $=M.fixed;return $}),yn=t.useRef(),ke=Lr(y,a),he=ke.isSticky,Nt=ke.offsetHeader,bt=ke.offsetSummary,kt=ke.offsetScroll,It=ke.stickyClassName,Tt=ke.container,le=t.useMemo(function(){return x==null?void 0:x(p)},[x,p]),Ke=(oe||he)&&t.isValidElement(le)&&le.type===je&&le.props.fixed,Ye,Be,Ge;oe&&(Be={overflowY:"scroll",maxHeight:u.y}),se&&(Ye={overflowX:"auto"},oe||(Be={overflowY:"hidden"}),Ge={width:ve===!0?"auto":ve,minWidth:"100%"});var hn=t.useCallback(function(M,$){Xt(Se.current)&&wt(function(ie){if(ie.get(M)!==$){var ee=new Map(ie);return ee.set(M,$),ee}return ie})},[]),Lt=Ir(null),gn=D(Lt,2),Ht=gn[0],Sn=gn[1];function $e(M,$){$&&(typeof $=="function"?$(M):$.scrollLeft!==M&&($.scrollLeft=M,$.scrollLeft!==M&&setTimeout(function(){$.scrollLeft=M},0)))}var Ie=Jn(function(M){var $=M.currentTarget,ie=M.scrollLeft,ee=d==="rtl",ge=typeof ie=="number"?ie:$.scrollLeft,Fn=$||zr;if(!Sn()||Sn()===Fn){var en;Ht(Fn),$e(ge,Re.current),$e(ge,G.current),$e(ge,fn.current),$e(ge,(en=yn.current)===null||en===void 0?void 0:en.setScrollLeft)}var nn=$||Re.current;if(nn){var tn=nn.scrollWidth,rn=nn.clientWidth;if(tn===rn){Fe(!1),ze(!1);return}ee?(Fe(-ge<tn-rn),ze(-ge>0)):(Fe(ge>0),ze(ge<tn-rn))}}),Rn=function(){se&&G.current?Ie({currentTarget:G.current}):(Fe(!1),ze(!1))},_t=function($){var ie=$.width,ee=Se.current?Se.current.offsetWidth:ie;K&&N&&(ee=N(Se.current,ee)||ee),ee!==Ce&&(Rn(),He(ee))},wn=t.useRef(!1);t.useEffect(function(){wn.current&&Rn()},[se,s,ae.length]),t.useEffect(function(){wn.current=!0},[]);var Mt=t.useState(0),En=D(Mt,2),We=En[0],Nn=En[1],Kt=t.useState(!0),bn=D(Kt,2),kn=bn[0],Pt=bn[1];t.useEffect(function(){(!T||!K)&&(G.current instanceof Element?Nn($n(G.current).width):Nn($n(dn.current).width)),Pt(Dt("position","sticky"))},[]),t.useEffect(function(){K&&O&&(O.body.current=G.current)});var Ft=t.useCallback(function(M){return t.createElement(t.Fragment,null,t.createElement(Xn,M),Ke==="top"&&t.createElement(De,M,le))},[Ke,le]),zt=t.useCallback(function(M){return t.createElement(De,M,le)},[le]),In=_(["table"],"table"),Ae=t.useMemo(function(){return m||(Me?ve==="max-content"?"auto":"fixed":oe||he||B.some(function(M){var $=M.ellipsis;return $})?"fixed":"auto")},[oe,Me,B,m,he]),qe,Je={colWidths:Cn,columCount:B.length,stickyOffsets:Oe,onHeaderRow:b,fixHeader:oe,scroll:u},Tn=t.useMemo(function(){return S?null:typeof E=="function"?E():E},[S,E]),Ln=t.createElement(dr,{data:p,measureColumnWidth:oe||se||he}),Hn=t.createElement(st,{colWidths:B.map(function(M){var $=M.width;return $}),columns:B}),_n=R!=null?t.createElement("caption",{className:"".concat(a,"-caption")},R):void 0,Ot=Wn(n,{data:!0}),Mn=Wn(n,{aria:!0});if(oe||he){var Qe;typeof L=="function"?(Qe=L(p,{scrollbarSize:We,ref:G,onScroll:Ie}),Je.colWidths=B.map(function(M,$){var ie=M.width,ee=$===B.length-1?ie-We:ie;return typeof ee=="number"&&!Number.isNaN(ee)?ee:0})):Qe=t.createElement("div",{style:h(h({},Ye),Be),onScroll:Ie,ref:G,className:q("".concat(a,"-body"))},t.createElement(In,J({style:h(h({},Ge),{},{tableLayout:Ae})},Mn),_n,Hn,Ln,!Ke&&le&&t.createElement(De,{stickyOffsets:Oe,flattenColumns:B,columns:ae},le)));var Kn=h(h(h({noData:!p.length,maxContentScroll:se&&ve==="max-content"},Je),ce),{},{direction:d,stickyClassName:It,onScroll:Ie});qe=t.createElement(t.Fragment,null,w!==!1&&t.createElement(An,J({},Kn,{stickyTopOffset:Nt,className:"".concat(a,"-header"),ref:Re}),Ft),Qe,Ke&&Ke!=="top"&&t.createElement(An,J({},Kn,{stickyBottomOffset:bt,className:"".concat(a,"-summary"),ref:fn}),zt),he&&t.createElement(Mr,{ref:yn,offsetScroll:kt,scrollBodyRef:G,onScroll:Ie,container:Tt}))}else qe=t.createElement("div",{style:h(h({},Ye),Be),className:q("".concat(a,"-content")),onScroll:Ie,ref:G},t.createElement(In,J({style:h(h({},Ge),{},{tableLayout:Ae})},Mn),_n,Hn,w!==!1&&t.createElement(Xn,J({},Je,ce)),Ln,le&&t.createElement(De,{stickyOffsets:Oe,flattenColumns:B,columns:ae},le)));var Ze=t.createElement("div",J({className:q(a,o,(r={},P(r,"".concat(a,"-rtl"),d==="rtl"),P(r,"".concat(a,"-ping-left"),yt),P(r,"".concat(a,"-ping-right"),gt),P(r,"".concat(a,"-layout-fixed"),m==="fixed"),P(r,"".concat(a,"-fixed-header"),oe),P(r,"".concat(a,"-fixed-column"),Me),P(r,"".concat(a,"-scroll-horizontal"),se),P(r,"".concat(a,"-has-fix-left"),B[0]&&B[0].fixed),P(r,"".concat(a,"-has-fix-right"),B[B.length-1]&&B[B.length-1].fixed==="right"),r)),style:c,id:C,ref:Se},Ot),f&&t.createElement(Vn,{className:"".concat(a,"-title")},f(p)),t.createElement("div",{ref:dn,className:"".concat(a,"-container")},qe),v&&t.createElement(Vn,{className:"".concat(a,"-footer")},v(p)));se&&(Ze=t.createElement(cn,{onResize:_t},Ze));var Pn=kr(B,Oe,d,ae),Bt=t.useMemo(function(){return{scrollX:ve,prefixCls:a,getComponent:_,scrollbarSize:We,direction:d,fixedInfoList:Pn,isSticky:he,supportSticky:kn,componentWidth:Ce,fixHeader:oe,fixColumn:Me,horizonScroll:se,tableLayout:Ae,rowClassName:l,expandedRowClassName:A.expandedRowClassName,expandIcon:fe,expandableType:V,expandRowByClick:A.expandRowByClick,expandedRowRender:A.expandedRowRender,onTriggerExpand:j,expandIconColumnIndex:A.expandIconColumnIndex,indentSize:A.indentSize,allColumnsFixedLeft:B.every(function(M){return M.fixed==="left"}),emptyNode:Tn,columns:ae,flattenColumns:B,onColumnResize:hn,hoverStartRow:Y,hoverEndRow:X,onHover:pe,rowExpandable:A.rowExpandable,onRow:H,getRowKey:k,expandedKeys:Q,childrenColumnName:xe}},[ve,a,_,We,d,Pn,he,kn,Ce,oe,Me,se,Ae,l,A.expandedRowClassName,fe,V,A.expandRowByClick,A.expandedRowRender,j,A.expandIconColumnIndex,A.indentSize,Tn,ae,B,hn,Y,X,pe,A.rowExpandable,H,k,Q,xe]);return t.createElement(ne.Provider,{value:Bt},Ze)}function $r(e){return Qn(Br,e)}var Le=$r();Le.EXPAND_COLUMN=we;Le.INTERNAL_HOOKS=Ue;Le.Column=Kr;Le.ColumnGroup=Pr;Le.Summary=ir;var pt=ln(null),xt=ln(null);function Wr(e,r,n){var a=r||1;return n[e+a]-(n[e]||0)}function Ar(e){var r=e.rowInfo,n=e.column,a=e.colIndex,o=e.indent,l=e.index,c=e.renderIndex,s=e.record,i=e.style,u=e.className,m=e.inverse,d=e.getHeight,f=n.render,v=n.dataIndex,x=n.className,R=n.width,C=Z(xt,["columnsOffset"]),w=C.columnsOffset,g=ot(r,n,a,o,l),E=g.key,H=g.fixedInfo,b=g.appendCellNode,I=g.additionalCellProps,z=I.style,O=I.colSpan,T=O===void 0?1:O,N=I.rowSpan,y=N===void 0?1:N,p=a-1,S=Wr(p,T,w),K=T>1?R-S:0,_=h(h(h({},z),i),{},{flex:"0 0 ".concat(S,"px"),width:"".concat(S,"px"),marginRight:K,pointerEvents:"auto"}),k=t.useMemo(function(){return m?y<=1:T===0||y===0||y>1},[y,T,m]);k?_.visibility="hidden":m&&(_.height=d==null?void 0:d(y));var L=k?function(){return null}:f,F={};return(y===0||T===0)&&(F.rowSpan=1,F.colSpan=1),t.createElement(Ne,J({className:q(x,u),ellipsis:n.ellipsis,align:n.align,scope:n.rowScope,component:"div",prefixCls:r.prefixCls,key:E,record:s,index:l,renderIndex:c,dataIndex:v,render:L,shouldCellUpdate:n.shouldCellUpdate},H,{appendNode:b,additionalProps:h(h({},I),{},{style:_},F)}))}var Xr=["data","index","className","rowKey","style","extra","getHeight"],Dr=t.forwardRef(function(e,r){var n=e.data,a=e.index,o=e.className,l=e.rowKey,c=e.style,s=e.extra,i=e.getHeight,u=Ee(e,Xr),m=n.record,d=n.indent,f=n.index,v=Z(ne,["prefixCls","flattenColumns","fixColumn","componentWidth","scrollX"]),x=v.scrollX,R=v.flattenColumns,C=v.prefixCls,w=v.fixColumn,g=v.componentWidth,E=at(m,l,a,d),H=E.rowSupportExpand,b=E.expanded,I=E.rowProps,z=E.expandedRowRender,O=E.expandedRowClassName,T;if(H&&b){var N=z(m,a,d+1,b),y=O==null?void 0:O(m,a,d),p={};w&&(p={style:P({},"--virtual-width","".concat(g,"px"))});var S="".concat(C,"-expanded-row-cell");T=t.createElement("div",{className:q("".concat(C,"-expanded-row"),"".concat(C,"-expanded-row-level-").concat(d+1),y)},t.createElement(Ne,{component:"div",prefixCls:C,className:q(S,P({},"".concat(S,"-fixed"),w)),additionalProps:p},N))}var K=h(h({},c),{},{width:x});s&&(K.position="absolute",K.pointerEvents="none");var _=t.createElement("div",J({},I,u,{ref:H?null:r,className:q(o,"".concat(C,"-row"),I==null?void 0:I.className,P({},"".concat(C,"-row-extra"),s)),style:h(h({},K),I==null?void 0:I.style)}),R.map(function(k,L){return t.createElement(Ar,{key:L,rowInfo:E,column:k,colIndex:L,indent:d,index:a,renderIndex:f,record:m,inverse:s,getHeight:i})}));return H?t.createElement("div",{ref:r},_,T):_}),jn=Te(Dr),Ur=t.forwardRef(function(e,r){var n=e.data,a=e.onScroll,o=Z(ne,["flattenColumns","onColumnResize","getRowKey","prefixCls","expandedKeys","childrenColumnName","emptyNode","scrollX"]),l=o.flattenColumns,c=o.onColumnResize,s=o.getRowKey,i=o.expandedKeys,u=o.prefixCls,m=o.childrenColumnName,d=o.emptyNode,f=o.scrollX,v=Z(pt),x=v.scrollY,R=v.listItemHeight,C=t.useRef(),w=tt(n,m,i,s),g=t.useMemo(function(){var T=0;return l.map(function(N){var y=N.width,p=N.key;return T+=y,[p,y,T]})},[l]),E=t.useMemo(function(){return g.map(function(T){return T[2]})},[g]);t.useEffect(function(){g.forEach(function(T){var N=D(T,2),y=N[0],p=N[1];c(y,p)})},[g]),t.useImperativeHandle(r,function(){var T={};return Object.defineProperty(T,"scrollLeft",{get:function(){var y;return((y=C.current)===null||y===void 0?void 0:y.getScrollInfo().x)||0},set:function(y){var p;(p=C.current)===null||p===void 0||p.scrollTo({left:y})}}),T});var H=function(N,y){var p,S=(p=w[y])===null||p===void 0?void 0:p.record,K=N.onCell;if(K){var _,k=K(S,y);return(_=k==null?void 0:k.rowSpan)!==null&&_!==void 0?_:1}return 1},b=function(N){var y=N.start,p=N.end,S=N.getSize,K=N.offsetY;if(p<0)return null;for(var _=l.filter(function(j){return H(j,y)===0}),k=y,L=function(U){if(_=_.filter(function(re){return H(re,U)===0}),!_.length)return k=U,"break"},F=y;F>=0;F-=1){var W=L(F);if(W==="break")break}for(var Y=l.filter(function(j){return H(j,p)!==1}),X=p,pe=function(U){if(Y=Y.filter(function(re){return H(re,U)!==1}),!Y.length)return X=Math.max(U-1,p),"break"},de=p;de<w.length;de+=1){var te=pe(de);if(te==="break")break}for(var A=[],V=function(U){var re=w[U];if(!re)return"continue";l.some(function(me){return H(me,U)>1})&&A.push(U)},Q=k;Q<=X;Q+=1)var fe=V(Q);var xe=A.map(function(j){var U=w[j],re=s(U.record,j),me=function(_e){var ye=j+_e-1,ae=s(w[ye].record,ye),B=S(re,ae);return B.bottom-B.top},Ce=S(re);return t.createElement(jn,{key:j,data:U,rowKey:re,index:j,style:{top:-K+Ce.top},extra:!0,getHeight:me})});return xe},I=t.useMemo(function(){return{columnsOffset:E}},[E]),z="".concat(u,"-tbody"),O;return w.length?O=t.createElement(Ut,{fullHeight:!1,ref:C,className:q(z,"".concat(z,"-virtual")),height:x,itemHeight:R||24,data:w,itemKey:function(N){return s(N.record)},scrollWidth:f,onVirtualScroll:function(N){var y=N.x;a({scrollLeft:y})},extraRender:b},function(T,N,y){var p=s(T.record,N);return t.createElement(jn,J({data:T,rowKey:p,index:N},y))}):O=t.createElement("div",{className:q("".concat(u,"-placeholder"))},t.createElement(Ne,{component:"div",prefixCls:u},d)),t.createElement(xt.Provider,{value:I},O)}),Vr=Te(Ur),jr=function(r,n){var a=n.ref,o=n.onScroll;return t.createElement(Vr,{ref:a,data:r,onScroll:o})};function Yr(e){var r=e.columns,n=e.scroll,a=e.prefixCls,o=a===void 0?vt:a,l=e.className,c=e.listItemHeight,s=n||{},i=s.x,u=s.y;typeof i!="number"&&(i=1),typeof u!="number"&&(u=500);var m=t.useMemo(function(){return{scrollY:u,listItemHeight:c}},[u,c]);return t.createElement(pt.Provider,{value:m},t.createElement(Le,J({},e,{className:q(l,"".concat(o,"-virtual")),scroll:h(h({},n),{},{x:i}),components:{body:jr},columns:r,internalHooks:Ue,tailor:!0})))}function Gr(e){return Qn(Yr,e)}Gr();export{we as E,ir as F,ct as I,Gr as a,Ue as b,ft as c,$r as g};
