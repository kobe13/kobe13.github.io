"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function (a, b, c, d) {
    "use strict";
    function e(a, b, c) {
        return setTimeout(j(a, c), b);
    }function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
    }function g(a, b, c) {
        var e;if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
            b.call(c, a[e], e, a), e++;
        } else for (e in a) {
            a.hasOwnProperty(e) && b.call(c, a[e], e, a);
        }
    }function h(b, c, d) {
        var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";return function () {
            var c = new Error("get-stack-trace"),
                d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                f = a.console && (a.console.warn || a.console.log);return f && f.call(a.console, e, d), b.apply(this, arguments);
        };
    }function i(a, b, c) {
        var d,
            e = b.prototype;d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c);
    }function j(a, b) {
        return function () {
            return a.apply(b, arguments);
        };
    }function k(a, b) {
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) == oa ? a.apply(b ? b[0] || d : d, b) : a;
    }function l(a, b) {
        return a === d ? b : a;
    }function m(a, b, c) {
        g(q(b), function (b) {
            a.addEventListener(b, c, !1);
        });
    }function n(a, b, c) {
        g(q(b), function (b) {
            a.removeEventListener(b, c, !1);
        });
    }function o(a, b) {
        for (; a;) {
            if (a == b) return !0;a = a.parentNode;
        }return !1;
    }function p(a, b) {
        return a.indexOf(b) > -1;
    }function q(a) {
        return a.trim().split(/\s+/g);
    }function r(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b) return d;d++;
        }return -1;
    }function s(a) {
        return Array.prototype.slice.call(a, 0);
    }function t(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];r(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
        }return c && (d = b ? d.sort(function (a, c) {
            return a[b] > c[b];
        }) : d.sort()), d;
    }function u(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
            if (c = ma[g], e = c ? c + f : b, e in a) return e;g++;
        }return d;
    }function v() {
        return ua++;
    }function w(b) {
        var c = b.ownerDocument || b;return c.defaultView || c.parentWindow || a;
    }function x(a, b) {
        var c = this;this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
            k(a.options.enable, [a]) && c.handler(b);
        }, this.init();
    }function y(a) {
        var b,
            c = a.options.inputClass;return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
    }function z(a, b, c) {
        var d = c.pointers.length,
            e = c.changedPointers.length,
            f = b & Ea && d - e === 0,
            g = b & (Ga | Ha) && d - e === 0;c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
    }function A(a, b) {
        var c = a.session,
            d = b.pointers,
            e = d.length;c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);var f = c.firstInput,
            g = c.firstMultiple,
            h = g ? g.center : f.center,
            i = b.center = E(d);b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);var j = F(b.deltaTime, b.deltaX, b.deltaY);b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);var k = a.element;o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
    }function B(a, b) {
        var c = b.center,
            d = a.offsetDelta || {},
            e = a.prevDelta || {},
            f = a.prevInput || {};b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
    }function C(a, b) {
        var c,
            e,
            f,
            g,
            h = a.lastInterval || b,
            i = b.timeStamp - h.timeStamp;if (b.eventType != Ha && (i > Da || h.velocity === d)) {
            var j = b.deltaX - h.deltaX,
                k = b.deltaY - h.deltaY,
                l = F(i, j, k);e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b;
        } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
    }function D(a) {
        for (var b = [], c = 0; c < a.pointers.length;) {
            b[c] = { clientX: pa(a.pointers[c].clientX), clientY: pa(a.pointers[c].clientY) }, c++;
        }return { timeStamp: ra(), pointers: b, center: E(b), deltaX: a.deltaX, deltaY: a.deltaY };
    }function E(a) {
        var b = a.length;if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) };for (var c = 0, d = 0, e = 0; b > e;) {
            c += a[e].clientX, d += a[e].clientY, e++;
        }return { x: pa(c / b), y: pa(d / b) };
    }function F(a, b, c) {
        return { x: b / a || 0, y: c / a || 0 };
    }function G(a, b) {
        return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma;
    }function H(a, b, c) {
        c || (c = Qa);var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];return Math.sqrt(d * d + e * e);
    }function I(a, b, c) {
        c || (c = Qa);var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];return 180 * Math.atan2(e, d) / Math.PI;
    }function J(a, b) {
        return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
    }function K(a, b) {
        return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
    }function L() {
        this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments);
    }function M() {
        this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }function N() {
        this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments);
    }function O(a, b) {
        var c = s(a.touches),
            d = s(a.changedTouches);return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
    }function P() {
        this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments);
    }function Q(a, b) {
        var c = s(a.touches),
            d = this.targetIds;if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];var e,
            f,
            g = s(a.changedTouches),
            h = [],
            i = this.target;if (f = c.filter(function (a) {
            return o(a.target, i);
        }), b === Ea) for (e = 0; e < f.length;) {
            d[f[e].identifier] = !0, e++;
        }for (e = 0; e < g.length;) {
            d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
        }return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
    }function R() {
        x.apply(this, arguments);var a = j(this.handler, this);this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = [];
    }function S(a, b) {
        a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b);
    }function T(a) {
        var b = a.changedPointers[0];if (b.identifier === this.primaryTouch) {
            var c = { x: b.clientX, y: b.clientY };this.lastTouches.push(c);var d = this.lastTouches,
                e = function e() {
                var a = d.indexOf(c);a > -1 && d.splice(a, 1);
            };setTimeout(e, cb);
        }
    }function U(a) {
        for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
            var e = this.lastTouches[d],
                f = Math.abs(b - e.x),
                g = Math.abs(c - e.y);if (db >= f && db >= g) return !0;
        }return !1;
    }function V(a, b) {
        this.manager = a, this.set(b);
    }function W(a) {
        if (p(a, jb)) return jb;var b = p(a, kb),
            c = p(a, lb);return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb;
    }function X() {
        if (!fb) return !1;var b = {},
            c = a.CSS && a.CSS.supports;return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
            b[d] = c ? a.CSS.supports("touch-action", d) : !0;
        }), b;
    }function Y(a) {
        this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = [];
    }function Z(a) {
        return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : "";
    }function $(a) {
        return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : "";
    }function _(a, b) {
        var c = b.manager;return c ? c.get(a) : a;
    }function aa() {
        Y.apply(this, arguments);
    }function ba() {
        aa.apply(this, arguments), this.pX = null, this.pY = null;
    }function ca() {
        aa.apply(this, arguments);
    }function da() {
        Y.apply(this, arguments), this._timer = null, this._input = null;
    }function ea() {
        aa.apply(this, arguments);
    }function fa() {
        aa.apply(this, arguments);
    }function ga() {
        Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }function ha(a, b) {
        return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b);
    }function ia(a, b) {
        this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
            var b = this.add(new a[0](a[1]));a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
        }, this);
    }function ja(a, b) {
        var c = a.element;if (c.style) {
            var d;g(a.options.cssProps, function (e, f) {
                d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || "";
            }), b || (a.oldCssProps = {});
        }
    }function ka(a, c) {
        var d = b.createEvent("Event");d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
    }var la,
        ma = ["", "webkit", "Moz", "MS", "ms", "o"],
        na = b.createElement("div"),
        oa = "function",
        pa = Math.round,
        qa = Math.abs,
        ra = Date.now;la = "function" != typeof Object.assign ? function (a) {
        if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var e = arguments[c];if (e !== d && null !== e) for (var f in e) {
                e.hasOwnProperty(f) && (b[f] = e[f]);
            }
        }return b;
    } : Object.assign;var sa = h(function (a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length;) {
            (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
        }return a;
    }, "extend", "Use `assign`."),
        ta = h(function (a, b) {
        return sa(a, b, !0);
    }, "merge", "Use `assign`."),
        ua = 1,
        va = /mobile|tablet|ip(ad|hone|od)|android/i,
        wa = "ontouchstart" in a,
        xa = u(a, "PointerEvent") !== d,
        ya = wa && va.test(navigator.userAgent),
        za = "touch",
        Aa = "pen",
        Ba = "mouse",
        Ca = "kinect",
        Da = 25,
        Ea = 1,
        Fa = 2,
        Ga = 4,
        Ha = 8,
        Ia = 1,
        Ja = 2,
        Ka = 4,
        La = 8,
        Ma = 16,
        Na = Ja | Ka,
        Oa = La | Ma,
        Pa = Na | Oa,
        Qa = ["x", "y"],
        Ra = ["clientX", "clientY"];x.prototype = { handler: function handler() {}, init: function init() {
            this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler);
        }, destroy: function destroy() {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler);
        } };var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga },
        Ta = "mousedown",
        Ua = "mousemove mouseup";i(L, x, { handler: function handler(a) {
            var b = Sa[a.type];b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: Ba, srcEvent: a }));
        } });var Va = { pointerdown: Ea, pointermove: Fa, pointerup: Ga, pointercancel: Ha, pointerout: Ha },
        Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca },
        Xa = "pointerdown",
        Ya = "pointermove pointerup pointercancel";a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, { handler: function handler(a) {
            var b = this.store,
                c = !1,
                d = a.type.toLowerCase().replace("ms", ""),
                e = Va[d],
                f = Wa[a.pointerType] || a.pointerType,
                g = f == za,
                h = r(b, a.pointerId, "pointerId");e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1));
        } });var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
        $a = "touchstart",
        _a = "touchstart touchmove touchend touchcancel";i(N, x, { handler: function handler(a) {
            var b = Za[a.type];if (b === Ea && (this.started = !0), this.started) {
                var c = O.call(this, a, b);b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
            }
        } });var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
        bb = "touchstart touchmove touchend touchcancel";i(P, x, { handler: function handler(a) {
            var b = ab[a.type],
                c = Q.call(this, a, b);c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: za, srcEvent: a });
        } });var cb = 2500,
        db = 25;i(R, x, { handler: function handler(a, b, c) {
            var d = c.pointerType == za,
                e = c.pointerType == Ba;if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                if (d) S.call(this, b, c);else if (e && U.call(this, c)) return;this.callback(a, b, c);
            }
        }, destroy: function destroy() {
            this.touch.destroy(), this.mouse.destroy();
        } });var eb = u(na.style, "touchAction"),
        fb = eb !== d,
        gb = "compute",
        hb = "auto",
        ib = "manipulation",
        jb = "none",
        kb = "pan-x",
        lb = "pan-y",
        mb = X();V.prototype = { set: function set(a) {
            a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim();
        }, update: function update() {
            this.set(this.manager.options.touchAction);
        }, compute: function compute() {
            var a = [];return g(this.manager.recognizers, function (b) {
                k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
            }), W(a.join(" "));
        }, preventDefaults: function preventDefaults(a) {
            var b = a.srcEvent,
                c = a.offsetDirection;if (this.manager.session.prevented) return void b.preventDefault();var d = this.actions,
                e = p(d, jb) && !mb[jb],
                f = p(d, lb) && !mb[lb],
                g = p(d, kb) && !mb[kb];if (e) {
                var h = 1 === a.pointers.length,
                    i = a.distance < 2,
                    j = a.deltaTime < 250;if (h && i && j) return;
            }return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0;
        }, preventSrc: function preventSrc(a) {
            this.manager.session.prevented = !0, a.preventDefault();
        } };var nb = 1,
        ob = 2,
        pb = 4,
        qb = 8,
        rb = qb,
        sb = 16,
        tb = 32;Y.prototype = { defaults: {}, set: function set(a) {
            return la(this.options, a), this.manager && this.manager.touchAction.update(), this;
        }, recognizeWith: function recognizeWith(a) {
            if (f(a, "recognizeWith", this)) return this;var b = this.simultaneous;return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
        }, dropRecognizeWith: function dropRecognizeWith(a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this);
        }, requireFailure: function requireFailure(a) {
            if (f(a, "requireFailure", this)) return this;var b = this.requireFail;return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this;
        }, dropRequireFailure: function dropRequireFailure(a) {
            if (f(a, "dropRequireFailure", this)) return this;a = _(a, this);var b = r(this.requireFail, a);return b > -1 && this.requireFail.splice(b, 1), this;
        }, hasRequireFailures: function hasRequireFailures() {
            return this.requireFail.length > 0;
        }, canRecognizeWith: function canRecognizeWith(a) {
            return !!this.simultaneous[a.id];
        }, emit: function emit(a) {
            function b(b) {
                c.manager.emit(b, a);
            }var c = this,
                d = this.state;qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d));
        }, tryEmit: function tryEmit(a) {
            return this.canEmit() ? this.emit(a) : void (this.state = tb);
        }, canEmit: function canEmit() {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (tb | nb))) return !1;a++;
            }return !0;
        }, recognize: function recognize(a) {
            var b = la({}, a);return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb));
        }, process: function process(a) {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, i(aa, Y, { defaults: { pointers: 1 }, attrTest: function attrTest(a) {
            var b = this.options.pointers;return 0 === b || a.pointers.length === b;
        }, process: function process(a) {
            var b = this.state,
                c = a.eventType,
                d = b & (ob | pb),
                e = this.attrTest(a);return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb;
        } }), i(ba, aa, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa }, getTouchAction: function getTouchAction() {
            var a = this.options.direction,
                b = [];return a & Na && b.push(lb), a & Oa && b.push(kb), b;
        }, directionTest: function directionTest(a) {
            var b = this.options,
                c = !0,
                d = a.distance,
                e = a.direction,
                f = a.deltaX,
                g = a.deltaY;return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
        }, attrTest: function attrTest(a) {
            return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a));
        }, emit: function emit(a) {
            this.pX = a.deltaX, this.pY = a.deltaY;var b = $(a.direction);b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a);
        } }), i(ca, aa, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
            return [jb];
        }, attrTest: function attrTest(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob);
        }, emit: function emit(a) {
            if (1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";a.additionalEvent = this.options.event + b;
            }this._super.emit.call(this, a);
        } }), i(da, Y, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function getTouchAction() {
            return [hb];
        }, process: function process(a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime > b.time;if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
                this.state = rb, this.tryEmit();
            }, b.time, this);else if (a.eventType & Ga) return rb;return tb;
        }, reset: function reset() {
            clearTimeout(this._timer);
        }, emit: function emit(a) {
            this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)));
        } }), i(ea, aa, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
            return [jb];
        }, attrTest: function attrTest(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob);
        } }), i(fa, aa, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Na | Oa, pointers: 1 }, getTouchAction: function getTouchAction() {
            return ba.prototype.getTouchAction.call(this);
        }, attrTest: function attrTest(a) {
            var b,
                c = this.options.direction;return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga;
        }, emit: function emit(a) {
            var b = $(a.offsetDirection);b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
        } }), i(ga, Y, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function getTouchAction() {
            return [ib];
        }, process: function process(a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime < b.time;if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();if (d && f && c) {
                if (a.eventType != Ga) return this.failTimeout();var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                    h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;var i = this.count % b.taps;if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
                    this.state = rb, this.tryEmit();
                }, b.interval, this), ob) : rb;
            }return tb;
        }, failTimeout: function failTimeout() {
            return this._timer = e(function () {
                this.state = tb;
            }, this.options.interval, this), tb;
        }, reset: function reset() {
            clearTimeout(this._timer);
        }, emit: function emit() {
            this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        } }), ha.VERSION = "2.0.8", ha.defaults = { domEvents: !1, touchAction: gb, enable: !0, inputTarget: null, inputClass: null, preset: [[ea, { enable: !1 }], [ca, { enable: !1 }, ["rotate"]], [fa, { direction: Na }], [ba, { direction: Na }, ["swipe"]], [ga], [ga, { event: "doubletap", taps: 2 }, ["tap"]], [da]], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var ub = 1,
        vb = 2;ia.prototype = { set: function set(a) {
            return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
        }, stop: function stop(a) {
            this.session.stopped = a ? vb : ub;
        }, recognize: function recognize(a) {
            var b = this.session;if (!b.stopped) {
                this.touchAction.preventDefaults(a);var c,
                    d = this.recognizers,
                    e = b.curRecognizer;(!e || e && e.state & rb) && (e = b.curRecognizer = null);for (var f = 0; f < d.length;) {
                    c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++;
                }
            }
        }, get: function get(a) {
            if (a instanceof Y) return a;for (var b = this.recognizers, c = 0; c < b.length; c++) {
                if (b[c].options.event == a) return b[c];
            }return null;
        }, add: function add(a) {
            if (f(a, "add", this)) return this;var b = this.get(a.options.event);return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
        }, remove: function remove(a) {
            if (f(a, "remove", this)) return this;if (a = this.get(a)) {
                var b = this.recognizers,
                    c = r(b, a);-1 !== c && (b.splice(c, 1), this.touchAction.update());
            }return this;
        }, on: function on(a, b) {
            if (a !== d && b !== d) {
                var c = this.handlers;return g(q(a), function (a) {
                    c[a] = c[a] || [], c[a].push(b);
                }), this;
            }
        }, off: function off(a, b) {
            if (a !== d) {
                var c = this.handlers;return g(q(a), function (a) {
                    b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
                }), this;
            }
        }, emit: function emit(a, b) {
            this.options.domEvents && ka(a, b);var c = this.handlers[a] && this.handlers[a].slice();if (c && c.length) {
                b.type = a, b.preventDefault = function () {
                    b.srcEvent.preventDefault();
                };for (var d = 0; d < c.length;) {
                    c[d](b), d++;
                }
            }
        }, destroy: function destroy() {
            this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
        } }, la(ha, { INPUT_START: Ea, INPUT_MOVE: Fa, INPUT_END: Ga, INPUT_CANCEL: Ha, STATE_POSSIBLE: nb, STATE_BEGAN: ob, STATE_CHANGED: pb, STATE_ENDED: qb, STATE_RECOGNIZED: rb, STATE_CANCELLED: sb, STATE_FAILED: tb, DIRECTION_NONE: Ia, DIRECTION_LEFT: Ja, DIRECTION_RIGHT: Ka, DIRECTION_UP: La, DIRECTION_DOWN: Ma, DIRECTION_HORIZONTAL: Na, DIRECTION_VERTICAL: Oa, DIRECTION_ALL: Pa, Manager: ia, Input: x, TouchAction: V, TouchInput: P, MouseInput: L, PointerEventInput: M, TouchMouseInput: R, SingleTouchInput: N, Recognizer: Y, AttrRecognizer: aa, Tap: ga, Pan: ba, Swipe: fa, Pinch: ca, Rotate: ea, Press: da, on: m, off: n, each: g, merge: ta, extend: sa, assign: la, inherit: i, bindFn: j, prefixed: u });var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};wb.Hammer = ha, "function" == typeof define && define.amd ? define(function () {
        return ha;
    }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha;
}(window, document, "Hammer");
//# sourceMappingURL=hammer.min.js.map})

