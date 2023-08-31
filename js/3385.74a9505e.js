"use strict";(self["webpackChunkchennai_airport"]=self["webpackChunkchennai_airport"]||[]).push([[3385],{21079:function(t,e,s){s.r(e),s.d(e,{default:function(){return F}});var a=s(16232),i=s(43423),r=s(64562),l=s(34145),n=s(54886),o=s(60266),c=s(82118),p=s(43863),u=s(4324),m=s(65495),d=s(11713),h=s(13687),g=s(10626),f=s(45517),C=s(6456),k=s(97953),b=function(){var t=this,e=t._self._c;return e("div",{},[e("rightStickIcon"),e(l.Z,{staticClass:"mx-auto mt-n3"},[e(m.Z,{staticClass:"my-3",attrs:{src:s(45692),contain:""}}),e(n.EB,{staticClass:"justify-center text-uppercase page-title"},[t._v(" Airline Information ")])],1),e(C.Z,{staticClass:"mytabs",attrs:{"background-color":" accent-4",centered:""}},[e(g.Z,{staticClass:"border-radiusbefore",attrs:{href:"#tab1"}},[t._v(" Domestic ")]),e(f.Z,{attrs:{value:"tab1"}},[e(c.Z,[e(a.Z,{staticClass:"mx-auto rounded-xl mb-10",attrs:{width:"45%",color:"#E8EFFE",flat:""}},[e(i.Z,{staticClass:"ma-3",attrs:{size:"24",tile:""}},[e(m.Z,{attrs:{src:s(23701)}})],1),e(h.Z),e(k.qW,{staticClass:"text-center"},[t._v("See a list of all our flight destinations")]),e(h.Z),e(r.Z,{staticClass:"mx-2 rounded-pill gradiant-blue",attrs:{dark:""}},[t._v(" Explore ")])],1),e(p.Z,{staticClass:"mytable",attrs:{headers:t.headers,items:t.flightlist,search:t.search},on:{"click:row":t.rowClick},scopedSlots:t._u([{key:"item.CallSign",fn:function({item:s}){return[e("div",{staticClass:"text-uppercase"},[t._v(t._s(s.CallSign))])]}},{key:"item.img",fn:function({item:s}){return[e(l.Z,{staticClass:"pt-6 pb-6",attrs:{flat:"",color:"transparent"}},[e(n.EB,{staticClass:"pa-0 ml-6"},[e(i.Z,{attrs:{tile:"",size:"64"}},[e("img",{attrs:{src:s.img}})]),e("p",{staticClass:"mb-0 ml-6"},[t._v(" "+t._s(s.name)+" ")])],1)],1)]}},{key:"item.WebCheckIn",fn:function({item:s}){return[e(r.Z,{staticClass:"mx-2 rounded-pill pl-6 pr-6",attrs:{color:"#E8EFFE",depressed:""}},[e(u.Z,{attrs:{dark:""}},[t._v(" mdi-checkbox-marked-outline "+t._s(s.WebCheckIn)+" ")]),t._v(" Check in ")],1)]}},{key:"item.moreInfo",fn:function({item:s}){return[e(r.Z,{staticClass:"mx-2 rounded-pill gradiant-blue pl-6 pr-6",attrs:{dark:""}},[t._v(" More Info "+t._s(s.moreInfo)+" ")])]}}],null,!0)})],1)],1),e(g.Z,{staticClass:"border-radiusafter",attrs:{href:"#tab2"}},[t._v(" International ")]),e(f.Z,{attrs:{value:"tab2"}},[e(c.Z,[e(a.Z,{staticClass:"mx-auto rounded-xl mb-10",attrs:{width:"45%",color:"#E8EFFE",flat:""}},[e(i.Z,{staticClass:"ma-3",attrs:{size:"24",tile:""}},[e(m.Z,{attrs:{src:s(23701)}})],1),e(h.Z),e(k.qW,{staticClass:"text-center"},[t._v("See a list of all our flight destinations")]),e(h.Z),e(r.Z,{staticClass:"mx-2 rounded-pill gradiant-blue",attrs:{dark:""}},[t._v(" Explore ")])],1),e(p.Z,{staticClass:"mytable",attrs:{headers:t.headersdepartureslist,items:t.departureslist,search:t.search},scopedSlots:t._u([{key:"item.CallSign",fn:function({item:s}){return[e("div",{staticClass:"text-uppercase"},[t._v(t._s(s.CallSign))])]}},{key:"item.img",fn:function({item:s}){return[e(l.Z,{staticClass:"pt-6 pb-6",attrs:{flat:"",color:"transparent"}},[e(n.EB,{staticClass:"pa-0 ml-6"},[e(i.Z,{attrs:{tile:"",size:"64"}},[e("img",{attrs:{src:s.img}})]),e("p",{staticClass:"mb-0 ml-6"},[t._v(" "+t._s(s.name)+" ")])],1)],1)]}},{key:"item.WebCheckIn",fn:function({item:s}){return[e(r.Z,{staticClass:"mx-2 rounded-pill pl-6 pr-6",attrs:{color:"#E8EFFE",depressed:""}},[e(u.Z,{attrs:{dark:""}},[t._v(" mdi-checkbox-marked-outline "+t._s(s.WebCheckIn)+" ")]),t._v(" Check in ")],1)]}},{key:"item.moreInfo",fn:function({item:s}){return[e(r.Z,{staticClass:"mx-2 rounded-pill gradiant-blue pl-6 pr-6",attrs:{dark:""}},[t._v(" More Info "+t._s(s.moreInfo)+" ")])]}}],null,!0)})],1)],1)],1),e(d.Z,{class:{charmSmall:t.$vuetify.breakpoint.smAndDown},attrs:{align:"center",justify:"center"}},[e(o.Z,{attrs:{cols:"12"}},[e(l.Z,{staticClass:"mx-auto text-center",attrs:{flat:""}},[e(n.Qq,{staticClass:"pl-5 text-uppercase page-title"},[t._v(" our routes ")]),e(n.Qq,{staticClass:"page-sub-title"},[e("h2",[t._v("Flying to 50+ destinations")])])],1)],1)],1),e(c.Z,[e("div",{staticClass:"rounded-xl",attrs:{id:"map"}})])],1)},v=[],x=(s(57658),s(6158)),y=s.n(x),Z=s(10249),_=s(6154),I={components:{rightStickIcon:Z.Z},data(){return{MyaccessToken:"pk.eyJ1IjoibWVycmlsbGdvbnNhbHZlcyIsImEiOiJjajN6ampkbzcwM3VxMzJyemR5Y2dqdTZuIn0.EGosEkXFJM5K_82Vy0XuCA",search:"",filter:{},headers:[{class:"header-airline",text:"Airline",filterable:!1,value:"img",sortBy:"flight"},{text:"Call Sign",value:"CallSign"},{text:"Airline Contact No.",value:"AirlineContactNo"},{text:"Web Check-in",value:"WebCheckIn"},{text:"",value:"moreInfo",sortable:!1}],headersdepartureslist:[{class:"header-airline",text:"Airline",filterable:!1,value:"img",sortBy:"flight"},{text:"Call Sign",value:"CallSign"},{text:"Airline Contact No.",value:"AirlineContactNo"},{text:"Web Check-in",value:"WebCheckIn"},{text:"",value:"moreInfo",sortable:!1}],allflights:[{text:"All"},{text:"Indigo"},{text:"Emirates"}],allterminals:[{text:"All"},{text:"1"},{text:"2"}],flightlist:[],departureslist:[],placesData:[{description:"Chennai",coordinates:[80.21117527116763,13.008852534856274]},{description:"Dubai",coordinates:[55.29004174850411,25.280927196903818]},{description:"America",coordinates:[-77.090372,38.881189]}]}},methods:{setupMapBox(){y().accessToken=this.MyaccessToken,this.map=new(y().Map)({container:"map",style:"mapbox://styles/merrillgonsalves/clkgzrx7h008c01qy6kvzevhl",zoom:2,attributionControl:!1,projection:{name:"equirectangular",center:[80.16684476066258,12.983596468763904]}})},markers(t=[80.16684476066258,12.983596468763904]){this.marker1=new(y().Marker)({color:"#0072FF"}).setLngLat(t).addTo(this.map)},markerPopup(){this.popup=new(y().Popup)({closeButton:!1,closeOnClick:!1})},rowClick(t){this.$router.push("airlinedetails/"),console.log(t.name)},async getAirlineList(){console.log("getAirlineList");let t=await _.Z.post("http://89.117.58.8:5000/api/v1/user/airline",{page:1,limit:10,search:"",sortKey:"",sortDirection:"",filters:{}});console.log("airlineList",t.data.data.docs),t=t.data.data.docs;let e=[],s=[];t.forEach((t=>{let a={img:"http://development.wisefly.in/flightlogo/getimage/"+t.icao+".png",flightlistId:t._id,name:t.callsign,CallSign:t.callsign,AirlineContactNo:t.contacts.toString()};"DOMESTIC"===t.types[0].toUpperCase()?e.push(a):s.push(a)})),this.flightlist=e,this.departureslist=s,console.log("382",this.flightlist)}},mounted(){this.setupMapBox(),this.getAirlineList(),this.placesData.forEach((t=>{this.markers(t.coordinates)})),this.markers(),this.markerPopup(),this.map.on("load",(()=>{this.map.addSource("places",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{description:"<strong>Chennai</strong>"},geometry:{type:"Point",coordinates:[80.21117527116763,13.008852534856274]}},{type:"Feature",properties:{description:"<strong>Dubai</strong>"},geometry:{type:"Point",coordinates:[55.29004174850411,25.280927196903818]}},{type:"Feature",properties:{description:"<strong>America</strong>"},geometry:{type:"Point",coordinates:[-77.090372,38.881189]}}]}}),this.map.addLayer({id:"places",source:"places",type:"circle"}),this.map.on("mouseenter","places",(t=>{this.map.getCanvas().style.cursor="pointer";const e=t.features[0].geometry.coordinates.slice(),s=t.features[0].properties.description;console.log(this.description);while(Math.abs(t.lngLat.lng-e[0])>180)e[0]+=t.lngLat.lng>e[0]?360:-360;this.popup.setLngLat(e).setHTML(s).addTo(this.map)})),this.map.on("mouseleave","places",(()=>{this.map.getCanvas().style.cursor="",this.popup.remove()}))}))}},E=I,S=s(1001),A=(0,S.Z)(E,b,v,!1,null,"b6fa662c",null),F=A.exports},23701:function(t,e,s){t.exports=s.p+"img/global.6439395e.svg"},45692:function(t,e,s){t.exports=s.p+"img/flightInfo.2d39afb2.jpg"}}]);
//# sourceMappingURL=3385.74a9505e.js.map