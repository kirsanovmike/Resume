import{d as P,o as l,c as p,a as e,u as c,F as g,b as w,n as $,e as E,f as N,g as L,r,h as k,w as s,i as t,t as d,j as q,k as U,l as M,m as j,p as S,q as z,s as O,v as R,x as J,y as W,z as X,A as D,B as K}from"./index-Dxz5JuBF.js";const Q="/Resume/assets/photo-eFd0p6i1.svg",Y=["href"],Z=["href"],V=["href"],ee=["href"],te=["href"],oe=["href"],se=P({__name:"SocialBar",props:{column:{type:Boolean,default:!1},links:{default:()=>({github:"",telegram:"",whatsapp:""})}},setup(u){const n=u;return(o,_)=>(l(),p("div",{class:$(["d-flex align-center",{"flex-column justify-center":o.column}]),style:E(o.column?"height: 100%; top: 0":void 0)},[n.links.whatsapp?(l(),p("a",{key:0,class:"social-link",target:"_blank",rel:"noreferrer noopener",href:n.links.whatsapp},[e(c(g),{style:{"min-width":"36px","min-height":"36px"},icon:["fab","whatsapp"],color:"text",class:"social-icon"})],8,Y)):w("",!0),n.links.telegram?(l(),p("a",{key:1,class:$(["social-link",o.column?"mt-4":"ml-4"]),target:"_blank",rel:"noreferrer noopener",href:n.links.telegram},[e(c(g),{style:{"min-width":"36px","min-height":"36px"},icon:["fab","telegram"],color:"text",class:"social-icon"})],10,Z)):w("",!0),n.links.github?(l(),p("a",{key:2,class:$(["social-link",o.column?"mt-4":"ml-4"]),target:"_blank",rel:"noreferrer noopener",href:n.links.github},[e(c(g),{style:{"min-width":"36px","min-height":"36px"},icon:["fab","github"],color:"text",class:"social-icon"})],10,V)):w("",!0),n.links.mail?(l(),p("a",{key:3,class:$(["social-link",o.column?"mt-4":"ml-4"]),target:"_blank",rel:"noreferrer noopener",href:`mailto:${n.links.mail}`},[e(c(g),{style:{"min-width":"36px","min-height":"36px"},icon:["fas","envelope"],color:"text",class:"social-icon"})],10,ee)):w("",!0),n.links.phone?(l(),p("a",{key:4,class:$(["social-link",o.column?"mt-4":"ml-4"]),target:"_blank",rel:"noreferrer noopener",href:`tel:${n.links.phone}`},[e(c(g),{style:{"min-width":"36px","min-height":"36px"},icon:["fas","phone"],color:"text",class:"social-icon"})],10,te)):w("",!0),n.links.linkedin?(l(),p("a",{key:5,class:$(["social-link",o.column?"mt-4":"ml-4"]),target:"_blank",rel:"noreferrer noopener",href:n.links.linkedin},[e(c(g),{style:{"min-width":"36px","min-height":"36px"},icon:["fab","linkedin"],color:"text",class:"social-icon"})],10,oe)):w("",!0)],6))}}),B=(u,n)=>{const o=u.__vccOpts||u;for(const[_,f]of n)o[_]=f;return o},ne=B(se,[["__scopeId","data-v-965f5fca"]]),ie=t("div",{style:{width:"260px","min-width":"260px"}},[t("img",{class:"image--style-round",src:Q})],-1),le={class:"font--large-title info--text"},ae={class:"font--title-2 font-italic mb-6 info--text"},ce={class:"font--text mb-9 text-info"},re={__name:"AboutInfo",props:{data:{type:Object,default:()=>{}},language:{type:String,required:!0}},setup(u){const{mdAndDown:n}=N(),o=u,_=L(()=>{var i,a;return((a=(i=o.data)==null?void 0:i.name)==null?void 0:a[o.language])??""}),f=L(()=>{var i,a;return((a=(i=o.data)==null?void 0:i.position)==null?void 0:a[o.language])??""}),h=L(()=>{var i,a;return((a=(i=o.data)==null?void 0:i.textAbout)==null?void 0:a[o.language])??""}),y=L(()=>{var i,a;return((a=(i=o.data)==null?void 0:i.buttonText)==null?void 0:a[o.language])??""}),b={github:"https://github.com/kirsanovmike",telegram:"https://t.me/kirsanovmike",whatsapp:"https://wa.me/79250546355",mail:"kirsanovmike@gmail.com",phone:"+7 (925) 054-63-55",linkedin:"https://linkedin.com/kirsanovmike"};return(i,a)=>{const x=r("v-col"),v=r("v-btn"),I=r("v-row");return l(),k(I,null,{default:s(()=>[e(x,{cols:"2",class:"d-flex"},{default:s(()=>[ie]),_:1}),e(x,{cols:"10",class:"pl-6"},{default:s(()=>[t("h1",le,d(_.value),1),t("h2",ae,d(f.value),1),e(ne,{class:$({"fixed-middle-right":!c(n)}),column:!c(n),links:b},null,8,["class","column"]),t("p",ce,d(h.value),1),e(v,{class:"button--primary"},{default:s(()=>[q(d(y.value),1)]),_:1})]),_:1})]),_:1})}}},de={class:"mb-0 title--text text-center align-content-center",style:{height:"48px"}},me={class:"d-flex align-center justify-space-between",style:{"min-width":"100%"}},pe={class:"title--text ma-0 pa-0"},ue={class:"d-flex flex-column pt-2"},_e={class:"d-flex align-center"},fe={class:"ml-2 title--text"},he={class:"mt-2 title--text"},A=P({__name:"ExperiencePanels",props:{items:{default:()=>[{text:"",icon:[],iconPostfix:"",title:"",period:"",selected:!1}]}},setup(u){let n=U([]);const o=_=>{_.value?n.push(_.i):n=n.filter(f=>f!==_.i)};return(_,f)=>{const h=r("v-col"),y=r("v-expansion-panel"),b=r("v-row"),i=r("v-expansion-panels");return l(),k(i,{variant:"accordion"},{default:s(()=>[(l(!0),p(M,null,j(_.items,(a,x)=>(l(),k(b,{key:x,style:{width:"100%"}},{default:s(()=>[e(h,{cols:"2",class:"pt-0 pb-3"},{default:s(()=>[t("p",de,d(a.period),1)]),_:2},1024),e(h,{class:"pt-0 pb-3"},{default:s(()=>[e(y,{text:a.text,"expand-icon":"$expand",static:"","onGroup:selected":v=>o({...v,i:x})},{title:s(()=>[t("div",me,[t("p",pe,d(a.title),1),e(c(g),{style:{"max-width":"32px","max-height":"32px"},icon:"plus",class:$(["skill-card--icon transition-all pannel-expand-icon",c(n).includes(x)?"rotate-45":"rotate-0"]),color:"title"},null,8,["class"])])]),text:s(()=>[t("div",ue,[t("div",_e,[e(c(g),{style:{"max-width":"20px","max-height":"20px"},icon:a.icon,class:"skill-card--icon pannel-expand-icon"},null,8,["icon"]),t("p",fe,d(a.iconPostfix),1)]),t("p",he,d(a.text),1)])]),_:2},1032,["text","onGroup:selected"])]),_:2},1024)]),_:2},1024))),128))]),_:1})}}}),xe={class:"d-flex flex-column align-start"},ve={class:"font--title-3 skill-text mb-3"},ge={class:"d-flex"},ke={__name:"Skill",props:{skill:{type:Object,required:!0}},setup(u){const n=u;return(o,_)=>{const f=r("font-awesome-icon"),h=r("v-card-text"),y=r("v-card");return l(),k(y,{"max-width":"180",elevation:"0",class:"mr-8 mb-8 skill-card"},{default:s(()=>[e(h,null,{default:s(()=>[t("div",xe,[e(f,{icon:n.skill.icon,class:"skill-card--icon mb-6",color:n.skill.iconColor},null,8,["icon","color"]),t("span",ve,d(n.skill.text),1),t("div",ge,[(l(),p(M,null,j(5,b=>t("div",{key:b,class:$(["skill-level mr-2",n.skill.level<=b-1?"skill-level--active":""])},null,2)),64))])])]),_:1})]),_:1})}}},be=B(ke,[["__scopeId","data-v-9f134c84"]]),F="/Resume/assets/project-BhVthwXX.svg",ye=u=>(O("data-v-34e39c32"),u=u(),R(),u),we={class:"d-flex flex-column"},$e=ye(()=>t("img",{alt:"",class:"project-card--img",src:F},null,-1)),Ie={class:"project-card--content mt-6"},Le={class:"title"},Me={class:"subtitle mb-0"},je={class:"d-flex justify-space-between"},Se={class:"title"},Ce={class:"description subtitle mb-0"},Ae=P({__name:"ProjectCard",props:{project:{default:()=>({title:"Title",text:"Text",isMedal:!1,description:"Lor..."})}},setup(u){const{mdAndUp:n}=N();return S(!1),(o,_)=>{const f=r("v-card-text"),h=r("v-card"),y=r("v-btn"),b=r("v-card-title"),i=r("v-col"),a=r("v-row"),x=r("v-dialog");return l(),k(x,{"max-width":"1440"},{activator:s(({props:v})=>[e(h,z({elevation:"0",style:{width:"463px",position:"relative",cursor:"pointer"}},v),{default:s(()=>[e(f,{class:"pa-8 d-flex align-center justify-center"},{default:s(()=>[t("div",we,[$e,t("div",Ie,[t("p",Le,d(o.project.title),1),t("p",Me,d(o.project.text),1)])])]),_:1}),o.project.isMedal?(l(),k(c(g),{key:0,icon:["fas","medal"],class:"medal--text",color:"medal",style:{"min-width":"52px","min-height":"52px",position:"absolute",top:"0",right:"20px"}})):w("",!0)]),_:2},1040)]),default:s(({isActive:v})=>[e(h,{class:"pa-10",style:{height:"860px",position:"relative"}},{default:s(()=>[e(b,null,{default:s(()=>[t("div",je,[t("p",Se,d(o.project.title),1),e(y,{icon:"",onClick:I=>v.value=!1},{default:s(()=>[e(c(g),{icon:["fas","xmark"],style:{"min-width":"52px","min-height":"52px"},class:"subtitle"})]),_:2},1032,["onClick"])])]),_:2},1024),e(a,null,{default:s(()=>[e(i,{md:"12",sm:"12",lg:"6"},{default:s(()=>[e(f,null,{default:s(()=>[t("p",Ce,d(o.project.description),1)]),_:1})]),_:1}),e(i,{class:"d-flex align-center justify-center",md:"12",sm:"12",lg:"6"},{default:s(()=>[t("img",{alt:"",class:"project-card--img",src:F,style:E(c(n)?"min-width: 610px; min-height: 400px;":"min-height: 60px;")},null,4)]),_:1})]),_:1}),o.project.isMedal?(l(),k(c(g),{key:0,icon:["fas","medal"],class:"medal--text",color:"medal",style:{"min-width":"72px","min-height":"72px",position:"absolute",top:"0",right:"47%"}})):w("",!0)]),_:2},1024)]),_:1})}}}),qe=B(Ae,[["__scopeId","data-v-34e39c32"]]),Pe=["id"],Be={class:"pt-10 pb-15 section-margin"},Ee=["id"],Ne=t("div",{class:"d-flex justify-center"},[t("h2",{class:"font--title-1 text-center mb-14 text-info title--stroke"}," Skills ")],-1),Fe={class:"pt-10 pb-15 section-margin"},Te={class:"d-flex justify-center"},He=["id"],Ge=t("h3",{class:"font--title-2 text-center mt-10 mb-6 text-info"},"Education",-1),Ue=t("h3",{class:"font--title-2 text-center mt-10 mb-6 text-info"},"Work Experience",-1),ze=["id"],Oe=t("div",{class:"d-flex justify-center"},[t("h2",{class:"font--title-1 text-center mb-14 text-info title--stroke"},"Projects")],-1),Re=["id"],Je=t("div",{class:"d-flex"},[t("h2",{class:"font--title-1 text-info title--stroke mb-8"},"Contact Details")],-1),We=t("h3",{class:"font--title-2 text-info mb-8"},"Have a project? Let me know!",-1),Xe=["href"],De=["href"],Ke=["href"],Ye={__name:"TestView",setup(u){J();const n=W(),o=X(),_=S([{id:0,text:"JavaScript",icon:["fab","js"],iconColor:"#EFD81D",level:3},{id:1,text:"JavaScript",icon:["fab","vuejs"],iconColor:"#47BA87",level:2},{id:2,text:"HTML",icon:["fab","html5"],iconColor:"#FC4F13",level:5},{id:3,text:"css",icon:["fab","css3-alt"],iconColor:"#3C9CD6",level:3},{id:4,text:"Sass",icon:["fab","sass"],iconColor:"#D66FA4",level:1},{id:5,text:"Git",icon:["fab","git-alt"],iconColor:"#E94E31",level:4},{id:6,text:"Docker",icon:["fab","docker"],iconColor:"#0895E7",level:5}]),f=S([{id:0,title:"Case 0",text:"More information →",isMedal:!0,description:"Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"},{id:1,title:"Case 1",text:"More information →",isMedal:!1,description:"Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"},{id:2,title:"Case 2",text:"More information →",isMedal:!1,description:"Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"},{id:3,title:"Case 3",text:"More information →",isMedal:!1,description:"Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"},{id:4,title:"Case 4",text:"More information →",isMedal:!1,description:"Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"},{id:5,title:"Case 5",text:"More information →",isMedal:!1,description:"Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной Aldus PageMaker"}]),h=[{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat",icon:["fas","location-dot"],iconPostfix:"Moscow",title:"Assistant",period:"2020-2021",isSelected:!1},{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat",icon:["fas","location-dot"],iconPostfix:"Moscow",title:"Assistant",period:"2020-2021",isSelected:!1},{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat",icon:["fas","location-dot"],iconPostfix:"Moscow",title:"Assistant",period:"2020-2021",isSelected:!1}],y=S([{id:0,propertyName:"Gmail",value:"ivanov@gmail.com"},{id:1,propertyName:"Linkedin",value:"@ivanov"},{id:2,propertyName:"Telegram",value:"@ivanov"},{id:3,propertyName:"WhatsApp",value:"@ivanov"},{id:4,propertyName:"Phone",value:"+7 (123) 456-78-90"}]),b=L(()=>n.query);return D(b,i=>{(i==null?void 0:i.block)!=null&&document.getElementById(i==null?void 0:i.block)&&document.getElementById(i==null?void 0:i.block).scrollIntoView({behavior:"smooth"})},{immediate:!0}),(i,a)=>{const x=r("v-spacer"),v=r("v-col"),I=r("v-row"),C=r("v-text-field"),T=r("v-btn"),H=r("v-form"),G=r("v-container");return l(),k(G,{fluid:""},{default:s(()=>[e(I,null,{default:s(()=>[e(x),c(o).getMenu&&c(o).getMenu[0]!=null?(l(),k(v,{key:0,cols:"10",id:"parent-container"},{default:s(()=>[t("div",{id:c(o).getMenu[1].id},[t("section",Be,[e(re,{data:c(o).getAbout,language:c(o).getSelectedLanguage},null,8,["data","language"])])],8,Pe),t("section",{id:c(o).getMenu[0].id,class:"pt-10 pb-15 section-margin"},[Ne,e(I,null,{default:s(()=>[e(x),e(v,{cols:"9",class:"d-flex flex-wrap"},{default:s(()=>[(l(!0),p(M,null,j(_.value,m=>(l(),k(be,{key:m.id,skill:m},null,8,["skill"]))),128))]),_:1}),e(x)]),_:1})],8,Ee),t("section",Fe,[t("div",Te,[t("h2",{id:c(o).getMenu[4].id,class:"font--title-1 text-center mb-14 text-info title--stroke"},"Experience",8,He)]),e(A,{items:h}),Ge,e(A,{items:h}),Ue,e(A,{items:h})]),t("section",{id:c(o).getMenu[2].id,class:"pt-10 pb-15 section-margin"},[Oe,e(I,null,{default:s(()=>[(l(!0),p(M,null,j(f.value,m=>(l(),k(v,{key:m.id,class:"d-flex justify-center",cols:"4",md:"12",lg:"6",xl:"4",sm:"12",xs:"12"},{default:s(()=>[e(qe,{project:m},null,8,["project"])]),_:2},1024))),128))]),_:1})],8,ze),t("section",{id:c(o).getMenu[3].id,class:"pt-10 pb-15"},[e(I,null,{default:s(()=>[e(v,{cols:"6"},{default:s(()=>[Je,We,(l(!0),p(M,null,j(y.value,m=>(l(),p("p",{key:m.id,class:"font-text"},[q(d(m.propertyName)+": ",1),m.propertyName==="Gmail"?(l(),p("a",{key:0,target:"_blank",rel:"noreferrer noopener",href:`mailto:${m.value}`,class:"text-yellow"},d(m.value),9,Xe)):m.value.includes("+")?(l(),p("a",{key:1,target:"_blank",rel:"noreferrer noopener",href:`mailto:${m.value}`,class:"text-yellow"},d(m.value),9,De)):(l(),p("a",{key:2,href:m.value,target:"_blank",rel:"noreferrer noopener",class:"text-yellow"},d(m.value),9,Ke))]))),128))]),_:1}),e(v,{cols:"6"},{default:s(()=>[e(H,{"fast-fail":"",onSubmit:a[0]||(a[0]=K(()=>{},["prevent"]))},{default:s(()=>[e(C,{label:"First name"}),e(C,{label:"Last name"}),e(C,{label:"Last name"}),e(T,{class:"mt-2 button--primary",type:"submit",block:""},{default:s(()=>[q("Submit")]),_:1})]),_:1})]),_:1})]),_:1})],8,Re)]),_:1})):w("",!0),e(x)]),_:1})]),_:1})}}};export{Ye as default};
