"use strict";(self["webpackChunkchennai_airport"]=self["webpackChunkchennai_airport"]||[]).push([[8941],{8941:function(t,e,i){i.r(e),i.d(e,{default:function(){return M}});var s=i(6190),a=i(9582),r=i(4886),n=i(4127),l=i(266),o=i(2118),c=i(8224),h=i(4324),u=i(5495),d=i(5808),m=i(4525),g=i(6900),p=i(9500),v=i(4611),f=i(1713),b=(i(541),i(7658),i(573)),y=i(7394),C=i(7678),k=i(8126),Z=i(5942),x=i(5352),_=i(4101),w=(0,C.Z)(b.Z,k.Z).extend({name:"v-slider",directives:{ClickOutside:Z.Z},mixins:[k.Z],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:t=>"boolean"===typeof t||"always"===t},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:()=>[]},ticks:{type:[Boolean,String],default:!1,validator:t=>"boolean"===typeof t||"always"===t},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:()=>({app:null,oldValue:null,thumbPressed:!1,mouseTimeout:-1,isFocused:!1,isActive:!1,noClick:!1,startOffset:0}),computed:{classes(){return{...b.Z.options.computed.classes.call(this),"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel}},internalValue:{get(){return this.lazyValue},set(t){t=isNaN(t)?this.minValue:t;const e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition(){return this.thumbPressed?this.showTicks||this.stepNumeric?"0.1s cubic-bezier(0.25, 0.8, 0.5, 1)":"none":""},minValue(){return parseFloat(this.min)},maxValue(){return parseFloat(this.max)},stepNumeric(){return this.step>0?parseFloat(this.step):0},inputWidth(){const t=(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100;return isNaN(t)?0:t},trackFillStyles(){const t=this.vertical?"bottom":"left",e=this.vertical?"top":"right",i=this.vertical?"height":"width",s=this.$vuetify.rtl?"auto":"0",a=this.$vuetify.rtl?"0":"auto",r=this.isDisabled?`calc(${this.inputWidth}% - 10px)`:`${this.inputWidth}%`;return{transition:this.trackTransition,[t]:s,[e]:a,[i]:r}},trackStyles(){const t=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",e=this.vertical?"height":"width",i="0px",s=this.isDisabled?`calc(${100-this.inputWidth}% - 10px)`:`calc(${100-this.inputWidth}%)`;return{transition:this.trackTransition,[t]:i,[e]:s}},showTicks(){return this.tickLabels.length>0||!(this.isDisabled||!this.stepNumeric||!this.ticks)},numTicks(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel(){return!this.isDisabled&&!(!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min(t){const e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max(t){const e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler(t){this.internalValue=t},immediate:!0}},mounted(){this.app=document.querySelector("[data-app]")||(0,_.Kd)("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot(){const t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider(){return this.$createElement("div",{class:{"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly,...this.themeClasses},directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick,mousedown:this.onSliderMouseDown,touchstart:this.onSliderMouseDown}},this.genChildren())},genChildren(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onFocus,this.onBlur)]},genInput(){return this.$createElement("input",{attrs:{value:this.internalValue,id:this.computedId,disabled:!0,readonly:!0,tabindex:-1,...this.$attrs}})},genTrackContainer(){const t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps(){if(!this.step||!this.showTicks)return null;const t=parseFloat(this.tickSize),e=(0,x.MT)(this.numTicks+1),i=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",s=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&e.reverse();const a=e.map((e=>{const a=[];this.tickLabels[e]&&a.push(this.$createElement("div",{staticClass:"v-slider__tick-label"},this.tickLabels[e]));const r=e*(100/this.numTicks),n=this.$vuetify.rtl?100-this.inputWidth<r:r<this.inputWidth;return this.$createElement("span",{key:e,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":n},style:{width:`${t}px`,height:`${t}px`,[i]:`calc(${r}% - ${t/2}px)`,[s]:`calc(50% - ${t/2}px)`}},a)}));return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},a)},genThumbContainer(t,e,i,s,a,r,n="thumb"){const l=[this.genThumb()],o=this.genThumbLabelContent(t);return this.showThumbLabel&&l.push(this.genThumbLabel(o)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:n,key:n,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":i,"v-slider__thumb-container--focused":s,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:{role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.$attrs["aria-label"]||this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal"},on:{focus:a,blur:r,keydown:this.onKeyDown}}),l)},genThumbLabelContent(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel(t){const e=(0,x.kb)(this.thumbSize),i=this.vertical?`translateY(20%) translateY(${Number(this.thumbSize)/3-1}px) translateX(55%) rotate(135deg)`:"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(y.T0,{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e,transform:i}}),[this.$createElement("div",t)])])])},genThumb(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles(t){const e=this.vertical?"top":"left";let i=this.$vuetify.rtl?100-t:t;return i=this.vertical?100-i:i,{transition:this.trackTransition,[e]:`${i}%`}},onSliderMouseDown(t){var e;if(t.preventDefault(),this.oldValue=this.internalValue,this.isActive=!0,null===(e=t.target)||void 0===e?void 0:e.matches(".v-slider__thumb-container, .v-slider__thumb-container *")){this.thumbPressed=!0;const e=t.target.getBoundingClientRect(),i="touches"in t?t.touches[0]:t;this.startOffset=this.vertical?i.clientY-(e.top+e.height/2):i.clientX-(e.left+e.width/2)}else this.startOffset=0,window.clearTimeout(this.mouseTimeout),this.mouseTimeout=window.setTimeout((()=>{this.thumbPressed=!0}),300);const i=!x.e$||{passive:!0,capture:!0},s=!!x.e$&&{passive:!0},a="touches"in t;this.onMouseMove(t),this.app.addEventListener(a?"touchmove":"mousemove",this.onMouseMove,s),(0,x.qh)(this.app,a?"touchend":"mouseup",this.onSliderMouseUp,i),this.$emit("start",this.internalValue)},onSliderMouseUp(t){t.stopPropagation(),window.clearTimeout(this.mouseTimeout),this.thumbPressed=!1;const e=!!x.e$&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("mouseup",t),this.$emit("end",this.internalValue),(0,x.vZ)(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove(t){"mousemove"===t.type&&(this.thumbPressed=!0),this.internalValue=this.parseMouseMove(t)},onKeyDown(t){if(!this.isInteractive)return;const e=this.parseKeyDown(t,this.internalValue);null==e||e<this.minValue||e>this.maxValue||(this.internalValue=e,this.$emit("change",e))},onSliderClick(t){if(this.noClick)return void(this.noClick=!1);const e=this.$refs.thumb;e.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove(t){const e=this.vertical?"top":"left",i=this.vertical?"height":"width",s=this.vertical?"clientY":"clientX",{[e]:a,[i]:r}=this.$refs.track.getBoundingClientRect(),n="touches"in t?t.touches[0][s]:t[s];let l=Math.min(Math.max((n-a-this.startOffset)/r,0),1)||0;return this.vertical&&(l=1-l),this.$vuetify.rtl&&(l=1-l),parseFloat(this.min)+l*(this.maxValue-this.minValue)},parseKeyDown(t,e){if(!this.isInteractive)return;const{pageup:i,pagedown:s,end:a,home:r,left:n,right:l,down:o,up:c}=x.Do;if(![i,s,a,r,n,l,o,c].includes(t.keyCode))return;t.preventDefault();const h=this.stepNumeric||1,u=(this.maxValue-this.minValue)/h;if([n,l,o,c].includes(t.keyCode)){const i=this.$vuetify.rtl?[n,c]:[l,c],s=i.includes(t.keyCode)?1:-1,a=t.shiftKey?3:t.ctrlKey?2:1;e+=s*h*a}else if(t.keyCode===r)e=this.minValue;else if(t.keyCode===a)e=this.maxValue;else{const i=t.keyCode===s?1:-1;e-=i*h*(u>100?u/10:10)}return e},roundValue(t){if(!this.stepNumeric)return t;const e=this.step.toString().trim(),i=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,s=this.minValue%this.stepNumeric,a=Math.round((t-s)/this.stepNumeric)*this.stepNumeric+s;return parseFloat(Math.min(a,this.maxValue).toFixed(i))}}}),T=i(3687),S=i(626),$=i(5517),D=i(6456),V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e(a.Z,{staticClass:"mx-auto mt-n3",attrs:{flat:""}},[e(u.Z,{staticClass:"my-3",attrs:{src:i(2473),contain:""}}),e(r.EB,{staticClass:"justify-center text-uppercase page-title"},[t._v(" Flight Information ")]),e(r.Qq,{staticClass:"text-center"},[e("h1",[t._v("Flight Details")])]),e(o.Z,[e(d.Z,[e(m.Z,[e(g.Z,{staticClass:"rounded-lg",attrs:{size:"x-large"}},[e(u.Z,{staticClass:"my-3",attrs:{src:i(7700),contain:""}})],1),e(p.km,[e(p.V9,{staticClass:"text-h5"},[t._v(" EK 568")]),e(p.oZ,[t._v("Emirates")])],1),e(v.Z,[e(n.Z,{staticClass:"ma-2 pl-10 pr-10",attrs:{large:"",color:"#BBF7D0","text-color":"green"}},[t._v(" On Time ")])],1)],1)],1),e(f.Z,{attrs:{align:"center"}},[e(l.Z,{attrs:{cols:"4",md:"2"}},[e(d.Z,[e(m.Z,[e(p.km,[e(p.V9,{staticClass:"text-h5"},[t._v(" EK 568")]),e(p.oZ,[t._v("Emirates")])],1)],1)],1)],1),e(l.Z,{attrs:{cols:"4",md:"8"}},[e(w,{staticClass:"my-slider",attrs:{"append-icon":"mdi-record-circle-outline","prepend-icon":"mdi-record-circle-outline","thumb-color":"primary","thumb-label":"always","thumb-size":"50","hide-details":""},scopedSlots:t._u([{key:"thumb-label",fn:function(){return[e(d.Z,[e(m.Z,{attrs:{dark:""}},[e(g.Z,{},[e(h.Z,{attrs:{dark:""}},[t._v("mdi-airplane-takeoff")])],1),e(p.km,[e(p.V9,[t._v(" Scheduled")]),e(p.oZ,{staticClass:"text-h6"},[t._v("14:10")])],1)],1)],1)]},proxy:!0}]),model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})],1),e(l.Z,{attrs:{cols:"4",md:"2"}},[e(d.Z,[e(m.Z,[e(p.km,[e(p.V9,{staticClass:"text-h5"},[t._v(" EK 568")]),e(p.oZ,[t._v("Emirates")])],1)],1)],1)],1)],1),e(f.Z,{staticClass:"mt-5 mb-10"},[e(l.Z,[e(d.Z,[e(m.Z,[e(g.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(h.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-clock-outline ")])],1),e(p.km,[e(p.V9,[t._v(" Scheduled")]),e(p.oZ,{staticClass:"text-h6"},[t._v("14:10")])],1)],1)],1)],1),e(l.Z,[e(d.Z,[e(m.Z,[e(g.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(h.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-timer-plus-outline ")])],1),e(p.km,[e(p.V9,[t._v(" Estimated")]),e(p.oZ,{staticClass:"text-h6"},[t._v("14:23")])],1)],1)],1)],1),e(l.Z,[e(d.Z,[e(m.Z,[e(g.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(h.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-airport ")])],1),e(p.km,[e(p.V9,[t._v(" Terminal")]),e(p.oZ,{staticClass:"text-h6"},[t._v("T4")])],1)],1)],1)],1),e(l.Z,[e(d.Z,[e(m.Z,[e(g.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(h.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":"",light:""}},[t._v(" mdi-bag-suitcase ")])],1),e(p.km,[e(p.V9,[t._v(" Baggage")]),e(p.oZ,{staticClass:"text-h6"},[t._v("Belt 7")])],1)],1)],1)],1)],1),e(f.Z,{staticClass:"mb-10"},[e(l.Z,[e(a.Z,{attrs:{flat:""}},[e(r.h7,[e("router-link",{attrs:{to:"/flightinformation"}},[e(s.Z,{staticClass:"pl-4 pr-4",attrs:{depressed:"",rounded:"",large:"",color:"#E8EFFE"}},[e(h.Z,{attrs:{left:""}},[t._v("mdi-airplane")]),t._v(" Back to Flights ")],1)],1),e(T.Z),e(s.Z,{staticClass:"gradient-button pl-10 pr-10",attrs:{depressed:"",rounded:"",dark:"",large:""}},[e(h.Z,{attrs:{left:""}},[t._v("mdi-plus")]),t._v(" Track Flight ")],1),e(s.Z,{staticClass:"ml-10 mr-10",attrs:{text:"",color:"#00C6FF"}},[e(h.Z,{attrs:{left:""}},[t._v("mdi-share-variant")]),t._v(" Share Flight ")],1),e(s.Z,{attrs:{text:"",color:"#00C6FF"}},[e(h.Z,{attrs:{left:""}},[t._v("mdi-phone")]),t._v(" Contact Airline ")],1)],1)],1)],1)],1)],1),e(r.EB,{staticClass:"justify-center text-uppercase page-title mb-2"},[t._v(" next steps ")]),e(r.Qq,{staticClass:"text-center mb-4"},[e("h1",[t._v("Your Itinerary")])]),e(D.Z,{staticClass:"mytabs",class:{responsiveTab:t.$vuetify.breakpoint.smAndDown},attrs:{"background-color":" accent-4",centered:""}},[e(S.Z,{staticClass:"border-radiusbefore",attrs:{href:"#tab1"}},[t._v(" Immigration ")]),e($.Z,{attrs:{value:"tab1"}},[e(f.Z,[e(l.Z,{attrs:{cols:"12",md:"4"}},[e(c.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return e("div",{class:""+(s?"imgover":"imgleave")},[e(u.Z,{class:t.$vuetify.breakpoint.smAndDown?"rounded-xl":"rounded-r-xl",attrs:{height:400,src:i(5076)}})],1)}}])})],1),e(l.Z,{attrs:{cols:"12",md:"7"}},[e(a.Z,{staticClass:"mx-auto",attrs:{width:"90%",elevation:0}},[e(r.ZB,[e("p",{staticClass:"text-h4 text--primary"},[t._v("Immigration")]),e("p",{staticClass:"text--primary"},[t._v(" Arrival: After landing, passengers proceed to the immigration area, which is usually located in the arrival hall of the airport.")]),e("p",{staticClass:"text--primary"},[t._v(" Queue up: Passengers must queue up in the designated area for their turn to approach the immigration counter. The queue will be divided into different categories like Indian Nationals, Foreign Nationals, Diplomats, etc.")]),e("p",{staticClass:"text--primary"},[t._v(" Document check: The immigration officer will check the passenger's passport and visa to ensure that they are valid and match the passenger's identity. The officer may also ask for other documents such as return tickets, hotel bookings, etc.")]),e("p",{staticClass:"text--primary"},[t._v(" Biometric verification: The immigration officer will take a photograph of the passenger and scan their fingerprints for biometric verification.")]),e("p",{staticClass:"text--primary"},[t._v(" Clearance: After verifying the documents and completing biometric verification, the immigration officer will either stamp the passport and allow the passenger to proceed or may ask additional questions to clarify any doubts. ")])]),e(d.Z,[e(m.Z,[e(g.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(h.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-clock-outline ")])],1),e(p.km,[e(p.V9,[t._v(" Immigration Waiting Time")]),e(p.oZ,[t._v("17 minutes")])],1)],1)],1)],1)],1),e(l.Z,{staticClass:"hidden-sm-and-down",attrs:{cols:"12",md:"1"}},[e(c.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return e("div",{class:""+(s?"imgover":"imgleave")},[e(u.Z,{class:t.$vuetify.breakpoint.smAndDown?"rounded-xl":"rounded-l-xl",attrs:{height:400,src:i(8010)}})],1)}}])})],1)],1)],1),e(S.Z,{attrs:{href:"#tab2"}},[t._v(" Baggage ")]),e($.Z,{attrs:{value:"tab2"}},[e(f.Z,[e(l.Z,{attrs:{cols:"12",md:"4"}},[e(c.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return e("div",{class:""+(s?"imgover":"imgleave")},[e(u.Z,{class:t.$vuetify.breakpoint.smAndDown?"rounded-xl":"rounded-r-xl",attrs:{height:400,src:i(8010)}})],1)}}])})],1),e(l.Z,{attrs:{cols:"12",md:"7"}},[e(a.Z,{staticClass:"mx-auto",attrs:{width:"90%",elevation:0}},[e(r.ZB,[e("p",{staticClass:"text-h4 text--primary"},[t._v("Baggage")]),e("p",{staticClass:"text--primary"},[t._v(" Baggage handling is the process of transporting passenger luggage from a check-in counter at a departure airport, onto a plane cargo hold and then to a collection point at an arrival airport.")]),e("p",{staticClass:"text--primary"},[t._v(" A baggage handling system (BHS) is made up of a number of different processes and checks. A BHS is designed to count bags, check weights of bags, balance loads, screen suitcases for security reasons, ")]),e("p",{staticClass:"text--primary"},[t._v(" Transport bags through an airport conveyor belt system and read bag information automatically.Baggage wrapping service using state of the art technology is available in the city side as well as the check in area of International Terminals.")]),e("p",{staticClass:"text--primary"},[e("span",{staticStyle:{color:"#1B63F8","font-weight":"bold"}},[t._v("Please Note:")]),t._v(" Currently INR 399/-bag is a being charged for baggage wrapping cash, paytm, debit card & credit card are accepted.")])]),e(d.Z,[e(m.Z,[e(g.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(h.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-clock-outline ")])],1),e(p.km,[e(p.V9,[t._v(" Immigration Waiting Time")]),e(p.oZ,[t._v("17 minutes")])],1)],1)],1)],1)],1),e(l.Z,{staticClass:"hidden-sm-and-down",attrs:{cols:"12",md:"1"}},[e(c.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return e("div",{class:""+(s?"imgover":"imgleave")},[e(u.Z,{class:t.$vuetify.breakpoint.smAndDown?"rounded-xl":"rounded-l-xl",attrs:{height:400,src:i(3500)}})],1)}}])})],1)],1)],1),e(S.Z,{attrs:{href:"#tab3"}},[t._v(" Customs ")]),e($.Z,{attrs:{value:"tab3"}},[e(f.Z,[e(l.Z,{attrs:{cols:"12",md:"4"}},[e(c.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return e("div",{class:""+(s?"imgover":"imgleave")},[e(u.Z,{class:t.$vuetify.breakpoint.smAndDown?"rounded-xl":"rounded-r-xl",attrs:{height:400,src:i(3500)}})],1)}}])})],1),e(l.Z,{attrs:{cols:"12",md:"7"}},[e(a.Z,{staticClass:"mx-auto",attrs:{width:"90%",elevation:0}},[e(r.ZB,[e("p",{staticClass:"text-h4 text--primary"},[t._v("Customs")]),e("p",{staticClass:"text--primary"},[t._v(" Understanding the Customs Process at Chennai Airport : When travelling through Chennai Airport, it's important to understand the customs process. The customs process involves the inspection and clearance of goods that are being brought into or taken out of the country.")]),e("p",{staticClass:"text--primary"},[t._v(" Customs Declaration Form: Passengers are required to fill out a customs declaration form and submit it to the customs officer. This form provides information about the goods that are being brought into the country or taken out of the country.")]),e("p",{staticClass:"text--primary"},[t._v(" Physical Inspection of Luggage: The customs officer may conduct a physical inspection of the luggage to check for any prohibited or restricted items. If any prohibited or restricted items are found, they will be confiscated.")]),e("p",{staticClass:"text--primary"},[t._v(" Compliance with Customs Regulations: Passengers must comply with the customs regulations to avoid any penalties or legal action. If the customs officer has any doubts or suspicions, they may ask passengers to provide additional information or undergo further checks. Understanding the customs process at Chennai Airport can help make your travel experience smoother and avoid any inconveniences.")])]),e(d.Z,[e(m.Z,[e(g.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(h.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-clock-outline ")])],1),e(p.km,[e(p.V9,[t._v(" Immigration Waiting Time")]),e(p.oZ,[t._v("17 minutes")])],1)],1)],1)],1)],1),e(l.Z,{staticClass:"hidden-sm-and-down",attrs:{cols:"12",md:"1"}},[e(c.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return e("div",{class:""+(s?"imgover":"imgleave")},[e(u.Z,{class:t.$vuetify.breakpoint.smAndDown?"rounded-xl":"rounded-l-xl",attrs:{height:400,src:i(7402)}})],1)}}])})],1)],1)],1),e(S.Z,{staticClass:"border-radiusafter",attrs:{href:"#tab4"}},[t._v(" Exit Gate ")]),e($.Z,{attrs:{value:"tab4"}},[e(f.Z,[e(l.Z,{attrs:{cols:"12",md:"4"}},[e(c.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return e("div",{class:""+(s?"imgover":"imgleave")},[e(u.Z,{class:t.$vuetify.breakpoint.smAndDown?"rounded-xl":"rounded-r-xl",attrs:{height:400,src:i(7402)}})],1)}}])})],1),e(l.Z,{attrs:{cols:"12",md:"7"}},[e(a.Z,{staticClass:"mx-auto",attrs:{width:"90%",elevation:0}},[e(r.ZB,[e("p",{staticClass:"text-h4 text--primary"},[t._v("Exit Gates")]),e("p",{staticClass:"text--primary"},[t._v(" Chennai International Airport is the primary airport in Chennai, India, serving both Domestic and International passengers. ")]),e("p",{staticClass:"text--primary"},[t._v(" The airport has four terminals in which, Terminal 1 is for domestic flights and Terminal 3 is International arrivals. ")]),e("p",{staticClass:"text--primary"},[t._v(" Currently, one exit gate/arrival (A-2) in Terminal 1 is operational while Terminal 3 has one exit gate.")])]),e(d.Z,[e(m.Z,[e(g.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(h.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-clock-outline ")])],1),e(p.km,[e(p.V9,[t._v(" Immigration Waiting Time")]),e(p.oZ,[t._v("17 minutes")])],1)],1)],1)],1)],1),e(l.Z,{staticClass:"hidden-sm-and-down",attrs:{cols:"12",md:"1"}},[e(c.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return e("div",{class:""+(s?"imgover":"imgleave")},[e(u.Z,{class:t.$vuetify.breakpoint.smAndDown?"rounded-xl":"rounded-l-xl",attrs:{height:400,src:i(5076)}})],1)}}])})],1)],1)],1)],1)],1)],1)},B=[],F={name:"trackFlights",data(){return{sliderValue:50,search:"",filter:{},proId:this.$route.params.Pid,title:"trackFlights",flightlist:[{img:i(970),flightlistId:"1",name:"Indigo",flight:"6E 5284",origin:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Arrived",terminal:"T1",baggage:"Belt 3"},{img:i(7700),flightlistId:"2",name:"Emirates",flight:"6EK 568",origin:"Dubai",scheduled:"14:10",estimated:"14:23",status:"On Time",terminal:"T1",baggage:"Belt 3"},{img:i(970),flightlistId:"3",name:"Indigo",flight:"6E 5284",origin:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Delayed",terminal:"T1",baggage:"Belt 3"}],departureslist:[{img:i(970),name:"Indigo",flight:"6E 5284",origin:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Scheduled",terminal:"T1",checkin:"Row 3",gate:"Gate 3"},{img:i(7700),name:"Emirates",flight:"6EK 568",origin:"Dubai",scheduled:"14:10",estimated:"14:23",status:"Check-in Open",terminal:"T3",checkin:"Row  1",gate:"Gate 3"},{img:i(9567),name:"Sri Lankan Airlines",flight:"UL 174",origin:"Colombo",scheduled:"14:10",estimated:"14:23",status:"Gate Closed",terminal:"T1",checkin:"Row  7",gate:"Gate 3"},{img:i(9778),name:"Lufthansa",flight:"LF 754",origin:"Frankfurt",scheduled:"14:10",estimated:"14:23",status:"Boarding",terminal:"T1",checkin:"Row  7",gate:"Gate 3"},{img:i(9763),name:"AirAsia India",flight:"I51732",origin:"Mumbai",scheduled:"14:10",estimated:"14:23",status:"Departed",terminal:"T1",checkin:"Row  7",gate:"Gate 3"},{img:i(970),name:"Indigo",flight:"6E 5284",origin:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Security Check",terminal:"T1",checkin:"Row 3",gate:"Gate 3"},{img:i(7700),name:"Emirates",flight:"6EK 568",origin:"Dubai",scheduled:"14:10",estimated:"14:23",status:"Final Call",terminal:"T3",checkin:"Row  1",gate:"Gate 3"},{img:i(9567),name:"Sri Lankan Airlines",flight:"UL 174",origin:"Colombo",scheduled:"14:10",estimated:"14:23",status:"On Time",terminal:"T1",checkin:"Row  7",gate:"Gate 3"}]}}},E=F,A=i(1001),I=(0,A.Z)(E,V,B,!1,null,null,null),M=I.exports},9763:function(t,e,i){t.exports=i.p+"img/AirAsia.44c165c6.svg"},9778:function(t,e,i){t.exports=i.p+"img/Lufthansa.3e00027a.svg"},7700:function(t,e,i){t.exports=i.p+"img/emirates.821d6b73.svg"},970:function(t,e,i){t.exports=i.p+"img/flightimg.746fd422.svg"},9567:function(t,e,i){t.exports=i.p+"img/srilanka.8827fdc8.svg"},3500:function(t,e,i){t.exports=i.p+"img/train.89f71726.png"},2473:function(t,e,i){t.exports=i.p+"img/Banner_Flight01.f24c39cc.jpg"},7402:function(t,e,i){t.exports=i.p+"img/ExitGate.c3a8fb81.jpg"},5076:function(t,e,i){t.exports=i.p+"img/Immigration.8f0ff48e.jpg"},8010:function(t,e,i){t.exports=i.p+"img/baggage.4e24d7e0.jpg"}}]);
//# sourceMappingURL=8941.ae135fd2.js.map