// ***** Lazy Load ***** //
(function (u) {
    var l;"undefined" !== typeof window ? l = window : "undefined" !== typeof self && (l = self);l.lazyload = u();
})(function () {
    return function l(n, k, e) {
        function r(g, m) {
            if (!k[g]) {
                if (!n[g]) {
                    var f = "function" == typeof require && require;if (!m && f) return f(g, !0);if (t) return t(g, !0);f = Error("Cannot find module '" + g + "'");throw f.code = "MODULE_NOT_FOUND", f;
                }f = k[g] = { exports: {} };n[g][0].call(f.exports, function (e) {
                    var c = n[g][1][e];return r(c ? c : e);
                }, f, f.exports, l, n, k, e);
            }return k[g].exports;
        }for (var t = "function" == typeof require && require, m = 0; m < e.length; m++) {
            r(e[m]);
        }return r;
    }({ 1: [function (l, n, k) {
            (function (e) {
                function r(c) {
                    -1 === k.call(p, c) && p.push(c);
                }function t(c) {
                    function b(b) {
                        var d;d = "function" === typeof c.src ? c.src(b) : b.getAttribute(c.src);d && (b.src = d);b.setAttribute("data-lzled", !0);a[k.call(a, b)] = null;
                    }c = g({ offset: 333, src: "data-src", container: !1 }, c || {});"string" === typeof c.src && r(c.src);var a = [];return function (h) {
                        h.onload = null;h.removeAttribute("onload");h.onerror = null;h.removeAttribute("onerror");-1 === k.call(a, h) && f(h, c, b);
                    };
                }function m(c) {
                    c = "HTML" + c + "Element";if (!1 !== c in e) {
                        var b = e[c].prototype.getAttribute;e[c].prototype.getAttribute = function (a) {
                            if ("src" === a) {
                                for (var h, d = 0, c = p.length; d < c && !(h = b.call(this, p[d])); d++) {}return h || b.call(this, a);
                            }return b.call(this, a);
                        };
                    }
                }function g(c, b) {
                    for (var a in c) {
                        void 0 === b[a] && (b[a] = c[a]);
                    }return b;
                }function k(c) {
                    for (var b = this.length; b-- && this[b] !== c;) {}return b;
                }n.exports = t;var f = l("in-viewport"),
                    p = ["data-src"];e.lzld = t();m("Image");m("IFrame");
            }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
        }, { "in-viewport": 2 }], 2: [function (l, n, k) {
            (function (e) {
                function k(b, a, h) {
                    b.attachEvent ? b.attachEvent("on" + a, h) : b.addEventListener(a, h, !1);
                }function l(b, a, h) {
                    var d;return function () {
                        var c = this,
                            e = arguments,
                            w = h && !d;clearTimeout(d);d = setTimeout(function () {
                            d = null;h || b.apply(c, e);
                        }, a);w && b.apply(c, e);
                    };
                }function m(b) {
                    function a(b, a, c) {
                        return { watch: function watch() {
                                d.add(b, a, c);
                            }, dispose: function dispose() {
                                d.remove(b);
                            } };
                    }function h(a, d) {
                        if (!(c(e.document.documentElement, a) && c(e.document.documentElement, b) && a.offsetWidth && a.offsetHeight)) return !1;var h = a.getBoundingClientRect(),
                            f,
                            q,
                            k,
                            g;b === e.document.body ? (f = -d, q = -d, k = e.document.documentElement.clientWidth + d, g = e.document.documentElement.clientHeight + d) : (g = b.getBoundingClientRect(), f = g.top - d, q = g.left - d, k = g.right + d, g = g.bottom + d);return h.right >= q && h.left <= k && h.bottom >= f && h.top <= g;
                    }var d = g(),
                        q = b === e.document.body ? e : b,
                        f = l(d.checkAll(function (b, a, c) {
                        h(b, a) && (d.remove(b), c(b));
                    }), 15);k(q, "scroll", f);q === e && k(e, "resize", f);
                    p && v(d, b, f);setInterval(f, 150);return { container: b, isInViewport: function isInViewport(b, d, c) {
                            if (!c) return h(b, d);b = a(b, d, c);b.watch();return b;
                        } };
                }function g() {
                    function b(b) {
                        for (var a = c.length - 1; 0 <= a; a--) {
                            if (c[a][0] === b) return a;
                        }return -1;
                    }function a(a) {
                        return -1 !== b(a);
                    }var c = [];return { add: function add(b, e, f) {
                            a(b) || c.push([b, e, f]);
                        }, remove: function remove(a) {
                            a = b(a);-1 !== a && c.splice(a, 1);
                        }, isWatched: a, checkAll: function checkAll(b) {
                            return function () {
                                for (var a = c.length - 1; 0 <= a; a--) {
                                    b.apply(this, c[a]);
                                }
                            };
                        } };
                }function v(b, a, c) {
                    function d(a) {
                        a = g.call([], Array.prototype.slice.call(a.addedNodes), a.target);return 0 < f.call(a, b.isWatched).length;
                    }var e = new MutationObserver(function (a) {
                        !0 === a.some(d) && setTimeout(c, 0);
                    }),
                        f = Array.prototype.filter,
                        g = Array.prototype.concat;e.observe(a, { childList: !0, subtree: !0, attributes: !0 });
                }n.exports = function (b, a, c) {
                    var d = e.document.body;if (void 0 === a || "function" === typeof a) c = a, a = {};d = a.container || d;a = a.offset || 0;for (var g = 0; g < f.length; g++) {
                        if (f[g].container === d) return f[g].isInViewport(b, a, c);
                    }return f[f.push(m(d)) - 1].isInViewport(b, a, c);
                };var f = [],
                    p = "function" === typeof e.MutationObserver,
                    c = e.document.documentElement.compareDocumentPosition ? function (b, a) {
                    return !!(b.compareDocumentPosition(a) & 16);
                } : e.document.documentElement.contains ? function (b, a) {
                    return b !== a && (b.contains ? b.contains(a) : !1);
                } : function (b, a) {
                    for (; a = a.parentNode;) {
                        if (a === b) return !0;
                    }return !1;
                };
            }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
        }, {}] }, {}, [1])(1);
});

'use strict';

// *** dom helper module START *** //
var dom = {

    addClass: function addClass(el, classString) {
        var classList = classString.split(' '),
            element = el;

        if (element.classList) {
            classList.forEach(function classLoop(currClass) {
                element.classList.add(currClass);
            });
        }
    },

    removeClass: function removeClass(el, classString) {
        var classList = classString.split(' '),
            element = el;

        if (element.classList) {
            classList.forEach(function classLoop(currClass) {
                element.classList.remove(currClass);
            });
        }
    }

};
// *** dom helper module END *** //


'use strict';

//// ***** GALLERY PLUGIN START ***** //
(function () {
    var Gallery = function () {

        // Define our constructor
        function Gallery() {
            _classCallCheck(this, Gallery);

            // Create global element references
            this.nextButton = null;
            this.prevButton = null;
            this.swipeLeft = null;
            this.swipeRight = null;
            this.play = null;
            this.playButton = null;

            // Define option defaults
            var defaults = {
                wrapper: "",
                imagesNumber: 5,
                imagesUrl: "",
                autoBuild: true,
                autoPlay: false,
                delay: 3000,
                clickable: true,
                touchEvents: false,
                counter: 0
            };

            // Create options by extending defaults with the passed in arguments
            if (arguments[0] && _typeof(arguments[0]) === "object") {
                this.options = extendDefaults(defaults, arguments[0]);
            }

            // If auto play option is true
            if (this.options.autoPlay) {
                this.playButton = document.querySelector('.info__button');
                dom.removeClass(this.playButton, 'is-hidden');
                this.play = true;
                this.autoPlay();
            }

            // If clickable option is true
            if (this.options.clickable) {
                this.nextButton = document.querySelector('.gallery__button--next');
                this.prevButton = document.querySelector('.gallery__button--prev');
                dom.removeClass(this.nextButton, 'is-hidden');
                dom.removeClass(this.prevButton, 'is-hidden');
            }

            // If touchEvents option is true
            if (this.options.touchEvents) {
                this.swipeLeft = true;
                this.swipeRight = true;

                initializeEvents.call(this, 'touchEvents');
            }

            // If auto build option is true
            if (this.options.autoBuild) {
                initializeEvents.call(this, 'clickEvents');
                this.build();
                this.counter();
            }
        }

        _createClass(Gallery, [{
            key: "build",
            value: function build() {
                var i = void 0;

                for (i = 1; i <= this.options.imagesNumber; i++) {
                    //instantiate the elements
                    var lzldImage = "https://kobe13.github.io/gallery/src/img/spinningwheel.gif",
                        imageUrl = this.options.imagesUrl,
                        wrapper = this.options.wrapper,
                        wrapperClass = wrapper.classList[0],
                        element = "<li class=\"gallery__element\">\n                                <img class=\"gallery__element__image\" data-src=\"" + (imageUrl + i) + "\" src=\"" + lzldImage + "\" alt=\"Image-" + i + "\" onload=\"lzld(this)\">\n                           </li>";

                    //append the li element to the gallery wrapper
                    wrapper.insertAdjacentHTML('beforeend', element);

                    // set the active class to the first element
                    if (i === 1) {
                        dom.addClass(document.querySelector('.' + wrapperClass + ' .gallery__element'), 'gallery__element--show');
                    }
                }
            }
        }, {
            key: "counter",
            value: function counter() {
                var counterTotal = document.querySelector('.info__counter--total'),
                    imagesNumber = this.options.imagesNumber;

                //update the counter with the total number of images
                counterTotal.innerHTML = imagesNumber;
            }
        }, {
            key: "showCurrentImage",
            value: function showCurrentImage() {
                var counterCurrent = document.querySelector('.info__counter--current'),
                    counter = this.options.counter,
                    images = document.querySelectorAll('.gallery__element'),
                    imagesLength = images.length,
                    imageToShow = Math.abs(counter % imagesLength),
                    imageActive = document.querySelector('.gallery__element--show');

                //prevent going backward when counter < 0
                if (Math.sign(counter) === -1) {
                    imageToShow = imagesLength - 1;
                    this.options.counter = imagesLength - 1;
                }

                //add/remove the active class to the right image
                dom.removeClass(imageActive, 'gallery__element--show');
                dom.addClass(images[imageToShow], 'gallery__element--show');

                //update the counter with the current image number
                counterCurrent.innerHTML = imageToShow + 1;
            }
        }, {
            key: "swipe",
            value: function swipe(direction) {

                if (direction === 'next') {
                    this.options.counter++;
                }

                if (direction === 'prev') {
                    this.options.counter--;
                }

                this.showCurrentImage();
            }
        }, {
            key: "autoPlay",
            value: function autoPlay() {
                var _this = this;

                var interval = this.options.delay,
                    playOn = setInterval(function () {
                    if (_this.play) {
                        _this.swipe.call(_this, 'next');
                    } else {
                        //if stopPlay() is called stop the autoplay
                        clearInterval(playOn);
                    }
                }, interval);
            }
        }, {
            key: "stopPlay",
            value: function stopPlay() {

                if (this.play) {
                    this.play = null;
                    this.playButton.innerHTML = "PLAY";
                } else {
                    this.play = true;
                    this.playButton.innerHTML = "STOP";
                    this.autoPlay();
                }
            }
        }]);

        return Gallery;
    }();

    // *****  Utility Methods ***** //

    //extend defaults with user options


    function extendDefaults(source, properties) {
        var property = void 0;

        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }

        return source;
    }

    // Initialize the events type
    function initializeEvents(type) {
        var _this2 = this;

        // Click events
        if (type === 'clickEvents') {

            if (this.nextButton) {
                this.nextButton.addEventListener('click', function (event) {
                    return _this2.swipe('next');
                });
            }

            if (this.prevButton) {
                this.prevButton.addEventListener('click', function (event) {
                    return _this2.swipe('prev');
                });
            }

            if (this.playButton) {
                if (this.play) {
                    this.playButton.addEventListener('click', function (event) {
                        return _this2.stopPlay();
                    });
                }

                if (!this.play) {
                    this.playButton.addEventListener('click', function () {
                        _this2.play = true;
                    });
                }
            }
        }

        // Touch events
        if (type === 'touchEvents') {

            var hammertime = new Hammer(galleryWrapper);

            if (this.swipeRight) {
                hammertime.on('swiperight', function (event) {
                    return _this2.swipe('prev');
                });
            }

            if (this.swipeLeft) {
                hammertime.on('swipeleft', function (event) {
                    return _this2.swipe('next');
                });
            }
        }
    }

    // ***** CREATE MY GALLERY ***** //
    var galleryWrapper = document.querySelector('.gallery__wrapper'),
        myImagesUrl = 'https://unsplash.it/600/350?image=';

    var myGallery = new Gallery({
        wrapper: galleryWrapper,
        imagesNumber: 50,
        imagesUrl: myImagesUrl,
        touchEvents: true,
        autoPlay: true
        // clickable: false
        // autoBuild: false
    });
})();
//# sourceMappingURL=main.transpile.js.map
