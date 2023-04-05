"use strict";(self["webpackChunkchennai_airport"]=self["webpackChunkchennai_airport"]||[]).push([[686],{2416:function(t,a,e){e.r(a),e.d(a,{default:function(){return w}});var i=e(6190),s=e(9582),l=e(4886),r=e(4127),n=e(2118),d=e(3863),o=e(4061),u=e(9223),c=e(4324),g=e(5495),m=e(6243),h=e(8687),f=e(9481),p=e(3687),b=e(626),x=e(5517),v=e(6456),k=e(7808),Z=e(6313),C=function(){var t=this,a=t._self._c;return a("div",{},[a(s.Z,{staticClass:"mx-auto mt-n3"},[a(g.Z,{staticClass:"my-3",attrs:{src:e(5692),contain:""}}),a(l.EB,{staticClass:"justify-center text-uppercase page-title"},[t._v(" Flight Information ")])],1),a(v.Z,{staticClass:"mytabs",attrs:{"background-color":" accent-4",centered:""}},[a(b.Z,{staticClass:"border-radiusbefore",attrs:{href:"#tab1"}},[t._v(" Arrivals ")]),a(x.Z,{attrs:{value:"tab1"}},[a(n.Z,[a("div",{staticClass:"rounded-xl",staticStyle:{width:"100%",padding:"10px",margin:"35px auto","background-color":"#fff","box-shadow":"0px 20px 25px -5px rgba(16, 24, 40, 0.06), 0px 8px 10px -6px rgba(16, 24, 40, 0.06)",border:"2px solid #F3F4F6"}},[a(Z.Z,{attrs:{flat:""}},[a(k.Z,{attrs:{"prepend-icon":"mdi-magnify",label:"Search by City / Flight no.","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}}),a(u.Z,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a(p.Z),a(f.Z,{attrs:{items:t.allflights,"prepend-icon":"mdi-airplane","hide-details":"",label:"All Flights",flat:""}}),a(u.Z,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a(f.Z,{attrs:{items:t.allterminals,"prepend-icon":"mdi-airport","hide-details":"",label:"All Terminals",flat:""}}),a(p.Z),a(o.Z,{attrs:{transition:"dialog-bottom-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:s}){return[a(i.Z,t._g(t._b({attrs:{rounded:"",large:"",color:"#E8EFFE"}},"v-btn",s,!1),e),[t._v(" Filters ")])]}},{key:"default",fn:function(e){return[a(s.Z,{staticClass:"rounded-xl"},[a(l.EB,[a("span",{staticClass:"text-h5"},[t._v("Sort & Filter")])]),a(l.ZB,[a(h.Z,{attrs:{column:""}},[a(m.Z,{attrs:{label:"Bahamas, The",value:"bahamas"}}),a(m.Z,{attrs:{label:"Bahrain",value:"bahrain"}}),a(m.Z,{attrs:{label:"Bangladesh",value:"bangladesh"}}),a(m.Z,{attrs:{label:"Barbados",value:"barbados"}})],1)],1),a(l.h7,{staticClass:"justify-end"},[a(i.Z,{attrs:{text:""},on:{click:function(t){e.value=!1}}},[t._v(" Reset Filters > ")]),a(i.Z,{staticClass:"gradient-button pl-10 pr-10",attrs:{rounded:"",dark:"",large:""},on:{click:function(t){e.value=!1}}},[t._v(" Apply ")])],1)],1)]}}])}),a(p.Z),a(i.Z,{staticClass:"gradient-button",attrs:{rounded:"",dark:"",large:""}},[t._v(" See All Flights ")])],1)],1),a(d.Z,{staticClass:"mytable",attrs:{headers:t.headers,items:t.flightlist,search:t.search},on:{"click:row":t.rowClick},scopedSlots:t._u([{key:"item.flightlistId",fn:function({item:a}){return[t._v(t._s(a.flightlistId))]}},{key:"item.img",fn:function({item:t}){return[a("img",{staticClass:"mt-1",attrs:{src:t.img,width:"50"}})]}},{key:"item.status",fn:function({item:e}){return[a(r.Z,{attrs:{color:t.getColor(e.status),dark:""}},[t._v(" "+t._s(e.status)+" ")])]}},{key:"item.track",fn:function({item:e}){return[a("router-link",{attrs:{to:"/trackflights"}},[a(i.Z,{staticClass:"mx-2",attrs:{small:"",fab:"",dark:"",color:"indigo"}},[a(c.Z,{attrs:{dark:""}},[t._v(" mdi-plus "+t._s(e.track)+" ")])],1)],1)]}}],null,!0)})],1)],1),a(b.Z,{staticClass:"border-radiusafter",attrs:{href:"#tab2"}},[t._v(" Departures ")]),a(x.Z,{attrs:{value:"tab2"}},[a(n.Z,[a("div",{staticClass:"rounded-xl",staticStyle:{width:"100%",padding:"10px",margin:"35px auto","background-color":"#fff","box-shadow":"0px 20px 25px -5px rgba(16, 24, 40, 0.06), 0px 8px 10px -6px rgba(16, 24, 40, 0.06)",border:"2px solid #F3F4F6"}},[a(Z.Z,{attrs:{flat:""}},[a(k.Z,{attrs:{"prepend-icon":"mdi-magnify",label:"Search by City / Flight no.","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}}),a(u.Z,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a(p.Z),a(f.Z,{attrs:{items:t.allflights,"prepend-icon":"mdi-airplane","hide-details":"",label:"All Flights",flat:""}}),a(u.Z,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a(f.Z,{attrs:{items:t.allterminals,"prepend-icon":"mdi-airport","hide-details":"",label:"All Terminals",flat:""}}),a(p.Z),a(o.Z,{attrs:{transition:"dialog-bottom-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:s}){return[a(i.Z,t._g(t._b({attrs:{rounded:"",large:"",color:"#E8EFFE"}},"v-btn",s,!1),e),[t._v(" Filters ")])]}},{key:"default",fn:function(e){return[a(s.Z,{staticClass:"rounded-xl"},[a(l.EB,[a("span",{staticClass:"text-h5"},[t._v("Sort & Filter")])]),a(l.ZB,[a(h.Z,{attrs:{column:""}},[a(m.Z,{attrs:{label:"Bahamas, The",value:"bahamas"}}),a(m.Z,{attrs:{label:"Bahrain",value:"bahrain"}}),a(m.Z,{attrs:{label:"Bangladesh",value:"bangladesh"}}),a(m.Z,{attrs:{label:"Barbados",value:"barbados"}})],1)],1),a(l.h7,{staticClass:"justify-end"},[a(i.Z,{attrs:{text:""},on:{click:function(t){e.value=!1}}},[t._v(" Reset Filters > ")]),a(i.Z,{staticClass:"gradient-button pl-10 pr-10",attrs:{rounded:"",dark:"",large:""},on:{click:function(t){e.value=!1}}},[t._v(" Apply ")])],1)],1)]}}])}),a(p.Z),a(i.Z,{staticClass:"gradient-button",attrs:{rounded:"",dark:"",large:""}},[t._v(" See All Flights ")])],1)],1),a(d.Z,{staticClass:"mytable",attrs:{headers:t.headersdepartureslist,items:t.departureslist,search:t.search},scopedSlots:t._u([{key:"item.img",fn:function({item:t}){return[a("img",{staticClass:"mt-1",attrs:{src:t.img,width:"50"}})]}},{key:"item.status",fn:function({item:e}){return[a(r.Z,{attrs:{color:t.getColor(e.status),dark:""}},[t._v(" "+t._s(e.status)+" ")])]}},{key:"item.track",fn:function({item:e}){return[a("router-link",{attrs:{to:"/trackflights"}},[a(i.Z,{staticClass:"mx-2",attrs:{small:"",fab:"",dark:"",color:"indigo",to:"/trackflights"}},[a(c.Z,{attrs:{dark:""}},[t._v(" mdi-plus "+t._s(e.track)+" ")])],1)],1)]}}],null,!0)})],1)],1)],1)],1)},_=[],y=(e(7658),{data(){return{search:"",filter:{},headers:[{text:"Airline",align:"start",filterable:!1,value:"img",sortBy:"flight"},{text:"Flight / Id",value:"flightlistId"},{text:"Flight Name",value:"name"},{text:"Flight",value:"flight"},{text:"Origin",value:"origin"},{text:"Scheduled",value:"scheduled"},{text:"Estimated",value:"estimated"},{text:"Status",value:"status"},{text:"Terminal",value:"terminal"},{text:"Baggage",value:"baggage"},{text:"Track",value:"track",sortable:!1}],headersdepartureslist:[{text:"Airline",align:"start",filterable:!1,value:"img",sortBy:"flight"},{text:"Flight / Id",value:"flightlistId"},{text:"Flight Name",value:"name"},{text:"Flight",value:"flight"},{text:"Origin",value:"origin"},{text:"Scheduled",value:"scheduled"},{text:"Estimated",value:"estimated"},{text:"Status",value:"status"},{text:"Terminal",value:"terminal"},{text:"Check-in",value:"checkin"},{text:"Gate",value:"gate"},{text:"Track",value:"track",sortable:!1}],allflights:[{text:"All"},{text:"Indigo"},{text:"Emirates"}],allterminals:[{text:"All"},{text:"1"},{text:"2"}],flightlist:[{img:e(970),flightlistId:"1",name:"Indigo",flight:"6E 5284",origin:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Arrived",terminal:"T1",baggage:"Belt 3"},{img:e(7700),flightlistId:"2",name:"Emirates",flight:"6EK 568",origin:"Dubai",scheduled:"14:10",estimated:"14:23",status:"On Time",terminal:"T1",baggage:"Belt 3"},{img:e(970),flightlistId:"3",name:"Indigo",flight:"6E 5284",origin:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Delayed",terminal:"T1",baggage:"Belt 3"}],departureslist:[{img:e(970),name:"Indigo",flight:"6E 5284",origin:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Scheduled",terminal:"T1",checkin:"Row 3",gate:"Gate 3"},{img:e(7700),name:"Emirates",flight:"6EK 568",origin:"Dubai",scheduled:"14:10",estimated:"14:23",status:"Check-in Open",terminal:"T3",checkin:"Row  1",gate:"Gate 3"},{img:e(9567),name:"Sri Lankan Airlines",flight:"UL 174",origin:"Colombo",scheduled:"14:10",estimated:"14:23",status:"Gate Closed",terminal:"T1",checkin:"Row  7",gate:"Gate 3"},{img:e(9778),name:"Lufthansa",flight:"LF 754",origin:"Frankfurt",scheduled:"14:10",estimated:"14:23",status:"Boarding",terminal:"T1",checkin:"Row  7",gate:"Gate 3"},{img:e(9763),name:"AirAsia India",flight:"I51732",origin:"Mumbai",scheduled:"14:10",estimated:"14:23",status:"Departed",terminal:"T1",checkin:"Row  7",gate:"Gate 3"},{img:e(970),name:"Indigo",flight:"6E 5284",origin:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Security Check",terminal:"T1",checkin:"Row 3",gate:"Gate 3"},{img:e(7700),name:"Emirates",flight:"6EK 568",origin:"Dubai",scheduled:"14:10",estimated:"14:23",status:"Final Call",terminal:"T3",checkin:"Row  1",gate:"Gate 3"},{img:e(9567),name:"Sri Lankan Airlines",flight:"UL 174",origin:"Colombo",scheduled:"14:10",estimated:"14:23",status:"On Time",terminal:"T1",checkin:"Row  7",gate:"Gate 3"}]}},methods:{getColor(t){return"Delayed"==t||"Gate Closed"==t||"Final Call"==t||"Departed"==t?"red":"Check-in Open"==t||"Boarding"==t||"Security Check"==t?"blue":"green"},rowClick(t){this.$router.push("trackflights/"),console.log(t.name)}}}),F=y,B=e(1001),E=(0,B.Z)(F,C,_,!1,null,"222d6e5e",null),w=E.exports},9763:function(t,a,e){t.exports=e.p+"img/AirAsia.e54233df.svg"},9778:function(t,a,e){t.exports=e.p+"img/Lufthansa.3e3a121a.svg"},5692:function(t,a,e){t.exports=e.p+"img/flightInfo.6b83e33b.jpg"}}]);
//# sourceMappingURL=686.d4270c57.js.map