!function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=a(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function a(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var a=n(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(a[o]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&a[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(t,e,n){"use strict";function a(t,e,n,a){p=n,b=a||{};var o=Object(l.a)(t,e);return i(o),function(e){for(var n=[],a=0;a<o.length;a++){var r=o[a],c=d[r.id];c.refs--,n.push(c)}e?(o=Object(l.a)(t,e),i(o)):o=[];for(var a=0;a<n.length;a++){var c=n[a];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete d[c.id]}}}}function i(t){for(var e=0;e<t.length;e++){var n=t[e],a=d[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(r(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(r(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:o}}}}function o(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function r(t){var e,n,a=document.querySelector("style["+g+'~="'+t.id+'"]');if(a){if(p)return m;a.parentNode.removeChild(a)}if(y){var i=h++;a=v||(v=o()),e=c.bind(null,a,i,!1),n=c.bind(null,a,i,!0)}else a=o(),e=s.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}function c(t,e,n,a){var i=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function s(t,e){var n=e.css,a=e.media,i=e.sourceMap;if(a&&t.setAttribute("media",a),b.ssrId&&t.setAttribute(g,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var l=n(9),u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},f=u&&(document.head||document.getElementsByTagName("head")[0]),v=null,h=0,p=!1,m=function(){},b=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vue-fab",props:{icon:{type:String,default:"add"},mainBtnColor:{type:String,default:"#E64C3B"},activeIcon:{type:String,default:"add"},spacing:{type:Number,default:40},shadow:{type:Boolean,default:!0},delay:{type:Number,default:.05},titleColor:{type:String,default:"#666"},titleBg:{type:String,default:"#FFF"},autoHideThreshold:{type:Number,default:50},fabAutoHideAnimateModel:{type:String,default:"default"},fabMenuAnimate:{type:String,default:"default"},size:{type:String,default:"normal"},menu:{type:Array,default:function(){return[{key:"add",icon:"add",title:"add",color:"#3599DB"},{key:"https",icon:"https",title:"https",color:"#9B5BB6"},{key:"done",icon:"done",title:"done",color:""}]}},clickAutoClose:{type:Boolean,default:!0},fabAnimateBezier:{type:String,default:"linear"},fabAliveAnimateBezier:{type:String,default:".16,1.01,.61,1.2"},zIndex:{type:Number,default:5},scrollAutoHide:{type:Boolean,default:!0}},data:function(){return{active:!1,scrollTop:0,hidden:!0,scrollDirection:null,changeDirectionScrollTop:0,touchEventInfo:{startY:0,offsetY:0}}},watch:{hidden:function(t){!t&&this.active&&(this.active=!1)}},computed:{fabClass:function(){return{transitionTimingFunction:/,/.test(this.fabAnimateBezier)?"cubic-bezier("+this.fabAnimateBezier+")":this.fabAnimateBezier,zIndex:this.zIndex,background:this.mainBtnColor,boxShadow:this.shadow?"0px 2px 8px #666":""}},titleStyle:function(){return{color:this.titleColor,background:this.titleBg}}},methods:{fabChildStyle:function(t,e){return{default:{top:-40-t*this.spacing+"px",transitionDelay:this.active?t*this.delay+"s":"0s",background:e.color?e.color:"#FFF"},alive:{transition:"all .4s",transitionTimingFunction:/,/.test(this.fabAliveAnimateBezier)?"cubic-bezier("+this.fabAliveAnimateBezier+")":this.fabAliveAnimateBezier,top:0,transitionDelay:this.active?t*(this.delay/3)+"s":"0s",opacity:this.active?1:0,background:e.color?e.color:"#FFF",transform:this.active?"translate3D(0, -"+(t+1)*this.spacing+"px, 0)":"translate3D(0, 0, 0)",zIndex:-t}}[this.fabMenuAnimate]},onOffFab:function(t){this.hidden=t},clickItem:function(t,e){var n=this;this.clickAutoClose&&setTimeout(function(){n.active=!1},300),this.$emit("clickItem",{idx:t,key:e.key})},clickoutside:function(t){this.active=!1},testPCMobile:function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))},openMenu:function(){this.menu.length>0?this.active=!this.active:this.$emit("clickMainBtn")},scrollerEventListener:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=this.checkDirection();this.scrollTop=t,this.scrollDirection!==e&&(this.changeDirectionScrollTop=t,this.scrollDirection=e);var n=Math.abs(t-this.changeDirectionScrollTop);"up"===this.scrollDirection&&!0===this.hidden||"down"===this.scrollDirection&&!1===this.hidden||n>this.autoHideThreshold&&("up"===this.scrollDirection?this.hidden=!0:this.hidden=!1)},checkDirection:function(){return(document.documentElement.scrollTop||document.body.scrollTop)>this.scrollTop?"up":"down"},removeScrollAutoHideListener:function(){document.removeEventListener(this.scrollerEventListener)},listenTouchEvent:function(){document.addEventListener("touchstart",this.listenTouchStart),document.addEventListener("touchmove",this.listenTouchMove)},removeTouchEvent:function(){document.removeEventListener(this.listenTouchStart),document.removeEventListener(this.listenTouchMove)},listenTouchStart:function(t){this.touchEventInfo.startY=t.touches[0].clientY},listenTouchMove:function(t){this.touchEventInfo.offsetY=t.touches[0].clientY-this.touchEventInfo.startY,this.touchEventInfo.offsetY>this.autoHideThreshold?(this.hidden=!1,this.touchEventInfo.offsetY=0):this.touchEventInfo.offsetY<-this.autoHideThreshold&&(this.hidden=!0,this.touchEventInfo.offsetY=0)},unloadEvent:function(){this.scrollAutoHide&&(this.testPCMobile()?this.removeTouchEvent():this.removeScrollAutoHideListener())}},mounted:function(){this.scrollAutoHide&&(this.testPCMobile()?this.listenTouchEvent():document.addEventListener("scroll",this.scrollerEventListener))},destroyed:function(){this.unloadEvent()},deactivated:function(){this.unloadEvent()}}},function(t,e,n){"use strict";function a(t,e,n,a,i,o,r,c){t=t||{};var s=typeof t.default;"object"!==s&&"function"!==s||(t=t.default);var l="function"==typeof t?t.options:t;e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),o&&(l._scopeId=o);var u;if(r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):i&&(u=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var d=l.render;l.render=function(t,e){return u.call(e),d(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:l}}e.a=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"fab-cantainer",data:function(){return{touching:!1,timing:null,animating:!1,mousedown:!1}},methods:{startAnimate:function(){var t=this;this.touching=!0,this.animating=!0,this.mousedown=!0,this.timing=setTimeout(function(){t.animating=!1,t.mousedown||(t.touching=!1,clearTimeout(t.timing))},300)},endAnimate:function(){this.mousedown=!1,this.animating||(this.touching=!1,clearTimeout(this.timing))}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),o=a(i),r=n(11),c=a(r),s=function(){return!!(navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/Mac/i))},l=function(t){t.component(o.default.name,o.default),t.component(c.default.name,c.default),t.directive("click-outside",{bind:function(t,e,n){var a=function(n){if(t.contains(n.target)||n.target.dataset.outside)return!1;e.value()};if(t.__clickOutside__=a,s()){var i=document.querySelector("html");i.setAttribute("class","setCursor"),i.addEventListener("click",a)}else window.addEventListener("click",a)},unbind:function(t,e){s()?document.removeEventListener("click",t.__clickOutside__):document.querySelector("html").removeEventListener("click",t.__clickOutside__)}})};e.default={install:l}},function(t,e,n){"use strict";function a(t){l||n(7)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var c=n(10),s=n(3),l=!1,u=a,d=Object(s.a)(o.a,c.a,c.b,!1,u,"data-v-e0aacb1e",null);d.options.__file="src\\fab.vue",e.default=d.exports},function(t,e,n){var a=n(8);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n(1).default;i("b126cf4c",a,!1,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,"\n.fab-size-normal[data-v-e0aacb1e] {\n  height: 40px;\n  width: 40px;\n}\n.fab-size-big[data-v-e0aacb1e] {\n  height: 48px;\n  width: 48px;\n}\n.fab-size-small[data-v-e0aacb1e] {\n  height: 32px;\n  width: 32px;\n}\n.flex-center[data-v-e0aacb1e] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.absolute[data-v-e0aacb1e] {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.fab-default-leave-to[data-v-e0aacb1e] {\n  transform: scale(0);\n}\n.fab-default-enter[data-v-e0aacb1e] {\n  transform: scale(0) rotate(-45deg);\n}\n.fab-child-default-enter[data-v-e0aacb1e] {\n  opacity: 0;\n  transform: translate3D(0, 5px, 0) scale(0);\n}\n.fab-child-default-leave-to[data-v-e0aacb1e] {\n  opacity: 0;\n}\n.fab-active-icon-leave[data-v-e0aacb1e] {\n  transform: rotate(0deg) !important;\n}\n.fab-active-icon-leave-to[data-v-e0aacb1e] {\n  transform: rotate(45deg) !important;\n  opacity: 0 !important;\n}\n.fab-active-icon-enter[data-v-e0aacb1e] {\n  opacity: 0;\n  transform: rotate(0deg) !important;\n}\n.fab-active-icon-enter-to[data-v-e0aacb1e] {\n  transform: rotate(45deg) !important;\n  opacity: 1;\n}\n.fab-icon-enter[data-v-e0aacb1e] {\n  transform: rotate(45deg);\n  opacity: 0;\n}\n.fab-icon-enter-to[data-v-e0aacb1e] {\n  transform: rotate(0deg);\n}\n.fab-icon-leave[data-v-e0aacb1e] {\n  transform: rotate(45deg);\n  opacity: 1;\n}\n.fab-icon-leave-to[data-v-e0aacb1e] {\n  transform: rotate(0deg) !important;\n  opacity: 0;\n}\n.fab-icon-enter[data-v-e0aacb1e],\n.fab-icon-leave-to[data-v-e0aacb1e] {\n  opacity: 0;\n}\n.fab-icon-to[data-v-e0aacb1e],\n.fab-icon-leave[data-v-e0aacb1e] {\n  opacity: 1;\n}\n.fab-alive-leave-to[data-v-e0aacb1e] {\n  transform: translateY(60px) !important;\n  opacity: 0;\n}\n.fab-alive-leave-active[data-v-e0aacb1e],\n.fab-alive-enter-active[data-v-e0aacb1e] {\n  transition: all 0.3s linear;\n}\n.fab-alive-enter[data-v-e0aacb1e] {\n  transform: translateY(60px) !important;\n  opacity: 0;\n}\n.fab-child-alive-leave-to[data-v-e0aacb1e] {\n  transform: translateY(60px) !important;\n  opacity: 0;\n}\n.fab-child-alive-enter-active[data-v-e0aacb1e] {\n  transition: all 0.6s linear;\n  opacity: 0;\n}\n.fab-child-alive-enter[data-v-e0aacb1e] {\n  transform: translateY(60px) !important;\n  opacity: 0;\n}\n*[data-v-e0aacb1e] {\n  user-select: none;\n}\n.fab-container[data-v-e0aacb1e] {\n  position: fixed;\n  right: 20%;\n  bottom: 10%;\n  overflow: initial;\n}\n.fab[data-v-e0aacb1e] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  color: white;\n  cursor: pointer;\n  padding: 8px;\n  transition: all 0.2s linear;\n}\n.fab i[data-v-e0aacb1e] {\n  font-size: 1.5em;\n}\n.fab-shadow[data-v-e0aacb1e] {\n  box-shadow: 0px 2px 8px #666;\n}\n.fab-active[data-v-e0aacb1e] {\n  transform: rotate(45deg);\n}\n.fab-child[data-v-e0aacb1e] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s linear;\n  position: absolute;\n  cursor: pointer;\n  top: -50px;\n  width: 80%;\n  height: 80%;\n  margin-left: 10%;\n  border-radius: 50%;\n  overflow: inherit;\n}\n.fab-child i[data-v-e0aacb1e] {\n  font-size: 1em;\n}\n.fab-item-title[data-v-e0aacb1e] {\n  position: absolute;\n  right: 4em;\n  box-shadow: 0 1px .5px #CCC;\n  padding: 2px 5px;\n  font-size: .8em;\n  min-width: 3em;\n  white-space: nowrap;\n  border-radius: 2px;\n  text-align: center;\n}\n.material-icons[data-v-e0aacb1e] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.fab-menu-container[data-v-e0aacb1e] {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n",""])},function(t,e,n){"use strict";function a(t,e){for(var n=[],a={},i=0;i<e.length;i++){var o=e[i],r=o[0],c=o[1],s=o[2],l=o[3],u={id:t+":"+i,css:c,media:s,sourceMap:l};a[r]?a[r].parts.push(u):n.push(a[r]={id:r,parts:[u]})}return n}e.a=a},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"fab",staticClass:"fab-container"},[n("transition",{attrs:{name:"fab-"+t.fabAutoHideAnimateModel}},[t.hidden?n("fab-cantainer",{staticClass:"fab",class:"fab-size-"+t.size,style:t.fabClass,attrs:{"data-outside":"true"},nativeOn:{click:function(e){t.openMenu(e)}}},[n("transition",{attrs:{name:t.activeIcon===t.icon?"fab-icon":t.active?"fab-active-icon":"fab-icon"}},[n("i",{key:t.activeIcon===t.icon?t.icon:t.active,staticClass:"material-icons",class:{"fab-active":t.active},attrs:{"data-outside":"true"}},[t._v(t._s(t.activeIcon===t.icon?t.icon:t.active?t.activeIcon:t.icon))])])],1):t._e()],1),t._v(" "),n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.clickoutside,expression:"clickoutside"}],staticClass:"fab-menu-container",class:"fab-size-"+t.size},t._l(t.menu,function(e,a){return n("transition",{key:e.key,attrs:{name:"fab-child-"+t.fabMenuAnimate}},[n("fab-cantainer",{directives:[{name:"show",rawName:"v-show",value:("alive"===t.fabMenuAnimate||t.active)&&t.hidden,expression:"(fabMenuAnimate === 'alive' || active) && hidden"}],staticClass:"fab-child",class:{"fab-shadow":!e.color},style:t.fabChildStyle(a,e),nativeOn:{click:function(n){t.clickItem(a,e)}}},[e.title?n("div",{staticClass:"fab-item-title",style:t.titleStyle},[t._v("\n          "+t._s(e.title)+"\n        ")]):t._e(),t._v(" "),n("i",{staticClass:"material-icons",style:{color:e.color?"white":"#999"}},[t._v(t._s(e.icon))])])],1)}))],1)},i=[];a._withStripped=!0},function(t,e,n){"use strict";function a(t){l||n(12)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var c=n(14),s=n(3),l=!1,u=a,d=Object(s.a)(o.a,c.a,c.b,!1,u,null,null);d.options.__file="src\\fab-cantainer.vue",e.default=d.exports},function(t,e,n){var a=n(13);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n(1).default;i("06f59a36",a,!1,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,"\n.fab-size-normal {\n  height: 40px;\n  width: 40px;\n}\n.fab-size-big {\n  height: 48px;\n  width: 48px;\n}\n.fab-size-small {\n  height: 32px;\n  width: 32px;\n}\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.absolute {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.fab-default-leave-to {\n  transform: scale(0);\n}\n.fab-default-enter {\n  transform: scale(0) rotate(-45deg);\n}\n.fab-child-default-enter {\n  opacity: 0;\n  transform: translate3D(0, 5px, 0) scale(0);\n}\n.fab-child-default-leave-to {\n  opacity: 0;\n}\n.fab-active-icon-leave {\n  transform: rotate(0deg) !important;\n}\n.fab-active-icon-leave-to {\n  transform: rotate(45deg) !important;\n  opacity: 0 !important;\n}\n.fab-active-icon-enter {\n  opacity: 0;\n  transform: rotate(0deg) !important;\n}\n.fab-active-icon-enter-to {\n  transform: rotate(45deg) !important;\n  opacity: 1;\n}\n.fab-icon-enter {\n  transform: rotate(45deg);\n  opacity: 0;\n}\n.fab-icon-enter-to {\n  transform: rotate(0deg);\n}\n.fab-icon-leave {\n  transform: rotate(45deg);\n  opacity: 1;\n}\n.fab-icon-leave-to {\n  transform: rotate(0deg) !important;\n  opacity: 0;\n}\n.fab-icon-enter,\n.fab-icon-leave-to {\n  opacity: 0;\n}\n.fab-icon-to,\n.fab-icon-leave {\n  opacity: 1;\n}\n.fab-alive-leave-to {\n  transform: translateY(60px) !important;\n  opacity: 0;\n}\n.fab-alive-leave-active,\n.fab-alive-enter-active {\n  transition: all 0.3s linear;\n}\n.fab-alive-enter {\n  transform: translateY(60px) !important;\n  opacity: 0;\n}\n.fab-child-alive-leave-to {\n  transform: translateY(60px) !important;\n  opacity: 0;\n}\n.fab-child-alive-enter-active {\n  transition: all 0.6s linear;\n  opacity: 0;\n}\n.fab-child-alive-enter {\n  transform: translateY(60px) !important;\n  opacity: 0;\n}\n.fabMask {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  background: #FFF;\n  opacity: 0;\n  transition: all .3s;\n}\n.touchStyle {\n  opacity: .2 !important;\n}\n",""])},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fab-cantainer",on:{touchstart:t.startAnimate,touchend:t.endAnimate,mousedown:t.startAnimate,mouseup:t.endAnimate,mouseleave:t.endAnimate}},[n("div",{staticClass:"fabMask",class:{touchStyle:t.touching}}),t._v(" "),t._t("default")],2)},i=[];a._withStripped=!0}]);