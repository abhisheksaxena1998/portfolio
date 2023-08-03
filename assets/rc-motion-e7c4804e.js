import{h as ce,k as Me,l as xe,a as be,_ as Oe,d as me,c as N,e as d,b as T,m as Te,g as Be}from"./@babel-90ba796a.js";import{c as Ge}from"./classnames-7bb58e6d.js";import{c as Ee,k as ke,A as ne,n as Xe,s as Ye,J as Ze}from"./rc-util-a9271364.js";import{r as u}from"./react-8454558e.js";var en=["children"],De=u.createContext({});function Rn(n){var e=n.children,t=ce(n,en);return u.createElement(De.Provider,{value:t},e)}var nn=function(n){Me(t,n);var e=xe(t);function t(){return be(this,t),e.apply(this,arguments)}return Oe(t,[{key:"render",value:function(){return this.props.children}}]),t}(u.Component),I="none",X="appear",Y="enter",Z="leave",Ce="none",P="prepare",$="start",W="active",pe="end",Ne="prepared";function Re(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit".concat(n)]="webkit".concat(e),t["Moz".concat(n)]="moz".concat(e),t["ms".concat(n)]="MS".concat(e),t["O".concat(n)]="o".concat(e.toLowerCase()),t}function tn(n,e){var t={animationend:Re("Animation","AnimationEnd"),transitionend:Re("Transition","TransitionEnd")};return n&&("AnimationEvent"in e||delete t.animationend.animation,"TransitionEvent"in e||delete t.transitionend.transition),t}var rn=tn(Ee(),typeof window<"u"?window:{}),Ue={};if(Ee()){var an=document.createElement("div");Ue=an.style}var ee={};function Ve(n){if(ee[n])return ee[n];var e=rn[n];if(e)for(var t=Object.keys(e),r=t.length,i=0;i<r;i+=1){var s=t[i];if(Object.prototype.hasOwnProperty.call(e,s)&&s in Ue)return ee[n]=e[s],ee[n]}return""}var we=Ve("animationend"),Fe=Ve("transitionend"),Ie=!!(we&&Fe),Le=we||"animationend",Pe=Fe||"transitionend";function _e(n,e){if(!n)return null;if(me(n)==="object"){var t=e.replace(/-\w/g,function(r){return r[1].toUpperCase()});return n[t]}return"".concat(n,"-").concat(e)}const on=function(n){var e=u.useRef(),t=u.useRef(n);t.current=n;var r=u.useCallback(function(a){t.current(a)},[]);function i(a){a&&(a.removeEventListener(Pe,r),a.removeEventListener(Le,r))}function s(a){e.current&&e.current!==a&&i(e.current),a&&a!==e.current&&(a.addEventListener(Pe,r),a.addEventListener(Le,r),e.current=a)}return u.useEffect(function(){return function(){i(e.current)}},[]),[s,i]};var Ke=Ee()?u.useLayoutEffect:u.useEffect;const un=function(){var n=u.useRef(null);function e(){ke.cancel(n.current)}function t(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;e();var s=ke(function(){i<=1?r({isCanceled:function(){return s!==n.current}}):t(r,i-1)});n.current=s}return u.useEffect(function(){return function(){e()}},[]),[t,e]};var sn=[P,$,W,pe],cn=[P,Ne],je=!1,vn=!0;function Qe(n){return n===W||n===pe}const fn=function(n,e,t){var r=ne(Ce),i=N(r,2),s=i[0],a=i[1],m=un(),p=N(m,2),o=p[0],c=p[1];function v(){a(P,!0)}var f=e?cn:sn;return Ke(function(){if(s!==Ce&&s!==pe){var l=f.indexOf(s),S=f[l+1],C=t(s);C===je?a(S,!0):S&&o(function(_){function k(){_.isCanceled()||a(S,!0)}C===!0?k():Promise.resolve(C).then(k)})}},[n,s]),u.useEffect(function(){return function(){c()}},[]),[v,s]};function dn(n,e,t,r){var i=r.motionEnter,s=i===void 0?!0:i,a=r.motionAppear,m=a===void 0?!0:a,p=r.motionLeave,o=p===void 0?!0:p,c=r.motionDeadline,v=r.motionLeaveImmediately,f=r.onAppearPrepare,l=r.onEnterPrepare,S=r.onLeavePrepare,C=r.onAppearStart,_=r.onEnterStart,k=r.onLeaveStart,D=r.onAppearActive,b=r.onEnterActive,z=r.onLeaveActive,K=r.onAppearEnd,R=r.onEnterEnd,O=r.onLeaveEnd,U=r.onVisibleChanged,te=ne(),j=N(te,2),L=j[0],V=j[1],A=ne(I),w=N(A,2),E=w[0],M=w[1],q=ne(null),B=N(q,2),re=B[0],Q=B[1],ae=u.useRef(!1),ie=u.useRef(null);function G(){return t()}var Se=u.useRef(!1);function ye(){M(I,!0),Q(null,!0)}function he(g){var y=G();if(!(g&&!g.deadline&&g.target!==y)){var h=Se.current,x;E===X&&h?x=K==null?void 0:K(y,g):E===Y&&h?x=R==null?void 0:R(y,g):E===Z&&h&&(x=O==null?void 0:O(y,g)),E!==I&&h&&x!==!1&&ye()}}var $e=on(he),We=N($e,1),ze=We[0],Ae=function(y){var h,x,J;switch(y){case X:return h={},T(h,P,f),T(h,$,C),T(h,W,D),h;case Y:return x={},T(x,P,l),T(x,$,_),T(x,W,b),x;case Z:return J={},T(J,P,S),T(J,$,k),T(J,W,z),J;default:return{}}},H=u.useMemo(function(){return Ae(E)},[E]),He=fn(E,!n,function(g){if(g===P){var y=H[P];return y?y(G()):je}if(F in H){var h;Q(((h=H[F])===null||h===void 0?void 0:h.call(H,G(),null))||null)}return F===W&&(ze(G()),c>0&&(clearTimeout(ie.current),ie.current=setTimeout(function(){he({deadline:!0})},c))),F===Ne&&ye(),vn}),ge=N(He,2),Je=ge[0],F=ge[1],qe=Qe(F);Se.current=qe,Ke(function(){V(e);var g=ae.current;ae.current=!0;var y;!g&&e&&m&&(y=X),g&&e&&s&&(y=Y),(g&&!e&&o||!g&&v&&!e&&o)&&(y=Z);var h=Ae(y);y&&(n||h[P])?(M(y),Je()):M(I)},[e]),u.useEffect(function(){(E===X&&!m||E===Y&&!s||E===Z&&!o)&&M(I)},[m,s,o]),u.useEffect(function(){return function(){ae.current=!1,clearTimeout(ie.current)}},[]);var oe=u.useRef(!1);u.useEffect(function(){L&&(oe.current=!0),L!==void 0&&E===I&&((oe.current||L)&&(U==null||U(L)),oe.current=!0)},[L,E]);var ue=re;return H[P]&&F===$&&(ue=d({transition:"none"},ue)),[E,F,ue,L??e]}function ln(n){var e=n;me(n)==="object"&&(e=n.transitionSupport);function t(i,s){return!!(i.motionName&&e&&s!==!1)}var r=u.forwardRef(function(i,s){var a=i.visible,m=a===void 0?!0:a,p=i.removeOnLeave,o=p===void 0?!0:p,c=i.forceRender,v=i.children,f=i.motionName,l=i.leavedClassName,S=i.eventProps,C=u.useContext(De),_=C.motion,k=t(i,_),D=u.useRef(),b=u.useRef();function z(){try{return D.current instanceof HTMLElement?D.current:Ze(b.current)}catch{return null}}var K=dn(k,m,z,i),R=N(K,4),O=R[0],U=R[1],te=R[2],j=R[3],L=u.useRef(j);j&&(L.current=!0);var V=u.useCallback(function(Q){D.current=Q,Xe(s,Q)},[s]),A,w=d(d({},S),{},{visible:m});if(!v)A=null;else if(O===I)j?A=v(d({},w),V):!o&&L.current&&l?A=v(d(d({},w),{},{className:l}),V):c||!o&&!l?A=v(d(d({},w),{},{style:{display:"none"}}),V):A=null;else{var E,M;U===P?M="prepare":Qe(U)?M="active":U===$&&(M="start");var q=_e(f,"".concat(O,"-").concat(M));A=v(d(d({},w),{},{className:Ge(_e(f,O),(E={},T(E,q,q&&M),T(E,f,typeof f=="string"),E)),style:te}),V)}if(u.isValidElement(A)&&Ye(A)){var B=A,re=B.ref;re||(A=u.cloneElement(A,{ref:V}))}return u.createElement(nn,{ref:b},A)});return r.displayName="CSSMotion",r}const mn=ln(Ie);var ve="add",fe="keep",de="remove",se="removed";function En(n){var e;return n&&me(n)==="object"&&"key"in n?e=n:e={key:n},d(d({},e),{},{key:String(e.key)})}function le(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return n.map(En)}function pn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=[],r=0,i=e.length,s=le(n),a=le(e);s.forEach(function(o){for(var c=!1,v=r;v<i;v+=1){var f=a[v];if(f.key===o.key){r<v&&(t=t.concat(a.slice(r,v).map(function(l){return d(d({},l),{},{status:ve})})),r=v),t.push(d(d({},f),{},{status:fe})),r+=1,c=!0;break}}c||t.push(d(d({},o),{},{status:de}))}),r<i&&(t=t.concat(a.slice(r).map(function(o){return d(d({},o),{},{status:ve})})));var m={};t.forEach(function(o){var c=o.key;m[c]=(m[c]||0)+1});var p=Object.keys(m).filter(function(o){return m[o]>1});return p.forEach(function(o){t=t.filter(function(c){var v=c.key,f=c.status;return v!==o||f!==de}),t.forEach(function(c){c.key===o&&(c.status=fe)})}),t}var Sn=["component","children","onVisibleChanged","onAllRemoved"],yn=["status"],hn=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function An(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:mn,t=function(r){Me(s,r);var i=xe(s);function s(){var a;be(this,s);for(var m=arguments.length,p=new Array(m),o=0;o<m;o++)p[o]=arguments[o];return a=i.call.apply(i,[this].concat(p)),T(Te(a),"state",{keyEntities:[]}),T(Te(a),"removeKey",function(c){var v=a.state.keyEntities,f=v.map(function(l){return l.key!==c?l:d(d({},l),{},{status:se})});return a.setState({keyEntities:f}),f.filter(function(l){var S=l.status;return S!==se}).length}),a}return Oe(s,[{key:"render",value:function(){var m=this,p=this.state.keyEntities,o=this.props,c=o.component,v=o.children,f=o.onVisibleChanged,l=o.onAllRemoved,S=ce(o,Sn),C=c||u.Fragment,_={};return hn.forEach(function(k){_[k]=S[k],delete S[k]}),delete S.keys,u.createElement(C,S,p.map(function(k){var D=k.status,b=ce(k,yn),z=D===ve||D===fe;return u.createElement(e,Be({},_,{key:b.key,visible:z,eventProps:b,onVisibleChanged:function(R){if(f==null||f(R,{key:b.key}),!R){var O=m.removeKey(b.key);O===0&&l&&l()}}}),v)}))}}],[{key:"getDerivedStateFromProps",value:function(m,p){var o=m.keys,c=p.keyEntities,v=le(o),f=pn(c,v);return{keyEntities:f.filter(function(l){var S=c.find(function(C){var _=C.key;return l.key===_});return!(S&&S.status===se&&l.status===de)})}}}]),s}(u.Component);return T(t,"defaultProps",{component:"div"}),t}const Ln=An(Ie);export{mn as C,Rn as M,Ln as a};
