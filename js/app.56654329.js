(function(e){function t(t){for(var r,i,c=t[0],a=t[1],l=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==s[a]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"303f":function(e,t,n){},4276:function(e,t,n){"use strict";var r=n("71f9"),s=n.n(r);s.a},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id="4678"},"55f5":function(e,t,n){"use strict";var r=n("5fea"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view")],1)},o=[],i=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"NavBar"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"logo"},[e._v("LouTube")]),e.isMobile?[n("div",{staticClass:"sideMenu",on:{click:e.onMenuSelect}},[n("Menu",{ref:"menu"})],1)]:[n("div",{staticClass:"menu",attrs:{id:"nav"}},[n("router-link",{attrs:{to:e.router.home}},[e._v("首頁")]),e._v("| "),n("router-link",{attrs:{to:e.router.collect}},[e._v("收藏")])],1)]],2),n("div",{staticClass:"shadow"})])}),c=[],a=(n("dca8"),Object.freeze({home:{name:"home",path:"/home"},collect:{name:"collect",path:"/collect"},playVideo:{name:"playVideo",path:"/playVideo"}})),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Component-SideMenu"},[e._m(0),n("div",{staticClass:"overlay",class:e.isShow?"active":"hide",on:{click:function(t){t.stopPropagation(),e.isShow=!e.isShow}}}),n("div",{staticClass:"menu",class:[e.isShow?"active":"","right"==e.entry?"entry-right":"entry-left"],style:{width:e.width+"%"},on:{click:function(t){t.stopPropagation(),e.isShow=!e.isShow}}},[n("div",{staticClass:"body"},[n("div",{staticClass:"item",on:{click:function(t){return e.onClickMenu(e.router.home)}}},[e._v("首頁")]),n("div",{staticClass:"item",on:{click:function(t){return e.onClickMenu(e.router.collect)}}},[e._v("收藏")])])])])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-button"},[n("i",{staticClass:"fas fa-chevron-left"})])}],d={name:"SideMenu",props:{width:{default:"50",type:String,required:!1},entry:{default:"right",type:String,required:!1}},mounted:function(){},data:function(){return{isShow:!1,router:{home:a.home.name,collect:a.collect.name}}},computed:{},methods:{show:function(){this.isShow=!this.isShow},onClickMenu:function(e){this.$router.currentRoute.name!==e&&this.$router.push({name:e})}}},f=d,p=(n("55f5"),n("2877")),b=Object(p["a"])(f,l,u,!1,null,null,null),m=b.exports,j={data:function(){return{isMobile:!1,router:{home:a.home.path,collect:a.collect.path}}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{onMenuSelect:function(e){this.$refs.menu.show()},onResize:function(){this.isMobile=window.innerWidth<=500}},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},components:{Menu:m}},h=j,v=(n("6507"),Object(p["a"])(h,i,c,!1,null,"4a75d9a0",null)),y=v.exports,g={name:"app",mounted:function(){this.$router.push({name:a.home.name})},components:{NavBar:y}},O=g,w=(n("5c0b"),Object(p["a"])(O,s,o,!1,null,null,null)),C=w.exports,k=n("8c4f"),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("Home")],1)},_=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._l(e.videos,(function(e,t){return n("div",{key:t,staticClass:"item"},[n("VideoItem",{attrs:{item:e}})],1)})),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{small:e.isMobile,background:"",layout:"prev, pager, next",total:90},on:{"current-change":e.handleCurrentChange}})],1)],2)},x=[],z=(n("a4d3"),n("4de4"),n("4160"),n("fb6a"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),V=(n("d3b7"),n("96cf"),n("bc3a")),D=n.n(V),E=D.a.create({timeout:1e4,responseType:"json"}),M={post:function(e,t){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",E({method:"post",url:e,data:t}));case 1:case"end":return n.stop()}}))},get:function(e,t){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",E({method:"get",url:e,params:t}));case 1:case"end":return n.stop()}}))}};var $=n("2f62"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{width:e.item.snippet.thumbnails.medium.width+"px"},attrs:{id:"VideoItem"}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e.item.snippet.thumbnails.medium.url}}),n("div",{staticClass:"duration",domProps:{textContent:e._s(e.time)}})]),n("div",{staticClass:"body"},[n("div",{staticClass:"title",domProps:{textContent:e._s(e.item.snippet.title)}}),n("div",{staticClass:"description",domProps:{textContent:e._s(e.item.snippet.description)}}),e.item.isCollect?[n("button",{staticClass:"collect isCollect",on:{click:function(t){return e.didTapCollect(e.item.id)}}},[e._v("已收藏")])]:[n("button",{staticClass:"collect",on:{click:function(t){return e.didTapCollect(e.item.id)}}},[e._v("收藏")])]],2)])},I=[],R=n("bf2d"),L={collectList:"collectList"},G=Object.keys(L);function N(e){for(var t=!1,n=0;n<G.length;n++)if(e==G[n]){t=!0;break}t=t}function q(e,t){var n=t;return!N(e)&&("object"==Object(R["a"])(t)&&(n=JSON.stringify(t)),localStorage.setItem(e,n),!0)}function B(e){var t=localStorage.getItem(e);if(null===t)return"";try{t=JSON.parse(t)}catch(n){}return t}var H=n("c1df"),J=n.n(H);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(z["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W={name:"VideoItem",props:{item:Object},data:function(){return{video:{},time:""}},methods:U({},Object($["b"])("video",["getVideo"]),{},Object($["d"])("video",["setCollect","removeCollect"]),{formatDuration:function(e){var t=J.a.duration(e),n=t._data.hour>0?"H:m:s":"m:s";return J()(t.asMilliseconds()).format(n)},isCollect:function(e){return!(!this.collect||!this.collect[e])&&this.collect[e]},didTapCollect:function(e){this.item.isCollect?(this.removeCollect(e),this.$set(this.item,"isCollect",!1)):(this.$set(this.item,"isCollect",!0),this.setCollect({id:e,item:this.item}))},playVideo:function(e){this.$router.push({name:a.playVideo.name,query:{id:e}})}}),computed:U({},Object($["c"])("video",["getCollect"])),mounted:function(){this.time=this.formatDuration(this.item.contentDetails.duration),this.getCollect[this.item.id]?this.$set(this.item,"isCollect",!0):this.$set(this.item,"isCollect",!1)}},F=W,Q=(n("4276"),Object(p["a"])(F,T,I,!1,null,"05e1a264",null)),K=Q.exports;function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach((function(t){Object(z["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z={name:"Home",methods:Y({},Object($["b"])("video",["getVideo"]),{handleCurrentChange:function(e){var t=this,n=this.videoGetter.items,r=(e-1)*this.perPage,s=e*this.perPage;s>n.length&&s<=100?this.getVideo({maxResults:50,pageToken:this.videoGetter.nextPageToken}).then((function(e){t.videos=e.items.slice(r,s)})):this.videos=n.slice(r,s)}}),computed:Y({},Object($["c"])("video",{videoGetter:"getVideo"})),data:function(){return{videos:[],perPage:12,isMobile:!1}},mounted:function(){var e=this;this.videoGetter?this.videos=this.videoGetter.items.slice(0,this.perPage):this.getVideo({maxResults:50}).then((function(t){e.videos=t.items.slice(0,e.perPage)})),this.isMobile=window.innerWidth<=500},components:{VideoItem:K}},ee=Z,te=(n("7276"),Object(p["a"])(ee,S,x,!1,null,"66213124",null)),ne=te.exports,re={name:"home",components:{Home:ne}},se=re,oe=Object(p["a"])(se,P,_,!1,null,null,null),ie=oe.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Collect"}},[n("Collect")],1)},ae=[],le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"collect"},e._l(e.videos,(function(e,t){return n("div",{key:t,staticClass:"item"},[n("VideoItem",{attrs:{item:e}})],1)})),0)},ue=[];n("a630"),n("3ca3");function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(n,!0).forEach((function(t){Object(z["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe={name:"collect",computed:fe({},Object($["c"])("video",["getCollect"])),data:function(){return{videos:[]}},mounted:function(){var e=regeneratorRuntime.mark(t);function t(t){var n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=0,r=Object.keys(t);case 1:if(!(n<r.length)){e.next=8;break}return s=r[n],e.next=5,t[s];case 5:n++,e.next=1;break;case 8:case"end":return e.stop()}}),e)}this.videos=Array.from(t(this.getCollect))},components:{VideoItem:K}},be=pe,me=(n("d61b"),Object(p["a"])(be,le,ue,!1,null,"29e25c1b",null)),je=me.exports,he={name:"CollectView",components:{Collect:je}},ve=he,ye=Object(p["a"])(ve,ce,ae,!1,null,null,null),ge=ye.exports,Oe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},we=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"playVideo"},[n("video",{staticClass:"video-js",attrs:{id:"my-player",controls:"",width:"600",height:"400"}},[n("source",{attrs:{src:"//vjs.zencdn.net/v/oceans.mp4",type:"video/mp4"}}),n("source",{attrs:{src:"//vjs.zencdn.net/v/oceans.webm",type:"video/webm"}}),n("source",{attrs:{src:"//vjs.zencdn.net/v/oceans.ogv",type:"video/ogg"}})])])}];n("f0e2");function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(n,!0).forEach((function(t){Object(z["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Pe={name:"PlayVideo",methods:{},computed:ke({},Object($["c"])("video",{videoGetter:"getVideo"})),data:function(){return{videos:[]}},mounted:function(){}},_e=Pe,Se=(n("c2dc"),Object(p["a"])(_e,Oe,we,!1,null,"2cee85b2",null)),xe=Se.exports;r["default"].use(k["a"]);var ze=[{path:"/",redirect:a.home.path},{path:a.home.path,name:a.home.name,component:ie},{path:a.collect.path,name:a.collect.name,component:ge},{path:a.playVideo.path,name:a.playVideo.name,component:xe}],Ve=new k["a"]({mode:"history",base:"",routes:ze}),De=Ve,Ee=(n("99af"),n("284c"));function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Me(n,!0).forEach((function(t){Object(z["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Te={video:null,collect:B(L.collectList)||{}},Ie={setVideo:function(e,t){e.video?e.video.items=[].concat(Object(Ee["a"])(e.video.items),Object(Ee["a"])(t.items)):e.video=t},setCollect:function(e,t){e.collect[t.id]=t.item,q(L.collectList,e.collect)},removeCollect:function(e,t){delete e.collect[t],q(L.collectList,e.collect)}},Re={getVideo:function(e,t){var n=e.commit,r=e.getters,s=$e({part:"snippet,contentDetails",chart:"mostPopular",maxResults:"3",key:"AIzaSyBmoVBhmmvr4_07vEAOIfosQ-5aVvkJHyk"},t);return M.get("https://www.googleapis.com/youtube/v3/videos",s).then((function(e){return n("setVideo",e.data),r.getVideo})).catch((function(e){return Promise.reject(e)}))}},Le={getVideo:function(e){if(!e.video)return null;var t={nextPageToken:e.video.nextPageToken,pageInfo:e.video.pageInfo,items:e.video.items};return t},getCollect:function(e){return e.collect}},Ge=(Array(246),{namespaced:!0,state:Te,actions:Re,mutations:Ie,getters:Le});r["default"].use($["a"]);var Ne=new $["a"].Store({modules:{video:Ge}}),qe=n("5c96"),Be=n.n(qe);n("0fae");r["default"].config.productionTip=!1,r["default"].use(Be.a),new r["default"]({router:De,store:Ne,render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),s=n.n(r);s.a},"5fea":function(e,t,n){},6507:function(e,t,n){"use strict";var r=n("c0cf"),s=n.n(r);s.a},"71f9":function(e,t,n){},7276:function(e,t,n){"use strict";var r=n("9b7a"),s=n.n(r);s.a},8141:function(e,t,n){},"9b7a":function(e,t,n){},"9c0c":function(e,t,n){},c0cf:function(e,t,n){},c2dc:function(e,t,n){"use strict";var r=n("303f"),s=n.n(r);s.a},d61b:function(e,t,n){"use strict";var r=n("8141"),s=n.n(r);s.a}});
//# sourceMappingURL=app.56654329.js.map