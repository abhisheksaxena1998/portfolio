import{i as c,h as k}from"./@ant-design-3d96d9a5.js";var w=1/0,F="[object Symbol]",G=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,P=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a="\\ud800-\\udfff",j="\\u0300-\\u036f\\ufe20-\\ufe23",O="\\u20d0-\\u20f0",R="\\u2700-\\u27bf",U="a-z\\xdf-\\xf6\\xf8-\\xff",H="\\xac\\xb1\\xd7\\xf7",J="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Y="\\u2000-\\u206f",$=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",y="A-Z\\xc0-\\xd6\\xd8-\\xde",C="\\ufe0e\\ufe0f",E=H+J+Y+$,d="['’]",V="["+a+"]",p="["+E+"]",x="["+j+O+"]",L="\\d+",B="["+R+"]",I="["+U+"]",T="[^"+a+E+L+R+U+y+"]",s="\\ud83c[\\udffb-\\udfff]",q="(?:"+x+"|"+s+")",z="[^"+a+"]",b="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+y+"]",Z="\\u200d",g="(?:"+I+"|"+T+")",K="(?:"+f+"|"+T+")",m="(?:"+d+"(?:d|ll|m|re|s|t|ve))?",A="(?:"+d+"(?:D|LL|M|RE|S|T|VE))?",M=q+"?",N="["+C+"]?",_="(?:"+Z+"(?:"+[z,b,l].join("|")+")"+N+M+")*",D=N+M+_,Q="(?:"+[B,b,l].join("|")+")"+D,X="(?:"+[z+x+"?",x,b,l,V].join("|")+")",uu=RegExp(d,"g"),eu=RegExp(x,"g"),ru=RegExp(s+"(?="+s+")|"+X+D,"g"),ou=RegExp([f+"?"+I+"+"+m+"(?="+[p,f,"$"].join("|")+")",K+"+"+A+"(?="+[p,f+g,"$"].join("|")+")",f+"?"+g+"+"+m,f+"+"+A,L,Q].join("|"),"g"),nu=RegExp("["+Z+a+j+O+C+"]"),fu=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,tu={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"ss"},cu=typeof c=="object"&&c&&c.Object===Object&&c,xu=typeof self=="object"&&self&&self.Object===Object&&self,au=cu||xu||Function("return this")();function iu(u,e,r,n){var o=-1,t=u?u.length:0;for(n&&t&&(r=u[++o]);++o<t;)r=e(r,u[o],o,u);return r}function su(u){return u.split("")}function du(u){return u.match(G)||[]}function bu(u){return function(e){return u==null?void 0:u[e]}}var lu=bu(tu);function W(u){return nu.test(u)}function pu(u){return fu.test(u)}function gu(u){return W(u)?mu(u):su(u)}function mu(u){return u.match(ru)||[]}function Au(u){return u.match(ou)||[]}var hu=Object.prototype,vu=hu.toString,h=au.Symbol,v=h?h.prototype:void 0,S=v?v.toString:void 0;function Su(u,e,r){var n=-1,o=u.length;e<0&&(e=-e>o?0:o+e),r=r>o?o:r,r<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var t=Array(o);++n<o;)t[n]=u[n+e];return t}function ju(u){if(typeof u=="string")return u;if(Cu(u))return S?S.call(u):"";var e=u+"";return e=="0"&&1/u==-w?"-0":e}function Ou(u,e,r){var n=u.length;return r=r===void 0?n:r,!e&&r>=n?u:Su(u,e,r)}function Ru(u){return function(e){e=i(e);var r=W(e)?gu(e):void 0,n=r?r[0]:e.charAt(0),o=r?Ou(r,1).join(""):e.slice(1);return n[u]()+o}}function Uu(u){return function(e){return iu(zu(Iu(e).replace(uu,"")),u,"")}}function yu(u){return!!u&&typeof u=="object"}function Cu(u){return typeof u=="symbol"||yu(u)&&vu.call(u)==F}function i(u){return u==null?"":ju(u)}var Eu=Uu(function(u,e,r){return e=e.toLowerCase(),u+(r?Lu(e):e)});function Lu(u){return Tu(i(u).toLowerCase())}function Iu(u){return u=i(u),u&&u.replace(P,lu).replace(eu,"")}var Tu=Ru("toUpperCase");function zu(u,e,r){return u=i(u),e=r?void 0:e,e===void 0?pu(u)?Au(u):du(u):u.match(e)||[]}var Zu=Eu;const Nu=k(Zu);export{Nu as c};
