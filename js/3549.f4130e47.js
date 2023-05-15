"use strict";(self["webpackChunkchennai_airport"]=self["webpackChunkchennai_airport"]||[]).push([[3549],{8513:function(t,e,s){s.r(e),s.d(e,{default:function(){return R}});var a=s(3434),i=s(6656),r=s(2240),l=s(1444),n=s(6669),o=s(144),c=o.ZP.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=s(7678),h=s(4101),m=(0,d.Z)(a.Z,l.Z,c).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(i.Z,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(r.Z,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(r.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...a.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||n.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,h.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),u=s(3423),g=s(6190),p=s(9582),f=s(4886),v=s(266),b=s(2118),C=s(3863),k=s(9223),Z=s(4324),x=s(5495),_=s(4525),y=s(6900),B=s(9500),S=s(1713),w=s(9481),A=s(626),$=s(5517),E=s(6456),I=s(7808),T=function(){var t=this,e=t._self._c;return e("div",{},[e(p.Z,{staticClass:"mx-auto mt-n3"},[e(x.Z,{staticClass:"my-3",attrs:{src:s(2882),contain:""}}),e(f.EB,{staticClass:"justify-center text-uppercase page-title"},[t._v(" Flight Information ")])],1),e(E.Z,{staticClass:"mytabs",attrs:{"background-color":" accent-4",centered:""}},[e(A.Z,{staticClass:"border-radiusbefore",attrs:{href:"#tab1"}},[t._v(" Arrivals ")]),e($.Z,{attrs:{value:"tab1"}},[e(b.Z,[e(p.Z,{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"mx-auto rounded-xl mb-10 searchBox",class:{arrivalDepSearch:t.$vuetify.breakpoint.lgAndUp},staticStyle:{padding:"10px 0"}},[e(S.Z,[e(v.Z,{attrs:{cols:"12",md:"4"}},[e(_.Z,[e(y.Z,{staticClass:"mt-7 ml-5",attrs:{rounded:"0",size:"20"}},[e(x.Z,{attrs:{src:s(4206)}})],1),e(B.km,[e("div",[e(I.Z,{attrs:{label:"Search by City / Flight no.","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)])],1)],1),e(k.Z,{staticClass:"mt-5 mb-5",attrs:{vertical:""}}),e(v.Z,{attrs:{cols:"12",md:"3"}},[e(_.Z,{attrs:{"two-line":""}},[e(y.Z,{staticClass:"mt-7 ml-5",attrs:{rounded:"0",size:"20"}},[e(x.Z,{attrs:{src:s(8655)}})],1),e(B.km,[e("div",[e(w.Z,{attrs:{items:t.allflights,"hide-details":"",label:"All Flights",flat:""}})],1)])],1)],1),e(k.Z,{staticClass:"mt-5 mb-5",attrs:{vertical:""}}),e(v.Z,{attrs:{cols:"12",md:"3"}},[e(_.Z,{attrs:{"two-line":""}},[e(y.Z,{staticClass:"mt-7 ml-5",attrs:{rounded:"0",size:"20"}},[e(x.Z,{attrs:{src:s(7251)}})],1),e(B.km,[e("div",[e(w.Z,{attrs:{items:t.allterminals,"hide-details":"",label:"All Terminals",flat:""}})],1)])],1)],1),e(v.Z,{attrs:{cols:"12",md:"2"}},[e(_.Z,{attrs:{"two-line":""}},[e(B.km,[e(g.Z,{staticClass:"gradient-button",attrs:{rounded:"",dark:"",large:""}},[t._v(" See All Flights ")])],1)],1)],1)],1)],1),e(C.Z,{staticClass:"mytable",attrs:{headers:t.headers,items:t.flightlist,search:t.search,"sortable:":"",false:""},on:{"click:row":t.rowClick},scopedSlots:t._u([{key:"item.flight",fn:function({item:s}){return[e("span",{staticStyle:{display:"block"}},[t._v(t._s(s.flight))]),e("span",{staticClass:"small-text-table"},[t._v(t._s(s.name))])]}},{key:"item.img",fn:function({item:t}){return[e(p.Z,{staticClass:"pt-6 pb-6",attrs:{flat:"",color:"transparent"}},[e(f.EB,{staticClass:"pa-0 ml-6"},[e(u.Z,{attrs:{tile:"",size:"64"}},[e("img",{staticClass:"mt-1",attrs:{src:t.img}})])],1)],1)]}},{key:"item.status",fn:function({item:s}){return[e(m,{staticClass:"rounded-xl text-center",attrs:{text:"",color:t.getColor(s.status)}},[t._v(" "+t._s(s.status)+" ")])]}},{key:"item.track",fn:function({item:s}){return[e("router-link",{attrs:{to:"/trackflights"}},[e(g.Z,{staticClass:"mx-2 gradiant-blue",attrs:{depressed:"",small:"",fab:"",dark:""}},[e(Z.Z,{attrs:{dark:""}},[t._v(" mdi-plus "+t._s(s.track)+" ")])],1)],1)]}}],null,!0)})],1)],1),e(A.Z,{staticClass:"border-radiusafter",attrs:{href:"#tab2"}},[t._v(" Departures ")]),e($.Z,{attrs:{value:"tab2"}},[e(b.Z,[e(p.Z,{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"mx-auto rounded-xl mb-10 searchBox",class:{arrivalDepSearch:t.$vuetify.breakpoint.lgAndUp},staticStyle:{padding:"10px 0"}},[e(S.Z,[e(v.Z,{attrs:{cols:"12",md:"4"}},[e(_.Z,[e(y.Z,{staticClass:"mt-7 ml-5",attrs:{rounded:"0",size:"20"}},[e(x.Z,{attrs:{src:s(4206)}})],1),e(B.km,[e("div",[e(I.Z,{attrs:{label:"Search by City / Flight no.","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)])],1)],1),e(k.Z,{staticClass:"mt-5 mb-5",attrs:{vertical:""}}),e(v.Z,{attrs:{cols:"12",md:"3"}},[e(_.Z,{attrs:{"two-line":""}},[e(y.Z,{staticClass:"mt-7 ml-5",attrs:{rounded:"0",size:"20"}},[e(x.Z,{attrs:{src:s(8655)}})],1),e(B.km,[e("div",[e(w.Z,{attrs:{items:t.allflights,"hide-details":"",label:"All Flights",flat:""}})],1)])],1)],1),e(k.Z,{staticClass:"mt-5 mb-5",attrs:{vertical:""}}),e(v.Z,{attrs:{cols:"12",md:"3"}},[e(_.Z,{attrs:{"two-line":""}},[e(y.Z,{staticClass:"mt-7 ml-5",attrs:{rounded:"0",size:"20"}},[e(x.Z,{attrs:{src:s(7251)}})],1),e(B.km,[e("div",[e(w.Z,{attrs:{items:t.allterminals,"hide-details":"",label:"All Terminals",flat:""}})],1)])],1)],1),e(v.Z,{attrs:{cols:"12",md:"2"}},[e(_.Z,{attrs:{"two-line":""}},[e(B.km,[e(g.Z,{staticClass:"gradient-button",attrs:{rounded:"",dark:"",large:""}},[t._v(" See All Flights ")])],1)],1)],1)],1)],1),e(C.Z,{staticClass:"mytable",attrs:{headers:t.headersdepartureslist,items:t.departureslist,search:t.search,"sortable:":"",false:""},scopedSlots:t._u([{key:"item.flight",fn:function({item:s}){return[e("span",{staticStyle:{display:"block"}},[t._v(t._s(s.flight))]),e("span",{staticClass:"small-text-table"},[t._v(t._s(s.name))])]}},{key:"item.img",fn:function({item:t}){return[e(p.Z,{staticClass:"pt-6 pb-6",attrs:{flat:"",color:"transparent"}},[e(f.EB,{staticClass:"pa-0 ml-6"},[e(u.Z,{attrs:{tile:"",size:"64"}},[e("img",{staticClass:"mt-1",attrs:{src:t.img,width:"50"}})])],1)],1)]}},{key:"item.status",fn:function({item:s}){return[e(m,{staticClass:"rounded-xl text-center",attrs:{text:"",color:t.getColor(s.status)}},[t._v(" "+t._s(s.status)+" ")])]}},{key:"item.track",fn:function({item:s}){return[e("router-link",{attrs:{to:"/trackflightsdepature"}},[e(g.Z,{staticClass:"mx-2 gradiant-blue",attrs:{depressed:"",small:"",fab:"",dark:"",to:"/trackflightsdepature"}},[e(Z.Z,{attrs:{dark:""}},[t._v(" mdi-plus "+t._s(s.track)+" ")])],1)],1)]}}],null,!0)})],1)],1)],1)],1)},D=[],F=(s(7658),{data(){return{search:"",filter:{},headers:[{class:"header-airline",text:"Airline",align:"start",filterable:!1,value:"img",sortBy:"flight",width:"6%"},{text:"Flight",value:"flight"},{text:"Origin",value:"origin"},{text:"Scheduled",value:"scheduled"},{text:"Estimated",value:"estimated"},{text:"Status",value:"status"},{text:"Terminal",value:"terminal"},{text:"Baggage",value:"baggage"},{text:"Track",value:"track",sortable:!1}],headersdepartureslist:[{class:"header-airline",text:"Airline",align:"start",filterable:!1,value:"img",sortBy:"flight",width:"6%"},{text:"Flight",value:"flight"},{text:"Destination",value:"destination"},{text:"Scheduled",value:"scheduled"},{text:"Estimated",value:"estimated"},{text:"Status",value:"status"},{text:"Terminal",value:"terminal"},{text:"Check-in",value:"checkin"},{text:"Gate",value:"gate"},{text:"Track",value:"track",sortable:!1}],allflights:[{text:"All"},{text:"Indigo"},{text:"Emirates"}],allterminals:[{text:"All"},{text:"1"},{text:"2"}],flightlist:[{img:s(970),flightlistId:"1",name:"Indigo",flight:"6E 5284",origin:"Chennai",scheduled:"14:10",estimated:"14:23",status:"Arrived",terminal:"T1",baggage:"Belt 3"},{img:s(7700),flightlistId:"2",name:"Emirates",flight:"6EK 568",origin:"Dubai",scheduled:"14:10",estimated:"14:23",status:"On Time",terminal:"T1",baggage:"Belt 3"},{img:s(970),flightlistId:"3",name:"Indigo",flight:"6E 5284",origin:"Chennai",scheduled:"14:10",estimated:"14:23",status:"Delayed",terminal:"T1",baggage:"Belt 3"}],departureslist:[{img:s(970),flightlistId:"3",name:"Indigo",flight:"6E 5284",destination:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Scheduled",terminal:"T1",checkin:"Row 3",gate:"Gate 3"},{img:s(7700),name:"Emirates",flight:"6EK 568",destination:"Dubai",scheduled:"14:10",estimated:"14:23",status:"Check-in Open",terminal:"T3",checkin:"Row  1",gate:"Gate 3"},{img:s(9567),name:"Sri Lankan Airlines",flight:"UL 174",destination:"Colombo",scheduled:"14:10",estimated:"14:23",status:"Gate Closed",terminal:"T1",checkin:"Row  7",gate:"Gate 3"},{img:s(9778),name:"Lufthansa",flight:"LF 754",destination:"Frankfurt",scheduled:"14:10",estimated:"14:23",status:"Boarding",terminal:"T1",checkin:"Row  7",gate:"Gate 3"},{img:s(9763),name:"AirAsia India",flight:"I51732",destination:"Mumbai",scheduled:"14:10",estimated:"14:23",status:"Departed",terminal:"T1",checkin:"Row  7",gate:"Gate 3"},{img:s(970),name:"Indigo",flight:"6E 5284",destination:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Security Check",terminal:"T1",checkin:"Row 3",gate:"Gate 3"},{img:s(7700),name:"Emirates",flight:"6EK 568",destination:"Dubai",scheduled:"14:10",estimated:"14:23",status:"Final Call",terminal:"T3",checkin:"Row  1",gate:"Gate 3"},{img:s(9567),name:"Sri Lankan Airlines",flight:"UL 174",destination:"Colombo",scheduled:"14:10",estimated:"14:23",status:"On Time",terminal:"T1",checkin:"Row  7",gate:"Gate 3"}]}},methods:{getColor(t){return"Delayed"==t||"Gate Closed"==t||"Final Call"==t||"Departed"==t?"red":"Check-in Open"==t||"Boarding"==t||"Security Check"==t?"blue":"success"},rowClick(t){this.$router.push("trackflights/"),console.log(t.name)}}}),G=F,L=s(3736),z=(0,L.Z)(G,T,D,!1,null,"07dec756",null),R=z.exports},9763:function(t,e,s){t.exports=s.p+"img/AirAsia.44c165c6.svg"},9778:function(t,e,s){t.exports=s.p+"img/Lufthansa.3e00027a.svg"},7700:function(t,e,s){t.exports=s.p+"img/emirates.821d6b73.svg"},970:function(t,e,s){t.exports=s.p+"img/flightimg.746fd422.svg"},9567:function(t,e,s){t.exports=s.p+"img/srilanka.8827fdc8.svg"},8655:function(t,e,s){t.exports=s.p+"img/allflightIcon.7418ec43.svg"},7251:function(t,e,s){t.exports=s.p+"img/allterminalIcon.fe5aef12.svg"},4206:function(t,e,s){t.exports=s.p+"img/search.5ae3b8a0.svg"},2882:function(t,e,s){t.exports=s.p+"img/Banner_AirindiaFlight01a.80458bca.jpg"}}]);
//# sourceMappingURL=3549.f4130e47.js.map