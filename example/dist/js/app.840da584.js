!function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],p=0,f=[];p<c.length;p++)a=c[p],i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);f.length;)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;o.push([0,"chunk-vendors"]),n()}({0:function(t,e,n){t.exports=n("cd49")},"38c8":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("0078"),n("b50b"),n("00c4"),n("4ef9");var r=n("7803"),i=n("df8c"),o=n.n(i),a=n("4286"),c=n("4619"),u=n("e6f6"),s=n("6ba5"),l=n("eac7"),p=n("c0e0"),f=n("bbb1"),h=(n("aaf4"),n("7d0d"),n("7e53"),n("94ea"),n("9aa4")),b=(n("a1ed"),n("8fd1"),n("b7a0")),d=n("e19e"),v=n("a23d"),O=n("08d8"),j=n("2abc"),g=n("54a8"),y=n("0683"),x=n("06d0"),$=n("34dc"),w=n("4172"),m=n("5c6c"),_=n("5d8d"),S=function(t,e){return(S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function P(t,e,n,r){var i,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(o<3?i(a):o>3?i(e,n,a):i(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a}var D=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.viewlist=[],e.scrollHeight=0,e.containerHeight$=new b.a(0),e.list$=new b.a([]),e.subscription=new d.a,e.stateDataSnapshot=[],e.lastFirstIndex=-1,e}return function(t,e){function n(){this.constructor=t}S(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.listChange=function(){this.list$.next(this.list)},e.prototype.mounted=function(){var t=this;this.list$.next(this.list),this.subscription.add(this.list$.pipe(Object(y.a)(),Object(x.a)(function(e){var n=e[1];t.stateDataSnapshot.forEach(function(t){t.origin=n[t.$index]})})).subscribe());var e=Object(v.a)(this.options),n=this.virtualListRef.elm;this.containerHeight$.next(n.clientHeight);var r=Object(O.a)(n,"scroll").pipe(Object($.a)(function(){return n.scrollTop}),Object(y.a)(),Object(w.a)(function(t){var e=t[0];return t[1]!==e}),Object($.a)(function(t){return t[1]}),Object(m.a)(0)),i=r.pipe(Object($.a)(function(t){return t})),o=i.pipe(Object(y.a)(),Object($.a)(function(t){var e=t[0];return t[1]-e>0?1:-1}),Object(m.a)(1)),a=Object(j.a)(this.list$,e).pipe(Object($.a)(function(t){var e=t[0],n=t[1].height;return e.length*n})),c=Object(j.a)(i,o).pipe(Object($.a)(function(t){return[t[0],t[1]]})),u=Object(g.a)(function(){var e=!1;return Object(j.a)(c,t.containerHeight$,a).pipe(Object($.a)(function(t){var e=t[0],n=e[0],r=e[1],i=t[1],o=t[2];return r>0&&o-(n+i)<1*i}),Object(w.a)(function(t){return t||(e=!1),!e&&t}),Object(x.a)(function(){e=!0}))});this.subscription.add(Object(j.a)(u).subscribe(function(){t.$emit("pullUpLoad")}));var s=Object(j.a)(this.containerHeight$,e).pipe(Object($.a)(function(t){var e=t[0],n=t[1];return Math.ceil(e/n.height)+3})),l=Object(j.a)(r.pipe(Object($.a)(function(t){return t})),this.list$,e,s).pipe(Object($.a)(function(t){var e=t[0],n=t[1],r=t[2].height,i=t[3],o=Math.floor(e/r),a=n.length-i<0?0:n.length-i;return[o>a?a:o,i]}),Object(w.a)(function(e){return e[0]!==t.lastFirstIndex}),Object(x.a)(function(e){var n=e[0];return t.lastFirstIndex=n}),Object($.a)(function(t){var e=t[0];return[e,e+t[1]-1]})),p=Object(j.a)(this.list$,e,l).pipe(Object(_.a)(o),Object($.a)(function(e){var n=e[0],r=n[0],i=n[1].height,o=n[2],a=o[0],c=o[1],u=e[1],s=t.stateDataSnapshot;if(!s.length)return t.stateDataSnapshot=r.slice(a,c+1).map(function(t){return{origin:t,$pos:a*i,$index:a++}});var l=t.getDifferenceIndexes(s,a,c),p=u>0?c-l.length+1:a;return l.forEach(function(t){var e=s[t];e.origin=r[p],e.$pos=p*i,e.$index=p++}),t.stateDataSnapshot=s}));this.subscription.add(Object(j.a)(p,a).subscribe(function(e){var n=e[0],r=e[1];t.viewlist=n,t.scrollHeight=r}))},e.prototype.getDifferenceIndexes=function(t,e,n){var r=[];return t.forEach(function(t,i){(t.$index<e||t.$index>n)&&r.push(i)}),r},e.prototype.render=function(t){var e=this;return this.virtualListRef=t("div",{style:"overflow:auto;"},[t("div",{style:{position:"relative",height:this.scrollHeight+"px"}},[this.viewlist.map(function(n,r){return t("div",{key:r,style:{position:"absolute",width:"100%",transform:"translateY("+n.$pos+"px)"}},[e.$scopedSlots.default(n.origin)])})])]),this.virtualListRef},P([Object(f.b)({required:!0,default:function(){return[]}})],e.prototype,"list",void 0),P([Object(f.b)()],e.prototype,"options",void 0),P([Object(f.d)("list",{deep:!0})],e.prototype,"listChange",null),e=P([Object(f.a)({})],e)}(f.c),H=function(t){function e(){var t;return Object(a.a)(this,e),(t=Object(u.a)(this,Object(s.a)(e).apply(this,arguments))).data=[],t}return Object(l.a)(e,t),Object(c.a)(e,[{key:"mounted",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/photos").then(function(t){return t.json()}).then(function(e){return t.data=e}).catch(console.error)}},{key:"render",value:function(){var t=arguments[0];return t("div",{class:"virtual-box"},[t("virtual-list",o()([{style:"height: 100%;",attrs:{list:this.data,options:{height:180}}},{scopedSlots:{default:function(e){return t("div",{class:"card",style:"height: 180px;"},[t("a",{attrs:{href:e.url}},[t("div",{class:"thumbnail"},[t("img",{attrs:{src:e.thumbnailUrl,alt:e.title}})]),t("div",{class:"content"},[t("p",[e.title]),t("p",["No.",e.id])])])])}}}]))])}}]),e}(f.c),R=H=p.a([Object(f.a)({components:{virtualList:D}})],H);n("38c8");r.a.config.productionTip=!1,new r.a({render:function(t){return t(R)}}).$mount("#app")}});