(function(e){function n(n){for(var r,o,i=n[0],l=n[1],p=n[2],c=0,d=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(n);while(d.length)d.shift()();return s.push.apply(s,p||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],r=!0,i=1;i<t.length;i++){var l=t[i];0!==a[l]&&(r=!1)}r&&(s.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},a={app:0},s=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var p=0;p<i.length;p++)n(i[p]);var u=l;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("mojs-burst",{attrs:{id:"app",options:e.burstOptions}},[r("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:t("cf05")}}),r("div",{staticClass:"container"},[r("Demos")],1)])},s=[],o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"demos"},[t("h1",[e._v("✨ vue-mo.js ✨")]),e._m(0),t("h3",[e._v("🏹 Installation")]),t("p",[e._v(" Using npm: ")]),t("pre",[e._v("$ npm i @azukisiromochi/vue-mo.js")]),t("p",[e._v(" Using yarn: ")]),t("pre",[e._v("$ yarn add @azukisiromochi/vue-mo.js")]),t("h3",[e._v("🔫 Usage")]),t("p",[e._v(" Using Vue.js: ")]),t("pre",[e._v("import Vuemo from '@azukisiromochi/vue-mo.js'\nVue.use(Vuemo)")]),t("h3",[e._v("🧹 Documentation")]),t("h4",[e._v("⭐ Html")]),t("h5",[e._v("🔖 References")]),e._m(1),t("h5",[e._v("🔖 Demos")]),t("div",{ref:"mojsHtmlPlayGround",staticClass:"play-ground"},[t("mojs-html",{staticClass:"mojs-html",attrs:{options:e.htmlOptions,"is-replay-when-clicked":!0}})],1),t("h5",[e._v("🔖 Tutorials")]),t("strong",[e._v("Using vue-mo.js source code for smaller bundles 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<div ref="vuemoElement" v-on:click="replay" class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v('export default {\n  data() {\n    return {\n      html: null\n    }\n  },\n  mounted() {\n    this.html = this.$vuemo.Html({\n      el: this.$refs.vuemoElement,\n      x: {\n        240: 720,\n        duration: 1000,\n        easing: "cubic.in"\n      },\n      y: 100,\n      angleZ: {\n        0: 360,\n        duration: 1000,\n        delay: 1000\n      }\n    })\n  },\n  methods: {\n    replay: function() {\n      this.html.replay()\n    }\n  }\n}')]),t("strong",[e._v("Using custom components 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<mojs-html\n  :options="htmlOptions"\n  :is-replay-when-clicked="true"\n  class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v('import { MojsHtml } from "@azukisiromochi/vue-mo.js"\nexport default {\n  data() {\n    return {\n      htmlOptions: {\n        x: {\n          240: 720,\n          duration: 1000,\n          easing: "cubic.in"\n        },\n        y: 100,\n        angleZ: {\n          0: 360,\n          duration: 1000,\n          delay: 1000\n        }\n      }\n    }\n  },\n  components: {\n    MojsHtml\n  }\n}')]),t("strong",[e._v("Using custom directives 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<div v-mojs-html:[arg]="htmlOptions" class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v("export default {\n  data() {\n    return {\n      htmlOptions: {\n        x: {\n          240: 720,\n          duration: 1000,\n          easing: \"cubic.in\"\n        },\n        y: 100,\n        angleZ: {\n          0: 360,\n          duration: 1000,\n          delay: 1000\n        }\n      },\n      arg: 'is-replay-when-clicked'\n    }\n  }\n}")]),t("h4",[e._v("⭐ Burst")]),t("h5",[e._v("🔖 References")]),e._m(2),t("h5",[e._v("🔖 Demos")]),t("div",{ref:"burstParent",staticClass:"play-ground burst-parent",on:{click:e.explosion}},[t("p",[e._v(" エクスプロージョン！！ ")])]),t("h5",[e._v("🔖 Tutorials")]),t("strong",[e._v("Using vue-mo.js source code for smaller bundles 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<div ref="vuemoElement" v-on:click="replay" class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v('export default {\n  data() {\n    return {\n      burst: null\n    }\n  },\n  mounted() {\n    this.burst = this.$vuemo.Burst({\n      parent: this.$refs.vuemoElement,\n      radius: { 25: 75 },\n      count: 10,\n      duration: 2000,\n      children: {\n        shape: ["circle", "polygon"],\n        fill: ["#11CDC5", "#FC2D79", "#F9DD5E"],\n        angle: { 0: 180 },\n        degreeShift: "rand(-360, 360)",\n        delay: "stagger(0, 25)"\n      }\n    })\n  },\n  methods: {\n    replay: function() {\n      this.burst.replay()\n    }\n  }\n}')]),t("strong",[e._v("Using custom components 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<mojs-burst\n  :options="burstOptions"\n  :is-replay-when-clicked="true"\n  class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v('import { MojsBurst } from "@azukisiromochi/vue-mo.js"\nexport default {\n  data() {\n    return {\n      burstOptions: {\n        radius: { 25: 75 },\n        count: 10,\n        duration: 2000,\n        children: {\n          shape: ["circle", "polygon"],\n          fill: ["#11CDC5", "#FC2D79", "#F9DD5E"],\n          angle: { 0: 180 },\n          degreeShift: "rand(-360, 360)",\n          delay: "stagger(0, 25)"\n        }\n      }\n    }\n  },\n  components: {\n    MojsBurst\n  }\n}')]),t("strong",[e._v("Using custom directives 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<div v-mojs-burst:[arg]="burstOptions" class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v('export default {\n  data() {\n    return {\n      burstOptions: {\n        radius: { 25: 75 },\n        count: 10,\n        duration: 2000,\n        children: {\n          shape: ["circle", "polygon"],\n          fill: ["#11CDC5", "#FC2D79", "#F9DD5E"],\n          angle: { 0: 180 },\n          degreeShift: "rand(-360, 360)",\n          delay: "stagger(0, 25)"\n        }\n      },\n      arg: \'is-replay-when-clicked\'\n    }\n  }\n}')]),t("h4",[e._v("⭐ Shape")]),t("h5",[e._v("🔖 References")]),e._m(3),t("h5",[e._v("🔖 Demos")]),t("div",{staticClass:"play-ground"},[t("mojs-shape",{attrs:{options:e.zigzagOptions}}),t("mojs-shape",{attrs:{options:e.curveOptions}}),t("mojs-shape",{attrs:{options:e.crossOptions}})],1),t("h5",[e._v("🔖 Tutorials")]),t("strong",[e._v("Using vue-mo.js source code for smaller bundles 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<div ref="vuemoElement" v-on:click="replay" class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v('export default {\n  data() {\n    return {\n      shape: null\n    }\n  },\n  mounted() {\n    this.shape = this.$vuemo.Shape({\n      parent: this.$refs.vuemoElement,\n      shape: "circle",\n      scale: { 0: 1 },\n      left: "25%",\n      fill: { cyan: "yellow" },\n      radius: 25,\n\n      duration: 2000\n    })\n  },\n  methods: {\n    replay: function() {\n      this.shape.replay()\n    }\n  }\n}')]),t("strong",[e._v("Using custom components 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<mojs-shape\n  :options="shapeOptions"\n  :is-replay-when-clicked="true"\n  class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v('import { MojsShape } from "@azukisiromochi/vue-mo.js"\nexport default {\n  data() {\n    return {\n      shapeOptions: {\n        shape: "circle",\n        scale: { 0: 1 },\n        left: "25%",\n        fill: { cyan: "yellow" },\n        radius: 25,\n\n        duration: 2000\n      }\n    }\n  },\n  components: {\n    MojsShape\n  }\n}')]),t("strong",[e._v("Using custom directives 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<div v-mojs-shape:[arg]="shapeOptions" class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v('export default {\n  data() {\n    return {\n      shapeOptions: {\n      shape: "circle",\n      scale: { 0: 1 },\n      left: "25%",\n      fill: { cyan: "yellow" },\n      radius: 25,\n\n      duration: 2000\n    },\n      arg: \'is-replay-when-clicked\'\n    }\n  }\n}')]),t("h4",[e._v("⭐ ShapeSwirl")]),t("h5",[e._v("🔖 References")]),e._m(4),t("h5",[e._v("🔖 Demos")]),t("div",{staticClass:"play-ground"},[t("mojs-shape-swirl",{attrs:{options:e.shapeSwirlOptions}})],1),t("h5",[e._v("🔖 Tutorials")]),t("strong",[e._v("Using vue-mo.js source code for smaller bundles 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<div ref="vuemoElement" v-on:click="replay" class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v("export default {\n  data() {\n    return {\n      shapeSwirl: null\n    }\n  },\n  mounted() {\n    this.shapeSwirl = this.$vuemo.ShapeSwirl({\n      parent: this.$refs.vuemoElement,\n      x: { 0: 200 },\n      duration: 2000\n    })\n  },\n  methods: {\n    replay: function() {\n      this.shapeSwirl.replay()\n    }\n  }\n}")]),t("strong",[e._v("Using custom components 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<mojs-shape-swirl\n  :options="shapeSwirlOptions"\n  :is-replay-when-clicked="true"\n  class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v('import { MojsShapeSwirl } from "@azukisiromochi/vue-mo.js"\nexport default {\n  data() {\n    return {\n      shapeSwirlOptions: {\n        x: { 0: 200 },\n        duration: 2000\n      }\n    }\n  },\n  components: {\n    MojsShapeSwirl\n  }\n}')]),t("strong",[e._v("Using custom directives 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<div\n  v-mojs-shape-swirl:[arg]="shapeSwirlOptions"\n  class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v("export default {\n  data() {\n    return {\n      shapeSwirlOptions: {\n        x: { 0: 200 },\n        duration: 2000\n      },\n      arg: 'is-replay-when-clicked'\n    }\n  }\n}")]),t("h4",[e._v("⭐ Timeline")]),t("h5",[e._v("🔖 References")]),e._m(5),t("h5",[e._v("🔖 Demos")]),t("div",{ref:"timelineParent",staticClass:"play-ground"}),t("h5",[e._v("🔖 Tutorials")]),t("strong",[e._v("Using vue-mo.js source code for smaller bundles 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<div ref="timelineParent" class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v('export default {\n  mounted() {\n    const circle = this.$vuemo.Shape({\n      parent: this.$refs.timelineParent,\n      shape: "circle",\n      scale: { 0: 1 },\n      left: "25%",\n      fill: { cyan: "yellow" },\n      radius: 25,\n\n      duration: 2000\n    })\n\n    const rect = this.$vuemo.Shape({\n      parent: this.$refs.timelineParent,\n      shape: "rect",\n      left: "50%",\n      fill: "none",\n      radius: 20,\n      stroke: { "rgba(0,255,255, 1)": "magenta" },\n      strokeWidth: { 10: 0 },\n      strokeDasharray: "100%",\n      strokeDashoffset: { "-100%": "100%" },\n      angle: { 0: 180 },\n\n      duration: 2000\n    })\n\n    const polygon = this.$vuemo.Shape({\n      parent: this.$refs.timelineParent,\n      shape: "polygon",\n      points: 5,\n      left: "75%",\n      fill: { deeppink: "#00F87F" },\n      x: { "rand(-100%, -200%)": 0 },\n      angle: { 0: "rand(0, 360)" },\n      radius: 25,\n\n      duration: 2000\n    })\n\n    this.$vuemo\n      .Timeline({\n        delay: 1000,\n        repeat: 999\n      })\n      .add(circle)\n      .append(rect)\n      .append(polygon)\n      .play()\n  }\n}')]),t("h4",[e._v("⭐ Star")]),t("h5",[e._v("🔖 References")]),e._m(6),e._m(7),t("mojs-starry-night",{staticClass:"play-ground starry-night-parent"}),t("h5",[e._v("🔖 Tutorials")]),t("strong",[e._v("Using vue-mo.js source code for smaller bundles 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<div ref="starParent" class="any-style" />')]),t("p",[e._v("Script:")]),t("pre",[e._v("export default {\n  mounted() {\n    this.$vuemo.Star({\n      parent: this.$refs.starParent\n    })\n    .play()\n  }\n}")]),t("strong",[e._v("Using custom directives 🚅")]),t("p",[e._v("Template:")]),t("pre",[e._v('<button\n  type=button\n  v-mojs-star-burst="{ burstShape: \'star\' }"\n  class="any-style" >\n  ⭐Star Burst⭐\n</button>')]),t("h3",[e._v("🙇 Thanks!!")]),t("p",[e._v(" Using npm: ")]),e._m(8)],1)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" A small wrapper for integrating "),t("a",{attrs:{href:"https://mojs.github.io/",target:"_blank",rel:"noopener"}},[e._v("Mo.js")]),e._v(" to Vue.js ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" Read Mo.js's "),t("a",{attrs:{href:"https://mojs.github.io/api/html/",target:"_blank",rel:"noopener"}},[e._v("Html References")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" Read Mo.js's "),t("a",{attrs:{href:"https://mojs.github.io/api/burst/",target:"_blank",rel:"noopener"}},[e._v("Burst References")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" Read Mo.js's "),t("a",{attrs:{href:"https://mojs.github.io/api/shape/",target:"_blank",rel:"noopener"}},[e._v("Shape References")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" Read Mo.js's "),t("a",{attrs:{href:"https://mojs.github.io/api/shape-swirl/",target:"_blank",rel:"noopener"}},[e._v("ShapeSwirl References")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" Read Mo.js's "),t("a",{attrs:{href:"https://mojs.github.io/api/tweens/timeline.html",target:"_blank",rel:"noopener"}},[e._v("Timeline References")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" Created a Vue component based on the Mo.js's "),t("a",{attrs:{href:"https://codepen.io/sol0mka/full/wWdRLk/",target:"_blank",rel:"noopener"}},[e._v("CodePen example")]),e._v(". ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" By adding the vue directive `"),t("i",[e._v("v-mods-starburst")]),e._v("`, you can easily add star animation to clickable elements in your Vue.js application. ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",[e._v(" MIT Licensed | Copyright © 2019-present "),t("a",{attrs:{target:"_blank",rel:"noopener",href:"https://twitter.com/azukisiromochi"}},[e._v("@azukisiromochi")])])}],l=(t("a4d3"),t("4de4"),t("4160"),t("e439"),t("dbb4"),t("b64b"),t("159b"),t("2fa7")),p=t("9f12"),u=t("53fe"),c=t("8b83"),d=t("c65a"),f=t("c03e"),h=t("92b0"),v=t.n(h),m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"mojs-html",rawName:"v-mojs-html:[arg]",value:e.options,expression:"options",arg:e.arg}]},[e._t("default")],2)},y=[],g={name:"MojsHtml",props:{options:{type:Object,default:function(){return{}}},isReplayWhenClicked:{type:Boolean,default:function(){return!1}}},data:function(){return{arg:this.isReplayWhenClicked?"is-replay-when-clicked":""}}},_=g,b=t("2877"),j=Object(b["a"])(_,m,y,!1,null,null,null),S=j.exports,w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"mojs-shape",rawName:"v-mojs-shape:[arg]",value:e.options,expression:"options",arg:e.arg}]})},k=[],O={name:"MojsShape",props:{options:{type:Object,default:function(){return{}}},isReplayWhenClicked:{type:Boolean,default:function(){return!1}}},data:function(){return{arg:this.isReplayWhenClicked?"is-replay-when-clicked":""}}},C=O,P=Object(b["a"])(C,w,k,!1,null,null,null),$=P.exports,x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"mojs-shape-swirl",rawName:"v-mojs-shape-swirl:[arg]",value:e.options,expression:"options",arg:e.arg}]})},E=[],D={name:"MojsShapeSwirl",props:{options:{type:Object,default:function(){return{}}},isReplayWhenClicked:{type:Boolean,default:function(){return!1}}},data:function(){return{arg:this.isReplayWhenClicked?"is-replay-when-clicked":""}}},M=D,T=Object(b["a"])(M,x,E,!1,null,null,null),F=T.exports,R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"mojs-burst",rawName:"v-mojs-burst",value:e.options,expression:"options"}]},[e._t("default")],2)},U=[],L={name:"MojsBurst",props:{options:{type:Object,default:function(){return{}}}}},B=L,z=Object(b["a"])(B,R,U,!1,null,null,null),Y=z.exports,H=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"mojs-star",rawName:"v-mojs-star:[arg]",value:e.options,expression:"options",arg:e.arg}]})},W=[],N={name:"MojsStar",props:{options:{type:Object,default:function(){return{}}},isReplayWhenClicked:{type:Boolean,default:function(){return!1}}},data:function(){return{arg:this.isReplayWhenClicked?"is-replay-when-clicked":""}}},V=N,X=Object(b["a"])(V,H,W,!1,null,null,null),A=X.exports,Z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"mojs-star-burst",rawName:"v-mojs-star-burst",value:e.options,expression:"options"}]},[e._t("default")],2)},I=[],q={name:"MojsStarryNight",props:{options:{type:Object,default:function(){return{}}}}},K=q,G=Object(b["a"])(K,Z,I,!1,null,null,null),J=G.exports;function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(t,!0).forEach((function(n){Object(l["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ne=function(e){var n=e||{},t={el:null,x:0,y:0,z:0,skewX:0,skewY:0,angleX:0,angleY:0,angleZ:0,scale:1,scaleX:1,scaleY:1,opacity:1,customProperties:null,isShowStart:!0,isShowEnd:!0,isForce3d:!1,isSoftHide:!0,isRefreshState:!0,duration:350,delay:0,repeat:0,speed:1,isYoyo:!1,easing:"sin.out",backwardEasing:null,timeline:{},onProgress:function(e,n,t){},onStart:function(e,n){},onFirstUpdate:function(e,n){},onUpdate:function(e,n,t,r){},onRepeatComplete:function(e,n){},onComplete:function(e,n){},onPlaybackStart:function(){},onPlaybackPause:function(){},onPlaybackStop:function(){},onPlaybackComplete:function(){}};return new v.a.Html(ee({},t,{},n))},te=function(e){var n=e||{},t={parent:document.body,className:"",shape:"circle",stroke:"transparent",strokeOpacity:1,strokeLinecap:"",strokeWidth:2,strokeDasharray:0,strokeDashoffset:0,fill:"deeppink",fillOpacity:1,left:"50%",top:"50%",x:0,y:0,angle:0,scale:1,scaleX:null,scaleY:null,origin:"50% 50%",opacity:1,rx:0,ry:0,points:3,radius:50,radiusX:null,radiusY:null,isSoftHide:!0,isForce3d:!1,isShowStart:!1,isShowEnd:!0,isRefreshState:!0,callbacksContext:this,duration:350,delay:0,repeat:0,speed:1,isYoyo:!1,easing:"sin.out",backwardEasing:null,onProgress:function(e,n,t){},onStart:function(e,n){},onFirstUpdate:function(e,n){},onUpdate:function(e,n,t,r){},onRepeatComplete:function(e,n){},onComplete:function(e,n){},onPlaybackStart:function(){},onPlaybackPause:function(){},onPlaybackStop:function(){},onPlaybackComplete:function(){}};return new v.a.Shape(ee({},t,{},n))},re=function(e){var n=e||{},t={swirlSize:10,swirlFrequency:3,pathScale:1,degreeShift:0,direction:1,isSwirl:!0};return new v.a.ShapeSwirl(ee({},t,{},n))},ae=function(e){var n=e||{},t={parent:document.body,className:"",left:"50%",top:"50%",x:0,y:0,angle:0,scale:1,scaleX:null,scaleY:null,origin:"50% 50%",opacity:1,count:5,degree:360,radius:{0:50},radiusX:null,radiusY:null,isSoftHide:!0,isForce3d:!1,isShowStart:!1,isShowEnd:!0,isRefreshState:!0,children:{},timeline:{}};return new v.a.Burst(ee({},t,{},n))},se=function(e){var n=e||{},t={duration:350,delay:0,repeat:0,speed:1,isYoyo:!1,easing:"sin.out",backwardEasing:null,onRefresh:function(e,n,t){},onProgress:function(e,n,t){},onStart:function(e,n){},onFirstUpdate:function(e,n){},onUpdate:function(e,n,t,r){},onRepeatComplete:function(e,n){},onComplete:function(e,n){},onPlaybackStart:function(){},onPlaybackPause:function(){},onPlaybackStop:function(){},onPlaybackComplete:function(){}};return new v.a.Tween(ee({},t,{},n))},oe=function(e){var n=e||{},t={duration:null};return new v.a.Timeline(ee({},t,{},n))},ie=28,le=function(e){function n(){return Object(p["a"])(this,n),Object(c["a"])(this,Object(d["a"])(n).apply(this,arguments))}return Object(f["a"])(n,e),Object(u["a"])(n,[{key:"getShape",value:function(){return'<path d="M5.51132201,34.7776271 L33.703781,32.8220808 L44.4592855,6.74813038 C45.4370587,4.30369752 47.7185293,3 50,3 C52.2814707,3 54.5629413,4.30369752 55.5407145,6.74813038 L66.296219,32.8220808 L94.488678,34.7776271 C99.7034681,35.1035515 101.984939,41.7850013 97.910884,45.2072073 L75.9109883,63.1330483 L82.5924381,90.3477341 C83.407249,94.4217888 80.4739296,97.6810326 77.0517236,97.6810326 C76.0739505,97.6810326 74.9332151,97.3551083 73.955442,96.7032595 L49.8370378,81.8737002 L26.044558,96.7032595 C25.0667849,97.3551083 23.9260495,97.6810326 22.9482764,97.6810326 C19.3631082,97.6810326 16.2668266,94.4217888 17.4075619,90.3477341 L23.9260495,63.2960105 L2.08911601,45.2072073 C-1.98493875,41.7850013 0.296531918,35.1035515 5.51132201,34.7776271 Z" />'}}]),n}(v.a.CustomShape);v.a.addShape("star",le);var pe=function(e){var n=e||{},t={shape:"star",fill:"#FF9C00",scale:{0:1},easing:"elastic.out",duration:1600,delay:300,radius:ie/2.25};return new v.a.Shape(ee({},t,{},n))},ue={bind:function(e,n){var t=n.value||{};t.el=e;var r=new v.a.Html(t);r.play(),e.addEventListener("click",(function(){"is-replay-when-clicked"===n.arg&&r.replay()}))}},ce={bind:function(e,n){var t=n.value||{};t.parent=e;var r=new v.a.Shape(t);r.play(),e.addEventListener("click",(function(){"is-replay-when-clicked"===n.arg&&r.replay()}))}},de={bind:function(e,n){var t=n.value||{};t.parent=e;var r=new v.a.ShapeSwirl(t);r.play(),e.addEventListener("click",(function(){"is-replay-when-clicked"===n.arg&&r.replay()}))}},fe={bind:function(e,n){var t=n.value||{};t.parent=e;var r=new v.a.Burst(t);e.addEventListener("click",(function(n){var t=n.pageX-e.offsetLeft,a=n.pageY-e.offsetTop;r.tune({left:t,top:a}).replay()}))}},he={bind:function(e,n){var t=n.value||{};t.parent=e;var r=pe(t);r.play(),e.addEventListener("click",(function(){"is-replay-when-clicked"===n.arg&&r.replay()}))}},ve={bind:function(e,n){var t=n.value||{};t.parent=e,t.burstShape=t.burstShape||"line";var r=pe(t),a=new v.a.Shape({parent:e,left:0,top:0,stroke:"#FF9C00",strokeWidth:Object(l["a"])({},2*ie,0),fill:"none",scale:{0:1,easing:"quad.out"},radius:ie,duration:450}),s={shape:"line",radius:ie/7.3,scale:1,stroke:"#FD7932",strokeDasharray:"100%",strokeDashoffset:{"-100%":"100%"},degreeShift:"stagger(0,-5)",duration:700,delay:200,easing:"quad.out"};"star"===t.burstShape&&(s={shape:"star",radius:ie/2.2,fill:"#FD7932",degreeShift:"stagger(0,-5)",duration:700,delay:200,easing:"quad.out"});var o=new v.a.Burst({parent:e,left:0,top:0,radius:{6:ie-7},angle:45,children:s}),i=new v.a.Timeline({speed:1.5});i.add(o,a,r),e.addEventListener("click",(function(n){var t=n.pageX-e.offsetLeft,s=n.pageY-e.offsetTop,l={left:t,top:s};o.tune(l),a.tune(l),r.tune(l),i.replay()}))}},me={install:function(e,n){e.prototype.$vuemo={Html:ne,Shape:te,ShapeSwirl:re,Burst:ae,Star:pe,Tween:se,Timeline:oe,stagger:v.a.stagger},e.directive("mojs-html",ue),e.directive("mojs-shape",ce),e.directive("mojs-shape-swirl",de),e.directive("mojs-burst",fe),e.directive("mojs-star",he),e.directive("mojs-star-burst",ve),e.component("MojsHtml",S),e.component("MojsShape",$),e.component("MojsShapeSwirl",F),e.component("MojsBurst",Y),e.component("MojsStar",A),e.component("MojsStarryNight",J)}},ye=me,ge=S,_e=$,be=F,je=Y,Se=J;function we(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ke(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?we(t,!0).forEach((function(n){Object(l["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):we(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Oe={name:"Demos",data:function(){return{htmlOptions:{x:{0:200,duration:1e3,easing:"cubic.in"},y:100,angleZ:{0:360,duration:1e3,delay:1e3}},zigzagOptions:{shape:"zigzag",points:11,radius:25,radiusY:50,left:"25%",fill:"none",stroke:"#11CDC5"},curveOptions:{shape:"curve",points:11,radius:25,radiusY:50,left:"50%",fill:"none",stroke:"#FC2D79"},crossOptions:{shape:"cross",points:11,radius:25,radiusX:50,left:"75%",fill:"none",stroke:"#F9DD5E",y:-25},shapeSwirlOptions:{x:{0:200},duration:2e3,repeat:999},burst1:null,burst2:null,circle1:null,circle2:null}},mounted:function(){console.log(this.$refs.mojsHtmlPlayGround);var e={RED:"#FD5061",YELLOW:"#FFCEA5",BLACK:"#29363B",VINOUS:"#A50710"};this.burst1=this.$vuemo.Burst({parent:this.$refs.burstParent,left:0,top:0,count:5,radius:{50:250},children:{fill:"white",shape:"line",stroke:[e.BLACK,e.VINOUS],strokeWidth:12,radius:"rand(30, 60)",radiusY:0,scale:{1:0},pathScale:"rand(.5, 1)",degreeShift:"rand(-360, 360)",isForce3d:!0}}),this.burst2=this.$vuemo.Burst({parent:this.$refs.burstParent,top:0,left:0,count:3,radius:{0:250},children:{shape:["circle","rect"],points:5,fill:[e.BLACK,e.VINOUS],radius:"rand(30, 60)",scale:{1:0},pathScale:"rand(.5, 1)",isForce3d:!0}});var n={left:0,top:0,fill:e.BLACK,scale:{.2:1},opacity:{1:0},isForce3d:!0,isShowEnd:!1};this.circle1=this.$vuemo.Shape(ke({parent:this.$refs.burstParent},n,{radius:200})),this.circle2=this.$vuemo.Shape(ke({parent:this.$refs.burstParent},n,{radius:240,easing:"cubic.out",delay:150}));var t=this.$vuemo.Shape({parent:this.$refs.timelineParent,shape:"circle",scale:{0:1},left:"25%",fill:{cyan:"yellow"},radius:25,duration:2e3}),r=this.$vuemo.Shape({parent:this.$refs.timelineParent,shape:"rect",left:"50%",fill:"none",radius:20,stroke:{"rgba(0,255,255, 1)":"magenta"},strokeWidth:{10:0},strokeDasharray:"100%",strokeDashoffset:{"-100%":"100%"},angle:{0:180},duration:2e3}),a=this.$vuemo.Shape({parent:this.$refs.timelineParent,shape:"polygon",points:5,left:"75%",fill:{deeppink:"#00F87F"},x:{"rand(-100%, -200%)":0},angle:{0:"rand(0, 360)"},radius:25,duration:2e3});this.$vuemo.Timeline({delay:1e3,repeat:999}).add(t).append(r).append(a).play()},methods:{explosion:function(e){var n=e.pageX-this.$refs.burstParent.offsetLeft,t=e.pageY-this.$refs.burstParent.offsetTop;this.burst1.tune({left:n,top:t}).generate().replay(),this.burst2.tune({left:n,top:t}).generate().replay(),this.circle1.tune({left:n,top:t}).replay(),this.circle2.tune({left:n,top:t}).replay()}},components:{MojsHtml:ge,MojsShape:_e,MojsShapeSwirl:be,MojsStarryNight:Se}},Ce=Oe,Pe=(t("f4cc"),Object(b["a"])(Ce,o,i,!1,null,"24e495f1",null)),$e=Pe.exports,xe={name:"app",components:{Demos:$e,MojsBurst:je},data:function(){return{burstOptions:{radius:{25:75},count:10,duration:2e3,children:{shape:["circle","polygon"],fill:["#11CDC5","#FC2D79","#F9DD5E"],angle:{0:180},degreeShift:"rand(-360, 360)",delay:"stagger(0, 25)"}}}}},Ee=xe,De=(t("034f"),Object(b["a"])(Ee,a,s,!1,null,null,null)),Me=De.exports;r["a"].use(ye),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Me)}}).$mount("#app")},"85ec":function(e,n,t){},b1cc:function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.5ea893e3.png"},f4cc:function(e,n,t){"use strict";var r=t("b1cc"),a=t.n(r);a.a}});
//# sourceMappingURL=app.312bac46.js.map