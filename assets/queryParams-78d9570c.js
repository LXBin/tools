import{i as g,a as O,bc as P,b as v,b3 as m,E as b,n as w,q as d}from"./index-f8ba620c.js";function S(r){return typeof r=="function"?r():g(r)}var j=Object.defineProperty,q=Object.defineProperties,x=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,_=(r,e,t)=>e in r?j(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))N.call(e,t)&&_(r,t,e[t]);if(l)for(var t of l(e))R.call(e,t)&&_(r,t,e[t]);return r},h=(r,e)=>q(r,x(e));let f={};function Q(r,e,t={}){const{mode:n="replace",route:u=O(),router:s=P(),transform:y=o=>o}=t;return v({get(){var o;const a=(o=u.query[r])!=null?o:e;return y(a)},set(o){f[r]=o===e||o===null?void 0:o,m(()=>{s[S(n)](h(c({},u),{query:c(c({},u.query),f)})),m(()=>f={})})}})}const p={number:{fromQuery:r=>Number(r),toQuery:r=>String(r)},string:{fromQuery:r=>r,toQuery:r=>r},boolean:{fromQuery:r=>r.toLowerCase()==="true",toQuery:r=>r?"true":"false"},object:{fromQuery:r=>JSON.parse(r),toQuery:r=>JSON.stringify(r)}};function E({name:r,defaultValue:e}){const n=p[typeof e]??p.string,u=Q(r,n.toQuery(e));return v({get(){return n.fromQuery(u.value)},set(s){u.value=n.toQuery(s)}})}function I({name:r,storageName:e,defaultValue:t}){const u=p[typeof t]??p.string,s=b(e,t),y=u.toQuery(t),o=Q(r,y),a=w(t);return d(a,i=>{o.value=u.toQuery(i),s.value=i},{deep:!0}),a.value=o.value&&o.value!==y?u.fromQuery(o.value):s.value,a}export{E as a,I as u};
