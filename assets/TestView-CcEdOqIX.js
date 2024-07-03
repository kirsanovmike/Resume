import{d as q,o as r,c as k,a as e,b as t,u as c,F as y,n as L,e as H,f as $,r as a,g as v,w as o,t as u,h as A,i as G,j as w,k as M,l as j,m as O,p as P,q as R,s as U,v as z,x as J,y as W,z as X,A as K}from"./index-Edtr2CzW.js";const Q="/Resume/assets/photo-eFd0p6i1.svg",Y=["href"],Z=["href"],V=["href"],tt=q({__name:"SocialBar",props:{column:{type:Boolean,default:!1},links:{default:()=>({github:"",telegram:"",whatsapp:""})}},setup(m){const i=m;return(s,d)=>(r(),k("div",{class:L(["d-flex align-center",{"flex-column":s.column}])},[e("a",{class:"social-link",target:"_blank",rel:"noreferrer noopener",href:i.links.whatsapp},[t(c(y),{style:{"min-width":"36px","min-height":"36px"},icon:["fab","whatsapp"],color:"text"})],8,Y),e("a",{class:L(["social-link",s.column?"mt-4":"ml-4"]),target:"_blank",rel:"noreferrer noopener",href:i.links.telegram},[t(c(y),{style:{"min-width":"36px","min-height":"36px"},icon:["fab","telegram"],color:"text"})],10,Z),e("a",{class:L(["social-link",s.column?"mt-4":"ml-4"]),target:"_blank",rel:"noreferrer noopener",href:i.links.github},[t(c(y),{style:{"min-width":"36px","min-height":"36px"},icon:["fab","github"],color:"text"})],10,V)],2))}}),et=e("img",{class:"image--style-round",src:Q},null,-1),ot={class:"font--large-title"},st={class:"font--title-2 font-italic mb-6"},nt={class:"font--text mb-9 text-info"},it={__name:"AboutInfo",props:{data:{type:Object,default:()=>{}},language:{type:String,required:!0}},setup(m){const{mdAndDown:i}=H(),s=m,d=$(()=>{var n,l;return((l=(n=s.data)==null?void 0:n.name)==null?void 0:l[s.language])??""}),_=$(()=>{var n,l;return((l=(n=s.data)==null?void 0:n.position)==null?void 0:l[s.language])??""}),f=$(()=>{var n,l;return((l=(n=s.data)==null?void 0:n.textAbout)==null?void 0:l[s.language])??""}),g=$(()=>{var n,l;return((l=(n=s.data)==null?void 0:n.buttonText)==null?void 0:l[s.language])??""}),x={github:"https://github.com/kirsanovmike",telegram:"https://t.me/kirsanovmike",whatsapp:"https://wa.me/79250546355"};return(n,l)=>{const p=a("v-col"),h=a("v-btn"),I=a("v-row");return r(),v(I,null,{default:o(()=>[t(p,{cols:"2"},{default:o(()=>[et]),_:1}),t(p,{cols:"10",class:"pl-15"},{default:o(()=>[e("h1",ot,u(d.value),1),e("h2",st,u(_.value),1),t(tt,{class:L({"fixed-middle-right":!c(i)}),column:!c(i),links:x},null,8,["class","column"]),e("p",nt,u(f.value),1),t(h,{class:"button--primary"},{default:o(()=>[A(u(g.value),1)]),_:1})]),_:1})]),_:1})}}},E=(m,i)=>{const s=m.__vccOpts||m;for(const[d,_]of i)s[d]=_;return s},lt={class:"mb-0 title--text text-center align-content-center",style:{height:"48px"}},at={class:"d-flex align-center justify-space-between",style:{"min-width":"100%"}},ct={class:"title--text ma-0 pa-0"},rt={class:"d-flex flex-column pt-2"},dt={class:"d-flex align-center"},mt={class:"ml-2 title--text"},pt={class:"mt-2 title--text"},S=q({__name:"ExperiencePanels",props:{items:{default:()=>[{text:"",icon:[],iconPostfix:"",title:"",period:"",selected:!1}]}},setup(m){let i=G([]);const s=d=>{d.value?i.push(d.i):i=i.filter(_=>_!==d.i)};return(d,_)=>{const f=a("v-col"),g=a("v-expansion-panel"),x=a("v-row"),n=a("v-expansion-panels");return r(),v(n,{variant:"accordion"},{default:o(()=>[(r(!0),k(w,null,M(d.items,(l,p)=>(r(),v(x,{key:p,style:{width:"100%"}},{default:o(()=>[t(f,{cols:"2",class:"pt-0 pb-3"},{default:o(()=>[e("p",lt,u(l.period),1)]),_:2},1024),t(f,{class:"pt-0 pb-3"},{default:o(()=>[t(g,{text:l.text,"expand-icon":"$expand",static:"","onGroup:selected":h=>s({...h,i:p})},{title:o(()=>[e("div",at,[e("p",ct,u(l.title),1),t(c(y),{style:{"max-width":"32px","max-height":"32px"},icon:"plus",class:L(["skill-card--icon transition-all pannel-expand-icon",c(i).includes(p)?"rotate-45":"rotate-0"]),color:"title"},null,8,["class"])])]),text:o(()=>[e("div",rt,[e("div",dt,[t(c(y),{style:{"max-width":"20px","max-height":"20px"},icon:l.icon,class:"skill-card--icon pannel-expand-icon"},null,8,["icon"]),e("p",mt,u(l.iconPostfix),1)]),e("p",pt,u(l.text),1)])]),_:2},1032,["text","onGroup:selected"])]),_:2},1024)]),_:2},1024))),128))]),_:1})}}}),ut={class:"d-flex flex-column align-start"},_t={class:"font--title-3 mb-3"},ft={class:"d-flex"},xt={__name:"Skill",props:{skill:{type:Object,required:!0}},setup(m){const i=m;return(s,d)=>{const _=a("font-awesome-icon"),f=a("v-card-text"),g=a("v-card");return r(),v(g,{"max-width":"180",elevation:"0",class:"mr-8 mb-8 skill-card"},{default:o(()=>[t(f,null,{default:o(()=>[e("div",ut,[t(_,{icon:i.skill.icon,class:"skill-card--icon mb-6",color:i.skill.iconColor},null,8,["icon","color"]),e("span",_t,u(i.skill.text),1),e("div",ft,[(r(),k(w,null,M(5,x=>e("div",{key:x,class:L(["skill-level mr-2",i.skill.level<=x-1?"skill-level--active":""])},null,2)),64))])])]),_:1})]),_:1})}}},ht=E(xt,[["__scopeId","data-v-defea29e"]]),B="/Resume/assets/project-BhVthwXX.svg",N=m=>(R("data-v-39df5c8b"),m=m(),U(),m),vt={class:"d-flex flex-column"},gt=N(()=>e("img",{alt:"",class:"project-card--img",src:B},null,-1)),bt={class:"project-card--content mt-6"},kt={class:"title"},yt={class:"subtitle mb-0"},It={class:"d-flex justify-space-between"},Lt={class:"title"},$t={class:"description mb-0"},wt=N(()=>e("img",{alt:"",class:"project-card--img",src:B,style:{"min-width":"610px","min-height":"400px"}},null,-1)),Mt=q({__name:"ProjectCard",props:{project:{default:()=>({title:"Title",text:"Text",isMedal:!1,description:"Lor..."})}},setup(m){return j(!1),(i,s)=>{const d=a("v-card-text"),_=a("v-card"),f=a("v-btn"),g=a("v-card-title"),x=a("v-col"),n=a("v-row"),l=a("v-dialog");return r(),v(l,{"max-width":"1440"},{activator:o(({props:p})=>[t(_,O({elevation:"0",style:{width:"463px",position:"relative",cursor:"pointer"}},p),{default:o(()=>[t(d,{class:"pa-8 d-flex align-center justify-center"},{default:o(()=>[e("div",vt,[gt,e("div",bt,[e("p",kt,u(i.project.title),1),e("p",yt,u(i.project.text),1)])])]),_:1}),i.project.isMedal?(r(),v(c(y),{key:0,icon:["fas","medal"],class:"medal--text",color:"medal",style:{"min-width":"52px","min-height":"52px",position:"absolute",top:"0",right:"20px"}})):P("",!0)]),_:2},1040)]),default:o(({isActive:p})=>[t(_,{class:"pa-10",style:{height:"860px",position:"relative"}},{default:o(()=>[t(g,null,{default:o(()=>[e("div",It,[e("p",Lt,u(i.project.title),1),t(f,{icon:"",onClick:h=>p.value=!1},{default:o(()=>[t(c(y),{icon:["fas","xmark"],style:{"min-width":"52px","min-height":"52px"}})]),_:2},1032,["onClick"])])]),_:2},1024),t(n,null,{default:o(()=>[t(x,null,{default:o(()=>[t(d,null,{default:o(()=>[e("p",$t,u(i.project.description),1)]),_:1})]),_:1}),t(x,{class:"d-flex align-center justify-center"},{default:o(()=>[wt]),_:1})]),_:1})]),_:2},1024)]),_:1})}}}),jt=E(Mt,[["__scopeId","data-v-39df5c8b"]]),Ct=["id"],St={class:"pt-10 pb-15 section-margin"},At=["id"],qt=e("div",{class:"d-flex justify-center"},[e("h2",{class:"font--title-1 text-center mb-14 text-info title--stroke"}," Skills ")],-1),Pt={class:"pt-10 pb-15 section-margin"},Et={class:"d-flex justify-center"},Bt=["id"],Nt=e("h3",{class:"font--title-2 text-center mt-10 mb-6 text-info"},"Education",-1),Ft=e("h3",{class:"font--title-2 text-center mt-10 mb-6 text-info"},"Work Experience",-1),Tt=["id"],Dt=e("div",{class:"d-flex justify-center"},[e("h2",{class:"font--title-1 text-center mb-14 text-info title--stroke"},"Projects")],-1),Ht=["id"],Gt=e("div",{class:"d-flex"},[e("h2",{class:"font--title-1 text-info title--stroke mb-8"},"Contact Details")],-1),Ot=e("h3",{class:"font--title-2 text-info mb-8"},"Have a project? Let me know!",-1),Rt={class:"text-yellow"},zt={__name:"TestView",setup(m){z();const i=J(),s=W(),d=j([{id:0,text:"JavaScript",icon:["fab","js"],iconColor:"#EFD81D",level:3},{id:1,text:"JavaScript",icon:["fab","vuejs"],iconColor:"#47BA87",level:2},{id:2,text:"HTML",icon:["fab","html5"],iconColor:"#FC4F13",level:5},{id:3,text:"css",icon:["fab","css3-alt"],iconColor:"#3C9CD6",level:3},{id:4,text:"Sass",icon:["fab","sass"],iconColor:"#D66FA4",level:1},{id:5,text:"Git",icon:["fab","git-alt"],iconColor:"#E94E31",level:4},{id:6,text:"Docker",icon:["fab","docker"],iconColor:"#0895E7",level:5}]),_=j([{id:0,title:"Case 0",text:"More information →",isMedal:!0,description:"Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"},{id:1,title:"Case 1",text:"More information →",isMedal:!1,description:"Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"},{id:2,title:"Case 2",text:"More information →",isMedal:!1,description:"Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"},{id:3,title:"Case 3",text:"More information →",isMedal:!1,description:"Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"},{id:4,title:"Case 4",text:"More information →",isMedal:!1,description:"Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"},{id:5,title:"Case 5",text:"More information →",isMedal:!1,description:"Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"}]),f=[{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat",icon:["fas","location-dot"],iconPostfix:"Moscow",title:"Assistant",period:"2020-2021",isSelected:!1},{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat",icon:["fas","location-dot"],iconPostfix:"Moscow",title:"Assistant",period:"2020-2021",isSelected:!1},{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat",icon:["fas","location-dot"],iconPostfix:"Moscow",title:"Assistant",period:"2020-2021",isSelected:!1}],g=j([{id:0,propertyName:"Gmail",value:"ivanov@gmail.com"},{id:1,propertyName:"Linkedin",value:"@ivanov"},{id:2,propertyName:"Telegram",value:"@ivanov"},{id:3,propertyName:"WhatsApp",value:"@ivanov"},{id:4,propertyName:"Phone",value:"+7 (123) 456-78-90"}]),x=$(()=>i.query);return X(x,n=>{(n==null?void 0:n.block)!=null&&document.getElementById(n==null?void 0:n.block)&&document.getElementById(n==null?void 0:n.block).scrollIntoView({behavior:"smooth"})},{immediate:!0}),(n,l)=>{const p=a("v-spacer"),h=a("v-col"),I=a("v-row"),C=a("v-text-field"),F=a("v-btn"),T=a("v-form"),D=a("v-container");return r(),v(D,{fluid:""},{default:o(()=>[t(I,null,{default:o(()=>[t(p),c(s).getMenu&&c(s).getMenu[0]!=null?(r(),v(h,{key:0,cols:"10",id:"parent-container"},{default:o(()=>[e("div",{id:c(s).getMenu[1].id},[e("section",St,[t(it,{data:c(s).getAbout,language:c(s).getSelectedLanguage},null,8,["data","language"])])],8,Ct),e("section",{id:c(s).getMenu[0].id,class:"pt-10 pb-15 section-margin"},[qt,t(I,null,{default:o(()=>[t(p),t(h,{cols:"9",class:"d-flex flex-wrap"},{default:o(()=>[(r(!0),k(w,null,M(d.value,b=>(r(),v(ht,{key:b.id,skill:b},null,8,["skill"]))),128))]),_:1}),t(p)]),_:1})],8,At),e("section",Pt,[e("div",Et,[e("h2",{id:c(s).getMenu[4].id,class:"font--title-1 text-center mb-14 text-info title--stroke"},"Experience",8,Bt)]),t(S,{items:f}),Nt,t(S,{items:f}),Ft,t(S,{items:f})]),e("section",{id:c(s).getMenu[2].id,class:"pt-10 pb-15 section-margin"},[Dt,t(I,null,{default:o(()=>[(r(!0),k(w,null,M(_.value,b=>(r(),v(h,{key:b.id,class:"d-flex justify-center",cols:"4",md:"12",lg:"6",xl:"4",sm:"12",xs:"12"},{default:o(()=>[t(jt,{project:b},null,8,["project"])]),_:2},1024))),128))]),_:1})],8,Tt),e("section",{id:c(s).getMenu[3].id,class:"pt-10 pb-15"},[t(I,null,{default:o(()=>[t(h,{cols:"6"},{default:o(()=>[Gt,Ot,(r(!0),k(w,null,M(g.value,b=>(r(),k("p",{key:b.id,class:"font-text"},[A(u(b.propertyName)+": ",1),e("span",Rt,u(b.value),1)]))),128))]),_:1}),t(h,{cols:"6"},{default:o(()=>[t(T,{"fast-fail":"",onSubmit:l[0]||(l[0]=K(()=>{},["prevent"]))},{default:o(()=>[t(C,{label:"First name"}),t(C,{label:"Last name"}),t(C,{label:"Last name"}),t(F,{class:"mt-2 button--primary",type:"submit",block:""},{default:o(()=>[A("Submit")]),_:1})]),_:1})]),_:1})]),_:1})],8,Ht)]),_:1})):P("",!0),t(p)]),_:1})]),_:1})}}};export{zt as default};
