import{bB as b,s as u,w as x,r as m,aM as B,v as I,au as k,z as l,A as r,y as s,B as A,C as D,D as M,E as R}from"./index.b6080610.js";import{u as L,a as p}from"./index.fb85aa9c.js";import{_ as T}from"./MarkdownEditor.be0787f3.js";import{u as V,N as E}from"./use-dialog.3a43aaea.js";import{b as v,N as F}from"./FormItem.13bf696a.js";import"./cssr.a00ccd03.js";import"./Tag.864fd4fb.js";const q=M("\u4E0A\u4F20"),H={__name:"CreateArticle",setup(z){const d=L(),y=V();let c=!0;b((a,e,t)=>{e.name==="CreateArticle"&&!c?y.warning({title:"\u8B66\u544A",content:"\u79BB\u5F00\u9875\u9762\u540E\u6570\u636E\u5C06\u4E0D\u4F1A\u4FDD\u5B58\uFF0C\u786E\u8BA4\u79BB\u5F00\uFF1F",positiveText:"\u79BB\u5F00",negativeText:"\u4E0D\u79BB\u5F00",onPositiveClick:()=>{t()},onNegativeClick:()=>{t(!1)}}):t()});const o=u({title:"",content:""});x(o,()=>{c=o.content.length===0});const _=a=>{o.title=a.title,o.content=a.text},f=m(null),n=u({categoryId:null}),h={categoryId:{required:!0,validator(a,e){return e?!0:new Error("\u8BF7\u9009\u62E9\u5206\u7C7B")},trigger:"blur"}},g=u([]),C=async()=>{const a=await p.category.findAll();if(a.code===0){const{rows:e}=a.result;for(let t=0,N=e.length;t<N;t++)g.push({label:e[t].name,value:e[t].id})}};B(()=>{C()});const i=m(!1),w=async()=>{if(!i.value){i.value=!0;const a=d.loading("\u521B\u5EFA\u4E2D\uFF0C\u8BF7\u7A0D\u7B49...",{duration:0});try{await f.value.validate()}catch(t){return console.warn(t),!1}const e=await p.article.create(o.title,o.content,n.categoryId);e.code===0&&(d.success(e.msg),c=!0,R.push({name:"ArticleList"})),a.destroy(),i.value=!1}};return(a,e)=>(I(),k(r(D),null,{default:l(()=>[s(r(F),{ref_key:"formRef",ref:f,inline:"",model:n,rules:h},{default:l(()=>[s(r(v),{label:"\u9009\u62E9\u5206\u7C7B",path:"categoryId"},{default:l(()=>[s(r(E),{value:n.categoryId,"onUpdate:value":e[0]||(e[0]=t=>n.categoryId=t),options:g,style:{width:"200px"}},null,8,["value","options"])]),_:1}),s(r(v),null,{default:l(()=>[s(r(A),{disabled:i.value,type:"primary",onClick:w},{default:l(()=>[q]),_:1},8,["disabled"])]),_:1})]),_:1},8,["model"]),s(T,{style:{height:"600px"},onDataChange:_})]),_:1}))}};export{H as default};
