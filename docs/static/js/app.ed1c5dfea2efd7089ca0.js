webpackJsonp([1],{"6eHB":function(e,t){},CV61:function(e,t){},NHnr:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("7+uW"),o=l("zL8q"),r=l.n(o),n=(l("tvR6"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]}),s=l("VU/8")({name:"app"},n,!1,function(e){l("dStH")},null,null).exports,i=l("/ocq"),u={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("h1",[this._v("BAT-Generater (JS ver)")])])}]},c=[{label:"LA POOL",options:[{value:"stratum+tcp://jp.lapool.me:3014",label:"LA POOL 低難易度(低性能CPU)"},{value:"stratum+tcp://jp.lapool.me:3114",label:"LA POOL 高難易度(高性能CPU)"}]},{label:"MD POOL",options:[{value:"stratum+tcp://mining-zeny.mdpool.info:6969",label:"MD POOL 低難易度(低性能CPU)"},{value:"stratum+tcp://mining-zeny.mdpool.info:6960",label:"MD POOL 中難易度(中性能CPU)"},{value:"stratum+tcp://mining-zeny.mdpool.info:6961",label:"MD POOL 高難易度(高性能CPU)"},{value:"stratum+tcp://mining-zeny.mdpool.info:6962",label:"MD POOL 超高難易度(超高性能CPU)"}]},{label:"うさぎコイン発掘所",options:[{value:"stratum+tcp://bunnymining.work:19332",label:"うさぎコイン発掘所 低難易度(低性能CPU)"},{value:"stratum+tcp://bunnymining.work:19333",label:"うさぎコイン発掘所 中難易度(中性能CPU)"},{value:"stratum+tcp://bunnymining.work:19334",label:"うさぎコイン発掘所 高難易度(高性能CPU)"}]},{label:"みそスープール",options:[{value:"stratum+tcp://stratum.misosi.ru:16002",label:"みそスープール 低難易度(低性能CPU)"},{value:"stratum+tcp://stratum.misosi.ru:16001",label:"みそスープール 高難易度(高性能CPU)"}]},{label:"その他",options:[{value:"extra",label:"その他のプール"}]}],p={name:"Contents",methods:{download:function(){var e=this.bat,t=document.createElement("a");t.download="start.bat",t.href=URL.createObjectURL(new Blob([e],{type:"text.plain"})),t.dataset.downloadurl=["text/plain",t.download,t.href].join(":"),t.click()}},computed:{bat:function(){var e=this,t=this.value.password?" -p "+this.value.password:"",l=this.value.core?" -t "+this.value.core:"";return"minerd -a yescrypt"+("pool"===e.type?e.value.pool||e.value.poolExtra?"extra"===e.value.pool?" -o "+e.value.poolExtra:" -o "+e.value.pool:"":" -o localhost:9252")+(e.value.user?"pool"===e.type&&e.value.worker?" -u "+e.value.user+"."+e.value.worker:" -u "+e.value.user:"")+t+l},cmdValid:function(){var e=this,t=this.value.user,l=this.value.password;return("pool"!==e.type||(e.value.pool?"extra"!==e.value.pool||e.value.poolExtra:void 0))&&t&&l}},data:function(){return{value:{pool:"",poolExtra:"",core:"",user:"",worker:"",password:""},type:"pool",poollist:c,core:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]}}},v={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-card",{staticClass:"box-card"},[l("p",[e._v("Generate command of BAT file for BitZeny.")]),e._v(" "),e.cmdValid?[l("el-alert",{staticClass:"validAlert",attrs:{title:"Available command",type:"success","show-icon":""}})]:e._e(),e._v(" "),e.cmdValid?e._e():[l("el-alert",{staticClass:"validAlert",attrs:{title:"Uncomplete command",type:"info","show-icon":""}})],e._v(" "),l("div",{staticClass:"bat"},[l("span",[e._v(e._s(e.bat))]),e._v(" "),e.cmdValid?[l("el-button",{attrs:{type:"success",icon:"el-icon-download"},on:{click:e.download}},[e._v("Download BAT file")])]:e._e(),e._v(" "),e.cmdValid?e._e():[l("el-button",{attrs:{type:"success",icon:"el-icon-download",disabled:""}},[e._v("Download BAT file")])]],2),e._v(" "),l("el-form",{ref:"form",attrs:{model:e.value,"label-width":"120px"}},[l("el-form-item",{attrs:{label:"Mining Type"}},[l("el-radio-group",{model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[l("el-radio-button",{attrs:{label:"pool"}},[e._v("Pool Mining")]),e._v(" "),l("el-radio-button",{attrs:{label:"solo"}},[e._v("Solo Mining")])],1)],1),e._v(" "),"pool"===e.type?[l("el-form-item",{attrs:{label:"Pool"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Please select pool"},model:{value:e.value.pool,callback:function(t){e.$set(e.value,"pool",t)},expression:"value.pool"}},e._l(e.poollist,function(t){return l("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))}))],1),e._v(" "),"extra"===e.value.pool?[l("el-form-item",{attrs:{label:"Extra pool"}},[l("el-input",{attrs:{placeholder:"Please input pool address"},model:{value:e.value.poolExtra,callback:function(t){e.$set(e.value,"poolExtra",t)},expression:"value.poolExtra"}})],1)]:e._e()]:e._e(),e._v(" "),l("el-form-item",{attrs:{label:"CPU cores"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Please select number of CPU cores"},model:{value:e.value.core,callback:function(t){e.$set(e.value,"core",t)},expression:"value.core"}},e._l(e.core,function(e){return l("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),"pool"===e.type?[l("el-form-item",{attrs:{label:"Pool Username"}},[l("el-input",{attrs:{placeholder:"user"},model:{value:e.value.user,callback:function(t){e.$set(e.value,"user",t)},expression:"value.user"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"Workername"}},[l("el-input",{attrs:{placeholder:"worker"},model:{value:e.value.worker,callback:function(t){e.$set(e.value,"worker",t)},expression:"value.worker"}})],1)]:e._e(),e._v(" "),"pool"!==e.type?[l("el-form-item",{attrs:{label:"Username"}},[l("el-input",{attrs:{placeholder:"user"},model:{value:e.value.user,callback:function(t){e.$set(e.value,"user",t)},expression:"value.user"}})],1)]:e._e(),e._v(" "),l("el-form-item",{attrs:{label:"Password"}},[l("el-input",{attrs:{placeholder:"password"},model:{value:e.value.password,callback:function(t){e.$set(e.value,"password",t)},expression:"value.password"}})],1)],2)],2)},staticRenderFns:[]},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-card",{staticClass:"box-card"},[t("p",[this._v("\n    Created by "),t("a",{attrs:{href:"https://github.com/usagi-f",target:"_blank"}},[this._v("@usagi-f")]),this._v(" "),t("span",{staticClass:"original"},[this._v("(Original: "),t("a",{attrs:{href:"https://github.com/koki-koba",target:"_blank"}},[this._v("@koki-koba")]),this._v(")")])]),this._v(" "),t("p",[this._v("\n    投げ銭：ZobavRBBSXkZiUj4Mv3mK8pjXc6jN2j88T\n  ")])])},staticRenderFns:[]},m={name:"Layout",components:{TitleHeader:l("VU/8")({name:"TitleHeader"},u,!1,function(e){l("CV61")},"data-v-f3d762d2",null).exports,Contents:l("VU/8")(p,v,!1,function(e){l("6eHB")},"data-v-86082e28",null).exports,Author:l("VU/8")({name:"author"},d,!1,function(e){l("qHLD")},"data-v-62878e66",null).exports}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-header",[t("TitleHeader")],1),this._v(" "),t("el-main",[t("Contents"),this._v(" "),t("Author")],1)],1)},staticRenderFns:[]},b=l("VU/8")(m,f,!1,null,null,null).exports;a.default.use(i.a);var h=new i.a({routes:[{path:"/",name:"Layout",component:b}]});a.default.use(r.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:h,template:"<App/>",components:{App:s}})},dStH:function(e,t){},qHLD:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ed1c5dfea2efd7089ca0.js.map