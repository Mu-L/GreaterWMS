(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{"727c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("q-card",{staticClass:"shadow-11",style:{height:t.height}},[e("q-card-section",[e("div",{staticClass:"text-h6 text-grey-8 text-weight-bolder"},[t._v("\n      "+t._s(t.selected_product+t.$t("index.chart"))+"\n      "),e("q-select",{staticClass:"bg-white float-right q-mb-sm",staticStyle:{width:"300px"},attrs:{outlined:"",options:t.product_options,label:"Select Product"},model:{value:t.selected_product,callback:function(e){t.selected_product=e},expression:"selected_product"}})],1)]),e("q-card-section",{style:{height:t.height2,marginTop:"10px"}},[e("IEcharts",{attrs:{option:t.barChartOption,resizable:!0}})],1)],1)},i=[],o=a("ce44"),n=a("3004"),h=a("18d6"),r={name:"charts",data(){return{login_name:"",authin:"0",pathname:"dashboard/",height:"",height2:"",width:"100%",barChartOption:{grid:{bottom:"25%"},legend:{},tooltip:{},dataset:{dimensions:[],source:[]},xAxis:{type:"category",axisLabel:{rotate:45},nameLocation:"middle",nameGap:78},yAxis:{type:"value",splitLine:{show:!0,lineStyle:{type:[30,20]}}},series:[]},selected_product:this.$t("dashboards.total_sales"),product_options:[this.$t("dashboards.total_sales")]}},methods:{getList(){var t=this;t.$q.localStorage.has("auth")&&Object(n["f"])(t.pathname+"sales/",{}).then((e=>{t.barChartOption.dataset=e.dataset,t.barChartOption.series=e.series})).catch((t=>{console.log(t)}))}},created(){var t=this;h["a"].has("openid")?t.openid=h["a"].getItem("openid"):(t.openid="",h["a"].set("openid","")),h["a"].has("login_name")?t.login_name=h["a"].getItem("login_name"):(t.login_name="",h["a"].set("login_name","")),h["a"].has("auth")?t.authin="1":t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-190)+"px":t.height=t.$q.screen.height-190+"px",t.$q.platform.is.electron?t.height2=String(t.$q.screen.height-270)+"px":t.height2=t.$q.screen.height-270+"px",t.getList()},components:{IEcharts:o["a"]}},c=r,l=a("42e1"),d=a("f09f"),p=a("a370"),g=a("ddd8"),u=a("eebe"),m=a.n(u),b=Object(l["a"])(c,s,i,!1,null,null,null);e["default"]=b.exports;m()(b,"components",{QCard:d["a"],QCardSection:p["a"],QSelect:g["a"]})}}]);