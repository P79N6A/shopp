(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-threeLayers-modify_phone"],{"064e":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"status_bar"}),i("returns",{attrs:{titles:t.title}}),i("v-uni-view",{staticClass:"ipt"},[i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"新手机号"},model:{value:t.accounts,callback:function(e){t.accounts=e},expression:"accounts"}})],1),i("v-uni-view",{staticClass:"ipt"},[i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请输入验证码"},model:{value:t.verify,callback:function(e){t.verify=e},expression:"verify"}}),i("v-uni-text",{on:{click:function(e){e=t.$handleEvent(e),t.obtain()}}},[t._v(t._s(t.verification))])],1),i("v-uni-button",[t._v("确认")])],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"084d":function(t,e,i){"use strict";i.r(e);var a=i("064e"),n=i("3f13");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("5e7f");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"b944aefa",null);e["default"]=s.exports},2020:function(t,e,i){"use strict";var a=i("bd51"),n=i.n(a);n.a},"23eb":function(t,e,i){var a=i("fd86");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5cba8e38",a,!0,{sourceMap:!1,shadowMode:!1})},"3baa":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["titles"],data:function(){return{}},methods:{returns:function(){uni.navigateBack({delta:1})}}};e.default=a},"3f13":function(t,e,i){"use strict";i.r(e);var a=i("6e5d"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"5e7f":function(t,e,i){"use strict";var a=i("23eb"),n=i.n(a);n.a},"641d":function(t,e,i){"use strict";i.r(e);var a=i("81f7"),n=i("8d98");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("2020");var r=i("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"1080767a",null);e["default"]=s.exports},"6e5d":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5");var n=a(i("3675")),o=a(i("641d")),r={components:{returns:o.default},data:function(){return{title:"修改手机号",verification:"获取验证码",disabled:!1,accounts:"",verify:""}},methods:{obtain:function(){var t=this;1!=t.disabled&&uni.request({url:n.default.api_root.reg.WlVerifySend,method:"POST",header:{"X-Requested-With":"xmlhttprequest"},data:{accounts:t.accounts,type:"2"},success:function(e){console.log(t.disabled);var i=e.data;console.log(i),uni.showToast({icon:"none",title:i.msg}),0==i.code&&(t.verification="60s",t.disabled=!0,t.timer=setInterval(function(){var e=t.verification.split("s")[0];e--,t.verification=e+"s"},1e3))}})}},watch:{verification:function(t,e){"-1s"==t&&(clearInterval(this.timer),this.verification="重新获取",this.disabled=!1)}},onShow:function(){console.log(this)}};e.default=r},"81f7":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"top"},[i("v-uni-image",{attrs:{src:"../../static/image/return.png",mode:"widthFix"},on:{click:function(e){e=t.$handleEvent(e),t.returns()}}}),i("v-uni-text",[t._v(t._s(t.titles))]),i("v-uni-text")],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"8d98":function(t,e,i){"use strict";i.r(e);var a=i("3baa"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},bd51:function(t,e,i){var a=i("f36c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ce52cb82",a,!0,{sourceMap:!1,shadowMode:!1})},f36c:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".top[data-v-1080767a]{height:%?105?%;padding:0 %?44?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?36?%;font-weight:700;color:#333;background:#fff;-webkit-box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1);box-shadow:0 %?2?% %?4?% 0 rgba(0,0,0,.1)}.top uni-image[data-v-1080767a]{height:%?40?%;width:%?40?%}.top uni-text[data-v-1080767a]:nth-of-type(2){width:%?40?%;display:inline-block}",""])},fd86:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".content[data-v-b944aefa]{overflow:hidden}.uni-input-placeholder[data-v-b944aefa]{color:#c5c5c5}.ipt[data-v-b944aefa]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:%?20?%;border-bottom:%?2?% solid #eee;padding:%?20?% %?30?%}.ipt uni-image[data-v-b944aefa]{margin:0 %?20?%;width:%?35?%;height:%?45?%}.ipt uni-input[data-v-b944aefa]{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2}.ipt uni-text[data-v-b944aefa]{font-size:%?32?%;width:%?160?%;text-align:center}uni-button[data-v-b944aefa]{background:#1d74ff;color:#fff;height:%?88?%;line-height:%?88?%;border-radius:%?44?%;font-size:%?34?%;\n\t/* width: 84%; */margin:%?78?% %?36?%}.test[data-v-b944aefa]{text-align:center;color:#1d74ff;font-size:%?32?%}.other[data-v-b944aefa]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?28?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:%?100?%}.other .line[data-v-b944aefa]{width:%?120?%;height:%?1?%;border-bottom:%?1?% solid #b3b8d3}.other .other_test[data-v-b944aefa]{margin:0 %?20?%;color:#999}.mode[data-v-b944aefa]{text-align:center;margin-top:%?20?%}.mode uni-image[data-v-b944aefa]{width:%?80?%;height:%?80?%}",""])}}]);