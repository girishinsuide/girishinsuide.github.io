"use strict";(self["webpackChunkchennai_airport"]=self["webpackChunkchennai_airport"]||[]).push([[279],{1279:function(t,e,i){i.r(e),i.d(e,{default:function(){return L}});var s=i(6190),a=i(9582),r=i(4886),l=i(4127),n=i(266),o=i(2118),h=i(8224),c=i(4324),u=i(5495),m=i(5808),d=i(4525),v=i(6900),p=i(8627),g=i(4611),b=i(1713),f=(i(541),i(7658),i(573)),C=i(7394),k=i(7678),y=i(8126),_=i(5942),Z=i(5352),x=i(4101),S=(0,k.Z)(f.Z,y.Z).extend({name:"v-slider",directives:{ClickOutside:_.Z},mixins:[y.Z],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:t=>"boolean"===typeof t||"always"===t},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:()=>[]},ticks:{type:[Boolean,String],default:!1,validator:t=>"boolean"===typeof t||"always"===t},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:()=>({app:null,oldValue:null,thumbPressed:!1,mouseTimeout:-1,isFocused:!1,isActive:!1,noClick:!1,startOffset:0}),computed:{classes(){return{...f.Z.options.computed.classes.call(this),"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel}},internalValue:{get(){return this.lazyValue},set(t){t=isNaN(t)?this.minValue:t;const e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition(){return this.thumbPressed?this.showTicks||this.stepNumeric?"0.1s cubic-bezier(0.25, 0.8, 0.5, 1)":"none":""},minValue(){return parseFloat(this.min)},maxValue(){return parseFloat(this.max)},stepNumeric(){return this.step>0?parseFloat(this.step):0},inputWidth(){const t=(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100;return isNaN(t)?0:t},trackFillStyles(){const t=this.vertical?"bottom":"left",e=this.vertical?"top":"right",i=this.vertical?"height":"width",s=this.$vuetify.rtl?"auto":"0",a=this.$vuetify.rtl?"0":"auto",r=this.isDisabled?`calc(${this.inputWidth}% - 10px)`:`${this.inputWidth}%`;return{transition:this.trackTransition,[t]:s,[e]:a,[i]:r}},trackStyles(){const t=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",e=this.vertical?"height":"width",i="0px",s=this.isDisabled?`calc(${100-this.inputWidth}% - 10px)`:`calc(${100-this.inputWidth}%)`;return{transition:this.trackTransition,[t]:i,[e]:s}},showTicks(){return this.tickLabels.length>0||!(this.isDisabled||!this.stepNumeric||!this.ticks)},numTicks(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel(){return!this.isDisabled&&!(!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min(t){const e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max(t){const e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler(t){this.internalValue=t},immediate:!0}},mounted(){this.app=document.querySelector("[data-app]")||(0,x.Kd)("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot(){const t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider(){return this.$createElement("div",{class:{"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly,...this.themeClasses},directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick,mousedown:this.onSliderMouseDown,touchstart:this.onSliderMouseDown}},this.genChildren())},genChildren(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onFocus,this.onBlur)]},genInput(){return this.$createElement("input",{attrs:{value:this.internalValue,id:this.computedId,disabled:!0,readonly:!0,tabindex:-1,...this.$attrs}})},genTrackContainer(){const t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps(){if(!this.step||!this.showTicks)return null;const t=parseFloat(this.tickSize),e=(0,Z.MT)(this.numTicks+1),i=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",s=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&e.reverse();const a=e.map((e=>{const a=[];this.tickLabels[e]&&a.push(this.$createElement("div",{staticClass:"v-slider__tick-label"},this.tickLabels[e]));const r=e*(100/this.numTicks),l=this.$vuetify.rtl?100-this.inputWidth<r:r<this.inputWidth;return this.$createElement("span",{key:e,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":l},style:{width:`${t}px`,height:`${t}px`,[i]:`calc(${r}% - ${t/2}px)`,[s]:`calc(50% - ${t/2}px)`}},a)}));return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},a)},genThumbContainer(t,e,i,s,a,r,l="thumb"){const n=[this.genThumb()],o=this.genThumbLabelContent(t);return this.showThumbLabel&&n.push(this.genThumbLabel(o)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:l,key:l,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":i,"v-slider__thumb-container--focused":s,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:{role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.$attrs["aria-label"]||this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal"},on:{focus:a,blur:r,keydown:this.onKeyDown}}),n)},genThumbLabelContent(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel(t){const e=(0,Z.kb)(this.thumbSize),i=this.vertical?`translateY(20%) translateY(${Number(this.thumbSize)/3-1}px) translateX(55%) rotate(135deg)`:"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(C.T0,{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e,transform:i}}),[this.$createElement("div",t)])])])},genThumb(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles(t){const e=this.vertical?"top":"left";let i=this.$vuetify.rtl?100-t:t;return i=this.vertical?100-i:i,{transition:this.trackTransition,[e]:`${i}%`}},onSliderMouseDown(t){var e;if(t.preventDefault(),this.oldValue=this.internalValue,this.isActive=!0,null===(e=t.target)||void 0===e?void 0:e.matches(".v-slider__thumb-container, .v-slider__thumb-container *")){this.thumbPressed=!0;const e=t.target.getBoundingClientRect(),i="touches"in t?t.touches[0]:t;this.startOffset=this.vertical?i.clientY-(e.top+e.height/2):i.clientX-(e.left+e.width/2)}else this.startOffset=0,window.clearTimeout(this.mouseTimeout),this.mouseTimeout=window.setTimeout((()=>{this.thumbPressed=!0}),300);const i=!Z.e$||{passive:!0,capture:!0},s=!!Z.e$&&{passive:!0},a="touches"in t;this.onMouseMove(t),this.app.addEventListener(a?"touchmove":"mousemove",this.onMouseMove,s),(0,Z.qh)(this.app,a?"touchend":"mouseup",this.onSliderMouseUp,i),this.$emit("start",this.internalValue)},onSliderMouseUp(t){t.stopPropagation(),window.clearTimeout(this.mouseTimeout),this.thumbPressed=!1;const e=!!Z.e$&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("mouseup",t),this.$emit("end",this.internalValue),(0,Z.vZ)(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove(t){"mousemove"===t.type&&(this.thumbPressed=!0),this.internalValue=this.parseMouseMove(t)},onKeyDown(t){if(!this.isInteractive)return;const e=this.parseKeyDown(t,this.internalValue);null==e||e<this.minValue||e>this.maxValue||(this.internalValue=e,this.$emit("change",e))},onSliderClick(t){if(this.noClick)return void(this.noClick=!1);const e=this.$refs.thumb;e.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove(t){const e=this.vertical?"top":"left",i=this.vertical?"height":"width",s=this.vertical?"clientY":"clientX",{[e]:a,[i]:r}=this.$refs.track.getBoundingClientRect(),l="touches"in t?t.touches[0][s]:t[s];let n=Math.min(Math.max((l-a-this.startOffset)/r,0),1)||0;return this.vertical&&(n=1-n),this.$vuetify.rtl&&(n=1-n),parseFloat(this.min)+n*(this.maxValue-this.minValue)},parseKeyDown(t,e){if(!this.isInteractive)return;const{pageup:i,pagedown:s,end:a,home:r,left:l,right:n,down:o,up:h}=Z.Do;if(![i,s,a,r,l,n,o,h].includes(t.keyCode))return;t.preventDefault();const c=this.stepNumeric||1,u=(this.maxValue-this.minValue)/c;if([l,n,o,h].includes(t.keyCode)){const i=this.$vuetify.rtl?[l,h]:[n,h],s=i.includes(t.keyCode)?1:-1,a=t.shiftKey?3:t.ctrlKey?2:1;e+=s*c*a}else if(t.keyCode===r)e=this.minValue;else if(t.keyCode===a)e=this.maxValue;else{const i=t.keyCode===s?1:-1;e-=i*c*(u>100?u/10:10)}return e},roundValue(t){if(!this.stepNumeric)return t;const e=this.step.toString().trim(),i=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,s=this.minValue%this.stepNumeric,a=Math.round((t-s)/this.stepNumeric)*this.stepNumeric+s;return parseFloat(Math.min(a,this.maxValue).toFixed(i))}}}),w=i(3687),T=i(626),V=i(5517),$=i(6456),D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e(a.Z,{staticClass:"mx-auto mt-n3",attrs:{flat:""}},[e(u.Z,{staticClass:"my-3",attrs:{src:i(3759),contain:""}}),e(o.Z,[e(m.Z,[e(d.Z,[e(v.Z,{staticClass:"rounded-lg",attrs:{size:"x-large"}},[e(u.Z,{staticClass:"my-3",attrs:{src:i(7700),contain:""}})],1),e(p.km,[e(p.V9,{staticClass:"text-h5"},[t._v(" EK 568")]),e(p.oZ,[t._v("Emirates")])],1),e(g.Z,[e(l.Z,{staticClass:"ma-2 pl-10 pr-10",attrs:{large:"",color:"#BBF7D0","text-color":"green"}},[t._v(" On Time ")])],1)],1)],1),e(b.Z,{attrs:{align:"center"}},[e(n.Z,{attrs:{cols:"2"}},[e(m.Z,[e(d.Z,[e(p.km,[e(p.V9,{staticClass:"text-h5"},[t._v(" EK 568")]),e(p.oZ,[t._v("Emirates")])],1)],1)],1)],1),e(n.Z,{attrs:{cols:"8"}},[e(S,{staticClass:"my-slider",attrs:{"append-icon":"mdi-record-circle-outline","prepend-icon":"mdi-record-circle-outline","thumb-color":"primary","thumb-label":"always","thumb-size":"50","hide-details":""},scopedSlots:t._u([{key:"thumb-label",fn:function(){return[e(m.Z,[e(d.Z,{attrs:{dark:""}},[e(v.Z,{},[e(c.Z,{attrs:{dark:""}},[t._v("mdi-airplane-takeoff")])],1),e(p.km,[e(p.V9,[t._v(" Scheduled")]),e(p.oZ,{staticClass:"text-h6"},[t._v("14:10")])],1)],1)],1)]},proxy:!0}]),model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})],1),e(n.Z,{attrs:{cols:"2"}},[e(m.Z,[e(d.Z,[e(p.km,[e(p.V9,{staticClass:"text-h5"},[t._v(" EK 568")]),e(p.oZ,[t._v("Emirates")])],1)],1)],1)],1)],1),e(b.Z,{staticClass:"mt-5 mb-10"},[e(n.Z,[e(m.Z,[e(d.Z,[e(v.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(c.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-clock-outline ")])],1),e(p.km,[e(p.V9,[t._v(" Scheduled")]),e(p.oZ,{staticClass:"text-h6"},[t._v("14:10")])],1)],1)],1)],1),e(n.Z,[e(m.Z,[e(d.Z,[e(v.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(c.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-timer-plus-outline ")])],1),e(p.km,[e(p.V9,[t._v(" Estimated")]),e(p.oZ,{staticClass:"text-h6"},[t._v("14:23")])],1)],1)],1)],1),e(n.Z,[e(m.Z,[e(d.Z,[e(v.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(c.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-airport ")])],1),e(p.km,[e(p.V9,[t._v(" Terminal")]),e(p.oZ,{staticClass:"text-h6"},[t._v("T4")])],1)],1)],1)],1),e(n.Z,[e(m.Z,[e(d.Z,[e(v.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(c.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":"",light:""}},[t._v(" mdi-bag-suitcase ")])],1),e(p.km,[e(p.V9,[t._v(" Baggage")]),e(p.oZ,{staticClass:"text-h6"},[t._v("Belt 7")])],1)],1)],1)],1)],1),e(b.Z,{staticClass:"mb-10"},[e(n.Z,[e(a.Z,{attrs:{flat:""}},[e(r.h7,[e("router-link",{attrs:{to:"/flightinformation"}},[e(s.Z,{staticClass:"pl-4 pr-4",attrs:{depressed:"",rounded:"",large:"",color:"#E8EFFE"}},[e(c.Z,{attrs:{left:""}},[t._v("mdi-airplane")]),t._v(" Back to Flights ")],1)],1),e(w.Z),e(s.Z,{staticClass:"gradient-button pl-10 pr-10",attrs:{depressed:"",rounded:"",dark:"",large:""}},[e(c.Z,{attrs:{left:""}},[t._v("mdi-plus")]),t._v(" Track Flight ")],1),e(s.Z,{staticClass:"ml-10 mr-10",attrs:{text:"",color:"#00C6FF"}},[e(c.Z,{attrs:{left:""}},[t._v("mdi-share-variant")]),t._v(" Share Flight ")],1),e(s.Z,{attrs:{text:"",color:"#00C6FF"}},[e(c.Z,{attrs:{left:""}},[t._v("mdi-phone")]),t._v(" Contact Airline ")],1)],1)],1)],1)],1)],1),e(r.EB,{staticClass:"justify-center text-uppercase page-title mb-2"},[t._v(" next steps ")]),e(r.Qq,{staticClass:"text-center mb-4"},[e("h1",[t._v("Your Itinerary")])]),e($.Z,{staticClass:"mytabs",class:{responsiveTab:t.$vuetify.breakpoint.smAndDown},attrs:{"background-color":" accent-4",centered:""}},[e(T.Z,{staticClass:"border-radiusbefore",attrs:{href:"#tab1"}},[t._v(" Immigration ")]),e(V.Z,{attrs:{value:"tab1"}},[e(b.Z,[e(n.Z,{attrs:{cols:"12",md:"4"}},[e(h.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return e("div",{class:""+(s?"imgover":"imgleave")},[e(u.Z,{class:t.$vuetify.breakpoint.smAndDown?"rounded-xl":"rounded-r-xl",attrs:{src:i(3500),width:"90%"}})],1)}}])})],1),e(n.Z,{attrs:{cols:"12",md:"8"}},[e(a.Z,{staticClass:"mx-auto",attrs:{width:"90%",elevation:0}},[e(r.ZB,[e("p",{staticClass:"text-h4 text--primary"},[t._v("Immigration")]),e("p",{staticClass:"text--primary"},[t._v(" Upon your arrival at the Airport make sure all your documents are kept ready before reaching the Immigration Hall.")]),e("p",{staticClass:"text--primary"},[t._v(" Please follow the Signage available near the transfer area")]),e("p",{staticClass:"text--primary"},[t._v(" We have 48 Immigration counters & 46 E-visa counter/ Visa Counters at the Arrival Section.")]),e("p",{staticClass:"text--primary"},[t._v(" We have 60 Immigration counters & 4 counters at the Domestic to International Transfer.")]),e("p",{staticClass:"text--primary"},[t._v(" For details on immigration requirements, please visit "),e("a",{attrs:{href:"http://boi.gov.in",target:"_blank"}},[t._v("http://boi.gov.in/")])])]),e(m.Z,[e(d.Z,[e(v.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(c.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-clock-outline ")])],1),e(p.km,[e(p.V9,[t._v(" Immigration Waiting Time")]),e(p.oZ,[t._v("14:10")])],1)],1)],1)],1)],1)],1)],1),e(T.Z,{attrs:{href:"#tab2"}},[t._v(" Baggage ")]),e(V.Z,{attrs:{value:"tab2"}},[e(b.Z,[e(n.Z,{attrs:{cols:"12",md:"4"}},[e(h.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return e("div",{class:""+(s?"imgover":"imgleave")},[e(u.Z,{class:t.$vuetify.breakpoint.smAndDown?"rounded-xl":"rounded-r-xl",attrs:{src:i(3500),width:"90%"}})],1)}}])})],1),e(n.Z,{attrs:{cols:"12",md:"8"}},[e(a.Z,{staticClass:"mx-auto",attrs:{width:"90%",elevation:0}},[e(r.ZB,[e("p",{staticClass:"text-h4 text--primary"},[t._v("Baggage")]),e("p",{staticClass:"text--primary"},[t._v(" Upon your arrival at the Airport make sure all your documents are kept ready before reaching the Immigration Hall.")]),e("p",{staticClass:"text--primary"},[t._v(" Please follow the Signage available near the transfer area")]),e("p",{staticClass:"text--primary"},[t._v(" We have 48 Immigration counters & 46 E-visa counter/ Visa Counters at the Arrival Section.")]),e("p",{staticClass:"text--primary"},[t._v(" We have 60 Immigration counters & 4 counters at the Domestic to International Transfer.")]),e("p",{staticClass:"text--primary"},[t._v(" For details on immigration requirements, please visit "),e("a",{attrs:{href:"http://boi.gov.in",target:"_blank"}},[t._v("http://boi.gov.in/")])])]),e(m.Z,[e(d.Z,[e(v.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(c.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-clock-outline ")])],1),e(p.km,[e(p.V9,[t._v(" Immigration Waiting Time")]),e(p.oZ,[t._v("14:10")])],1)],1)],1)],1)],1)],1)],1),e(T.Z,{attrs:{href:"#tab3"}},[t._v(" Customs ")]),e(V.Z,{attrs:{value:"tab3"}},[e(b.Z,[e(n.Z,{attrs:{cols:"12",md:"4"}},[e(h.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return e("div",{class:""+(s?"imgover":"imgleave")},[e(u.Z,{class:t.$vuetify.breakpoint.smAndDown?"rounded-xl":"rounded-r-xl",attrs:{src:i(3500),width:"90%"}})],1)}}])})],1),e(n.Z,{attrs:{cols:"12",md:"8"}},[e(a.Z,{staticClass:"mx-auto",attrs:{width:"90%",elevation:0}},[e(r.ZB,[e("p",{staticClass:"text-h4 text--primary"},[t._v("Customs")]),e("p",{staticClass:"text--primary"},[t._v(" Upon your arrival at the Airport make sure all your documents are kept ready before reaching the Immigration Hall.")]),e("p",{staticClass:"text--primary"},[t._v(" Please follow the Signage available near the transfer area")]),e("p",{staticClass:"text--primary"},[t._v(" We have 48 Immigration counters & 46 E-visa counter/ Visa Counters at the Arrival Section.")]),e("p",{staticClass:"text--primary"},[t._v(" We have 60 Immigration counters & 4 counters at the Domestic to International Transfer.")]),e("p",{staticClass:"text--primary"},[t._v(" For details on immigration requirements, please visit "),e("a",{attrs:{href:"http://boi.gov.in",target:"_blank"}},[t._v("http://boi.gov.in/")])])]),e(m.Z,[e(d.Z,[e(v.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(c.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-clock-outline ")])],1),e(p.km,[e(p.V9,[t._v(" Immigration Waiting Time")]),e(p.oZ,[t._v("14:10")])],1)],1)],1)],1)],1)],1)],1),e(T.Z,{staticClass:"border-radiusafter",attrs:{href:"#tab4"}},[t._v(" Exit Gate ")]),e(V.Z,{attrs:{value:"tab4"}},[e(b.Z,[e(n.Z,{attrs:{cols:"12",md:"4"}},[e(h.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return e("div",{class:""+(s?"imgover":"imgleave")},[e(u.Z,{class:t.$vuetify.breakpoint.smAndDown?"rounded-xl":"rounded-r-xl",attrs:{src:i(3500),width:"90%"}})],1)}}])})],1),e(n.Z,{attrs:{cols:"12",md:"8"}},[e(a.Z,{staticClass:"mx-auto",attrs:{width:"90%",elevation:0}},[e(r.ZB,[e("p",{staticClass:"text-h4 text--primary"},[t._v("Exit Gate")]),e("p",{staticClass:"text--primary"},[t._v(" Upon your arrival at the Airport make sure all your documents are kept ready before reaching the Immigration Hall.")]),e("p",{staticClass:"text--primary"},[t._v(" Please follow the Signage available near the transfer area")]),e("p",{staticClass:"text--primary"},[t._v(" We have 48 Immigration counters & 46 E-visa counter/ Visa Counters at the Arrival Section.")]),e("p",{staticClass:"text--primary"},[t._v(" We have 60 Immigration counters & 4 counters at the Domestic to International Transfer.")]),e("p",{staticClass:"text--primary"},[t._v(" For details on immigration requirements, please visit "),e("a",{attrs:{href:"http://boi.gov.in",target:"_blank"}},[t._v("http://boi.gov.in/")])])]),e(m.Z,[e(d.Z,[e(v.Z,{staticClass:"rounded-lg",attrs:{size:"62"}},[e(c.Z,{staticClass:"lighten-1",staticStyle:{border:"2px solid #D1D5DB"},attrs:{"x-large":""}},[t._v(" mdi-clock-outline ")])],1),e(p.km,[e(p.V9,[t._v(" Immigration Waiting Time")]),e(p.oZ,[t._v("14:10")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},E=[],F={name:"trackFlights",data(){return{sliderValue:50,search:"",filter:{},proId:this.$route.params.Pid,title:"trackFlights",flightlist:[{img:i(970),flightlistId:"1",name:"Indigo",flight:"6E 5284",origin:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Arrived",terminal:"T1",baggage:"Belt 3"},{img:i(7700),flightlistId:"2",name:"Emirates",flight:"6EK 568",origin:"Dubai",scheduled:"14:10",estimated:"14:23",status:"On Time",terminal:"T1",baggage:"Belt 3"},{img:i(970),flightlistId:"3",name:"Indigo",flight:"6E 5284",origin:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Delayed",terminal:"T1",baggage:"Belt 3"}],departureslist:[{img:i(970),name:"Indigo",flight:"6E 5284",origin:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Scheduled",terminal:"T1",checkin:"Row 3",gate:"Gate 3"},{img:i(7700),name:"Emirates",flight:"6EK 568",origin:"Dubai",scheduled:"14:10",estimated:"14:23",status:"Check-in Open",terminal:"T3",checkin:"Row  1",gate:"Gate 3"},{img:i(9567),name:"Sri Lankan Airlines",flight:"UL 174",origin:"Colombo",scheduled:"14:10",estimated:"14:23",status:"Gate Closed",terminal:"T1",checkin:"Row  7",gate:"Gate 3"},{img:i(9778),name:"Lufthansa",flight:"LF 754",origin:"Frankfurt",scheduled:"14:10",estimated:"14:23",status:"Boarding",terminal:"T1",checkin:"Row  7",gate:"Gate 3"},{img:i(9763),name:"AirAsia India",flight:"I51732",origin:"Mumbai",scheduled:"14:10",estimated:"14:23",status:"Departed",terminal:"T1",checkin:"Row  7",gate:"Gate 3"},{img:i(970),name:"Indigo",flight:"6E 5284",origin:"Bengaluru",scheduled:"14:10",estimated:"14:23",status:"Security Check",terminal:"T1",checkin:"Row 3",gate:"Gate 3"},{img:i(7700),name:"Emirates",flight:"6EK 568",origin:"Dubai",scheduled:"14:10",estimated:"14:23",status:"Final Call",terminal:"T3",checkin:"Row  1",gate:"Gate 3"},{img:i(9567),name:"Sri Lankan Airlines",flight:"UL 174",origin:"Colombo",scheduled:"14:10",estimated:"14:23",status:"On Time",terminal:"T1",checkin:"Row  7",gate:"Gate 3"}]}}},B=F,I=i(3736),M=(0,I.Z)(B,D,E,!1,null,null,null),L=M.exports},9763:function(t,e,i){t.exports=i.p+"img/AirAsia.44c165c6.svg"},9778:function(t,e,i){t.exports=i.p+"img/Lufthansa.3e00027a.svg"},7700:function(t,e,i){t.exports=i.p+"img/emirates.821d6b73.svg"},970:function(t,e,i){t.exports=i.p+"img/flightimg.746fd422.svg"},9567:function(t,e,i){t.exports=i.p+"img/srilanka.8827fdc8.svg"},3500:function(t,e,i){t.exports=i.p+"img/train.89f71726.png"},3759:function(t,e,i){t.exports=i.p+"img/trackflight.541cde29.jpg"}}]);
//# sourceMappingURL=279.6a5e778d.js.map