(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-reg-forget"],{2533:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("28a5");var a={data:function(){return{verification:"获取验证码",disabled:!1}},methods:{obtain:function(){var t=this;1!=t.disabled&&(t.verification="60s",t.disabled=!0,t.timer=setInterval(function(){var i=t.verification.split("s")[0];i--,t.verification=i+"s"},1e3))}},watch:{verification:function(t,i){"-1s"==t&&(clearInterval(this.timer),this.verification="重新获取",this.disabled=!1)}}};i.default=a},"4a14":function(t,i,e){"use strict";var a=e("c7c9"),n=e.n(a);n.a},"4d62":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".content[data-v-314f3eb9]{overflow:hidden}.uni-input-placeholder[data-v-314f3eb9]{color:#c5c5c5}.uni-input-placeholder[data-v-314f3eb9]{color:#c5c5c5}.ipt[data-v-314f3eb9]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:%?20?%;border-bottom:%?2?% solid #eee;padding:%?20?% %?20?%}.ipt uni-image[data-v-314f3eb9]{margin-right:%?20?%;width:%?35?%;height:%?45?%}.ipt uni-input[data-v-314f3eb9]{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2}.ipt uni-text[data-v-314f3eb9]{font-size:%?32?%;width:%?160?%;text-align:center}uni-button[data-v-314f3eb9]{background:#1d74ff;color:#fff;height:%?90?%;line-height:%?90?%;border-radius:%?45?%;width:84%;margin:%?60?% 8%}",""])},"8cf8":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"status_bar"}),e("v-uni-view",{staticClass:"ipt"},[e("v-uni-image",{attrs:{src:"../../static/image/user.png",mode:""}}),e("v-uni-input",{attrs:{type:"text",value:"",placeholder:"输入手机号"}})],1),e("v-uni-view",{staticClass:"ipt"},[e("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入验证码"}}),e("v-uni-text",{on:{click:function(i){i=t.$handleEvent(i),t.obtain()}}},[t._v(t._s(t.verification))])],1),e("v-uni-view",{staticClass:"ipt"},[e("v-uni-image",{attrs:{src:"../../static/image/pwd.png",mode:""}}),e("v-uni-input",{attrs:{type:"text",value:"",placeholder:"设置新密码"}})],1),e("v-uni-view",{staticClass:"ipt"},[e("v-uni-image",{attrs:{src:"../../static/image/pwd.png",mode:""}}),e("v-uni-input",{attrs:{type:"text",value:"",placeholder:"确认密码"}})],1),e("v-uni-button",[t._v("完成")])],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"97d3":function(t,i,e){"use strict";e.r(i);var a=e("2533"),n=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,function(){return a[t]})}(r);i["default"]=n.a},c7c9:function(t,i,e){var a=e("4d62");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("5343df09",a,!0,{sourceMap:!1,shadowMode:!1})},dc18:function(t,i,e){"use strict";e.r(i);var a=e("8cf8"),n=e("97d3");for(var r in n)"default"!==r&&function(t){e.d(i,t,function(){return n[t]})}(r);e("4a14");var s=e("2877"),o=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"314f3eb9",null);i["default"]=o.exports}}]);