/*! 1a02444 */
webpackJsonp([1],{2:function(a,b,c){"use strict";c(46);var d=c(48),e=function(a){return a&&a.__esModule?a:{default:a}}(d),f=c(43);f.playersList.forEach(function(a){var b=JSON.parse(a.getAttribute("data-player"));new e.default(a,b)})},43:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});const c=[].slice.call(document.querySelectorAll(".video-player"));b.playersList=c},46:function(){},48:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});const d=c(41);b["default"]=class{constructor(a,b){this.options=b;this.options=Object.assign({},{ratio:!0,noPreload:!0,autoPlay:!1,videoUrl:"http://edge.flowplayer.org/drive",videoTitle:"Demo Video",posterUrl:"https://image.flaticon.com/icons/svg/23/23957.svg",loop:!1,muted:!0},this.options),d(a,{adaptiveRatio:this.options.ratio,splash:this.options.noPreload,autoplay:this.options.autoPlay,poster:this.options.posterUrl,muted:this.options.muted,clip:{sources:[{type:"video/webm",src:`${this.options.videoUrl}.webm`},{type:"video/mp4",src:`${this.options.videoUrl}.mp4`}],title:this.options.videoTitle,loop:this.options.loop}})}}}},[2]);
//# sourceMappingURL=app.js.map