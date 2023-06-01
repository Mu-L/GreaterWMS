import{j as d,c as a,h as o,k as q,a4 as k,a5 as I,a6 as g,a7 as K,r as b,g as y,a8 as R,a9 as $,p as j}from"./index.ecedd4f2.js";var D=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const u=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:u.value},q(n.default))}}),A=d({name:"QItem",props:{...k,...I,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:u}){const{proxy:{$q:i}}=y(),c=g(e,i),{hasLink:v,linkAttrs:h,linkClass:B,linkTag:_,navigateOnClick:C}=K(),s=b(null),r=b(null),m=a(()=>e.clickable===!0||v.value===!0||e.tag==="label"),l=a(()=>e.disable!==!0&&m.value===!0),L=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(c.value===!0?" q-item--dark":"")+(v.value===!0&&e.active===null?B.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(l.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),x=a(()=>{if(e.insetLevel===void 0)return null;const t=i.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function E(t){l.value===!0&&(r.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===s.value?r.value.focus():document.activeElement===r.value&&s.value.focus()),C(t))}function Q(t){if(l.value===!0&&R(t,13)===!0){$(t),t.qKeyEvent=!0;const f=new MouseEvent("click",t);f.qKeyEvent=!0,s.value.dispatchEvent(f)}u("keyup",t)}function S(){const t=j(n.default,[]);return l.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:r})),t}return()=>{const t={ref:s,class:L.value,style:x.value,onClick:E,onKeyup:Q};return l.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,h.value)):m.value===!0&&(t["aria-disabled"]="true"),o(_.value,t,S())}}}),P=d({name:"QList",props:{...k,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:n}){const u=y(),i=g(e,u.proxy.$q),c=a(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o("div",{class:c.value},q(n.default))}});export{P as Q,A as a,D as b};
