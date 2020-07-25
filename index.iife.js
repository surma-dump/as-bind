'use strict';let idofCounter=0,idof=()=>idofCounter++;
(function(){function n(a,b){var c=T,d,e;for(e=arguments.length;2<e--;)F.push(arguments[e]);b&&null!=b.children&&(F.length||F.push(b.children),delete b.children);for(;F.length;)if((d=F.pop())&&void 0!==d.pop)for(e=d.length;e--;)F.push(d[e]);else{"boolean"===typeof d&&(d=null);if(e="function"!==typeof a)null==d?d="":"number"===typeof d?d=String(d):"string"!==typeof d&&(e=!1);e&&f?c[c.length-1]+=d:c===T?c=[d]:c.push(d);var f=e}f=new qa;f.nodeName=a;f.children=c;f.attributes=null==b?void 0:b;f.key=null==
b?void 0:b.key;void 0!==x.vnode&&x.vnode(f);return f}function A(a,b){for(var c in b)a[c]=b[c];return a}function G(a,b){a&&("function"==typeof a?a(b):a.current=b)}function U(a){!a._dirty&&(a._dirty=!0)&&1==V.push(a)&&(x.debounceRendering||ra)(sa)}function sa(){for(var a;a=V.pop();)a._dirty&&J(a)}function W(a,b){return a.normalizedNodeName===b||a.nodeName.toLowerCase()===b.toLowerCase()}function X(a){var b=A({},a.attributes);b.children=a.children;a=a.nodeName.defaultProps;if(void 0!==a)for(var c in a)void 0===
b[c]&&(b[c]=a[c]);return b}function P(a){var b=a.parentNode;b&&b.removeChild(a)}function Y(a,b,c,d,e){"className"===b&&(b="class");if("key"!==b)if("ref"===b)G(c,null),G(d,a);else if("class"!==b||e)if("style"===b){if(d&&"string"!==typeof d&&"string"!==typeof c||(a.style.cssText=d||""),d&&"object"===typeof d){if("string"!==typeof c)for(var f in c)f in d||(a.style[f]="");for(f in d)a.style[f]="number"===typeof d[f]&&!1===ta.test(f)?d[f]+"px":d[f]}}else if("dangerouslySetInnerHTML"===b)d&&(a.innerHTML=
d.__html||"");else if("o"==b[0]&&"n"==b[1])e=b!==(b=b.replace(/Capture$/,"")),b=b.toLowerCase().substring(2),d?c||a.addEventListener(b,Z,e):a.removeEventListener(b,Z,e),(a._listeners||(a._listeners={}))[b]=d;else if("list"!==b&&"type"!==b&&!e&&b in a){try{a[b]=null==d?"":d}catch(g){}null!=d&&!1!==d||"spellcheck"==b||a.removeAttribute(b)}else c=e&&b!==(b=b.replace(/^xlink:?/,"")),null==d||!1===d?c?a.removeAttributeNS("http://www.w3.org/1999/xlink",b.toLowerCase()):a.removeAttribute(b):"function"!==
typeof d&&(c?a.setAttributeNS("http://www.w3.org/1999/xlink",b.toLowerCase(),d):a.setAttribute(b,d));else a.className=d||""}function Z(a){return this._listeners[a.type](x.event&&x.event(a)||a)}function aa(){for(var a;a=ba.shift();)x.afterMount&&x.afterMount(a),a.componentDidMount&&a.componentDidMount()}function ca(a,b,c,d,e,f){Q++||(D=null!=e&&void 0!==e.ownerSVGElement,K=null!=a&&!("__preactattr_"in a));a=da(a,b,c,d,f);e&&a.parentNode!==e&&e.appendChild(a);--Q||(K=!1,f||aa());return a}function da(a,
b,c,d,e){var f=a,g=D;if(null==b||"boolean"===typeof b)b="";if("string"===typeof b||"number"===typeof b)return a&&void 0!==a.splitText&&a.parentNode&&(!a._component||e)?a.nodeValue!=b&&(a.nodeValue=b):(f=document.createTextNode(b),a&&(a.parentNode&&a.parentNode.replaceChild(f,a),E(a,!0))),f.__preactattr_=!0,f;e=b.nodeName;if("function"===typeof e){g=a;var h=b;f=b=g&&g._component;var l=g,k=b&&g._componentConstructor===h.nodeName,p=k;for(a=X(h);b&&!p&&(b=b._parentComponent);)p=b.constructor===h.nodeName;
b&&p&&(!d||b._component)?(L(b,a,3,c,d),g=b.base):(f&&!k&&(M(f),g=l=null),b=ea(h.nodeName,a,c),g&&!b.nextBase&&(b.nextBase=g,l=null),L(b,a,1,c,d),g=b.base,l&&g!==l&&(l._component=null,E(l,!1)));return g}D="svg"===e?!0:"foreignObject"===e?!1:D;e=String(e);if(!a||!W(a,e))if(f=e,e=D?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f),e.normalizedNodeName=f,f=e,a){for(;a.firstChild;)f.appendChild(a.firstChild);a.parentNode&&a.parentNode.replaceChild(f,a);E(a,!0)}var r=f.firstChild;
a=f.__preactattr_;e=b.children;if(null==a){a=f.__preactattr_={};for(var m=f.attributes,q=m.length;q--;)a[m[q].name]=m[q].value}if(!K&&e&&1===e.length&&"string"===typeof e[0]&&null!=r&&void 0!==r.splitText&&null==r.nextSibling)r.nodeValue!=e[0]&&(r.nodeValue=e[0]);else if(e&&e.length||null!=r){r=f;m=K||null!=a.dangerouslySetInnerHTML;q=r.childNodes;var C=[],B={},w=0,v=0,u=q.length,n=0,x=e?e.length:0;if(0!==u)for(p=0;p<u;p++){var y=q[p],t=y.__preactattr_;var z=x&&t?y._component?y._component.__key:t.key:
null;if(null!=z)w++,B[z]=y;else if(t||(void 0!==y.splitText?m?y.nodeValue.trim():1:m))C[n++]=y}if(0!==x)for(p=0;p<x;p++){u=e[p];k=null;z=u.key;if(null!=z)w&&void 0!==B[z]&&(k=B[z],B[z]=void 0,w--);else if(v<n)for(z=v;z<n;z++){if(y=void 0!==C[z]){y=l=C[z];t=u;var A=m;y="string"===typeof t||"number"===typeof t?void 0!==y.splitText:"string"===typeof t.nodeName?!y._componentConstructor&&W(y,t.nodeName):A||y._componentConstructor===t.nodeName}if(y){k=l;C[z]=void 0;z===n-1&&n--;z===v&&v++;break}}k=da(k,
u,c,d);u=q[p];k&&k!==r&&k!==u&&(null==u?r.appendChild(k):k===u.nextSibling?P(u):r.insertBefore(k,u))}if(w)for(p in B)void 0!==B[p]&&E(B[p],!1);for(;v<=n;)void 0!==(k=C[n--])&&E(k,!1)}c=f;d=b.attributes;b=a;for(h in b)d&&null!=d[h]||null==b[h]||Y(c,h,b[h],b[h]=void 0,D);for(h in d)"children"===h||"innerHTML"===h||h in b&&d[h]===("value"===h||"checked"===h?c[h]:b[h])||Y(c,h,b[h],b[h]=d[h],D);D=g;return f}function E(a,b){var c=a._component;c?M(c):(null!=a.__preactattr_&&G(a.__preactattr_.ref,null),!1!==
b&&null!=a.__preactattr_||P(a),fa(a))}function fa(a){for(a=a.lastChild;a;){var b=a.previousSibling;E(a,!0);a=b}}function ea(a,b,c){var d=H.length;if(a.prototype&&a.prototype.render){var e=new a(b,c);N.call(e,b,c)}else e=new N(b,c),e.constructor=a,e.render=ua;for(;d--;)if(H[d].constructor===a){e.nextBase=H[d].nextBase;H.splice(d,1);break}return e}function ua(a,b,c){return this.constructor(a,c)}function L(a,b,c,d,e){a._disable||(a._disable=!0,a.__ref=b.ref,a.__key=b.key,delete b.ref,delete b.key,"undefined"===
typeof a.constructor.getDerivedStateFromProps&&(!a.base||e?a.componentWillMount&&a.componentWillMount():a.componentWillReceiveProps&&a.componentWillReceiveProps(b,d)),d&&d!==a.context&&(a.prevContext||(a.prevContext=a.context),a.context=d),a.prevProps||(a.prevProps=a.props),a.props=b,a._disable=!1,0!==c&&(1!==c&&!1===x.syncComponentUpdates&&a.base?U(a):J(a,1,e)),G(a.__ref,a))}function J(a,b,c,d){if(!a._disable){var e=a.props,f=a.state,g=a.context,h=a.prevProps||e,l=a.prevState||f,k=a.prevContext||
g,p=a.base,r=a.nextBase,m=p||r,q=a._component,C=!1,B=k,w;a.constructor.getDerivedStateFromProps&&(f=A(A({},f),a.constructor.getDerivedStateFromProps(e,f)),a.state=f);p&&(a.props=h,a.state=l,a.context=k,2!==b&&a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(e,f,g)?C=!0:a.componentWillUpdate&&a.componentWillUpdate(e,f,g),a.props=e,a.state=f,a.context=g);a.prevProps=a.prevState=a.prevContext=a.nextBase=null;a._dirty=!1;if(!C){e=a.render(e,f,g);a.getChildContext&&(g=A(A({},g),a.getChildContext()));
p&&a.getSnapshotBeforeUpdate&&(B=a.getSnapshotBeforeUpdate(h,l));f=e&&e.nodeName;if("function"===typeof f){var v=X(e);if((w=q)&&w.constructor===f&&v.key==w.__key)L(w,v,1,g,!1);else{var u=w;a._component=w=ea(f,v,g);w.nextBase=w.nextBase||r;w._parentComponent=a;L(w,v,0,g,!1);J(w,1,c,!0)}v=w.base}else{r=m;if(u=q)r=a._component=null;if(m||1===b)r&&(r._component=null),v=ca(r,e,g,c||!p,m&&m.parentNode,!0)}m&&v!==m&&w!==q&&(g=m.parentNode)&&v!==g&&(g.replaceChild(v,m),u||(m._component=null,E(m,!1)));u&&
M(u);if((a.base=v)&&!d){for(u=m=a;u=u._parentComponent;)(m=u).base=v;v._component=m;v._componentConstructor=m.constructor}}!p||c?ba.push(a):C||(a.componentDidUpdate&&a.componentDidUpdate(h,l,B),x.afterUpdate&&x.afterUpdate(a));for(;a._renderCallbacks.length;)a._renderCallbacks.pop().call(a);Q||d||aa()}}function M(a){x.beforeUnmount&&x.beforeUnmount(a);var b=a.base;a._disable=!0;a.componentWillUnmount&&a.componentWillUnmount();a.base=null;var c=a._component;c?M(c):b&&(null!=b.__preactattr_&&G(b.__preactattr_.ref,
null),a.nextBase=b,P(b),H.push(a),fa(b));G(a.__ref,null)}function N(a,b){this._dirty=!0;this.context=b;this.props=a;this.state=this.state||{};this._renderCallbacks=[]}function ha(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable}));c.push.apply(c,d)}return c}function ia(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?ha(Object(c),!0).forEach(function(b){var d=
c[b];b in a?Object.defineProperty(a,b,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[b]=d}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):ha(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function ja(a,b){var c=new Uint32Array(a);a=new Uint16Array(a);c=c[b+-4>>>2]>>>1;b>>>=1;if(1024>=c)return String.fromCharCode.apply(String,a.subarray(b,b+c));let d="";do{var e=a[b+1024-1];e=55296<=
e&&56320>e?1023:1024;d+=String.fromCharCode.apply(String,a.subarray(b,b+=e));c-=e}while(1024<c);return d+String.fromCharCode.apply(String,a.subarray(b,b+c))}function R(a){function b(a,b){return a?ja(a.buffer,b):"<yet unknown>"}let c={},d=a.env=a.env||{};d.abort=d.abort||function(a,f,g,h){let e=c.memory||d.memory;throw Error(`abort: ${b(e,a)} at ${b(e,f)}:${g}:${h}`);};d.trace=d.trace||function(a,f,...g){console.log(`trace: ${b(c.memory||d.memory,a)}${f?" ":""}${g.slice(0,f).join(", ")}`)};d.seed=
d.seed||Date.now;a.Math=a.Math||Math;a.Date=a.Date||Date;return c}function S(a,b){function c(a){{var b=a;let d=new Uint32Array(l.buffer),c=d[m>>>2];if((b>>>=0)>=c)throw Error(`invalid id: ${b}`);b=d[(m+4>>>2)+2*b]}if(!(b&7))throw Error(`not an array: ${a}, flags=${b}`);return b}function d(a,b,d){let c=l.buffer;if(d)switch(a){case 2:return new Float32Array(c);case 3:return new Float64Array(c)}else switch(a){case 0:return new (b?Int8Array:Uint8Array)(c);case 1:return new (b?Int16Array:Uint16Array)(c);
case 2:return new (b?Int32Array:Uint32Array)(c);case 3:return new (b?BigInt64Array:BigUint64Array)(c)}throw Error(`unsupported align: ${a}`);}function e(a){let b=new Uint32Array(l.buffer),e=c(b[a+-8>>>2]),f=31-Math.clz32(e>>>6&31),q=e&4?a:b[a+4>>>2];a=e&2?b[a+12>>>2]:b[q+-4>>>2]>>>f;return d(f,e&2048,e&4096).subarray(q>>>=f,q+a)}function f(a,b,c){return new a(g(a,b,c))}function g(a,b,c){let d=l.buffer,e=new Uint32Array(d);c=e[c+4>>>2];return new a(d,c,e[c+-4>>>2]>>>b)}function h(b,c,d){a[`__get${c}`]=
f.bind(null,b,d);a[`__get${c}View`]=g.bind(null,b,d)}b=b.exports;let l=b.memory,k=b.table,p=b.__alloc,r=b.__retain,m=b.__rtti_base||-1;a.__allocString=function(a){let b=a.length,c=p(b<<1,1),d=new Uint16Array(l.buffer);for(var e=0,f=c>>>1;e<b;++e)d[f+e]=a.charCodeAt(e);return c};a.__getString=function(a){let b=l.buffer;if(1!==(new Uint32Array(b))[a+-8>>>2])throw Error(`not a string: ${a}`);return ja(b,a)};a.__allocArray=function(a,b){var e=c(a);let f=31-Math.clz32(e>>>6&31),h=b.length,g=p(h<<f,e&4?
a:0);if(e&4)a=g;else{a=p(e&2?16:12,a);var q=new Uint32Array(l.buffer);q[a+0>>>2]=r(g);q[a+4>>>2]=g;q[a+8>>>2]=h<<f;e&2&&(q[a+12>>>2]=h)}q=d(f,e&2048,e&4096);if(e&16384)for(e=0;e<h;++e)q[(g>>>f)+e]=r(b[e]);else q.set(b,g>>>f);return a};a.__getArrayView=e;a.__getArray=function(a){a=e(a);let b=a.length,c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c};a.__getArrayBuffer=function(a){let b=l.buffer,c=(new Uint32Array(b))[a+-4>>>2];return b.slice(a,a+c)};[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,
Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach(a=>{h(a,a.name,31-Math.clz32(a.BYTES_PER_ELEMENT))});va&&[BigUint64Array,BigInt64Array].forEach(a=>{h(a,a.name.slice(3),3)});a.__instanceof=function(a,b){var c=new Uint32Array(l.buffer);a=c[a+-8>>>2];if(a<=c[m>>>2]){do{if(a==b)return!0;{c=a;a=new Uint32Array(l.buffer);let b=a[m>>>2];if((c>>>=0)>=b)throw Error(`invalid id: ${c}`);a=a[(m+4>>>2)+2*c+1]}}while(a)}return!1};a.memory=a.memory||l;a.table=a.table||k;return wa(b,a)}function ka(a){return"undefined"!==
typeof Response&&a instanceof Response}async function la(a,b={}){if(ka(a=await a))return ma(a,b);a=a instanceof WebAssembly.Module?a:await WebAssembly.compile(a);var c=R(b);b=await WebAssembly.instantiate(a,b);c=S(c,b);return{module:a,instance:b,exports:c}}function xa(a,b={}){a=a instanceof WebAssembly.Module?a:new WebAssembly.Module(a);var c=R(b);b=new WebAssembly.Instance(a,b);c=S(c,b);return{module:a,instance:b,exports:c}}async function ma(a,b={}){if(!WebAssembly.instantiateStreaming)return la(ka(a=
await a)?a.arrayBuffer():a,b);var c=R(b);a=await WebAssembly.instantiateStreaming(a,b);c=S(c,a.instance);return ia(ia({},a),{},{exports:c})}function wa(a,b={}){b=Object.create(b);let c=a.__argumentsLength?b=>{a.__argumentsLength.value=b}:a.__setArgumentsLength||a.__setargc||(()=>{});for(let f in a){if(!Object.prototype.hasOwnProperty.call(a,f))continue;let g=a[f];var d=f.split(".");let h=b;for(;1<d.length;){var e=d.shift();Object.prototype.hasOwnProperty.call(h,e)||(h[e]={});h=h[e]}d=d[0];e=d.indexOf("#");
if(0<=e){let b=d.substring(0,e),k=h[b];if("undefined"===typeof k||!k.prototype){let a=function(...b){return a.wrap(a.prototype.constructor(0,...b))};a.prototype={valueOf(){return this[I]}};a.wrap=function(b){return Object.create(a.prototype,{[I]:{value:b,writable:!1}})};k&&Object.getOwnPropertyNames(k).forEach(b=>Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(k,b)));h[b]=a}d=d.substring(e+1);h=h[b].prototype;if(/^(get|set):/.test(d)){if(!Object.prototype.hasOwnProperty.call(h,d=d.substring(4))){let b=
a[f.replace("set:","get:")],c=a[f.replace("get:","set:")];Object.defineProperty(h,d,{get(){return b(this[I])},set(a){c(this[I],a)},enumerable:!0})}}else"constructor"===d?(h[d]=(...a)=>{c(a.length);return g(...a)}).original=g:(h[d]=function(...a){c(a.length);return g(this[I],...a)}).original=g}else/^(get|set):/.test(d)?Object.prototype.hasOwnProperty.call(h,d=d.substring(4))||Object.defineProperty(h,d,{get:a[f.replace("set:","get:")],set:a[f.replace("get:","set:")],enumerable:!0}):"function"===typeof g&&
g!==c?(h[d]=(...a)=>{c(a.length);return g(...a)}).original=g:h[d]=g}return b}async function ya(a,b){let c=a instanceof Promise;c&&(a=await a);return(c?await za(a,b):await la(a,b)).exports}function Aa(a,b){if("object"!==typeof a)throw Error("Did not pass a valid exports object of the WebAssembly Instance");if("function"!==typeof b)throw Error("Did not pass a valid exported function of the WebAssembly Instance");na.forEach(b=>{if(!a[b])throw Error('Required Exported AssemblyScript Runtime functions are not present. Runtime must be set to "full" or "stub"');
})}function Ba(a,b,c){function d(){let d=a.unboundExports;g===b&&(g=e(b,[...c]));let l=[];Array.prototype.slice.call(arguments).forEach((a,b)=>{let c=void 0;g.shouldCacheTypes&&g.cachedArgTypes[b]&&"ref"===g.cachedArgTypes[b].type?c=t[g.cachedArgTypes[b].key]:Object.keys(t).some(e=>t[e].isTypeFromReference(d,a)?(c=t[e],g.shouldCacheTypes&&(g.cachedArgTypes[b]={type:"ref",key:e}),!0):!1);c?l.push(c.getValueFromRef(d,a)):l.push(a)});return f.apply(null,l)}let e=(a,b)=>{a=a[b[0]];b.shift();return 0<
b.length?e(a,b):a},f=e(b,[...c]),g=b;d.shouldCacheTypes=!0;d.cachedArgTypes=[];return d}function Ca(a,b){function c(){var c=Array.prototype.slice.call(arguments);f===a.exports&&(f=a.exports[b]);let h=[],l=[];c.forEach((a,b)=>{if("number"===typeof a)h.push(a),f.shouldCacheTypes&&(f.cachedArgTypes[b]={type:"number"});else{var c=void 0;if(f.shouldCacheTypes&&f.cachedArgTypes[b]&&"ref"===f.cachedArgTypes[b].type)c=t[f.cachedArgTypes[b].key];else if(Object.keys(t).some(d=>t[d].isTypeFromArgument(a)?(c=
t[d],f.shouldCacheTypes&&(f.cachedArgTypes[b]={type:"ref",key:d}),!0):!1),!c)throw Error(`The argument, ${a}, is not a supported type by asbind`);h.push(c.getRef(d,a));l.push(b)}});let k=e.apply(null,h);l.forEach(a=>{d.__release(h[a])});c=void 0;if(void 0!==k){let a=void 0;f.shouldCacheTypes&&f.cachedReturnTypes[0]?"ref"===f.cachedReturnTypes[0].type&&(a=a=t[f.cachedReturnTypes[0].key]):Object.keys(t).some(b=>t[b].isTypeFromReference(d,k)?(a=t[b],f.shouldCacheTypes&&(f.cachedReturnTypes[0]={type:"ref",
key:b}),!0):!1);a?c=a.getValueFromRef(d,k):"number"===typeof k&&(c=k,f.shouldCacheTypes&&(f.cachedReturnTypes[0]={type:"number"}))}return c}let d=a.unboundExports,e=d[b];Aa(d,e);let f=a.exports;c.shouldCacheTypes=!0;c.cachedArgTypes=[];c.cachedReturnTypes=[];return c}var qa=function(){},x={},F=[],T=[],ra="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,ta=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,V=[],ba=[],Q=0,D=!1,K=!1,H=[];A(N.prototype,{setState:function(a,
b){this.prevState||(this.prevState=this.state);this.state=A(A({},this.state),"function"===typeof a?a(this.state,this.props):a);b&&this._renderCallbacks.push(b);U(this)},forceUpdate:function(a){a&&this._renderCallbacks.push(a);J(this,2)},render:function(){}});let va="undefined"!==typeof BigUint64Array,I=Symbol();var za=ma;let na=["__alloc","__allocString","__retain","__release"],t={STRING:{isTypeFromArgument:a=>"string"===typeof a,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_String_ID),getRef:(a,
b)=>a.__retain(a.__allocString(b)),getValueFromRef:(a,b)=>a.__getString(b)},INT8ARRAY:{isTypeFromArgument:a=>a instanceof Int8Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Int8Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Int8Array_ID,b)),getValueFromRef:(a,b)=>a.__getInt8Array(b).slice()},UINT8ARRAY:{isTypeFromArgument:a=>a instanceof Uint8Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Uint8Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Uint8Array_ID,
b)),getValueFromRef:(a,b)=>a.__getUint8Array(b).slice()},INT16ARRAY:{isTypeFromArgument:a=>a instanceof Int16Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Int16Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Int16Array_ID,b)),getValueFromRef:(a,b)=>a.__getInt16Array(b).slice()},UINT16ARRAY:{isTypeFromArgument:a=>a instanceof Uint16Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Uint16Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Uint16Array_ID,
b)),getValueFromRef:(a,b)=>a.__getUint16Array(b).slice()},INT32ARRAY:{isTypeFromArgument:a=>a instanceof Int32Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Int32Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Int32Array_ID,b)),getValueFromRef:(a,b)=>a.__getInt32Array(b).slice()},UINT32ARRAY:{isTypeFromArgument:a=>a instanceof Uint32Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Uint32Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Uint32Array_ID,
b)),getValueFromRef:(a,b)=>a.__getUint32Array(b).slice()},FLOAT32ARRAY:{isTypeFromArgument:a=>a instanceof Float32Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Float32Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Float32Array_ID,b)),getValueFromRef:(a,b)=>a.__getFloat32Array(b).slice()},FLOAT64ARRAY:{isTypeFromArgument:a=>a instanceof Float64Array,isTypeFromReference:(a,b)=>a.__instanceof(b,a.__asbind_Float64Array_ID),getRef:(a,b)=>a.__retain(a.__allocArray(a.__asbind_Float64Array_ID,
b)),getValueFromRef:(a,b)=>a.__getFloat64Array(b).slice()}},O=(a,b,c)=>{a&&Object.keys(a).forEach(d=>{"function"===typeof a[d]?c(a,b,d):"object"===typeof a[d]&&O(a[d],[...b,d],c)})};class oa{constructor(){this.unboundExports={};this.exports={};this.importObject={}}async _instantiate(a,b){this._instantiateBindImportFunctions(b);a=await ya(a,this.importObject);this._instantiateBindUnboundExports(a)}_instantiateSync(a,b){this._instantiateBindImportFunctions(b);a=xa(a,this.importObject).exports;this._instantiateBindUnboundExports(a)}_instantiateBindImportFunctions(a){this.importObject=
a;O(this.importObject,[],(a,c,d)=>{a[`__asbind_unbound_${d}`]=a[d];a[d]=Ba(this,this.importObject,[...c,d])})}_instantiateBindUnboundExports(a){this.unboundExports=a;this.exports={};Object.keys(this.unboundExports).forEach(a=>{var b;if(b="function"===typeof this.unboundExports[a])b=a.startsWith("__asbind")?!0:na.includes(a)?!0:!1,b=!b;this.exports[a]=b?Ca(this,a):this.unboundExports[a]})}enableExportFunctionTypeCaching(){Object.keys(this.exports).forEach(a=>{this.exports[a].shouldCacheTypes=!0})}disableExportFunctionTypeCaching(){Object.keys(this.exports).forEach(a=>
{this.exports[a].shouldCacheTypes=!1})}enableImportFunctionTypeCaching(){O(this.importObject,[],(a,b,c)=>{a[c].shouldCacheTypes=!0})}disableImportFunctionTypeCaching(){O(this.importObject,[],(a,b,c)=>{a[c].shouldCacheTypes=!1})}}let pa={version:"0.3.5",instantiate:async(a,b)=>{let c=new oa;await c._instantiate(a,b);return c},instantiateSync:(a,b)=>{let c=new oa;c._instantiateSync(a,b);return c}};(function(a,b){void 0===b&&(b={});b=b.insertAt;if(a&&"undefined"!==typeof document){var c=document.head||
document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css";"top"===b?c.firstChild?c.insertBefore(d,c.firstChild):c.appendChild(d):c.appendChild(d);d.styleSheet?d.styleSheet.cssText=a:d.appendChild(document.createTextNode(a))}})('/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\n/* Sakura.css v1.3.0\n * ================\n * Minimal css theme.\n * Project: https://github.com/oxalorg/sakura/\n */\n\n/* Body */\n\nhtml {\n  font-size: 62.5%;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif; }\n\nbody {\n  font-size: 1.8rem;\n  line-height: 1.618;\n  max-width: 38em;\n  margin: auto;\n  color: #4a4a4a;\n  background-color: #f9f9f9;\n  padding: 13px; }\n\n@media (max-width: 684px) {\n  body {\n    font-size: 1.53rem; } }\n\n@media (max-width: 382px) {\n  body {\n    font-size: 1.35rem; } }\n\nh1, h2, h3, h4, h5, h6 {\n  line-height: 1.1;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;\n  font-weight: 700;\n  margin-top: 3rem;\n  margin-bottom: 1.5rem;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -ms-word-break: break-all;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\nh1 {\n  font-size: 2.35em; }\n\nh2 {\n  font-size: 2.00em; }\n\nh3 {\n  font-size: 1.75em; }\n\nh4 {\n  font-size: 1.5em; }\n\nh5 {\n  font-size: 1.25em; }\n\nh6 {\n  font-size: 1em; }\n\np {\n  margin-top: 0px;\n  margin-bottom: 2.5rem; }\n\nsmall, sub, sup {\n  font-size: 75%; }\n\nhr {\n  border-color: #2c8898; }\n\na {\n  text-decoration: none;\n  color: #2c8898; }\n\na:hover {\n    color: #982c61;\n    border-bottom: 2px solid #4a4a4a; }\n\nul {\n  padding-left: 1.4em;\n  margin-top: 0px;\n  margin-bottom: 2.5rem; }\n\nli {\n  margin-bottom: 0.4em; }\n\nblockquote {\n  font-style: italic;\n  margin-left: 1.5em;\n  padding-left: 1em;\n  border-left: 3px solid #2c8898; }\n\nimg {\n  height: auto;\n  max-width: 100%;\n  margin-top: 0px;\n  margin-bottom: 2.5rem; }\n\n/* Pre and Code */\n\npre {\n  background-color: #f1f1f1;\n  display: block;\n  padding: 1em;\n  overflow-x: auto;\n  margin-top: 0px;\n  margin-bottom: 2.5rem; }\n\ncode {\n  font-size: 0.9em;\n  padding: 0 0.5em;\n  background-color: #f1f1f1;\n  white-space: pre-wrap; }\n\npre > code {\n  padding: 0;\n  background-color: transparent;\n  white-space: pre; }\n\n/* Tables */\n\ntable {\n  text-align: justify;\n  width: 100%;\n  border-collapse: collapse; }\n\ntd, th {\n  padding: 0.5em;\n  border-bottom: 1px solid #f1f1f1; }\n\n/* Buttons, forms and input */\n\ninput, textarea {\n  border: 1px solid #4a4a4a; }\n\ninput:focus, textarea:focus {\n    border: 1px solid #2c8898; }\n\ntextarea {\n  width: 100%; }\n\n.button, button, input[type="submit"], input[type="reset"], input[type="button"] {\n  display: inline-block;\n  padding: 5px 10px;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: #2c8898;\n  color: #f9f9f9;\n  border-radius: 1px;\n  border: 1px solid #2c8898;\n  cursor: pointer;\n  box-sizing: border-box; }\n\n.button[disabled], button[disabled], input[type="submit"][disabled], input[type="reset"][disabled], input[type="button"][disabled] {\n    cursor: default;\n    opacity: .5; }\n\n.button:focus, .button:hover, button:focus, button:hover, input[type="submit"]:focus, input[type="submit"]:hover, input[type="reset"]:focus, input[type="reset"]:hover, input[type="button"]:focus, input[type="button"]:hover {\n    background-color: #982c61;\n    border-color: #982c61;\n    color: #f9f9f9;\n    outline: 0; }\n\ntextarea, select, input[type] {\n  color: #4a4a4a;\n  padding: 6px 10px;\n  /* The 6px vertically centers text on FF, ignored by Webkit */\n  margin-bottom: 10px;\n  background-color: #f1f1f1;\n  border: 1px solid #f1f1f1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n\ntextarea:focus, select:focus, input[type]:focus {\n    border: 1px solid #2c8898;\n    outline: 0; }\n\ninput[type="checkbox"]:focus {\n  outline: 1px dotted #2c8898; }\n\nlabel, legend, fieldset {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\n\nhtml,\nbody {\n  padding: 0px;\n  margin: 0px;\n  height: 100vh;\n  max-width: none;\n}\n\ntextarea {\n  background-color: #fff;\n  color: #000;\n}\n\n#root,\n.app {\n  width: 100%;\n  height: 100%;\n}\n\n.app {\n  display: flex;\n  flex-direction: column;\n}\n\n.app > h1 {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.description {\n  width: 95%;\n  max-width: 950px;\n\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.link-row {\n  margin: 5px;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.editor-container {\n  flex-grow: 1;\n  overflow: hidden;\n}\n\n.editor {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.markdown {\n  min-width: 350px;\n  width: 45%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.markdown > h2 {\n  text-align: center;\n}\n\n.markdown textarea {\n  flex-grow: 1;\n}\n\n.result {\n  min-width: 350px;\n  width: 45%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.result > h2 {\n  text-align: center;\n}\n\n.result-html {\n  flex-grow: 1;\n  overflow: auto;\n\n  margin-bottom: 10px;\n}\n\ncode {\n  display: block;\n  white-space: pre-line;\n}\n\n.markdown textarea,\n.result .result-html {\n  padding: 5px;\n  border: 2px solid #000;\n}\n\n@media only screen and (max-width: 800px) {\n  .editor {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .editor-container {\n    overflow: initial;\n  }\n\n  .markdown,\n  .result {\n    min-width: 200px;\n    width: 90%;\n    height: 500px;\n\n    margin: 5px;\n  }\n}\n');
let Da=pa.instantiate(fetch("index.wasm"),{util:{consoleLog:a=>{console.log(a)}},env:{abort:()=>{console.error("AssemblyScript Import Object Aborted!")}}});class Ea extends N{constructor(){super();this.state={markdown:'# __as-bind__ ~~convert~~ **markdown** to     html\n\n      * Item 1\n      * Item 2\n      * Item 3\n\n      ===\n\n      ## And now we are back!\n\n      Here is a [link to the source code](https://github.com/torch2424/as-bind)\n\n      And an image of the author!\n\n      ![torch2424 avatar](https://avatars1.githubusercontent.com/u/1448289?s=460&v=4)\n\n      ---\n\n      ### More items\n\n      1. one\n      1. two\n      1. three\n\n      ===\n\n      #### Let\'s write some quotes and code and stuff\n\n      > WebAssembly is cool - Torch2424, 2019\n\n      `npm install as-bind`\n\n      ```\n        const someCode = "hello world!";\n        // Yup we writing some code in here\n      ```\n\n      # The End!\n',
html:""}}componentDidMount(){this.handleChange()}async handleChange(a){let b=this.state.markdown;a&&(b=a.target.value);a=(await Da).exports.convertMarkdownToHTML(b);console.log(`
Input Markdown:

${b}

------

as-bind response:

${a}
`);this.setState({markdown:b,html:a})}render(){return n("div",{class:"app"},n("h1",null,"as-bind Markdown Parser Demo"),n("p",{class:"description"},"as-bind is a library to handle passing high-level data structures between AssemblyScript and JavaScript. This demo takes the input from the markdown text area, and passes the string directly to and exported function of the as-bind instantiated AssemblyScript module, and then binds the returned string to the result div. The input and response are logged into the JavaScript console."),
n("p",{class:"description"},n("b",null,"as-bind version:")," ",pa.version),n("nav",{class:"link-row"},n("div",null,n("a",{href:"https://github.com/torch2424/as-bind"},"Source Code (Github)"))),n("div",{class:"editor-container"},n("div",{class:"editor"},n("div",{class:"markdown"},n("h2",null,"Markdown"),n("textarea",{value:this.state.markdown,onInput:a=>this.handleChange(a)})),n("div",{class:"result"},n("h2",null,"Result"),n("div",{class:"result-html",dangerouslySetInnerHTML:{__html:this.state.html}})))))}}
(function(a,b,c){return ca(c,a,{},!1,b,!1)})(n(Ea,null),document.querySelector("#root"))})()
