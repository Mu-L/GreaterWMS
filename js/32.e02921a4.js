(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"02d8":function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var a=o("bc3a"),i=o.n(a),n=o("2b0e"),s="http://127.0.0.1:8000/",r=i.a.create({baseURL:s,timeout:5e3});n["a"].prototype.$axios=r},"12ec":function(t,e,o){"use strict";var a=o("c019"),i=o.n(a);e["default"]=i.a},"37de":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","margin-top":"-20px"}},[o("q-table",{attrs:{title:"Treats",dense:"",data:t.data,columns:t.columns,"row-key":"t_code",separator:t.separator,filter:t.filter,loading:t.loading,"selected-rows-label":t.getSelectedString,selection:"multiple",selected:t.selected,"hide-bottom":"",pagination:t.pagination,"no-data-label":"没有找到任何数据","no-results-label":"没有找到您想要的数据","table-style":{height:t.height}},on:{"update:selected":function(e){t.selected=e},"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[o("q-btn-group",{attrs:{push:""}},[o("q-btn",{attrs:{label:"新增",icon:"add"},on:{click:function(e){t.newForm=!0}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          新增一条数据\n        ")]),o("q-dialog",{model:{value:t.newForm,callback:function(e){t.newForm=e},expression:"newForm"}},[o("q-card",{staticClass:"shadow-24"},[o("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[o("div",[t._v("新增数据")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",[t._v("关闭")])],1)],1),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"500px"}},[o("q-input",{attrs:{label:t.label_name.name1,placeholder:t.placeholder_name.name1,autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newFormDataCheck()}},model:{value:t.newFormData.name,callback:function(e){t.$set(t.newFormData,"name",e)},expression:"newFormData.name"}}),o("q-select",{attrs:{options:t.propertylist,label:t.label_name.name2,placeholder:t.placeholder_name.name2},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newFormDataCheck()}},model:{value:t.newFormData.property_code,callback:function(e){t.$set(t.newFormData,"property_code",e)},expression:"newFormData.property_code"}})],1),o("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[o("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.newFormDataCancel()}}},[t._v("取消提交")]),o("q-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.newFormDataCheck()}}},[t._v("确认提交")])],1)],1)],1)],1),o("q-btn",{attrs:{label:"修改",icon:"edit"},on:{click:function(e){return t.editFormDataCheck()}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          修改数据，一次只能修改一条数据\n        ")]),o("q-dialog",{model:{value:t.editForm,callback:function(e){t.editForm=e},expression:"editForm"}},[o("q-card",{staticClass:"shadow-24"},[o("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[o("div",[t._v("修改数据")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",[t._v("关闭")])],1)],1),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"500px"}},[o("q-input",{attrs:{label:t.label_name.name1,placeholder:t.placeholder_name.name1,autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editFormDataSolve()}},model:{value:t.editFormData.name,callback:function(e){t.$set(t.editFormData,"name",e)},expression:"editFormData.name"}}),o("q-select",{attrs:{options:t.propertylist,label:t.label_name.name2,placeholder:t.placeholder_name.name2},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editFormDataSolve()}},model:{value:t.editFormData.property_code,callback:function(e){t.$set(t.editFormData,"property_code",e)},expression:"editFormData.property_code"}})],1),o("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[o("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.editFormDataCancel()}}},[t._v("取消提交")]),o("q-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.editFormDataSolve()}}},[t._v("确认提交")])],1)],1)],1)],1),o("q-btn",{attrs:{label:"删除",icon:"delete"},on:{click:function(e){return t.deleteDataCheck()}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          删除选中条数据，可以批量删除\n        ")]),o("q-dialog",{model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[o("q-card",{staticClass:"shadow-24"},[o("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[o("div",[t._v("删除数据")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[o("q-tooltip",[t._v("关闭")])],1)],1),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"500px"}},[t._v("\n            数据删除后不可逆\n        ")]),o("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[o("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.deleteDataCancel()}}},[t._v("取消提交")]),o("q-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.deleteDataSubmit()}}},[t._v("确认提交")])],1)],1)],1)],1),o("q-btn",{attrs:{label:"刷新",icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          刷新页面\n        ")])],1),o("q-btn",{attrs:{label:"下载",icon:"cloud_download"},on:{click:function(e){return t.downloadexample()}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          将选中的数据下载下来\n        ")])],1),o("q-btn-dropdown",{attrs:{"menu-anchor":"bottom right",label:"日期筛选"}},[o("div",{staticClass:"row no-wrap q-pa-md"},[o("div",{staticClass:"column"},[o("div",{staticClass:"text-h6"},[t._v("起始日期")]),o("q-date",{attrs:{"today-btn":""},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}})],1),o("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),o("div",{staticClass:"column"},[o("div",{staticClass:"text-h6"},[t._v("结束日期")]),o("q-date",{attrs:{"today-btn":""},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1)],1)]),o("q-btn",{attrs:{label:"日期查询",icon:"search"},on:{click:function(e){return t.DatereFresh()}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          确认以日期查询数据\n        ")])],1),o("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.selected.length>1,expression:"selected.length >1"}],attrs:{icon:"done_all"}},[t._v("Selected: "+t._s(JSON.stringify(t.selected.length))+"\n           "),o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          您选择了("+t._s(JSON.stringify(t.selected.length))+")条数据\n        ")])],1),o("q-btn",{directives:[{name:"show",rawName:"v-show",value:1===t.selected.length,expression:"selected.length === 1"}],attrs:{icon:"done"}},[t._v("Selected: "+t._s(JSON.stringify(t.selected.length))+"\n         "),o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          您选择了(1)条数据\n        ")])],1),o("q-btn",{directives:[{name:"show",rawName:"v-show",value:0===t.selected.length,expression:"selected.length === 0"}],attrs:{icon:"check_circle_outline"}},[t._v("Selected: "+t._s(JSON.stringify(t.selected.length))+"\n            "),o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          您还没有选择任何数据\n        ")])],1)],1),o("q-space"),o("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:"本页关键字搜索"},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"no-data",fn:function(e){var a=e.icon,i=e.message,n=e.filter;return[o("div",{staticClass:"full-width row flex-center text-accent q-gutter-sm"},[o("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),o("span",[t._v("\n            Well this is sad... "+t._s(i)+"\n          ")]),o("q-icon",{attrs:{size:"2em",name:n?"filter_b_and_w":a}})],1)]}}])}),[o("div",{staticClass:"q-pa-lg flex flex-center"},[o("q-pagination",{staticStyle:{"z-index":"1000"},attrs:{color:"purple",max:t.totlepage,"max-pages":7,"boundary-links":!0,"direction-links":!0,"boundary-numbers":!0},on:{click:function(e){return t.pageChange()}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)]],2)},i=[],n=(o("7f7f"),o("02d8")),s=o("b06b"),r={name:"Pageshipped",data:function(){return{pathname:"property/",authorization_get:!1,authorization_post:!1,authorization_getfile:!1,authorization_delete:!1,authorization_patch:!1,label_name:{name1:"库位属性",name2:"属性权限"},placeholder_name:{name1:"请输入库位属性名称",name2:"请选择属性权限"},separator:"cell",loading:!1,filter:"",selected:[],totlepage:1,current:1,height:"",columns:[{name:"name",required:!0,label:"库位属性",align:"left",field:"name"},{name:"property_code",label:"属性权限",field:"property_code"},{name:"create_name",label:"创建人",field:"create_name"},{name:"create_time",label:"创建时间",field:"create_time"},{name:"last_update_time",label:"最后修改时间",field:"last_update_time"}],data:[],pagination:{sortBy:"create_time",descending:!0,page:1,rowsPerPage:50},newForm:!1,propertylist:["正常库位","暂存","待检","破损","不可发货"],newFormData:{name:"",property_code:""},editForm:!1,editFormData:{},deleteDialog:!1,deleteFormData:[],date1:"",date2:""}},methods:{authCheck:function(){var t=this,e=this.$q.localStorage.getItem("openid");this.$axios.get(n["a"]+"userauth/",{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,authorization:"1"},data:{}}).then((function(e){"200"===e.data.results.code?0===e.data.results.data.length?(t.authorization_get=!0,t.authorization_post=!0,t.authorization_getfile=!0,t.authorization_delete=!0,t.authorization_patch=!0,t.getList()):1===e.data.results.data.length?(0===e.data.results.data[0].aut1?(t.authorization_get=!0,t.getList()):t.authorization_get=!1,0===e.data.results.data[0].aut2?t.authorization_getfile=!0:t.authorization_getfile=!1,0===e.data.results.data[0].aut3?t.authorization_post=!0:t.authorization_post=!1,0===e.data.results.data[0].aut4?t.authorization_patch=!0:t.authorization_patch=!1,0===e.data.results.data[0].aut5?t.authorization_delete=!0:t.authorization_delete=!1):(t.authorization=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})):(t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500}))})).catch((function(e){t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,console.log(e)}))},getList:function(){var t=this;if(this.authorization_get)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.get(n["a"]+this.pathname,{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,page:this.current,max_page:50,date1:this.date1,date2:this.date2},data:{}}).then((function(e){"200"===e.data.results.code?(e.data.results.data.forEach((function(t){1===t.property_code?t.property_code="正常库位":2===t.property_code?t.property_code="暂存":3===t.property_code?t.property_code="待检":4===t.property_code?t.property_code="破损":5===t.property_code&&(t.property_code="不可发货")})),t.data=e.data.results.data,t.totlepage=e.data.results.totlepage):t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有查询权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},getSelectedString:function(){return 0===this.selected.length?"":"".concat(this.selected.length," record").concat(this.selected.length>1?"s":""," selected of ").concat(this.data.length)},pageChange:function(){this.getList()},reFresh:function(){this.current=1,this.date1="",this.date2="",this.getList()},DatereFresh:function(){this.current=1,this.getList()},newFormDataCheck:function(){""===this.newFormData.name?this.$q.notify({message:"用户名不可以为空",icon:"close",color:"negative",position:"right",timeout:2500}):""===this.newFormData.property_code?this.$q.notify({message:"请选择属性权限",icon:"close",color:"negative",position:"right",timeout:2500}):"正常库位"===this.newFormData.property_code?(this.newFormData.property_code=1,this.newFormDataSubmit()):"暂存"===this.newFormData.property_code?(this.newFormData.property_code=2,this.newFormDataSubmit()):"待检"===this.newFormData.property_code?(this.newFormData.property_code=3,this.newFormDataSubmit()):"破损"===this.newFormData.property_code?(this.newFormData.property_code=4,this.newFormDataSubmit()):"不可发货"===this.newFormData.property_code?(this.newFormData.property_code=5,this.newFormDataSubmit()):this.$q.notify({message:"请选择属性权限",icon:"close",color:"negative",position:"right",timeout:2500})},newFormDataSubmit:function(){var t=this;if(this.authorization_post)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.post(n["a"]+this.pathname,{data:this.newFormData},{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e}}).then((function(e){"200"===e.data.code?(t.$q.notify({message:e.data.msg,icon:"check",color:"positive",position:"right",timeout:2500}),t.newFormDataCancel(),t.getList()):t.$q.notify({message:e.data.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.newFormDataCancel(),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有添加数据权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},newFormDataCancel:function(){this.newForm=!1,this.newFormData.name="",this.newFormData.property_code=""},editFormDataCheck:function(){if(this.$q.localStorage.has("openid"))if(0===this.selected.length)this.$q.notify({message:"您没有选中任何1条数据",icon:"close",color:"negative",position:"right",timeout:2500});else if(this.selected.length>1)this.$q.notify({message:"一次只能修改一条数据",icon:"close",color:"negative",position:"right",timeout:2500});else{this.$q.localStorage.set("editFormData",this.selected[0]);var t=this.$q.localStorage.getItem("editFormData");this.editFormData=t,this.editForm=!0}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500})},editFormDataSolve:function(){""===this.editFormData.property_code?this.$q.notify({message:"请选择属性权限",icon:"close",color:"negative",position:"right",timeout:2500}):"正常库位"===this.editFormData.property_code?(this.editFormData.property_code=1,this.editFormDataSubmit()):"暂存"===this.editFormData.property_code?(this.editFormData.property_code=2,this.editFormDataSubmit()):"待检"===this.editFormData.property_code?(this.editFormData.property_code=3,this.editFormDataSubmit()):"破损"===this.editFormData.property_code?(this.editFormData.property_code=4,this.editFormDataSubmit()):"不可发货"===this.editFormData.property_code?(this.editFormData.property_code=5,this.editFormDataSubmit()):this.$q.notify({message:"请选择属性权限",icon:"close",color:"negative",position:"right",timeout:2500})},editFormDataSubmit:function(){var t=this;if(this.authorization_patch)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.patch(n["a"]+this.pathname,{data:this.editFormData},{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e}}).then((function(e){"200"===e.data.code?(t.$q.notify({message:e.data.msg,icon:"check",color:"positive",position:"right",timeout:2500}),t.editFormDataCancel(),t.getList()):t.$q.notify({message:e.data.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.editFormDataCancel(),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有修改数据权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},editFormDataCancel:function(){this.editForm=!1,this.$q.localStorage.remove("editFormData"),this.editFormData={},this.selected=[]},deleteDataCheck:function(){this.$q.localStorage.has("openid")?0===this.selected.length?this.$q.notify({message:"您没有选中任何1条数据",icon:"close",color:"negative",position:"right",timeout:2500}):this.selected.length>0&&(this.deleteDialog=!0):this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500})},deleteDataSubmit:function(){var t=this;if(this.authorization_delete)if(this.$q.localStorage.has("openid")){this.selected.forEach((function(e){var o={t_code:e.t_code};t.deleteFormData.push(o)}));var e=this.$q.localStorage.getItem("openid");this.$axios.delete(n["a"]+this.pathname,{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e},data:{data:this.deleteFormData}}).then((function(e){"200"===e.data.code?(t.$q.notify({message:e.data.msg,icon:"check",color:"positive",position:"right",timeout:2500}),t.deleteDataCancel(),t.getList()):t.$q.notify({message:e.data.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.deleteDataCancel(),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有删除数据权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},deleteDataCancel:function(){this.deleteDialog=!1,this.selected=[],this.deleteFormData=[]},downloadexample:function(){this.authorization_getfile?this.$q.localStorage.has("openid")?Object(s["a"])(n["a"]+this.pathname+"?openid="+this.$q.localStorage.getItem("openid")+"&getfile=1"):this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500}):this.$q.notify({message:"您没有下载权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})}},created:function(){},mounted:function(){this.$q.localStorage.has("openid")&&this.authCheck(),this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"},updated:function(){}},c=r,l=o("2877"),d=o("12ec"),h=o("eebe"),p=o.n(h),m=o("eaac"),u=o("e7a9"),g=o("9c40"),f=o("05c0"),y=o("24e8"),_=o("f09f"),q=o("d847"),b=o("2c91"),v=o("a370"),D=o("27f9"),F=o("ddd8"),w=o("f20b"),x=o("52ee"),k=o("eb85"),S=o("0016"),$=o("3b16"),C=o("7f67"),z=Object(l["a"])(c,a,i,!1,null,null,null);"function"===typeof d["default"]&&Object(d["default"])(z);e["default"]=z.exports;p()(z,"components",{QTable:m["a"],QBtnGroup:u["a"],QBtn:g["a"],QTooltip:f["a"],QDialog:y["a"],QCard:_["a"],QBar:q["a"],QSpace:b["a"],QCardSection:v["a"],QInput:D["a"],QSelect:F["a"],QBtnDropdown:w["a"],QDate:x["a"],QSeparator:k["a"],QIcon:S["a"],QPagination:$["a"]}),p()(z,"directives",{ClosePopup:C["a"]})},c019:function(t,e){}}]);