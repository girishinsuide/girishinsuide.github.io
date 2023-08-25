"use strict";(self["webpackChunkchennai_airport"]=self["webpackChunkchennai_airport"]||[]).push([[1398],{1398:function(t,e,s){s.r(e),s.d(e,{default:function(){return A}});var i=s(64562),a=s(34145),l=s(54886),n=s(42240),r=s(40573),o=(s(57658),s(37069)),c=s(20144),u=c.ZP.extend({name:"rippleable",directives:{ripple:o.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),d=s(26174),h=s(67678);function p(t){t.preventDefault()}var m=(0,h.Z)(r.Z,u,d.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=r.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:p},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:p},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const s=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===s&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),v=m.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...r.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(n.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),b=s(60266),g=s(82118),f=s(4324),Z=s(11713),C=s(17808),y=s(77280),x=s(40352),k=function(){var t=this,e=t._self._c;return e(g.Z,[e(Z.Z,{attrs:{align:"center",justify:"center"}},[e(b.Z,{attrs:{cols:"12",sm:"10"}},[e(a.Z,{staticClass:"elevation-6 mt-10"},[e(y.Z,{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[e(x.Z,{attrs:{value:1}},[e(Z.Z,[e(b.Z,{attrs:{cols:"12",md:"6"}},[e(l.ZB,{staticClass:"mt-12"},[e("h4",{staticClass:"text-center"},[t._v("Login in to Your Account")]),e("h6",{staticClass:"text-center grey--text"},[t._v("Log in to your account so you can continue builiding "),e("br"),t._v("and editing your onboarding flows")]),e(Z.Z,{attrs:{align:"center",justify:"center"}},[e(b.Z,{attrs:{cols:"12",sm:"8"}},[e(C.Z,{staticClass:"mt-16",attrs:{label:"Email",outlined:"",dense:"",color:"blue",autocomplete:"false"}}),e(C.Z,{attrs:{label:"Password",outlined:"",dense:"",color:"blue",autocomplete:"false",type:"password"}}),e(Z.Z,[e(b.Z,{attrs:{cols:"12",sm:"7"}},[e(v,{staticClass:"mt-n1",attrs:{label:"Remember Me",color:"blue"}})],1),e(b.Z,{attrs:{cols:"12",sm:"5"}},[e("span",{staticClass:"caption blue--text"},[t._v("Forgot password")])])],1),e(i.Z,{attrs:{color:"blue",dark:"",block:"",tile:""}},[t._v("Log in")]),e("h5",{staticClass:"text-center grey--text mt-4 mb-3"},[t._v("Or Log in using")]),e("div",{staticClass:"d-flex justify-space-between align-center mx-10 mb-16"},[e(i.Z,{attrs:{depressed:"",outlined:"",color:"grey"}},[e(f.Z,{attrs:{color:"red"}},[t._v("fab fa-google")])],1),e(i.Z,{attrs:{depressed:"",outlined:"",color:"grey"}},[e(f.Z,{attrs:{color:"blue"}},[t._v("fab fa-facebook-f")])],1),e(i.Z,{attrs:{depressed:"",outlined:"",color:"grey"}},[e(f.Z,{attrs:{color:"light-blue lighten-3"}},[t._v("fab fa-twitter")])],1)],1)],1)],1)],1)],1),e(b.Z,{staticClass:"blue rounded-bl-xl",attrs:{cols:"12",md:"6"}},[e("div",{staticStyle:{"text-align":"center",padding:"180px 0"}},[e(l.ZB,{staticClass:"white--text"},[e("h3",{staticClass:"text-center"},[t._v("Don't Have an Account Yet?")]),e("h6",{staticClass:"text-center"},[t._v("Let's get you all set up so you can start creating your your first"),e("br"),t._v(" onboarding experience")])]),e("div",{staticClass:"text-center"},[e(i.Z,{attrs:{tile:"",outlined:"",dark:""},on:{click:function(e){t.step++}}},[t._v("SIGN UP")])],1)],1)])],1)],1),e(x.Z,{attrs:{value:2}},[e(Z.Z,[e(b.Z,{staticClass:"blue rounded-br-xl",attrs:{cols:"12",md:"6"}},[e("div",{staticStyle:{"text-align":"center",padding:"180px 0"}},[e(l.ZB,{staticClass:"white--text"},[e("h3",{staticClass:"text-center"},[t._v("Alredy Signed up?")]),e("h6",{staticClass:"text-center"},[t._v("Log in to your account so you can continue building and"),e("br"),t._v(" editing your onboarding flows")])]),e("div",{staticClass:"text-center"},[e(i.Z,{attrs:{tile:"",outlined:"",dark:""},on:{click:function(e){t.step--}}},[t._v("Log in")])],1)],1)]),e(b.Z,{attrs:{cols:"12",md:"6"}},[e(l.ZB,{staticClass:"mt-12"},[e("h4",{staticClass:"text-center"},[t._v("Sign Up for an Account")]),e("h6",{staticClass:"text-center grey--text"},[t._v("Let's get you all set up so you can start creatin your "),e("br"),t._v(" first onboarding experiance")]),e(Z.Z,{attrs:{align:"center",justify:"center"}},[e(b.Z,{attrs:{cols:"12",sm:"8"}},[e(Z.Z,[e(b.Z,{attrs:{cols:"12",sm:"6"}},[e(C.Z,{staticClass:"mt-4",attrs:{label:"First Name",outlined:"",dense:"",color:"blue",autocomplete:"false"}})],1),e(b.Z,{attrs:{cols:"12",sm:"6"}},[e(C.Z,{staticClass:"mt-4",attrs:{label:"Last Name",outlined:"",dense:"",color:"blue",autocomplete:"false"}})],1)],1),e(C.Z,{attrs:{label:"Email",outlined:"",dense:"",color:"blue",autocomplete:"false"}}),e(C.Z,{attrs:{label:"Password",outlined:"",dense:"",color:"blue",autocomplete:"false",type:"password"}}),e(Z.Z,[e(b.Z,{attrs:{cols:"12",sm:"7"}},[e(v,{staticClass:"mt-n1",attrs:{label:"I Accept AAE",color:"blue"}})],1),e(b.Z,{attrs:{cols:"12",sm:"5"}},[e("span",{staticClass:"caption blue--text ml-n4"},[t._v("Terms &Conditions")])])],1),e(i.Z,{attrs:{color:"blue",dark:"",block:"",tile:""}},[t._v("Sign up")]),e("h5",{staticClass:"text-center grey--text mt-4 mb-3"},[t._v("Or Sign up using")]),e("div",{staticClass:"d-flex justify-space-between align-center mx-10 mb-11"},[e(i.Z,{attrs:{depressed:"",outlined:"",color:"grey"}},[e(f.Z,{attrs:{color:"red"}},[t._v("fab fa-google")])],1),e(i.Z,{attrs:{depressed:"",outlined:"",color:"grey"}},[e(f.Z,{attrs:{color:"blue"}},[t._v("fab fa-facebook-f")])],1),e(i.Z,{attrs:{depressed:"",outlined:"",color:"grey"}},[e(f.Z,{attrs:{color:"light-blue lighten-3"}},[t._v("fab fa-twitter")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},_=[],I={data:()=>({step:1,username:null,password:null}),props:{source:String},methods:{}},S=I,w=s(1001),V=(0,w.Z)(S,k,_,!1,null,"5585e920",null),A=V.exports}}]);
//# sourceMappingURL=1398.c151b23e.js.map