(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function da(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function pa(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ee(s)?kp(s):pa(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ee(t))return t;if(ce(t))return t}}const xp=/;(?![^(]*\))/g,Np=/:([^]+)/,Rp=/\/\*.*?\*\//gs;function kp(t){const e={};return t.replace(Rp,"").split(xp).forEach(n=>{if(n){const s=n.split(Np);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Mn(t){let e="";if(Ee(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const s=Mn(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Op="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mp=da(Op);function Lu(t){return!!t||t===""}const Lp=t=>Ee(t)?t:t==null?"":B(t)||ce(t)&&(t.toString===Vu||!K(t.toString))?JSON.stringify(t,Fu,2):String(t),Fu=(t,e)=>e&&e.__v_isRef?Fu(t,e.value):Fn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Pu(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!B(e)&&!Uu(e)?String(e):e,re={},Ln=[],at=()=>{},Fp=()=>!1,Pp=/^on[^a-z]/,ti=t=>Pp.test(t),ga=t=>t.startsWith("onUpdate:"),Pe=Object.assign,ma=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},$p=Object.prototype.hasOwnProperty,Q=(t,e)=>$p.call(t,e),B=Array.isArray,Fn=t=>ni(t)==="[object Map]",Pu=t=>ni(t)==="[object Set]",K=t=>typeof t=="function",Ee=t=>typeof t=="string",ya=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",$u=t=>ce(t)&&K(t.then)&&K(t.catch),Vu=Object.prototype.toString,ni=t=>Vu.call(t),Vp=t=>ni(t).slice(8,-1),Uu=t=>ni(t)==="[object Object]",va=t=>Ee(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,br=da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),si=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Up=/-(\w)/g,jn=si(t=>t.replace(Up,(e,n)=>n?n.toUpperCase():"")),Bp=/\B([A-Z])/g,es=si(t=>t.replace(Bp,"-$1").toLowerCase()),Bu=si(t=>t.charAt(0).toUpperCase()+t.slice(1)),zi=si(t=>t?`on${Bu(t)}`:""),_s=(t,e)=>!Object.is(t,e),Tr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Nr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},To=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zc;const jp=()=>zc||(zc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let st;class qp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=st;try{return st=this,e()}finally{st=n}}}on(){st=this}off(){st=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Hp(t,e=st){e&&e.active&&e.effects.push(t)}function Kp(){return st}const wa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ju=t=>(t.w&jt)>0,qu=t=>(t.n&jt)>0,zp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=jt},Gp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ju(r)&&!qu(r)?r.delete(t):e[n++]=r,r.w&=~jt,r.n&=~jt}e.length=n}},Io=new WeakMap;let fs=0,jt=1;const _o=30;let it;const dn=Symbol(""),Co=Symbol("");class Ea{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hp(this,s)}run(){if(!this.active)return this.fn();let e=it,n=Ft;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=it,it=this,Ft=!0,jt=1<<++fs,fs<=_o?zp(this):Gc(this),this.fn()}finally{fs<=_o&&Gp(this),jt=1<<--fs,it=this.parent,Ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){it===this?this.deferStop=!0:this.active&&(Gc(this),this.onStop&&this.onStop(),this.active=!1)}}function Gc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ft=!0;const Hu=[];function ts(){Hu.push(Ft),Ft=!1}function ns(){const t=Hu.pop();Ft=t===void 0?!0:t}function ze(t,e,n){if(Ft&&it){let s=Io.get(t);s||Io.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=wa()),Ku(r)}}function Ku(t,e){let n=!1;fs<=_o?qu(t)||(t.n|=jt,n=!ju(t)):n=!t.has(it),n&&(t.add(it),it.deps.push(t))}function St(t,e,n,s,r,i){const o=Io.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?va(n)&&a.push(o.get("length")):(a.push(o.get(dn)),Fn(t)&&a.push(o.get(Co)));break;case"delete":B(t)||(a.push(o.get(dn)),Fn(t)&&a.push(o.get(Co)));break;case"set":Fn(t)&&a.push(o.get(dn));break}if(a.length===1)a[0]&&Ao(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ao(wa(c))}}function Ao(t,e){const n=B(t)?t:[...t];for(const s of n)s.computed&&Wc(s);for(const s of n)s.computed||Wc(s)}function Wc(t,e){(t!==it||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Wp=da("__proto__,__v_isRef,__isVue"),zu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ya)),Qp=ba(),Yp=ba(!1,!0),Xp=ba(!0),Qc=Jp();function Jp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Y(this);for(let i=0,o=this.length;i<o;i++)ze(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ts();const s=Y(this)[e].apply(this,n);return ns(),s}}),t}function Zp(t){const e=Y(this);return ze(e,"has",t),e.hasOwnProperty(t)}function ba(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?gg:Xu:e?Yu:Qu).get(s))return s;const o=B(s);if(!t){if(o&&Q(Qc,r))return Reflect.get(Qc,r,i);if(r==="hasOwnProperty")return Zp}const a=Reflect.get(s,r,i);return(ya(r)?zu.has(r):Wp(r))||(t||ze(s,"get",r),e)?a:Me(a)?o&&va(r)?a:a.value:ce(a)?t?Ju(a):_a(a):a}}const eg=Gu(),tg=Gu(!0);function Gu(t=!1){return function(n,s,r,i){let o=n[s];if(qn(o)&&Me(o)&&!Me(r))return!1;if(!t&&(!Rr(r)&&!qn(r)&&(o=Y(o),r=Y(r)),!B(n)&&Me(o)&&!Me(r)))return o.value=r,!0;const a=B(n)&&va(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,r,i);return n===Y(i)&&(a?_s(r,o)&&St(n,"set",s,r):St(n,"add",s,r)),c}}function ng(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&St(t,"delete",e,void 0),s}function sg(t,e){const n=Reflect.has(t,e);return(!ya(e)||!zu.has(e))&&ze(t,"has",e),n}function rg(t){return ze(t,"iterate",B(t)?"length":dn),Reflect.ownKeys(t)}const Wu={get:Qp,set:eg,deleteProperty:ng,has:sg,ownKeys:rg},ig={get:Xp,set(t,e){return!0},deleteProperty(t,e){return!0}},og=Pe({},Wu,{get:Yp,set:tg}),Ta=t=>t,ri=t=>Reflect.getPrototypeOf(t);function ar(t,e,n=!1,s=!1){t=t.__v_raw;const r=Y(t),i=Y(e);n||(e!==i&&ze(r,"get",e),ze(r,"get",i));const{has:o}=ri(r),a=s?Ta:n?Aa:Cs;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function cr(t,e=!1){const n=this.__v_raw,s=Y(n),r=Y(t);return e||(t!==r&&ze(s,"has",t),ze(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function lr(t,e=!1){return t=t.__v_raw,!e&&ze(Y(t),"iterate",dn),Reflect.get(t,"size",t)}function Yc(t){t=Y(t);const e=Y(this);return ri(e).has.call(e,t)||(e.add(t),St(e,"add",t,t)),this}function Xc(t,e){e=Y(e);const n=Y(this),{has:s,get:r}=ri(n);let i=s.call(n,t);i||(t=Y(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?_s(e,o)&&St(n,"set",t,e):St(n,"add",t,e),this}function Jc(t){const e=Y(this),{has:n,get:s}=ri(e);let r=n.call(e,t);r||(t=Y(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&St(e,"delete",t,void 0),i}function Zc(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&St(t,"clear",void 0,void 0),n}function ur(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Y(o),c=e?Ta:t?Aa:Cs;return!t&&ze(a,"iterate",dn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function hr(t,e,n){return function(...s){const r=this.__v_raw,i=Y(r),o=Fn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Ta:e?Aa:Cs;return!e&&ze(i,"iterate",c?Co:dn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Mt(t){return function(...e){return t==="delete"?!1:this}}function ag(){const t={get(i){return ar(this,i)},get size(){return lr(this)},has:cr,add:Yc,set:Xc,delete:Jc,clear:Zc,forEach:ur(!1,!1)},e={get(i){return ar(this,i,!1,!0)},get size(){return lr(this)},has:cr,add:Yc,set:Xc,delete:Jc,clear:Zc,forEach:ur(!1,!0)},n={get(i){return ar(this,i,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:Mt("add"),set:Mt("set"),delete:Mt("delete"),clear:Mt("clear"),forEach:ur(!0,!1)},s={get(i){return ar(this,i,!0,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:Mt("add"),set:Mt("set"),delete:Mt("delete"),clear:Mt("clear"),forEach:ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=hr(i,!1,!1),n[i]=hr(i,!0,!1),e[i]=hr(i,!1,!0),s[i]=hr(i,!0,!0)}),[t,n,e,s]}const[cg,lg,ug,hg]=ag();function Ia(t,e){const n=e?t?hg:ug:t?lg:cg;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const fg={get:Ia(!1,!1)},dg={get:Ia(!1,!0)},pg={get:Ia(!0,!1)},Qu=new WeakMap,Yu=new WeakMap,Xu=new WeakMap,gg=new WeakMap;function mg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yg(t){return t.__v_skip||!Object.isExtensible(t)?0:mg(Vp(t))}function _a(t){return qn(t)?t:Ca(t,!1,Wu,fg,Qu)}function vg(t){return Ca(t,!1,og,dg,Yu)}function Ju(t){return Ca(t,!0,ig,pg,Xu)}function Ca(t,e,n,s,r){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=yg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Pn(t){return qn(t)?Pn(t.__v_raw):!!(t&&t.__v_isReactive)}function qn(t){return!!(t&&t.__v_isReadonly)}function Rr(t){return!!(t&&t.__v_isShallow)}function Zu(t){return Pn(t)||qn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function eh(t){return Nr(t,"__v_skip",!0),t}const Cs=t=>ce(t)?_a(t):t,Aa=t=>ce(t)?Ju(t):t;function th(t){Ft&&it&&(t=Y(t),Ku(t.dep||(t.dep=wa())))}function nh(t,e){t=Y(t);const n=t.dep;n&&Ao(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function el(t){return wg(t,!1)}function wg(t,e){return Me(t)?t:new Eg(t,e)}class Eg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Cs(e)}get value(){return th(this),this._value}set value(e){const n=this.__v_isShallow||Rr(e)||qn(e);e=n?e:Y(e),_s(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Cs(e),nh(this))}}function bg(t){return Me(t)?t.value:t}const Tg={get:(t,e,n)=>bg(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function sh(t){return Pn(t)?t:new Proxy(t,Tg)}var rh;class Ig{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[rh]=!1,this._dirty=!0,this.effect=new Ea(e,()=>{this._dirty||(this._dirty=!0,nh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Y(this);return th(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}rh="__v_isReadonly";function _g(t,e,n=!1){let s,r;const i=K(t);return i?(s=t,r=at):(s=t.get,r=t.set),new Ig(s,r,i||!r,n)}function Pt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ii(i,e,n)}return r}function et(t,e,n,s){if(K(t)){const i=Pt(t,e,n,s);return i&&$u(i)&&i.catch(o=>{ii(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(et(t[i],e,n,s));return r}function ii(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Pt(c,null,10,[t,o,a]);return}}Cg(t,n,r,s)}function Cg(t,e,n,s=!0){console.error(t)}let As=!1,So=!1;const ke=[];let mt=0;const $n=[];let _t=null,rn=0;const ih=Promise.resolve();let Sa=null;function Ag(t){const e=Sa||ih;return t?e.then(this?t.bind(this):t):e}function Sg(t){let e=mt+1,n=ke.length;for(;e<n;){const s=e+n>>>1;Ss(ke[s])<t?e=s+1:n=s}return e}function Da(t){(!ke.length||!ke.includes(t,As&&t.allowRecurse?mt+1:mt))&&(t.id==null?ke.push(t):ke.splice(Sg(t.id),0,t),oh())}function oh(){!As&&!So&&(So=!0,Sa=ih.then(ch))}function Dg(t){const e=ke.indexOf(t);e>mt&&ke.splice(e,1)}function xg(t){B(t)?$n.push(...t):(!_t||!_t.includes(t,t.allowRecurse?rn+1:rn))&&$n.push(t),oh()}function tl(t,e=As?mt+1:0){for(;e<ke.length;e++){const n=ke[e];n&&n.pre&&(ke.splice(e,1),e--,n())}}function ah(t){if($n.length){const e=[...new Set($n)];if($n.length=0,_t){_t.push(...e);return}for(_t=e,_t.sort((n,s)=>Ss(n)-Ss(s)),rn=0;rn<_t.length;rn++)_t[rn]();_t=null,rn=0}}const Ss=t=>t.id==null?1/0:t.id,Ng=(t,e)=>{const n=Ss(t)-Ss(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ch(t){So=!1,As=!0,ke.sort(Ng);const e=at;try{for(mt=0;mt<ke.length;mt++){const n=ke[mt];n&&n.active!==!1&&Pt(n,null,14)}}finally{mt=0,ke.length=0,ah(),As=!1,Sa=null,(ke.length||$n.length)&&ch()}}function Rg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||re;p&&(r=n.map(g=>Ee(g)?g.trim():g)),f&&(r=n.map(To))}let a,c=s[a=zi(e)]||s[a=zi(jn(e))];!c&&i&&(c=s[a=zi(es(e))]),c&&et(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,et(l,t,6,r)}}function lh(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!K(t)){const c=l=>{const u=lh(l,e,!0);u&&(a=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ce(t)&&s.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):Pe(o,i),ce(t)&&s.set(t,o),o)}function oi(t,e){return!t||!ti(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,es(e))||Q(t,e))}let Ze=null,uh=null;function kr(t){const e=Ze;return Ze=t,uh=t&&t.type.__scopeId||null,e}function kg(t,e=Ze,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ul(-1);const i=kr(e);let o;try{o=t(...r)}finally{kr(i),s._d&&ul(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Gi(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:A,inheritAttrs:b}=t;let k,j;const te=kr(t);try{if(n.shapeFlag&4){const Z=r||s;k=gt(u.call(Z,Z,f,i,g,p,A)),j=c}else{const Z=e;k=gt(Z.length>1?Z(i,{attrs:c,slots:a,emit:l}):Z(i,null)),j=e.props?c:Og(c)}}catch(Z){vs.length=0,ii(Z,t,1),k=pn(At)}let F=k;if(j&&b!==!1){const Z=Object.keys(j),{shapeFlag:le}=F;Z.length&&le&7&&(o&&Z.some(ga)&&(j=Mg(j,o)),F=qt(F,j))}return n.dirs&&(F=qt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),k=F,kr(te),k}const Og=t=>{let e;for(const n in t)(n==="class"||n==="style"||ti(n))&&((e||(e={}))[n]=t[n]);return e},Mg=(t,e)=>{const n={};for(const s in t)(!ga(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Lg(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?nl(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!oi(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?nl(s,o,l):!0:!!o;return!1}function nl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!oi(n,i))return!0}return!1}function Fg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Pg=t=>t.__isSuspense;function $g(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):xg(t)}function Vg(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function Ir(t,e,n=!1){const s=me||Ze;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(s.proxy):e}}const fr={};function Wi(t,e,n){return hh(t,e,n)}function hh(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=re){const a=Kp()===(me==null?void 0:me.scope)?me:null;let c,l=!1,u=!1;if(Me(t)?(c=()=>t.value,l=Rr(t)):Pn(t)?(c=()=>t,s=!0):B(t)?(u=!0,l=t.some(F=>Pn(F)||Rr(F)),c=()=>t.map(F=>{if(Me(F))return F.value;if(Pn(F))return cn(F);if(K(F))return Pt(F,a,2)})):K(t)?e?c=()=>Pt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),et(t,a,3,[p])}:c=at,e&&s){const F=c;c=()=>cn(F())}let f,p=F=>{f=j.onStop=()=>{Pt(F,a,4)}},g;if(xs)if(p=at,e?n&&et(e,a,3,[c(),u?[]:void 0,p]):c(),r==="sync"){const F=$m();g=F.__watcherHandles||(F.__watcherHandles=[])}else return at;let A=u?new Array(t.length).fill(fr):fr;const b=()=>{if(j.active)if(e){const F=j.run();(s||l||(u?F.some((Z,le)=>_s(Z,A[le])):_s(F,A)))&&(f&&f(),et(e,a,3,[F,A===fr?void 0:u&&A[0]===fr?[]:A,p]),A=F)}else j.run()};b.allowRecurse=!!e;let k;r==="sync"?k=b:r==="post"?k=()=>je(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),k=()=>Da(b));const j=new Ea(c,k);e?n?b():A=j.run():r==="post"?je(j.run.bind(j),a&&a.suspense):j.run();const te=()=>{j.stop(),a&&a.scope&&ma(a.scope.effects,j)};return g&&g.push(te),te}function Ug(t,e,n){const s=this.proxy,r=Ee(t)?t.includes(".")?fh(s,t):()=>s[t]:t.bind(s,s);let i;K(e)?i=e:(i=e.handler,n=e);const o=me;Hn(this);const a=hh(r,i.bind(s),n);return o?Hn(o):gn(),a}function fh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function cn(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))cn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)cn(t[n],e);else if(Pu(t)||Fn(t))t.forEach(n=>{cn(n,e)});else if(Uu(t))for(const n in t)cn(t[n],e);return t}function Bg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xa(()=>{t.isMounted=!0}),mh(()=>{t.isUnmounting=!0}),t}const Je=[Function,Array],jg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Je,onEnter:Je,onAfterEnter:Je,onEnterCancelled:Je,onBeforeLeave:Je,onLeave:Je,onAfterLeave:Je,onLeaveCancelled:Je,onBeforeAppear:Je,onAppear:Je,onAfterAppear:Je,onAppearCancelled:Je},setup(t,{slots:e}){const n=Nm(),s=Bg();let r;return()=>{const i=e.default&&ph(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==At){o=b;break}}const a=Y(t),{mode:c}=a;if(s.isLeaving)return Qi(o);const l=sl(o);if(!l)return Qi(o);const u=Do(l,a,s,n);xo(l,u);const f=n.subTree,p=f&&sl(f);let g=!1;const{getTransitionKey:A}=l.type;if(A){const b=A();r===void 0?r=b:b!==r&&(r=b,g=!0)}if(p&&p.type!==At&&(!on(l,p)||g)){const b=Do(p,a,s,n);if(xo(p,b),c==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Qi(o);c==="in-out"&&l.type!==At&&(b.delayLeave=(k,j,te)=>{const F=dh(s,p);F[String(p.key)]=p,k._leaveCb=()=>{j(),k._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=te})}return o}}},qg=jg;function dh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Do(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:A,onBeforeAppear:b,onAppear:k,onAfterAppear:j,onAppearCancelled:te}=e,F=String(t.key),Z=dh(n,t),le=(H,Te)=>{H&&et(H,s,9,Te)},bt=(H,Te)=>{const ue=Te[1];le(H,Te),B(H)?H.every(Ge=>Ge.length<=1)&&ue():H.length<=1&&ue()},ut={mode:i,persisted:o,beforeEnter(H){let Te=a;if(!n.isMounted)if(r)Te=b||a;else return;H._leaveCb&&H._leaveCb(!0);const ue=Z[F];ue&&on(t,ue)&&ue.el._leaveCb&&ue.el._leaveCb(),le(Te,[H])},enter(H){let Te=c,ue=l,Ge=u;if(!n.isMounted)if(r)Te=k||c,ue=j||l,Ge=te||u;else return;let ht=!1;const Tt=H._enterCb=ls=>{ht||(ht=!0,ls?le(Ge,[H]):le(ue,[H]),ut.delayedLeave&&ut.delayedLeave(),H._enterCb=void 0)};Te?bt(Te,[H,Tt]):Tt()},leave(H,Te){const ue=String(t.key);if(H._enterCb&&H._enterCb(!0),n.isUnmounting)return Te();le(f,[H]);let Ge=!1;const ht=H._leaveCb=Tt=>{Ge||(Ge=!0,Te(),Tt?le(A,[H]):le(g,[H]),H._leaveCb=void 0,Z[ue]===t&&delete Z[ue])};Z[ue]=t,p?bt(p,[H,ht]):ht()},clone(H){return Do(H,e,n,s)}};return ut}function Qi(t){if(ai(t))return t=qt(t),t.children=null,t}function sl(t){return ai(t)?t.children?t.children[0]:void 0:t}function xo(t,e){t.shapeFlag&6&&t.component?xo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ph(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===rt?(o.patchFlag&128&&r++,s=s.concat(ph(o.children,e,a))):(e||o.type!==At)&&s.push(a!=null?qt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const _r=t=>!!t.type.__asyncLoader,ai=t=>t.type.__isKeepAlive;function Hg(t,e){gh(t,"a",e)}function Kg(t,e){gh(t,"da",e)}function gh(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ci(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ai(r.parent.vnode)&&zg(s,e,n,r),r=r.parent}}function zg(t,e,n,s){const r=ci(e,t,s,!0);yh(()=>{ma(s[e],r)},n)}function ci(t,e,n=me,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ts(),Hn(n);const a=et(e,n,t,o);return gn(),ns(),a});return s?r.unshift(i):r.push(i),i}}const Ot=t=>(e,n=me)=>(!xs||t==="sp")&&ci(t,(...s)=>e(...s),n),Gg=Ot("bm"),xa=Ot("m"),Wg=Ot("bu"),Qg=Ot("u"),mh=Ot("bum"),yh=Ot("um"),Yg=Ot("sp"),Xg=Ot("rtg"),Jg=Ot("rtc");function Zg(t,e=me){ci("ec",t,e)}function em(t,e){const n=Ze;if(n===null)return t;const s=hi(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=re]=e[i];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&cn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function en(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ts(),et(c,n,8,[t.el,a,t,e]),ns())}}const tm=Symbol();function nm(t,e,n,s){let r;const i=n&&n[s];if(B(t)||Ee(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const No=t=>t?Sh(t)?hi(t)||t.proxy:No(t.parent):null,ys=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>No(t.parent),$root:t=>No(t.root),$emit:t=>t.emit,$options:t=>Na(t),$forceUpdate:t=>t.f||(t.f=()=>Da(t.update)),$nextTick:t=>t.n||(t.n=Ag.bind(t.proxy)),$watch:t=>Ug.bind(t)}),Yi=(t,e)=>t!==re&&!t.__isScriptSetup&&Q(t,e),sm={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Yi(s,e))return o[e]=1,s[e];if(r!==re&&Q(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,i[e];if(n!==re&&Q(n,e))return o[e]=4,n[e];Ro&&(o[e]=0)}}const u=ys[e];let f,p;if(u)return e==="$attrs"&&ze(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==re&&Q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Yi(r,e)?(r[e]=n,!0):s!==re&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==re&&Q(t,o)||Yi(e,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q(ys,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ro=!0;function rm(t){const e=Na(t),n=t.proxy,s=t.ctx;Ro=!1,e.beforeCreate&&rl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:A,activated:b,deactivated:k,beforeDestroy:j,beforeUnmount:te,destroyed:F,unmounted:Z,render:le,renderTracked:bt,renderTriggered:ut,errorCaptured:H,serverPrefetch:Te,expose:ue,inheritAttrs:Ge,components:ht,directives:Tt,filters:ls}=e;if(l&&im(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const he in o){const ne=o[he];K(ne)&&(s[he]=ne.bind(n))}if(r){const he=r.call(n,n);ce(he)&&(t.data=_a(he))}if(Ro=!0,i)for(const he in i){const ne=i[he],Jt=K(ne)?ne.bind(n,n):K(ne.get)?ne.get.bind(n,n):at,ir=!K(ne)&&K(ne.set)?ne.set.bind(n):at,Zt=Fm({get:Jt,set:ir});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:ft=>Zt.value=ft})}if(a)for(const he in a)vh(a[he],s,n,he);if(c){const he=K(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ne=>{Vg(ne,he[ne])})}u&&rl(u,t,"c");function Ve(he,ne){B(ne)?ne.forEach(Jt=>he(Jt.bind(n))):ne&&he(ne.bind(n))}if(Ve(Gg,f),Ve(xa,p),Ve(Wg,g),Ve(Qg,A),Ve(Hg,b),Ve(Kg,k),Ve(Zg,H),Ve(Jg,bt),Ve(Xg,ut),Ve(mh,te),Ve(yh,Z),Ve(Yg,Te),B(ue))if(ue.length){const he=t.exposed||(t.exposed={});ue.forEach(ne=>{Object.defineProperty(he,ne,{get:()=>n[ne],set:Jt=>n[ne]=Jt})})}else t.exposed||(t.exposed={});le&&t.render===at&&(t.render=le),Ge!=null&&(t.inheritAttrs=Ge),ht&&(t.components=ht),Tt&&(t.directives=Tt)}function im(t,e,n=at,s=!1){B(t)&&(t=ko(t));for(const r in t){const i=t[r];let o;ce(i)?"default"in i?o=Ir(i.from||r,i.default,!0):o=Ir(i.from||r):o=Ir(i),Me(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function rl(t,e,n){et(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function vh(t,e,n,s){const r=s.includes(".")?fh(n,s):()=>n[s];if(Ee(t)){const i=e[t];K(i)&&Wi(r,i)}else if(K(t))Wi(r,t.bind(n));else if(ce(t))if(B(t))t.forEach(i=>vh(i,e,n,s));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&Wi(r,i,t)}}function Na(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Or(c,l,o,!0)),Or(c,e,o)),ce(e)&&i.set(e,c),c}function Or(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Or(t,i,n,!0),r&&r.forEach(o=>Or(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=om[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const om={data:il,props:nn,emits:nn,methods:nn,computed:nn,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:nn,directives:nn,watch:cm,provide:il,inject:am};function il(t,e){return e?t?function(){return Pe(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function am(t,e){return nn(ko(t),ko(e))}function ko(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ue(t,e){return t?[...new Set([].concat(t,e))]:e}function nn(t,e){return t?Pe(Pe(Object.create(null),t),e):e}function cm(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=Ue(t[s],e[s]);return n}function lm(t,e,n,s=!1){const r={},i={};Nr(i,ui,1),t.propsDefaults=Object.create(null),wh(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:vg(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function um(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Y(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(oi(t.emitsOptions,p))continue;const g=e[p];if(c)if(Q(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const A=jn(p);r[A]=Oo(c,a,A,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{wh(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!Q(e,f)&&((u=es(f))===f||!Q(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Oo(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Q(e,f))&&(delete i[f],l=!0)}l&&St(t,"set","$attrs")}function wh(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(br(c))continue;const l=e[c];let u;r&&Q(r,u=jn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:oi(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Y(n),l=a||re;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Oo(r,c,f,l[f],t,!Q(l,f))}}return o}function Oo(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&K(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Hn(r),s=l[n]=c.call(null,e),gn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===es(n))&&(s=!0))}return s}function Eh(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!K(t)){const u=f=>{c=!0;const[p,g]=Eh(f,e,!0);Pe(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ce(t)&&s.set(t,Ln),Ln;if(B(i))for(let u=0;u<i.length;u++){const f=jn(i[u]);ol(f)&&(o[f]=re)}else if(i)for(const u in i){const f=jn(u);if(ol(f)){const p=i[u],g=o[f]=B(p)||K(p)?{type:p}:Object.assign({},p);if(g){const A=ll(Boolean,g.type),b=ll(String,g.type);g[0]=A>-1,g[1]=b<0||A<b,(A>-1||Q(g,"default"))&&a.push(f)}}}const l=[o,a];return ce(t)&&s.set(t,l),l}function ol(t){return t[0]!=="$"}function al(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function cl(t,e){return al(t)===al(e)}function ll(t,e){return B(e)?e.findIndex(n=>cl(n,t)):K(e)&&cl(e,t)?0:-1}const bh=t=>t[0]==="_"||t==="$stable",Ra=t=>B(t)?t.map(gt):[gt(t)],hm=(t,e,n)=>{if(e._n)return e;const s=kg((...r)=>Ra(e(...r)),n);return s._c=!1,s},Th=(t,e,n)=>{const s=t._ctx;for(const r in t){if(bh(r))continue;const i=t[r];if(K(i))e[r]=hm(r,i,s);else if(i!=null){const o=Ra(i);e[r]=()=>o}}},Ih=(t,e)=>{const n=Ra(e);t.slots.default=()=>n},fm=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Nr(e,"_",n)):Th(e,t.slots={})}else t.slots={},e&&Ih(t,e);Nr(t.slots,ui,1)},dm=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Pe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Th(e,r)),o=e}else e&&(Ih(t,e),o={default:1});if(i)for(const a in r)!bh(a)&&!(a in o)&&delete r[a]};function _h(){return{app:null,config:{isNativeTag:Fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pm=0;function gm(t,e){return function(s,r=null){K(s)||(s=Object.assign({},s)),r!=null&&!ce(r)&&(r=null);const i=_h(),o=new Set;let a=!1;const c=i.app={_uid:pm++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Vm,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(c,...u)):K(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=pn(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,hi(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Mo(t,e,n,s,r=!1){if(B(t)){t.forEach((p,g)=>Mo(p,e&&(B(e)?e[g]:e),n,s,r));return}if(_r(s)&&!r)return;const i=s.shapeFlag&4?hi(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===re?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Ee(l)?(u[l]=null,Q(f,l)&&(f[l]=null)):Me(l)&&(l.value=null)),K(c))Pt(c,a,12,[o,u]);else{const p=Ee(c),g=Me(c);if(p||g){const A=()=>{if(t.f){const b=p?Q(f,c)?f[c]:u[c]:c.value;r?B(b)&&ma(b,i):B(b)?b.includes(i)||b.push(i):p?(u[c]=[i],Q(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,Q(f,c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(A.id=-1,je(A,n)):A()}}}const je=$g;function mm(t){return ym(t)}function ym(t,e){const n=jp();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=at,insertStaticContent:A}=t,b=(h,d,m,w=null,v=null,_=null,S=!1,I=null,C=!!d.dynamicChildren)=>{if(h===d)return;h&&!on(h,d)&&(w=or(h),ft(h,v,_,!0),h=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:E,ref:M,shapeFlag:x}=d;switch(E){case li:k(h,d,m,w);break;case At:j(h,d,m,w);break;case Xi:h==null&&te(d,m,w,S);break;case rt:ht(h,d,m,w,v,_,S,I,C);break;default:x&1?le(h,d,m,w,v,_,S,I,C):x&6?Tt(h,d,m,w,v,_,S,I,C):(x&64||x&128)&&E.process(h,d,m,w,v,_,S,I,C,Dn)}M!=null&&v&&Mo(M,h&&h.ref,_,d||h,!d)},k=(h,d,m,w)=>{if(h==null)s(d.el=a(d.children),m,w);else{const v=d.el=h.el;d.children!==h.children&&l(v,d.children)}},j=(h,d,m,w)=>{h==null?s(d.el=c(d.children||""),m,w):d.el=h.el},te=(h,d,m,w)=>{[h.el,h.anchor]=A(h.children,d,m,w,h.el,h.anchor)},F=({el:h,anchor:d},m,w)=>{let v;for(;h&&h!==d;)v=p(h),s(h,m,w),h=v;s(d,m,w)},Z=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),r(h),h=m;r(d)},le=(h,d,m,w,v,_,S,I,C)=>{S=S||d.type==="svg",h==null?bt(d,m,w,v,_,S,I,C):Te(h,d,v,_,S,I,C)},bt=(h,d,m,w,v,_,S,I)=>{let C,E;const{type:M,props:x,shapeFlag:L,transition:V,dirs:z}=h;if(C=h.el=o(h.type,_,x&&x.is,x),L&8?u(C,h.children):L&16&&H(h.children,C,null,w,v,_&&M!=="foreignObject",S,I),z&&en(h,null,w,"created"),ut(C,h,h.scopeId,S,w),x){for(const ee in x)ee!=="value"&&!br(ee)&&i(C,ee,null,x[ee],_,h.children,w,v,It);"value"in x&&i(C,"value",null,x.value),(E=x.onVnodeBeforeMount)&&pt(E,w,h)}z&&en(h,null,w,"beforeMount");const se=(!v||v&&!v.pendingBranch)&&V&&!V.persisted;se&&V.beforeEnter(C),s(C,d,m),((E=x&&x.onVnodeMounted)||se||z)&&je(()=>{E&&pt(E,w,h),se&&V.enter(C),z&&en(h,null,w,"mounted")},v)},ut=(h,d,m,w,v)=>{if(m&&g(h,m),w)for(let _=0;_<w.length;_++)g(h,w[_]);if(v){let _=v.subTree;if(d===_){const S=v.vnode;ut(h,S,S.scopeId,S.slotScopeIds,v.parent)}}},H=(h,d,m,w,v,_,S,I,C=0)=>{for(let E=C;E<h.length;E++){const M=h[E]=I?Lt(h[E]):gt(h[E]);b(null,M,d,m,w,v,_,S,I)}},Te=(h,d,m,w,v,_,S)=>{const I=d.el=h.el;let{patchFlag:C,dynamicChildren:E,dirs:M}=d;C|=h.patchFlag&16;const x=h.props||re,L=d.props||re;let V;m&&tn(m,!1),(V=L.onVnodeBeforeUpdate)&&pt(V,m,d,h),M&&en(d,h,m,"beforeUpdate"),m&&tn(m,!0);const z=v&&d.type!=="foreignObject";if(E?ue(h.dynamicChildren,E,I,m,w,z,_):S||ne(h,d,I,null,m,w,z,_,!1),C>0){if(C&16)Ge(I,d,x,L,m,w,v);else if(C&2&&x.class!==L.class&&i(I,"class",null,L.class,v),C&4&&i(I,"style",x.style,L.style,v),C&8){const se=d.dynamicProps;for(let ee=0;ee<se.length;ee++){const de=se[ee],nt=x[de],xn=L[de];(xn!==nt||de==="value")&&i(I,de,nt,xn,v,h.children,m,w,It)}}C&1&&h.children!==d.children&&u(I,d.children)}else!S&&E==null&&Ge(I,d,x,L,m,w,v);((V=L.onVnodeUpdated)||M)&&je(()=>{V&&pt(V,m,d,h),M&&en(d,h,m,"updated")},w)},ue=(h,d,m,w,v,_,S)=>{for(let I=0;I<d.length;I++){const C=h[I],E=d[I],M=C.el&&(C.type===rt||!on(C,E)||C.shapeFlag&70)?f(C.el):m;b(C,E,M,null,w,v,_,S,!0)}},Ge=(h,d,m,w,v,_,S)=>{if(m!==w){if(m!==re)for(const I in m)!br(I)&&!(I in w)&&i(h,I,m[I],null,S,d.children,v,_,It);for(const I in w){if(br(I))continue;const C=w[I],E=m[I];C!==E&&I!=="value"&&i(h,I,E,C,S,d.children,v,_,It)}"value"in w&&i(h,"value",m.value,w.value)}},ht=(h,d,m,w,v,_,S,I,C)=>{const E=d.el=h?h.el:a(""),M=d.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:L,slotScopeIds:V}=d;V&&(I=I?I.concat(V):V),h==null?(s(E,m,w),s(M,m,w),H(d.children,m,M,v,_,S,I,C)):x>0&&x&64&&L&&h.dynamicChildren?(ue(h.dynamicChildren,L,m,v,_,S,I),(d.key!=null||v&&d===v.subTree)&&Ch(h,d,!0)):ne(h,d,m,M,v,_,S,I,C)},Tt=(h,d,m,w,v,_,S,I,C)=>{d.slotScopeIds=I,h==null?d.shapeFlag&512?v.ctx.activate(d,m,w,S,C):ls(d,m,w,v,_,S,C):Uc(h,d,C)},ls=(h,d,m,w,v,_,S)=>{const I=h.component=xm(h,w,v);if(ai(h)&&(I.ctx.renderer=Dn),Rm(I),I.asyncDep){if(v&&v.registerDep(I,Ve),!h.el){const C=I.subTree=pn(At);j(null,C,d,m)}return}Ve(I,h,d,m,v,_,S)},Uc=(h,d,m)=>{const w=d.component=h.component;if(Lg(h,d,m))if(w.asyncDep&&!w.asyncResolved){he(w,d,m);return}else w.next=d,Dg(w.update),w.update();else d.el=h.el,w.vnode=d},Ve=(h,d,m,w,v,_,S)=>{const I=()=>{if(h.isMounted){let{next:M,bu:x,u:L,parent:V,vnode:z}=h,se=M,ee;tn(h,!1),M?(M.el=z.el,he(h,M,S)):M=z,x&&Tr(x),(ee=M.props&&M.props.onVnodeBeforeUpdate)&&pt(ee,V,M,z),tn(h,!0);const de=Gi(h),nt=h.subTree;h.subTree=de,b(nt,de,f(nt.el),or(nt),h,v,_),M.el=de.el,se===null&&Fg(h,de.el),L&&je(L,v),(ee=M.props&&M.props.onVnodeUpdated)&&je(()=>pt(ee,V,M,z),v)}else{let M;const{el:x,props:L}=d,{bm:V,m:z,parent:se}=h,ee=_r(d);if(tn(h,!1),V&&Tr(V),!ee&&(M=L&&L.onVnodeBeforeMount)&&pt(M,se,d),tn(h,!0),x&&Ki){const de=()=>{h.subTree=Gi(h),Ki(x,h.subTree,h,v,null)};ee?d.type.__asyncLoader().then(()=>!h.isUnmounted&&de()):de()}else{const de=h.subTree=Gi(h);b(null,de,m,w,h,v,_),d.el=de.el}if(z&&je(z,v),!ee&&(M=L&&L.onVnodeMounted)){const de=d;je(()=>pt(M,se,de),v)}(d.shapeFlag&256||se&&_r(se.vnode)&&se.vnode.shapeFlag&256)&&h.a&&je(h.a,v),h.isMounted=!0,d=m=w=null}},C=h.effect=new Ea(I,()=>Da(E),h.scope),E=h.update=()=>C.run();E.id=h.uid,tn(h,!0),E()},he=(h,d,m)=>{d.component=h;const w=h.vnode.props;h.vnode=d,h.next=null,um(h,d.props,w,m),dm(h,d.children,m),ts(),tl(),ns()},ne=(h,d,m,w,v,_,S,I,C=!1)=>{const E=h&&h.children,M=h?h.shapeFlag:0,x=d.children,{patchFlag:L,shapeFlag:V}=d;if(L>0){if(L&128){ir(E,x,m,w,v,_,S,I,C);return}else if(L&256){Jt(E,x,m,w,v,_,S,I,C);return}}V&8?(M&16&&It(E,v,_),x!==E&&u(m,x)):M&16?V&16?ir(E,x,m,w,v,_,S,I,C):It(E,v,_,!0):(M&8&&u(m,""),V&16&&H(x,m,w,v,_,S,I,C))},Jt=(h,d,m,w,v,_,S,I,C)=>{h=h||Ln,d=d||Ln;const E=h.length,M=d.length,x=Math.min(E,M);let L;for(L=0;L<x;L++){const V=d[L]=C?Lt(d[L]):gt(d[L]);b(h[L],V,m,null,v,_,S,I,C)}E>M?It(h,v,_,!0,!1,x):H(d,m,w,v,_,S,I,C,x)},ir=(h,d,m,w,v,_,S,I,C)=>{let E=0;const M=d.length;let x=h.length-1,L=M-1;for(;E<=x&&E<=L;){const V=h[E],z=d[E]=C?Lt(d[E]):gt(d[E]);if(on(V,z))b(V,z,m,null,v,_,S,I,C);else break;E++}for(;E<=x&&E<=L;){const V=h[x],z=d[L]=C?Lt(d[L]):gt(d[L]);if(on(V,z))b(V,z,m,null,v,_,S,I,C);else break;x--,L--}if(E>x){if(E<=L){const V=L+1,z=V<M?d[V].el:w;for(;E<=L;)b(null,d[E]=C?Lt(d[E]):gt(d[E]),m,z,v,_,S,I,C),E++}}else if(E>L)for(;E<=x;)ft(h[E],v,_,!0),E++;else{const V=E,z=E,se=new Map;for(E=z;E<=L;E++){const We=d[E]=C?Lt(d[E]):gt(d[E]);We.key!=null&&se.set(We.key,E)}let ee,de=0;const nt=L-z+1;let xn=!1,qc=0;const us=new Array(nt);for(E=0;E<nt;E++)us[E]=0;for(E=V;E<=x;E++){const We=h[E];if(de>=nt){ft(We,v,_,!0);continue}let dt;if(We.key!=null)dt=se.get(We.key);else for(ee=z;ee<=L;ee++)if(us[ee-z]===0&&on(We,d[ee])){dt=ee;break}dt===void 0?ft(We,v,_,!0):(us[dt-z]=E+1,dt>=qc?qc=dt:xn=!0,b(We,d[dt],m,null,v,_,S,I,C),de++)}const Hc=xn?vm(us):Ln;for(ee=Hc.length-1,E=nt-1;E>=0;E--){const We=z+E,dt=d[We],Kc=We+1<M?d[We+1].el:w;us[E]===0?b(null,dt,m,Kc,v,_,S,I,C):xn&&(ee<0||E!==Hc[ee]?Zt(dt,m,Kc,2):ee--)}}},Zt=(h,d,m,w,v=null)=>{const{el:_,type:S,transition:I,children:C,shapeFlag:E}=h;if(E&6){Zt(h.component.subTree,d,m,w);return}if(E&128){h.suspense.move(d,m,w);return}if(E&64){S.move(h,d,m,Dn);return}if(S===rt){s(_,d,m);for(let x=0;x<C.length;x++)Zt(C[x],d,m,w);s(h.anchor,d,m);return}if(S===Xi){F(h,d,m);return}if(w!==2&&E&1&&I)if(w===0)I.beforeEnter(_),s(_,d,m),je(()=>I.enter(_),v);else{const{leave:x,delayLeave:L,afterLeave:V}=I,z=()=>s(_,d,m),se=()=>{x(_,()=>{z(),V&&V()})};L?L(_,z,se):se()}else s(_,d,m)},ft=(h,d,m,w=!1,v=!1)=>{const{type:_,props:S,ref:I,children:C,dynamicChildren:E,shapeFlag:M,patchFlag:x,dirs:L}=h;if(I!=null&&Mo(I,null,m,h,!0),M&256){d.ctx.deactivate(h);return}const V=M&1&&L,z=!_r(h);let se;if(z&&(se=S&&S.onVnodeBeforeUnmount)&&pt(se,d,h),M&6)Dp(h.component,m,w);else{if(M&128){h.suspense.unmount(m,w);return}V&&en(h,null,d,"beforeUnmount"),M&64?h.type.remove(h,d,m,v,Dn,w):E&&(_!==rt||x>0&&x&64)?It(E,d,m,!1,!0):(_===rt&&x&384||!v&&M&16)&&It(C,d,m),w&&Bc(h)}(z&&(se=S&&S.onVnodeUnmounted)||V)&&je(()=>{se&&pt(se,d,h),V&&en(h,null,d,"unmounted")},m)},Bc=h=>{const{type:d,el:m,anchor:w,transition:v}=h;if(d===rt){Sp(m,w);return}if(d===Xi){Z(h);return}const _=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:I}=v,C=()=>S(m,_);I?I(h.el,_,C):C()}else _()},Sp=(h,d)=>{let m;for(;h!==d;)m=p(h),r(h),h=m;r(d)},Dp=(h,d,m)=>{const{bum:w,scope:v,update:_,subTree:S,um:I}=h;w&&Tr(w),v.stop(),_&&(_.active=!1,ft(S,h,d,m)),I&&je(I,d),je(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},It=(h,d,m,w=!1,v=!1,_=0)=>{for(let S=_;S<h.length;S++)ft(h[S],d,m,w,v)},or=h=>h.shapeFlag&6?or(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),jc=(h,d,m)=>{h==null?d._vnode&&ft(d._vnode,null,null,!0):b(d._vnode||null,h,d,null,null,null,m),tl(),ah(),d._vnode=h},Dn={p:b,um:ft,m:Zt,r:Bc,mt:ls,mc:H,pc:ne,pbc:ue,n:or,o:t};let Hi,Ki;return e&&([Hi,Ki]=e(Dn)),{render:jc,hydrate:Hi,createApp:gm(jc,Hi)}}function tn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ch(t,e,n=!1){const s=t.children,r=e.children;if(B(s)&&B(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Lt(r[i]),a.el=o.el),n||Ch(o,a)),a.type===li&&(a.el=o.el)}}function vm(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const wm=t=>t.__isTeleport,rt=Symbol(void 0),li=Symbol(void 0),At=Symbol(void 0),Xi=Symbol(void 0),vs=[];let ot=null;function Ji(t=!1){vs.push(ot=t?null:[])}function Em(){vs.pop(),ot=vs[vs.length-1]||null}let Ds=1;function ul(t){Ds+=t}function bm(t){return t.dynamicChildren=Ds>0?ot||Ln:null,Em(),Ds>0&&ot&&ot.push(t),t}function Zi(t,e,n,s,r,i){return bm(xe(t,e,n,s,r,i,!0))}function Tm(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}const ui="__vInternal",Ah=({key:t})=>t??null,Cr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ee(t)||Me(t)||K(t)?{i:Ze,r:t,k:e,f:!!n}:t:null;function xe(t,e=null,n=null,s=0,r=null,i=t===rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ah(e),ref:e&&Cr(e),scopeId:uh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ze};return a?(ka(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ee(n)?8:16),Ds>0&&!o&&ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ot.push(c),c}const pn=Im;function Im(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===tm)&&(t=At),Tm(t)){const a=qt(t,e,!0);return n&&ka(a,n),Ds>0&&!i&&ot&&(a.shapeFlag&6?ot[ot.indexOf(t)]=a:ot.push(a)),a.patchFlag|=-2,a}if(Lm(t)&&(t=t.__vccOpts),e){e=_m(e);let{class:a,style:c}=e;a&&!Ee(a)&&(e.class=Mn(a)),ce(c)&&(Zu(c)&&!B(c)&&(c=Pe({},c)),e.style=pa(c))}const o=Ee(t)?1:Pg(t)?128:wm(t)?64:ce(t)?4:K(t)?2:0;return xe(t,e,n,s,r,o,i,!0)}function _m(t){return t?Zu(t)||ui in t?Pe({},t):t:null}function qt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Am(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ah(a),ref:e&&e.ref?n&&r?B(r)?r.concat(Cr(e)):[r,Cr(e)]:Cr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qt(t.ssContent),ssFallback:t.ssFallback&&qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Cm(t=" ",e=0){return pn(li,null,t,e)}function gt(t){return t==null||typeof t=="boolean"?pn(At):B(t)?pn(rt,null,t.slice()):typeof t=="object"?Lt(t):pn(li,null,String(t))}function Lt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qt(t)}function ka(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ka(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ui in e)?e._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),s&64?(n=16,e=[Cm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Am(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Mn([e.class,s.class]));else if(r==="style")e.style=pa([e.style,s.style]);else if(ti(r)){const i=e[r],o=s[r];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function pt(t,e,n,s=null){et(t,e,7,[n,s])}const Sm=_h();let Dm=0;function xm(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Sm,i={uid:Dm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Eh(s,r),emitsOptions:lh(s,r),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Rg.bind(null,i),t.ce&&t.ce(i),i}let me=null;const Nm=()=>me||Ze,Hn=t=>{me=t,t.scope.on()},gn=()=>{me&&me.scope.off(),me=null};function Sh(t){return t.vnode.shapeFlag&4}let xs=!1;function Rm(t,e=!1){xs=e;const{props:n,children:s}=t.vnode,r=Sh(t);lm(t,n,r,e),fm(t,s);const i=r?km(t,e):void 0;return xs=!1,i}function km(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=eh(new Proxy(t.ctx,sm));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Mm(t):null;Hn(t),ts();const i=Pt(s,t,0,[t.props,r]);if(ns(),gn(),$u(i)){if(i.then(gn,gn),e)return i.then(o=>{hl(t,o,e)}).catch(o=>{ii(o,t,0)});t.asyncDep=i}else hl(t,i,e)}else Dh(t,e)}function hl(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=sh(e)),Dh(t,n)}let fl;function Dh(t,e,n){const s=t.type;if(!t.render){if(!e&&fl&&!s.render){const r=s.template||Na(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Pe(Pe({isCustomElement:i,delimiters:a},o),c);s.render=fl(r,l)}}t.render=s.render||at}Hn(t),ts(),rm(t),ns(),gn()}function Om(t){return new Proxy(t.attrs,{get(e,n){return ze(t,"get","$attrs"),e[n]}})}function Mm(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Om(t))},slots:t.slots,emit:t.emit,expose:e}}function hi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sh(eh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ys)return ys[n](t)},has(e,n){return n in e||n in ys}}))}function Lm(t){return K(t)&&"__vccOpts"in t}const Fm=(t,e)=>_g(t,e,xs),Pm=Symbol(""),$m=()=>Ir(Pm),Vm="3.2.47",Um="http://www.w3.org/2000/svg",an=typeof document<"u"?document:null,dl=an&&an.createElement("template"),Bm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?an.createElementNS(Um,t):an.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>an.createTextNode(t),createComment:t=>an.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>an.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{dl.innerHTML=s?`<svg>${t}</svg>`:t;const a=dl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function jm(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function qm(t,e,n){const s=t.style,r=Ee(n);if(n&&!r){if(e&&!Ee(e))for(const i in e)n[i]==null&&Lo(s,i,"");for(const i in n)Lo(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const pl=/\s*!important$/;function Lo(t,e,n){if(B(n))n.forEach(s=>Lo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Hm(t,e);pl.test(n)?t.setProperty(es(s),n.replace(pl,""),"important"):t[s]=n}}const gl=["Webkit","Moz","ms"],eo={};function Hm(t,e){const n=eo[e];if(n)return n;let s=jn(e);if(s!=="filter"&&s in t)return eo[e]=s;s=Bu(s);for(let r=0;r<gl.length;r++){const i=gl[r]+s;if(i in t)return eo[e]=i}return e}const ml="http://www.w3.org/1999/xlink";function Km(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ml,e.slice(6,e.length)):t.setAttributeNS(ml,e,n);else{const i=Mp(e);n==null||i&&!Lu(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function zm(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Lu(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Nn(t,e,n,s){t.addEventListener(e,n,s)}function Gm(t,e,n,s){t.removeEventListener(e,n,s)}function Wm(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Qm(e);if(s){const l=i[e]=Jm(s,r);Nn(t,a,l,c)}else o&&(Gm(t,a,o,c),i[e]=void 0)}}const yl=/(?:Once|Passive|Capture)$/;function Qm(t){let e;if(yl.test(t)){e={};let s;for(;s=t.match(yl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let to=0;const Ym=Promise.resolve(),Xm=()=>to||(Ym.then(()=>to=0),to=Date.now());function Jm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;et(Zm(s,n.value),e,5,[s])};return n.value=t,n.attached=Xm(),n}function Zm(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const vl=/^on[a-z]/,ey=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?jm(t,s,r):e==="style"?qm(t,n,s):ti(e)?ga(e)||Wm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ty(t,e,s,r))?zm(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Km(t,e,s,r))};function ty(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&vl.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vl.test(e)&&Ee(n)?!1:e in t}const ny={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};qg.props;const wl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Tr(e,n):e};function sy(t){t.target.composing=!0}function El(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ry={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=wl(r);const i=s||r.props&&r.props.type==="number";Nn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=To(a)),t._assign(a)}),n&&Nn(t,"change",()=>{t.value=t.value.trim()}),e||(Nn(t,"compositionstart",sy),Nn(t,"compositionend",El),Nn(t,"change",El))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=wl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&To(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},iy=["ctrl","shift","alt","meta"],oy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>iy.some(n=>t[`${n}Key`]&&!e.includes(n))},ay=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=oy[e[r]];if(i&&i(n,e))return}return t(n,...s)},cy=Pe({patchProp:ey},Bm);let bl;function ly(){return bl||(bl=mm(cy))}const uy=(...t)=>{const e=ly().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=hy(s);if(!r)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function hy(t){return Ee(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},fy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Nh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),s.push(n[u],n[f],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw new dy;const p=i<<2|a>>4;if(s.push(p),l!==64){const g=a<<4&240|l>>2;if(s.push(g),f!==64){const A=l<<6&192|f;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const py=function(t){const e=xh(t);return Nh.encodeByteArray(e,!0)},Mr=function(t){return py(t).replace(/\./g,"")},gy=function(t){try{return Nh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=()=>my().__FIREBASE_DEFAULTS__,vy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gy(t[1]);return e&&JSON.parse(e)},Rh=()=>{try{return yy()||vy()||wy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ey=t=>{var e,n;return(n=(e=Rh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},by=t=>{const e=Ey(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ty=()=>{var t;return(t=Rh())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Mr(JSON.stringify(n)),Mr(JSON.stringify(o)),a].join(".")}function Cy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kh(){try{return typeof indexedDB=="object"}catch{return!1}}function Oh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Ay(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="FirebaseError";class Wt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Sy,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Dy(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Wt(r,a,s)}}function Dy(t,e){return t.replace(xy,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const xy=/\{\$([^}]+)}/g;function Lr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Tl(i)&&Tl(o)){if(!Lr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Tl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=1e3,Ry=2,ky=4*60*60*1e3,Oy=.5;function Il(t,e=Ny,n=Ry){const s=e*Math.pow(n,t),r=Math.round(Oy*s*(Math.random()-.5)*2);return Math.min(ky,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return t&&t._delegate?t._delegate:t}class Dt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Iy;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fy(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ly(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ly(t){return t===sn?void 0:t}function Fy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new My(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const $y={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Vy=X.INFO,Uy={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},By=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Uy[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oa{constructor(e){this.name=e,this._logLevel=Vy,this._logHandler=By,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$y[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const jy=(t,e)=>e.some(n=>t instanceof n);let _l,Cl;function qy(){return _l||(_l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hy(){return Cl||(Cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mh=new WeakMap,Fo=new WeakMap,Lh=new WeakMap,no=new WeakMap,Ma=new WeakMap;function Ky(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($t(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mh.set(n,t)}).catch(()=>{}),Ma.set(e,t),e}function zy(t){if(Fo.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fo.set(t,e)}let Po={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gy(t){Po=t(Po)}function Wy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(so(this),e,...n);return Lh.set(s,e.sort?e.sort():[e]),$t(s)}:Hy().includes(t)?function(...e){return t.apply(so(this),e),$t(Mh.get(this))}:function(...e){return $t(t.apply(so(this),e))}}function Qy(t){return typeof t=="function"?Wy(t):(t instanceof IDBTransaction&&zy(t),jy(t,qy())?new Proxy(t,Po):t)}function $t(t){if(t instanceof IDBRequest)return Ky(t);if(no.has(t))return no.get(t);const e=Qy(t);return e!==t&&(no.set(t,e),Ma.set(e,t)),e}const so=t=>Ma.get(t);function Fh(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=$t(o);return s&&o.addEventListener("upgradeneeded",c=>{s($t(o.result),c.oldVersion,c.newVersion,$t(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Yy=["get","getKey","getAll","getAllKeys","count"],Xy=["put","add","delete","clear"],ro=new Map;function Al(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ro.get(e))return ro.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Xy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Yy.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return ro.set(e,i),i}Gy(t=>({...t,get:(e,n,s)=>Al(e,n)||t.get(e,n,s),has:(e,n)=>!!Al(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Zy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $o="@firebase/app",Sl="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Oa("@firebase/app"),ev="@firebase/app-compat",tv="@firebase/analytics-compat",nv="@firebase/analytics",sv="@firebase/app-check-compat",rv="@firebase/app-check",iv="@firebase/auth",ov="@firebase/auth-compat",av="@firebase/database",cv="@firebase/database-compat",lv="@firebase/functions",uv="@firebase/functions-compat",hv="@firebase/installations",fv="@firebase/installations-compat",dv="@firebase/messaging",pv="@firebase/messaging-compat",gv="@firebase/performance",mv="@firebase/performance-compat",yv="@firebase/remote-config",vv="@firebase/remote-config-compat",wv="@firebase/storage",Ev="@firebase/storage-compat",bv="@firebase/firestore",Tv="@firebase/firestore-compat",Iv="firebase",_v="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="[DEFAULT]",Cv={[$o]:"fire-core",[ev]:"fire-core-compat",[nv]:"fire-analytics",[tv]:"fire-analytics-compat",[rv]:"fire-app-check",[sv]:"fire-app-check-compat",[iv]:"fire-auth",[ov]:"fire-auth-compat",[av]:"fire-rtdb",[cv]:"fire-rtdb-compat",[lv]:"fire-fn",[uv]:"fire-fn-compat",[hv]:"fire-iid",[fv]:"fire-iid-compat",[dv]:"fire-fcm",[pv]:"fire-fcm-compat",[gv]:"fire-perf",[mv]:"fire-perf-compat",[yv]:"fire-rc",[vv]:"fire-rc-compat",[wv]:"fire-gcs",[Ev]:"fire-gcs-compat",[bv]:"fire-fst",[Tv]:"fire-fst-compat","fire-js":"fire-js",[Iv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Map,Uo=new Map;function Av(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ht(t){const e=t.name;if(Uo.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Uo.set(e,t);for(const n of Fr.values())Av(n,t);return!0}function js(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new fi("app","Firebase",Sv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=_v;function Ph(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vo,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Vt.create("bad-app-name",{appName:String(r)});if(n||(n=Ty()),!n)throw Vt.create("no-options");const i=Fr.get(r);if(i){if(Lr(n,i.options)&&Lr(s,i.config))return i;throw Vt.create("duplicate-app",{appName:r})}const o=new Py(r);for(const c of Uo.values())o.addComponent(c);const a=new Dv(n,s,o);return Fr.set(r,a),a}function $h(t=Vo){const e=Fr.get(t);if(!e&&t===Vo)return Ph();if(!e)throw Vt.create("no-app",{appName:t});return e}function vt(t,e,n){var s;let r=(s=Cv[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(a.join(" "));return}Ht(new Dt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="firebase-heartbeat-database",Rv=1,Ns="firebase-heartbeat-store";let io=null;function Vh(){return io||(io=Fh(Nv,Rv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ns)}}}).catch(t=>{throw Vt.create("idb-open",{originalErrorMessage:t.message})})),io}async function kv(t){try{return(await Vh()).transaction(Ns).objectStore(Ns).get(Uh(t))}catch(e){if(e instanceof Wt)wn.warn(e.message);else{const n=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function Dl(t,e){try{const s=(await Vh()).transaction(Ns,"readwrite");return await s.objectStore(Ns).put(e,Uh(t)),s.done}catch(n){if(n instanceof Wt)wn.warn(n.message);else{const s=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(s.message)}}}function Uh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=1024,Mv=30*24*60*60*1e3;class Lv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Mv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xl(),{heartbeatsToSend:n,unsentEntries:s}=Fv(this._heartbeatsCache.heartbeats),r=Mr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function xl(){return new Date().toISOString().substring(0,10)}function Fv(t,e=Ov){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Nl(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Nl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Pv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kh()?Oh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Nl(t){return Mr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){Ht(new Dt("platform-logger",e=>new Jy(e),"PRIVATE")),Ht(new Dt("heartbeat",e=>new Lv(e),"PRIVATE")),vt($o,Sl,t),vt($o,Sl,"esm2017"),vt("fire-js","")}$v("");var Vv="firebase",Uv="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt(Vv,Uv,"app");const Bh="@firebase/installations",La="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=1e4,qh=`w:${La}`,Hh="FIS_v2",Bv="https://firebaseinstallations.googleapis.com/v1",jv=60*60*1e3,qv="installations",Hv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},En=new fi(qv,Hv,Kv);function Kh(t){return t instanceof Wt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh({projectId:t}){return`${Bv}/projects/${t}/installations`}function Gh(t){return{token:t.token,requestStatus:2,expiresIn:Gv(t.expiresIn),creationTime:Date.now()}}async function Wh(t,e){const s=(await e.json()).error;return En.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Qh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zv(t,{refreshToken:e}){const n=Qh(t);return n.append("Authorization",Wv(e)),n}async function Yh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Gv(t){return Number(t.replace("s","000"))}function Wv(t){return`${Hh} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=zh(t),r=Qh(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:Hh,appId:t.appId,sdkVersion:qh},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Yh(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Gh(l.authToken)}}else throw await Wh("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=/^[cdef][\w-]{21}$/,Bo="";function Jv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Zv(t);return Xv.test(n)?n:Bo}catch{return Bo}}function Zv(t){return Yv(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Map;function Zh(t,e){const n=di(t);ef(n,e),ew(n,e)}function ef(t,e){const n=Jh.get(t);if(n)for(const s of n)s(e)}function ew(t,e){const n=tw();n&&n.postMessage({key:t,fid:e}),nw()}let ln=null;function tw(){return!ln&&"BroadcastChannel"in self&&(ln=new BroadcastChannel("[Firebase] FID Change"),ln.onmessage=t=>{ef(t.data.key,t.data.fid)}),ln}function nw(){Jh.size===0&&ln&&(ln.close(),ln=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="firebase-installations-database",rw=1,bn="firebase-installations-store";let oo=null;function Fa(){return oo||(oo=Fh(sw,rw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bn)}}})),oo}async function Pr(t,e){const n=di(t),r=(await Fa()).transaction(bn,"readwrite"),i=r.objectStore(bn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Zh(t,e.fid),e}async function tf(t){const e=di(t),s=(await Fa()).transaction(bn,"readwrite");await s.objectStore(bn).delete(e),await s.done}async function pi(t,e){const n=di(t),r=(await Fa()).transaction(bn,"readwrite"),i=r.objectStore(bn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Zh(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(t){let e;const n=await pi(t.appConfig,s=>{const r=iw(s),i=ow(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Bo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iw(t){const e=t||{fid:Jv(),registrationStatus:0};return nf(e)}function ow(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(En.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=aw(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cw(t)}:{installationEntry:e}}async function aw(t,e){try{const n=await Qv(t,e);return Pr(t.appConfig,n)}catch(n){throw Kh(n)&&n.customData.serverCode===409?await tf(t.appConfig):await Pr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function cw(t){let e=await Rl(t.appConfig);for(;e.registrationStatus===1;)await Xh(100),e=await Rl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Pa(t);return s||n}return e}function Rl(t){return pi(t,e=>{if(!e)throw En.create("installation-not-found");return nf(e)})}function nf(t){return lw(t)?{fid:t.fid,registrationStatus:0}:t}function lw(t){return t.registrationStatus===1&&t.registrationTime+jh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw({appConfig:t,heartbeatServiceProvider:e},n){const s=hw(t,n),r=zv(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:qh,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Yh(()=>fetch(s,a));if(c.ok){const l=await c.json();return Gh(l)}else throw await Wh("Generate Auth Token",c)}function hw(t,{fid:e}){return`${zh(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(t,e=!1){let n;const s=await pi(t.appConfig,i=>{if(!sf(i))throw En.create("not-registered");const o=i.authToken;if(!e&&pw(o))return i;if(o.requestStatus===1)return n=fw(t,e),i;{if(!navigator.onLine)throw En.create("app-offline");const a=mw(i);return n=dw(t,a),a}});return n?await n:s.authToken}async function fw(t,e){let n=await kl(t.appConfig);for(;n.authToken.requestStatus===1;)await Xh(100),n=await kl(t.appConfig);const s=n.authToken;return s.requestStatus===0?$a(t,e):s}function kl(t){return pi(t,e=>{if(!sf(e))throw En.create("not-registered");const n=e.authToken;return yw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dw(t,e){try{const n=await uw(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Pr(t.appConfig,s),n}catch(n){if(Kh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tf(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Pr(t.appConfig,s)}throw n}}function sf(t){return t!==void 0&&t.registrationStatus===2}function pw(t){return t.requestStatus===2&&!gw(t)}function gw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+jv}function mw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function yw(t){return t.requestStatus===1&&t.requestTime+jh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(t){const e=t,{installationEntry:n,registrationPromise:s}=await Pa(e);return s?s.catch(console.error):$a(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(t,e=!1){const n=t;return await Ew(n),(await $a(n,e)).token}async function Ew(t){const{registrationPromise:e}=await Pa(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t){if(!t||!t.options)throw ao("App Configuration");if(!t.name)throw ao("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ao(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ao(t){return En.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="installations",Tw="installations-internal",Iw=t=>{const e=t.getProvider("app").getImmediate(),n=bw(e),s=js(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},_w=t=>{const e=t.getProvider("app").getImmediate(),n=js(e,rf).getImmediate();return{getId:()=>vw(n),getToken:r=>ww(n,r)}};function Cw(){Ht(new Dt(rf,Iw,"PUBLIC")),Ht(new Dt(Tw,_w,"PRIVATE"))}Cw();vt(Bh,La);vt(Bh,La,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="analytics",Aw="firebase_id",Sw="origin",Dw=60*1e3,xw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Va="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Oa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ye=new fi("analytics","Analytics",Nw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t){if(!t.startsWith(Va)){const e=Ye.create("invalid-gtag-resource",{gtagURL:t});return He.warn(e.message),""}return t}function of(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function kw(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Ow(t,e){const n=kw("firebase-js-sdk-policy",{createScriptURL:Rw}),s=document.createElement("script"),r=`${Va}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Mw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Lw(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await of(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){He.error(a)}t("config",r,i)}async function Fw(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await of(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){He.error(i)}}function Pw(t,e,n,s){async function r(i,o,a){try{i==="event"?await Fw(t,e,n,o,a):i==="config"?await Lw(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){He.error(c)}}return r}function $w(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Pw(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function Vw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Va)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=30,Bw=1e3;class jw{constructor(e={},n=Bw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const af=new jw;function qw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Hw(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:qw(s)},i=xw.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Kw(t,e=af,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Ye.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ye.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ww;return setTimeout(async()=>{a.abort()},n!==void 0?n:Dw),cf({appId:s,apiKey:r,measurementId:i},o,a,e)}async function cf(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=af){var i;const{appId:o,measurementId:a}=t;try{await zw(s,e)}catch(c){if(a)return He.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Hw(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Gw(l)){if(r.deleteThrottleMetadata(o),a)return He.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Il(n,r.intervalMillis,Uw):Il(n,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,f),He.debug(`Calling attemptFetch again in ${u} millis`),cf(t,f,s,r)}}function zw(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Ye.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Gw(t){if(!(t instanceof Wt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ww{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Qw(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(){if(kh())try{await Oh()}catch(t){return He.warn(Ye.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return He.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Xw(t,e,n,s,r,i,o){var a;const c=Kw(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&He.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>He.error(g)),e.push(c);const l=Yw().then(g=>{if(g)return s.getId()}),[u,f]=await Promise.all([c,l]);Vw(i)||Ow(i,u.measurementId),r("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[Sw]="firebase",p.update=!0,f!=null&&(p[Aw]=f),r("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.app=e}_delete(){return delete ws[this.app.options.appId],Promise.resolve()}}let ws={},Ol=[];const Ml={};let co="dataLayer",Zw="gtag",Ll,lf,Fl=!1;function e0(){const t=[];if(Cy()&&t.push("This is a browser extension environment."),Ay()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Ye.create("invalid-analytics-context",{errorInfo:e});He.warn(n.message)}}function t0(t,e,n){e0();const s=t.options.appId;if(!s)throw Ye.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)He.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if(ws[s]!=null)throw Ye.create("already-exists",{id:s});if(!Fl){Mw(co);const{wrappedGtag:i,gtagCore:o}=$w(ws,Ol,Ml,co,Zw);lf=i,Ll=o,Fl=!0}return ws[s]=Xw(t,Ol,Ml,e,Ll,co,n),new Jw(t)}function n0(t=$h()){t=tt(t);const e=js(t,$r);return e.isInitialized()?e.getImmediate():s0(t)}function s0(t,e={}){const n=js(t,$r);if(n.isInitialized()){const r=n.getImmediate();if(Lr(e,n.getOptions()))return r;throw Ye.create("already-initialized")}return n.initialize({options:e})}function r0(t,e,n,s){t=tt(t),Qw(lf,ws[t.app.options.appId],e,n,s).catch(r=>He.error(r))}const Pl="@firebase/analytics",$l="0.9.5";function i0(){Ht(new Dt($r,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return t0(s,r,n)},"PUBLIC")),Ht(new Dt("analytics-internal",t,"PRIVATE")),vt(Pl,$l),vt(Pl,$l,"esm2017");function t(e){try{const n=e.getProvider($r).getImmediate();return{logEvent:(s,r,i)=>r0(n,s,r,i)}}catch(n){throw Ye.create("interop-component-reg-failed",{reason:n})}}}i0();var o0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Ua=Ua||{},$=o0||self;function Vr(){}function gi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function qs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function a0(t){return Object.prototype.hasOwnProperty.call(t,lo)&&t[lo]||(t[lo]=++c0)}var lo="closure_uid_"+(1e9*Math.random()>>>0),c0=0;function l0(t,e,n){return t.call.apply(t.bind,arguments)}function u0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=l0:Le=u0,Le.apply(null,arguments)}function dr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Se(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Qt(){this.s=this.s,this.o=this.o}var h0=0;Qt.prototype.s=!1;Qt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),h0!=0)&&a0(this)};Qt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ba(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Vl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(gi(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var f0=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",Vr,e),$.removeEventListener("test",Vr,e)}catch{}return t}();function Ur(t){return/^[\s\xa0]*$/.test(t)}var Ul=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function uo(t,e){return t<e?-1:t>e?1:0}function mi(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function yt(t){return mi().indexOf(t)!=-1}function ja(t){return ja[" "](t),t}ja[" "]=Vr;function d0(t){var e=m0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var p0=yt("Opera"),Kn=yt("Trident")||yt("MSIE"),hf=yt("Edge"),jo=hf||Kn,ff=yt("Gecko")&&!(mi().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),g0=mi().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function df(){var t=$.document;return t?t.documentMode:void 0}var Br;e:{var ho="",fo=function(){var t=mi();if(ff)return/rv:([^\);]+)(\)|;)/.exec(t);if(hf)return/Edge\/([\d\.]+)/.exec(t);if(Kn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(g0)return/WebKit\/(\S+)/.exec(t);if(p0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(fo&&(ho=fo?fo[1]:""),Kn){var po=df();if(po!=null&&po>parseFloat(ho)){Br=String(po);break e}}Br=ho}var m0={};function y0(){return d0(function(){let t=0;const e=Ul(String(Br)).split("."),n=Ul("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=uo(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||uo(r[2].length==0,i[2].length==0)||uo(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var qo;if($.document&&Kn){var Bl=df();qo=Bl||parseInt(Br,10)||void 0}else qo=void 0;var v0=qo;function Rs(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ff){e:{try{ja(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:w0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Rs.X.h.call(this)}}Se(Rs,Fe);var w0={2:"touch",3:"pen",4:"mouse"};Rs.prototype.h=function(){Rs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Hs="closure_listenable_"+(1e6*Math.random()|0),E0=0;function b0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++E0,this.ba=this.ea=!1}function yi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function qa(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function pf(t){const e={};for(const n in t)e[n]=t[n];return e}const jl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gf(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<jl.length;i++)n=jl[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function vi(t){this.src=t,this.g={},this.h=0}vi.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ko(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new b0(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Ho(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=uf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(yi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ko(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Ha="closure_lm_"+(1e6*Math.random()|0),go={};function mf(t,e,n,s,r){if(s&&s.once)return vf(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)mf(t,e[i],n,s,r);return null}return n=Ga(n),t&&t[Hs]?t.N(e,n,qs(s)?!!s.capture:!!s,r):yf(t,e,n,!1,s,r)}function yf(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=qs(r)?!!r.capture:!!r,a=za(t);if(a||(t[Ha]=a=new vi(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=T0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)f0||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Ef(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function T0(){function t(n){return e.call(t.src,t.listener,n)}const e=I0;return t}function vf(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vf(t,e[i],n,s,r);return null}return n=Ga(n),t&&t[Hs]?t.O(e,n,qs(s)?!!s.capture:!!s,r):yf(t,e,n,!0,s,r)}function wf(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)wf(t,e[i],n,s,r);else s=qs(s)?!!s.capture:!!s,n=Ga(n),t&&t[Hs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ko(i,n,s,r),-1<n&&(yi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=za(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ko(e,n,s,r)),(n=-1<t?e[t]:null)&&Ka(n))}function Ka(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Hs])Ho(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ef(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=za(e))?(Ho(n,t),n.h==0&&(n.src=null,e[Ha]=null)):yi(t)}}}function Ef(t){return t in go?go[t]:go[t]="on"+t}function I0(t,e){if(t.ba)t=!0;else{e=new Rs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ka(t),t=n.call(s,e)}return t}function za(t){return t=t[Ha],t instanceof vi?t:null}var mo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ga(t){return typeof t=="function"?t:(t[mo]||(t[mo]=function(e){return t.handleEvent(e)}),t[mo])}function _e(){Qt.call(this),this.i=new vi(this),this.P=this,this.I=null}Se(_e,Qt);_e.prototype[Hs]=!0;_e.prototype.removeEventListener=function(t,e,n,s){wf(this,t,e,n,s)};function Ae(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var r=e;e=new Fe(s,t),gf(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=pr(o,s,!0,e)&&r}if(o=e.g=t,r=pr(o,s,!0,e)&&r,r=pr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=pr(o,s,!1,e)&&r}_e.prototype.M=function(){if(_e.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)yi(n[s]);delete t.g[e],t.h--}}this.I=null};_e.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};_e.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function pr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ho(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Wa=$.JSON.stringify;function _0(){var t=If;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class C0{constructor(){this.h=this.g=null}add(e,n){const s=bf.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var bf=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new A0,t=>t.reset());class A0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function S0(t){$.setTimeout(()=>{throw t},0)}function Tf(t,e){zo||D0(),Go||(zo(),Go=!0),If.add(t,e)}var zo;function D0(){var t=$.Promise.resolve(void 0);zo=function(){t.then(x0)}}var Go=!1,If=new C0;function x0(){for(var t;t=_0();){try{t.h.call(t.g)}catch(n){S0(n)}var e=bf;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Go=!1}function wi(t,e){_e.call(this),this.h=t||1,this.g=e||$,this.j=Le(this.lb,this),this.l=Date.now()}Se(wi,_e);N=wi.prototype;N.ca=!1;N.R=null;N.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ae(this,"tick"),this.ca&&(Qa(this),this.start()))}};N.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qa(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}N.M=function(){wi.X.M.call(this),Qa(this),delete this.g};function Ya(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function _f(t){t.g=Ya(()=>{t.g=null,t.i&&(t.i=!1,_f(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class N0 extends Qt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_f(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ks(t){Qt.call(this),this.h=t,this.g={}}Se(ks,Qt);var ql=[];function Cf(t,e,n,s){Array.isArray(n)||(n&&(ql[0]=n.toString()),n=ql);for(var r=0;r<n.length;r++){var i=mf(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Af(t){qa(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ka(e)},t),t.g={}}ks.prototype.M=function(){ks.X.M.call(this),Af(this)};ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ei(){this.g=!0}Ei.prototype.Aa=function(){this.g=!1};function R0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function k0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function On(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+M0(t,n)+(s?" "+s:"")})}function O0(t,e){t.info(function(){return"TIMEOUT: "+e})}Ei.prototype.info=function(){};function M0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Wa(n)}catch{return e}}var _n={},Hl=null;function bi(){return Hl=Hl||new _e}_n.Pa="serverreachability";function Sf(t){Fe.call(this,_n.Pa,t)}Se(Sf,Fe);function Os(t){const e=bi();Ae(e,new Sf(e))}_n.STAT_EVENT="statevent";function Df(t,e){Fe.call(this,_n.STAT_EVENT,t),this.stat=e}Se(Df,Fe);function Be(t){const e=bi();Ae(e,new Df(e,t))}_n.Qa="timingevent";function xf(t,e){Fe.call(this,_n.Qa,t),this.size=e}Se(xf,Fe);function Ks(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Ti={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Nf={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Xa(){}Xa.prototype.h=null;function Kl(t){return t.h||(t.h=t.i())}function Rf(){}var zs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ja(){Fe.call(this,"d")}Se(Ja,Fe);function Za(){Fe.call(this,"c")}Se(Za,Fe);var Wo;function Ii(){}Se(Ii,Xa);Ii.prototype.g=function(){return new XMLHttpRequest};Ii.prototype.i=function(){return{}};Wo=new Ii;function Gs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ks(this),this.O=L0,t=jo?125:void 0,this.T=new wi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new kf}function kf(){this.i=null,this.g="",this.h=!1}var L0=45e3,Qo={},jr={};N=Gs.prototype;N.setTimeout=function(t){this.O=t};function Yo(t,e,n){t.K=1,t.v=Ci(xt(e)),t.s=n,t.P=!0,Of(t,null)}function Of(t,e){t.F=Date.now(),Ws(t),t.A=xt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Bf(n.i,"t",s),t.C=0,n=t.l.H,t.h=new kf,t.g=cd(t.l,n?e:null,!t.s),0<t.N&&(t.L=new N0(Le(t.La,t,t.g),t.N)),Cf(t.S,t.g,"readystatechange",t.ib),e=t.H?pf(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Os(),R0(t.j,t.u,t.A,t.m,t.U,t.s)}N.ib=function(t){t=t.target;const e=this.L;e&&Ct(t)==3?e.l():this.La(t)};N.La=function(t){try{if(t==this.g)e:{const u=Ct(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||jo||this.g&&(this.h.h||this.g.fa()||Ql(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?Os(3):Os(2)),_i(this);var n=this.g.aa();this.Y=n;t:if(Mf(this)){var s=Ql(this.g);t="";var r=s.length,i=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Es(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,k0(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ur(a)){var l=a;break t}}l=null}if(n=l)On(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xo(this,n);else{this.i=!1,this.o=3,Be(12),un(this),Es(this);break e}}this.P?(Lf(this,u,o),jo&&this.i&&u==3&&(Cf(this.S,this.T,"tick",this.hb),this.T.start())):(On(this.j,this.m,o,null),Xo(this,o)),u==4&&un(this),this.i&&!this.I&&(u==4?rd(this.l,this):(this.i=!1,Ws(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Be(12)):(this.o=0,Be(13)),un(this),Es(this)}}}catch{}finally{}};function Mf(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Lf(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=F0(t,n),r==jr){e==4&&(t.o=4,Be(14),s=!1),On(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Qo){t.o=4,Be(15),On(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else On(t.j,t.m,r,null),Xo(t,r);Mf(t)&&r!=jr&&r!=Qo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Be(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),oc(e),e.K=!0,Be(11))):(On(t.j,t.m,n,"[Invalid Chunked Response]"),un(t),Es(t))}N.hb=function(){if(this.g){var t=Ct(this.g),e=this.g.fa();this.C<e.length&&(_i(this),Lf(this,t,e),this.i&&t!=4&&Ws(this))}};function F0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?jr:(n=Number(e.substring(n,s)),isNaN(n)?Qo:(s+=1,s+n>e.length?jr:(e=e.substr(s,n),t.C=s+n,e)))}N.cancel=function(){this.I=!0,un(this)};function Ws(t){t.V=Date.now()+t.O,Ff(t,t.O)}function Ff(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ks(Le(t.gb,t),e)}function _i(t){t.B&&($.clearTimeout(t.B),t.B=null)}N.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(O0(this.j,this.A),this.K!=2&&(Os(),Be(17)),un(this),this.o=2,Es(this)):Ff(this,this.V-t)};function Es(t){t.l.G==0||t.I||rd(t.l,t)}function un(t){_i(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Qa(t.T),Af(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Xo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Jo(n.h,t))){if(!t.J&&Jo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Kr(n),Di(n);else break e;ic(n),Be(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ks(Le(n.cb,n),6e3));if(1>=Hf(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else hn(n,11)}else if((t.J||n.g==t)&&Kr(n),!Ur(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const A=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var i=s.h;i.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ec(i,i.h),i.h=null))}if(s.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.za=b,ae(s.F,s.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ad(s,s.H?s.ka:null,s.V),o.J){Kf(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(_i(a),Ws(a)),s.g=o}else nd(s);0<n.i.length&&xi(n)}else l[0]!="stop"&&l[0]!="close"||hn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?hn(n,7):rc(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Os(4)}catch{}}function P0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(gi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function $0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(gi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Pf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(gi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=$0(t),s=P0(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var $f=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function V0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function mn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof mn){this.h=e!==void 0?e:t.h,qr(this,t.j),this.s=t.s,this.g=t.g,Hr(this,t.m),this.l=t.l,e=t.i;var n=new Ms;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zl(this,n),this.o=t.o}else t&&(n=String(t).match($f))?(this.h=!!e,qr(this,n[1]||"",!0),this.s=ds(n[2]||""),this.g=ds(n[3]||"",!0),Hr(this,n[4]),this.l=ds(n[5]||"",!0),zl(this,n[6]||"",!0),this.o=ds(n[7]||"")):(this.h=!!e,this.i=new Ms(null,this.h))}mn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ps(e,Gl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ps(e,Gl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ps(n,n.charAt(0)=="/"?j0:B0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ps(n,H0)),t.join("")};function xt(t){return new mn(t)}function qr(t,e,n){t.j=n?ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Hr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zl(t,e,n){e instanceof Ms?(t.i=e,K0(t.i,t.h)):(n||(e=ps(e,q0)),t.i=new Ms(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function Ci(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ps(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,U0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function U0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gl=/[#\/\?@]/g,B0=/[#\?:]/g,j0=/[#\?]/g,q0=/[#\?@]/g,H0=/#/g;function Ms(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yt(t){t.g||(t.g=new Map,t.h=0,t.i&&V0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Ms.prototype;N.add=function(t,e){Yt(this),this.i=null,t=ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Vf(t,e){Yt(t),e=ss(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Uf(t,e){return Yt(t),e=ss(t,e),t.g.has(e)}N.forEach=function(t,e){Yt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};N.oa=function(){Yt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};N.W=function(t){Yt(this);let e=[];if(typeof t=="string")Uf(this,t)&&(e=e.concat(this.g.get(ss(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Yt(this),this.i=null,t=ss(this,t),Uf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Bf(t,e,n){Vf(t,e),0<n.length&&(t.i=null,t.g.set(ss(t,e),Ba(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function K0(t,e){e&&!t.j&&(Yt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Vf(this,s),Bf(this,r,n))},t)),t.j=e}var z0=class{constructor(e,n){this.h=e,this.g=n}};function jf(t){this.l=t||G0,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ga&&$.g.Ga()&&$.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var G0=10;function qf(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hf(t){return t.h?1:t.g?t.g.size:0}function Jo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ec(t,e){t.g?t.g.add(e):t.h=e}function Kf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jf.prototype.cancel=function(){if(this.i=zf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zf(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ba(t.i)}function tc(){}tc.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};tc.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function W0(){this.g=new tc}function Q0(t,e,n){const s=n||"";try{Pf(t,function(r,i){let o=r;qs(r)&&(o=Wa(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Y0(t,e){const n=new Ei;if($.Image){const s=new Image;s.onload=dr(gr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=dr(gr,n,s,"TestLoadImage: error",!1,e),s.onabort=dr(gr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=dr(gr,n,s,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function gr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Qs(t){this.l=t.ac||null,this.j=t.jb||!1}Se(Qs,Xa);Qs.prototype.g=function(){return new Ai(this.l,this.j)};Qs.prototype.i=function(t){return function(){return t}}({});function Ai(t,e){_e.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=nc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Se(Ai,_e);var nc=0;N=Ai.prototype;N.open=function(t,e){if(this.readyState!=nc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ls(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ys(this)),this.readyState=nc};N.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gf(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Gf(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}N.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ys(this):Ls(this),this.readyState==3&&Gf(this)}};N.Va=function(t){this.g&&(this.response=this.responseText=t,Ys(this))};N.Ua=function(t){this.g&&(this.response=t,Ys(this))};N.ga=function(){this.g&&Ys(this)};function Ys(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ls(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ls(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var X0=$.JSON.parse;function fe(t){_e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Wf,this.K=this.L=!1}Se(fe,_e);var Wf="",J0=/^https?$/i,Z0=["POST","PUT"];N=fe.prototype;N.Ka=function(t){this.L=t};N.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wo.g(),this.C=this.u?Kl(this.u):Kl(Wo),this.g.onreadystatechange=Le(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Wl(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=$.FormData&&t instanceof $.FormData,!(0<=uf(Z0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xf(this),0<this.B&&((this.K=eE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.qa,this)):this.A=Ya(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Wl(this,i)}};function eE(t){return Kn&&y0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.qa=function(){typeof Ua<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function Wl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qf(t),Si(t)}function Qf(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),Si(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Si(this,!0)),fe.X.M.call(this)};N.Ha=function(){this.s||(this.F||this.v||this.l?Yf(this):this.fb())};N.fb=function(){Yf(this)};function Yf(t){if(t.h&&typeof Ua<"u"&&(!t.C[1]||Ct(t)!=4||t.aa()!=2)){if(t.v&&Ct(t)==4)Ya(t.Ha,0,t);else if(Ae(t,"readystatechange"),Ct(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match($f)[1]||null;if(!r&&$.self&&$.self.location){var i=$.self.location.protocol;r=i.substr(0,i.length-1)}s=!J0.test(r?r.toLowerCase():"")}n=s}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<Ct(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Qf(t)}}finally{Si(t)}}}}function Si(t,e){if(t.g){Xf(t);const n=t.g,s=t.C[0]?Vr:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=s}catch{}}}function Xf(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Ct(t){return t.g?t.g.readyState:0}N.aa=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}};N.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),X0(e)}};function Ql(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Wf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Ea=function(){return this.m};N.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jf(t){let e="";return qa(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function sc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Jf(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function hs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zf(t){this.Ca=0,this.i=[],this.j=new Ei,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=hs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=hs("baseRetryDelayMs",5e3,t),this.bb=hs("retryDelaySeedMs",1e4,t),this.$a=hs("forwardChannelMaxRetries",2,t),this.ta=hs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new jf(t&&t.concurrentRequestLimit),this.Fa=new W0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}N=Zf.prototype;N.ma=8;N.G=1;function rc(t){if(ed(t),t.G==3){var e=t.U++,n=xt(t.F);ae(n,"SID",t.I),ae(n,"RID",e),ae(n,"TYPE","terminate"),Xs(t,n),e=new Gs(t,t.j,e,void 0),e.K=2,e.v=Ci(xt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=cd(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ws(e)}od(t)}function Di(t){t.g&&(oc(t),t.g.cancel(),t.g=null)}function ed(t){Di(t),t.u&&($.clearTimeout(t.u),t.u=null),Kr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function xi(t){qf(t.h)||t.m||(t.m=!0,Tf(t.Ja,t),t.C=0)}function tE(t,e){return Hf(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ks(Le(t.Ja,t,e),id(t,t.C)),t.C++,!0)}N.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Gs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=pf(i),gf(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=td(this,r,e),n=xt(this.F),ae(n,"RID",t),ae(n,"CVER",22),this.D&&ae(n,"X-HTTP-Session-Id",this.D),Xs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Jf(i)))+"&"+e:this.o&&sc(n,this.o,i)),ec(this.h,r),this.Ya&&ae(n,"TYPE","init"),this.O?(ae(n,"$req",e),ae(n,"SID","null"),r.Z=!0,Yo(r,n,null)):Yo(r,n,e),this.G=2}}else this.G==3&&(t?Yl(this,t):this.i.length==0||qf(this.h)||Yl(this))};function Yl(t,e){var n;e?n=e.m:n=t.U++;const s=xt(t.F);ae(s,"SID",t.I),ae(s,"RID",n),ae(s,"AID",t.T),Xs(t,s),t.o&&t.s&&sc(s,t.o,t.s),n=new Gs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=td(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ec(t.h,n),Yo(n,s,e)}function Xs(t,e){t.ia&&qa(t.ia,function(n,s){ae(e,s,n)}),t.l&&Pf({},function(n,s){ae(e,s,n)})}function td(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Le(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{Q0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function nd(t){t.g||t.u||(t.Z=1,Tf(t.Ia,t),t.A=0)}function ic(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ks(Le(t.Ia,t),id(t,t.A)),t.A++,!0)}N.Ia=function(){if(this.u=null,sd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ks(Le(this.eb,this),t)}};N.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Be(10),Di(this),sd(this))};function oc(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function sd(t){t.g=new Gs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=xt(t.sa);ae(e,"RID","rpc"),ae(e,"SID",t.I),ae(e,"CI",t.L?"0":"1"),ae(e,"AID",t.T),ae(e,"TYPE","xmlhttp"),Xs(t,e),t.o&&t.s&&sc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ci(xt(e)),n.s=null,n.P=!0,Of(n,t)}N.cb=function(){this.v!=null&&(this.v=null,Di(this),ic(this),Be(19))};function Kr(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function rd(t,e){var n=null;if(t.g==e){Kr(t),oc(t),t.g=null;var s=2}else if(Jo(t.h,e))n=e.D,Kf(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=bi(),Ae(s,new xf(s,n)),xi(t)}else nd(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&tE(t,e)||s==2&&ic(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:hn(t,5);break;case 4:hn(t,10);break;case 3:hn(t,6);break;default:hn(t,2)}}}function id(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function hn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Le(t.kb,t);n||(n=new mn("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||qr(n,"https"),Ci(n)),Y0(n.toString(),s)}else Be(2);t.G=0,t.l&&t.l.va(e),od(t),ed(t)}N.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function od(t){if(t.G=0,t.la=[],t.l){const e=zf(t.h);(e.length!=0||t.i.length!=0)&&(Vl(t.la,e),Vl(t.la,t.i),t.h.i.length=0,Ba(t.i),t.i.length=0),t.l.ua()}}function ad(t,e,n){var s=n instanceof mn?xt(n):new mn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Hr(s,s.m);else{var r=$.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new mn(null,void 0);s&&qr(i,s),e&&(i.g=e),r&&Hr(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ae(s,n,e),ae(s,"VER",t.ma),Xs(t,s),s}function cd(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new fe(new Qs({jb:!0})):new fe(t.ra),e.Ka(t.H),e}function ld(){}N=ld.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Ra=function(){};function zr(){if(Kn&&!(10<=Number(v0)))throw Error("Environmental error: no available transport.")}zr.prototype.g=function(t,e){return new Xe(t,e)};function Xe(t,e){_e.call(this),this.g=new Zf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ur(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ur(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new rs(this)}Se(Xe,_e);Xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Be(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ad(t,null,t.V),xi(t)};Xe.prototype.close=function(){rc(this.g)};Xe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Wa(t),t=n);e.i.push(new z0(e.ab++,t)),e.G==3&&xi(e)};Xe.prototype.M=function(){this.g.l=null,delete this.j,rc(this.g),delete this.g,Xe.X.M.call(this)};function ud(t){Ja.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Se(ud,Ja);function hd(){Za.call(this),this.status=1}Se(hd,Za);function rs(t){this.g=t}Se(rs,ld);rs.prototype.xa=function(){Ae(this.g,"a")};rs.prototype.wa=function(t){Ae(this.g,new ud(t))};rs.prototype.va=function(t){Ae(this.g,new hd)};rs.prototype.ua=function(){Ae(this.g,"b")};zr.prototype.createWebChannel=zr.prototype.g;Xe.prototype.send=Xe.prototype.u;Xe.prototype.open=Xe.prototype.m;Xe.prototype.close=Xe.prototype.close;Ti.NO_ERROR=0;Ti.TIMEOUT=8;Ti.HTTP_ERROR=6;Nf.COMPLETE="complete";Rf.EventType=zs;zs.OPEN="a";zs.CLOSE="b";zs.ERROR="c";zs.MESSAGE="d";_e.prototype.listen=_e.prototype.N;fe.prototype.listenOnce=fe.prototype.O;fe.prototype.getLastError=fe.prototype.Oa;fe.prototype.getLastErrorCode=fe.prototype.Ea;fe.prototype.getStatus=fe.prototype.aa;fe.prototype.getResponseJson=fe.prototype.Sa;fe.prototype.getResponseText=fe.prototype.fa;fe.prototype.send=fe.prototype.da;fe.prototype.setWithCredentials=fe.prototype.Ka;var nE=function(){return new zr},sE=function(){return bi()},yo=Ti,rE=Nf,iE=_n,Xl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},oE=Qs,mr=Rf,aE=fe;const Jl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Oa("@firebase/firestore");function Zl(){return Tn.logLevel}function R(t,...e){if(Tn.logLevel<=X.DEBUG){const n=e.map(ac);Tn.debug(`Firestore (${is}): ${t}`,...n)}}function Nt(t,...e){if(Tn.logLevel<=X.ERROR){const n=e.map(ac);Tn.error(`Firestore (${is}): ${t}`,...n)}}function Gr(t,...e){if(Tn.logLevel<=X.WARN){const n=e.map(ac);Tn.warn(`Firestore (${is}): ${t}`,...n)}}function ac(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t="Unexpected state"){const e=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: `+t;throw Nt(e),new Error(e)}function oe(t,e){t||P()}function q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ne.UNAUTHENTICATED))}shutdown(){}}class lE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uE{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(oe(typeof s.accessToken=="string"),new fd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Ne(e)}}class hE{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class fE{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new hE(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pE{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.T=n.token,new dE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=gE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function J(t,e){return t<e?-1:t>e?1:0}function zn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ve(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new ve(0,0))}static max(){return new U(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n,s){n===void 0?n=0:n>e.length&&P(),s===void 0?s=e.length-n:s>e.length-n&&P(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Fs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends Fs{construct(e,n,s){return new ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new D(y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const mE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends Fs{construct(e,n,s){return new Oe(e,n,s)}static isValidIdentifier(e){return mE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new D(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new D(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new D(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ie.fromString(e))}static fromName(e){return new O(ie.fromString(e).popFirst(5))}static empty(){return new O(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ie(e.slice()))}}function yE(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=U.fromTimestamp(s===1e9?new ve(n+1,0):new ve(n,s));return new Kt(r,O.empty(),e)}function vE(t){return new Kt(t.readTime,t.key,-1)}class Kt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Kt(U.min(),O.empty(),-1)}static max(){return new Kt(U.max(),O.empty(),-1)}}function wE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t){if(t.code!==y.FAILED_PRECONDITION||t.message!==EE)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&P(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Zs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}cc.ct=-1;function Ni(t){return t==null}function Wr(t){return t===0&&1/t==-1/0}function TE(t){return typeof t=="number"&&Number.isInteger(t)&&!Wr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yr(this.root,e,this.comparator,!1)}getReverseIterator(){return new yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yr(this.root,e,this.comparator,!0)}}class yr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=r??Ce.EMPTY,this.right=i??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ce(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ce.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw P();const e=this.left.check();if(e!==this.right.check())throw P();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw P()}get value(){throw P()}get color(){throw P()}get left(){throw P()}get right(){throw P()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tu(this.data.getIterator())}getIteratorFrom(e){return new tu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class tu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new Qe([])}unionWith(e){let n=new we(Oe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Qe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new IE("Invalid base64 string: "+r):r}}(e);return new $e(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const _E=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(t){if(oe(!!t),typeof t=="string"){let e=0;const n=_E.exec(t);if(oe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gn(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function md(t){const e=t.mapValue.fields.__previous_value__;return gd(e)?md(e):e}function Ps(t){const e=zt(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class $s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function In(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gd(t)?4:AE(t)?9007199254740991:10:P()}function Et(t,e){if(t===e)return!0;const n=In(t);if(n!==In(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ps(t).isEqual(Ps(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=zt(s.timestampValue),o=zt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Gn(s.bytesValue).isEqual(Gn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return ge(s.geoPointValue.latitude)===ge(r.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ge(s.integerValue)===ge(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ge(s.doubleValue),o=ge(r.doubleValue);return i===o?Wr(i)===Wr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return zn(t.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(eu(i)!==eu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Et(i[a],o[a])))return!1;return!0}(t,e);default:return P()}}function Vs(t,e){return(t.values||[]).find(n=>Et(n,e))!==void 0}function Wn(t,e){if(t===e)return 0;const n=In(t),s=In(e);if(n!==s)return J(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=ge(r.integerValue||r.doubleValue),a=ge(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return nu(t.timestampValue,e.timestampValue);case 4:return nu(Ps(t),Ps(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Gn(r),a=Gn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=J(o[c],a[c]);if(l!==0)return l}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=J(ge(r.latitude),ge(i.latitude));return o!==0?o:J(ge(r.longitude),ge(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Wn(o[c],a[c]);if(l)return l}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===vr.mapValue&&i===vr.mapValue)return 0;if(r===vr.mapValue)return 1;if(i===vr.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=J(a[u],l[u]);if(f!==0)return f;const p=Wn(o[a[u]],c[l[u]]);if(p!==0)return p}return J(a.length,l.length)}(t.mapValue,e.mapValue);default:throw P()}}function nu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=zt(t),s=zt(e),r=J(n.seconds,s.seconds);return r!==0?r:J(n.nanos,s.nanos)}function Qn(t){return Zo(t)}function Zo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=zt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Zo(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Zo(s.fields[a])}`;return i+"}"}(t.mapValue):P();var e,n}function su(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ea(t){return!!t&&"integerValue"in t}function lc(t){return!!t&&"arrayValue"in t}function ru(t){return!!t&&"nullValue"in t}function iu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ar(t){return!!t&&"mapValue"in t}function bs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=bs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ar(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bs(n)}setAll(e){let n=Oe.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=bs(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ar(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Et(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ar(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Cn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new qe(bs(this.value))}}function yd(t){const e=[];return Cn(t.fields,(n,s)=>{const r=new Oe([n]);if(Ar(s)){const i=yd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Qe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Re(e,0,U.min(),U.min(),U.min(),qe.empty(),0)}static newFoundDocument(e,n,s,r){return new Re(e,1,n,U.min(),s,r,0)}static newNoDocument(e,n){return new Re(e,2,n,U.min(),U.min(),qe.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,U.min(),U.min(),qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n){this.position=e,this.inclusive=n}}function ou(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=O.comparator(O.fromName(o.referenceValue),n.key):s=Wn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function au(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Et(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n="asc"){this.field=e,this.dir=n}}function SE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{}class ye extends vd{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new xE(e,n,s):n==="array-contains"?new kE(e,s):n==="in"?new OE(e,s):n==="not-in"?new ME(e,s):n==="array-contains-any"?new LE(e,s):new ye(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new NE(e,s):new RE(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wn(n,this.value)):n!==null&&In(this.value)===In(n)&&this.matchesComparison(Wn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return P()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class lt extends vd{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new lt(e,n)}matches(e){return wd(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function wd(t){return t.op==="and"}function Ed(t){return DE(t)&&wd(t)}function DE(t){for(const e of t.filters)if(e instanceof lt)return!1;return!0}function ta(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+Qn(t.value);if(Ed(t))return t.filters.map(e=>ta(e)).join(",");{const e=t.filters.map(n=>ta(n)).join(",");return`${t.op}(${e})`}}function bd(t,e){return t instanceof ye?function(n,s){return s instanceof ye&&n.op===s.op&&n.field.isEqual(s.field)&&Et(n.value,s.value)}(t,e):t instanceof lt?function(n,s){return s instanceof lt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&bd(i,s.filters[o]),!0):!1}(t,e):void P()}function Td(t){return t instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${Qn(e.value)}`}(t):t instanceof lt?function(e){return e.op.toString()+" {"+e.getFilters().map(Td).join(" ,")+"}"}(t):"Filter"}class xE extends ye{constructor(e,n,s){super(e,n,s),this.key=O.fromName(s.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class NE extends ye{constructor(e,n){super(e,"in",n),this.keys=Id("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RE extends ye{constructor(e,n){super(e,"not-in",n),this.keys=Id("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Id(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>O.fromName(s.referenceValue))}class kE extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lc(n)&&Vs(n.arrayValue,this.value)}}class OE extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vs(this.value.arrayValue,n)}}class ME extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vs(this.value.arrayValue,n)}}class LE extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Vs(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function cu(t,e=null,n=[],s=[],r=null,i=null,o=null){return new FE(t,e,n,s,r,i,o)}function uc(t){const e=q(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ta(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ni(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qn(s)).join(",")),e.ft=n}return e.ft}function hc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bd(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!au(t.startAt,e.startAt)&&au(t.endAt,e.endAt)}function na(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function PE(t,e,n,s,r,i,o,a){return new os(t,e,n,s,r,i,o,a)}function fc(t){return new os(t)}function lu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ri(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function _d(t){return t.collectionGroup!==null}function Un(t){const e=q(t);if(e.dt===null){e.dt=[];const n=Ri(e),s=dc(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Vn(n)),e.dt.push(new Vn(Oe.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Vn(Oe.keyField(),i))}}}return e.dt}function Rt(t){const e=q(t);if(!e.wt)if(e.limitType==="F")e.wt=cu(e.path,e.collectionGroup,Un(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Un(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Vn(i.field,o))}const s=e.endAt?new Qr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Qr(e.startAt.position,e.startAt.inclusive):null;e.wt=cu(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function sa(t,e){e.getFirstInequalityField(),Ri(t);const n=t.filters.concat([e]);return new os(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ra(t,e,n){return new os(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ki(t,e){return hc(Rt(t),Rt(e))&&t.limitType===e.limitType}function Cd(t){return`${uc(Rt(t))}|lt:${t.limitType}`}function ia(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Td(s)).join(", ")}]`),Ni(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qn(s)).join(",")),`Target(${n})`}(Rt(t))}; limitType=${t.limitType})`}function Oi(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):O.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Un(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ou(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Un(n),s)||n.endAt&&!function(r,i,o){const a=ou(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Un(n),s))}(t,e)}function $E(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ad(t){return(e,n)=>{let s=!1;for(const r of Un(t)){const i=VE(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function VE(t,e,n){const s=t.field.isKeyField()?O.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Wn(a,c):P()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return P()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Cn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return pd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=new be(O.comparator);function kt(){return UE}const Sd=new be(O.comparator);function gs(...t){let e=Sd;for(const n of t)e=e.insert(n.key,n);return e}function Dd(t){let e=Sd;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function fn(){return Ts()}function xd(){return Ts()}function Ts(){return new as(t=>t.toString(),(t,e)=>t.isEqual(e))}const BE=new be(O.comparator),jE=new we(O.comparator);function G(...t){let e=jE;for(const n of t)e=e.add(n);return e}const qE=new we(J);function Nd(){return qE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wr(e)?"-0":e}}function kd(t){return{integerValue:""+t}}function HE(t,e){return TE(e)?kd(e):Rd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this._=void 0}}function KE(t,e,n){return t instanceof Yr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Us?Md(t,e):t instanceof Bs?Ld(t,e):function(s,r){const i=Od(s,r),o=uu(i)+uu(s._t);return ea(i)&&ea(s._t)?kd(o):Rd(s.serializer,o)}(t,e)}function zE(t,e,n){return t instanceof Us?Md(t,e):t instanceof Bs?Ld(t,e):n}function Od(t,e){return t instanceof Xr?ea(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Yr extends Mi{}class Us extends Mi{constructor(e){super(),this.elements=e}}function Md(t,e){const n=Fd(e);for(const s of t.elements)n.some(r=>Et(r,s))||n.push(s);return{arrayValue:{values:n}}}class Bs extends Mi{constructor(e){super(),this.elements=e}}function Ld(t,e){let n=Fd(e);for(const s of t.elements)n=n.filter(r=>!Et(r,s));return{arrayValue:{values:n}}}class Xr extends Mi{constructor(e,n){super(),this.serializer=e,this._t=n}}function uu(t){return ge(t.integerValue||t.doubleValue)}function Fd(t){return lc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function GE(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Us&&s instanceof Us||n instanceof Bs&&s instanceof Bs?zn(n.elements,s.elements,Et):n instanceof Xr&&s instanceof Xr?Et(n._t,s._t):n instanceof Yr&&s instanceof Yr}(t.transform,e.transform)}class WE{constructor(e,n){this.version=e,this.transformResults=n}}class ct{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ct}static exists(e){return new ct(void 0,e)}static updateTime(e){return new ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Li{}function Pd(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pc(t.key,ct.none()):new er(t.key,t.data,ct.none());{const n=t.data,s=qe.empty();let r=new we(Oe.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Xt(t.key,s,new Qe(r.toArray()),ct.none())}}function QE(t,e,n){t instanceof er?function(s,r,i){const o=s.value.clone(),a=fu(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Xt?function(s,r,i){if(!Sr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=fu(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll($d(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Is(t,e,n,s){return t instanceof er?function(r,i,o,a){if(!Sr(r.precondition,i))return o;const c=r.value.clone(),l=du(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Xt?function(r,i,o,a){if(!Sr(r.precondition,i))return o;const c=du(r.fieldTransforms,a,i),l=i.data;return l.setAll($d(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Sr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function YE(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Od(s.transform,r||null);i!=null&&(n===null&&(n=qe.empty()),n.set(s.field,i))}return n||null}function hu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&zn(n,s,(r,i)=>GE(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class er extends Li{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Xt extends Li{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $d(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function fu(t,e,n){const s=new Map;oe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,zE(o,a,n[r]))}return s}function du(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,KE(i,o,e))}return s}class pc extends Li{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XE extends Li{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&QE(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Is(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Is(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=xd();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Pd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(U.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&zn(this.mutations,e.mutations,(n,s)=>hu(n,s))&&zn(this.baseMutations,e.baseMutations,(n,s)=>hu(n,s))}}class gc{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){oe(e.mutations.length===s.length);let r=BE;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new gc(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,W;function tb(t){switch(t){default:return P();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Vd(t){if(t===void 0)return Nt("GRPC error has no .code"),y.UNKNOWN;switch(t){case pe.OK:return y.OK;case pe.CANCELLED:return y.CANCELLED;case pe.UNKNOWN:return y.UNKNOWN;case pe.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case pe.INTERNAL:return y.INTERNAL;case pe.UNAVAILABLE:return y.UNAVAILABLE;case pe.UNAUTHENTICATED:return y.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case pe.NOT_FOUND:return y.NOT_FOUND;case pe.ALREADY_EXISTS:return y.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return y.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case pe.ABORTED:return y.ABORTED;case pe.OUT_OF_RANGE:return y.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return y.UNIMPLEMENTED;case pe.DATA_LOSS:return y.DATA_LOSS;default:return P()}}(W=pe||(pe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return wr}static getOrCreateInstance(){return wr===null&&(wr=new mc),wr}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let wr=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,tr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Fi(U.min(),r,Nd(),kt(),G())}}class tr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new tr(s,n,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Ud{constructor(e,n){this.targetId=e,this.Et=n}}class Bd{constructor(e,n,s=$e.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class pu{constructor(){this.At=0,this.Rt=mu(),this.vt=$e.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=G(),n=G(),s=G();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:P()}}),new tr(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=mu()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class nb{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=kt(),this.qt=gu(),this.Ut=new we(J)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:P()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(na(o))if(r===0){const a=new O(o.path);this.Qt(s,a,Re.newNoDocument(a,U.min()))}else oe(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=mc.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&na(a.target)){const c=new O(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Re.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=G();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Fi(e,n,this.Ut,this.Lt,s);return this.Lt=kt(),this.qt=gu(),this.Ut=new we(J),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new pu,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new we(J),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new pu),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function gu(){return new be(O.comparator)}function mu(){return new be(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),rb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ib=(()=>({and:"AND",or:"OR"}))();class ob{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jd(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ab(t,e){return Jr(t,e.toTimestamp())}function wt(t){return oe(!!t),U.fromTimestamp(function(e){const n=zt(e);return new ve(n.seconds,n.nanos)}(t))}function yc(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function qd(t){const e=ie.fromString(t);return oe(Gd(e)),e}function oa(t,e){return yc(t.databaseId,e.path)}function vo(t,e){const n=qd(e);if(n.get(1)!==t.databaseId.projectId)throw new D(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(Hd(n))}function aa(t,e){return yc(t.databaseId,e)}function cb(t){const e=qd(t);return e.length===4?ie.emptyPath():Hd(e)}function ca(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hd(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yu(t,e,n){return{name:oa(t,e),fields:n.value.mapValue.fields}}function lb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:P()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(oe(l===void 0||typeof l=="string"),$e.fromBase64String(l||"")):(oe(l===void 0||l instanceof Uint8Array),$e.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?y.UNKNOWN:Vd(c.code);return new D(l,c.message||"")}(o);n=new Bd(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=vo(t,s.document.name),i=wt(s.document.updateTime),o=s.document.createTime?wt(s.document.createTime):U.min(),a=new qe({mapValue:{fields:s.document.fields}}),c=Re.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Dr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=vo(t,s.document),i=s.readTime?wt(s.readTime):U.min(),o=Re.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Dr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=vo(t,s.document),i=s.removedTargetIds||[];n=new Dr([],i,r,null)}else{if(!("filter"in e))return P();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new eb(r),o=s.targetId;n=new Ud(o,i)}}return n}function ub(t,e){let n;if(e instanceof er)n={update:yu(t,e.key,e.value)};else if(e instanceof pc)n={delete:oa(t,e.key)};else if(e instanceof Xt)n={update:yu(t,e.key,e.data),updateMask:wb(e.fieldMask)};else{if(!(e instanceof XE))return P();n={verify:oa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Yr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Us)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Bs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Xr)return{fieldPath:i.field.canonicalString(),increment:o._t};throw P()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:ab(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:P()}(t,e.precondition)),n}function hb(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?wt(s.updateTime):wt(r);return i.isEqual(U.min())&&(i=wt(r)),new WE(i,s.transformResults||[])}(n,e))):[]}function fb(t,e){return{documents:[aa(t,e.path)]}}function db(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=aa(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=aa(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return zd(lt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Rn(u.field),direction:mb(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||Ni(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function pb(t){let e=cb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){oe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const f=Kd(u);return f instanceof lt&&Ed(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Vn(kn(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Ni(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,p=u.values||[];return new Qr(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,p=u.values||[];return new Qr(p,f)}(n.endAt)),PE(e,r,o,i,a,"F",c,l)}function gb(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return P()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kd(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=kn(e.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=kn(e.unaryFilter.field);return ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=kn(e.unaryFilter.field);return ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=kn(e.unaryFilter.field);return ye.create(i,"!=",{nullValue:"NULL_VALUE"});default:return P()}}(t):t.fieldFilter!==void 0?function(e){return ye.create(kn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return P()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return lt.create(e.compositeFilter.filters.map(n=>Kd(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return P()}}(e.compositeFilter.op))}(t):P()}function mb(t){return sb[t]}function yb(t){return rb[t]}function vb(t){return ib[t]}function Rn(t){return{fieldPath:t.canonicalString()}}function kn(t){return Oe.fromServerFormat(t.fieldPath)}function zd(t){return t instanceof ye?function(e){if(e.op==="=="){if(iu(e.value))return{unaryFilter:{field:Rn(e.field),op:"IS_NAN"}};if(ru(e.value))return{unaryFilter:{field:Rn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(iu(e.value))return{unaryFilter:{field:Rn(e.field),op:"IS_NOT_NAN"}};if(ru(e.value))return{unaryFilter:{field:Rn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rn(e.field),op:yb(e.op),value:e.value}}}(t):t instanceof lt?function(e){const n=e.getFilters().map(s=>zd(s));return n.length===1?n[0]:{compositeFilter:{op:vb(e.op),filters:n}}}(t):P()}function wb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n,s,r,i=U.min(),o=U.min(),a=$e.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.se=e}}function bb(t){const e=pb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ra(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.He=new Ib}addToCollectionParentIndex(e,n){return this.He.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Kt.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class Ib{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new we(ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new we(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Yn(0)}static bn(){return new Yn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.changes=new as(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Is(s.mutation,r,Qe.empty(),ve.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,G()).next(()=>s))}getLocalViewOfDocuments(e,n,s=G()){const r=fn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=gs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=fn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,G()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=kt();const o=Ts(),a=Ts();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Xt)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Is(u.mutation,l,u.mutation.getFieldMask(),ve.now())):o.set(l.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new Cb(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ts();let r=new be((o,a)=>o-a),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Qe.empty();u=a.applyToLocalView(l,u),s.set(c,u);const f=(r.get(a.batchId)||G()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=xd();u.forEach(p=>{if(!i.has(p)){const g=Pd(n.get(p),s.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_d(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(fn());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,G())).next(u=>({batchId:a,changes:Dd(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(s=>{let r=gs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=gs();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new os(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Re.newInvalidDocument(l)))});let o=gs();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Is(l.mutation,c,Qe.empty(),ve.now()),Oi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:wt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:bb(s.bundledQuery),readTime:wt(s.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this.overlays=new be(O.comparator),this.ts=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=fn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=fn(),i=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=fn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=fn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ZE(n,s));let i=this.ts.get(n);i===void 0&&(i=G(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.es=new we(Ie.ns),this.ss=new we(Ie.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new Ie(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new Ie(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new O(new ie([])),s=new Ie(n,e),r=new Ie(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new O(new ie([])),s=new Ie(n,e),r=new Ie(n,e+1);let i=G();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ie(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ie{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return O.comparator(e.key,n.key)||J(e.ds,n.ds)}static rs(e,n){return J(e.ds,n.ds)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new we(Ie.ns)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JE(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new Ie(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ie(n,0),r=new Ie(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new we(J);return n.forEach(r=>{const i=new Ie(r,0),o=new Ie(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),T.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;O.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new O(i),0);let a=new we(J);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),T.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){oe(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return T.forEach(n.mutations,r=>{const i=new Ie(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new Ie(n,0),r=this._s.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.Ts=e,this.docs=new be(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let s=kt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Re.newInvalidDocument(r))}),T.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=kt();const o=n.path,a=new O(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||wE(vE(u),s)<=0||(r.has(u.key)||Oi(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,s,r){P()}Es(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Rb(this)}getSize(e){return T.resolve(this.size)}}class Rb extends _b{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.persistence=e,this.As=new as(n=>uc(n),hc),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Rs=0,this.vs=new vc,this.targetCount=0,this.bs=Yn.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),T.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Yn(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Sn(n),T.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new cc(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new kb(this),this.indexManager=new Tb,this.remoteDocumentCache=function(s){return new Nb(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Eb(n),this.xs=new Sb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Db,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new xb(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){R("MemoryPersistence","Starting transaction:",e);const r=new Mb(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return T.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class Mb extends bE{constructor(e){super(),this.currentSequenceNumber=e}}class wc{constructor(e){this.persistence=e,this.$s=new vc,this.Ms=null}static Fs(e){return new wc(e)}get Bs(){if(this.Ms)return this.Ms;throw P()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),T.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Bs,s=>{const r=O.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,U.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return T.or([()=>T.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=G(),r=G();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ec(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(lu(n))return T.resolve(null);let s=Rt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ra(n,null,"F"),s=Rt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=G(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,ra(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,r){return lu(n)||r.isEqual(U.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(Zl()<=X.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ia(n)),this.Fi(e,o,n,yE(r,-1)))})}$i(e,n){let s=new we(Ad(e));return n.forEach((r,i)=>{Oi(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return Zl()<=X.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",ia(n)),this.xi.getDocumentsMatchingQuery(e,n,Kt.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new be(J),this.qi=new as(i=>uc(i),hc),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ab(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function Pb(t,e,n,s){return new Fb(t,e,n,s)}async function Wd(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=G();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function $b(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let p=T.resolve();return f.forEach(g=>{p=p.next(()=>l.getEntry(a,g)).next(A=>{const b=c.docVersions.get(g);oe(b!==null),A.version.compareTo(b)<0&&(u.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),l.addEntry(A)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=G();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Qd(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function Vb(t,e){const n=q(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,f)=>{const p=r.get(f);if(!p)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken($e.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(f,g),function(A,b,k){return A.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(p,g,u)&&a.push(n.Ds.updateTargetData(i,g))});let c=kt(),l=G();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Ub(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(U.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(f=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=r,i))}function Ub(t,e,n){let s=G(),r=G();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=kt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(U.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function Bb(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function jb(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new vn(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function la(t,e,n){const s=q(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Zs(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function vu(t,e,n){const s=q(t);let r=U.min(),i=G();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=q(a),f=u.qi.get(l);return f!==void 0?T.resolve(u.Li.get(f)):u.Ds.getTargetData(c,l)}(s,o,Rt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:U.min(),n?i:G())).next(a=>(qb(s,$E(e),a),{documents:a,Wi:i})))}function qb(t,e,n){let s=t.Ui.get(e)||U.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class wu{constructor(){this.activeTargetIds=Nd()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hb{constructor(){this.Br=new wu,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new wu,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er=null;function wo(){return Er===null?Er=268435456+Math.round(2147483648*Math.random()):Er++,"0x"+Er.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="WebChannelConnection";class Wb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=wo(),a=this.ao(e,n);R("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(l=>(R("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Gr("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+is,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=zb[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=wo();return new Promise((o,a)=>{const c=new aE;c.setWithCredentials(!0),c.listenOnce(rE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case yo.NO_ERROR:const u=c.getResponseJson();R(De,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case yo.TIMEOUT:R(De,`RPC '${e}' ${i} timed out`),a(new D(y.DEADLINE_EXCEEDED,"Request time out"));break;case yo.HTTP_ERROR:const f=c.getStatus();if(R(De,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const A=function(b){const k=b.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(k)>=0?k:y.UNKNOWN}(g.status);a(new D(A,g.message))}else a(new D(y.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new D(y.UNAVAILABLE,"Connection failed."));break;default:P()}}finally{R(De,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);R(De,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}wo(e,n,s){const r=wo(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nE(),a=sE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new oE({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");R(De,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let f=!1,p=!1;const g=new Gb({Wr:b=>{p?R(De,`Not sending because RPC '${e}' stream ${r} is closed:`,b):(f||(R(De,`Opening RPC '${e}' stream ${r} transport.`),u.open(),f=!0),R(De,`RPC '${e}' stream ${r} sending:`,b),u.send(b))},Hr:()=>u.close()}),A=(b,k,j)=>{b.listen(k,te=>{try{j(te)}catch(F){setTimeout(()=>{throw F},0)}})};return A(u,mr.EventType.OPEN,()=>{p||R(De,`RPC '${e}' stream ${r} transport opened.`)}),A(u,mr.EventType.CLOSE,()=>{p||(p=!0,R(De,`RPC '${e}' stream ${r} transport closed`),g.so())}),A(u,mr.EventType.ERROR,b=>{p||(p=!0,Gr(De,`RPC '${e}' stream ${r} transport errored:`,b),g.so(new D(y.UNAVAILABLE,"The operation could not be completed")))}),A(u,mr.EventType.MESSAGE,b=>{var k;if(!p){const j=b.data[0];oe(!!j);const te=j,F=te.error||((k=te[0])===null||k===void 0?void 0:k.error);if(F){R(De,`RPC '${e}' stream ${r} received error:`,F);const Z=F.status;let le=function(ut){const H=pe[ut];if(H!==void 0)return Vd(H)}(Z),bt=F.message;le===void 0&&(le=y.INTERNAL,bt="Unknown error status: "+Z+" with message "+F.message),p=!0,g.so(new D(le,bt)),u.close()}else R(De,`RPC '${e}' stream ${r} received:`,j),g.io(j)}}),A(a,iE.STAT_EVENT,b=>{b.stat===Xl.PROXY?R(De,`RPC '${e}' stream ${r} detected buffering proxy`):b.stat===Xl.NOPROXY&&R(De,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function Eo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){return new ob(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&R("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Yd(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===y.RESOURCE_EXHAUSTED?(Nt(n.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new D(y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qb extends Xd{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=lb(this.serializer,e),s=function(r){if(!("targetChange"in r))return U.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?U.min():i.readTime?wt(i.readTime):U.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=ca(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=na(a)?{documents:fb(r,a)}:{query:db(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=jd(r,i.resumeToken):i.snapshotVersion.compareTo(U.min())>0&&(o.readTime=Jr(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=gb(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=ca(this.serializer),n.removeTarget=e,this.Fo(n)}}class Yb extends Xd{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=hb(e.writeResults,e.commitTime),s=wt(e.commitTime);return this.listener.Zo(s,n)}return oe(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=ca(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ub(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new D(y.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(y.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(y.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class Jb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Nt(n),this.ru=!1):R("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{An(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=q(a);c.du.add(4),await nr(c),c.mu.set("Unknown"),c.du.delete(4),await $i(c)}(this))})}),this.mu=new Jb(s,r)}}async function $i(t){if(An(t))for(const e of t.wu)await e(!0)}async function nr(t){for(const e of t.wu)await e(!1)}function Jd(t,e){const n=q(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Ic(n)?Tc(n):cs(n).No()&&bc(n,e))}function Zd(t,e){const n=q(t),s=cs(n);n.fu.delete(e),s.No()&&ep(n,e),n.fu.size===0&&(s.No()?s.$o():An(n)&&n.mu.set("Unknown"))}function bc(t,e){t.gu.Ot(e.targetId),cs(t).jo(e)}function ep(t,e){t.gu.Ot(e),cs(t).Wo(e)}function Tc(t){t.gu=new nb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),cs(t).start(),t.mu.ou()}function Ic(t){return An(t)&&!cs(t).xo()&&t.fu.size>0}function An(t){return q(t).du.size===0}function tp(t){t.gu=void 0}async function eT(t){t.fu.forEach((e,n)=>{bc(t,e)})}async function tT(t,e){tp(t),Ic(t)?(t.mu.au(e),Tc(t)):t.mu.set("Unknown")}async function nT(t,e,n){if(t.mu.set("Online"),e instanceof Bd&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Zr(t,s)}else if(e instanceof Dr?t.gu.Kt(e):e instanceof Ud?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(U.min()))try{const s=await Qd(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken($e.EMPTY_BYTE_STRING,c.snapshotVersion)),ep(r,a);const l=new vn(c.target,a,1,c.sequenceNumber);bc(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){R("RemoteStore","Failed to raise snapshot:",s),await Zr(t,s)}}async function Zr(t,e,n){if(!Zs(e))throw e;t.du.add(1),await nr(t),t.mu.set("Offline"),n||(n=()=>Qd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await $i(t)})}function np(t,e){return e().catch(n=>Zr(t,n,e))}async function Vi(t){const e=q(t),n=Gt(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;sT(e);)try{const r=await Bb(e.localStore,s);if(r===null){e.lu.length===0&&n.$o();break}s=r.batchId,rT(e,r)}catch(r){await Zr(e,r)}sp(e)&&rp(e)}function sT(t){return An(t)&&t.lu.length<10}function rT(t,e){t.lu.push(e);const n=Gt(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function sp(t){return An(t)&&!Gt(t).xo()&&t.lu.length>0}function rp(t){Gt(t).start()}async function iT(t){Gt(t).tu()}async function oT(t){const e=Gt(t);for(const n of t.lu)e.Yo(n.mutations)}async function aT(t,e,n){const s=t.lu.shift(),r=gc.from(s,e,n);await np(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Vi(t)}async function cT(t,e){e&&Gt(t).Jo&&await async function(n,s){if(r=s.code,tb(r)&&r!==y.ABORTED){const i=n.lu.shift();Gt(n).Oo(),await np(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Vi(n)}var r}(t,e),sp(t)&&rp(t)}async function bu(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const s=An(n);n.du.add(3),await nr(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await $i(n)}async function lT(t,e){const n=q(t);e?(n.du.delete(2),await $i(n)):e||(n.du.add(2),await nr(n),n.mu.set("Unknown"))}function cs(t){return t.yu||(t.yu=function(e,n,s){const r=q(e);return r.nu(),new Qb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:eT.bind(null,t),Zr:tT.bind(null,t),zo:nT.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Ic(t)?Tc(t):t.mu.set("Unknown")):(await t.yu.stop(),tp(t))})),t.yu}function Gt(t){return t.pu||(t.pu=function(e,n,s){const r=q(e);return r.nu(),new Yb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:iT.bind(null,t),Zr:cT.bind(null,t),Xo:oT.bind(null,t),Zo:aT.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Vi(t)):(await t.pu.stop(),t.lu.length>0&&(R("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new _c(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cc(t,e){if(Nt("AsyncQueue",`${e}: ${t}`),Zs(t))return new D(y.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||O.comparator(n.key,s.key):(n,s)=>O.comparator(n.key,s.key),this.keyedMap=gs(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new Bn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Bn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.Iu=new be(O.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):P():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Xn{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xn(e,n,Bn.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ki(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(){this.Eu=void 0,this.listeners=[]}}class hT{constructor(){this.queries=new as(e=>Cd(e),ki),this.onlineState="Unknown",this.Au=new Set}}async function fT(t,e){const n=q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new uT),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Cc(o,`Initialization of query '${ia(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&Ac(n)}async function dT(t,e){const n=q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function pT(t,e){const n=q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&Ac(n)}function gT(t,e,n){const s=q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ac(t){t.Au.forEach(e=>{e.next()})}class mT{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Xn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Xn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.key=e}}class op{constructor(e){this.key=e}}class yT{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=G(),this.mutatedKeys=G(),this.Ku=Ad(e),this.Gu=new Bn(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Tu,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const p=r.get(u),g=Oi(this.query,f)?f:null,A=!!p&&this.mutatedKeys.has(p.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;p&&g?p.data.isEqual(g.data)?A!==b&&(s.track({type:3,doc:g}),k=!0):this.Wu(p,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.Ku(g,c)>0||l&&this.Ku(g,l)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),k=!0):p&&!g&&(s.track({type:1,doc:p}),k=!0,(c||l)&&(a=!0)),k&&(g?(o=o.add(g),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(f,p){const g=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return P()}};return g(f)-g(p)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Xn(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Tu,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=G(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new op(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new ip(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=G();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Xn.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class vT{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class wT{constructor(e){this.key=e,this.ec=!1}}class ET{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new as(a=>Cd(a),ki),this.ic=new Map,this.rc=new Set,this.oc=new be(O.comparator),this.uc=new Map,this.cc=new vc,this.ac={},this.hc=new Map,this.lc=Yn.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function bT(t,e){const n=RT(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await jb(n.localStore,Rt(e));n.isPrimaryClient&&Jd(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await TT(n,e,s,a==="current",o.resumeToken)}return r}async function TT(t,e,n,s,r){t.dc=(f,p,g)=>async function(A,b,k,j){let te=b.view.zu(k);te.Mi&&(te=await vu(A.localStore,b.query,!1).then(({documents:le})=>b.view.zu(le,te)));const F=j&&j.targetChanges.get(b.targetId),Z=b.view.applyChanges(te,A.isPrimaryClient,F);return _u(A,b.targetId,Z.Yu),Z.snapshot}(t,f,p,g);const i=await vu(t.localStore,e,!0),o=new yT(e,i.Wi),a=o.zu(i.documents),c=tr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);_u(t,n,l.Yu);const u=new vT(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function IT(t,e){const n=q(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!ki(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await la(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Zd(n.remoteStore,s.targetId),ua(n,s.targetId)}).catch(Js)):(ua(n,s.targetId),await la(n.localStore,s.targetId,!0))}async function _T(t,e,n){const s=kT(t);try{const r=await function(i,o){const a=q(i),c=ve.now(),l=o.reduce((p,g)=>p.add(g.key),G());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=kt(),A=G();return a.Ki.getEntries(p,l).next(b=>{g=b,g.forEach((k,j)=>{j.isValidDocument()||(A=A.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(b=>{u=b;const k=[];for(const j of o){const te=YE(j,u.get(j.key).overlayedDocument);te!=null&&k.push(new Xt(j.key,te,yd(te.value.mapValue),ct.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,k,o)}).next(b=>{f=b;const k=b.applyToLocalDocumentSet(u,A);return a.documentOverlayCache.saveOverlays(p,b.batchId,k)})}).then(()=>({batchId:f.batchId,changes:Dd(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new be(J)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await sr(s,r.changes),await Vi(s.remoteStore)}catch(r){const i=Cc(r,"Failed to persist write");n.reject(i)}}async function ap(t,e){const n=q(t);try{const s=await Vb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(oe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?oe(o.ec):r.removedDocuments.size>0&&(oe(o.ec),o.ec=!1))}),await sr(n,s,e)}catch(s){await Js(s)}}function Iu(t,e,n){const s=q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=q(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.Ru(o)&&(c=!0)}),c&&Ac(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function CT(t,e,n){const s=q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new be(O.comparator);o=o.insert(i,Re.newNoDocument(i,U.min()));const a=G().add(i),c=new Fi(U.min(),new Map,new we(J),o,a);await ap(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Sc(s)}else await la(s.localStore,e,!1).then(()=>ua(s,e,n)).catch(Js)}async function AT(t,e){const n=q(t),s=e.batch.batchId;try{const r=await $b(n.localStore,e);lp(n,s,null),cp(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await sr(n,r)}catch(r){await Js(r)}}async function ST(t,e,n){const s=q(t);try{const r=await function(i,o){const a=q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(oe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);lp(s,e,n),cp(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await sr(s,r)}catch(r){await Js(r)}}function cp(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function lp(t,e,n){const s=q(t);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function ua(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||up(t,s)})}function up(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Zd(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Sc(t))}function _u(t,e,n){for(const s of n)s instanceof ip?(t.cc.addReference(s.key,e),DT(t,s)):s instanceof op?(R("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||up(t,s.key)):P()}function DT(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(R("SyncEngine","New document in limbo: "+n),t.rc.add(s),Sc(t))}function Sc(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new O(ie.fromString(e)),s=t.lc.next();t.uc.set(s,new wT(n)),t.oc=t.oc.insert(n,s),Jd(t.remoteStore,new vn(Rt(fc(n.path)),s,2,cc.ct))}}async function sr(t,e,n){const s=q(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Ec.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const l=q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,f=>T.forEach(f.Vi,p=>l.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>T.forEach(f.Si,p=>l.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!Zs(u))throw u;R("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const p=l.Li.get(f),g=p.snapshotVersion,A=p.withLastLimboFreeSnapshotVersion(g);l.Li=l.Li.insert(f,A)}}}(s.localStore,i))}async function xT(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const s=await Wd(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new D(y.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await sr(n,s.Qi)}}function NT(t,e){const n=q(t),s=n.uc.get(e);if(s&&s.ec)return G().add(s.key);{let r=G();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function RT(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ap.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CT.bind(null,e),e.nc.zo=pT.bind(null,e.eventManager),e.nc.wc=gT.bind(null,e.eventManager),e}function kT(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ST.bind(null,e),e}class Cu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Pb(this.persistence,new Lb,e.initialUser,this.serializer)}createPersistence(e){return new Ob(wc.Fs,this.serializer)}createSharedClientState(e){return new Hb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class OT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Iu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xT.bind(null,this.syncEngine),await lT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hT}createDatastore(e){const n=Pi(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Wb(r));var r;return function(i,o,a,c){return new Xb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Iu(this.syncEngine,a,0),o=Eu.D()?new Eu:new Kb,new Zb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new ET(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);R("RemoteStore","RemoteStore shutting down."),n.du.add(5),await nr(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Nt("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ne.UNAUTHENTICATED,this.clientId=dd.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Cc(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function bo(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Wd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Au(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PT(t);R("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>bu(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>bu(e.remoteStore,i)),t._onlineComponents=e}function FT(t){return t.name==="FirebaseError"?t.code===y.FAILED_PRECONDITION||t.code===y.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function PT(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await bo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!FT(n))throw n;Gr("Error using user provided cache. Falling back to memory cache: "+n),await bo(t,new Cu)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await bo(t,new Cu);return t._offlineComponents}async function hp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await Au(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await Au(t,new OT))),t._onlineComponents}function $T(t){return hp(t).then(e=>e.syncEngine)}async function Su(t){const e=await hp(t),n=e.eventManager;return n.onListen=bT.bind(null,e.syncEngine),n.onUnlisten=IT.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t,e,n){if(!n)throw new D(y.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VT(t,e,n,s){if(e===!0&&s===!0)throw new D(y.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xu(t){if(!O.isDocumentKey(t))throw new D(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nu(t){if(O.isDocumentKey(t))throw new D(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ui(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":P()}function Ut(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ui(t);throw new D(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,VT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ru({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ru(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new cE;switch(n.type){case"firstParty":return new fE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Du.get(e);n&&(R("ComponentProvider","Removing Datastore"),Du.delete(e),n.terminate())}(this),Promise.resolve()}}function UT(t,e,n,s={}){var r;const i=(t=Ut(t,Bi))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Gr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ne.MOCK_USER;else{o=_y(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new D(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ne(c)}t._authCredentials=new lE(new fd(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class Sn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Sn(this.firestore,e,this._query)}}class Bt extends Sn{constructor(e,n,s){super(e,n,fc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new O(e))}withConverter(e){return new Bt(this.firestore,e,this._path)}}function BT(t,e,...n){if(t=tt(t),fp("collection","path",e),t instanceof Bi){const s=ie.fromString(e,...n);return Nu(s),new Bt(t,null,s)}{if(!(t instanceof Ke||t instanceof Bt))throw new D(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ie.fromString(e,...n));return Nu(s),new Bt(t.firestore,null,s)}}function ha(t,e,...n){if(t=tt(t),arguments.length===1&&(e=dd.A()),fp("doc","path",e),t instanceof Bi){const s=ie.fromString(e,...n);return xu(s),new Ke(t,null,new O(s))}{if(!(t instanceof Ke||t instanceof Bt))throw new D(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ie.fromString(e,...n));return xu(s),new Ke(t.firestore,t instanceof Bt?t.converter:null,new O(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Yd(this,"async_queue_retry"),this.qc=()=>{const n=Eo();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Eo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Eo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new yn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Zs(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Nt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=_c.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&P()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function ku(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Jn extends Bi{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new jT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pp(this),this._firestoreClient.terminate()}}function qT(t,e){const n=typeof t=="object"?t:$h(),s=typeof t=="string"?t:e||"(default)",r=js(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=by("firestore");i&&UT(r,...i)}return r}function dp(t){return t._firestoreClient||pp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pp(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new CE(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new LT(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zn($e.fromBase64String(e))}catch(n){throw new D(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zn($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=/^__.*__$/;class KT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Xt(e,this.data,this.fieldMask,n,this.fieldTransforms):new er(e,this.data,n,this.fieldTransforms)}}class gp{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Xt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw P()}}class Nc{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Nc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ei(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(mp(this.Yc)&&HT.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class zT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Pi(e)}ua(e,n,s,r=!1){return new Nc({Yc:e,methodName:n,oa:s,path:Oe.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rc(t){const e=t._freezeSettings(),n=Pi(t._databaseId);return new zT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GT(t,e,n,s,r,i={}){const o=t.ua(i.merge||i.mergeFields?2:0,e,n,r);kc("Data must be an object, but it was:",o,s);const a=yp(s,o);let c,l;if(i.merge)c=new Qe(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=fa(e,f,n);if(!o.contains(p))throw new D(y.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);wp(u,p)||u.push(p)}c=new Qe(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new KT(new qe(a),c,l)}class qi extends Dc{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qi}}function WT(t,e,n,s){const r=t.ua(1,e,n);kc("Data must be an object, but it was:",r,s);const i=[],o=qe.empty();Cn(s,(c,l)=>{const u=Oc(e,c,n);l=tt(l);const f=r.na(u);if(l instanceof qi)i.push(u);else{const p=rr(l,f);p!=null&&(i.push(u),o.set(u,p))}});const a=new Qe(i);return new gp(o,a,r.fieldTransforms)}function QT(t,e,n,s,r,i){const o=t.ua(1,e,n),a=[fa(e,s,n)],c=[r];if(i.length%2!=0)throw new D(y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(fa(e,i[p])),c.push(i[p+1]);const l=[],u=qe.empty();for(let p=a.length-1;p>=0;--p)if(!wp(l,a[p])){const g=a[p];let A=c[p];A=tt(A);const b=o.na(g);if(A instanceof qi)l.push(g);else{const k=rr(A,b);k!=null&&(l.push(g),u.set(g,k))}}const f=new Qe(l);return new gp(u,f,o.fieldTransforms)}function YT(t,e,n,s=!1){return rr(n,t.ua(s?4:3,e))}function rr(t,e){if(vp(t=tt(t)))return kc("Unsupported field value:",e,t),yp(t,e);if(t instanceof Dc)return function(n,s){if(!mp(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=rr(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=tt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return HE(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ve.fromDate(n);return{timestampValue:Jr(s.serializer,r)}}if(n instanceof ve){const r=new ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Jr(s.serializer,r)}}if(n instanceof xc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Zn)return{bytesValue:jd(s.serializer,n._byteString)};if(n instanceof Ke){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:yc(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${Ui(n)}`)}(t,e)}function yp(t,e){const n={};return pd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cn(t,(s,r)=>{const i=rr(r,e.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function vp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof xc||t instanceof Zn||t instanceof Ke||t instanceof Dc)}function kc(t,e,n){if(!vp(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ui(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function fa(t,e,n){if((e=tt(e))instanceof ji)return e._internalPath;if(typeof e=="string")return Oc(t,e);throw ei("Field path arguments must be of type string or ",t,!1,void 0,n)}const XT=new RegExp("[~\\*/\\[\\]]");function Oc(t,e,n){if(e.search(XT)>=0)throw ei(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ji(...e.split("."))._internalPath}catch{throw ei(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ei(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new D(y.INVALID_ARGUMENT,a+t+c)}function wp(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Mc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JT extends Ep{data(){return super.data()}}function Mc(t,e){return typeof e=="string"?Oc(t,e):e instanceof ji?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lc{}class bp extends Lc{}function eI(t,e,...n){let s=[];e instanceof Lc&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Pc).length,o=r.filter(a=>a instanceof Fc).length;if(i>1||i>0&&o>0)throw new D(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Fc extends bp{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Fc(e,n,s)}_apply(e){const n=this._parse(e);return Tp(e._query,n),new Sn(e.firestore,e.converter,sa(e._query,n))}_parse(e){const n=Rc(e.firestore);return function(r,i,o,a,c,l,u){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new D(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Mu(u,l);const p=[];for(const g of u)p.push(Ou(a,r,g));f={arrayValue:{values:p}}}else f=Ou(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Mu(u,l),f=YT(o,i,u,l==="in"||l==="not-in");return ye.create(c,l,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Pc extends Lc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pc(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:lt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Tp(i,a),i=sa(i,a)}(e._query,n),new Sn(e.firestore,e.converter,sa(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $c extends bp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $c(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new D(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Vn(r,i);return function(a,c){if(dc(a)===null){const l=Ri(a);l!==null&&Ip(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Sn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new os(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function tI(t,e="asc"){const n=e,s=Mc("orderBy",t);return $c._create(s,n)}function Ou(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new D(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_d(e)&&n.indexOf("/")!==-1)throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ie.fromString(n));if(!O.isDocumentKey(s))throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return su(t,new O(s))}if(n instanceof Ke)return su(t,n._key);throw new D(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ui(n)}.`)}function Mu(t,e){if(!Array.isArray(t)||t.length===0)throw new D(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Tp(t,e){if(e.isInequality()){const s=Ri(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new D(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=dc(t);i!==null&&Ip(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Ip(t,e,n){if(!n.isEqual(e))throw new D(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class nI{convertValue(e,n="none"){switch(In(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw P()}}convertObject(e,n){const s={};return Cn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new xc(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=md(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ps(e));default:return null}}convertTimestamp(e){const n=zt(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ie.fromString(e);oe(Gd(s));const r=new $s(s.get(1),s.get(3)),i=new O(s.popFirst(5));return r.isEqual(n)||Nt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _p extends Ep{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Mc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class xr extends _p{data(e={}){return super.data(e)}}class rI{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ms(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new xr(this._firestore,this._userDataWriter,s.key,s,new ms(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new xr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ms(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new xr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ms(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:iI(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return P()}}class Cp extends nI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function oI(t,e,n,...s){t=Ut(t,Ke);const r=Ut(t.firestore,Jn),i=Rc(r);let o;return o=typeof(e=tt(e))=="string"||e instanceof ji?QT(i,"updateDoc",t._key,e,n,s):WT(i,"updateDoc",t._key,e),Vc(r,[o.toMutation(t._key,ct.exists(!0))])}function aI(t){return Vc(Ut(t.firestore,Jn),[new pc(t._key,ct.none())])}function cI(t,e){const n=Ut(t.firestore,Jn),s=ha(t),r=sI(t.converter,e);return Vc(n,[GT(Rc(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,ct.exists(!1))]).then(()=>s)}function lI(t,...e){var n,s,r;t=tt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ku(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ku(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,l,u;if(t instanceof Ke)l=Ut(t.firestore,Jn),u=fc(t._key.path),c={next:f=>{e[o]&&e[o](uI(l,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Ut(t,Sn);l=Ut(f.firestore,Jn),u=f._query;const p=new Cp(l);c={next:g=>{e[o]&&e[o](new rI(l,p,f,g))},error:e[o+1],complete:e[o+2]},ZT(t._query)}return function(f,p,g,A){const b=new MT(A),k=new mT(p,b,g);return f.asyncQueue.enqueueAndForget(async()=>fT(await Su(f),k)),()=>{b.yc(),f.asyncQueue.enqueueAndForget(async()=>dT(await Su(f),k))}}(dp(l),u,a,c)}function Vc(t,e){return function(n,s){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>_T(await $T(n),s,r)),r.promise}(dp(t),e)}function uI(t,e,n){const s=n.docs.get(e._key),r=new Cp(t);return new _p(t,r,e._key,s,new ms(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){is=n})(xv),Ht(new Dt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Jn(new uE(n.getProvider("auth-internal")),new pE(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $s(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),vt(Jl,"3.10.0",t),vt(Jl,"3.10.0","esm2017")})();const hI={apiKey:"AIzaSyBYcA-7gdkgx57nXwXRLlAitJzbAj7yg1Y",authDomain:"vue-todos-fd858.firebaseapp.com",projectId:"vue-todos-fd858",storageBucket:"vue-todos-fd858.appspot.com",messagingSenderId:"67635877692",appId:"1:67635877692:web:fff877cfed44dfc2fe7039",measurementId:"G-VTH60YY61C"},Ap=Ph(hI);n0(Ap);const fI=qT(Ap);const dI={class:"wrapper-todo"},pI=xe("div",{class:"title has-text-centered"},"My Todo List",-1),gI=["onSubmit"],mI={class:"field is-grouped mb-5"},yI={class:"control is-expanded"},vI={class:"control"},wI=["disabled"],EI={class:"card-content"},bI={class:"content"},TI={class:"columns is-mobile is-vcentered"},II={class:"column is-5 has-text-right"},_I=["onClick"],CI=["onClick"],AI={__name:"App",setup(t){const e=el(""),n=el([]),s=BT(fI,"Todos"),r=eI(s,tI("date","desc")),i=async()=>{const c={content:e.value,done:!1,date:Date.now()},l=await cI(s,c);console.log("Document written with ID: ",l.id),e.value=""},o=async c=>{await aI(ha(s,c))},a=c=>{const l=ha(s,c);n.value.forEach(u=>{u.id===c&&oI(l,{done:!u.done})})};return xa(()=>{lI(r,c=>{const l=[];c.forEach(u=>{const f={id:u.id,content:u.data().content,done:u.data().done};l.push(f)}),n.value=l})}),(c,l)=>(Ji(),Zi("div",dI,[pI,xe("form",{onSubmit:ay(i,["prevent"])},[xe("div",mI,[xe("p",yI,[em(xe("input",{class:"input","onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u),type:"text",placeholder:"Add a todo"},null,512),[[ry,e.value]])]),xe("p",vI,[xe("button",{disabled:!e.value,class:"button is-info"}," Add ",8,wI)])])],40,gI),(Ji(!0),Zi(rt,null,nm(n.value,u=>(Ji(),Zi("div",{class:Mn(["card mb-3",{"has-background-success-light":u.done}]),key:u.id},[xe("div",EI,[xe("div",bI,[xe("div",TI,[xe("div",{class:Mn(["column",{"has-text-success line-through":u.done}])},Lp(u.content),3),xe("div",II,[xe("button",{class:Mn(["button is-light",u.done?"is-success":"is-lighth"]),onClick:f=>a(u.id)},"✓",10,_I),xe("button",{class:"button is-danger ml-1",onClick:f=>o(u.id)},"✗",8,CI)])])])])],2))),128))]))}},SI=uy(AI);SI.mount("#app");
