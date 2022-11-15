// ==UserScript==
// @name        github-explorer-fixes
// @version     0.0.1
// @license     MIT
// @homepage    https://crashmax-dev.github.io/github-explorer-fixes/
// @match       *://github.com/*
// @updateURL   https://crashmax-dev.github.io/github-explorer-fixes/github-explorer-fixes.meta.js
// @downloadURL https://crashmax-dev.github.io/github-explorer-fixes/github-explorer-fixes.user.js
// ==/UserScript==

var p=(e,i,a)=>{if(!i.has(e))throw TypeError("Cannot "+a)},d=(e,i,a)=>(p(e,i,"read from private field"),a?a.call(e):i.get(e)),f=(e,i,a)=>{if(i.has(e))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(e):i.set(e,a)},m=(e,i,a,h)=>(p(e,i,"write to private field"),h?h.call(e,a):i.set(e,a),a);(function(){var e;async function i(){return new Promise(o=>{document.readyState=="loading"?document.addEventListener("DOMContentLoaded",()=>o(),{once:!0}):o()})}function a(o,t,n){const s=new MutationObserver((r,c)=>{for(const L of r)t(L,c)});return s.observe(o,{childList:!0,subtree:!0,...n}),s}function h(o,t=document.documentElement){return new Promise(n=>{function s(){const r=t.querySelector(o);r&&n(r)}a(t,(r,c)=>{s(),c.disconnect()})})}class u{constructor(){f(this,e,{})}on(t,n){const s=d(this,e)[t];return s?s.push(n):d(this,e)[t]=[n],this}addListener(t,n){return this.on(t,n)}once(t,n){const s=(...r)=>{this.off(t,s),n(...r)};return this.on(t,s),this}emit(t,...n){const s=d(this,e)[t]||[];for(let r=0;r<s.length;r++)s[r](...n);return Boolean(s.length)}off(t,n){return d(this,e)[t]&&(d(this,e)[t]=d(this,e)[t].filter(s=>s!==n)),this}removeListener(t,n){return this.off(t,n)}removeAllListeners(t){return t?delete d(this,e)[t]:m(this,e,{}),this}eventNames(){return Reflect.ownKeys(d(this,e))}listeners(t){return d(this,e)[t]}listenerCount(t){var n,s;return(s=(n=d(this,e)[t])==null?void 0:n.length)!=null?s:0}}e=new WeakMap;class v extends u{constructor(){super();const{history:t,location:n}=window,{pushState:s,replaceState:r}=t;t.pushState=(...c)=>{s.apply(t,c),this.emit("pushState",n,c[0])},t.replaceState=(...c)=>{r.apply(t,c),this.emit("replaceState",n,c[0])},window.addEventListener("popstate",({state:c})=>{this.emit("popState",n,c)})}}new v;const l=`gh-patches_${Math.random().toString(16).slice(2)}`;function w(o){const t=o.classList.contains(l);return t||o.classList.add(l),t}async function y(o){a(o,t=>{for(const n of t.addedNodes){const s=n,r=s.querySelector("a.Link--primary");if(r){if(w(r))return;s.addEventListener("click",()=>r.click(),{once:!0})}}})}async function S(){const o=await h('react-app[app-name="repos"].loaded');y(o)}i().then(()=>S())})();
