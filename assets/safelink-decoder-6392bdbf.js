import{d as _,n as c,b as m,o as d,f,k as o,i as a,x as k,w as v,y as w}from"./index-f8ba620c.js";import{T as L}from"./TextareaCopyable-fdc2016d.js";import{_ as U}from"./Divider-d68a87f8.js";import{_ as x}from"./FormItem-8bd67ff7.js";import"./Copy-c7a01897.js";import"./Scrollbar-a11f7803.js";import"./use-form-item-bb159e87.js";function S(t){if(!t.match(/\.safelinks\.protection\.outlook\.com/))throw new Error("Invalid SafeLinks URL provided");return new URL(t).searchParams.get("url")}const B=_({__name:"safelink-decoder",setup(t){const e=c(""),u=m(()=>{try{return S(e.value)}catch(n){return n.toString()}});return(n,r)=>{const l=w,i=U,p=x;return d(),f("div",null,[o(l,{value:a(e),"onUpdate:value":r[0]||(r[0]=s=>k(e)?e.value=s:null),"raw-text":"",placeholder:"Your input Outlook SafeLink Url...",autofocus:"",label:"Your input Outlook SafeLink Url:"},null,8,["value"]),o(i),o(p,{label:"Output decoded URL:"},{default:v(()=>[o(L,{value:a(u),"word-wrap":!0},null,8,["value"])]),_:1})])}}});export{B as default};