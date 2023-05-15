"use strict";(self["webpackChunkchennai_airport"]=self["webpackChunkchennai_airport"]||[]).push([[9491],{9710:function(t,e,a){a.r(e),a.d(e,{default:function(){return A}});var s=a(6232),i=a(3423),r=a(6190),l=a(9582),n=a(4886),o=a(266),c=a(2118),p=a(3863),m=a(4324),u=a(5495),d=a(1713),g=a(3687),h=a(626),C=a(5517),f=a(6456),b=a(7953),k=function(){var t=this,e=t._self._c;return e("div",{},[e(l.Z,{staticClass:"mx-auto mt-n3"},[e(u.Z,{staticClass:"my-3",attrs:{src:a(5692),contain:""}}),e(n.EB,{staticClass:"justify-center text-uppercase page-title"},[t._v(" Airline Information ")])],1),e(f.Z,{staticClass:"mytabs",attrs:{"background-color":" accent-4",centered:""}},[e(h.Z,{staticClass:"border-radiusbefore",attrs:{href:"#tab1"}},[t._v(" Domestic ")]),e(C.Z,{attrs:{value:"tab1"}},[e(c.Z,[e(s.Z,{staticClass:"mx-auto rounded-xl mb-10",attrs:{width:"45%",color:"#E8EFFE",flat:""}},[e(i.Z,{staticClass:"ma-3",attrs:{size:"24",tile:""}},[e(u.Z,{attrs:{src:a(3701)}})],1),e(g.Z),e(b.qW,{staticClass:"text-center"},[t._v("See a list of all our flight destinations")]),e(g.Z),e(r.Z,{staticClass:"mx-2 rounded-pill gradiant-blue",attrs:{dark:""}},[t._v(" Explore ")])],1),e(p.Z,{staticClass:"mytable",attrs:{headers:t.headers,items:t.flightlist,search:t.search},on:{"click:row":t.rowClick},scopedSlots:t._u([{key:"item.CallSign",fn:function({item:a}){return[e("div",{staticClass:"text-uppercase"},[t._v(t._s(a.CallSign))])]}},{key:"item.img",fn:function({item:a}){return[e(l.Z,{staticClass:"pt-6 pb-6",attrs:{flat:"",color:"transparent"}},[e(n.EB,{staticClass:"pa-0 ml-6"},[e(i.Z,{attrs:{tile:"",size:"64"}},[e("img",{attrs:{src:a.img}})]),e("p",{staticClass:"mb-0 ml-6"},[t._v(" "+t._s(a.name)+" ")])],1)],1)]}},{key:"item.WebCheckIn",fn:function({item:a}){return[e(r.Z,{staticClass:"mx-2 rounded-pill pl-6 pr-6",attrs:{color:"#E8EFFE",depressed:""}},[e(m.Z,{attrs:{dark:""}},[t._v(" mdi-checkbox-marked-outline "+t._s(a.WebCheckIn)+" ")]),t._v(" Check in ")],1)]}},{key:"item.moreInfo",fn:function({item:a}){return[e(r.Z,{staticClass:"mx-2 rounded-pill gradiant-blue pl-6 pr-6",attrs:{dark:""}},[t._v(" More Info "+t._s(a.moreInfo)+" ")])]}}],null,!0)})],1)],1),e(h.Z,{staticClass:"border-radiusafter",attrs:{href:"#tab2"}},[t._v(" International ")]),e(C.Z,{attrs:{value:"tab2"}},[e(c.Z,[e(s.Z,{staticClass:"mx-auto rounded-xl mb-10",attrs:{width:"45%",color:"#E8EFFE",flat:""}},[e(i.Z,{staticClass:"ma-3",attrs:{size:"24",tile:""}},[e(u.Z,{attrs:{src:a(3701)}})],1),e(g.Z),e(b.qW,{staticClass:"text-center"},[t._v("See a list of all our flight destinations")]),e(g.Z),e(r.Z,{staticClass:"mx-2 rounded-pill gradiant-blue",attrs:{dark:""}},[t._v(" Explore ")])],1),e(p.Z,{staticClass:"mytable",attrs:{headers:t.headersdepartureslist,items:t.departureslist,search:t.search},scopedSlots:t._u([{key:"item.CallSign",fn:function({item:a}){return[e("div",{staticClass:"text-uppercase"},[t._v(t._s(a.CallSign))])]}},{key:"item.img",fn:function({item:a}){return[e(l.Z,{staticClass:"pt-6 pb-6",attrs:{flat:"",color:"transparent"}},[e(n.EB,{staticClass:"pa-0 ml-6"},[e(i.Z,{attrs:{tile:"",size:"64"}},[e("img",{attrs:{src:a.img}})]),e("p",{staticClass:"mb-0 ml-6"},[t._v(" "+t._s(a.name)+" ")])],1)],1)]}},{key:"item.WebCheckIn",fn:function({item:a}){return[e(r.Z,{staticClass:"mx-2 rounded-pill pl-6 pr-6",attrs:{color:"#E8EFFE",depressed:""}},[e(m.Z,{attrs:{dark:""}},[t._v(" mdi-checkbox-marked-outline "+t._s(a.WebCheckIn)+" ")]),t._v(" Check in ")],1)]}},{key:"item.moreInfo",fn:function({item:a}){return[e(r.Z,{staticClass:"mx-2 rounded-pill gradiant-blue pl-6 pr-6",attrs:{dark:""}},[t._v(" More Info "+t._s(a.moreInfo)+" ")])]}}],null,!0)})],1)],1)],1),e(d.Z,{class:{charmSmall:t.$vuetify.breakpoint.smAndDown},attrs:{align:"center",justify:"center"}},[e(o.Z,{attrs:{cols:"12"}},[e(l.Z,{staticClass:"mx-auto text-center",attrs:{flat:""}},[e(n.Qq,{staticClass:"pl-5 text-uppercase page-title"},[t._v(" our routes ")]),e(n.Qq,{staticClass:"page-sub-title"},[e("h2",[t._v("Flying to 50+ destinations")])])],1)],1)],1),e(c.Z,[e("div",{staticClass:"rounded-xl",attrs:{id:"map"}})])],1)},x=[],v=(a(7658),a(6158)),y=a.n(v),Z={data(){return{MyaccessToken:"pk.eyJ1IjoibWVycmlsbGdvbnNhbHZlcyIsImEiOiJjajN6ampkbzcwM3VxMzJyemR5Y2dqdTZuIn0.EGosEkXFJM5K_82Vy0XuCA",search:"",filter:{},headers:[{class:"header-airline",text:"Airline",filterable:!1,value:"img",sortBy:"flight"},{text:"Call Sign",value:"CallSign"},{text:"Airline Contact No.",value:"AirlineContactNo"},{text:"Web Check-in",value:"WebCheckIn"},{text:"",value:"moreInfo",sortable:!1}],headersdepartureslist:[{class:"header-airline",text:"Airline",filterable:!1,value:"img",sortBy:"flight"},{text:"Call Sign",value:"CallSign"},{text:"Airline Contact No.",value:"AirlineContactNo"},{text:"Web Check-in",value:"WebCheckIn"},{text:"",value:"moreInfo",sortable:!1}],allflights:[{text:"All"},{text:"Indigo"},{text:"Emirates"}],allterminals:[{text:"All"},{text:"1"},{text:"2"}],flightlist:[{img:a(970),flightlistId:"1",name:"Indigo",CallSign:"G9",AirlineContactNo:"+914422566072"},{img:a(7700),flightlistId:"2",name:"Emirates",CallSign:"RED KNIGHT",AirlineContactNo:"+914422566072"},{img:a(8926),flightlistId:"3",name:"Thai Airways International PCL",CallSign:"thai",AirlineContactNo:"+18001021225"}],departureslist:[{img:a(970),flightlistId:"1",name:"Indigo",CallSign:"G9",AirlineContactNo:"+914422566072"},{img:a(7700),flightlistId:"2",name:"Emirates",CallSign:"RED KNIGHT",AirlineContactNo:"+914422566072"},{img:a(8926),flightlistId:"3",name:"Thai Airways International PCL",CallSign:"thai",AirlineContactNo:"+18001021225"}],placesData:[{description:"Chennai",coordinates:[80.21117527116763,13.008852534856274]},{description:"Dubai",coordinates:[55.29004174850411,25.280927196903818]},{description:"America",coordinates:[-77.090372,38.881189]}]}},methods:{setupMapBox(){y().accessToken=this.MyaccessToken,this.map=new(y().Map)({container:"map",style:"mapbox://styles/mapbox/light-v11",zoom:2,projection:{name:"equirectangular",center:[80.16684476066258,12.983596468763904]}})},markers(t=[80.16684476066258,12.983596468763904]){this.marker1=new(y().Marker)({color:"#0072FF"}).setLngLat(t).addTo(this.map)},markerPopup(){this.popup=new(y().Popup)({closeButton:!1,closeOnClick:!1})},rowClick(t){this.$router.push("airlinedetails/"),console.log(t.name)}},mounted(){this.setupMapBox(),this.placesData.forEach((t=>{this.markers(t.coordinates)})),this.markers(),this.markerPopup(),this.map.on("load",(()=>{this.map.addSource("places",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{description:"<strong>Chennai</strong>"},geometry:{type:"Point",coordinates:[80.21117527116763,13.008852534856274]}},{type:"Feature",properties:{description:"<strong>Dubai</strong>"},geometry:{type:"Point",coordinates:[55.29004174850411,25.280927196903818]}},{type:"Feature",properties:{description:"<strong>America</strong>"},geometry:{type:"Point",coordinates:[-77.090372,38.881189]}}]}}),this.map.addLayer({id:"places",source:"places",type:"circle"}),this.map.on("mouseenter","places",(t=>{this.map.getCanvas().style.cursor="pointer";const e=t.features[0].geometry.coordinates.slice(),a=t.features[0].properties.description;console.log(this.description);while(Math.abs(t.lngLat.lng-e[0])>180)e[0]+=t.lngLat.lng>e[0]?360:-360;this.popup.setLngLat(e).setHTML(a).addTo(this.map)})),this.map.on("mouseleave","places",(()=>{this.map.getCanvas().style.cursor="",this.popup.remove()}))}))}},I=Z,_=a(3736),E=(0,_.Z)(I,k,x,!1,null,"60d3494d",null),A=E.exports},7700:function(t,e,a){t.exports=a.p+"img/emirates.821d6b73.svg"},970:function(t,e,a){t.exports=a.p+"img/flightimg.746fd422.svg"},8926:function(t,e,a){t.exports=a.p+"img/thai.04112689.svg"},3701:function(t,e,a){t.exports=a.p+"img/global.582cace9.svg"},5692:function(t,e,a){t.exports=a.p+"img/flightInfo.6b83e33b.jpg"}}]);
//# sourceMappingURL=9491.3251559f.js.map