import{a2 as u,J as i,av as d,l as f,ay as l}from"./index.b6080610.js";let a=[];const r=new WeakMap;function c(){a.forEach(e=>e(...r.get(e))),a=[]}function p(e,...n){r.set(e,n),!a.includes(e)&&a.push(e)===1&&requestAnimationFrame(c)}let t,o;const m=()=>{var e,n;t=d?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,o=!1,t!==void 0?t.then(()=>{o=!0}):o=!0};m();function h(e){if(o)return;let n=!1;u(()=>{o||t==null||t.then(()=>{n||e()})}),i(()=>{n=!0})}function y(e,n){return f(()=>{for(const s of n)if(e[s]!==void 0)return e[s];return e[n[n.length-1]]})}const{c:C}=l(),F="vueuc-style";export{F as a,p as b,C as c,h as o,y as u};
