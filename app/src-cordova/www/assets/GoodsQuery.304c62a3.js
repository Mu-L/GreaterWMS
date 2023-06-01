import{Q as i}from"./QItemLabel.401df7d4.js";import{Q as M,b as o,a as u}from"./QList.0e7c6001.js";import{_ as R,aD as j,L as P,aS as Y,r as Z,c as l,w as A,o as z,R as E,S as F,U as a,f as e,Y as s,Z as d,a1 as g}from"./index.37336b5e.js";import{u as H}from"./use-quasar.028b6fdf.js";import{u as J}from"./vue-i18n.runtime.esm-bundler.da72cb22.js";import{a as K}from"./index.9b9dbd7c.js";import"./axios.d3fea899.js";const W=j({name:"GoodsQuery",data(){return{}},setup(){const t=P();Y();const _=H(),h=Z(0),{t:c}=J(),v=l({get:()=>t.state.fabchange.fab1}),b=l({get:()=>t.state.fabchange.fab2}),G=l({get:()=>t.state.fabchange.fab3}),I=l({get:()=>t.state.fabchange.fab4}),w=l({get:()=>t.state.screenchange.screenscroll}),$=l({get:()=>t.state.loginauth.authin}),O=l({get:()=>t.state.loginauth.login_name}),C=l({get:()=>t.state.loginauth.operator}),S=l({get:()=>t.state.settings.openid}),D=l({get:()=>t.state.langchange.lang}),y=l({get:()=>t.state.settings.server}),r=l({get:()=>t.state.scanchanged.scandata,set:n=>{t.commit("scanchanged/ScanChanged",n)}}),Q=l({get:()=>t.state.scanchanged.datadetail,set:n=>{t.commit("scanchanged/ScanDataChanged",n)}}),T=l({get:()=>t.state.scanchanged.asndata,set:n=>{t.commit("scanchanged/ASNDataChanged",n)}}),U=l({get:()=>t.state.scanchanged.dndata,set:n=>{t.commit("scanchanged/DNDataChanged",n)}}),k=l({get:()=>t.state.scanchanged.bindata,set:n=>{t.commit("scanchanged/BinDataChanged",n)}}),B=l({get:()=>t.state.scanchanged.tablelist,set:n=>{t.commit("scanchanged/TableDataChanged",n)}}),p=l({get:()=>t.state.scanchanged.scanmode,set:n=>{t.commit("scanchanged/ScanModeChanged",n)}}),V=l({get:()=>t.state.scanchanged.bar_scanned}),m=l({get:()=>t.state.scanchanged.apiurl,set:n=>{t.commit("scanchanged/ApiUrlChanged",n)}}),L=l({get:()=>t.state.scanchanged.apiurlnext,set:n=>{t.commit("scanchanged/ApiUrlNextChanged",n)}}),q=l({get:()=>t.state.scanchanged.apiurlprevious,set:n=>{t.commit("scanchanged/ApiUrlPreviousChanged",n)}});function N(n){m.value=y.value+"goods/?goods_code="+n,K.get(m.value,{headers:{"Content-Type":'application/json, charset="utf-8"',token:S.value,language:D.value,operator:C.value}}).then(f=>{f.data.detail?_.notify({type:"negative",message:c("notice.mobile_scan.notice1")}):Q.value=f.data.results[0]}).catch(f=>{_.notify({type:"negative",message:c("notice.mobile_scan.notice3")})})}return A(V,(n,f)=>{p.value==="GOODS"&&N(r.value)}),A(w,(n,f)=>{}),z(()=>{$.value==="0"?_.notify({type:"negative",message:c("notice.mobile_userlogin.notice9")}):p.value==="GOODS"&&N(r.value)}),{t:c,fab1:v,fab2:b,fab3:G,fab4:I,screenscroll:w,authin:$,login_name:O,openid:S,operator:C,lang:D,requestauth:h,baseurl:y,apiurl:m,apiurlnext:L,apiurlprevious:q,scandata:r,datadetail:Q,tablelist:B,asndata:T,dndata:U,bindata:k,scanmode:p,bar_scanned:V}}});function X(t,_,h,c,v,b){return E(),F(M,{bordered:"",padding:""},{default:a(()=>[e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[e(i,null,{default:a(()=>[s(d(t.datadetail.goods_code),1)]),_:1}),e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_desc),1)]),_:1})]),_:1}),e(o,{side:"",top:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.update_time),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:""}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_supplier")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_supplier),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_weight")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_weight),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_w")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_w),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_d")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_d),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_h")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_h),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.unit_volume")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.unit_volume),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_unit")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_unit),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_class")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_class),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_brand")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_brand),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_color")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_color),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_shape")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_shape),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_specs")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_specs),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_origin")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_origin),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_cost")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_cost),1)]),_:1})]),_:1})]),_:1}),e(g,{spaced:"",inset:"item"}),e(u,null,{default:a(()=>[e(o,null,{default:a(()=>[s(d(t.$t("goods.view_goodslist.goods_price")),1)]),_:1}),e(o,{side:""},{default:a(()=>[e(i,{caption:""},{default:a(()=>[s(d(t.datadetail.goods_price),1)]),_:1})]),_:1})]),_:1})]),_:1})}var ne=R(W,[["render",X]]);export{ne as default};
