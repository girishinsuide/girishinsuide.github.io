"use strict";(self["webpackChunkchennai_airport"]=self["webpackChunkchennai_airport"]||[]).push([[952],{2357:function(t,e,a){a.r(e),a.d(e,{default:function(){return I}});var i=a(6190),s=a(9582),r=a(4886),n=a(266),o=a(2118),l=a(3863),c=a(4324),u=a(5495),m=a(1713),p=a(626),d=a(5517),g=a(6456),h=function(){var t=this,e=t._self._c;return e("div",{},[e(s.Z,{staticClass:"mx-auto mt-n3"},[e(u.Z,{staticClass:"my-3",attrs:{src:a(5692),contain:""}}),e(r.EB,{staticClass:"justify-center text-uppercase page-title"},[t._v(" Airline Information ")])],1),e(g.Z,{staticClass:"mytabs",attrs:{"background-color":" accent-4",centered:""}},[e(p.Z,{staticClass:"border-radiusbefore",attrs:{href:"#tab1"}},[t._v(" Domestic ")]),e(d.Z,{attrs:{value:"tab1"}},[e(o.Z,[e(l.Z,{staticClass:"mytable",attrs:{headers:t.headers,items:t.flightlist,search:t.search},on:{"click:row":t.rowClick},scopedSlots:t._u([{key:"item.flightlistId",fn:function({item:e}){return[t._v(t._s(e.flightlistId))]}},{key:"item.img",fn:function({item:t}){return[e("img",{staticClass:"mt-1",attrs:{src:t.img,width:"50"}})]}},{key:"item.WebCheckIn",fn:function({item:a}){return[e(i.Z,{staticClass:"mx-2 rounded-pill",attrs:{color:"#E8EFFE",depressed:""}},[e(c.Z,{attrs:{dark:""}},[t._v(" mdi-checkbox-marked-outline "+t._s(a.WebCheckIn)+" ")]),t._v(" Check in ")],1)]}},{key:"item.moreInfo",fn:function({item:a}){return[e(i.Z,{staticClass:"mx-2 rounded-pill gradiant-blue",attrs:{dark:""}},[t._v(" More Info "+t._s(a.moreInfo)+" ")])]}}],null,!0)})],1)],1),e(p.Z,{staticClass:"border-radiusafter",attrs:{href:"#tab2"}},[t._v(" International ")]),e(d.Z,{attrs:{value:"tab2"}},[e(o.Z,[e(l.Z,{staticClass:"mytable",attrs:{headers:t.headersdepartureslist,items:t.departureslist,search:t.search},scopedSlots:t._u([{key:"item.img",fn:function({item:t}){return[e("img",{staticClass:"mt-1",attrs:{src:t.img,width:"50"}})]}},{key:"item.WebCheckIn",fn:function({item:a}){return[e(i.Z,{staticClass:"mx-2 rounded-pill",attrs:{color:"#E8EFFE",depressed:""}},[e(c.Z,{attrs:{dark:""}},[t._v(" mdi-checkbox-marked-outline "+t._s(a.WebCheckIn)+" ")]),t._v(" Check in ")],1)]}},{key:"item.moreInfo",fn:function({item:a}){return[e(i.Z,{staticClass:"mx-2 rounded-pill gradiant-blue",attrs:{dark:""}},[t._v(" More Info "+t._s(a.moreInfo)+" ")])]}}],null,!0)})],1)],1)],1),e(m.Z,{class:{charmSmall:t.$vuetify.breakpoint.smAndDown},attrs:{align:"center",justify:"center"}},[e(n.Z,{attrs:{cols:"12"}},[e(s.Z,{staticClass:"mx-auto text-center",attrs:{flat:""}},[e(r.Qq,{staticClass:"pl-5 text-uppercase page-title"},[t._v(" our routes ")]),e(r.Qq,{staticClass:"page-sub-title"},[e("h2",[t._v("Flying to 50+ destinations")])])],1)],1)],1),e(o.Z,[e("div",{staticClass:"rounded-xl",attrs:{id:"map"}})])],1)},f=[],C=(a(7658),a(6158)),k=a.n(C),b={data(){return{MyaccessToken:"pk.eyJ1IjoibWVycmlsbGdvbnNhbHZlcyIsImEiOiJjajN6ampkbzcwM3VxMzJyemR5Y2dqdTZuIn0.EGosEkXFJM5K_82Vy0XuCA",search:"",filter:{},headers:[{text:"Airline",align:"start",filterable:!1,value:"img",sortBy:"flight"},{text:"",value:"name"},{text:"Call Sign",value:"CallSign"},{text:"Airline Contact No.",value:"AirlineContactNo"},{text:"Web Check-in",value:"WebCheckIn"},{text:"",value:"moreInfo",sortable:!1}],headersdepartureslist:[{text:"Airline",align:"start",filterable:!1,value:"img",sortBy:"flight"},{text:"",value:"name"},{text:"Call Sign",value:"CallSign"},{text:"Airline Contact No.",value:"AirlineContactNo"},{text:"Web Check-in",value:"WebCheckIn"},{text:"",value:"moreInfo",sortable:!1}],allflights:[{text:"All"},{text:"Indigo"},{text:"Emirates"}],allterminals:[{text:"All"},{text:"1"},{text:"2"}],flightlist:[{img:a(970),flightlistId:"1",name:"Indigo",CallSign:"Bengaluru",AirlineContactNo:"+914422566072"},{img:a(7700),flightlistId:"2",name:"Emirates",CallSign:"Dubai",AirlineContactNo:"+914422566072"},{img:a(970),flightlistId:"3",name:"Indigo",CallSign:"Bengaluru",AirlineContactNo:"+914422566072"}],departureslist:[{img:a(970),flightlistId:"1",name:"Indigo",CallSign:"Bengaluru",AirlineContactNo:"+914422566072"},{img:a(7700),flightlistId:"2",name:"Emirates",CallSign:"Dubai",AirlineContactNo:"+914422566072"},{img:a(970),flightlistId:"3",name:"Indigo",CallSign:"Bengaluru",AirlineContactNo:"+914422566072"}],placesData:[{description:"Chennai",coordinates:[80.21117527116763,13.008852534856274]},{description:"Dubai",coordinates:[55.29004174850411,25.280927196903818]},{description:"America",coordinates:[-77.090372,38.881189]}]}},methods:{setupMapBox(){k().accessToken=this.MyaccessToken,this.map=new(k().Map)({container:"map",style:"mapbox://styles/mapbox/light-v11",zoom:2,projection:{name:"equirectangular",center:[80.16684476066258,12.983596468763904]}})},markers(t=[80.16684476066258,12.983596468763904]){this.marker1=new(k().Marker)({color:"#0072FF"}).setLngLat(t).addTo(this.map)},markerPopup(){this.popup=new(k().Popup)({closeButton:!1,closeOnClick:!1})},rowClick(t){this.$router.push("airlinedetails/"),console.log(t.name)}},mounted(){this.setupMapBox(),this.placesData.forEach((t=>{this.markers(t.coordinates)})),this.markers(),this.markerPopup(),this.map.on("load",(()=>{this.map.addSource("places",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{description:"<strong>Chennai</strong>"},geometry:{type:"Point",coordinates:[80.21117527116763,13.008852534856274]}},{type:"Feature",properties:{description:"<strong>Dubai</strong>"},geometry:{type:"Point",coordinates:[55.29004174850411,25.280927196903818]}},{type:"Feature",properties:{description:"<strong>America</strong>"},geometry:{type:"Point",coordinates:[-77.090372,38.881189]}}]}}),this.map.addLayer({id:"places",source:"places",type:"circle"}),this.map.on("mouseenter","places",(t=>{this.map.getCanvas().style.cursor="pointer";const e=t.features[0].geometry.coordinates.slice(),a=t.features[0].properties.description;console.log(this.description);while(Math.abs(t.lngLat.lng-e[0])>180)e[0]+=t.lngLat.lng>e[0]?360:-360;this.popup.setLngLat(e).setHTML(a).addTo(this.map)})),this.map.on("mouseleave","places",(()=>{this.map.getCanvas().style.cursor="",this.popup.remove()}))}))}},y=b,v=a(3736),x=(0,v.Z)(y,h,f,!1,null,"6cf0e318",null),I=x.exports},7700:function(t,e,a){t.exports=a.p+"img/emirates.821d6b73.svg"},970:function(t,e,a){t.exports=a.p+"img/flightimg.746fd422.svg"},5692:function(t,e,a){t.exports=a.p+"img/flightInfo.6b83e33b.jpg"}}]);
//# sourceMappingURL=952.65686812.js.map