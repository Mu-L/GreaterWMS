import{Q as D}from"./QItemLabel.ae891476.js";import{Q as z,b as c,a as i}from"./QList.9ea923d3.js";import{_ as H,aD as O,L as P,aS as X,r as Y,c as e,w as f,o as F,R as l,S as d,U as n,f as s,Y as o,Z as V,a1 as g,V as r,X as m,aH as u}from"./index.6ae0d646.js";import{u as G}from"./use-quasar.b1a49fd6.js";import"./axios.d3fea899.js";import{u as J}from"./vue-i18n.runtime.esm-bundler.d4f23c7d.js";const K=O({name:"EquipmentSupport",data(){return{}},setup(){const t=P();X();const _=G(),p=Y(0),{t:h}=J(),b=e({get:()=>t.state.fabchange.fab1}),S=e({get:()=>t.state.fabchange.fab2}),y=e({get:()=>t.state.fabchange.fab3}),Q=e({get:()=>t.state.fabchange.fab4}),C=e({get:()=>t.state.screenchange.screenscroll}),q=e({get:()=>t.state.loginauth.authin}),$=e({get:()=>t.state.loginauth.login_name}),k=e({get:()=>t.state.loginauth.operator}),w=e({get:()=>t.state.settings.openid}),N=e({get:()=>t.state.langchange.lang}),A=e({get:()=>t.state.settings.server}),I=e({get:()=>t.state.scanchanged.scandata,set:a=>{t.commit("scanchanged/ScanChanged",a)}}),U=e({get:()=>t.state.scanchanged.datadetail,set:a=>{t.commit("scanchanged/ScanDataChanged",a)}}),B=e({get:()=>t.state.scanchanged.asndata,set:a=>{t.commit("scanchanged/ASNDataChanged",a)}}),L=e({get:()=>t.state.scanchanged.dndata,set:a=>{t.commit("scanchanged/DNDataChanged",a)}}),R=e({get:()=>t.state.scanchanged.bindata,set:a=>{t.commit("scanchanged/BinDataChanged",a)}}),T=e({get:()=>t.state.scanchanged.tablelist,set:a=>{t.commit("scanchanged/TableDataChanged",a)}}),E=e({get:()=>t.state.scanchanged.scanmode,set:a=>{t.commit("scanchanged/ScanModeChanged",a)}}),v=e({get:()=>t.state.scanchanged.bar_scanned}),M=e({get:()=>t.state.scanchanged.apiurl,set:a=>{t.commit("scanchanged/ApiUrlChanged",a)}}),Z=e({get:()=>t.state.scanchanged.apiurlnext,set:a=>{t.commit("scanchanged/ApiUrlNextChanged",a)}}),j=e({get:()=>t.state.scanchanged.apiurlprevious,set:a=>{t.commit("scanchanged/ApiUrlPreviousChanged",a)}});return f(v,(a,x)=>{}),f(C,(a,x)=>{}),f(p,(a,x)=>{a===1&&(q.value==="0"?_.notify({type:"negative",message:h("notice.mobile_userlogin.notice9")}):getTableData(""))}),F(()=>{}),{t:h,fab1:b,fab2:S,fab3:y,fab4:Q,screenscroll:C,authin:q,login_name:$,openid:w,operator:k,lang:N,requestauth:p,baseurl:A,apiurl:M,apiurlnext:Z,apiurlprevious:j,scandata:I,datadetail:U,tablelist:T,asndata:B,dndata:L,bindata:R,scanmode:E,bar_scanned:v}}}),W=m("img",{src:"statics/equipment/apple.png",style:{"margin-right":"20px"}},null,-1),tt=m("img",{src:"statics/equipment/android.png",style:{"margin-right":"20px"}},null,-1),at=m("img",{src:"statics/equipment/zebra.png",style:{"margin-right":"20px"}},null,-1),et=m("img",{src:"statics/equipment/urovo.png",style:{"margin-right":"20px"}},null,-1),nt=m("img",{src:"statics/equipment/seuic.jpg",style:{"margin-right":"20px"}},null,-1);function st(t,_,p,h,b,S){return l(),d(z,{bordered:"",padding:""},{default:n(()=>[s(i,null,{default:n(()=>[s(c,null,{default:n(()=>[s(D,{overline:""},{default:n(()=>[o(V(t.$t("notice.equipment.notice1")),1)]),_:1}),s(D,{caption:""},{default:n(()=>[o(V(t.$t("notice.equipment.notice2")),1)]),_:1})]),_:1})]),_:1}),s(g,{spaced:""}),r((l(),d(i,{clickable:""},{default:n(()=>[s(c,null,{default:n(()=>[o("IOS")]),_:1}),s(c,{thumbnail:""},{default:n(()=>[W]),_:1})]),_:1})),[[u]]),s(g),r((l(),d(i,{clickable:""},{default:n(()=>[s(c,null,{default:n(()=>[o("Android")]),_:1}),s(c,{thumbnail:""},{default:n(()=>[tt]),_:1})]),_:1})),[[u]]),s(g),r((l(),d(i,{clickable:""},{default:n(()=>[s(c,null,{default:n(()=>[o("Zebra")]),_:1}),s(c,{thumbnail:""},{default:n(()=>[at]),_:1})]),_:1})),[[u]]),s(g),r((l(),d(i,{clickable:""},{default:n(()=>[s(c,null,{default:n(()=>[o("Urovo")]),_:1}),s(c,{thumbnail:""},{default:n(()=>[et]),_:1})]),_:1})),[[u]]),s(g),r((l(),d(i,{clickable:""},{default:n(()=>[s(c,null,{default:n(()=>[o("Seuic")]),_:1}),s(c,{thumbnail:""},{default:n(()=>[nt]),_:1})]),_:1})),[[u]])]),_:1})}var rt=H(K,[["render",st]]);export{rt as default};
