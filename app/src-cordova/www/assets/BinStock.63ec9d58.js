import{Q as f}from"./QItemLabel.da2dcfd0.js";import{Q as se,a as I,b as w}from"./QList.5fd2ea9d.js";import{_ as ie,aD as le,L as ue,aS as ce,r as h,c as o,w as O,o as de,R as q,$ as N,f as t,U as n,aT as re,F as T,Y as r,Z as d,a1 as X,a0 as me,aU as ge,X as W,V as Y,S as pe,m as U,aV as fe,aE as be,aW as ve,Q as he,aX as _e,a3 as ye}from"./index.8c508c46.js";import{Q as ke,a as Ce,b as Se}from"./QBar.34c121a5.js";import{Q as Qe}from"./QSelect.385430e5.js";import{C as Ve}from"./ClosePopup.b3630796.js";import{u as De}from"./use-quasar.7b265727.js";import{a as E}from"./index.27935773.js";import{u as $e}from"./vue-i18n.runtime.esm-bundler.e3908c15.js";import"./selection.fec5ad25.js";import"./QMenu.9ad5f4b1.js";import"./rtl.b51694b1.js";import"./format.a33550d6.js";import"./axios.e6fce94e.js";const we=le({name:"BinStock",data(){return{}},setup(){const e=ue();ce();const i=De(),b=h(0),g=h({}),_=h(!1),y=h([]),s=h(""),{t:u}=$e(),L=o({get:()=>e.state.fabchange.fab1}),Z=o({get:()=>e.state.fabchange.fab2}),z=o({get:()=>e.state.fabchange.fab3}),H=o({get:()=>e.state.fabchange.fab4}),j=o({get:()=>e.state.screenchange.screenscroll}),B=o({get:()=>e.state.loginauth.authin}),K=o({get:()=>e.state.loginauth.login_name}),k=o({get:()=>e.state.loginauth.operator}),C=o({get:()=>e.state.settings.openid}),S=o({get:()=>e.state.langchange.lang}),v=o({get:()=>e.state.settings.server}),F=o({get:()=>e.state.scanchanged.scandata,set:a=>{e.commit("scanchanged/ScanChanged",a)}}),x=o({get:()=>e.state.scanchanged.datadetail,set:a=>{e.commit("scanchanged/ScanDataChanged",a)}}),ee=o({get:()=>e.state.scanchanged.asndata,set:a=>{e.commit("scanchanged/ASNDataChanged",a)}}),ae=o({get:()=>e.state.scanchanged.dndata,set:a=>{e.commit("scanchanged/DNDataChanged",a)}}),te=o({get:()=>e.state.scanchanged.bindata,set:a=>{e.commit("scanchanged/BinDataChanged",a)}}),Q=o({get:()=>e.state.scanchanged.tablelist,set:a=>{e.commit("scanchanged/TableDataChanged",a)}}),V=o({get:()=>e.state.scanchanged.scanmode,set:a=>{e.commit("scanchanged/ScanModeChanged",a)}}),A=o({get:()=>e.state.scanchanged.bar_scanned}),m=o({get:()=>e.state.scanchanged.apiurl,set:a=>{e.commit("scanchanged/ApiUrlChanged",a)}}),D=o({get:()=>e.state.scanchanged.apiurlnext,set:a=>{e.commit("scanchanged/ApiUrlNextChanged",a)}}),M=o({get:()=>e.state.scanchanged.apiurlprevious,set:a=>{e.commit("scanchanged/ApiUrlPreviousChanged",a)}});function G(a){if(a!==null){var l=v.value.split(":"),c=a.split(":");return l[0]!==c[0]?l[0]+":"+c[1]:c}else return null}function $(a){Q.value=[],m.value=v.value+"stock/bin/?goods_code=",J(a)}function J(a){E.get(m.value+a,{headers:{"Content-Type":'application/json, charset="utf-8"',token:C.value,language:S.value,operator:k.value}}).then(l=>{if(l.data.detail)i.notify({type:"negative",message:u("notice.mobile_scan.notice1")});else{var c=[];Q.value.forEach(p=>{c.push(p)}),l.data.results.forEach(p=>{c.push(p)}),Q.value=c,M.value=G(l.data.previous),D.value=G(l.data.next)}}).catch(l=>{i.notify({type:"negative",message:u("notice.mobile_scan.notice3")})})}function ne(a){g.value=JSON.parse(JSON.stringify(a)),Object.assign(g.value,{move_qty:"",move_to_bin:""}),_.value=!0}function P(){_.value=!1}function oe(){g.value.move_to_bin===""?i.notify({type:"negative",message:u("notice.mobile_binstock.notice5")}):(m.value=v.value+"stock/bin/",E.post(m.value+g.value.id+"/",g.value,{headers:{"Content-Type":"application/json",token:C.value,language:S.value,operator:k.value}}).then(a=>{P(),$(""),a.data.detail||i.notify({message:u("notice.mobile_binstock.notice6")})}).catch(a=>{i.notify({message:u("notice.network_error")})}))}function R(a){m.value=v.value+"binset/?bin_name__icontains=",E.get(m.value+a,{headers:{"Content-Type":'application/json, charset="utf-8"',token:C.value,language:S.value,operator:k.value}}).then(l=>{if(!l.data.detail){var c=[];y.value=[],l.data.results.forEach(p=>{c.push(p.bin_name)}),y.value=c}}).catch(l=>{i.notify({type:"negative",message:u("notice.mobile_scan.notice3")})})}return O(s,(a,l)=>{a.length>=2&&R(a)}),O(A,(a,l)=>{V.value==="GOODS"&&$(F.value)}),O(j,(a,l)=>{a===1?D.value!==null&&(m.value=D.value,b.value=1):b.value=0}),O(b,(a,l)=>{a===1&&(B.value==="0"?i.notify({type:"negative",message:u("notice.mobile_userlogin.notice9")}):J(""))}),de(()=>{B.value==="0"?i.notify({type:"negative",message:u("notice.mobile_userlogin.notice9")}):V.value==="GOODS"?$(F.value):(V.value="GOODS",$(""))}),{t:u,fab1:L,fab2:Z,fab3:z,fab4:H,screenscroll:j,authin:B,login_name:K,openid:C,operator:k,lang:S,requestauth:b,baseurl:v,apiurl:m,apiurlnext:D,apiurlprevious:M,scandata:F,datadetail:x,tablelist:Q,asndata:ee,dndata:ae,bindata:te,scanmode:V,bar_scanned:A,submitdata:g,dialogForm:_,dataSubmit:ne,cancelDataSubmit:P,submitData:oe,options:y,optionsChange:s,moveerror:u("notice.mobile_asn.notice11"),setOptions:R,filterFn(a,l,c){if(a.length<2){c();return}l(()=>{const p=a.toLowerCase();s.value=p})}}}}),Oe={style:{float:"right",padding:"15px 15px 15px 0"}};function qe(e,i,b,g,_,y){return q(),N(T,null,[t(se,{bordered:"",padding:""},{default:n(()=>[t(I,null,{default:n(()=>[t(w,null,{default:n(()=>[t(f,{overline:""},{default:n(()=>[r(d(e.$t("notice.mobile_binstock.notice1")),1)]),_:1}),t(f,{caption:""},{default:n(()=>[r(d(e.$t("notice.mobile_binstock.notice2")),1)]),_:1})]),_:1})]),_:1}),t(X,{spaced:""}),(q(!0),N(T,null,me(e.tablelist,(s,u)=>(q(),N(T,{key:u},[t(I,null,{default:n(()=>[t(w,{onClick:L=>e.dataSubmit(s)},{default:n(()=>[t(f,null,{default:n(()=>[r(d(s.goods_code),1)]),_:2},1024),t(f,{caption:"",lines:"2"},{default:n(()=>[r(d(s.goods_desc),1)]),_:2},1024)]),_:2},1032,["onClick"]),t(w,{side:"",top:""},{default:n(()=>[t(f,{caption:""},{default:n(()=>[r(d(e.$t("notice.mobile_binstock.notice3"))+d(s.bin_name),1)]),_:2},1024),t(f,{caption:""},{default:n(()=>[r(d(e.$t("notice.mobile_binstock.notice4"))+d(s.goods_qty),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),Y(t(X,{spaced:"",inset:"item"},null,512),[[ye,u+1!==e.tablelist.length]])],64))),128))]),_:1}),t(re,{modelValue:e.dialogForm,"onUpdate:modelValue":i[4]||(i[4]=s=>e.dialogForm=s)},{default:n(()=>[t(ge,{class:"shadow-24"},{default:n(()=>[t(ke,{class:"bg-light-blue-10 text-white rounded-borders",style:{height:"50px"}},{default:n(()=>[W("div",null,d(e.submitdata.goods_code),1),t(Ce),Y((q(),pe(U,{dense:"",flat:"",icon:"close"},{default:n(()=>[t(Se,null,{default:n(()=>[r(d(e.$t("index.close")),1)]),_:1})]),_:1})),[[Ve]])]),_:1}),t(fe,{class:"scroll"},{default:n(()=>[t(be,{dense:"",outlined:"",square:"",debounce:"500",modelValue:e.submitdata.move_qty,"onUpdate:modelValue":i[2]||(i[2]=s=>e.submitdata.move_qty=s),modelModifiers:{number:!0},type:"number",label:e.$t("stock.view_stocklist.goods_qty"),style:{"margin-bottom":"5px"},onClick:i[3]||(i[3]=s=>e.submitdata.move_qty=""),rules:[s=>s&&s>0||e.moveerror]},{before:n(()=>[t(Qe,{dense:"",outlined:"",square:"","use-input":"","hide-selected":"","fill-input":"",modelValue:e.submitdata.move_to_bin,"onUpdate:modelValue":i[1]||(i[1]=s=>e.submitdata.move_to_bin=s),label:e.$t("warehouse.view_binset.bin_name"),options:e.options,onFilter:e.filterFn,onInputValue:e.setOptions,style:{width:"150px"}},ve({"no-option":n(()=>[t(I,null,{default:n(()=>[t(w,{class:"text-grey"},{default:n(()=>[r(" No results ")]),_:1})]),_:1})]),_:2},[e.submitdata.move_to_bin?{name:"append",fn:n(()=>[t(he,{name:"cancel",onClick:i[0]||(i[0]=_e(s=>e.submitdata.move_to_bin="",["stop"])),class:"cursor-pointer"})]),key:"0"}:void 0]),1032,["modelValue","label","options","onFilter","onInputValue"])]),_:1},8,["modelValue","label","rules"])]),_:1}),W("div",Oe,[t(U,{color:"white","text-color":"black",style:{"margin-right":"25px"},onClick:e.cancelDataSubmit},{default:n(()=>[r(d(e.$t("cancel")),1)]),_:1},8,["onClick"]),t(U,{color:"primary",onClick:e.submitData},{default:n(()=>[r(d(e.$t("submit")),1)]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"])],64)}var Re=ie(we,[["render",qe]]);export{Re as default};
