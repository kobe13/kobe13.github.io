!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){var n=void 0;for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function o(t){var e=this;if("clickEvents"===t&&(this.nextButton&&this.nextButton.addEventListener("click",function(){return e.swipe("next")}),this.prevButton&&this.prevButton.addEventListener("click",function(){return e.swipe("prev")}),this.playButton&&(this.play&&this.playButton.addEventListener("click",function(){return e.stopPlay()}),this.play||this.playButton.addEventListener("click",function(){e.play=!0}))),"touchEvents"===t){var n=new Hammer(this.options.wrapper);this.swipeRight&&n.on("swiperight",function(){return e.swipe("prev")}),this.swipeLeft&&n.on("swipeleft",function(){return e.swipe("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(5),c=function(){function t(){i(this,t),this.nextButton=null,this.prevButton=null,this.swipeLeft=null,this.swipeRight=null,this.play=null,this.playButton=null;var e={wrapper:"",imagesNumber:5,imagesUrl:"",autoBuild:!0,autoPlay:!1,delay:3e3,clickable:!0,touchEvents:!1,counter:0};arguments[0]&&"object"===s(arguments[0])&&(this.options=r(e,arguments[0])),this.options.autoPlay&&(this.playButton=document.querySelector(".info__button"),a.dom.removeClass(this.playButton,"is-hidden"),this.play=!0,this.autoPlay()),this.options.clickable&&(this.nextButton=document.querySelector(".gallery__button--next"),this.prevButton=document.querySelector(".gallery__button--prev"),a.dom.removeClass(this.nextButton,"is-hidden"),a.dom.removeClass(this.prevButton,"is-hidden")),this.options.touchEvents&&(this.swipeLeft=!0,this.swipeRight=!0,o.call(this,"touchEvents")),this.options.autoBuild&&(o.call(this,"clickEvents"),this.build(),this.counter())}return u(t,[{key:"build",value:function(){var t=void 0;for(t=1;t<=this.options.imagesNumber;t++){var e=this.options.imagesUrl,n=this.options.wrapper,i=n.classList[0],r='<li class="gallery__element">\n                                <img class="gallery__element__image" data-src="'+(e+t)+'" src="../src/img/spinningwheel.gif" alt="Image-'+t+'" onload="lzld(this)">\n                           </li>';n.insertAdjacentHTML("beforeend",r),1===t&&a.dom.addClass(document.querySelector("."+i+" .gallery__element"),"gallery__element--show")}}},{key:"counter",value:function(){var t=document.querySelector(".info__counter--total"),e=this.options.imagesNumber;t.innerHTML=e}},{key:"showCurrentImage",value:function(){var t=document.querySelector(".info__counter--current"),e=this.options.counter,n=document.querySelectorAll(".gallery__element"),i=n.length,r=Math.abs(e%i),o=document.querySelector(".gallery__element--show");-1===Math.sign(e)&&(r=i-1,this.options.counter=i-1),a.dom.removeClass(o,"gallery__element--show"),a.dom.addClass(n[r],"gallery__element--show"),t.innerHTML=r+1}},{key:"swipe",value:function(t){"next"===t&&this.options.counter++,"prev"===t&&this.options.counter--,this.showCurrentImage()}},{key:"autoPlay",value:function(){var t=this,e=this.options.delay,n=setInterval(function(){t.play?t.swipe.call(t,"next"):clearInterval(n)},e)}},{key:"stopPlay",value:function(){this.play?(this.play=null,this.playButton.innerHTML="PLAY"):(this.play=!0,this.playButton.innerHTML="STOP",this.autoPlay())}}]),t}();e.default=c},function(t,e,n){"use strict";var i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(o,s,u,a){function c(t,e,n){return setTimeout(d(t,n),e)}function l(t,e,n){return!!Array.isArray(t)&&(h(t,n[e],n),!0)}function h(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function p(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=o.console&&(o.console.warn||o.console.log);return r&&r.call(o.console,i,n),t.apply(this,arguments)}}function f(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&vt(i,n)}function d(t,e){return function(){return t.apply(e,arguments)}}function v(t,e){return(void 0===t?"undefined":r(t))==gt?t.apply(e?e[0]||a:a,e):t}function m(t,e){return t===a?e:t}function y(t,e,n){h(b(e),function(e){t.addEventListener(e,n,!1)})}function g(t,e,n){h(b(e),function(e){t.removeEventListener(e,n,!1)})}function T(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function E(t,e){return t.indexOf(e)>-1}function b(t){return t.trim().split(/\s+/g)}function w(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function _(t){return Array.prototype.slice.call(t,0)}function I(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];w(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function S(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;o<mt.length;){if(n=mt[o],(i=n?n+r:e)in t)return i;o++}return a}function A(){return It++}function P(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||o}function x(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){v(t.options.enable,[t])&&n.handler(e)},this.init()}function C(t){var e=t.options.inputClass;return new(e||(Pt?H:xt?U:At?G:F))(t,M)}function M(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=e&Dt&&i-r==0,s=e&(Rt|Nt)&&i-r==0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,O(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function O(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=R(e)),r>1&&!n.firstMultiple?n.firstMultiple=R(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,u=s?s.center:o.center,a=e.center=N(i);e.timeStamp=bt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=q(u,a),e.distance=Y(u,a),D(n,e),e.offsetDirection=k(e.deltaX,e.deltaY);var c=z(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=Et(c.x)>Et(c.y)?c.x:c.y,e.scale=s?B(s.pointers,i):1,e.rotation=s?X(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,L(n,e);var l=t.element;T(e.srcEvent.target,l)&&(l=e.srcEvent.target),e.target=l}function D(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};e.eventType!==Dt&&o.eventType!==Rt||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function L(t,e){var n,i,r,o,s=t.lastInterval||e,u=e.timeStamp-s.timeStamp;if(e.eventType!=Nt&&(u>Ot||s.velocity===a)){var c=e.deltaX-s.deltaX,l=e.deltaY-s.deltaY,h=z(u,c,l);i=h.x,r=h.y,n=Et(h.x)>Et(h.y)?h.x:h.y,o=k(c,l),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}function R(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:Tt(t.pointers[n].clientX),clientY:Tt(t.pointers[n].clientY)},n++;return{timeStamp:bt(),pointers:e,center:N(e),deltaX:t.deltaX,deltaY:t.deltaY}}function N(t){var e=t.length;if(1===e)return{x:Tt(t[0].clientX),y:Tt(t[0].clientY)};for(var n=0,i=0,r=0;e>r;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:Tt(n/e),y:Tt(i/e)}}function z(t,e,n){return{x:e/t||0,y:n/t||0}}function k(t,e){return t===e?zt:Et(t)>=Et(e)?0>t?kt:Yt:0>e?qt:Xt}function Y(t,e,n){n||(n=Wt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function q(t,e,n){n||(n=Wt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function X(t,e){return q(e[1],e[0],jt)+q(t[1],t[0],jt)}function B(t,e){return Y(e[0],e[1],jt)/Y(t[0],t[1],jt)}function F(){this.evEl=Vt,this.evWin=Gt,this.pressed=!1,x.apply(this,arguments)}function H(){this.evEl=Jt,this.evWin=Kt,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function W(){this.evTarget=te,this.evWin=ee,this.started=!1,x.apply(this,arguments)}function j(t,e){var n=_(t.touches),i=_(t.changedTouches);return e&(Rt|Nt)&&(n=I(n.concat(i),"identifier",!0)),[n,i]}function U(){this.evTarget=ie,this.targetIds={},x.apply(this,arguments)}function V(t,e){var n=_(t.touches),i=this.targetIds;if(e&(Dt|Lt)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=_(t.changedTouches),u=[],a=this.target;if(o=n.filter(function(t){return T(t.target,a)}),e===Dt)for(r=0;r<o.length;)i[o[r].identifier]=!0,r++;for(r=0;r<s.length;)i[s[r].identifier]&&u.push(s[r]),e&(Rt|Nt)&&delete i[s[r].identifier],r++;return u.length?[I(o.concat(u),"identifier",!0),u]:void 0}function G(){x.apply(this,arguments);var t=d(this.handler,this);this.touch=new U(this.manager,t),this.mouse=new F(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Z(t,e){t&Dt?(this.primaryTouch=e.changedPointers[0].identifier,$.call(this,e)):t&(Rt|Nt)&&$.call(this,e)}function $(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,r=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(r,re)}}function J(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(oe>=o&&oe>=s)return!0}return!1}function K(t,e){this.manager=t,this.set(e)}function Q(t){if(E(t,he))return he;var e=E(t,pe),n=E(t,fe);return e&&n?he:e||n?e?pe:fe:E(t,le)?le:ce}function tt(t){this.options=vt({},this.defaults,t||{}),this.id=A(),this.manager=null,this.options.enable=m(this.options.enable,!0),this.state=ve,this.simultaneous={},this.requireFail=[]}function et(t){return t&Ee?"cancel":t&ge?"end":t&ye?"move":t&me?"start":""}function nt(t){return t==Xt?"down":t==qt?"up":t==kt?"left":t==Yt?"right":""}function it(t,e){var n=e.manager;return n?n.get(t):t}function rt(){tt.apply(this,arguments)}function ot(){rt.apply(this,arguments),this.pX=null,this.pY=null}function st(){rt.apply(this,arguments)}function ut(){tt.apply(this,arguments),this._timer=null,this._input=null}function at(){rt.apply(this,arguments)}function ct(){rt.apply(this,arguments)}function lt(){tt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ht(t,e){return e=e||{},e.recognizers=m(e.recognizers,ht.defaults.preset),new pt(t,e)}function pt(t,e){this.options=vt({},ht.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=C(this),this.touchAction=new K(this,this.options.touchAction),ft(this,!0),h(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ft(t,e){var n=t.element;if(n.style){var i;h(t.options.cssProps,function(r,o){i=S(n.style,o),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function dt(t,e){var n=s.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var vt,mt=["","webkit","Moz","MS","ms","o"],yt=s.createElement("div"),gt="function",Tt=Math.round,Et=Math.abs,bt=Date.now;vt="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var wt=p(function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===a)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),_t=p(function(t,e){return wt(t,e,!0)},"merge","Use `assign`."),It=1,St=/mobile|tablet|ip(ad|hone|od)|android/i,At="ontouchstart"in o,Pt=S(o,"PointerEvent")!==a,xt=At&&St.test(navigator.userAgent),Ct="touch",Mt="mouse",Ot=25,Dt=1,Lt=2,Rt=4,Nt=8,zt=1,kt=2,Yt=4,qt=8,Xt=16,Bt=kt|Yt,Ft=qt|Xt,Ht=Bt|Ft,Wt=["x","y"],jt=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&y(this.element,this.evEl,this.domHandler),this.evTarget&&y(this.target,this.evTarget,this.domHandler),this.evWin&&y(P(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(P(this.element),this.evWin,this.domHandler)}};var Ut={mousedown:Dt,mousemove:Lt,mouseup:Rt},Vt="mousedown",Gt="mousemove mouseup";f(F,x,{handler:function(t){var e=Ut[t.type];e&Dt&&0===t.button&&(this.pressed=!0),e&Lt&&1!==t.which&&(e=Rt),this.pressed&&(e&Rt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:Mt,srcEvent:t}))}});var Zt={pointerdown:Dt,pointermove:Lt,pointerup:Rt,pointercancel:Nt,pointerout:Nt},$t={2:Ct,3:"pen",4:Mt,5:"kinect"},Jt="pointerdown",Kt="pointermove pointerup pointercancel";o.MSPointerEvent&&!o.PointerEvent&&(Jt="MSPointerDown",Kt="MSPointerMove MSPointerUp MSPointerCancel"),f(H,x,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Zt[i],o=$t[t.pointerType]||t.pointerType,s=o==Ct,u=w(e,t.pointerId,"pointerId");r&Dt&&(0===t.button||s)?0>u&&(e.push(t),u=e.length-1):r&(Rt|Nt)&&(n=!0),0>u||(e[u]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(u,1))}});var Qt={touchstart:Dt,touchmove:Lt,touchend:Rt,touchcancel:Nt},te="touchstart",ee="touchstart touchmove touchend touchcancel";f(W,x,{handler:function(t){var e=Qt[t.type];if(e===Dt&&(this.started=!0),this.started){var n=j.call(this,t,e);e&(Rt|Nt)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:Ct,srcEvent:t})}}});var ne={touchstart:Dt,touchmove:Lt,touchend:Rt,touchcancel:Nt},ie="touchstart touchmove touchend touchcancel";f(U,x,{handler:function(t){var e=ne[t.type],n=V.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:Ct,srcEvent:t})}});var re=2500,oe=25;f(G,x,{handler:function(t,e,n){var i=n.pointerType==Ct,r=n.pointerType==Mt;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)Z.call(this,e,n);else if(r&&J.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var se=S(yt.style,"touchAction"),ue=se!==a,ae="compute",ce="auto",le="manipulation",he="none",pe="pan-x",fe="pan-y",de=function(){if(!ue)return!1;var t={},e=o.CSS&&o.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||o.CSS.supports("touch-action",n)}),t}();K.prototype={set:function(t){t==ae&&(t=this.compute()),ue&&this.manager.element.style&&de[t]&&(this.manager.element.style[se]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return h(this.manager.recognizers,function(e){v(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),Q(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=E(i,he)&&!de[he],o=E(i,fe)&&!de[fe],s=E(i,pe)&&!de[pe];if(r){var u=1===t.pointers.length,a=t.distance<2,c=t.deltaTime<250;if(u&&a&&c)return}return s&&o?void 0:r||o&&n&Bt||s&&n&Ft?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ve=1,me=2,ye=4,ge=8,Te=ge,Ee=16;tt.prototype={defaults:{},set:function(t){return vt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(l(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=it(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return l(t,"dropRecognizeWith",this)?this:(t=it(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(l(t,"requireFailure",this))return this;var e=this.requireFail;return t=it(t,this),-1===w(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(l(t,"dropRequireFailure",this))return this;t=it(t,this);var e=w(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;ge>i&&e(n.options.event+et(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=ge&&e(n.options.event+et(i))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=32)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|ve)))return!1;t++}return!0},recognize:function(t){var e=vt({},t);return v(this.options.enable,[this,e])?(this.state&(Te|Ee|32)&&(this.state=ve),this.state=this.process(e),void(this.state&(me|ye|ge|Ee)&&this.tryEmit(e))):(this.reset(),void(this.state=32))},process:function(t){},getTouchAction:function(){},reset:function(){}},f(rt,tt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(me|ye),r=this.attrTest(t);return i&&(n&Nt||!r)?e|Ee:i||r?n&Rt?e|ge:e&me?e|ye:me:32}}),f(ot,rt,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ht},getTouchAction:function(){var t=this.options.direction,e=[];return t&Bt&&e.push(fe),t&Ft&&e.push(pe),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(e.direction&Bt?(r=0===o?zt:0>o?kt:Yt,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?zt:0>s?qt:Xt,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return rt.prototype.attrTest.call(this,t)&&(this.state&me||!(this.state&me)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=nt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),f(st,rt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[he]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&me)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),f(ut,tt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ce]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(Rt|Nt)&&!r)this.reset();else if(t.eventType&Dt)this.reset(),this._timer=c(function(){this.state=Te,this.tryEmit()},e.time,this);else if(t.eventType&Rt)return Te;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Te&&(t&&t.eventType&Rt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=bt(),this.manager.emit(this.options.event,this._input)))}}),f(at,rt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[he]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&me)}}),f(ct,rt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Bt|Ft,pointers:1},getTouchAction:function(){return ot.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(Bt|Ft)?e=t.overallVelocity:n&Bt?e=t.overallVelocityX:n&Ft&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&Et(e)>this.options.velocity&&t.eventType&Rt},emit:function(t){var e=nt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),f(lt,tt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[le]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&Dt&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=Rt)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||Y(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t;if(0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=c(function(){this.state=Te,this.tryEmit()},e.interval,this),me):Te}return 32},failTimeout:function(){return this._timer=c(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Te&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ht.VERSION="2.0.8",ht.defaults={domEvents:!1,touchAction:ae,enable:!0,inputTarget:null,inputClass:null,preset:[[at,{enable:!1}],[st,{enable:!1},["rotate"]],[ct,{direction:Bt}],[ot,{direction:Bt},["swipe"]],[lt],[lt,{event:"doubletap",taps:2},["tap"]],[ut]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};pt.prototype={set:function(t){return vt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&Te)&&(r=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],2===e.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(me|ye|ge)&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof tt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(l(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(l(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=w(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return h(b(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return h(b(t),function(t){e?n[t]&&n[t].splice(w(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&dt(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ft(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},vt(ht,{INPUT_START:Dt,INPUT_MOVE:Lt,INPUT_END:Rt,INPUT_CANCEL:Nt,STATE_POSSIBLE:ve,STATE_BEGAN:me,STATE_CHANGED:ye,STATE_ENDED:ge,STATE_RECOGNIZED:Te,STATE_CANCELLED:Ee,STATE_FAILED:32,DIRECTION_NONE:zt,DIRECTION_LEFT:kt,DIRECTION_RIGHT:Yt,DIRECTION_UP:qt,DIRECTION_DOWN:Xt,DIRECTION_HORIZONTAL:Bt,DIRECTION_VERTICAL:Ft,DIRECTION_ALL:Ht,Manager:pt,Input:x,TouchAction:K,TouchInput:U,MouseInput:F,PointerEventInput:H,TouchMouseInput:G,SingleTouchInput:W,Recognizer:tt,AttrRecognizer:rt,Tap:lt,Pan:ot,Swipe:ct,Pinch:st,Rotate:at,Press:ut,on:y,off:g,each:h,merge:_t,extend:wt,assign:vt,inherit:f,bindFn:d,prefixed:S}),(void 0!==o?o:"undefined"!=typeof self?self:{}).Hammer=ht,void 0!==(i=function(){return ht}.call(e,n,e,t))&&(t.exports=i)}(window,document)},function(t,e,n){"use strict";(function(t){var e,e;!function(n){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof self&&(i=self),i.lazyload=function(){return function t(n,i,r){function o(u,a){if(!i[u]){if(!n[u]){var c="function"==typeof e&&e;if(!a&&c)return e(u,!0);if(s)return e(u,!0);throw c=Error("Cannot find module '"+u+"'"),c.code="MODULE_NOT_FOUND",c}c=i[u]={exports:{}},n[u][0].call(c.exports,function(t){var e=n[u][1][t];return o(e||t)},c,c.exports,t,n,i,r)}return i[u].exports}for(var s="function"==typeof e&&e,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,i){(function(t){function i(t){-1===u.call(c,t)&&c.push(t)}function r(t){function e(e){var i;i="function"==typeof t.src?t.src(e):e.getAttribute(t.src),i&&(e.src=i),e.setAttribute("data-lzled",!0),n[u.call(n,e)]=null}t=s({offset:333,src:"data-src",container:!1},t||{}),"string"==typeof t.src&&i(t.src);var n=[];return function(i){i.onload=null,i.removeAttribute("onload"),i.onerror=null,i.removeAttribute("onerror"),-1===u.call(n,i)&&a(i,t,e)}}function o(e){if(!1!=(e="HTML"+e+"Element")in t){var n=t[e].prototype.getAttribute;t[e].prototype.getAttribute=function(t){if("src"===t){for(var e,i=0,r=c.length;i<r&&!(e=n.call(this,c[i]));i++);return e||n.call(this,t)}return n.call(this,t)}}}function s(t,e){for(var n in t)void 0===e[n]&&(e[n]=t[n]);return e}function u(t){for(var e=this.length;e--&&this[e]!==t;);return e}n.exports=r;var a=e("in-viewport"),c=["data-src"];t.lzld=r(),o("Image"),o("IFrame")}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"in-viewport":2}],2:[function(e,n,i){(function(t){function e(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}function i(t,e,n){var i;return function(){var r=this,o=arguments,s=n&&!i;clearTimeout(i),i=setTimeout(function(){i=null,n||t.apply(r,o)},e),s&&t.apply(r,o)}}function r(n){function r(t,e,n){return{watch:function(){l.add(t,e,n)},dispose:function(){l.remove(t)}}}function u(e,i){if(!(c(t.document.documentElement,e)&&c(t.document.documentElement,n)&&e.offsetWidth&&e.offsetHeight))return!1;var r,o,s,u,a=e.getBoundingClientRect();return n===t.document.body?(r=-i,o=-i,s=t.document.documentElement.clientWidth+i,u=t.document.documentElement.clientHeight+i):(u=n.getBoundingClientRect(),r=u.top-i,o=u.left-i,s=u.right+i,u=u.bottom+i),a.right>=o&&a.left<=s&&a.bottom>=r&&a.top<=u}var l=o(),h=n===t.document.body?t:n,p=i(l.checkAll(function(t,e,n){u(t,e)&&(l.remove(t),n(t))}),15);return e(h,"scroll",p),h===t&&e(t,"resize",p),a&&s(l,n,p),setInterval(p,150),{container:n,isInViewport:function(t,e,n){return n?(t=r(t,e,n),t.watch(),t):u(t,e)}}}function o(){function t(t){for(var e=n.length-1;0<=e;e--)if(n[e][0]===t)return e;return-1}function e(e){return-1!==t(e)}var n=[];return{add:function(t,i,r){e(t)||n.push([t,i,r])},remove:function(e){-1!==(e=t(e))&&n.splice(e,1)},isWatched:e,checkAll:function(t){return function(){for(var e=n.length-1;0<=e;e--)t.apply(this,n[e])}}}}function s(t,e,n){function i(e){return e=s.call([],Array.prototype.slice.call(e.addedNodes),e.target),0<o.call(e,t.isWatched).length}var r=new MutationObserver(function(t){!0===t.some(i)&&setTimeout(n,0)}),o=Array.prototype.filter,s=Array.prototype.concat;r.observe(e,{childList:!0,subtree:!0,attributes:!0})}n.exports=function(e,n,i){var o=t.document.body;void 0!==n&&"function"!=typeof n||(i=n,n={}),o=n.container||o,n=n.offset||0;for(var s=0;s<u.length;s++)if(u[s].container===o)return u[s].isInViewport(e,n,i);return u[u.push(r(o))-1].isInViewport(e,n,i)};var u=[],a="function"==typeof t.MutationObserver,c=t.document.documentElement.compareDocumentPosition?function(t,e){return!!(16&t.compareDocumentPosition(e))}:t.document.documentElement.contains?function(t,e){return t!==e&&!!t.contains&&t.contains(e)}:function(t,e){for(;e=e.parentNode;)if(e===t)return!0;return!1}}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)}()}()}).call(e,n(6))},function(t,e){},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}n(2),n(1);var r=n(3),o=(i(r),n(0)),s=i(o);new s.default({wrapper:document.querySelector(".gallery__wrapper"),imagesNumber:50,imagesUrl:"https://unsplash.it/600/350?image=",touchEvents:!0,autoPlay:!0})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.dom={addClass:function(t,e){var n=e.split(" "),i=t;i.classList&&n.forEach(function(t){i.classList.add(t)})},removeClass:function(t,e){var n=e.split(" "),i=t;i.classList&&n.forEach(function(t){i.classList.remove(t)})}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]);