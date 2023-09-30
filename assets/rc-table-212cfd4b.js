import{f as $t,h as ln,i as Z}from"./@rc-component-73db1337.js";import{r}from"./react-d998b26c.js";import"./react-is-e8e5dbb3.js";import{c as X,d as Le,b as P,e as h,g as Q,h as Ne,f as ve}from"./@babel-43e769cc.js";import{c as Y}from"./classnames-325479d5.js";import{q as Yn,o as Gn,F as qn,f as Jn,l as Fn,A as Wt,c as At,I as Xe,d as zn,J as Bn,h as Xt,Q as $n,D as Dt,x as Wn}from"./rc-util-6fbd7337.js";import{R as cn}from"./rc-resize-observer-ee76393b.js";import{L as jt}from"./rc-virtual-list-4f4258f2.js";var Ee={},je="rc-table-internal-hook",sn=$t(),Qn=sn.makeImmutable,He=sn.responseImmutable,Ut=sn.useImmutableMark,te=ln();function Vt(e,t){var n=r.useRef(0);n.current+=1;var a=r.useRef(e),o=[];Object.keys(e||{}).map(function(c){var s;(e==null?void 0:e[c])!==((s=a.current)===null||s===void 0?void 0:s[c])&&o.push(c)}),a.current=e;var l=r.useRef([]);return o.length&&(l.current=o),r.useDebugValue(n.current),r.useDebugValue(l.current.join(", ")),t&&console.log("".concat(t,":"),n.current,l.current),n.current}var Yt=r.memo(function(){var e=Vt();return r.createElement("h1",null,"Render Times: ",e)});Yt.displayName="RenderBlock";var Zn=r.createContext({renderWithProps:!1}),Gt="RC_TABLE_KEY";function qt(e){return e==null?[]:Array.isArray(e)?e:[e]}function Ue(e){var t=[],n={};return e.forEach(function(a){for(var o=a||{},l=o.key,c=o.dataIndex,s=l||qt(c).join("-")||Gt;n[s];)s="".concat(s,"_next");n[s]=!0,t.push(s)}),t}function an(e){return e!=null}function Jt(e){return e&&Le(e)==="object"&&!Array.isArray(e)&&!r.isValidElement(e)}function Qt(e,t,n,a,o,l){var c=r.useContext(Zn),s=Ut(),i=Yn(function(){if(an(a))return[a];var u=t==null||t===""?[]:Array.isArray(t)?t:[t],f=qn(e,u),d=f,v=void 0;if(o){var m=o(f,e,n);Jt(m)?(d=m.children,v=m.props,c.renderWithProps=!0):d=m}return[d,v]},[s,e,a,t,o,n],function(u,f){if(l){var d=X(u,2),v=d[1],m=X(f,2),x=m[1];return l(x,v)}return c.renderWithProps?!0:!Gn(u,f,!0)});return i}function Zt(e,t,n,a){var o=e+t-1;return e<=a&&o>=n}function er(e,t){return Z(te,function(n){var a=Zt(e,t||1,n.hoverStartRow,n.hoverEndRow);return[a,n.onHover]})}var nr=function(t){var n=t.ellipsis,a=t.rowType,o=t.children,l,c=n===!0?{showTitle:!0}:n;return c&&(c.showTitle||a==="header")&&(typeof o=="string"||typeof o=="number"?l=o.toString():r.isValidElement(o)&&typeof o.props.children=="string"&&(l=o.props.children)),l};function tr(e){var t,n,a,o,l,c,s,i,u=e.component,f=e.children,d=e.ellipsis,v=e.scope,m=e.prefixCls,x=e.className,S=e.align,y=e.record,b=e.render,g=e.dataIndex,E=e.renderIndex,L=e.shouldCellUpdate,N=e.index,I=e.rowType,O=e.colSpan,F=e.rowSpan,H=e.fixLeft,z=e.fixRight,R=e.firstFixLeft,C=e.lastFixLeft,p=e.firstFixRight,w=e.lastFixRight,K=e.appendNode,T=e.additionalProps,k=T===void 0?{}:T,_=e.isSticky,A="".concat(m,"-cell"),G=Z(te,["supportSticky","allColumnsFixedLeft"]),D=G.supportSticky,ue=G.allColumnsFixedLeft,Ce=Qt(y,g,E,f,b,L),re=X(Ce,2),W=re[0],j=re[1],ee={},pe=typeof H=="number"&&D,de=typeof z=="number"&&D;pe&&(ee.position="sticky",ee.left=H),de&&(ee.position="sticky",ee.right=z);var xe=(t=(n=(a=j==null?void 0:j.colSpan)!==null&&a!==void 0?a:k.colSpan)!==null&&n!==void 0?n:O)!==null&&t!==void 0?t:1,le=(o=(l=(c=j==null?void 0:j.rowSpan)!==null&&c!==void 0?c:k.rowSpan)!==null&&l!==void 0?l:F)!==null&&o!==void 0?o:1,q=er(N,le),V=X(q,2),J=V[0],ye=V[1],Me=function(we){var U;y&&ye(N,N+le-1),k==null||(U=k.onMouseEnter)===null||U===void 0||U.call(k,we)},ke=function(we){var U;y&&ye(-1,-1),k==null||(U=k.onMouseLeave)===null||U===void 0||U.call(k,we)};if(xe===0||le===0)return null;var ae=(s=k.title)!==null&&s!==void 0?s:nr({rowType:I,ellipsis:d,children:W}),B=Y(A,x,(i={},P(i,"".concat(A,"-fix-left"),pe&&D),P(i,"".concat(A,"-fix-left-first"),R&&D),P(i,"".concat(A,"-fix-left-last"),C&&D),P(i,"".concat(A,"-fix-left-all"),C&&ue&&D),P(i,"".concat(A,"-fix-right"),de&&D),P(i,"".concat(A,"-fix-right-first"),p&&D),P(i,"".concat(A,"-fix-right-last"),w&&D),P(i,"".concat(A,"-ellipsis"),d),P(i,"".concat(A,"-with-append"),K),P(i,"".concat(A,"-fix-sticky"),(pe||de)&&_&&D),P(i,"".concat(A,"-row-hover"),!j&&J),i),k.className,j==null?void 0:j.className),he={};S&&(he.textAlign=S);var oe=h(h(h(h({},ee),k.style),he),j==null?void 0:j.style),fe=W;return Le(fe)==="object"&&!Array.isArray(fe)&&!r.isValidElement(fe)&&(fe=null),d&&(C||p)&&(fe=r.createElement("span",{className:"".concat(A,"-content")},fe)),r.createElement(u,Q({},j,k,{className:B,style:oe,title:ae,scope:v,onMouseEnter:Me,onMouseLeave:ke,colSpan:xe!==1?xe:null,rowSpan:le!==1?le:null}),K,fe)}const be=r.memo(tr);function un(e,t,n,a,o,l){var c=n[e]||{},s=n[t]||{},i,u;c.fixed==="left"?i=a.left[o==="rtl"?t:e]:s.fixed==="right"&&(u=a.right[o==="rtl"?e:t]);var f=!1,d=!1,v=!1,m=!1,x=n[t+1],S=n[e-1],y=!(l!=null&&l.children);if(o==="rtl"){if(i!==void 0){var b=S&&S.fixed==="left";m=!b&&y}else if(u!==void 0){var g=x&&x.fixed==="right";v=!g&&y}}else if(i!==void 0){var E=x&&x.fixed==="left";f=!E&&y}else if(u!==void 0){var L=S&&S.fixed==="right";d=!L&&y}return{fixLeft:i,fixRight:u,lastFixLeft:f,firstFixRight:d,lastFixRight:v,firstFixLeft:m,isSticky:a.isSticky}}var et=r.createContext({});function rr(e){var t=e.className,n=e.index,a=e.children,o=e.colSpan,l=o===void 0?1:o,c=e.rowSpan,s=e.align,i=Z(te,["prefixCls","direction"]),u=i.prefixCls,f=i.direction,d=r.useContext(et),v=d.scrollColumnIndex,m=d.stickyOffsets,x=d.flattenColumns,S=d.columns,y=n+l-1,b=y+1===v?l+1:l,g=un(n,n+b-1,x,m,f,S==null?void 0:S[n]);return r.createElement(be,Q({className:t,index:n,component:"td",prefixCls:u,record:null,dataIndex:null,align:s,colSpan:b,rowSpan:c,render:function(){return a}},g))}var ar=["children"];function or(e){var t=e.children,n=Ne(e,ar);return r.createElement("tr",n,t)}function Ve(e){var t=e.children;return t}Ve.Row=or;Ve.Cell=rr;function lr(e){var t=e.children,n=e.stickyOffsets,a=e.flattenColumns,o=e.columns,l=Z(te,"prefixCls"),c=a.length-1,s=a[c],i=r.useMemo(function(){return{stickyOffsets:n,flattenColumns:a,scrollColumnIndex:s!=null&&s.scrollbar?c:null,columns:o}},[s,a,c,n,o]);return r.createElement(et.Provider,{value:i},r.createElement("tfoot",{className:"".concat(l,"-summary")},t))}const De=He(lr);var ir=Ve;function nt(e,t,n,a,o,l,c){e.push({record:t,indent:n,index:c});var s=l(t),i=o==null?void 0:o.has(s);if(t&&Array.isArray(t[a])&&i)for(var u=0;u<t[a].length;u+=1)nt(e,t[a][u],n+1,a,o,l,u)}function tt(e,t,n,a){var o=r.useMemo(function(){if(n!=null&&n.size){for(var l=[],c=0;c<(e==null?void 0:e.length);c+=1){var s=e[c];nt(l,s,0,t,n,a,c)}return l}return e==null?void 0:e.map(function(i,u){return{record:i,indent:0,index:u}})},[e,t,n,a]);return o}function rt(e,t,n,a){var o=Z(te,["prefixCls","fixedInfoList","flattenColumns","expandableType","expandRowByClick","onTriggerExpand","rowClassName","expandedRowClassName","indentSize","expandIcon","expandedRowRender","expandIconColumnIndex","expandedKeys","childrenColumnName","rowExpandable","onRow"]),l=o.flattenColumns,c=o.expandableType,s=o.expandedKeys,i=o.childrenColumnName,u=o.onTriggerExpand,f=o.rowExpandable,d=o.onRow,v=o.expandRowByClick,m=o.rowClassName,x=c==="nest",S=c==="row"&&(!f||f(e)),y=S||x,b=s&&s.has(t),g=i&&e&&e[i],E=Jn(u),L=d==null?void 0:d(e,n),N=L==null?void 0:L.onClick,I=function(z){v&&y&&u(e,z);for(var R=arguments.length,C=new Array(R>1?R-1:0),p=1;p<R;p++)C[p-1]=arguments[p];N==null||N.apply(void 0,[z].concat(C))},O;typeof m=="string"?O=m:typeof m=="function"&&(O=m(e,n,a));var F=Ue(l);return h(h({},o),{},{columnsKey:F,nestExpandable:x,expanded:b,hasNestChildren:g,record:e,onTriggerExpand:E,rowSupportExpand:S,expandable:y,rowProps:h(h({},L),{},{className:Y(O,L==null?void 0:L.className),onClick:I})})}function at(e){var t=e.prefixCls,n=e.children,a=e.component,o=e.cellComponent,l=e.className,c=e.expanded,s=e.colSpan,i=e.isEmpty,u=Z(te,["scrollbarSize","fixHeader","fixColumn","componentWidth","horizonScroll"]),f=u.scrollbarSize,d=u.fixHeader,v=u.fixColumn,m=u.componentWidth,x=u.horizonScroll,S=n;return(i?x&&m:v)&&(S=r.createElement("div",{style:{width:m-(d?f:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(t,"-expanded-row-fixed")},S)),r.createElement(a,{className:l,style:{display:c?null:"none"}},r.createElement(be,{component:o,prefixCls:t,colSpan:s},S))}function ot(e,t,n,a,o){var l=e.record,c=e.prefixCls,s=e.columnsKey,i=e.fixedInfoList,u=e.expandIconColumnIndex,f=e.nestExpandable,d=e.indentSize,v=e.expandIcon,m=e.expanded,x=e.hasNestChildren,S=e.onTriggerExpand,y=s[n],b=i[n],g;n===(u||0)&&f&&(g=r.createElement(r.Fragment,null,r.createElement("span",{style:{paddingLeft:"".concat(d*a,"px")},className:"".concat(c,"-row-indent indent-level-").concat(a)}),v({prefixCls:c,expanded:m,expandable:x,record:l,onExpand:S})));var E;return t.onCell&&(E=t.onCell(l,o)),{key:y,fixedInfo:b,appendCellNode:g,additionalCellProps:E||{}}}function lt(e){var t=e.className,n=e.style,a=e.record,o=e.index,l=e.renderIndex,c=e.rowKey,s=e.indent,i=s===void 0?0:s,u=e.rowComponent,f=e.cellComponent,d=e.scopeCellComponent,v=rt(a,c,o,i),m=v.prefixCls,x=v.flattenColumns,S=v.expandedRowClassName,y=v.expandedRowRender,b=v.rowProps,g=v.expanded,E=v.rowSupportExpand,L=r.useRef(!1);L.current||(L.current=g);var N=r.createElement(u,Q({},b,{"data-row-key":c,className:Y(t,"".concat(m,"-row"),"".concat(m,"-row-level-").concat(i),b==null?void 0:b.className),style:h(h({},n),b==null?void 0:b.style)}),x.map(function(H,z){var R=H.render,C=H.dataIndex,p=H.className,w=ot(v,H,z,i,o),K=w.key,T=w.fixedInfo,k=w.appendCellNode,_=w.additionalCellProps;return r.createElement(be,Q({className:p,ellipsis:H.ellipsis,align:H.align,scope:H.rowScope,component:H.rowScope?d:f,prefixCls:m,key:K,record:a,index:o,renderIndex:l,dataIndex:C,render:R,shouldCellUpdate:H.shouldCellUpdate},T,{appendNode:k,additionalProps:_}))})),I;if(E&&(L.current||g)){var O=y(a,o,i+1,g),F=S&&S(a,o,i);I=r.createElement(at,{expanded:g,className:Y("".concat(m,"-expanded-row"),"".concat(m,"-expanded-row-level-").concat(i+1),F),prefixCls:m,component:u,cellComponent:f,colSpan:x.length,isEmpty:!1},O)}return r.createElement(r.Fragment,null,N,I)}lt.displayName="BodyRow";const cr=He(lt);function sr(e){var t=e.columnKey,n=e.onColumnResize,a=r.useRef();return r.useEffect(function(){a.current&&n(t,a.current.offsetWidth)},[]),r.createElement(cn,{data:t},r.createElement("td",{ref:a,style:{padding:0,border:0,height:0}},r.createElement("div",{style:{height:0,overflow:"hidden"}}," ")))}function ur(e){var t=e.prefixCls,n=e.columnsKey,a=e.onColumnResize;return r.createElement("tr",{"aria-hidden":"true",className:"".concat(t,"-measure-row"),style:{height:0,fontSize:0}},r.createElement(cn.Collection,{onBatchResize:function(l){l.forEach(function(c){var s=c.data,i=c.size;a(s,i.offsetWidth)})}},n.map(function(o){return r.createElement(sr,{key:o,columnKey:o,onColumnResize:a})})))}function it(e){var t=e.data,n=e.measureColumnWidth,a=Z(te,["prefixCls","getComponent","onColumnResize","flattenColumns","getRowKey","expandedKeys","childrenColumnName","emptyNode"]),o=a.prefixCls,l=a.getComponent,c=a.onColumnResize,s=a.flattenColumns,i=a.getRowKey,u=a.expandedKeys,f=a.childrenColumnName,d=a.emptyNode,v=tt(t,f,u,i),m=r.useRef({renderWithProps:!1}),x=l(["body","wrapper"],"tbody"),S=l(["body","row"],"tr"),y=l(["body","cell"],"td"),b=l(["body","cell"],"th"),g;t.length?g=v.map(function(L,N){var I=L.record,O=L.indent,F=L.index,H=i(I,N);return r.createElement(cr,{key:H,rowKey:H,record:I,index:N,renderIndex:F,rowComponent:S,cellComponent:y,scopeCellComponent:b,getRowKey:i,indent:O})}):g=r.createElement(at,{expanded:!0,className:"".concat(o,"-placeholder"),prefixCls:o,component:S,cellComponent:y,colSpan:s.length,isEmpty:!0},d);var E=Ue(s);return r.createElement(Zn.Provider,{value:m.current},r.createElement(x,{className:"".concat(o,"-tbody")},n&&r.createElement(ur,{prefixCls:o,columnsKey:E,onColumnResize:c}),g))}it.displayName="Body";const dr=He(it);var fr=["expandable"],ct="RC_TABLE_INTERNAL_COL_DEFINE";function mr(e){var t=e.expandable,n=Ne(e,fr),a;return"expandable"in e?a=h(h({},n),t):a=n,a.showExpandColumn===!1&&(a.expandIconColumnIndex=-1),a}var vr=["columnType"];function st(e){for(var t=e.colWidths,n=e.columns,a=e.columCount,o=[],l=a||n.length,c=!1,s=l-1;s>=0;s-=1){var i=t[s],u=n&&n[s],f=u&&u[ct];if(i||f||c){var d=f||{};d.columnType;var v=Ne(d,vr);o.unshift(r.createElement("col",Q({key:s,style:{width:i}},v))),c=!0}}return r.createElement("colgroup",null,o)}var pr=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];function xr(e,t){return r.useMemo(function(){for(var n=[],a=0;a<t;a+=1){var o=e[a];if(o!==void 0)n[a]=o;else return null}return n},[e.join("_"),t])}var ut=r.forwardRef(function(e,t){var n=e.className,a=e.noData,o=e.columns,l=e.flattenColumns,c=e.colWidths,s=e.columCount,i=e.stickyOffsets,u=e.direction,f=e.fixHeader,d=e.stickyTopOffset,v=e.stickyBottomOffset,m=e.stickyClassName,x=e.onScroll,S=e.maxContentScroll,y=e.children,b=Ne(e,pr),g=Z(te,["prefixCls","scrollbarSize","isSticky"]),E=g.prefixCls,L=g.scrollbarSize,N=g.isSticky,I=N&&!f?0:L,O=r.useRef(null),F=r.useCallback(function(T){Fn(t,T),Fn(O,T)},[]);r.useEffect(function(){var T;function k(_){var A=_,G=A.currentTarget,D=A.deltaX;D&&(x({currentTarget:G,scrollLeft:G.scrollLeft+D}),_.preventDefault())}return(T=O.current)===null||T===void 0||T.addEventListener("wheel",k),function(){var _;(_=O.current)===null||_===void 0||_.removeEventListener("wheel",k)}},[]);var H=r.useMemo(function(){return l.every(function(T){return T.width})},[l]),z=l[l.length-1],R={fixed:z?z.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(E,"-cell-scrollbar")}}},C=r.useMemo(function(){return I?[].concat(ve(o),[R]):o},[I,o]),p=r.useMemo(function(){return I?[].concat(ve(l),[R]):l},[I,l]),w=r.useMemo(function(){var T=i.right,k=i.left;return h(h({},i),{},{left:u==="rtl"?[].concat(ve(k.map(function(_){return _+I})),[0]):k,right:u==="rtl"?T:[].concat(ve(T.map(function(_){return _+I})),[0]),isSticky:N})},[I,i,N]),K=xr(c,s);return r.createElement("div",{style:h({overflow:"hidden"},N?{top:d,bottom:v}:{}),ref:F,className:Y(n,P({},m,!!m))},r.createElement("table",{style:{tableLayout:"fixed",visibility:a||K?null:"hidden"}},(!a||!S||H)&&r.createElement(st,{colWidths:K?[].concat(ve(K),[I]):[],columCount:s+1,columns:p}),y(h(h({},b),{},{stickyOffsets:w,columns:C,flattenColumns:p}))))});ut.displayName="FixedHolder";const An=r.memo(ut);function dt(e){var t=e.cells,n=e.stickyOffsets,a=e.flattenColumns,o=e.rowComponent,l=e.cellComponent,c=e.tdCellComponent,s=e.onHeaderRow,i=e.index,u=Z(te,["prefixCls","direction"]),f=u.prefixCls,d=u.direction,v;s&&(v=s(t.map(function(x){return x.column}),i));var m=Ue(t.map(function(x){return x.column}));return r.createElement(o,v,t.map(function(x,S){var y=x.column,b=un(x.colStart,x.colEnd,a,n,d,y),g;return y&&y.onHeaderCell&&(g=x.column.onHeaderCell(y)),r.createElement(be,Q({},x,{scope:y.title?x.colSpan>1?"colgroup":"col":null,ellipsis:y.ellipsis,align:y.align,component:y.title?l:c,prefixCls:f,key:m[S]},b,{additionalProps:g,rowType:"header"}))}))}dt.displayName="HeaderRow";function Cr(e){var t=[];function n(c,s){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;t[i]=t[i]||[];var u=s,f=c.filter(Boolean).map(function(d){var v={key:d.key,className:d.className||"",children:d.title,column:d,colStart:u},m=1,x=d.children;return x&&x.length>0&&(m=n(x,u,i+1).reduce(function(S,y){return S+y},0),v.hasSubColumns=!0),"colSpan"in d&&(m=d.colSpan),"rowSpan"in d&&(v.rowSpan=d.rowSpan),v.colSpan=m,v.colEnd=v.colStart+m-1,t[i].push(v),u+=m,m});return f}n(e,0);for(var a=t.length,o=function(s){t[s].forEach(function(i){!("rowSpan"in i)&&!i.hasSubColumns&&(i.rowSpan=a-s)})},l=0;l<a;l+=1)o(l);return t}function yr(e){var t=e.stickyOffsets,n=e.columns,a=e.flattenColumns,o=e.onHeaderRow,l=Z(te,["prefixCls","getComponent"]),c=l.prefixCls,s=l.getComponent,i=r.useMemo(function(){return Cr(n)},[n]),u=s(["header","wrapper"],"thead"),f=s(["header","row"],"tr"),d=s(["header","cell"],"th"),v=s(["header","cell"],"td");return r.createElement(u,{className:"".concat(c,"-thead")},i.map(function(m,x){var S=r.createElement(dt,{key:x,flattenColumns:a,cells:m,stickyOffsets:t,rowComponent:f,cellComponent:d,tdCellComponent:v,onHeaderRow:o,index:x});return S}))}const Xn=He(yr);function Dn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return typeof t=="number"?t:t.endsWith("%")?e*parseFloat(t)/100:null}function hr(e,t,n){return r.useMemo(function(){if(t&&t>0){var a=0,o=0;e.forEach(function(v){var m=Dn(t,v.width);m?a+=m:o+=1});var l=Math.max(t-a,o),c=o,s=l/o,i=0,u=e.map(function(v){var m=h({},v),x=Dn(t,m.width);if(x)m.width=x;else{var S=Math.floor(s);m.width=c===1?l:S,l-=S,c-=1}return i+=m.width,m}),f=Math.max(t,n);if(i<f){var d=f/i;l=f,u.forEach(function(v,m){var x=Math.floor(v.width*d);v.width=m===u.length-1?l:x,l-=x})}return[u,Math.max(i,f)]}return[e,t]},[e,t,n])}var gr=["children"],Rr=["fixed"];function ft(e){return Wt(e).filter(function(t){return r.isValidElement(t)}).map(function(t){var n=t.key,a=t.props,o=a.children,l=Ne(a,gr),c=h({key:n},l);return o&&(c.children=ft(o)),c})}function on(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key";return e.filter(function(n){return n&&Le(n)==="object"}).reduce(function(n,a,o){var l=a.fixed,c=l===!0?"left":l,s="".concat(t,"-").concat(o),i=a.children;return i&&i.length>0?[].concat(ve(n),ve(on(i,s).map(function(u){return h({fixed:c},u)}))):[].concat(ve(n),[h(h({key:s},a),{},{fixed:c})])},[])}function Sr(e){return e.map(function(t){var n=t.fixed,a=Ne(t,Rr),o=n;return n==="left"?o="right":n==="right"&&(o="left"),h({fixed:o},a)})}function wr(e,t){var n=e.prefixCls,a=e.columns,o=e.children,l=e.expandable,c=e.expandedKeys,s=e.columnTitle,i=e.getRowKey,u=e.onTriggerExpand,f=e.expandIcon,d=e.rowExpandable,v=e.expandIconColumnIndex,m=e.direction,x=e.expandRowByClick,S=e.columnWidth,y=e.fixed,b=e.scrollWidth,g=e.clientWidth,E=r.useMemo(function(){return a||ft(o)},[a,o]),L=r.useMemo(function(){if(l){var R,C=E.slice();if(!C.includes(Ee)){var p=v||0;p>=0&&C.splice(p,0,Ee)}var w=C.indexOf(Ee);C=C.filter(function(_,A){return _!==Ee||A===w});var K=E[w],T;(y==="left"||y)&&!v?T="left":(y==="right"||y)&&v===E.length?T="right":T=K?K.fixed:null;var k=(R={},P(R,ct,{className:"".concat(n,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),P(R,"title",s),P(R,"fixed",T),P(R,"className","".concat(n,"-row-expand-icon-cell")),P(R,"width",S),P(R,"render",function(A,G,D){var ue=i(G,D),Ce=c.has(ue),re=d?d(G):!0,W=f({prefixCls:n,expanded:Ce,expandable:re,record:G,onExpand:u});return x?r.createElement("span",{onClick:function(ee){return ee.stopPropagation()}},W):W}),R);return C.map(function(_){return _===Ee?k:_})}return E.filter(function(_){return _!==Ee})},[l,E,i,c,f,m]),N=r.useMemo(function(){var R=L;return t&&(R=t(R)),R.length||(R=[{render:function(){return null}}]),R},[t,L,m]),I=r.useMemo(function(){return m==="rtl"?Sr(on(N)):on(N)},[N,m,b]),O=hr(I,b,g),F=X(O,2),H=F[0],z=F[1];return[N,H,z]}function Er(e){var t,n=e.prefixCls,a=e.record,o=e.onExpand,l=e.expanded,c=e.expandable,s="".concat(n,"-row-expand-icon");if(!c)return r.createElement("span",{className:Y(s,"".concat(n,"-row-spaced"))});var i=function(f){o(a,f),f.stopPropagation()};return r.createElement("span",{className:Y(s,(t={},P(t,"".concat(n,"-row-expanded"),l),P(t,"".concat(n,"-row-collapsed"),!l),t)),onClick:i})}function Nr(e,t,n){var a=[];function o(l){(l||[]).forEach(function(c,s){a.push(t(c,s)),o(c[n])})}return o(e),a}function br(e,t,n){var a=mr(e),o=a.expandIcon,l=a.expandedRowKeys,c=a.defaultExpandedRowKeys,s=a.defaultExpandAllRows,i=a.expandedRowRender,u=a.onExpand,f=a.onExpandedRowsChange,d=a.childrenColumnName,v=o||Er,m=d||"children",x=r.useMemo(function(){return i?"row":e.expandable&&e.internalHooks===je&&e.expandable.__PARENT_RENDER_ICON__||t.some(function(N){return N&&Le(N)==="object"&&N[m]})?"nest":!1},[!!i,t]),S=r.useState(function(){return c||(s?Nr(t,n,m):[])}),y=X(S,2),b=y[0],g=y[1],E=r.useMemo(function(){return new Set(l||b||[])},[l,b]),L=r.useCallback(function(N){var I=n(N,t.indexOf(N)),O,F=E.has(I);F?(E.delete(I),O=ve(E)):O=[].concat(ve(E),[I]),g(O),u&&u(!F,N),f&&f(O)},[n,E,t,u,f]);return[a,x,E,v,m,L]}function kr(e,t,n,a){var o=e.map(function(l,c){return un(c,c,e,t,n,a==null?void 0:a[c])});return Yn(function(){return o},[o],function(l,c){return!Gn(l,c)})}function mt(e){var t=r.useRef(e),n=r.useState({}),a=X(n,2),o=a[1],l=r.useRef(null),c=r.useRef([]);function s(i){c.current.push(i);var u=Promise.resolve();l.current=u,u.then(function(){if(l.current===u){var f=c.current,d=t.current;c.current=[],f.forEach(function(v){t.current=v(t.current)}),l.current=null,d!==t.current&&o({})}})}return r.useEffect(function(){return function(){l.current=null}},[]),[t.current,s]}function Ir(e){var t=r.useRef(e||null),n=r.useRef();function a(){window.clearTimeout(n.current)}function o(c){t.current=c,a(),n.current=window.setTimeout(function(){t.current=null,n.current=void 0},100)}function l(){return t.current}return r.useEffect(function(){return a},[]),[o,l]}function Tr(){var e=r.useState(-1),t=X(e,2),n=t[0],a=t[1],o=r.useState(-1),l=X(o,2),c=l[0],s=l[1],i=r.useCallback(function(u,f){a(u),s(f)},[]);return[n,c,i]}var jn=At()?window:null;function Lr(e,t){var n=Le(e)==="object"?e:{},a=n.offsetHeader,o=a===void 0?0:a,l=n.offsetSummary,c=l===void 0?0:l,s=n.offsetScroll,i=s===void 0?0:s,u=n.getContainer,f=u===void 0?function(){return jn}:u,d=f()||jn;return r.useMemo(function(){var v=!!e;return{isSticky:v,stickyClassName:v?"".concat(t,"-sticky-holder"):"",offsetHeader:o,offsetSummary:c,offsetScroll:i,container:d}},[i,o,c,t,d])}function Hr(e,t,n){var a=r.useMemo(function(){for(var o=[],l=[],c=0,s=0,i=0;i<t;i+=1)if(n==="rtl"){l[i]=s,s+=e[i]||0;var u=t-i-1;o[u]=c,c+=e[u]||0}else{o[i]=c,c+=e[i]||0;var f=t-i-1;l[f]=s,s+=e[f]||0}return{left:o,right:l}},[e,t,n]);return a}function Un(e){var t=e.className,n=e.children;return r.createElement("div",{className:t},n)}var _r=function(t,n){var a,o,l=t.scrollBodyRef,c=t.onScroll,s=t.offsetScroll,i=t.container,u=Z(te,"prefixCls"),f=((a=l.current)===null||a===void 0?void 0:a.scrollWidth)||0,d=((o=l.current)===null||o===void 0?void 0:o.clientWidth)||0,v=f&&d*(d/f),m=r.useRef(),x=mt({scrollLeft:0,isHiddenScrollBar:!1}),S=X(x,2),y=S[0],b=S[1],g=r.useRef({delta:0,x:0}),E=r.useState(!1),L=X(E,2),N=L[0],I=L[1],O=function(){I(!1)},F=function(p){p.persist(),g.current.delta=p.pageX-y.scrollLeft,g.current.x=0,I(!0),p.preventDefault()},H=function(p){var w,K=p||((w=window)===null||w===void 0?void 0:w.event),T=K.buttons;if(!N||T===0){N&&I(!1);return}var k=g.current.x+p.pageX-g.current.x-g.current.delta;k<=0&&(k=0),k+v>=d&&(k=d-v),c({scrollLeft:k/d*(f+2)}),g.current.x=p.pageX},z=function(){if(l.current){var p=Bn(l.current).top,w=p+l.current.offsetHeight,K=i===window?document.documentElement.scrollTop+window.innerHeight:Bn(i).top+i.clientHeight;w-zn()<=K||p>=K-s?b(function(T){return h(h({},T),{},{isHiddenScrollBar:!0})}):b(function(T){return h(h({},T),{},{isHiddenScrollBar:!1})})}},R=function(p){b(function(w){return h(h({},w),{},{scrollLeft:p/f*d||0})})};return r.useImperativeHandle(n,function(){return{setScrollLeft:R}}),r.useEffect(function(){var C=Xe(document.body,"mouseup",O,!1),p=Xe(document.body,"mousemove",H,!1);return z(),function(){C.remove(),p.remove()}},[v,N]),r.useEffect(function(){var C=Xe(i,"scroll",z,!1),p=Xe(window,"resize",z,!1);return function(){C.remove(),p.remove()}},[i]),r.useEffect(function(){y.isHiddenScrollBar||b(function(C){var p=l.current;return p?h(h({},C),{},{scrollLeft:p.scrollLeft/p.scrollWidth*p.clientWidth}):C})},[y.isHiddenScrollBar]),f<=d||!v||y.isHiddenScrollBar?null:r.createElement("div",{style:{height:zn(),width:d,bottom:s},className:"".concat(u,"-sticky-scroll")},r.createElement("div",{onMouseDown:F,ref:m,className:Y("".concat(u,"-sticky-scroll-bar"),P({},"".concat(u,"-sticky-scroll-bar-active"),N)),style:{width:"".concat(v,"px"),transform:"translate3d(".concat(y.scrollLeft,"px, 0, 0)")}}))};const Mr=r.forwardRef(_r);function Kr(e){return null}function Pr(e){return null}var vt="rc-table",Or=[],Fr={};function zr(){return"No Data"}function Br(e){var t,n=h({rowKey:"key",prefixCls:vt,emptyText:zr},e),a=n.prefixCls,o=n.className,l=n.rowClassName,c=n.style,s=n.data,i=n.rowKey,u=n.scroll,f=n.tableLayout,d=n.direction,v=n.title,m=n.footer,x=n.summary,S=n.caption,y=n.id,b=n.showHeader,g=n.components,E=n.emptyText,L=n.onRow,N=n.onHeaderRow,I=n.internalHooks,O=n.transformColumns,F=n.internalRefs,H=n.tailor,z=n.getContainerWidth,R=n.sticky,C=s||Or,p=!!C.length,w=I===je,K=r.useCallback(function(M,$){return qn(g,M)||$},[g]),T=r.useMemo(function(){return typeof i=="function"?i:function(M){var $=M&&M[i];return $}},[i]),k=K(["body"]),_=Tr(),A=X(_,3),G=A[0],D=A[1],ue=A[2],Ce=br(n,C,T),re=X(Ce,6),W=re[0],j=re[1],ee=re[2],pe=re[3],de=re[4],xe=re[5],le=u==null?void 0:u.x,q=r.useState(0),V=X(q,2),J=V[0],ye=V[1],Me=wr(h(h(h({},n),W),{},{expandable:!!W.expandedRowRender,columnTitle:W.columnTitle,expandedKeys:ee,getRowKey:T,onTriggerExpand:xe,expandIcon:pe,expandIconColumnIndex:W.expandIconColumnIndex,direction:d,scrollWidth:w&&H&&typeof le=="number"?le:null,clientWidth:J}),w?O:null),ke=X(Me,3),ae=ke[0],B=ke[1],he=ke[2],oe=he??le,fe=r.useMemo(function(){return{columns:ae,flattenColumns:B}},[ae,B]),ge=r.useRef(),we=r.useRef(),U=r.useRef(),dn=r.useRef(),fn=r.useRef(),Ct=r.useState(!1),mn=X(Ct,2),yt=mn[0],Oe=mn[1],ht=r.useState(!1),vn=X(ht,2),gt=vn[0],Fe=vn[1],Rt=mt(new Map),pn=X(Rt,2),St=pn[0],wt=pn[1],Et=Ue(B),xn=Et.map(function(M){return St.get(M)}),Cn=r.useMemo(function(){return xn},[xn.join("_")]),ze=Hr(Cn,B.length,d),ie=u&&an(u.y),me=u&&an(oe)||!!W.fixed,Ke=me&&B.some(function(M){var $=M.fixed;return $}),yn=r.useRef(),Ie=Lr(R,a),Re=Ie.isSticky,Nt=Ie.offsetHeader,bt=Ie.offsetSummary,kt=Ie.offsetScroll,It=Ie.stickyClassName,Tt=Ie.container,ce=r.useMemo(function(){return x==null?void 0:x(C)},[x,C]),Pe=(ie||Re)&&r.isValidElement(ce)&&ce.type===Ve&&ce.props.fixed,Ye,Be,Ge;ie&&(Be={overflowY:"scroll",maxHeight:u.y}),me&&(Ye={overflowX:"auto"},ie||(Be={overflowY:"hidden"}),Ge={width:oe===!0?"auto":oe,minWidth:"100%"});var hn=r.useCallback(function(M,$){Xt(ge.current)&&wt(function(se){if(se.get(M)!==$){var ne=new Map(se);return ne.set(M,$),ne}return se})},[]),Lt=Ir(null),gn=X(Lt,2),Ht=gn[0],Rn=gn[1];function $e(M,$){$&&(typeof $=="function"?$(M):$.scrollLeft!==M&&($.scrollLeft=M,$.scrollLeft!==M&&setTimeout(function(){$.scrollLeft=M},0)))}var Te=Jn(function(M){var $=M.currentTarget,se=M.scrollLeft,ne=d==="rtl",Se=typeof se=="number"?se:$.scrollLeft,On=$||Fr;if(!Rn()||Rn()===On){var en;Ht(On),$e(Se,we.current),$e(Se,U.current),$e(Se,fn.current),$e(Se,(en=yn.current)===null||en===void 0?void 0:en.setScrollLeft)}var nn=$||we.current;if(nn){var tn=nn.scrollWidth,rn=nn.clientWidth;if(tn===rn){Oe(!1),Fe(!1);return}ne?(Oe(-Se<tn-rn),Fe(-Se>0)):(Oe(Se>0),Fe(Se<tn-rn))}}),Sn=function(){me&&U.current?Te({currentTarget:U.current}):(Oe(!1),Fe(!1))},_t=function($){var se=$.width,ne=ge.current?ge.current.offsetWidth:se;w&&z&&ge.current&&(ne=z(ge.current,ne)||ne),ne!==J&&(Sn(),ye(ne))},wn=r.useRef(!1);r.useEffect(function(){wn.current&&Sn()},[me,s,ae.length]),r.useEffect(function(){wn.current=!0},[]);var Mt=r.useState(0),En=X(Mt,2),We=En[0],Nn=En[1],Kt=r.useState(!0),bn=X(Kt,2),kn=bn[0],Pt=bn[1];r.useEffect(function(){(!H||!w)&&(U.current instanceof Element?Nn($n(U.current).width):Nn($n(dn.current).width)),Pt(Dt("position","sticky"))},[]),r.useEffect(function(){w&&F&&(F.body.current=U.current)});var Ot=r.useCallback(function(M){return r.createElement(r.Fragment,null,r.createElement(Xn,M),Pe==="top"&&r.createElement(De,M,ce))},[Pe,ce]),Ft=r.useCallback(function(M){return r.createElement(De,M,ce)},[ce]),In=K(["table"],"table"),Ae=r.useMemo(function(){return f||(Ke?oe==="max-content"?"auto":"fixed":ie||Re||B.some(function(M){var $=M.ellipsis;return $})?"fixed":"auto")},[ie,Ke,B,f,Re]),qe,Je={colWidths:Cn,columCount:B.length,stickyOffsets:ze,onHeaderRow:N,fixHeader:ie,scroll:u},Tn=r.useMemo(function(){return p?null:typeof E=="function"?E():E},[p,E]),Ln=r.createElement(dr,{data:C,measureColumnWidth:ie||me||Re}),Hn=r.createElement(st,{colWidths:B.map(function(M){var $=M.width;return $}),columns:B}),_n=S!=null?r.createElement("caption",{className:"".concat(a,"-caption")},S):void 0,zt=Wn(n,{data:!0}),Mn=Wn(n,{aria:!0});if(ie||Re){var Qe;typeof k=="function"?(Qe=k(C,{scrollbarSize:We,ref:U,onScroll:Te}),Je.colWidths=B.map(function(M,$){var se=M.width,ne=$===B.length-1?se-We:se;return typeof ne=="number"&&!Number.isNaN(ne)?ne:0})):Qe=r.createElement("div",{style:h(h({},Ye),Be),onScroll:Te,ref:U,className:Y("".concat(a,"-body"))},r.createElement(In,Q({style:h(h({},Ge),{},{tableLayout:Ae})},Mn),_n,Hn,Ln,!Pe&&ce&&r.createElement(De,{stickyOffsets:ze,flattenColumns:B,columns:ae},ce)));var Kn=h(h(h({noData:!C.length,maxContentScroll:me&&oe==="max-content"},Je),fe),{},{direction:d,stickyClassName:It,onScroll:Te});qe=r.createElement(r.Fragment,null,b!==!1&&r.createElement(An,Q({},Kn,{stickyTopOffset:Nt,className:"".concat(a,"-header"),ref:we}),Ot),Qe,Pe&&Pe!=="top"&&r.createElement(An,Q({},Kn,{stickyBottomOffset:bt,className:"".concat(a,"-summary"),ref:fn}),Ft),Re&&U.current&&U.current instanceof Element&&r.createElement(Mr,{ref:yn,offsetScroll:kt,scrollBodyRef:U,onScroll:Te,container:Tt}))}else qe=r.createElement("div",{style:h(h({},Ye),Be),className:Y("".concat(a,"-content")),onScroll:Te,ref:U},r.createElement(In,Q({style:h(h({},Ge),{},{tableLayout:Ae})},Mn),_n,Hn,b!==!1&&r.createElement(Xn,Q({},Je,fe)),Ln,ce&&r.createElement(De,{stickyOffsets:ze,flattenColumns:B,columns:ae},ce)));var Ze=r.createElement("div",Q({className:Y(a,o,(t={},P(t,"".concat(a,"-rtl"),d==="rtl"),P(t,"".concat(a,"-ping-left"),yt),P(t,"".concat(a,"-ping-right"),gt),P(t,"".concat(a,"-layout-fixed"),f==="fixed"),P(t,"".concat(a,"-fixed-header"),ie),P(t,"".concat(a,"-fixed-column"),Ke),P(t,"".concat(a,"-scroll-horizontal"),me),P(t,"".concat(a,"-has-fix-left"),B[0]&&B[0].fixed),P(t,"".concat(a,"-has-fix-right"),B[B.length-1]&&B[B.length-1].fixed==="right"),t)),style:c,id:y,ref:ge},zt),v&&r.createElement(Un,{className:"".concat(a,"-title")},v(C)),r.createElement("div",{ref:dn,className:"".concat(a,"-container")},qe),m&&r.createElement(Un,{className:"".concat(a,"-footer")},m(C)));me&&(Ze=r.createElement(cn,{onResize:_t},Ze));var Pn=kr(B,ze,d,ae),Bt=r.useMemo(function(){return{scrollX:oe,prefixCls:a,getComponent:K,scrollbarSize:We,direction:d,fixedInfoList:Pn,isSticky:Re,supportSticky:kn,componentWidth:J,fixHeader:ie,fixColumn:Ke,horizonScroll:me,tableLayout:Ae,rowClassName:l,expandedRowClassName:W.expandedRowClassName,expandIcon:pe,expandableType:j,expandRowByClick:W.expandRowByClick,expandedRowRender:W.expandedRowRender,onTriggerExpand:xe,expandIconColumnIndex:W.expandIconColumnIndex,indentSize:W.indentSize,allColumnsFixedLeft:B.every(function(M){return M.fixed==="left"}),emptyNode:Tn,columns:ae,flattenColumns:B,onColumnResize:hn,hoverStartRow:G,hoverEndRow:D,onHover:ue,rowExpandable:W.rowExpandable,onRow:L,getRowKey:T,expandedKeys:ee,childrenColumnName:de}},[oe,a,K,We,d,Pn,Re,kn,J,ie,Ke,me,Ae,l,W.expandedRowClassName,pe,j,W.expandRowByClick,W.expandedRowRender,xe,W.expandIconColumnIndex,W.indentSize,Tn,ae,B,hn,G,D,ue,W.rowExpandable,L,T,ee,de]);return r.createElement(te.Provider,{value:Bt},Ze)}function $r(e){return Qn(Br,e)}var _e=$r();_e.EXPAND_COLUMN=Ee;_e.INTERNAL_HOOKS=je;_e.Column=Kr;_e.ColumnGroup=Pr;_e.Summary=ir;var pt=ln(null),xt=ln(null);function Wr(e,t,n){var a=t||1;return n[e+a]-(n[e]||0)}function Ar(e){var t=e.rowInfo,n=e.column,a=e.colIndex,o=e.indent,l=e.index,c=e.renderIndex,s=e.record,i=e.style,u=e.className,f=e.inverse,d=e.getHeight,v=n.render,m=n.dataIndex,x=n.className,S=n.width,y=Z(xt,["columnsOffset"]),b=y.columnsOffset,g=ot(t,n,a,o,l),E=g.key,L=g.fixedInfo,N=g.appendCellNode,I=g.additionalCellProps,O=I.style,F=I.colSpan,H=F===void 0?1:F,z=I.rowSpan,R=z===void 0?1:z,C=a-1,p=Wr(C,H,b),w=H>1?S-p:0,K=h(h(h({},O),i),{},{flex:"0 0 ".concat(p,"px"),width:"".concat(p,"px"),marginRight:w,pointerEvents:"auto"}),T=r.useMemo(function(){return f?R<=1:H===0||R===0||R>1},[R,H,f]);T?K.visibility="hidden":f&&(K.height=d==null?void 0:d(R));var k=T?function(){return null}:v,_={};return(R===0||H===0)&&(_.rowSpan=1,_.colSpan=1),r.createElement(be,Q({className:Y(x,u),ellipsis:n.ellipsis,align:n.align,scope:n.rowScope,component:"div",prefixCls:t.prefixCls,key:E,record:s,index:l,renderIndex:c,dataIndex:m,render:k,shouldCellUpdate:n.shouldCellUpdate},L,{appendNode:N,additionalProps:h(h({},I),{},{style:K},_)}))}var Xr=["data","index","className","rowKey","style","extra","getHeight"],Dr=r.forwardRef(function(e,t){var n=e.data,a=e.index,o=e.className,l=e.rowKey,c=e.style,s=e.extra,i=e.getHeight,u=Ne(e,Xr),f=n.record,d=n.indent,v=n.index,m=Z(te,["prefixCls","flattenColumns","fixColumn","componentWidth","scrollX"]),x=m.scrollX,S=m.flattenColumns,y=m.prefixCls,b=m.fixColumn,g=m.componentWidth,E=rt(f,l,a,d),L=E.rowSupportExpand,N=E.expanded,I=E.rowProps,O=E.expandedRowRender,F=E.expandedRowClassName,H;if(L&&N){var z=O(f,a,d+1,N),R=F==null?void 0:F(f,a,d),C={};b&&(C={style:P({},"--virtual-width","".concat(g,"px"))});var p="".concat(y,"-expanded-row-cell");H=r.createElement("div",{className:Y("".concat(y,"-expanded-row"),"".concat(y,"-expanded-row-level-").concat(d+1),R)},r.createElement(be,{component:"div",prefixCls:y,className:Y(p,P({},"".concat(p,"-fixed"),b)),additionalProps:C},z))}var w=h(h({},c),{},{width:x});s&&(w.position="absolute",w.pointerEvents="none");var K=r.createElement("div",Q({},I,u,{ref:L?null:t,className:Y(o,"".concat(y,"-row"),I==null?void 0:I.className,P({},"".concat(y,"-row-extra"),s)),style:h(h({},w),I==null?void 0:I.style)}),S.map(function(T,k){return r.createElement(Ar,{key:k,rowInfo:E,column:T,colIndex:k,indent:d,index:a,renderIndex:v,record:f,inverse:s,getHeight:i})}));return L?r.createElement("div",{ref:t},K,H):K}),Vn=He(Dr),jr=r.forwardRef(function(e,t){var n=e.data,a=e.onScroll,o=Z(te,["flattenColumns","onColumnResize","getRowKey","prefixCls","expandedKeys","childrenColumnName","emptyNode","scrollX"]),l=o.flattenColumns,c=o.onColumnResize,s=o.getRowKey,i=o.expandedKeys,u=o.prefixCls,f=o.childrenColumnName,d=o.emptyNode,v=o.scrollX,m=Z(pt),x=m.sticky,S=m.scrollY,y=m.listItemHeight,b=r.useRef(),g=tt(n,f,i,s),E=r.useMemo(function(){var R=0;return l.map(function(C){var p=C.width,w=C.key;return R+=p,[w,p,R]})},[l]),L=r.useMemo(function(){return E.map(function(R){return R[2]})},[E]);r.useEffect(function(){E.forEach(function(R){var C=X(R,2),p=C[0],w=C[1];c(p,w)})},[E]),r.useImperativeHandle(t,function(){var R={};return Object.defineProperty(R,"scrollLeft",{get:function(){var p;return((p=b.current)===null||p===void 0?void 0:p.getScrollInfo().x)||0},set:function(p){var w;(w=b.current)===null||w===void 0||w.scrollTo({left:p})}}),R});var N=function(C,p){var w,K=(w=g[p])===null||w===void 0?void 0:w.record,T=C.onCell;if(T){var k,_=T(K,p);return(k=_==null?void 0:_.rowSpan)!==null&&k!==void 0?k:1}return 1},I=function(C){var p=C.start,w=C.end,K=C.getSize,T=C.offsetY;if(w<0)return null;for(var k=l.filter(function(q){return N(q,p)===0}),_=p,A=function(V){if(k=k.filter(function(J){return N(J,V)===0}),!k.length)return _=V,"break"},G=p;G>=0;G-=1){var D=A(G);if(D==="break")break}for(var ue=l.filter(function(q){return N(q,w)!==1}),Ce=w,re=function(V){if(ue=ue.filter(function(J){return N(J,V)!==1}),!ue.length)return Ce=Math.max(V-1,w),"break"},W=w;W<g.length;W+=1){var j=re(W);if(j==="break")break}for(var ee=[],pe=function(V){var J=g[V];if(!J)return"continue";l.some(function(ye){return N(ye,V)>1})&&ee.push(V)},de=_;de<=Ce;de+=1)var xe=pe(de);var le=ee.map(function(q){var V=g[q],J=s(V.record,q),ye=function(ae){var B=q+ae-1,he=s(g[B].record,B),oe=K(J,he);return oe.bottom-oe.top},Me=K(J);return r.createElement(Vn,{key:q,data:V,rowKey:J,index:q,style:{top:-T+Me.top},extra:!0,getHeight:ye})});return le},O=r.useMemo(function(){return{columnsOffset:L}},[L]),F="".concat(u,"-tbody"),H;if(g.length){var z={};x&&(z.position="sticky",z.bottom=0,Le(x)==="object"&&x.offsetScroll&&(z.bottom=x.offsetScroll)),H=r.createElement(jt,{fullHeight:!1,ref:b,styles:{horizontalScrollBar:z},className:Y(F,"".concat(F,"-virtual")),height:S,itemHeight:y||24,data:g,itemKey:function(C){return s(C.record)},scrollWidth:v,onVirtualScroll:function(C){var p=C.x;a({scrollLeft:p})},extraRender:I},function(R,C,p){var w=s(R.record,C);return r.createElement(Vn,Q({data:R,rowKey:w,index:C},p))})}else H=r.createElement("div",{className:Y("".concat(u,"-placeholder"))},r.createElement(be,{component:"div",prefixCls:u},d));return r.createElement(xt.Provider,{value:O},H)}),Ur=He(jr),Vr=function(t,n){var a=n.ref,o=n.onScroll;return r.createElement(Ur,{ref:a,data:t,onScroll:o})};function Yr(e){var t=e.columns,n=e.scroll,a=e.sticky,o=e.prefixCls,l=o===void 0?vt:o,c=e.className,s=e.listItemHeight,i=n||{},u=i.x,f=i.y;typeof u!="number"&&(u=1),typeof f!="number"&&(f=500);var d=r.useMemo(function(){return{sticky:a,scrollY:f,listItemHeight:s}},[a,f,s]);return r.createElement(pt.Provider,{value:d},r.createElement(_e,Q({},e,{className:Y(c,"".concat(l,"-virtual")),scroll:h(h({},n),{},{x:u}),components:{body:Vr},columns:t,internalHooks:je,tailor:!0})))}function Gr(e){return Qn(Yr,e)}Gr();export{Ee as E,ir as F,ct as I,Gr as a,je as b,ft as c,$r as g};
