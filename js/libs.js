if (function(h, T) {
        function a(e) {
            var t = e.length,
                i = ke.type(e);
            return !ke.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === i || "function" !== i && (0 === t || "number" == typeof t && 0 < t && t - 1 in e))
        }

        function n(e, t, i, n) {
            if (ke.acceptData(e)) {
                var o, s, r = ke.expando,
                    a = e.nodeType,
                    l = a ? ke.cache : e,
                    c = a ? e[r] : e[r] && r;
                if (c && l[c] && (n || l[c].data) || i !== T || "string" != typeof t) return c || (c = a ? e[r] = K.pop() || ke.guid++ : r), l[c] || (l[c] = a ? {} : {
                    toJSON: ke.noop
                }), ("object" == typeof t || "function" == typeof t) && (n ? l[c] = ke.extend(l[c], t) : l[c].data = ke.extend(l[c].data, t)), s = l[c], n || (s.data || (s.data = {}), s = s.data), i !== T && (s[ke.camelCase(t)] = i), "string" == typeof t ? null == (o = s[t]) && (o = s[ke.camelCase(t)]) : o = s, o
            }
        }

        function i(e, t, i) {
            if (ke.acceptData(e)) {
                var n, o, s = e.nodeType,
                    r = s ? ke.cache : e,
                    a = s ? e[ke.expando] : ke.expando;
                if (r[a]) {
                    if (t && (n = i ? r[a] : r[a].data)) {
                        o = (t = ke.isArray(t) ? t.concat(ke.map(t, ke.camelCase)) : t in n ? [t] : (t = ke.camelCase(t)) in n ? [t] : t.split(" ")).length;
                        for (; o--;) delete n[t[o]];
                        if (i ? !c(n) : !ke.isEmptyObject(n)) return
                    }(i || (delete r[a].data, c(r[a]))) && (s ? ke.cleanData([e], !0) : ke.support.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
                }
            }
        }

        function l(e, t, i) {
            if (i === T && 1 === e.nodeType) {
                var n = "data-" + t.replace(we, "-$1").toLowerCase();
                if ("string" == typeof(i = e.getAttribute(n))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : be.test(i) ? ke.parseJSON(i) : i)
                    } catch (e) {}
                    ke.data(e, t, i)
                } else i = T
            }
            return i
        }

        function c(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ke.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function o() {
            return !0
        }

        function d() {
            return !1
        }

        function e() {
            try {
                return W.activeElement
            } catch (e) {}
        }

        function t(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function s(e, i, n) {
            if (ke.isFunction(i)) return ke.grep(e, function(e, t) {
                return !!i.call(e, t, e) !== n
            });
            if (i.nodeType) return ke.grep(e, function(e) {
                return e === i !== n
            });
            if ("string" == typeof i) {
                if (Me.test(i)) return ke.filter(i, e, n);
                i = ke.filter(i, e)
            }
            return ke.grep(e, function(e) {
                return 0 <= ke.inArray(e, i) !== n
            })
        }

        function m(e) {
            var t = Fe.split("|"),
                i = e.createDocumentFragment();
            if (i.createElement)
                for (; t.length;) i.createElement(t.pop());
            return i
        }

        function r(e, t) {
            return ke.nodeName(e, "table") && ke.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function v(e) {
            return e.type = (null !== ke.find.attr(e, "type")) + "/" + e.type, e
        }

        function g(e) {
            var t = Je.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function y(e, t) {
            for (var i, n = 0; null != (i = e[n]); n++) ke._data(i, "globalEval", !t || ke._data(t[n], "globalEval"))
        }

        function u(e, t) {
            if (1 === t.nodeType && ke.hasData(e)) {
                var i, n, o, s = ke._data(e),
                    r = ke._data(t, s),
                    a = s.events;
                if (a)
                    for (i in delete r.handle, r.events = {}, a)
                        for (n = 0, o = a[i].length; n < o; n++) ke.event.add(t, i, a[i][n]);
                r.data && (r.data = ke.extend({}, r.data))
            }
        }

        function p(e, t) {
            var i, n, o;
            if (1 === t.nodeType) {
                if (i = t.nodeName.toLowerCase(), !ke.support.noCloneEvent && t[ke.expando]) {
                    for (n in (o = ke._data(t)).events) ke.removeEvent(t, n, o.handle);
                    t.removeAttribute(ke.expando)
                }
                "script" === i && t.text !== e.text ? (v(t).text = e.text, g(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), ke.support.html5Clone && e.innerHTML && !ke.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Ke.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
            }
        }

        function b(e, t) {
            var i, n, o = 0,
                s = typeof e.getElementsByTagName !== z ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== z ? e.querySelectorAll(t || "*") : T;
            if (!s)
                for (s = [], i = e.childNodes || e; null != (n = i[o]); o++) !t || ke.nodeName(n, t) ? s.push(n) : ke.merge(s, b(n, t));
            return t === T || t && ke.nodeName(e, t) ? ke.merge([e], s) : s
        }

        function k(e) {
            Ke.test(e.type) && (e.defaultChecked = e.checked)
        }

        function f(e, t) {
            if (t in e) return t;
            for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, o = gt.length; o--;)
                if ((t = gt[o] + i) in e) return t;
            return n
        }

        function w(e, t) {
            return e = t || e, "none" === ke.css(e, "display") || !ke.contains(e.ownerDocument, e)
        }

        function x(e, t) {
            for (var i, n, o, s = [], r = 0, a = e.length; r < a; r++)(n = e[r]).style && (s[r] = ke._data(n, "olddisplay"), i = n.style.display, t ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && w(n) && (s[r] = ke._data(n, "olddisplay", $(n.nodeName)))) : s[r] || (o = w(n), (i && "none" !== i || !o) && ke._data(n, "olddisplay", o ? i : ke.css(n, "display"))));
            for (r = 0; r < a; r++)(n = e[r]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[r] || "" : "none"));
            return e
        }

        function C(e, t, i) {
            var n = dt.exec(t);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
        }

        function S(e, t, i, n, o) {
            for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; s < 4; s += 2) "margin" === i && (r += ke.css(e, i + vt[s], !0, o)), n ? ("content" === i && (r -= ke.css(e, "padding" + vt[s], !0, o)), "margin" !== i && (r -= ke.css(e, "border" + vt[s] + "Width", !0, o))) : (r += ke.css(e, "padding" + vt[s], !0, o), "padding" !== i && (r += ke.css(e, "border" + vt[s] + "Width", !0, o)));
            return r
        }

        function E(e, t, i) {
            var n = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                s = nt(e),
                r = ke.support.boxSizing && "border-box" === ke.css(e, "boxSizing", !1, s);
            if (o <= 0 || null == o) {
                if (((o = ot(e, t, s)) < 0 || null == o) && (o = e.style[t]), ut.test(o)) return o;
                n = r && (ke.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + S(e, t, i || (r ? "border" : "content"), n, s) + "px"
        }

        function $(e) {
            var t = W,
                i = ft[e];
            return i || ("none" !== (i = A(e, t)) && i || ((t = ((it = (it || ke("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || it[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), i = A(e, t), it.detach()), ft[e] = i), i
        }

        function A(e, t) {
            var i = ke(t.createElement(e)).appendTo(t.body),
                n = ke.css(i[0], "display");
            return i.remove(), n
        }

        function j(i, e, n, o) {
            var t;
            if (ke.isArray(e)) ke.each(e, function(e, t) {
                n || bt.test(i) ? o(i, t) : j(i + "[" + ("object" == typeof t ? e : "") + "]", t, n, o)
            });
            else if (n || "object" !== ke.type(e)) o(i, e);
            else
                for (t in e) j(i + "[" + t + "]", e[t], n, o)
        }

        function D(s) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var i, n = 0,
                    o = e.toLowerCase().match(se) || [];
                if (ke.isFunction(t))
                    for (; i = o[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(t)) : (s[i] = s[i] || []).push(t)
            }
        }

        function N(t, o, s, r) {
            function a(e) {
                var n;
                return l[e] = !0, ke.each(t[e] || [], function(e, t) {
                    var i = t(o, s, r);
                    return "string" != typeof i || c || l[i] ? c ? !(n = i) : void 0 : (o.dataTypes.unshift(i), a(i), !1)
                }), n
            }
            var l = {},
                c = t === Lt;
            return a(o.dataTypes[0]) || !l["*"] && a("*")
        }

        function O(e, t) {
            var i, n, o = ke.ajaxSettings.flatOptions || {};
            for (n in t) t[n] !== T && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && ke.extend(!0, e, i), e
        }

        function P() {
            try {
                return new h.XMLHttpRequest
            } catch (e) {}
        }

        function _() {
            return setTimeout(function() {
                Bt = T
            }), Bt = ke.now()
        }

        function L(e, t, i) {
            for (var n, o = (Kt[t] || []).concat(Kt["*"]), s = 0, r = o.length; s < r; s++)
                if (n = o[s].call(i, t, e)) return n
        }

        function M(s, e, t) {
            var i, r, n = 0,
                o = Vt.length,
                a = ke.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = Bt || _(), t = Math.max(0, c.startTime + c.duration - e), i = 1 - (t / c.duration || 0), n = 0, o = c.tweens.length; n < o; n++) c.tweens[n].run(i);
                    return a.notifyWith(s, [c, i, t]), i < 1 && o ? t : (a.resolveWith(s, [c]), !1)
                },
                c = a.promise({
                    elem: s,
                    props: ke.extend({}, e),
                    opts: ke.extend(!0, {
                        specialEasing: {}
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Bt || _(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var i = ke.Tween(s, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(e) {
                        var t = 0,
                            i = e ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; t < i; t++) c.tweens[t].run(1);
                        return e ? a.resolveWith(s, [c, e]) : a.rejectWith(s, [c, e]), this
                    }
                }),
                d = c.props;
            for (function(e, t) {
                    var i, n, o, s, r;
                    for (i in e)
                        if (o = t[n = ke.camelCase(i)], s = e[i], ke.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (r = ke.cssHooks[n]) && "expand" in r)
                            for (i in s = r.expand(s), delete e[n], s) i in e || (e[i] = s[i], t[i] = o);
                        else t[n] = o
                }(d, c.opts.specialEasing); n < o; n++)
                if (i = Vt[n].call(c, s, d, c.opts)) return i;
            return ke.map(d, L, c), ke.isFunction(c.opts.start) && c.opts.start.call(s, c), ke.fx.timer(ke.extend(l, {
                elem: s,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function H(e, t, i, n, o) {
            return new H.prototype.init(e, t, i, n, o)
        }

        function I(e, t) {
            var i, n = {
                    height: e
                },
                o = 0;
            for (t = t ? 1 : 0; o < 4; o += 2 - t) n["margin" + (i = vt[o])] = n["padding" + i] = e;
            return t && (n.opacity = n.width = e), n
        }

        function q(e) {
            return ke.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var F, R, z = typeof T,
            B = h.location,
            W = h.document,
            U = W.documentElement,
            G = h.jQuery,
            X = h.$,
            V = {},
            K = [],
            Q = "1.10.2",
            Y = K.concat,
            J = K.push,
            Z = K.slice,
            ee = K.indexOf,
            te = V.toString,
            ie = V.hasOwnProperty,
            ne = Q.trim,
            ke = function(e, t) {
                return new ke.fn.init(e, t, R)
            },
            oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            se = /\S+/g,
            re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            le = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ce = /^[\],:{}\s]*$/,
            de = /(?:^|:|,)(?:\s*\[)+/g,
            ue = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            pe = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            fe = /^-ms-/,
            he = /-([\da-z])/gi,
            me = function(e, t) {
                return t.toUpperCase()
            },
            ve = function(e) {
                (W.addEventListener || "load" === e.type || "complete" === W.readyState) && (ge(), ke.ready())
            },
            ge = function() {
                W.addEventListener ? (W.removeEventListener("DOMContentLoaded", ve, !1), h.removeEventListener("load", ve, !1)) : (W.detachEvent("onreadystatechange", ve), h.detachEvent("onload", ve))
            };
        ke.fn = ke.prototype = {
                jquery: Q,
                constructor: ke,
                init: function(e, t, i) {
                    var n, o;
                    if (!e) return this;
                    if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ke.isFunction(e) ? i.ready(e) : (e.selector !== T && (this.selector = e.selector, this.context = e.context), ke.makeArray(e, this));
                    if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : ae.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof ke ? t[0] : t, ke.merge(this, ke.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : W, !0)), le.test(n[1]) && ke.isPlainObject(t))
                            for (n in t) ke.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    if ((o = W.getElementById(n[2])) && o.parentNode) {
                        if (o.id !== n[2]) return i.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = W, this.selector = e, this
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return Z.call(this)
                },
                get: function(e) {
                    return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                },
                pushStack: function(e) {
                    var t = ke.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return ke.each(this, e, t)
                },
                ready: function(e) {
                    return ke.ready.promise().done(e), this
                },
                slice: function() {
                    return this.pushStack(Z.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        i = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= i && i < t ? [this[i]] : [])
                },
                map: function(i) {
                    return this.pushStack(ke.map(this, function(e, t) {
                        return i.call(e, t, e)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: J,
                sort: [].sort,
                splice: [].splice
            }, ke.fn.init.prototype = ke.fn, ke.extend = ke.fn.extend = function() {
                var e, t, i, n, o, s, r = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof r && (c = r, r = arguments[1] || {}, a = 2), "object" == typeof r || ke.isFunction(r) || (r = {}), l === a && (r = this, --a); a < l; a++)
                    if (null != (o = arguments[a]))
                        for (n in o) e = r[n], r !== (i = o[n]) && (c && i && (ke.isPlainObject(i) || (t = ke.isArray(i))) ? (t ? (t = !1, s = e && ke.isArray(e) ? e : []) : s = e && ke.isPlainObject(e) ? e : {}, r[n] = ke.extend(c, s, i)) : i !== T && (r[n] = i));
                return r
            }, ke.extend({
                expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
                noConflict: function(e) {
                    return h.$ === ke && (h.$ = X), e && h.jQuery === ke && (h.jQuery = G), ke
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ke.readyWait++ : ke.ready(!0)
                },
                ready: function(e) {
                    if (!0 === e ? !--ke.readyWait : !ke.isReady) {
                        if (!W.body) return setTimeout(ke.ready);
                        (ke.isReady = !0) !== e && 0 < --ke.readyWait || (F.resolveWith(W, [ke]), ke.fn.trigger && ke(W).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === ke.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === ke.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? V[te.call(e)] || "object" : typeof e
                },
                isPlainObject: function(e) {
                    var t;
                    if (!e || "object" !== ke.type(e) || e.nodeType || ke.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (e) {
                        return !1
                    }
                    if (ke.support.ownLast)
                        for (t in e) return ie.call(e, t);
                    for (t in e);
                    return t === T || ie.call(e, t)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw new Error(e)
                },
                parseHTML: function(e, t, i) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (i = t, t = !1), t = t || W;
                    var n = le.exec(e),
                        o = !i && [];
                    return n ? [t.createElement(n[1])] : (n = ke.buildFragment([e], t, o), o && ke(o).remove(), ke.merge([], n.childNodes))
                },
                parseJSON: function(e) {
                    return h.JSON && h.JSON.parse ? h.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = ke.trim(e)) && ce.test(e.replace(ue, "@").replace(pe, "]").replace(de, "")) ? new Function("return " + e)() : void ke.error("Invalid JSON: " + e)
                },
                parseXML: function(e) {
                    var t;
                    if (!e || "string" != typeof e) return null;
                    try {
                        h.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
                    } catch (e) {
                        t = T
                    }
                    return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ke.error("Invalid XML: " + e), t
                },
                noop: function() {},
                globalEval: function(e) {
                    e && ke.trim(e) && (h.execScript || function(e) {
                        h.eval.call(h, e)
                    })(e)
                },
                camelCase: function(e) {
                    return e.replace(fe, "ms-").replace(he, me)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, i) {
                    var n = 0,
                        o = e.length,
                        s = a(e);
                    if (i) {
                        if (s)
                            for (; n < o && !1 !== t.apply(e[n], i); n++);
                        else
                            for (n in e)
                                if (!1 === t.apply(e[n], i)) break
                    } else if (s)
                        for (; n < o && !1 !== t.call(e[n], n, e[n]); n++);
                    else
                        for (n in e)
                            if (!1 === t.call(e[n], n, e[n])) break; return e
                },
                trim: ne && !ne.call("\ufeff ") ? function(e) {
                    return null == e ? "" : ne.call(e)
                } : function(e) {
                    return null == e ? "" : (e + "").replace(re, "")
                },
                makeArray: function(e, t) {
                    var i = t || [];
                    return null != e && (a(Object(e)) ? ke.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
                },
                inArray: function(e, t, i) {
                    var n;
                    if (t) {
                        if (ee) return ee.call(t, e, i);
                        for (n = t.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                            if (i in t && t[i] === e) return i
                    }
                    return -1
                },
                merge: function(e, t) {
                    var i = t.length,
                        n = e.length,
                        o = 0;
                    if ("number" == typeof i)
                        for (; o < i; o++) e[n++] = t[o];
                    else
                        for (; t[o] !== T;) e[n++] = t[o++];
                    return e.length = n, e
                },
                grep: function(e, t, i) {
                    var n = [],
                        o = 0,
                        s = e.length;
                    for (i = !!i; o < s; o++) i !== !!t(e[o], o) && n.push(e[o]);
                    return n
                },
                map: function(e, t, i) {
                    var n, o = 0,
                        s = e.length,
                        r = [];
                    if (a(e))
                        for (; o < s; o++) null != (n = t(e[o], o, i)) && (r[r.length] = n);
                    else
                        for (o in e) null != (n = t(e[o], o, i)) && (r[r.length] = n);
                    return Y.apply([], r)
                },
                guid: 1,
                proxy: function(e, t) {
                    var i, n, o;
                    return "string" == typeof t && (o = e[t], t = e, e = o), ke.isFunction(e) ? (i = Z.call(arguments, 2), (n = function() {
                        return e.apply(t || this, i.concat(Z.call(arguments)))
                    }).guid = e.guid = e.guid || ke.guid++, n) : T
                },
                access: function(e, t, i, n, o, s, r) {
                    var a = 0,
                        l = e.length,
                        c = null == i;
                    if ("object" === ke.type(i))
                        for (a in o = !0, i) ke.access(e, t, a, i[a], !0, s, r);
                    else if (n !== T && (o = !0, ke.isFunction(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                            return c.call(ke(e), i)
                        })), t))
                        for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
                    return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(e, t, i, n) {
                    var o, s, r = {};
                    for (s in t) r[s] = e.style[s], e.style[s] = t[s];
                    for (s in o = i.apply(e, n || []), t) e.style[s] = r[s];
                    return o
                }
            }), ke.ready.promise = function(e) {
                if (!F)
                    if (F = ke.Deferred(), "complete" === W.readyState) setTimeout(ke.ready);
                    else if (W.addEventListener) W.addEventListener("DOMContentLoaded", ve, !1), h.addEventListener("load", ve, !1);
                else {
                    W.attachEvent("onreadystatechange", ve), h.attachEvent("onload", ve);
                    var i = !1;
                    try {
                        i = null == h.frameElement && W.documentElement
                    } catch (e) {}
                    i && i.doScroll && function t() {
                        if (!ke.isReady) {
                            try {
                                i.doScroll("left")
                            } catch (e) {
                                return setTimeout(t, 50)
                            }
                            ge(), ke.ready()
                        }
                    }()
                }
                return F.promise(e)
            }, ke.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                V["[object " + t + "]"] = t.toLowerCase()
            }), R = ke(W),
            function(i, o) {
                function w(e, t, i, n) {
                    var o, s, r, a, l, c, d, u, p, f;
                    if ((t ? t.ownerDocument || t : H) !== j && A(t), i = i || [], !e || "string" != typeof e) return i;
                    if (1 !== (a = (t = t || j).nodeType) && 9 !== a) return [];
                    if (N && !n) {
                        if (o = he.exec(e))
                            if (r = o[1]) {
                                if (9 === a) {
                                    if (!(s = t.getElementById(r)) || !s.parentNode) return i;
                                    if (s.id === r) return i.push(s), i
                                } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(r)) && L(t, s) && s.id === r) return i.push(s), i
                            } else {
                                if (o[2]) return Q.apply(i, t.getElementsByTagName(e)), i;
                                if ((r = o[3]) && g.getElementsByClassName && t.getElementsByClassName) return Q.apply(i, t.getElementsByClassName(r)), i
                            }
                        if (g.qsa && (!O || !O.test(e))) {
                            if (u = d = M, p = t, f = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                                for (c = h(e), (d = t.getAttribute("id")) ? u = d.replace(ge, "\\$&") : t.setAttribute("id", u), u = "[id='" + u + "'] ", l = c.length; l--;) c[l] = u + m(c[l]);
                                p = le.test(e) && t.parentNode || t, f = c.join(",")
                            }
                            if (f) try {
                                return Q.apply(i, p.querySelectorAll(f)), i
                            } catch (e) {} finally {
                                d || t.removeAttribute("id")
                            }
                        }
                    }
                    return function(e, t, i, n) {
                        var o, s, r, a, l, c = h(e);
                        if (!n && 1 === c.length) {
                            if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (r = s[0]).type && g.getById && 9 === t.nodeType && N && C.relative[s[1].type]) {
                                if (!(t = (C.find.ID(r.matches[0].replace(ye, be), t) || [])[0])) return i;
                                e = e.slice(s.shift().value.length)
                            }
                            for (o = pe.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !C.relative[a = r.type]);)
                                if ((l = C.find[a]) && (n = l(r.matches[0].replace(ye, be), le.test(s[0].type) && t.parentNode || t))) {
                                    if (s.splice(o, 1), !(e = n.length && m(s))) return Q.apply(i, n), i;
                                    break
                                }
                        }
                        return S(e, c)(n, t, !N, i, le.test(e)), i
                    }(e.replace(se, "$1"), t, i, n)
                }

                function e() {
                    var n = [];
                    return function e(t, i) {
                        return n.push(t += " ") > C.cacheLength && delete e[n.shift()], e[t] = i
                    }
                }

                function l(e) {
                    return e[M] = !0, e
                }

                function n(e) {
                    var t = j.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function t(e, t) {
                    for (var i = e.split("|"), n = e.length; n--;) C.attrHandle[i[n]] = t
                }

                function c(e, t) {
                    var i = t && e,
                        n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                    if (n) return n;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === t) return -1;
                    return e ? 1 : -1
                }

                function s(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function r(i) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === i
                    }
                }

                function a(r) {
                    return l(function(s) {
                        return s = +s, l(function(e, t) {
                            for (var i, n = r([], e.length, s), o = n.length; o--;) e[i = n[o]] && (e[i] = !(t[i] = e[i]))
                        })
                    })
                }

                function d() {}

                function h(e, t) {
                    var i, n, o, s, r, a, l, c = R[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (r = e, a = [], l = C.preFilter; r;) {
                        for (s in (!i || (n = re.exec(r))) && (n && (r = r.slice(n[0].length) || r), a.push(o = [])), i = !1, (n = ae.exec(r)) && (i = n.shift(), o.push({
                                value: i,
                                type: n[0].replace(se, " ")
                            }), r = r.slice(i.length)), C.filter) !(n = pe[s].exec(r)) || l[s] && !(n = l[s](n)) || (i = n.shift(), o.push({
                            value: i,
                            type: s,
                            matches: n
                        }), r = r.slice(i.length));
                        if (!i) break
                    }
                    return t ? r.length : r ? w.error(e) : R(e, a).slice(0)
                }

                function m(e) {
                    for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
                    return n
                }

                function u(a, e, t) {
                    var l = e.dir,
                        c = t && "parentNode" === l,
                        d = q++;
                    return e.first ? function(e, t, i) {
                        for (; e = e[l];)
                            if (1 === e.nodeType || c) return a(e, t, i)
                    } : function(e, t, i) {
                        var n, o, s, r = I + " " + d;
                        if (i) {
                            for (; e = e[l];)
                                if ((1 === e.nodeType || c) && a(e, t, i)) return !0
                        } else
                            for (; e = e[l];)
                                if (1 === e.nodeType || c)
                                    if ((o = (s = e[M] || (e[M] = {}))[l]) && o[0] === r) {
                                        if (!0 === (n = o[1]) || n === T) return !0 === n
                                    } else if ((o = s[l] = [r])[1] = a(e, t, i) || T, !0 === o[1]) return !0
                    }
                }

                function p(o) {
                    return 1 < o.length ? function(e, t, i) {
                        for (var n = o.length; n--;)
                            if (!o[n](e, t, i)) return !1;
                        return !0
                    } : o[0]
                }

                function x(e, t, i, n, o) {
                    for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (!i || i(s, n, o)) && (r.push(s), c && t.push(a));
                    return r
                }

                function y(f, h, m, v, g, e) {
                    return v && !v[M] && (v = y(v)), g && !g[M] && (g = y(g, e)), l(function(e, t, i, n) {
                        var o, s, r, a = [],
                            l = [],
                            c = t.length,
                            d = e || function(e, t, i) {
                                for (var n = 0, o = t.length; n < o; n++) w(e, t[n], i);
                                return i
                            }(h || "*", i.nodeType ? [i] : i, []),
                            u = !f || !e && h ? d : x(d, a, f, i, n),
                            p = m ? g || (e ? f : c || v) ? [] : t : u;
                        if (m && m(u, p, i, n), v)
                            for (o = x(p, l), v(o, [], i, n), s = o.length; s--;)(r = o[s]) && (p[l[s]] = !(u[l[s]] = r));
                        if (e) {
                            if (g || f) {
                                if (g) {
                                    for (o = [], s = p.length; s--;)(r = p[s]) && o.push(u[s] = r);
                                    g(null, p = [], o, n)
                                }
                                for (s = p.length; s--;)(r = p[s]) && -1 < (o = g ? J.call(e, r) : a[s]) && (e[o] = !(t[o] = r))
                            }
                        } else p = x(p === t ? p.splice(c, p.length) : p), g ? g(null, t, p, n) : Q.apply(t, p)
                    })
                }

                function f(e) {
                    for (var n, t, i, o = e.length, s = C.relative[e[0].type], r = s || C.relative[" "], a = s ? 1 : 0, l = u(function(e) {
                            return e === n
                        }, r, !0), c = u(function(e) {
                            return -1 < J.call(n, e)
                        }, r, !0), d = [function(e, t, i) {
                            return !s && (i || t !== E) || ((n = t).nodeType ? l(e, t, i) : c(e, t, i))
                        }]; a < o; a++)
                        if (t = C.relative[e[a].type]) d = [u(p(d), t)];
                        else {
                            if ((t = C.filter[e[a].type].apply(null, e[a].matches))[M]) {
                                for (i = ++a; i < o && !C.relative[e[i].type]; i++);
                                return y(1 < a && p(d), 1 < a && m(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(se, "$1"), t, a < i && f(e.slice(a, i)), i < o && f(e = e.slice(i)), i < o && m(e))
                            }
                            d.push(t)
                        }
                    return p(d)
                }
                var v, g, T, C, b, k, S, E, $, A, j, D, N, O, P, _, L, M = "sizzle" + -new Date,
                    H = i.document,
                    I = 0,
                    q = 0,
                    F = e(),
                    R = e(),
                    z = e(),
                    B = !1,
                    W = function(e, t) {
                        return e === t && (B = !0), 0
                    },
                    U = typeof o,
                    G = {}.hasOwnProperty,
                    X = [],
                    V = X.pop,
                    K = X.push,
                    Q = X.push,
                    Y = X.slice,
                    J = X.indexOf || function(e) {
                        for (var t = 0, i = this.length; t < i; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ee = "[\\x20\\t\\r\\n\\f]",
                    te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ie = te.replace("w", "w#"),
                    ne = "\\[" + ee + "*(" + te + ")" + ee + "*(?:([*^$|!~]?=)" + ee + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ie + ")|)|)" + ee + "*\\]",
                    oe = ":(" + te + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ne.replace(3, 8) + ")*)|.*)\\)|)",
                    se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                    re = new RegExp("^" + ee + "*," + ee + "*"),
                    ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                    le = new RegExp(ee + "*[+~]"),
                    ce = new RegExp("=" + ee + "*([^\\]'\"]*)" + ee + "*\\]", "g"),
                    de = new RegExp(oe),
                    ue = new RegExp("^" + ie + "$"),
                    pe = {
                        ID: new RegExp("^#(" + te + ")"),
                        CLASS: new RegExp("^\\.(" + te + ")"),
                        TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ne),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + Z + ")$", "i"),
                        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                    },
                    fe = /^[^{]+\{\s*\[native \w/,
                    he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    me = /^(?:input|select|textarea|button)$/i,
                    ve = /^h\d$/i,
                    ge = /'|\\/g,
                    ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                    be = function(e, t, i) {
                        var n = "0x" + t - 65536;
                        return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    };
                try {
                    Q.apply(X = Y.call(H.childNodes), H.childNodes), X[H.childNodes.length].nodeType
                } catch (e) {
                    Q = {
                        apply: X.length ? function(e, t) {
                            K.apply(e, Y.call(t))
                        } : function(e, t) {
                            for (var i = e.length, n = 0; e[i++] = t[n++];);
                            e.length = i - 1
                        }
                    }
                }
                for (v in k = w.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, g = w.support = {}, A = w.setDocument = function(e) {
                        var l = e ? e.ownerDocument || e : H,
                            t = l.defaultView;
                        return l !== j && 9 === l.nodeType && l.documentElement ? (D = (j = l).documentElement, N = !k(l), t && t.attachEvent && t !== t.top && t.attachEvent("onbeforeunload", function() {
                            A()
                        }), g.attributes = n(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), g.getElementsByTagName = n(function(e) {
                            return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
                        }), g.getElementsByClassName = n(function(e) {
                            return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                        }), g.getById = n(function(e) {
                            return D.appendChild(e).id = M, !l.getElementsByName || !l.getElementsByName(M).length
                        }), g.getById ? (C.find.ID = function(e, t) {
                            if (typeof t.getElementById !== U && N) {
                                var i = t.getElementById(e);
                                return i && i.parentNode ? [i] : []
                            }
                        }, C.filter.ID = function(e) {
                            var t = e.replace(ye, be);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (delete C.find.ID, C.filter.ID = function(e) {
                            var i = e.replace(ye, be);
                            return function(e) {
                                var t = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                                return t && t.value === i
                            }
                        }), C.find.TAG = g.getElementsByTagName ? function(e, t) {
                            return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
                        } : function(e, t) {
                            var i, n = [],
                                o = 0,
                                s = t.getElementsByTagName(e);
                            if ("*" !== e) return s;
                            for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                            return n
                        }, C.find.CLASS = g.getElementsByClassName && function(e, t) {
                            return typeof t.getElementsByClassName !== U && N ? t.getElementsByClassName(e) : void 0
                        }, P = [], O = [], (g.qsa = fe.test(l.querySelectorAll)) && (n(function(e) {
                            e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll(":checked").length || O.push(":checked")
                        }), n(function(e) {
                            var t = l.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                        })), (g.matchesSelector = fe.test(_ = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && n(function(e) {
                            g.disconnectedMatch = _.call(e, "div"), _.call(e, "[s!='']:x"), P.push("!=", oe)
                        }), O = O.length && new RegExp(O.join("|")), P = P.length && new RegExp(P.join("|")), L = fe.test(D.contains) || D.compareDocumentPosition ? function(e, t) {
                            var i = 9 === e.nodeType ? e.documentElement : e,
                                n = t && t.parentNode;
                            return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, W = D.compareDocumentPosition ? function(e, t) {
                            if (e === t) return B = !0, 0;
                            var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                            return i ? 1 & i || !g.sortDetached && t.compareDocumentPosition(e) === i ? e === l || L(H, e) ? -1 : t === l || L(H, t) ? 1 : $ ? J.call($, e) - J.call($, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                        } : function(e, t) {
                            var i, n = 0,
                                o = e.parentNode,
                                s = t.parentNode,
                                r = [e],
                                a = [t];
                            if (e === t) return B = !0, 0;
                            if (!o || !s) return e === l ? -1 : t === l ? 1 : o ? -1 : s ? 1 : $ ? J.call($, e) - J.call($, t) : 0;
                            if (o === s) return c(e, t);
                            for (i = e; i = i.parentNode;) r.unshift(i);
                            for (i = t; i = i.parentNode;) a.unshift(i);
                            for (; r[n] === a[n];) n++;
                            return n ? c(r[n], a[n]) : r[n] === H ? -1 : a[n] === H ? 1 : 0
                        }, l) : j
                    }, w.matches = function(e, t) {
                        return w(e, null, null, t)
                    }, w.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== j && A(e), t = t.replace(ce, "='$1']"), g.matchesSelector && N && (!P || !P.test(t)) && (!O || !O.test(t))) try {
                            var i = _.call(e, t);
                            if (i || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                        } catch (e) {}
                        return 0 < w(t, j, null, [e]).length
                    }, w.contains = function(e, t) {
                        return (e.ownerDocument || e) !== j && A(e), L(e, t)
                    }, w.attr = function(e, t) {
                        (e.ownerDocument || e) !== j && A(e);
                        var i = C.attrHandle[t.toLowerCase()],
                            n = i && G.call(C.attrHandle, t.toLowerCase()) ? i(e, t, !N) : o;
                        return n === o ? g.attributes || !N ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null : n
                    }, w.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, w.uniqueSort = function(e) {
                        var t, i = [],
                            n = 0,
                            o = 0;
                        if (B = !g.detectDuplicates, $ = !g.sortStable && e.slice(0), e.sort(W), B) {
                            for (; t = e[o++];) t === e[o] && (n = i.push(o));
                            for (; n--;) e.splice(i[n], 1)
                        }
                        return e
                    }, b = w.getText = function(e) {
                        var t, i = "",
                            n = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) i += b(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[n]; n++) i += b(t);
                        return i
                    }, (C = w.selectors = {
                        cacheLength: 50,
                        createPseudo: l,
                        match: pe,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(ye, be), e[3] = (e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || w.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && w.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, i = !e[5] && e[2];
                                return pe.CHILD.test(e[0]) ? null : (e[3] && e[4] !== o ? e[2] = e[4] : i && de.test(i) && (t = h(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(ye, be).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = F[e + " "];
                                return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(i, n, o) {
                                return function(e) {
                                    var t = w.attr(e, i);
                                    return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === o : "!=" === n ? t !== o : "^=" === n ? o && 0 === t.indexOf(o) : "*=" === n ? o && -1 < t.indexOf(o) : "$=" === n ? o && t.slice(-o.length) === o : "~=" === n ? -1 < (" " + t + " ").indexOf(o) : "|=" === n && (t === o || t.slice(0, o.length + 1) === o + "-"))
                                }
                            },
                            CHILD: function(f, e, t, h, m) {
                                var v = "nth" !== f.slice(0, 3),
                                    g = "last" !== f.slice(-4),
                                    y = "of-type" === e;
                                return 1 === h && 0 === m ? function(e) {
                                    return !!e.parentNode
                                } : function(e, t, i) {
                                    var n, o, s, r, a, l, c = v !== g ? "nextSibling" : "previousSibling",
                                        d = e.parentNode,
                                        u = y && e.nodeName.toLowerCase(),
                                        p = !i && !y;
                                    if (d) {
                                        if (v) {
                                            for (; c;) {
                                                for (s = e; s = s[c];)
                                                    if (y ? s.nodeName.toLowerCase() === u : 1 === s.nodeType) return !1;
                                                l = c = "only" === f && !l && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (l = [g ? d.firstChild : d.lastChild], g && p) {
                                            for (a = (n = (o = d[M] || (d[M] = {}))[f] || [])[0] === I && n[1], r = n[0] === I && n[2], s = a && d.childNodes[a]; s = ++a && s && s[c] || (r = a = 0) || l.pop();)
                                                if (1 === s.nodeType && ++r && s === e) {
                                                    o[f] = [I, a, r];
                                                    break
                                                }
                                        } else if (p && (n = (e[M] || (e[M] = {}))[f]) && n[0] === I) r = n[1];
                                        else
                                            for (;
                                                (s = ++a && s && s[c] || (r = a = 0) || l.pop()) && ((y ? s.nodeName.toLowerCase() !== u : 1 !== s.nodeType) || !++r || (p && ((s[M] || (s[M] = {}))[f] = [I, r]), s !== e)););
                                        return (r -= m) === h || r % h == 0 && 0 <= r / h
                                    }
                                }
                            },
                            PSEUDO: function(e, s) {
                                var t, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || w.error("unsupported pseudo: " + e);
                                return r[M] ? r(s) : 1 < r.length ? (t = [e, e, "", s], C.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function(e, t) {
                                    for (var i, n = r(e, s), o = n.length; o--;) e[i = J.call(e, n[o])] = !(t[i] = n[o])
                                }) : function(e) {
                                    return r(e, 0, t)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: l(function(e) {
                                var n = [],
                                    o = [],
                                    a = S(e.replace(se, "$1"));
                                return a[M] ? l(function(e, t, i, n) {
                                    for (var o, s = a(e, null, n, []), r = e.length; r--;)(o = s[r]) && (e[r] = !(t[r] = o))
                                }) : function(e, t, i) {
                                    return n[0] = e, a(n, null, i, o), !o.pop()
                                }
                            }),
                            has: l(function(t) {
                                return function(e) {
                                    return 0 < w(t, e).length
                                }
                            }),
                            contains: l(function(t) {
                                return function(e) {
                                    return -1 < (e.textContent || e.innerText || b(e)).indexOf(t)
                                }
                            }),
                            lang: l(function(i) {
                                return ue.test(i || "") || w.error("unsupported lang: " + i), i = i.replace(ye, be).toLowerCase(),
                                    function(e) {
                                        var t;
                                        do {
                                            if (t = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(e) {
                                var t = i.location && i.location.hash;
                                return t && t.slice(1) === e.id
                            },
                            root: function(e) {
                                return e === D
                            },
                            focus: function(e) {
                                return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function(e) {
                                return !1 === e.disabled
                            },
                            disabled: function(e) {
                                return !0 === e.disabled
                            },
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !C.pseudos.empty(e)
                            },
                            header: function(e) {
                                return ve.test(e.nodeName)
                            },
                            input: function(e) {
                                return me.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                            },
                            first: a(function() {
                                return [0]
                            }),
                            last: a(function(e, t) {
                                return [t - 1]
                            }),
                            eq: a(function(e, t, i) {
                                return [i < 0 ? i + t : i]
                            }),
                            even: a(function(e, t) {
                                for (var i = 0; i < t; i += 2) e.push(i);
                                return e
                            }),
                            odd: a(function(e, t) {
                                for (var i = 1; i < t; i += 2) e.push(i);
                                return e
                            }),
                            lt: a(function(e, t, i) {
                                for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
                                return e
                            }),
                            gt: a(function(e, t, i) {
                                for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                                return e
                            })
                        }
                    }).pseudos.nth = C.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) C.pseudos[v] = s(v);
                for (v in {
                        submit: !0,
                        reset: !0
                    }) C.pseudos[v] = r(v);
                d.prototype = C.filters = C.pseudos, C.setFilters = new d, S = w.compile = function(e, t) {
                    var i, v, g, y, b, k, n, o = [],
                        s = [],
                        r = z[e + " "];
                    if (!r) {
                        for (t || (t = h(e)), i = t.length; i--;)(r = f(t[i]))[M] ? o.push(r) : s.push(r);
                        r = z(e, (v = s, b = (y = 0) < (g = o).length, k = 0 < v.length, n = function(e, t, i, n, o) {
                            var s, r, a, l = [],
                                c = 0,
                                d = "0",
                                u = e && [],
                                p = null != o,
                                f = E,
                                h = e || k && C.find.TAG("*", o && t.parentNode || t),
                                m = I += null == f ? 1 : Math.random() || .1;
                            for (p && (E = t !== j && t, T = y); null != (s = h[d]); d++) {
                                if (k && s) {
                                    for (r = 0; a = v[r++];)
                                        if (a(s, t, i)) {
                                            n.push(s);
                                            break
                                        }
                                    p && (I = m, T = ++y)
                                }
                                b && ((s = !a && s) && c--, e && u.push(s))
                            }
                            if (c += d, b && d !== c) {
                                for (r = 0; a = g[r++];) a(u, l, t, i);
                                if (e) {
                                    if (0 < c)
                                        for (; d--;) u[d] || l[d] || (l[d] = V.call(n));
                                    l = x(l)
                                }
                                Q.apply(n, l), p && !e && 0 < l.length && 1 < c + g.length && w.uniqueSort(n)
                            }
                            return p && (I = m, E = f), u
                        }, b ? l(n) : n))
                    }
                    return r
                }, g.sortStable = M.split("").sort(W).join("") === M, g.detectDuplicates = B, A(), g.sortDetached = n(function(e) {
                    return 1 & e.compareDocumentPosition(j.createElement("div"))
                }), n(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || t("type|href|height|width", function(e, t, i) {
                    return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), g.attributes && n(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || t("value", function(e, t, i) {
                    return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), n(function(e) {
                    return null == e.getAttribute("disabled")
                }) || t(Z, function(e, t, i) {
                    var n;
                    return i ? void 0 : (n = e.getAttributeNode(t)) && n.specified ? n.value : !0 === e[t] ? t.toLowerCase() : null
                }), ke.find = w, ke.expr = w.selectors, ke.expr[":"] = ke.expr.pseudos, ke.unique = w.uniqueSort, ke.text = w.getText, ke.isXMLDoc = w.isXML, ke.contains = w.contains
            }(h);
        var ye = {};
        ke.Callbacks = function(o) {
            var e, i;
            o = "string" == typeof o ? ye[o] || (i = ye[e = o] = {}, ke.each(e.match(se) || [], function(e, t) {
                i[t] = !0
            }), i) : ke.extend({}, o);
            var n, t, s, r, a, l, c = [],
                d = !o.once && [],
                u = function(e) {
                    for (t = o.memory && e, s = !0, a = l || 0, l = 0, r = c.length, n = !0; c && a < r; a++)
                        if (!1 === c[a].apply(e[0], e[1]) && o.stopOnFalse) {
                            t = !1;
                            break
                        }
                    n = !1, c && (d ? d.length && u(d.shift()) : t ? c = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (c) {
                            var e = c.length;
                            ! function n(e) {
                                ke.each(e, function(e, t) {
                                    var i = ke.type(t);
                                    "function" === i ? o.unique && p.has(t) || c.push(t) : t && t.length && "string" !== i && n(t)
                                })
                            }(arguments), n ? r = c.length : t && (l = e, u(t))
                        }
                        return this
                    },
                    remove: function() {
                        return c && ke.each(arguments, function(e, t) {
                            for (var i; - 1 < (i = ke.inArray(t, c, i));) c.splice(i, 1), n && (i <= r && r--, i <= a && a--)
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < ke.inArray(e, c) : !(!c || !c.length)
                    },
                    empty: function() {
                        return c = [], r = 0, this
                    },
                    disable: function() {
                        return c = d = t = T, this
                    },
                    disabled: function() {
                        return !c
                    },
                    lock: function() {
                        return d = T, t || p.disable(), this
                    },
                    locked: function() {
                        return !d
                    },
                    fireWith: function(e, t) {
                        return !c || s && !d || (t = [e, (t = t || []).slice ? t.slice() : t], n ? d.push(t) : u(t)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!s
                    }
                };
            return p
        }, ke.extend({
            Deferred: function(e) {
                var r = [
                        ["resolve", "done", ke.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ke.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ke.Callbacks("memory")]
                    ],
                    o = "pending",
                    a = {
                        state: function() {
                            return o
                        },
                        always: function() {
                            return l.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var s = arguments;
                            return ke.Deferred(function(o) {
                                ke.each(r, function(e, t) {
                                    var i = t[0],
                                        n = ke.isFunction(s[e]) && s[e];
                                    l[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && ke.isFunction(e.promise) ? e.promise().done(o.resolve).fail(o.reject).progress(o.notify) : o[i + "With"](this === a ? o.promise() : this, n ? [e] : arguments)
                                    })
                                }), s = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ke.extend(e, a) : a
                        }
                    },
                    l = {};
                return a.pipe = a.then, ke.each(r, function(e, t) {
                    var i = t[2],
                        n = t[3];
                    a[t[1]] = i.add, n && i.add(function() {
                        o = n
                    }, r[1 ^ e][2].disable, r[2][2].lock), l[t[0]] = function() {
                        return l[t[0] + "With"](this === l ? a : this, arguments), this
                    }, l[t[0] + "With"] = i.fireWith
                }), a.promise(l), e && e.call(l, l), l
            },
            when: function(e) {
                var o, t, i, n = 0,
                    s = Z.call(arguments),
                    r = s.length,
                    a = 1 !== r || e && ke.isFunction(e.promise) ? r : 0,
                    l = 1 === a ? e : ke.Deferred(),
                    c = function(t, i, n) {
                        return function(e) {
                            i[t] = this, n[t] = 1 < arguments.length ? Z.call(arguments) : e, n === o ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (1 < r)
                    for (o = new Array(r), t = new Array(r), i = new Array(r); n < r; n++) s[n] && ke.isFunction(s[n].promise) ? s[n].promise().done(c(n, i, s)).fail(l.reject).progress(c(n, t, o)) : --a;
                return a || l.resolveWith(i, s), l.promise()
            }
        }), ke.support = function(s) {
            var e, t, i, n, o, r, a, l, c, d = W.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = d.getElementsByTagName("*") || [], !(t = d.getElementsByTagName("a")[0]) || !t.style || !e.length) return s;
            r = (n = W.createElement("select")).appendChild(W.createElement("option")), i = d.getElementsByTagName("input")[0], t.style.cssText = "top:1px;float:left;opacity:.5", s.getSetAttribute = "t" !== d.className, s.leadingWhitespace = 3 === d.firstChild.nodeType, s.tbody = !d.getElementsByTagName("tbody").length, s.htmlSerialize = !!d.getElementsByTagName("link").length, s.style = /top/.test(t.getAttribute("style")), s.hrefNormalized = "/a" === t.getAttribute("href"), s.opacity = /^0.5/.test(t.style.opacity), s.cssFloat = !!t.style.cssFloat, s.checkOn = !!i.value, s.optSelected = r.selected, s.enctype = !!W.createElement("form").enctype, s.html5Clone = "<:nav></:nav>" !== W.createElement("nav").cloneNode(!0).outerHTML, s.inlineBlockNeedsLayout = !1, s.shrinkWrapBlocks = !1, s.pixelPosition = !1, s.deleteExpando = !0, s.noCloneEvent = !0, s.reliableMarginRight = !0, s.boxSizingReliable = !0, i.checked = !0, s.noCloneChecked = i.cloneNode(!0).checked, n.disabled = !0, s.optDisabled = !r.disabled;
            try {
                delete d.test
            } catch (e) {
                s.deleteExpando = !1
            }
            for (c in (i = W.createElement("input")).setAttribute("value", ""), s.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), s.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), (o = W.createDocumentFragment()).appendChild(i), s.appendChecked = i.checked, s.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
                    s.noCloneEvent = !1
                }), d.cloneNode(!0).click()), {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) d.setAttribute(a = "on" + c, "t"), s[c + "Bubbles"] = a in h || !1 === d.attributes[a].expando;
            for (c in d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", s.clearCloneStyle = "content-box" === d.style.backgroundClip, ke(s)) break;
            return s.ownLast = "0" !== c, ke(function() {
                var e, t, i, n = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    o = W.getElementsByTagName("body")[0];
                o && ((e = W.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(e).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (i = d.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", s.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ke.swap(o, null != o.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    s.boxSizing = 4 === d.offsetWidth
                }), h.getComputedStyle && (s.pixelPosition = "1%" !== (h.getComputedStyle(d, null) || {}).top, s.boxSizingReliable = "4px" === (h.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, (t = d.appendChild(W.createElement("div"))).style.cssText = d.style.cssText = n, t.style.marginRight = t.style.width = "0", d.style.width = "1px", s.reliableMarginRight = !parseFloat((h.getComputedStyle(t, null) || {}).marginRight)), typeof d.style.zoom !== z && (d.innerHTML = "", d.style.cssText = n + "width:1px;padding:1px;display:inline;zoom:1", s.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", s.shrinkWrapBlocks = 3 !== d.offsetWidth, s.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(e), e = d = i = t = null)
            }), e = n = o = r = t = i = null, s
        }({});
        var be = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            we = /([A-Z])/g;
        ke.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? ke.cache[e[ke.expando]] : e[ke.expando]) && !c(e)
            },
            data: function(e, t, i) {
                return n(e, t, i)
            },
            removeData: function(e, t) {
                return i(e, t)
            },
            _data: function(e, t, i) {
                return n(e, t, i, !0)
            },
            _removeData: function(e, t) {
                return i(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
                var t = e.nodeName && ke.noData[e.nodeName.toLowerCase()];
                return !t || !0 !== t && e.getAttribute("classid") === t
            }
        }), ke.fn.extend({
            data: function(e, t) {
                var i, n, o = null,
                    s = 0,
                    r = this[0];
                if (e !== T) return "object" == typeof e ? this.each(function() {
                    ke.data(this, e)
                }) : 1 < arguments.length ? this.each(function() {
                    ke.data(this, e, t)
                }) : r ? l(r, e, ke.data(r, e)) : null;
                if (this.length && (o = ke.data(r), 1 === r.nodeType && !ke._data(r, "parsedAttrs"))) {
                    for (i = r.attributes; s < i.length; s++) 0 === (n = i[s].name).indexOf("data-") && l(r, n = ke.camelCase(n.slice(5)), o[n]);
                    ke._data(r, "parsedAttrs", !0)
                }
                return o
            },
            removeData: function(e) {
                return this.each(function() {
                    ke.removeData(this, e)
                })
            }
        }), ke.extend({
            queue: function(e, t, i) {
                var n;
                return e ? (t = (t || "fx") + "queue", n = ke._data(e, t), i && (!n || ke.isArray(i) ? n = ke._data(e, t, ke.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var i = ke.queue(e, t),
                    n = i.length,
                    o = i.shift(),
                    s = ke._queueHooks(e, t);
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, function() {
                    ke.dequeue(e, t)
                }, s)), !n && s && s.empty.fire()
            },
            _queueHooks: function(e, t) {
                var i = t + "queueHooks";
                return ke._data(e, i) || ke._data(e, i, {
                    empty: ke.Callbacks("once memory").add(function() {
                        ke._removeData(e, t + "queue"), ke._removeData(e, i)
                    })
                })
            }
        }), ke.fn.extend({
            queue: function(t, i) {
                var e = 2;
                return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? ke.queue(this[0], t) : i === T ? this : this.each(function() {
                    var e = ke.queue(this, t, i);
                    ke._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ke.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ke.dequeue(this, e)
                })
            },
            delay: function(n, e) {
                return n = ke.fx && ke.fx.speeds[n] || n, e = e || "fx", this.queue(e, function(e, t) {
                    var i = setTimeout(e, n);
                    t.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var i, n = 1,
                    o = ke.Deferred(),
                    s = this,
                    r = this.length,
                    a = function() {
                        --n || o.resolveWith(s, [s])
                    };
                for ("string" != typeof e && (t = e, e = T), e = e || "fx"; r--;)(i = ke._data(s[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(t)
            }
        });
        var xe, Te, Ce = /[\t\r\n\f]/g,
            Se = /\r/g,
            Ee = /^(?:input|select|textarea|button|object)$/i,
            $e = /^(?:a|area)$/i,
            Ae = /^(?:checked|selected)$/i,
            je = ke.support.getSetAttribute,
            De = ke.support.input;
        ke.fn.extend({
            attr: function(e, t) {
                return ke.access(this, ke.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ke.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return ke.access(this, ke.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return e = ke.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = T, delete this[e]
                    } catch (e) {}
                })
            },
            addClass: function(t) {
                var e, i, n, o, s, r = 0,
                    a = this.length,
                    l = "string" == typeof t && t;
                if (ke.isFunction(t)) return this.each(function(e) {
                    ke(this).addClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(se) || []; r < a; r++)
                        if (n = 1 === (i = this[r]).nodeType && (i.className ? (" " + i.className + " ").replace(Ce, " ") : " ")) {
                            for (s = 0; o = e[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            i.className = ke.trim(n)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, o, s, r = 0,
                    a = this.length,
                    l = 0 === arguments.length || "string" == typeof t && t;
                if (ke.isFunction(t)) return this.each(function(e) {
                    ke(this).removeClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(se) || []; r < a; r++)
                        if (n = 1 === (i = this[r]).nodeType && (i.className ? (" " + i.className + " ").replace(Ce, " ") : "")) {
                            for (s = 0; o = e[s++];)
                                for (; 0 <= n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                            i.className = t ? ke.trim(n) : ""
                        }
                return this
            },
            toggleClass: function(o, t) {
                var s = typeof o;
                return "boolean" == typeof t && "string" === s ? t ? this.addClass(o) : this.removeClass(o) : ke.isFunction(o) ? this.each(function(e) {
                    ke(this).toggleClass(o.call(this, e, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === s)
                        for (var e, t = 0, i = ke(this), n = o.match(se) || []; e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                    else(s === z || "boolean" === s) && (this.className && ke._data(this, "__className__", this.className), this.className = this.className || !1 === o ? "" : ke._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", i = 0, n = this.length; i < n; i++)
                    if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(Ce, " ").indexOf(t)) return !0;
                return !1
            },
            val: function(i) {
                var e, n, o, t = this[0];
                return arguments.length ? (o = ke.isFunction(i), this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = o ? i.call(this, e, ke(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : ke.isArray(t) && (t = ke.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })), (n = ke.valHooks[this.type] || ke.valHooks[this.nodeName.toLowerCase()]) && "set" in n && n.set(this, t, "value") !== T || (this.value = t))
                })) : t ? (n = ke.valHooks[t.type] || ke.valHooks[t.nodeName.toLowerCase()]) && "get" in n && (e = n.get(t, "value")) !== T ? e : "string" == typeof(e = t.value) ? e.replace(Se, "") : null == e ? "" : e : void 0
            }
        }), ke.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ke.find.attr(e, "value");
                        return null != t ? t : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, i, n = e.options, o = e.selectedIndex, s = "select-one" === e.type || o < 0, r = s ? null : [], a = s ? o + 1 : n.length, l = o < 0 ? a : s ? o : 0; l < a; l++)
                            if (((i = n[l]).selected || l === o) && (ke.support.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ke.nodeName(i.parentNode, "optgroup"))) {
                                if (t = ke(i).val(), s) return t;
                                r.push(t)
                            }
                        return r
                    },
                    set: function(e, t) {
                        for (var i, n, o = e.options, s = ke.makeArray(t), r = o.length; r--;)((n = o[r]).selected = 0 <= ke.inArray(ke(n).val(), s)) && (i = !0);
                        return i || (e.selectedIndex = -1), s
                    }
                }
            },
            attr: function(e, t, i) {
                var n, o, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === z ? ke.prop(e, t, i) : (1 === s && ke.isXMLDoc(e) || (t = t.toLowerCase(), n = ke.attrHooks[t] || (ke.expr.match.bool.test(t) ? Te : xe)), i === T ? n && "get" in n && null !== (o = n.get(e, t)) ? o : null == (o = ke.find.attr(e, t)) ? T : o : null !== i ? n && "set" in n && (o = n.set(e, i, t)) !== T ? o : (e.setAttribute(t, i + ""), i) : void ke.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var i, n, o = 0,
                    s = t && t.match(se);
                if (s && 1 === e.nodeType)
                    for (; i = s[o++];) n = ke.propFix[i] || i, ke.expr.match.bool.test(i) ? De && je || !Ae.test(i) ? e[n] = !1 : e[ke.camelCase("default-" + i)] = e[n] = !1 : ke.attr(e, i, ""), e.removeAttribute(je ? i : n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ke.support.radioValue && "radio" === t && ke.nodeName(e, "input")) {
                            var i = e.value;
                            return e.setAttribute("type", t), i && (e.value = i), t
                        }
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(e, t, i) {
                var n, o, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !ke.isXMLDoc(e)) && (t = ke.propFix[t] || t, o = ke.propHooks[t]), i !== T ? o && "set" in o && (n = o.set(e, i, t)) !== T ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ke.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Ee.test(e.nodeName) || $e.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), Te = {
            set: function(e, t, i) {
                return !1 === t ? ke.removeAttr(e, i) : De && je || !Ae.test(i) ? e.setAttribute(!je && ke.propFix[i] || i, i) : e[ke.camelCase("default-" + i)] = e[i] = !0, i
            }
        }, ke.each(ke.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var s = ke.expr.attrHandle[t] || ke.find.attr;
            ke.expr.attrHandle[t] = De && je || !Ae.test(t) ? function(e, t, i) {
                var n = ke.expr.attrHandle[t],
                    o = i ? T : (ke.expr.attrHandle[t] = T) != s(e, t, i) ? t.toLowerCase() : null;
                return ke.expr.attrHandle[t] = n, o
            } : function(e, t, i) {
                return i ? T : e[ke.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), De && je || (ke.attrHooks.value = {
            set: function(e, t, i) {
                return ke.nodeName(e, "input") ? void(e.defaultValue = t) : xe && xe.set(e, t, i)
            }
        }), je || (xe = {
            set: function(e, t, i) {
                var n = e.getAttributeNode(i);
                return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i) ? t : T
            }
        }, ke.expr.attrHandle.id = ke.expr.attrHandle.name = ke.expr.attrHandle.coords = function(e, t, i) {
            var n;
            return i ? T : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
        }, ke.valHooks.button = {
            get: function(e, t) {
                var i = e.getAttributeNode(t);
                return i && i.specified ? i.value : T
            },
            set: xe.set
        }, ke.attrHooks.contenteditable = {
            set: function(e, t, i) {
                xe.set(e, "" !== t && t, i)
            }
        }, ke.each(["width", "height"], function(e, i) {
            ke.attrHooks[i] = {
                set: function(e, t) {
                    return "" === t ? (e.setAttribute(i, "auto"), t) : void 0
                }
            }
        })), ke.support.hrefNormalized || ke.each(["href", "src"], function(e, t) {
            ke.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ke.support.style || (ke.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || T
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), ke.support.optSelected || (ke.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), ke.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ke.propFix[this.toLowerCase()] = this
        }), ke.support.enctype || (ke.propFix.enctype = "encoding"), ke.each(["radio", "checkbox"], function() {
            ke.valHooks[this] = {
                set: function(e, t) {
                    return ke.isArray(t) ? e.checked = 0 <= ke.inArray(ke(e).val(), t) : void 0
                }
            }, ke.support.checkOn || (ke.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Ne = /^(?:input|select|textarea)$/i,
            Oe = /^key/,
            Pe = /^(?:mouse|contextmenu)|click/,
            _e = /^(?:focusinfocus|focusoutblur)$/,
            Le = /^([^.]*)(?:\.(.+)|)$/;
        ke.event = {
            global: {},
            add: function(e, t, i, n, o) {
                var s, r, a, l, c, d, u, p, f, h, m, v = ke._data(e);
                if (v) {
                    for (i.handler && (i = (l = i).handler, o = l.selector), i.guid || (i.guid = ke.guid++), (r = v.events) || (r = v.events = {}), (d = v.handle) || ((d = v.handle = function(e) {
                            return typeof ke === z || e && ke.event.triggered === e.type ? T : ke.event.dispatch.apply(d.elem, arguments)
                        }).elem = e), a = (t = (t || "").match(se) || [""]).length; a--;) f = m = (s = Le.exec(t[a]) || [])[1], h = (s[2] || "").split(".").sort(), f && (c = ke.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = ke.event.special[f] || {}, u = ke.extend({
                        type: f,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && ke.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, l), (p = r[f]) || ((p = r[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, n, h, d) || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), ke.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, i, n, o) {
                var s, r, a, l, c, d, u, p, f, h, m, v = ke.hasData(e) && ke._data(e);
                if (v && (d = v.events)) {
                    for (c = (t = (t || "").match(se) || [""]).length; c--;)
                        if (f = m = (a = Le.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                            for (u = ke.event.special[f] || {}, p = d[f = (n ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = p.length; s--;) r = p[s], !o && m !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (p.splice(s, 1), r.selector && p.delegateCount--, u.remove && u.remove.call(e, r));
                            l && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, v.handle) || ke.removeEvent(e, f, v.handle), delete d[f])
                        } else
                            for (f in d) ke.event.remove(e, f + t[c], i, n, !0);
                    ke.isEmptyObject(d) && (delete v.handle, ke._removeData(e, "events"))
                }
            },
            trigger: function(e, t, i, n) {
                var o, s, r, a, l, c, d, u = [i || W],
                    p = ie.call(e, "type") ? e.type : e,
                    f = ie.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = c = i = i || W, 3 !== i.nodeType && 8 !== i.nodeType && !_e.test(p + ke.event.triggered) && (0 <= p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), s = p.indexOf(":") < 0 && "on" + p, (e = e[ke.expando] ? e : new ke.Event(p, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = T, e.target || (e.target = i), t = null == t ? [e] : ke.makeArray(t, [e]), l = ke.event.special[p] || {}, n || !l.trigger || !1 !== l.trigger.apply(i, t))) {
                    if (!n && !l.noBubble && !ke.isWindow(i)) {
                        for (a = l.delegateType || p, _e.test(a + p) || (r = r.parentNode); r; r = r.parentNode) u.push(r), c = r;
                        c === (i.ownerDocument || W) && u.push(c.defaultView || c.parentWindow || h)
                    }
                    for (d = 0;
                        (r = u[d++]) && !e.isPropagationStopped();) e.type = 1 < d ? a : l.bindType || p, (o = (ke._data(r, "events") || {})[e.type] && ke._data(r, "handle")) && o.apply(r, t), (o = s && r[s]) && ke.acceptData(r) && o.apply && !1 === o.apply(r, t) && e.preventDefault();
                    if (e.type = p, !n && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(u.pop(), t)) && ke.acceptData(i) && s && i[p] && !ke.isWindow(i)) {
                        (c = i[s]) && (i[s] = null), ke.event.triggered = p;
                        try {
                            i[p]()
                        } catch (e) {}
                        ke.event.triggered = T, c && (i[s] = c)
                    }
                    return e.result
                }
            },
            dispatch: function(e) {
                e = ke.event.fix(e);
                var t, i, n, o, s, r = [],
                    a = Z.call(arguments),
                    l = (ke._data(this, "events") || {})[e.type] || [],
                    c = ke.event.special[e.type] || {};
                if ((a[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (r = ke.event.handlers.call(this, e, l), t = 0;
                        (o = r[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, s = 0;
                            (n = o.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(n.namespace)) && (e.handleObj = n, e.data = n.data, (i = ((ke.event.special[n.origType] || {}).handle || n.handler).apply(o.elem, a)) !== T && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var i, n, o, s, r = [],
                    a = t.delegateCount,
                    l = e.target;
                if (a && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (o = [], s = 0; s < a; s++) o[i = (n = t[s]).selector + " "] === T && (o[i] = n.needsContext ? 0 <= ke(i, this).index(l) : ke.find(i, this, null, [l]).length), o[i] && o.push(n);
                            o.length && r.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return a < t.length && r.push({
                    elem: this,
                    handlers: t.slice(a)
                }), r
            },
            fix: function(e) {
                if (e[ke.expando]) return e;
                var t, i, n, o = e.type,
                    s = e,
                    r = this.fixHooks[o];
                for (r || (this.fixHooks[o] = r = Pe.test(o) ? this.mouseHooks : Oe.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new ke.Event(s), t = n.length; t--;) e[i = n[t]] = s[i];
                return e.target || (e.target = s.srcElement || W), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, s) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var i, n, o, s = t.button,
                        r = t.fromElement;
                    return null == e.pageX && null != t.clientX && (o = (n = e.target.ownerDocument || W).documentElement, i = n.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || s === T || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== e() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === e() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ke.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return ke.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== T && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, i, n) {
                var o = ke.extend(new ke.Event, i, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? ke.event.trigger(o, null, t) : ke.event.dispatch.call(t, o), o.isDefaultPrevented() && i.preventDefault()
            }
        }, ke.removeEvent = W.removeEventListener ? function(e, t, i) {
            e.removeEventListener && e.removeEventListener(t, i, !1)
        } : function(e, t, i) {
            var n = "on" + t;
            e.detachEvent && (typeof e[n] === z && (e[n] = null), e.detachEvent(n, i))
        }, ke.Event = function(e, t) {
            return this instanceof ke.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? o : d) : this.type = e, t && ke.extend(this, t), this.timeStamp = e && e.timeStamp || ke.now(), void(this[ke.expando] = !0)) : new ke.Event(e, t)
        }, ke.Event.prototype = {
            isDefaultPrevented: d,
            isPropagationStopped: d,
            isImmediatePropagationStopped: d,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = o, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = o, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = o, this.stopPropagation()
            }
        }, ke.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, o) {
            ke.event.special[e] = {
                delegateType: o,
                bindType: o,
                handle: function(e) {
                    var t, i = e.relatedTarget,
                        n = e.handleObj;
                    return (!i || i !== this && !ke.contains(this, i)) && (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = o), t
                }
            }
        }), ke.support.submitBubbles || (ke.event.special.submit = {
            setup: function() {
                return !ke.nodeName(this, "form") && void ke.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        i = ke.nodeName(t, "input") || ke.nodeName(t, "button") ? t.form : T;
                    i && !ke._data(i, "submitBubbles") && (ke.event.add(i, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), ke._data(i, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ke.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return !ke.nodeName(this, "form") && void ke.event.remove(this, "._submit")
            }
        }), ke.support.changeBubbles || (ke.event.special.change = {
            setup: function() {
                return Ne.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ke.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), ke.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), ke.event.simulate("change", this, e, !0)
                })), !1) : void ke.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ne.test(t.nodeName) && !ke._data(t, "changeBubbles") && (ke.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ke.event.simulate("change", this.parentNode, e, !0)
                    }), ke._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ke.event.remove(this, "._change"), !Ne.test(this.nodeName)
            }
        }), ke.support.focusinBubbles || ke.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var i = 0,
                n = function(e) {
                    ke.event.simulate(t, e.target, ke.event.fix(e), !0)
                };
            ke.event.special[t] = {
                setup: function() {
                    0 == i++ && W.addEventListener(e, n, !0)
                },
                teardown: function() {
                    0 == --i && W.removeEventListener(e, n, !0)
                }
            }
        }), ke.fn.extend({
            on: function(e, t, i, n, o) {
                var s, r;
                if ("object" == typeof e) {
                    for (s in "string" != typeof t && (i = i || t, t = T), e) this.on(s, t, i, e[s], o);
                    return this
                }
                if (null == i && null == n ? (n = t, i = t = T) : null == n && ("string" == typeof t ? (n = i, i = T) : (n = i, i = t, t = T)), !1 === n) n = d;
                else if (!n) return this;
                return 1 === o && (r = n, (n = function(e) {
                    return ke().off(e), r.apply(this, arguments)
                }).guid = r.guid || (r.guid = ke.guid++)), this.each(function() {
                    ke.event.add(this, e, n, i, t)
                })
            },
            one: function(e, t, i, n) {
                return this.on(e, t, i, n, 1)
            },
            off: function(e, t, i) {
                var n, o;
                if (e && e.preventDefault && e.handleObj) return n = e.handleObj, ke(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" != typeof e) return (!1 === t || "function" == typeof t) && (i = t, t = T), !1 === i && (i = d), this.each(function() {
                    ke.event.remove(this, e, i, t)
                });
                for (o in e) this.off(o, t, e[o]);
                return this
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ke.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var i = this[0];
                return i ? ke.event.trigger(e, t, i, !0) : void 0
            }
        });
        var Me = /^.[^:#\[\.,]*$/,
            He = /^(?:parents|prev(?:Until|All))/,
            Ie = ke.expr.match.needsContext,
            qe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ke.fn.extend({
            find: function(e) {
                var t, i = [],
                    n = this,
                    o = n.length;
                if ("string" != typeof e) return this.pushStack(ke(e).filter(function() {
                    for (t = 0; t < o; t++)
                        if (ke.contains(n[t], this)) return !0
                }));
                for (t = 0; t < o; t++) ke.find(e, n[t], i);
                return (i = this.pushStack(1 < o ? ke.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
            },
            has: function(e) {
                var t, i = ke(e, this),
                    n = i.length;
                return this.filter(function() {
                    for (t = 0; t < n; t++)
                        if (ke.contains(this, i[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(s(this, e || [], !0))
            },
            filter: function(e) {
                return this.pushStack(s(this, e || [], !1))
            },
            is: function(e) {
                return !!s(this, "string" == typeof e && Ie.test(e) ? ke(e) : e || [], !1).length
            },
            closest: function(e, t) {
                for (var i, n = 0, o = this.length, s = [], r = Ie.test(e) || "string" != typeof e ? ke(e, t || this.context) : 0; n < o; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && ke.find.matchesSelector(i, e))) {
                            i = s.push(i);
                            break
                        }
                return this.pushStack(1 < s.length ? ke.unique(s) : s)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ke.inArray(this[0], ke(e)) : ke.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var i = "string" == typeof e ? ke(e, t) : ke.makeArray(e && e.nodeType ? [e] : e),
                    n = ke.merge(this.get(), i);
                return this.pushStack(ke.unique(n))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ke.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ke.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, i) {
                return ke.dir(e, "parentNode", i)
            },
            next: function(e) {
                return t(e, "nextSibling")
            },
            prev: function(e) {
                return t(e, "previousSibling")
            },
            nextAll: function(e) {
                return ke.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return ke.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, i) {
                return ke.dir(e, "nextSibling", i)
            },
            prevUntil: function(e, t, i) {
                return ke.dir(e, "previousSibling", i)
            },
            siblings: function(e) {
                return ke.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ke.sibling(e.firstChild)
            },
            contents: function(e) {
                return ke.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ke.merge([], e.childNodes)
            }
        }, function(n, o) {
            ke.fn[n] = function(e, t) {
                var i = ke.map(this, o, e);
                return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = ke.filter(t, i)), 1 < this.length && (qe[n] || (i = ke.unique(i)), He.test(n) && (i = i.reverse())), this.pushStack(i)
            }
        }), ke.extend({
            filter: function(e, t, i) {
                var n = t[0];
                return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? ke.find.matchesSelector(n, e) ? [n] : [] : ke.find.matches(e, ke.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            },
            dir: function(e, t, i) {
                for (var n = [], o = e[t]; o && 9 !== o.nodeType && (i === T || 1 !== o.nodeType || !ke(o).is(i));) 1 === o.nodeType && n.push(o), o = o[t];
                return n
            },
            sibling: function(e, t) {
                for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
                return i
            }
        });
        var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Re = / jQuery\d+="(?:null|\d+)"/g,
            ze = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
            Be = /^\s+/,
            We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ue = /<([\w:]+)/,
            Ge = /<tbody/i,
            Xe = /<|&#?\w+;/,
            Ve = /<(?:script|style|link)/i,
            Ke = /^(?:checkbox|radio)$/i,
            Qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ye = /^$|\/(?:java|ecma)script/i,
            Je = /^true\/(.*)/,
            Ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            et = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ke.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            tt = m(W).appendChild(W.createElement("div"));
        et.optgroup = et.option, et.tbody = et.tfoot = et.colgroup = et.caption = et.thead, et.th = et.td, ke.fn.extend({
            text: function(e) {
                return ke.access(this, function(e) {
                    return e === T ? ke.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || r(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = r(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var i, n = e ? ke.filter(e, this) : this, o = 0; null != (i = n[o]); o++) t || 1 !== i.nodeType || ke.cleanData(b(i)), i.parentNode && (t && ke.contains(i.ownerDocument, i) && y(b(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ke.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ke.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return ke.clone(this, e, t)
                })
            },
            html: function(e) {
                return ke.access(this, function(e) {
                    var t = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (e === T) return 1 === t.nodeType ? t.innerHTML.replace(Re, "") : T;
                    if ("string" == typeof e && !Ve.test(e) && (ke.support.htmlSerialize || !ze.test(e)) && (ke.support.leadingWhitespace || !Be.test(e)) && !et[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(We, "<$1></$2>");
                        try {
                            for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (ke.cleanData(b(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = ke.map(this, function(e) {
                        return [e.nextSibling, e.parentNode]
                    }),
                    o = 0;
                return this.domManip(arguments, function(e) {
                    var t = n[o++],
                        i = n[o++];
                    i && (t && t.parentNode !== i && (t = this.nextSibling), ke(this).remove(), i.insertBefore(e, t))
                }, !0), o ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(i, n, o) {
                i = Y.apply([], i);
                var e, t, s, r, a, l, c = 0,
                    d = this.length,
                    u = this,
                    p = d - 1,
                    f = i[0],
                    h = ke.isFunction(f);
                if (h || !(d <= 1 || "string" != typeof f || ke.support.checkClone) && Qe.test(f)) return this.each(function(e) {
                    var t = u.eq(e);
                    h && (i[0] = f.call(this, e, t.html())), t.domManip(i, n, o)
                });
                if (d && (e = (l = ke.buildFragment(i, this[0].ownerDocument, !1, !o && this)).firstChild, 1 === l.childNodes.length && (l = e), e)) {
                    for (s = (r = ke.map(b(l, "script"), v)).length; c < d; c++) t = l, c !== p && (t = ke.clone(t, !0, !0), s && ke.merge(r, b(t, "script"))), n.call(this[c], t, c);
                    if (s)
                        for (a = r[r.length - 1].ownerDocument, ke.map(r, g), c = 0; c < s; c++) t = r[c], Ye.test(t.type || "") && !ke._data(t, "globalEval") && ke.contains(a, t) && (t.src ? ke._evalUrl(t.src) : ke.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ze, "")));
                    l = e = null
                }
                return this
            }
        }), ke.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, r) {
            ke.fn[e] = function(e) {
                for (var t, i = 0, n = [], o = ke(e), s = o.length - 1; i <= s; i++) t = i === s ? this : this.clone(!0), ke(o[i])[r](t), J.apply(n, t.get());
                return this.pushStack(n)
            }
        }), ke.extend({
            clone: function(e, t, i) {
                var n, o, s, r, a, l = ke.contains(e.ownerDocument, e);
                if (ke.support.html5Clone || ke.isXMLDoc(e) || !ze.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML, tt.removeChild(s = tt.firstChild)), !(ke.support.noCloneEvent && ke.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ke.isXMLDoc(e)))
                    for (n = b(s), a = b(e), r = 0; null != (o = a[r]); ++r) n[r] && p(o, n[r]);
                if (t)
                    if (i)
                        for (a = a || b(e), n = n || b(s), r = 0; null != (o = a[r]); r++) u(o, n[r]);
                    else u(e, s);
                return 0 < (n = b(s, "script")).length && y(n, !l && b(e, "script")), n = a = o = null, s
            },
            buildFragment: function(e, t, i, n) {
                for (var o, s, r, a, l, c, d, u = e.length, p = m(t), f = [], h = 0; h < u; h++)
                    if ((s = e[h]) || 0 === s)
                        if ("object" === ke.type(s)) ke.merge(f, s.nodeType ? [s] : s);
                        else if (Xe.test(s)) {
                    for (a = a || p.appendChild(t.createElement("div")), l = (Ue.exec(s) || ["", ""])[1].toLowerCase(), d = et[l] || et._default, a.innerHTML = d[1] + s.replace(We, "<$1></$2>") + d[2], o = d[0]; o--;) a = a.lastChild;
                    if (!ke.support.leadingWhitespace && Be.test(s) && f.push(t.createTextNode(Be.exec(s)[0])), !ke.support.tbody)
                        for (o = (s = "table" !== l || Ge.test(s) ? "<table>" !== d[1] || Ge.test(s) ? 0 : a : a.firstChild) && s.childNodes.length; o--;) ke.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                    for (ke.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = p.lastChild
                } else f.push(t.createTextNode(s));
                for (a && p.removeChild(a), ke.support.appendChecked || ke.grep(b(f, "input"), k), h = 0; s = f[h++];)
                    if ((!n || -1 === ke.inArray(s, n)) && (r = ke.contains(s.ownerDocument, s), a = b(p.appendChild(s), "script"), r && y(a), i))
                        for (o = 0; s = a[o++];) Ye.test(s.type || "") && i.push(s);
                return a = null, p
            },
            cleanData: function(e, t) {
                for (var i, n, o, s, r = 0, a = ke.expando, l = ke.cache, c = ke.support.deleteExpando, d = ke.event.special; null != (i = e[r]); r++)
                    if ((t || ke.acceptData(i)) && (s = (o = i[a]) && l[o])) {
                        if (s.events)
                            for (n in s.events) d[n] ? ke.event.remove(i, n) : ke.removeEvent(i, n, s.handle);
                        l[o] && (delete l[o], c ? delete i[a] : typeof i.removeAttribute !== z ? i.removeAttribute(a) : i[a] = null, K.push(o))
                    }
            },
            _evalUrl: function(e) {
                return ke.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }
        }), ke.fn.extend({
            wrapAll: function(t) {
                if (ke.isFunction(t)) return this.each(function(e) {
                    ke(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ke(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(i) {
                return ke.isFunction(i) ? this.each(function(e) {
                    ke(this).wrapInner(i.call(this, e))
                }) : this.each(function() {
                    var e = ke(this),
                        t = e.contents();
                    t.length ? t.wrapAll(i) : e.append(i)
                })
            },
            wrap: function(t) {
                var i = ke.isFunction(t);
                return this.each(function(e) {
                    ke(this).wrapAll(i ? t.call(this, e) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ke.nodeName(this, "body") || ke(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var it, nt, ot, st = /alpha\([^)]*\)/i,
            rt = /opacity\s*=\s*([^)]*)/,
            at = /^(top|right|bottom|left)$/,
            lt = /^(none|table(?!-c[ea]).+)/,
            ct = /^margin/,
            dt = new RegExp("^(" + oe + ")(.*)$", "i"),
            ut = new RegExp("^(" + oe + ")(?!px)[a-z%]+$", "i"),
            pt = new RegExp("^([+-])=(" + oe + ")", "i"),
            ft = {
                BODY: "block"
            },
            ht = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            mt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            vt = ["Top", "Right", "Bottom", "Left"],
            gt = ["Webkit", "O", "Moz", "ms"];
        ke.fn.extend({
            css: function(e, t) {
                return ke.access(this, function(e, t, i) {
                    var n, o, s = {},
                        r = 0;
                    if (ke.isArray(t)) {
                        for (o = nt(e), n = t.length; r < n; r++) s[t[r]] = ke.css(e, t[r], !1, o);
                        return s
                    }
                    return i !== T ? ke.style(e, t, i) : ke.css(e, t)
                }, e, t, 1 < arguments.length)
            },
            show: function() {
                return x(this, !0)
            },
            hide: function() {
                return x(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    w(this) ? ke(this).show() : ke(this).hide()
                })
            }
        }), ke.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var i = ot(e, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: ke.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, i, n) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, s, r, a = ke.camelCase(t),
                        l = e.style;
                    if (t = ke.cssProps[a] || (ke.cssProps[a] = f(l, a)), r = ke.cssHooks[t] || ke.cssHooks[a], i === T) return r && "get" in r && (o = r.get(e, !1, n)) !== T ? o : l[t];
                    if ("string" == (s = typeof i) && (o = pt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ke.css(e, t)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || ke.cssNumber[a] || (i += "px"), ke.support.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && (i = r.set(e, i, n)) === T))) try {
                        l[t] = i
                    } catch (e) {}
                }
            },
            css: function(e, t, i, n) {
                var o, s, r, a = ke.camelCase(t);
                return t = ke.cssProps[a] || (ke.cssProps[a] = f(e.style, a)), (r = ke.cssHooks[t] || ke.cssHooks[a]) && "get" in r && (s = r.get(e, !0, i)), s === T && (s = ot(e, t, n)), "normal" === s && t in mt && (s = mt[t]), "" === i || i ? (o = parseFloat(s), !0 === i || ke.isNumeric(o) ? o || 0 : s) : s
            }
        }), h.getComputedStyle ? (nt = function(e) {
            return h.getComputedStyle(e, null)
        }, ot = function(e, t, i) {
            var n, o, s, r = i || nt(e),
                a = r ? r.getPropertyValue(t) || r[t] : T,
                l = e.style;
            return r && ("" !== a || ke.contains(e.ownerDocument, e) || (a = ke.style(e, t)), ut.test(a) && ct.test(t) && (n = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = r.width, l.width = n, l.minWidth = o, l.maxWidth = s)), a
        }) : W.documentElement.currentStyle && (nt = function(e) {
            return e.currentStyle
        }, ot = function(e, t, i) {
            var n, o, s, r = i || nt(e),
                a = r ? r[t] : T,
                l = e.style;
            return null == a && l && l[t] && (a = l[t]), ut.test(a) && !at.test(t) && (n = l.left, (s = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), l.left = "fontSize" === t ? "1em" : a, a = l.pixelLeft + "px", l.left = n, s && (o.left = s)), "" === a ? "auto" : a
        }), ke.each(["height", "width"], function(e, o) {
            ke.cssHooks[o] = {
                get: function(e, t, i) {
                    return t ? 0 === e.offsetWidth && lt.test(ke.css(e, "display")) ? ke.swap(e, ht, function() {
                        return E(e, o, i)
                    }) : E(e, o, i) : void 0
                },
                set: function(e, t, i) {
                    var n = i && nt(e);
                    return C(0, t, i ? S(e, o, i, ke.support.boxSizing && "border-box" === ke.css(e, "boxSizing", !1, n), n) : 0)
                }
            }
        }), ke.support.opacity || (ke.cssHooks.opacity = {
            get: function(e, t) {
                return rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var i = e.style,
                    n = e.currentStyle,
                    o = ke.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    s = n && n.filter || i.filter || "";
                ((i.zoom = 1) <= t || "" === t) && "" === ke.trim(s.replace(st, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = st.test(s) ? s.replace(st, o) : s + " " + o)
            }
        }), ke(function() {
            ke.support.reliableMarginRight || (ke.cssHooks.marginRight = {
                get: function(e, t) {
                    return t ? ke.swap(e, {
                        display: "inline-block"
                    }, ot, [e, "marginRight"]) : void 0
                }
            }), !ke.support.pixelPosition && ke.fn.position && ke.each(["top", "left"], function(e, i) {
                ke.cssHooks[i] = {
                    get: function(e, t) {
                        return t ? (t = ot(e, i), ut.test(t) ? ke(e).position()[i] + "px" : t) : void 0
                    }
                }
            })
        }), ke.expr && ke.expr.filters && (ke.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ke.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ke.css(e, "display"))
        }, ke.expr.filters.visible = function(e) {
            return !ke.expr.filters.hidden(e)
        }), ke.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(o, s) {
            ke.cssHooks[o + s] = {
                expand: function(e) {
                    for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[o + vt[t] + s] = n[t] || n[t - 2] || n[0];
                    return i
                }
            }, ct.test(o) || (ke.cssHooks[o + s].set = C)
        });
        var yt = /%20/g,
            bt = /\[\]$/,
            kt = /\r?\n/g,
            wt = /^(?:submit|button|image|reset|file)$/i,
            xt = /^(?:input|select|textarea|keygen)/i;
        ke.fn.extend({
            serialize: function() {
                return ke.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ke.prop(this, "elements");
                    return e ? ke.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ke(this).is(":disabled") && xt.test(this.nodeName) && !wt.test(e) && (this.checked || !Ke.test(e))
                }).map(function(e, t) {
                    var i = ke(this).val();
                    return null == i ? null : ke.isArray(i) ? ke.map(i, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(kt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: i.replace(kt, "\r\n")
                    }
                }).get()
            }
        }), ke.param = function(e, t) {
            var i, n = [],
                o = function(e, t) {
                    t = ke.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (t === T && (t = ke.ajaxSettings && ke.ajaxSettings.traditional), ke.isArray(e) || e.jquery && !ke.isPlainObject(e)) ke.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (i in e) j(i, e[i], t, o);
            return n.join("&").replace(yt, "+")
        }, ke.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, i) {
            ke.fn[i] = function(e, t) {
                return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
            }
        }), ke.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, i) {
                return this.on(e, null, t, i)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, i, n) {
                return this.on(t, e, i, n)
            },
            undelegate: function(e, t, i) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
            }
        });
        var Tt, Ct, St = ke.now(),
            Et = /\?/,
            $t = /#.*$/,
            At = /([?&])_=[^&]*/,
            jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Dt = /^(?:GET|HEAD)$/,
            Nt = /^\/\//,
            Ot = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Pt = ke.fn.load,
            _t = {},
            Lt = {},
            Mt = "*/".concat("*");
        try {
            Ct = B.href
        } catch (e) {
            (Ct = W.createElement("a")).href = "", Ct = Ct.href
        }
        Tt = Ot.exec(Ct.toLowerCase()) || [], ke.fn.load = function(e, t, i) {
            if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
            var n, o, s, r = this,
                a = e.indexOf(" ");
            return 0 <= a && (n = e.slice(a, e.length), e = e.slice(0, a)), ke.isFunction(t) ? (i = t, t = T) : t && "object" == typeof t && (s = "POST"), 0 < r.length && ke.ajax({
                url: e,
                type: s,
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, r.html(n ? ke("<div>").append(ke.parseHTML(e)).find(n) : e)
            }).complete(i && function(e, t) {
                r.each(i, o || [e.responseText, t, e])
            }), this
        }, ke.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ke.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ke.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ct,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Mt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ke.parseJSON,
                    "text xml": ke.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? O(O(e, ke.ajaxSettings), t) : O(ke.ajaxSettings, e)
            },
            ajaxPrefilter: D(_t),
            ajaxTransport: D(Lt),
            ajax: function(e, t) {
                function i(e, t, i, n) {
                    var o, s, r, a, l, c = t;
                    2 !== w && (w = 2, p && clearTimeout(p), h = T, u = n || "", x.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, i && (a = function(e, t, i) {
                        for (var n, o, s, r, a = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), o === T && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (o)
                            for (r in a)
                                if (a[r] && a[r].test(o)) {
                                    l.unshift(r);
                                    break
                                }
                        if (l[0] in i) s = l[0];
                        else {
                            for (r in i) {
                                if (!l[0] || e.converters[r + " " + l[0]]) {
                                    s = r;
                                    break
                                }
                                n || (n = r)
                            }
                            s = s || n
                        }
                        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
                    }(m, x, i)), a = function(e, t, i, n) {
                        var o, s, r, a, l, c = {},
                            d = e.dataTypes.slice();
                        if (d[1])
                            for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                        for (s = d.shift(); s;)
                            if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())
                                if ("*" === s) s = l;
                                else if ("*" !== l && l !== s) {
                            if (!(r = c[l + " " + s] || c["* " + s]))
                                for (o in c)
                                    if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
                                        break
                                    }
                            if (!0 !== r)
                                if (r && e.throws) t = r(t);
                                else try {
                                    t = r(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: r ? e : "No conversion from " + l + " to " + s
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(m, a, x, o), o ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (ke.lastModified[d] = l), (l = x.getResponseHeader("etag")) && (ke.etag[d] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, s = a.data, o = !(r = a.error))) : (r = c, (e || !c) && (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", o ? y.resolveWith(v, [s, c, x]) : y.rejectWith(v, [x, c, r]), x.statusCode(k), k = T, f && g.trigger(o ? "ajaxSuccess" : "ajaxError", [x, m, o ? s : r]), b.fireWith(v, [x, c]), f && (g.trigger("ajaxComplete", [x, m]), --ke.active || ke.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = T), t = t || {};
                var n, o, d, u, p, f, h, s, m = ke.ajaxSetup({}, t),
                    v = m.context || m,
                    g = m.context && (v.nodeType || v.jquery) ? ke(v) : ke.event,
                    y = ke.Deferred(),
                    b = ke.Callbacks("once memory"),
                    k = m.statusCode || {},
                    r = {},
                    a = {},
                    w = 0,
                    l = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === w) {
                                if (!s)
                                    for (s = {}; t = jt.exec(u);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? u : null
                        },
                        setRequestHeader: function(e, t) {
                            var i = e.toLowerCase();
                            return w || (e = a[i] = a[i] || e, r[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return w || (m.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (w < 2)
                                    for (t in e) k[t] = [k[t], e[t]];
                                else x.always(e[x.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || l;
                            return h && h.abort(t), i(0, t), this
                        }
                    };
                if (y.promise(x).complete = b.add, x.success = x.done, x.error = x.fail, m.url = ((e || m.url || Ct) + "").replace($t, "").replace(Nt, Tt[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = ke.trim(m.dataType || "*").toLowerCase().match(se) || [""], null == m.crossDomain && (n = Ot.exec(m.url.toLowerCase()), m.crossDomain = !(!n || n[1] === Tt[1] && n[2] === Tt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = ke.param(m.data, m.traditional)), N(_t, m, t, x), 2 === w) return x;
                for (o in (f = m.global) && 0 == ke.active++ && ke.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Dt.test(m.type), d = m.url, m.hasContent || (m.data && (d = m.url += (Et.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = At.test(d) ? d.replace(At, "$1_=" + St++) : d + (Et.test(d) ? "&" : "?") + "_=" + St++)), m.ifModified && (ke.lastModified[d] && x.setRequestHeader("If-Modified-Since", ke.lastModified[d]), ke.etag[d] && x.setRequestHeader("If-None-Match", ke.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : m.accepts["*"]), m.headers) x.setRequestHeader(o, m.headers[o]);
                if (m.beforeSend && (!1 === m.beforeSend.call(v, x, m) || 2 === w)) return x.abort();
                for (o in l = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[o](m[o]);
                if (h = N(Lt, m, t, x)) {
                    x.readyState = 1, f && g.trigger("ajaxSend", [x, m]), m.async && 0 < m.timeout && (p = setTimeout(function() {
                        x.abort("timeout")
                    }, m.timeout));
                    try {
                        w = 1, h.send(r, i)
                    } catch (e) {
                        if (!(w < 2)) throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return x
            },
            getJSON: function(e, t, i) {
                return ke.get(e, t, i, "json")
            },
            getScript: function(e, t) {
                return ke.get(e, T, t, "script")
            }
        }), ke.each(["get", "post"], function(e, o) {
            ke[o] = function(e, t, i, n) {
                return ke.isFunction(t) && (n = n || i, i = t, t = T), ke.ajax({
                    url: e,
                    type: o,
                    dataType: n,
                    data: t,
                    success: i
                })
            }
        }), ke.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ke.globalEval(e), e
                }
            }
        }), ke.ajaxPrefilter("script", function(e) {
            e.cache === T && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ke.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var n, o = W.head || ke("head")[0] || W.documentElement;
                return {
                    send: function(e, i) {
                        (n = W.createElement("script")).async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function(e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                        }, o.insertBefore(n, o.firstChild)
                    },
                    abort: function() {
                        n && n.onload(T, !0)
                    }
                }
            }
        });
        var Ht = [],
            It = /(=)\?(?=&|$)|\?\?/;
        ke.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ht.pop() || ke.expando + "_" + St++;
                return this[e] = !0, e
            }
        }), ke.ajaxPrefilter("json jsonp", function(e, t, i) {
            var n, o, s, r = !1 !== e.jsonp && (It.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(e.data) && "data");
            return r || "jsonp" === e.dataTypes[0] ? (n = e.jsonpCallback = ke.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(It, "$1" + n) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
                return s || ke.error(n + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = h[n], h[n] = function() {
                s = arguments
            }, i.always(function() {
                h[n] = o, e[n] && (e.jsonpCallback = t.jsonpCallback, Ht.push(n)), s && ke.isFunction(o) && o(s[0]), s = o = T
            }), "script") : void 0
        });
        var qt, Ft, Rt = 0,
            zt = h.ActiveXObject && function() {
                var e;
                for (e in qt) qt[e](T, !0)
            };
        ke.ajaxSettings.xhr = h.ActiveXObject ? function() {
            return !this.isLocal && P() || function() {
                try {
                    return new h.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }()
        } : P, Ft = ke.ajaxSettings.xhr(), ke.support.cors = !!Ft && "withCredentials" in Ft, (Ft = ke.support.ajax = !!Ft) && ke.ajaxTransport(function(c) {
            var d;
            if (!c.crossDomain || ke.support.cors) return {
                send: function(e, r) {
                    var a, t, l = c.xhr();
                    if (c.username ? l.open(c.type, c.url, c.async, c.username, c.password) : l.open(c.type, c.url, c.async), c.xhrFields)
                        for (t in c.xhrFields) l[t] = c.xhrFields[t];
                    c.mimeType && l.overrideMimeType && l.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (t in e) l.setRequestHeader(t, e[t])
                    } catch (e) {}
                    l.send(c.hasContent && c.data || null), d = function(e, t) {
                        var i, n, o, s;
                        try {
                            if (d && (t || 4 === l.readyState))
                                if (d = T, a && (l.onreadystatechange = ke.noop, zt && delete qt[a]), t) 4 !== l.readyState && l.abort();
                                else {
                                    s = {}, i = l.status, n = l.getAllResponseHeaders(), "string" == typeof l.responseText && (s.text = l.responseText);
                                    try {
                                        o = l.statusText
                                    } catch (e) {
                                        o = ""
                                    }
                                    i || !c.isLocal || c.crossDomain ? 1223 === i && (i = 204) : i = s.text ? 200 : 404
                                }
                        } catch (e) {
                            t || r(-1, e)
                        }
                        s && r(i, o, s, n)
                    }, c.async ? 4 === l.readyState ? setTimeout(d) : (a = ++Rt, zt && (qt || (qt = {}, ke(h).unload(zt)), qt[a] = d), l.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(T, !0)
                }
            }
        });
        var Bt, Wt, Ut = /^(?:toggle|show|hide)$/,
            Gt = new RegExp("^(?:([+-])=|)(" + oe + ")([a-z%]*)$", "i"),
            Xt = /queueHooks$/,
            Vt = [function(t, e, i) {
                var n, o, s, r, a, l, c = this,
                    d = {},
                    u = t.style,
                    p = t.nodeType && w(t),
                    f = ke._data(t, "fxshow");
                for (n in i.queue || (null == (a = ke._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || l()
                    }), a.unqueued++, c.always(function() {
                        c.always(function() {
                            a.unqueued--, ke.queue(t, "fx").length || a.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [u.overflow, u.overflowX, u.overflowY], "inline" === ke.css(t, "display") && "none" === ke.css(t, "float") && (ke.support.inlineBlockNeedsLayout && "inline" !== $(t.nodeName) ? u.zoom = 1 : u.display = "inline-block")), i.overflow && (u.overflow = "hidden", ke.support.shrinkWrapBlocks || c.always(function() {
                        u.overflow = i.overflow[0], u.overflowX = i.overflow[1], u.overflowY = i.overflow[2]
                    })), e)
                    if (o = e[n], Ut.exec(o)) {
                        if (delete e[n], s = s || "toggle" === o, o === (p ? "hide" : "show")) continue;
                        d[n] = f && f[n] || ke.style(t, n)
                    }
                if (!ke.isEmptyObject(d))
                    for (n in f ? "hidden" in f && (p = f.hidden) : f = ke._data(t, "fxshow", {}), s && (f.hidden = !p), p ? ke(t).show() : c.done(function() {
                            ke(t).hide()
                        }), c.done(function() {
                            var e;
                            for (e in ke._removeData(t, "fxshow"), d) ke.style(t, e, d[e])
                        }), d) r = L(p ? f[n] : 0, n, c), n in f || (f[n] = r.start, p && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
            }],
            Kt = {
                "*": [function(e, t) {
                    var i = this.createTween(e, t),
                        n = i.cur(),
                        o = Gt.exec(t),
                        s = o && o[3] || (ke.cssNumber[e] ? "" : "px"),
                        r = (ke.cssNumber[e] || "px" !== s && +n) && Gt.exec(ke.css(i.elem, e)),
                        a = 1,
                        l = 20;
                    if (r && r[3] !== s)
                        for (s = s || r[3], o = o || [], r = +n || 1; r /= a = a || ".5", ke.style(i.elem, e, r + s), a !== (a = i.cur() / n) && 1 !== a && --l;);
                    return o && (r = i.start = +r || +n || 0, i.unit = s, i.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), i
                }]
            };
        ke.Animation = ke.extend(M, {
            tweener: function(e, t) {
                ke.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var i, n = 0, o = e.length; n < o; n++) i = e[n], Kt[i] = Kt[i] || [], Kt[i].unshift(t)
            },
            prefilter: function(e, t) {
                t ? Vt.unshift(e) : Vt.push(e)
            }
        }), ((ke.Tween = H).prototype = {
            constructor: H,
            init: function(e, t, i, n, o, s) {
                this.elem = e, this.prop = i, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (ke.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var e = H.propHooks[this.prop];
                return e && e.get ? e.get(this) : H.propHooks._default.get(this)
            },
            run: function(e) {
                var t, i = H.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ke.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : H.propHooks._default.set(this), this
            }
        }).init.prototype = H.prototype, (H.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ke.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
                },
                set: function(e) {
                    ke.fx.step[e.prop] ? ke.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ke.cssProps[e.prop]] || ke.cssHooks[e.prop]) ? ke.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }).scrollTop = H.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ke.each(["toggle", "show", "hide"], function(e, n) {
            var o = ke.fn[n];
            ke.fn[n] = function(e, t, i) {
                return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(I(n, !0), e, t, i)
            }
        }), ke.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(w).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(t, e, i, n) {
                var o = ke.isEmptyObject(t),
                    s = ke.speed(e, i, n),
                    r = function() {
                        var e = M(this, ke.extend({}, t), s);
                        (o || ke._data(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function(o, e, s) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(s)
                };
                return "string" != typeof o && (s = e, e = o, o = T), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                    var e = !0,
                        t = null != o && o + "queueHooks",
                        i = ke.timers,
                        n = ke._data(this);
                    if (t) n[t] && n[t].stop && r(n[t]);
                    else
                        for (t in n) n[t] && n[t].stop && Xt.test(t) && r(n[t]);
                    for (t = i.length; t--;) i[t].elem !== this || null != o && i[t].queue !== o || (i[t].anim.stop(s), e = !1, i.splice(t, 1));
                    (e || !s) && ke.dequeue(this, o)
                })
            },
            finish: function(r) {
                return !1 !== r && (r = r || "fx"), this.each(function() {
                    var e, t = ke._data(this),
                        i = t[r + "queue"],
                        n = t[r + "queueHooks"],
                        o = ke.timers,
                        s = i ? i.length : 0;
                    for (t.finish = !0, ke.queue(this, r, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === r && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete t.finish
                })
            }
        }), ke.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, n) {
            ke.fn[e] = function(e, t, i) {
                return this.animate(n, e, t, i)
            }
        }), ke.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? ke.extend({}, e) : {
                complete: i || !i && t || ke.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !ke.isFunction(t) && t
            };
            return n.duration = ke.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ke.fx.speeds ? ke.fx.speeds[n.duration] : ke.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                ke.isFunction(n.old) && n.old.call(this), n.queue && ke.dequeue(this, n.queue)
            }, n
        }, ke.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ke.timers = [], ke.fx = H.prototype.init, ke.fx.tick = function() {
            var e, t = ke.timers,
                i = 0;
            for (Bt = ke.now(); i < t.length; i++)(e = t[i])() || t[i] !== e || t.splice(i--, 1);
            t.length || ke.fx.stop(), Bt = T
        }, ke.fx.timer = function(e) {
            e() && ke.timers.push(e) && ke.fx.start()
        }, ke.fx.interval = 13, ke.fx.start = function() {
            Wt || (Wt = setInterval(ke.fx.tick, ke.fx.interval))
        }, ke.fx.stop = function() {
            clearInterval(Wt), Wt = null
        }, ke.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ke.fx.step = {}, ke.expr && ke.expr.filters && (ke.expr.filters.animated = function(t) {
            return ke.grep(ke.timers, function(e) {
                return t === e.elem
            }).length
        }), ke.fn.offset = function(t) {
            if (arguments.length) return t === T ? this : this.each(function(e) {
                ke.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                s = o && o.ownerDocument;
            return s ? (e = s.documentElement, ke.contains(e, o) ? (typeof o.getBoundingClientRect !== z && (n = o.getBoundingClientRect()), i = q(s), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n) : void 0
        }, ke.offset = {
            setOffset: function(e, t, i) {
                var n = ke.css(e, "position");
                "static" === n && (e.style.position = "relative");
                var o, s, r = ke(e),
                    a = r.offset(),
                    l = ke.css(e, "top"),
                    c = ke.css(e, "left"),
                    d = {},
                    u = {};
                ("absolute" === n || "fixed" === n) && -1 < ke.inArray("auto", [l, c]) ? (o = (u = r.position()).top, s = u.left) : (o = parseFloat(l) || 0, s = parseFloat(c) || 0), ke.isFunction(t) && (t = t.call(e, i, a)), null != t.top && (d.top = t.top - a.top + o), null != t.left && (d.left = t.left - a.left + s), "using" in t ? t.using.call(e, d) : r.css(d)
            }
        }, ke.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, i = {
                            top: 0,
                            left: 0
                        },
                        n = this[0];
                    return "fixed" === ke.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ke.nodeName(e[0], "html") || (i = e.offset()), i.top += ke.css(e[0], "borderTopWidth", !0), i.left += ke.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - ke.css(n, "marginTop", !0),
                        left: t.left - i.left - ke.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || U; e && !ke.nodeName(e, "html") && "static" === ke.css(e, "position");) e = e.offsetParent;
                    return e || U
                })
            }
        }), ke.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, o) {
            var s = /Y/.test(o);
            ke.fn[t] = function(e) {
                return ke.access(this, function(e, t, i) {
                    var n = q(e);
                    return i === T ? n ? o in n ? n[o] : n.document.documentElement[t] : e[t] : void(n ? n.scrollTo(s ? ke(n).scrollLeft() : i, s ? i : ke(n).scrollTop()) : e[t] = i)
                }, t, e, arguments.length, null)
            }
        }), ke.each({
            Height: "height",
            Width: "width"
        }, function(s, r) {
            ke.each({
                padding: "inner" + s,
                content: r,
                "": "outer" + s
            }, function(n, e) {
                ke.fn[e] = function(e, t) {
                    var i = arguments.length && (n || "boolean" != typeof e),
                        o = n || (!0 === e || !0 === t ? "margin" : "border");
                    return ke.access(this, function(e, t, i) {
                        var n;
                        return ke.isWindow(e) ? e.document.documentElement["client" + s] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + s], n["scroll" + s], e.body["offset" + s], n["offset" + s], n["client" + s])) : i === T ? ke.css(e, t, o) : ke.style(e, t, i, o)
                    }, r, i ? e : T, i, null)
                }
            })
        }), ke.fn.size = function() {
            return this.length
        }, ke.fn.andSelf = ke.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ke : (h.jQuery = h.$ = ke, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ke
        }))
    }(window), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

function SlickInit(e) {
    if (0 === e.length) return !1;
    this.selector = e, $(this.selector).fadeOut(), this.initSlick = function() {
        $(this.selector).not(".slick-initialized").slick({
            infinite: !0,
            lazyLoad: "progressive",
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: !1,
            vertical: !1,
            asNavFor: null,
            centerMode: !1,
            arrow: !0,
            fade: !1,
            dots: !1,
            prevArrow: '<div class="slick_prev"></div>',
            nextArrow: '<div class="slick_next"></div>',
            responsive: []
        }), $(this.selector).fadeIn()
    }, this.setOptions = function(e) {
        $(this.selector).slick("slickSetOption", e, !0)
    }
}! function(e) {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 2 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(),
function(n) {
    "use strict";
    n.fn.emulateTransitionEnd = function(e) {
        var t = !1,
            i = this;
        return n(this).one("bsTransitionEnd", function() {
            t = !0
        }), setTimeout(function() {
            t || n(i).trigger(n.support.transition.end)
        }, e), this
    }, n(function() {
        n.support.transition = function() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in t)
                if (void 0 !== e.style[i]) return {
                    end: t[i]
                };
            return !1
        }(), n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(e) {
                return n(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function(s) {
    "use strict";
    var t = '[data-dismiss="alert"]',
        r = function(e) {
            s(e).on("click", t, this.close)
        };
    r.VERSION = "3.3.6", r.TRANSITION_DURATION = 150, r.prototype.close = function(e) {
        function t() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var i = s(this),
            n = i.attr("data-target");
        n || (n = (n = i.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var o = s(n);
        e && e.preventDefault(), o.length || (o = i.closest(".alert")), o.trigger(e = s.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), s.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", t).emulateTransitionEnd(r.TRANSITION_DURATION) : t())
    };
    var e = s.fn.alert;
    s.fn.alert = function(i) {
        return this.each(function() {
            var e = s(this),
                t = e.data("bs.alert");
            t || e.data("bs.alert", t = new r(this)), "string" == typeof i && t[i].call(e)
        })
    }, s.fn.alert.Constructor = r, s.fn.alert.noConflict = function() {
        return s.fn.alert = e, this
    }, s(document).on("click.bs.alert.data-api", t, r.prototype.close)
}(jQuery),
function(s) {
    "use strict";

    function i(n) {
        return this.each(function() {
            var e = s(this),
                t = e.data("bs.button"),
                i = "object" == typeof n && n;
            t || e.data("bs.button", t = new o(this, i)), "toggle" == n ? t.toggle() : n && t.setState(n)
        })
    }
    var o = function(e, t) {
        this.$element = s(e), this.options = s.extend({}, o.DEFAULTS, t), this.isLoading = !1
    };
    o.VERSION = "3.3.6", o.DEFAULTS = {
        loadingText: "loading..."
    }, o.prototype.setState = function(e) {
        var t = "disabled",
            i = this.$element,
            n = i.is("input") ? "val" : "html",
            o = i.data();
        e += "Text", null == o.resetText && i.data("resetText", i[n]()), setTimeout(s.proxy(function() {
            i[n](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(t).attr(t, t)) : this.isLoading && (this.isLoading = !1, i.removeClass(t).removeAttr(t))
        }, this), 0)
    }, o.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), e && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var e = s.fn.button;
    s.fn.button = i, s.fn.button.Constructor = o, s.fn.button.noConflict = function() {
        return s.fn.button = e, this
    }, s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = s(e.target);
        t.hasClass("btn") || (t = t.closest(".btn")), i.call(t, "toggle"), s(e.target).is('input[type="radio"]') || s(e.target).is('input[type="checkbox"]') || e.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        s(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(u) {
    "use strict";

    function r(o) {
        return this.each(function() {
            var e = u(this),
                t = e.data("bs.carousel"),
                i = u.extend({}, p.DEFAULTS, e.data(), "object" == typeof o && o),
                n = "string" == typeof o ? o : i.slide;
            t || e.data("bs.carousel", t = new p(this, i)), "number" == typeof o ? t.to(o) : n ? t[n]() : i.interval && t.pause().cycle()
        })
    }
    var p = function(e, t) {
        this.$element = u(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = t, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", u.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", u.proxy(this.pause, this)).on("mouseleave.bs.carousel", u.proxy(this.cycle, this))
    };
    p.VERSION = "3.3.6", p.TRANSITION_DURATION = 600, p.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, p.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, p.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(u.proxy(this.next, this), this.options.interval)), this
    }, p.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, p.prototype.getItemForDirection = function(e, t) {
        var i = this.getItemIndex(t);
        if (("prev" == e && 0 === i || "next" == e && i == this.$items.length - 1) && !this.options.wrap) return t;
        var n = (i + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(n)
    }, p.prototype.to = function(e) {
        var t = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || e < 0 ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(i < e ? "next" : "prev", this.$items.eq(e))
    }, p.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && u.support.transition && (this.$element.trigger(u.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, p.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, p.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, p.prototype.slide = function(e, t) {
        var i = this.$element.find(".item.active"),
            n = t || this.getItemForDirection(e, i),
            o = this.interval,
            s = "next" == e ? "left" : "right",
            r = this;
        if (n.hasClass("active")) return this.sliding = !1;
        var a = n[0],
            l = u.Event("slide.bs.carousel", {
                relatedTarget: a,
                direction: s
            });
        if (this.$element.trigger(l), !l.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = u(this.$indicators.children()[this.getItemIndex(n)]);
                c && c.addClass("active")
            }
            var d = u.Event("slid.bs.carousel", {
                relatedTarget: a,
                direction: s
            });
            return u.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, i.addClass(s), n.addClass(s), i.one("bsTransitionEnd", function() {
                n.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), r.sliding = !1, setTimeout(function() {
                    r.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(p.TRANSITION_DURATION)) : (i.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(d)), o && this.cycle(), this
        }
    };
    var e = u.fn.carousel;
    u.fn.carousel = r, u.fn.carousel.Constructor = p, u.fn.carousel.noConflict = function() {
        return u.fn.carousel = e, this
    };
    var t = function(e) {
        var t, i = u(this),
            n = u(i.attr("data-target") || (t = i.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var o = u.extend({}, n.data(), i.data()),
                s = i.attr("data-slide-to");
            s && (o.interval = !1), r.call(n, o), s && n.data("bs.carousel").to(s), e.preventDefault()
        }
    };
    u(document).on("click.bs.carousel.data-api", "[data-slide]", t).on("click.bs.carousel.data-api", "[data-slide-to]", t), u(window).on("load", function() {
        u('[data-ride="carousel"]').each(function() {
            var e = u(this);
            r.call(e, e.data())
        })
    })
}(jQuery),
function(r) {
    "use strict";

    function o(e) {
        var t, i = e.attr("data-target") || (t = e.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, "");
        return r(i)
    }

    function a(n) {
        return this.each(function() {
            var e = r(this),
                t = e.data("bs.collapse"),
                i = r.extend({}, l.DEFAULTS, e.data(), "object" == typeof n && n);
            !t && i.toggle && /show|hide/.test(n) && (i.toggle = !1), t || e.data("bs.collapse", t = new l(this, i)), "string" == typeof n && t[n]()
        })
    }
    var l = function(e, t) {
        this.$element = r(e), this.options = r.extend({}, l.DEFAULTS, t), this.$trigger = r('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    l.VERSION = "3.3.6", l.TRANSITION_DURATION = 350, l.DEFAULTS = {
        toggle: !0
    }, l.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, l.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, t = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(t && t.length && (e = t.data("bs.collapse")) && e.transitioning)) {
                var i = r.Event("show.bs.collapse");
                if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                    t && t.length && (a.call(t, "hide"), e || t.data("bs.collapse", null));
                    var n = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[n](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var o = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[n](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!r.support.transition) return o.call(this);
                    var s = r.camelCase(["scroll", n].join("-"));
                    this.$element.one("bsTransitionEnd", r.proxy(o, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[n](this.$element[0][s])
                }
            }
        }
    }, l.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = r.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var t = this.dimension();
                this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return r.support.transition ? void this.$element[t](0).one("bsTransitionEnd", r.proxy(i, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, l.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, l.prototype.getParent = function() {
        return r(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(r.proxy(function(e, t) {
            var i = r(t);
            this.addAriaAndCollapsedClass(o(i), i)
        }, this)).end()
    }, l.prototype.addAriaAndCollapsedClass = function(e, t) {
        var i = e.hasClass("in");
        e.attr("aria-expanded", i), t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var e = r.fn.collapse;
    r.fn.collapse = a, r.fn.collapse.Constructor = l, r.fn.collapse.noConflict = function() {
        return r.fn.collapse = e, this
    }, r(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var t = r(this);
        t.attr("data-target") || e.preventDefault();
        var i = o(t),
            n = i.data("bs.collapse") ? "toggle" : t.data();
        a.call(i, n)
    })
}(jQuery),
function(r) {
    "use strict";

    function a(e) {
        var t = e.attr("data-target");
        t || (t = (t = e.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
        var i = t && r(t);
        return i && i.length ? i : e.parent()
    }

    function s(n) {
        n && 3 === n.which || (r(".dropdown-backdrop").remove(), r(l).each(function() {
            var e = r(this),
                t = a(e),
                i = {
                    relatedTarget: this
                };
            t.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && r.contains(t[0], n.target) || (t.trigger(n = r.Event("hide.bs.dropdown", i)), n.isDefaultPrevented() || (e.attr("aria-expanded", "false"), t.removeClass("open").trigger(r.Event("hidden.bs.dropdown", i)))))
        }))
    }
    var l = '[data-toggle="dropdown"]',
        n = function(e) {
            r(e).on("click.bs.dropdown", this.toggle)
        };
    n.VERSION = "3.3.6", n.prototype.toggle = function(e) {
        var t = r(this);
        if (!t.is(".disabled, :disabled")) {
            var i = a(t),
                n = i.hasClass("open");
            if (s(), !n) {
                "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && r(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(r(this)).on("click", s);
                var o = {
                    relatedTarget: this
                };
                if (i.trigger(e = r.Event("show.bs.dropdown", o)), e.isDefaultPrevented()) return;
                t.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(r.Event("shown.bs.dropdown", o))
            }
            return !1
        }
    }, n.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var t = r(this);
            if (e.preventDefault(), e.stopPropagation(), !t.is(".disabled, :disabled")) {
                var i = a(t),
                    n = i.hasClass("open");
                if (!n && 27 != e.which || n && 27 == e.which) return 27 == e.which && i.find(l).trigger("focus"), t.trigger("click");
                var o = i.find(".dropdown-menu li:not(.disabled):visible a");
                if (o.length) {
                    var s = o.index(e.target);
                    38 == e.which && 0 < s && s--, 40 == e.which && s < o.length - 1 && s++, ~s || (s = 0), o.eq(s).trigger("focus")
                }
            }
        }
    };
    var e = r.fn.dropdown;
    r.fn.dropdown = function(i) {
        return this.each(function() {
            var e = r(this),
                t = e.data("bs.dropdown");
            t || e.data("bs.dropdown", t = new n(this)), "string" == typeof i && t[i].call(e)
        })
    }, r.fn.dropdown.Constructor = n, r.fn.dropdown.noConflict = function() {
        return r.fn.dropdown = e, this
    }, r(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", l, n.prototype.toggle).on("keydown.bs.dropdown.data-api", l, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
}(jQuery),
function(s) {
    "use strict";

    function r(n, o) {
        return this.each(function() {
            var e = s(this),
                t = e.data("bs.modal"),
                i = s.extend({}, a.DEFAULTS, e.data(), "object" == typeof n && n);
            t || e.data("bs.modal", t = new a(this, i)), "string" == typeof n ? t[n](o) : i.show && t.show(o)
        })
    }
    var a = function(e, t) {
        this.options = t, this.$body = s(document.body), this.$element = s(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, s.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    a.VERSION = "3.3.6", a.TRANSITION_DURATION = 300, a.BACKDROP_TRANSITION_DURATION = 150, a.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, a.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, a.prototype.show = function(i) {
        var n = this,
            e = s.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', s.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                s(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = s.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), e && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var t = s.Event("shown.bs.modal", {
                relatedTarget: i
            });
            e ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(t)
            }).emulateTransitionEnd(a.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(t)
        }))
    }, a.prototype.hide = function(e) {
        e && e.preventDefault(), e = s.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), s(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), s.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", s.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
    }, a.prototype.enforceFocus = function() {
        s(document).off("focusin.bs.modal").on("focusin.bs.modal", s.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, a.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", s.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, a.prototype.resize = function() {
        this.isShown ? s(window).on("resize.bs.modal", s.proxy(this.handleUpdate, this)) : s(window).off("resize.bs.modal")
    }, a.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, a.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, a.prototype.backdrop = function(e) {
        var t = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = s.support.transition && i;
            if (this.$backdrop = s(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", s.proxy(function(e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                t.removeBackdrop(), e && e()
            };
            s.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : o()
        } else e && e()
    }, a.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, a.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, a.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, a.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, a.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, a.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, a.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var e = s.fn.modal;
    s.fn.modal = r, s.fn.modal.Constructor = a, s.fn.modal.noConflict = function() {
        return s.fn.modal = e, this
    }, s(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t = s(this),
            i = t.attr("href"),
            n = s(t.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            o = n.data("bs.modal") ? "toggle" : s.extend({
                remote: !/#/.test(i) && i
            }, n.data(), t.data());
        t.is("a") && e.preventDefault(), n.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                t.is(":visible") && t.trigger("focus")
            })
        }), r.call(n, o, this)
    })
}(jQuery),
function(m) {
    "use strict";
    var v = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    v.VERSION = "3.3.6", v.TRANSITION_DURATION = 150, v.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, v.prototype.init = function(e, t, i) {
        if (this.enabled = !0, this.type = e, this.$element = m(t), this.options = this.getOptions(i), this.$viewport = this.options.viewport && m(m.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), o = n.length; o--;) {
            var s = n[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, m.proxy(this.toggle, this));
            else if ("manual" != s) {
                var r = "hover" == s ? "mouseenter" : "focusin",
                    a = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, m.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, m.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = m.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, v.prototype.getDefaults = function() {
        return v.DEFAULTS
    }, v.prototype.getOptions = function(e) {
        return (e = m.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, v.prototype.getDelegateOptions = function() {
        var i = {},
            n = this.getDefaults();
        return this._options && m.each(this._options, function(e, t) {
            n[e] != t && (i[e] = t)
        }), i
    }, v.prototype.enter = function(e) {
        var t = e instanceof this.constructor ? e : m(e.currentTarget).data("bs." + this.type);
        return t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), m(e.currentTarget).data("bs." + this.type, t)), e instanceof m.Event && (t.inState["focusin" == e.type ? "focus" : "hover"] = !0), t.tip().hasClass("in") || "in" == t.hoverState ? void(t.hoverState = "in") : (clearTimeout(t.timeout), t.hoverState = "in", t.options.delay && t.options.delay.show ? void(t.timeout = setTimeout(function() {
            "in" == t.hoverState && t.show()
        }, t.options.delay.show)) : t.show())
    }, v.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, v.prototype.leave = function(e) {
        var t = e instanceof this.constructor ? e : m(e.currentTarget).data("bs." + this.type);
        return t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), m(e.currentTarget).data("bs." + this.type, t)), e instanceof m.Event && (t.inState["focusout" == e.type ? "focus" : "hover"] = !1), t.isInStateTrue() ? void 0 : (clearTimeout(t.timeout), t.hoverState = "out", t.options.delay && t.options.delay.hide ? void(t.timeout = setTimeout(function() {
            "out" == t.hoverState && t.hide()
        }, t.options.delay.hide)) : t.hide())
    }, v.prototype.show = function() {
        var e = m.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var t = m.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !t) return;
            var i = this,
                n = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), n.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && n.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                r = /\s?auto?\s?/i,
                a = r.test(s);
            a && (s = s.replace(r, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var l = this.getPosition(),
                c = n[0].offsetWidth,
                d = n[0].offsetHeight;
            if (a) {
                var u = s,
                    p = this.getPosition(this.$viewport);
                s = "bottom" == s && l.bottom + d > p.bottom ? "top" : "top" == s && l.top - d < p.top ? "bottom" : "right" == s && l.right + c > p.width ? "left" : "left" == s && l.left - c < p.left ? "right" : s, n.removeClass(u).addClass(s)
            }
            var f = this.getCalculatedOffset(s, l, c, d);
            this.applyPlacement(f, s);
            var h = function() {
                var e = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == e && i.leave(i)
            };
            m.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", h).emulateTransitionEnd(v.TRANSITION_DURATION) : h()
        }
    }, v.prototype.applyPlacement = function(e, t) {
        var i = this.tip(),
            n = i[0].offsetWidth,
            o = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            r = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(r) && (r = 0), e.top += s, e.left += r, m.offset.setOffset(i[0], m.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, e), 0), i.addClass("in");
        var a = i[0].offsetWidth,
            l = i[0].offsetHeight;
        "top" == t && l != o && (e.top = e.top + o - l);
        var c = this.getViewportAdjustedDelta(t, e, a, l);
        c.left ? e.left += c.left : e.top += c.top;
        var d = /top|bottom/.test(t),
            u = d ? 2 * c.left - n + a : 2 * c.top - o + l,
            p = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(u, i[0][p], d)
    }, v.prototype.replaceArrow = function(e, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - e / t) + "%").css(i ? "top" : "left", "")
    }, v.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, v.prototype.hide = function(e) {
        function t() {
            "in" != i.hoverState && n.detach(), i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
        }
        var i = this,
            n = m(this.$tip),
            o = m.Event("hide.bs." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (n.removeClass("in"), m.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", t).emulateTransitionEnd(v.TRANSITION_DURATION) : t(), this.hoverState = null, this)
    }, v.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, v.prototype.hasContent = function() {
        return this.getTitle()
    }, v.prototype.getPosition = function(e) {
        var t = (e = e || this.$element)[0],
            i = "BODY" == t.tagName,
            n = t.getBoundingClientRect();
        null == n.width && (n = m.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var o = i ? {
                top: 0,
                left: 0
            } : e.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            r = i ? {
                width: m(window).width(),
                height: m(window).height()
            } : null;
        return m.extend({}, n, s, r, o)
    }, v.prototype.getCalculatedOffset = function(e, t, i, n) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : "top" == e ? {
            top: t.top - n,
            left: t.left + t.width / 2 - i / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - n / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - n / 2,
            left: t.left + t.width
        }
    }, v.prototype.getViewportAdjustedDelta = function(e, t, i, n) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - s - r.scroll,
                l = t.top + s - r.scroll + n;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var c = t.left - s,
                d = t.left + s + i;
            c < r.left ? o.left = r.left - c : d > r.right && (o.left = r.left + r.width - d)
        }
        return o
    }, v.prototype.getTitle = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }, v.prototype.getUID = function(e) {
        for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
        return e
    }, v.prototype.tip = function() {
        if (!this.$tip && (this.$tip = m(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, v.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, v.prototype.enable = function() {
        this.enabled = !0
    }, v.prototype.disable = function() {
        this.enabled = !1
    }, v.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, v.prototype.toggle = function(e) {
        var t = this;
        e && ((t = m(e.currentTarget).data("bs." + this.type)) || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), m(e.currentTarget).data("bs." + this.type, t))), e ? (t.inState.click = !t.inState.click, t.isInStateTrue() ? t.enter(t) : t.leave(t)) : t.tip().hasClass("in") ? t.leave(t) : t.enter(t)
    }, v.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null
        })
    };
    var e = m.fn.tooltip;
    m.fn.tooltip = function(n) {
        return this.each(function() {
            var e = m(this),
                t = e.data("bs.tooltip"),
                i = "object" == typeof n && n;
            (t || !/destroy|hide/.test(n)) && (t || e.data("bs.tooltip", t = new v(this, i)), "string" == typeof n && t[n]())
        })
    }, m.fn.tooltip.Constructor = v, m.fn.tooltip.noConflict = function() {
        return m.fn.tooltip = e, this
    }
}(jQuery),
function(o) {
    "use strict";
    var s = function(e, t) {
        this.init("popover", e, t)
    };
    if (!o.fn.tooltip) throw new Error("Popover requires tooltip.js");
    s.VERSION = "3.3.6", s.DEFAULTS = o.extend({}, o.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), ((s.prototype = o.extend({}, o.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function() {
        return s.DEFAULTS
    }, s.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            i = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, s.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, s.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, s.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var e = o.fn.popover;
    o.fn.popover = function(n) {
        return this.each(function() {
            var e = o(this),
                t = e.data("bs.popover"),
                i = "object" == typeof n && n;
            (t || !/destroy|hide/.test(n)) && (t || e.data("bs.popover", t = new s(this, i)), "string" == typeof n && t[n]())
        })
    }, o.fn.popover.Constructor = s, o.fn.popover.noConflict = function() {
        return o.fn.popover = e, this
    }
}(jQuery),
function(s) {
    "use strict";

    function o(e, t) {
        this.$body = s(document.body), this.$scrollElement = s(s(e).is(document.body) ? window : e), this.options = s.extend({}, o.DEFAULTS, t), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)), this.refresh(), this.process()
    }

    function t(n) {
        return this.each(function() {
            var e = s(this),
                t = e.data("bs.scrollspy"),
                i = "object" == typeof n && n;
            t || e.data("bs.scrollspy", t = new o(this, i)), "string" == typeof n && t[n]()
        })
    }
    o.VERSION = "3.3.6", o.DEFAULTS = {
        offset: 10
    }, o.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, o.prototype.refresh = function() {
        var e = this,
            n = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), s.isWindow(this.$scrollElement[0]) || (n = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = s(this),
                t = e.data("target") || e.attr("href"),
                i = /^#./.test(t) && s(t);
            return i && i.length && i.is(":visible") && [
                [i[n]().top + o, t]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, o.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            o = this.offsets,
            s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), n <= t) return r != (e = s[s.length - 1]) && this.activate(e);
        if (r && t < o[0]) return this.activeTarget = null, this.clear();
        for (e = o.length; e--;) r != s[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(s[e])
    }, o.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var t = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = s(t).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, o.prototype.clear = function() {
        s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var e = s.fn.scrollspy;
    s.fn.scrollspy = t, s.fn.scrollspy.Constructor = o, s.fn.scrollspy.noConflict = function() {
        return s.fn.scrollspy = e, this
    }, s(window).on("load.bs.scrollspy.data-api", function() {
        s('[data-spy="scroll"]').each(function() {
            var e = s(this);
            t.call(e, e.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";

    function t(i) {
        return this.each(function() {
            var e = a(this),
                t = e.data("bs.tab");
            t || e.data("bs.tab", t = new r(this)), "string" == typeof i && t[i]()
        })
    }
    var r = function(e) {
        this.element = a(e)
    };
    r.VERSION = "3.3.6", r.TRANSITION_DURATION = 150, r.prototype.show = function() {
        var e = this.element,
            t = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = t.find(".active:last a"),
                o = a.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = a.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var r = a(i);
                this.activate(e.closest("li"), t), this.activate(r, r.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, r.prototype.activate = function(e, t, i) {
        function n() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var o = t.find("> .active"),
            s = i && a.support.transition && (o.length && o.hasClass("fade") || !!t.find("> .fade").length);
        o.length && s ? o.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n(), o.removeClass("in")
    };
    var e = a.fn.tab;
    a.fn.tab = t, a.fn.tab.Constructor = r, a.fn.tab.noConflict = function() {
        return a.fn.tab = e, this
    };
    var i = function(e) {
        e.preventDefault(), t.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function(l) {
    "use strict";

    function i(n) {
        return this.each(function() {
            var e = l(this),
                t = e.data("bs.affix"),
                i = "object" == typeof n && n;
            t || e.data("bs.affix", t = new c(this, i)), "string" == typeof n && t[n]()
        })
    }
    var c = function(e, t) {
        this.options = l.extend({}, c.DEFAULTS, t), this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(e, t, i, n) {
        var o = this.$target.scrollTop(),
            s = this.$element.offset(),
            r = this.$target.height();
        if (null != i && "top" == this.affixed) return o < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= e - n) && "bottom";
        var a = null == this.affixed,
            l = a ? o : s.top;
        return null != i && o <= i ? "top" : null != n && e - n <= l + (a ? r : t) && "bottom"
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(l.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                t = this.options.offset,
                i = t.top,
                n = t.bottom,
                o = Math.max(l(document).height(), l(document.body).height());
            "object" != typeof t && (n = i = t), "function" == typeof i && (i = t.top(this.$element)), "function" == typeof n && (n = t.bottom(this.$element));
            var s = this.getState(o, e, i, n);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var r = "affix" + (s ? "-" + s : ""),
                    a = l.Event(r + ".bs.affix");
                if (this.$element.trigger(a), a.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(r).trigger(r.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: o - e - n
            })
        }
    };
    var e = l.fn.affix;
    l.fn.affix = i, l.fn.affix.Constructor = c, l.fn.affix.noConflict = function() {
        return l.fn.affix = e, this
    }, l(window).on("load", function() {
        l('[data-spy="affix"]').each(function() {
            var e = l(this),
                t = e.data();
            t.offset = t.offset || {}, null != t.offsetBottom && (t.offset.bottom = t.offsetBottom), null != t.offsetTop && (t.offset.top = t.offsetTop), i.call(e, t)
        })
    })
}(jQuery),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(i) {
        function n(e) {
            if (o[e]) return o[e].exports;
            var t = o[e] = {
                exports: {},
                id: e,
                loaded: !1
            };
            return i[e].call(t.exports, t, t.exports, n), t.loaded = !0, t.exports
        }
        var o = {};
        return n.m = i, n.c = o, n.p = "dist/", n(0)
    }([function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            },
            s = n((n(i(1)), i(5))),
            r = n(i(6)),
            a = n(i(7)),
            l = n(i(8)),
            c = n(i(9)),
            d = n(i(10)),
            u = n(i(13)),
            p = [],
            f = !1,
            h = document.all && !window.atob,
            m = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded"
            },
            v = function() {
                return !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0] && (f = !0), f ? (p = (0, d.default)(p, m), (0, c.default)(p, m.once), p) : void 0
            },
            g = function() {
                p = (0, u.default)(), v()
            };
        e.exports = {
            init: function(e) {
                return m = o(m, e), p = (0, u.default)(), !0 === (t = m.disable) || "mobile" === t && l.default.mobile() || "phone" === t && l.default.phone() || "tablet" === t && l.default.tablet() || "function" == typeof t && !0 === t() || h ? void p.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                }) : (document.querySelector("body").setAttribute("data-aos-easing", m.easing), document.querySelector("body").setAttribute("data-aos-duration", m.duration), document.querySelector("body").setAttribute("data-aos-delay", m.delay), "DOMContentLoaded" === m.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? v(!0) : "load" === m.startEvent ? window.addEventListener(m.startEvent, function() {
                    v(!0)
                }) : document.addEventListener(m.startEvent, function() {
                    v(!0)
                }), window.addEventListener("resize", (0, r.default)(v, 50, !0)), window.addEventListener("orientationchange", (0, r.default)(v, 50, !0)), window.addEventListener("scroll", (0, s.default)(function() {
                    (0, c.default)(p, m.once)
                }, 99)), document.addEventListener("DOMNodeRemoved", function(e) {
                    var t = e.target;
                    t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, r.default)(g, 50, !0)
                }), (0, a.default)("[data-aos]", g), p);
                var t
            },
            refresh: v,
            refreshHard: g
        }
    }, function(e, t) {}, , , , function(e, t, i) {
        "use strict";
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            l = i(6);
        e.exports = function(e, t, i) {
            var n, o, s = !0,
                r = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            return o = void 0 === (n = i) ? "undefined" : a(n), !!n && ("object" == o || "function" == o) && (s = "leading" in i ? !!i.leading : s, r = "trailing" in i ? !!i.trailing : r), l(e, t, {
                leading: s,
                maxWait: t,
                trailing: r
            })
        }
    }, function(e, t) {
        "use strict";

        function y(e) {
            var t = void 0 === e ? "undefined" : a(e);
            return !!e && ("object" == t || "function" == t)
        }

        function b(e) {
            if ("number" == typeof e) return e;
            if ("symbol" == (void 0 === (t = e) ? "undefined" : a(t)) || (i = t) && "object" == (void 0 === i ? "undefined" : a(i)) && m.call(t) == c) return l;
            var t, i, n, o;
            if (y(e)) {
                var s = "[object Function]" == (o = y(n = e.valueOf) ? m.call(n) : "") || "[object GeneratorFunction]" == o ? e.valueOf() : e;
                e = y(s) ? s + "" : s
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(d, "");
            var r = p.test(e);
            return r || f.test(e) ? h(e.slice(2), r ? 2 : 8) : u.test(e) ? l : +e
        }
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            l = NaN,
            c = "[object Symbol]",
            d = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            p = /^0b[01]+$/i,
            f = /^0o[0-7]+$/i,
            h = parseInt,
            m = Object.prototype.toString,
            k = Math.max,
            w = Math.min,
            x = Date.now;
        e.exports = function(n, o, e) {
            function s(e) {
                var t = c,
                    i = d;
                return c = d = void 0, m = e, p = n.apply(i, t)
            }

            function r(e) {
                var t = e - h;
                return !h || o <= t || t < 0 || g && u <= e - m
            }

            function a() {
                var e, t, i = x();
                return r(i) ? l(i) : void(f = setTimeout(a, (t = o - ((e = i) - h), g ? w(t, u - (e - m)) : t)))
            }

            function l(e) {
                return clearTimeout(f), f = void 0, i && c ? s(e) : (c = d = void 0, p)
            }

            function t() {
                var e, t = x(),
                    i = r(t);
                if (c = arguments, d = this, h = t, i) {
                    if (void 0 === f) return m = e = h, f = setTimeout(a, o), v ? s(e) : p;
                    if (g) return clearTimeout(f), f = setTimeout(a, o), s(h)
                }
                return void 0 === f && (f = setTimeout(a, o)), p
            }
            var c, d, u, p, f, h = 0,
                m = 0,
                v = !1,
                g = !1,
                i = !0;
            if ("function" != typeof n) throw new TypeError("Expected a function");
            return o = b(o) || 0, y(e) && (v = !!e.leading, u = (g = "maxWait" in e) ? k(b(e.maxWait) || 0, o) : u, i = "trailing" in e ? !!e.trailing : i), t.cancel = function() {
                void 0 !== f && clearTimeout(f), h = m = 0, c = d = f = void 0
            }, t.flush = function() {
                return void 0 === f ? p : l(x())
            }, t
        }
    }, function(e, t) {
        "use strict";

        function i() {
            for (var e, t, i = 0, n = l.length; i < n; i++) {
                e = l[i];
                for (var o, s = 0, r = (t = a.querySelectorAll(e.selector)).length; s < r; s++)(o = t[s]).ready || (o.ready = !0, e.fn.call(o, o))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = window.document,
            n = window.MutationObserver || window.WebKitMutationObserver,
            l = [],
            o = void 0;
        t.default = function(e, t) {
            l.push({
                selector: e,
                fn: t
            }), !o && n && (o = new n(i)).observe(a.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            }), i()
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
                function n(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(e, t, i) {
                    return t && n(e.prototype, t), i && n(e, i), e
                }
            }(),
            i = function() {
                function i() {
                    ! function(e, t) {
                        if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
                    }(this)
                }
                return n(i, [{
                    key: "phone",
                    value: function() {
                        var e, t = !1;
                        return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e, t = !1;
                        return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), i
            }();
        t.default = new i
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, r) {
            var a = window.pageYOffset,
                l = window.innerHeight;
            e.forEach(function(e, t) {
                var i, n, o, s;
                n = l + a, o = r, s = (i = e).node.getAttribute("data-aos-once"), n > i.position ? i.node.classList.add("aos-animate") : void 0 !== s && ("false" === s || !o && "true" !== s) && i.node.classList.remove("aos-animate")
            })
        }
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = (n = i(11)) && n.__esModule ? n : {
            default: n
        };
        t.default = function(e, i) {
            return e.forEach(function(e, t) {
                e.node.classList.add("aos-init"), e.position = (0, o.default)(e.node, i.offset)
            }), e
        }
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, r = (n = i(12)) && n.__esModule ? n : {
            default: n
        };
        t.default = function(e, t) {
            var i = 0,
                n = 0,
                o = window.innerHeight,
                s = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
            switch (s.offset && !isNaN(s.offset) && (n = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (e = document.querySelectorAll(s.anchor)[0]), i = (0, r.default)(e).top, s.anchorPlacement) {
                case "top-bottom":
                    break;
                case "center-bottom":
                    i += e.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    i += e.offsetHeight;
                    break;
                case "top-center":
                    i += o / 2;
                    break;
                case "bottom-center":
                    i += o / 2 + e.offsetHeight;
                    break;
                case "center-center":
                    i += o / 2 + e.offsetHeight / 2;
                    break;
                case "top-top":
                    i += o;
                    break;
                case "bottom-top":
                    i += e.offsetHeight + o;
                    break;
                case "center-top":
                    i += e.offsetHeight / 2 + o
            }
            return s.anchorPlacement || s.offset || isNaN(t) || (n = t), i + n
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: i,
                left: t
            }
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            e = e || document.querySelectorAll("[data-aos]");
            var i = [];
            return [].forEach.call(e, function(e, t) {
                i.push({
                    node: e
                })
            }), i
        }
    }])
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(N) {
    function o(e, t) {
        this.element = e, this.options = N.extend({}, i, t), this.init()
    }

    function O(e) {
        if (!N(e.target).parents().hasClass("jq-selectbox") && "OPTION" != e.target.nodeName && N("div.jq-selectbox.opened").length) {
            e = N("div.jq-selectbox.opened");
            var t = N("div.jq-selectbox__search input", e),
                i = N("div.jq-selectbox__dropdown", e);
            e.find("select").data("_" + s).options.onSelectClosed.call(e), t.length && t.val("").keyup(), i.hide().find("li.sel").addClass("selected"), e.removeClass("focused opened dropup dropdown")
        }
    }
    var s = "styler",
        i = {
            wrapper: "form",
            idSuffix: "-styler",
            filePlaceholder: "Ð¤Ð°Ð¹Ð» Ð½Ðµ Ð²Ñ‹Ð±Ñ€Ð°Ð½",
            fileBrowse: "ÐžÐ±Ð·Ð¾Ñ€...",
            fileNumber: "Ð’Ñ‹Ð±Ñ€Ð°Ð½Ð¾ Ñ„Ð°Ð¹Ð»Ð¾Ð²: %s",
            selectPlaceholder: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ...",
            selectSearch: !1,
            selectSearchLimit: 10,
            selectSearchNotFound: "Ð¡Ð¾Ð²Ð¿Ð°Ð´ÐµÐ½Ð¸Ð¹ Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½Ð¾",
            selectSearchPlaceholder: "ÐŸÐ¾Ð¸ÑÐº...",
            selectVisibleOptions: 0,
            singleSelectzIndex: "100",
            selectSmartPositioning: !0,
            onSelectOpened: function() {},
            onSelectClosed: function() {},
            onFormStyled: function() {}
        };
    o.prototype = {
        init: function() {
            function $() {
                var e = "",
                    t = "",
                    i = "",
                    n = "";
                void 0 !== A.attr("id") && "" !== A.attr("id") && (e = ' id="' + A.attr("id") + j.idSuffix + '"'), void 0 !== A.attr("title") && "" !== A.attr("title") && (t = ' title="' + A.attr("title") + '"'), void 0 !== A.attr("class") && "" !== A.attr("class") && (i = " " + A.attr("class"));
                var o, s = A.data();
                for (o in s) "" !== s[o] && "_styler" !== o && (n += " data-" + o + '="' + s[o] + '"');
                this.id = e + n, this.title = t, this.classes = i
            }
            var A = N(this.element),
                j = this.options,
                D = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
                e = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));
            if (A.is(":checkbox")) {
                var t = function() {
                    var e = new $,
                        t = N("<div" + e.id + ' class="jq-checkbox' + e.classes + '"' + e.title + '><div class="jq-checkbox__div"></div></div>');
                    A.css({
                        position: "absolute",
                        zIndex: "-1",
                        opacity: 0,
                        margin: 0,
                        padding: 0
                    }).after(t).prependTo(t), t.attr("unselectable", "on").css({
                        "-webkit-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "-o-user-select": "none",
                        "user-select": "none",
                        display: "inline-block",
                        position: "relative",
                        overflow: "hidden"
                    }), A.is(":checked") && t.addClass("checked"), A.is(":disabled") && t.addClass("disabled"), t.click(function(e) {
                        e.preventDefault(), t.is(".disabled") || (A.is(":checked") ? (A.prop("checked", !1), t.removeClass("checked")) : (A.prop("checked", !0), t.addClass("checked")), A.focus().change())
                    }), A.closest("label").add('label[for="' + A.attr("id") + '"]').on("click.styler", function(e) {
                        N(e.target).is("a") || N(e.target).closest(t).length || (t.triggerHandler("click"), e.preventDefault())
                    }), A.on("change.styler", function() {
                        A.is(":checked") ? t.addClass("checked") : t.removeClass("checked")
                    }).on("keydown.styler", function(e) {
                        32 == e.which && t.click()
                    }).on("focus.styler", function() {
                        t.is(".disabled") || t.addClass("focused")
                    }).on("blur.styler", function() {
                        t.removeClass("focused")
                    })
                };
                t(), A.on("refresh", function() {
                    A.closest("label").add('label[for="' + A.attr("id") + '"]').off(".styler"), A.off(".styler").parent().before(A).remove(), t()
                })
            } else if (A.is(":radio")) {
                var i = function() {
                    var e = new $,
                        t = N("<div" + e.id + ' class="jq-radio' + e.classes + '"' + e.title + '><div class="jq-radio__div"></div></div>');
                    A.css({
                        position: "absolute",
                        zIndex: "-1",
                        opacity: 0,
                        margin: 0,
                        padding: 0
                    }).after(t).prependTo(t), t.attr("unselectable", "on").css({
                        "-webkit-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "-o-user-select": "none",
                        "user-select": "none",
                        display: "inline-block",
                        position: "relative"
                    }), A.is(":checked") && t.addClass("checked"), A.is(":disabled") && t.addClass("disabled"), t.click(function(e) {
                        e.preventDefault(), t.is(".disabled") || (t.closest(j.wrapper).find('input[name="' + A.attr("name") + '"]').prop("checked", !1).parent().removeClass("checked"), A.prop("checked", !0).parent().addClass("checked"), A.focus().change())
                    }), A.closest("label").add('label[for="' + A.attr("id") + '"]').on("click.styler", function(e) {
                        N(e.target).is("a") || N(e.target).closest(t).length || (t.triggerHandler("click"), e.preventDefault())
                    }), A.on("change.styler", function() {
                        A.parent().addClass("checked")
                    }).on("focus.styler", function() {
                        t.is(".disabled") || t.addClass("focused")
                    }).on("blur.styler", function() {
                        t.removeClass("focused")
                    })
                };
                i(), A.on("refresh", function() {
                    A.closest("label").add('label[for="' + A.attr("id") + '"]').off(".styler"), A.off(".styler").parent().before(A).remove(), i()
                })
            } else if (A.is(":file")) {
                A.css({
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    margin: 0,
                    padding: 0
                });
                var n = function() {
                    var e = new $,
                        i = A.data("placeholder");
                    void 0 === i && (i = j.filePlaceholder);
                    var t = A.data("browse");
                    void 0 !== t && "" !== t || (t = j.fileBrowse);
                    var n = N("<div" + e.id + ' class="jq-file' + e.classes + '"' + e.title + ' style="display: inline-block; position: relative; overflow: hidden"></div>'),
                        o = N('<div class="jq-file__name">' + i + "</div>").appendTo(n);
                    N('<div class="jq-file__browse">' + t + "</div>").appendTo(n), A.after(n).appendTo(n), A.is(":disabled") && n.addClass("disabled"), A.on("change.styler", function() {
                        var e = A.val();
                        if (A.is("[multiple]")) {
                            e = "";
                            var t = A[0].files.length;
                            0 < t && (void 0 === (e = A.data("number")) && (e = j.fileNumber), e = e.replace("%s", t))
                        }
                        o.text(e.replace(/.+[\\\/]/, "")), "" === e ? (o.text(i), n.removeClass("changed")) : n.addClass("changed")
                    }).on("focus.styler", function() {
                        n.addClass("focused")
                    }).on("blur.styler", function() {
                        n.removeClass("focused")
                    }).on("click.styler", function() {
                        n.removeClass("focused")
                    })
                };
                n(), A.on("refresh", function() {
                    A.off(".styler").parent().before(A).remove(), n()
                })
            } else if (A.is('input[type="number"]')) {
                var o = function() {
                    var e = N('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>');
                    A.after(e).prependTo(e).wrap('<div class="jq-number__field"></div>'), A.is(":disabled") && e.addClass("disabled");
                    var n, o, s, t = null,
                        i = null;
                    void 0 !== A.attr("min") && (n = A.attr("min")), void 0 !== A.attr("max") && (o = A.attr("max")), s = void 0 !== A.attr("step") && N.isNumeric(A.attr("step")) ? Number(A.attr("step")) : Number(1);
                    var r = function(e) {
                        var t, i = A.val();
                        N.isNumeric(i) || (i = 0, A.val("0")), e.is(".minus") ? (t = parseInt(i, 10) - s, 0 < s && (t = Math.ceil(t / s) * s)) : e.is(".plus") && (t = parseInt(i, 10) + s, 0 < s && (t = Math.floor(t / s) * s)), N.isNumeric(n) && N.isNumeric(o) ? n <= t && t <= o && A.val(t) : N.isNumeric(n) && !N.isNumeric(o) ? n <= t && A.val(t) : !N.isNumeric(n) && N.isNumeric(o) ? t <= o && A.val(t) : A.val(t)
                    };
                    e.is(".disabled") || (e.on("mousedown", "div.jq-number__spin", function() {
                        var e = N(this);
                        r(e), t = setTimeout(function() {
                            i = setInterval(function() {
                                r(e)
                            }, 40)
                        }, 350)
                    }).on("mouseup mouseout", "div.jq-number__spin", function() {
                        clearTimeout(t), clearInterval(i)
                    }), A.on("focus.styler", function() {
                        e.addClass("focused")
                    }).on("blur.styler", function() {
                        e.removeClass("focused")
                    }))
                };
                o(), A.on("refresh", function() {
                    A.off(".styler").closest(".jq-number").before(A).remove(), o()
                })
            } else if (A.is("select")) {
                var s = function() {
                    function T(e) {
                        e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function(e) {
                            var t = null;
                            "mousewheel" == e.type ? t = -1 * e.originalEvent.wheelDelta : "DOMMouseScroll" == e.type && (t = 40 * e.originalEvent.detail), t && (e.stopPropagation(), e.preventDefault(), N(this).scrollTop(t + N(this).scrollTop()))
                        })
                    }

                    function C() {
                        for (var e = 0; e < S.length; e++) {
                            var t = S.eq(e),
                                i = "",
                                n = "",
                                o = i = "",
                                s = "",
                                r = "",
                                a = "",
                                l = "",
                                c = "";
                            t.prop("selected") && (n = "selected sel"), t.is(":disabled") && (n = "disabled"), t.is(":selected:disabled") && (n = "selected sel disabled"), void 0 !== t.attr("id") && "" !== t.attr("id") && (o = ' id="' + t.attr("id") + j.idSuffix + '"'), void 0 !== t.attr("title") && "" !== S.attr("title") && (s = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (a = " " + t.attr("class"), c = ' data-jqfs-class="' + t.attr("class") + '"');
                            var d, u = t.data();
                            for (d in u) "" !== u[d] && (r += " data-" + d + '="' + u[d] + '"');
                            "" !== n + a && (i = ' class="' + n + a + '"'), i = "<li" + c + r + i + s + o + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (l = " " + t.parent().attr("class")), i = "<li" + c + r + ' class="' + n + a + " option" + l + '"' + s + o + ">" + t.html() + "</li>", t.is(":first-child") && (i = '<li class="optgroup' + l + '">' + t.parent().attr("label") + "</li>" + i)), E += i
                        }
                    }
                    var S = N("option", A),
                        E = "";
                    A.is("[multiple]") ? e || D || function() {
                        var e = new $,
                            t = N("<div" + e.id + ' class="jq-select-multiple jqselect' + e.classes + '"' + e.title + ' style="display: inline-block; position: relative"></div>');
                        A.css({
                            margin: 0,
                            padding: 0
                        }).after(t), C(), t.append("<ul>" + E + "</ul>");
                        var i = N("ul", t).css({
                                position: "relative",
                                "overflow-x": "hidden",
                                "-webkit-overflow-scrolling": "touch"
                            }),
                            o = N("li", t).attr("unselectable", "on"),
                            n = (e = A.attr("size"), i.outerHeight()),
                            s = o.outerHeight();
                        void 0 !== e && 0 < e ? i.css({
                            height: s * e
                        }) : i.css({
                            height: 4 * s
                        }), n > t.height() && (i.css("overflowY", "scroll"), T(i), o.filter(".selected").length && i.scrollTop(i.scrollTop() + o.filter(".selected").position().top)), A.prependTo(t).css({
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            opacity: 0
                        }), A.is(":disabled") ? (t.addClass("disabled"), S.each(function() {
                            N(this).is(":selected") && o.eq(N(this).index()).addClass("selected")
                        })) : (o.filter(":not(.disabled):not(.optgroup)").click(function(e) {
                            A.focus();
                            var t = N(this);
                            if (e.ctrlKey || e.metaKey || t.addClass("selected"), e.shiftKey || t.addClass("first"), e.ctrlKey || e.metaKey || e.shiftKey || t.siblings().removeClass("selected first"), (e.ctrlKey || e.metaKey) && (t.is(".selected") ? t.removeClass("selected first") : t.addClass("selected first"), t.siblings().removeClass("first")), e.shiftKey) {
                                var i = !1,
                                    n = !1;
                                t.siblings().removeClass("selected").siblings(".first").addClass("selected"), t.prevAll().each(function() {
                                    N(this).is(".first") && (i = !0)
                                }), t.nextAll().each(function() {
                                    N(this).is(".first") && (n = !0)
                                }), i && t.prevAll().each(function() {
                                    if (N(this).is(".selected")) return !1;
                                    N(this).not(".disabled, .optgroup").addClass("selected")
                                }), n && t.nextAll().each(function() {
                                    if (N(this).is(".selected")) return !1;
                                    N(this).not(".disabled, .optgroup").addClass("selected")
                                }), 1 == o.filter(".selected").length && t.addClass("first")
                            }
                            S.prop("selected", !1), o.filter(".selected").each(function() {
                                var e = N(this),
                                    t = e.index();
                                e.is(".option") && (t -= e.prevAll(".optgroup").length), S.eq(t).prop("selected", !0)
                            }), A.change()
                        }), S.each(function(e) {
                            N(this).data("optionIndex", e)
                        }), A.on("change.styler", function() {
                            o.removeClass("selected");
                            var t = [];
                            S.filter(":selected").each(function() {
                                t.push(N(this).data("optionIndex"))
                            }), o.not(".optgroup").filter(function(e) {
                                return -1 < N.inArray(e, t)
                            }).addClass("selected")
                        }).on("focus.styler", function() {
                            t.addClass("focused")
                        }).on("blur.styler", function() {
                            t.removeClass("focused")
                        }), n > t.height() && A.on("keydown.styler", function(e) {
                            38 != e.which && 37 != e.which && 33 != e.which || i.scrollTop(i.scrollTop() + o.filter(".selected").position().top - s), 40 != e.which && 39 != e.which && 34 != e.which || i.scrollTop(i.scrollTop() + o.filter(".selected:last").position().top - i.innerHeight() + 2 * s)
                        }))
                    }() : function() {
                        var e = new $,
                            t = "",
                            i = A.data("placeholder"),
                            n = A.data("search"),
                            o = A.data("search-limit"),
                            s = A.data("search-not-found"),
                            r = A.data("search-placeholder"),
                            a = A.data("z-index"),
                            l = A.data("smart-positioning");
                        void 0 === i && (i = j.selectPlaceholder), void 0 !== n && "" !== n || (n = j.selectSearch), void 0 !== o && "" !== o || (o = j.selectSearchLimit), void 0 !== s && "" !== s || (s = j.selectSearchNotFound), void 0 === r && (r = j.selectSearchPlaceholder), void 0 !== a && "" !== a || (a = j.singleSelectzIndex), void 0 !== l && "" !== l || (l = j.selectSmartPositioning);
                        var c = N("<div" + e.id + ' class="jq-selectbox jqselect' + e.classes + '" style="display: inline-block; position: relative; z-index:' + a + '"><div class="jq-selectbox__select"' + e.title + ' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');
                        A.css({
                            margin: 0,
                            padding: 0
                        }).after(c).prependTo(c);
                        var d = N("div.jq-selectbox__select", c),
                            u = N("div.jq-selectbox__select-text", c);
                        e = S.filter(":selected"), C(), n && (t = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + r + '"></div><div class="jq-selectbox__not-found">' + s + "</div>");
                        var p = N('<div class="jq-selectbox__dropdown" style="position: absolute">' + t + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + E + "</ul></div>");
                        c.append(p);
                        var f = N("ul", p),
                            h = N("li", p),
                            m = N("input", p),
                            v = N("div.jq-selectbox__not-found", p).hide();
                        h.length < o && m.parent().hide(), "" === A.val() ? u.text(i).addClass("placeholder") : u.text(e.text());
                        var g = 0,
                            y = 0;
                        h.each(function() {
                            var e = N(this);
                            e.css({
                                display: "inline-block"
                            }), e.innerWidth() > g && (g = e.innerWidth(), y = e.width()), e.css({
                                display: ""
                            })
                        }), u.is(".placeholder") && u.width() > g ? u.width(u.width()) : (n = (t = c.clone().appendTo("body").width("auto")).outerWidth(), t.remove(), n == c.outerWidth() && u.width(y)), g > c.width() && p.width(g), "" === S.first().text() && "" !== A.data("placeholder") && h.first().hide(), A.css({
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            opacity: 0
                        });
                        var b = c.outerHeight(),
                            k = m.outerHeight(),
                            w = f.css("max-height");
                        (t = h.filter(".selected")).length < 1 && h.first().addClass("selected sel"), void 0 === h.data("li-height") && h.data("li-height", h.outerHeight());
                        var x = p.css("top");
                        if ("auto" == p.css("left") && p.css({
                                left: 0
                            }), "auto" == p.css("top") && p.css({
                                top: b
                            }), p.hide(), t.length && (S.first().text() != e.text() && c.addClass("changed"), c.data("jqfs-class", t.data("jqfs-class")), c.addClass(t.data("jqfs-class"))), A.is(":disabled")) return c.addClass("disabled");
                        d.click(function() {
                            if (N("div.jq-selectbox").filter(".opened").length && j.onSelectClosed.call(N("div.jq-selectbox").filter(".opened")), A.focus(), !D) {
                                var t = N(window),
                                    i = h.data("li-height"),
                                    n = c.offset().top,
                                    o = t.height() - b - (n - t.scrollTop());
                                void 0 !== (r = A.data("visible-options")) && "" !== r || (r = j.selectVisibleOptions);
                                var e = 5 * i,
                                    s = i * r;
                                0 < r && r < 6 && (e = s), 0 === r && (s = "auto");
                                var r = function() {
                                    p.height("auto").css({
                                        bottom: "auto",
                                        top: x
                                    });
                                    var e = function() {
                                        f.css("max-height", Math.floor((o - 20 - k) / i) * i)
                                    };
                                    e(), f.css("max-height", s), "none" != w && f.css("max-height", w), o < p.outerHeight() + 20 && e()
                                };
                                !0 === l || 1 === l ? e + k + 20 < o ? (r(), c.removeClass("dropup").addClass("dropdown")) : (function() {
                                    p.height("auto").css({
                                        top: "auto",
                                        bottom: x
                                    });
                                    var e = function() {
                                        f.css("max-height", Math.floor((n - t.scrollTop() - 20 - k) / i) * i)
                                    };
                                    e(), f.css("max-height", s), "none" != w && f.css("max-height", w), n - t.scrollTop() - 20 < p.outerHeight() + 20 && e()
                                }(), c.removeClass("dropdown").addClass("dropup")) : (!1 === l || 0 === l) && e + k + 20 < o && (r(), c.removeClass("dropup").addClass("dropdown")), c.offset().left + p.outerWidth() > t.width() && p.css({
                                    left: "auto",
                                    right: 0
                                }), N("div.jqselect").css({
                                    zIndex: a - 1
                                }).removeClass("opened"), c.css({
                                    zIndex: a
                                }), p.is(":hidden") ? (N("div.jq-selectbox__dropdown:visible").hide(), p.show(), c.addClass("opened focused"), j.onSelectOpened.call(c)) : (p.hide(), c.removeClass("opened dropup dropdown"), N("div.jq-selectbox").filter(".opened").length && j.onSelectClosed.call(c)), m.length && (m.val("").keyup(), v.hide(), m.keyup(function() {
                                    var e = N(this).val();
                                    h.each(function() {
                                        N(this).html().match(RegExp(".*?" + e + ".*?", "i")) ? N(this).show() : N(this).hide()
                                    }), "" === S.first().text() && "" !== A.data("placeholder") && h.first().hide(), h.filter(":visible").length < 1 ? v.show() : v.hide()
                                })), h.filter(".selected").length && ("" === A.val() ? f.scrollTop(0) : (0 != f.innerHeight() / i % 2 && (i /= 2), f.scrollTop(f.scrollTop() + h.filter(".selected").position().top - f.innerHeight() / 2 + i))), T(f)
                            }
                        }), h.hover(function() {
                            N(this).siblings().removeClass("selected")
                        }), h.filter(".selected").text(), h.filter(":not(.disabled):not(.optgroup)").click(function() {
                            A.focus();
                            var e = N(this),
                                t = e.text();
                            if (!e.is(".selected")) {
                                var i = (i = e.index()) - e.prevAll(".optgroup").length;
                                e.addClass("selected sel").siblings().removeClass("selected sel"), S.prop("selected", !1).eq(i).prop("selected", !0), u.text(t), c.data("jqfs-class") && c.removeClass(c.data("jqfs-class")), c.data("jqfs-class", e.data("jqfs-class")), c.addClass(e.data("jqfs-class")), A.change()
                            }
                            p.hide(), c.removeClass("opened dropup dropdown"), j.onSelectClosed.call(c)
                        }), p.mouseout(function() {
                            N("li.sel", p).addClass("selected")
                        }), A.on("change.styler", function() {
                            u.text(S.filter(":selected").text()).removeClass("placeholder"), h.removeClass("selected sel").not(".optgroup").eq(A[0].selectedIndex).addClass("selected sel"), S.first().text() != h.filter(".selected").text() ? c.addClass("changed") : c.removeClass("changed")
                        }).on("focus.styler", function() {
                            c.addClass("focused"), N("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                        }).on("blur.styler", function() {
                            c.removeClass("focused")
                        }).on("keydown.styler keyup.styler", function(e) {
                            var t = h.data("li-height");
                            "" === A.val() ? u.text(i).addClass("placeholder") : u.text(S.filter(":selected").text()), h.removeClass("selected sel").not(".optgroup").eq(A[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === A.val() ? f.scrollTop(0) : f.scrollTop(f.scrollTop() + h.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || f.scrollTop(f.scrollTop() + h.filter(".selected").position().top - f.innerHeight() + t), 13 == e.which && (e.preventDefault(), p.hide(), c.removeClass("opened dropup dropdown"), j.onSelectClosed.call(c))
                        }).on("keydown.styler", function(e) {
                            32 == e.which && (e.preventDefault(), d.click())
                        }), O.registered || (N(document).on("click", O), O.registered = !0)
                    }()
                };
                s(), A.on("refresh", function() {
                    A.off(".styler").parent().before(A).remove(), s()
                })
            } else A.is(":reset") && A.on("click", function() {
                setTimeout(function() {
                    A.closest(j.wrapper).find("input, select").trigger("refresh")
                }, 1)
            })
        },
        destroy: function() {
            var e = N(this.element);
            e.is(":checkbox") || e.is(":radio") ? (e.removeData("_" + s).off(".styler refresh").removeAttr("style").parent().before(e).remove(), e.closest("label").add('label[for="' + e.attr("id") + '"]').off(".styler")) : e.is('input[type="number"]') ? e.removeData("_" + s).off(".styler refresh").closest(".jq-number").before(e).remove() : (e.is(":file") || e.is("select")) && e.removeData("_" + s).off(".styler refresh").removeAttr("style").parent().before(e).remove()
        }
    }, N.fn[s] = function(t) {
        var i, n = arguments;
        return void 0 === t || "object" == typeof t ? (this.each(function() {
            N.data(this, "_" + s) || N.data(this, "_" + s, new o(this, t))
        }).promise().done(function() {
            var e = N(this[0]).data("_" + s);
            e && e.options.onFormStyled.call()
        }), this) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each(function() {
            var e = N.data(this, "_" + s);
            e instanceof o && "function" == typeof e[t] && (i = e[t].apply(e, Array.prototype.slice.call(n, 1)))
        }), void 0 !== i ? i : this) : void 0
    }, O.registered = !1
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    "use strict";
    var o, r = window.Slick || {};
    (o = 0, r = function(e, t) {
        var i, n = this;
        n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(e),
            appendDots: c(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return c('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = c(e).data("slick") || {}, n.options = c.extend({}, n.defaults, t, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = o++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, r.prototype.addSlide = r.prototype.slickAdd = function(e, t, i) {
        var n = this;
        if ("boolean" == typeof t) i = t, t = null;
        else if (t < 0 || t >= n.slideCount) return !1;
        n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? c(e).appendTo(n.$slideTrack) : i ? c(e).insertBefore(n.$slides.eq(t)) : c(e).insertAfter(n.$slides.eq(t)) : !0 === i ? c(e).prependTo(n.$slideTrack) : c(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e)
        }), n.$slidesCache = n.$slides, n.reinit()
    }, r.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, r.prototype.animateSlide = function(e, t) {
        var i = {},
            n = this;
        n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
            left: e
        }, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
            top: e
        }, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), c({
            animStart: n.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i)
            },
            complete: function() {
                t && t.call()
            }
        })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function() {
            n.disableTransition(), t.call()
        }, n.options.speed))
    }, r.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = c(e).not(this.$slider)), e
    }, r.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }, r.prototype.applyTransition = function(e) {
        var t = this,
            i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, r.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, r.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, r.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, r.prototype.buildDots = function() {
        var e, t, i = this;
        if (!0 === i.options.dots) {
            for (i.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, r.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, r.prototype.buildRows = function() {
        var e, t, i, n, o, s, r, a = this;
        if (n = document.createDocumentFragment(), s = a.$slider.children(), 1 < a.options.rows) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = e * r + (t * a.options.slidesPerRow + i);
                        s.get(d) && c.appendChild(s.get(d))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, r.prototype.checkResponsive = function(e, t) {
        var i, n, o, s = this,
            r = !1,
            a = s.$slider.width(),
            l = window.innerWidth || c(window).width();
        if ("window" === s.respondTo ? o = l : "slider" === s.respondTo ? o = a : "min" === s.respondTo && (o = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (i in n = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (n = s.breakpoints[i]) : o > s.breakpoints[i] && (n = s.breakpoints[i]));
            null !== n ? null !== s.activeBreakpoint ? (n !== s.activeBreakpoint || t) && (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = n) : (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), r = n), e || !1 === r || s.$slider.trigger("breakpoint", [s, r])
        }
    }, r.prototype.changeSlide = function(e, t) {
        var i, n, o = this,
            s = c(e.currentTarget);
        switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
            case "previous":
                n = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, t);
                break;
            case "next":
                n = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, t);
                break;
            case "index":
                var r = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(r), !1, t), s.children().trigger("focus");
                break;
            default:
                return
        }
    }, r.prototype.checkNavigable = function(e) {
        var t, i;
        if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var n in t) {
                if (e < t[n]) {
                    e = i;
                    break
                }
                i = t[n]
            }
        return e
    }, r.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, r.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, r.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, r.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, r.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, r.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
    }, r.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, r.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, r.prototype.filterSlides = r.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, r.prototype.focusHandler = function() {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
            e.stopImmediatePropagation();
            var t = c(this);
            setTimeout(function() {
                i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
            }, 0)
        })
    }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, r.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            i = 0,
            n = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++n;
            else
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) n = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }, r.prototype.getLeft = function(e) {
        var t, i, n, o, s = this,
            r = 0;
        return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (r = s.slideOffset = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (s.$list.width() - n.outerWidth()) / 2)), t
    }, r.prototype.getOption = r.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, r.prototype.getNavigableIndexes = function() {
        var e, t = this,
            i = 0,
            n = 0,
            o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, r.prototype.getSlick = function() {
        return this
    }, r.prototype.getSlideCount = function() {
        var i, n, o = this;
        return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(e, t) {
            if (t.offsetLeft - n + c(t).outerWidth() / 2 > -1 * o.swipeLeft) return i = t, !1
        }), Math.abs(c(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, r.prototype.goTo = r.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, r.prototype.init = function(e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, r.prototype.initADA = function() {
        var i = this,
            n = Math.ceil(i.slideCount / i.options.slidesToShow),
            o = i.getNavigableIndexes().filter(function(e) {
                return 0 <= e && e < i.slideCount
            });
        i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(e) {
            var t = o.indexOf(e);
            c(this).attr({
                role: "tabpanel",
                id: "slick-slide" + i.instanceUid + e,
                tabindex: -1
            }), -1 !== t && c(this).attr({
                "aria-describedby": "slick-slide-control" + i.instanceUid + t
            })
        }), i.$dots.attr("role", "tablist").find("li").each(function(e) {
            var t = o[e];
            c(this).attr({
                role: "presentation"
            }), c(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + i.instanceUid + e,
                "aria-controls": "slick-slide" + i.instanceUid + t,
                "aria-label": e + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(i.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++) i.$slides.eq(e).attr("tabindex", 0);
        i.activateADA()
    }, r.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, r.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (c("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }, r.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
    }, r.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
    }, r.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, r.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, r.prototype.lazyLoad = function() {
        function e(e) {
            c("img[data-lazy]", e).each(function() {
                var e = c(this),
                    t = c(this).attr("data-lazy"),
                    i = c(this).attr("data-srcset"),
                    n = c(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                    o = document.createElement("img");
                o.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        i && (e.attr("srcset", i), n && e.attr("sizes", n)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, e, t])
                    })
                }, o.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, t])
                }, o.src = t
            })
        }
        var t, i, n, s = this;
        if (!0 === s.options.centerMode ? !0 === s.options.infinite ? n = (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), n = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, n = Math.ceil(i + s.options.slidesToShow), !0 === s.options.fade && (0 < i && i--, n <= s.slideCount && n++)), t = s.$slider.find(".slick-slide").slice(i, n), "anticipated" === s.options.lazyLoad)
            for (var o = i - 1, r = n, a = s.$slider.find(".slick-slide"), l = 0; l < s.options.slidesToScroll; l++) o < 0 && (o = s.slideCount - 1), t = (t = t.add(a.eq(o))).add(a.eq(r)), o--, r++;
        e(t), s.slideCount <= s.options.slidesToShow ? e(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, r.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, r.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, r.prototype.play = r.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, r.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, r.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, r.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, i, n, o, s, r = this,
            a = c("img[data-lazy]", r.$slider);
        a.length ? (t = a.first(), i = t.attr("data-lazy"), n = t.attr("data-srcset"), o = t.attr("data-sizes") || r.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
            n && (t.attr("srcset", n), o && t.attr("sizes", o)), t.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, t, i]), r.progressiveLazyLoad()
        }, s.onerror = function() {
            e < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i]), r.progressiveLazyLoad())
        }, s.src = i) : r.$slider.trigger("allImagesLoaded", [r])
    }, r.prototype.refresh = function(e) {
        var t, i, n = this;
        i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
            currentSlide: t
        }), n.init(), e || n.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, r.prototype.registerBreakpoints = function() {
        var e, t, i, n = this,
            o = n.options.responsive || null;
        if ("array" === c.type(o) && o.length) {
            for (e in n.respondTo = n.options.respondTo || "window", o)
                if (i = n.breakpoints.length - 1, o.hasOwnProperty(e)) {
                    for (t = o[e].breakpoint; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), i--;
                    n.breakpoints.push(t), n.breakpointSettings[t] = o[e].settings
                }
            n.breakpoints.sort(function(e, t) {
                return n.options.mobileFirst ? e - t : t - e
            })
        }
    }, r.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, r.prototype.resize = function() {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, r.prototype.removeSlide = r.prototype.slickRemove = function(e, t, i) {
        var n = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, r.prototype.setCSS = function(e) {
        var t, i, n = this,
            o = {};
        !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled || (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + t + ", " + i + ")" : o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(o)
    }, r.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, r.prototype.setFade = function() {
        var i, n = this;
        n.$slides.each(function(e, t) {
            i = n.slideWidth * e * -1, !0 === n.options.rtl ? c(t).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : c(t).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, r.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, r.prototype.setOption = r.prototype.slickSetOption = function() {
        var e, t, i, n, o, s = this,
            r = !1;
        if ("object" === c.type(arguments[0]) ? (i = arguments[0], r = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], n = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[i] = n;
        else if ("multiple" === o) c.each(i, function(e, t) {
            s.options[e] = t
        });
        else if ("responsive" === o)
            for (t in n)
                if ("array" !== c.type(s.options.responsive)) s.options.responsive = [n[t]];
                else {
                    for (e = s.options.responsive.length - 1; 0 <= e;) s.options.responsive[e].breakpoint === n[t].breakpoint && s.options.responsive.splice(e, 1), e--;
                    s.options.responsive.push(n[t])
                }
        r && (s.unload(), s.reinit())
    }, r.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, r.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, r.prototype.setSlideClasses = function(e) {
        var t, i, n, o, s = this;
        if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t <= e && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1 + r, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
        } else 0 <= e && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, r.prototype.setupInfinite = function() {
        var e, t, i, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, n.slideCount > n.options.slidesToShow)) {
            for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i + n.slideCount; e += 1) t = e, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "")
            })
        }
    }, r.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e
    }, r.prototype.selectHandler = function(e) {
        var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
            i = parseInt(t.attr("data-slick-index"));
        i || (i = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i)
    }, r.prototype.slideHandler = function(e, t, i) {
        var n, o, s, r, a, l = null,
            c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
            if (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
                c.postSlide(n)
            }) : c.postSlide(n));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
            c.postSlide(n)
        }) : c.postSlide(n));
        else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight();
            !0 !== i ? c.animateSlide(l, function() {
                c.postSlide(o)
            }) : c.postSlide(o)
        }
    }, r.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, r.prototype.swipeDirection = function() {
        var e, t, i, n, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === o.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
    }, r.prototype.swipeEnd = function(e) {
        var t, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1;
        if (n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, r.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, r.prototype.swipeMove = function(e) {
        var t, i, n, o, s, r, a = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < r ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, r.prototype.swipeStart = function(e) {
        var t, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, r.prototype.unload = function() {
        var e = this;
        c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, r.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, r.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, r.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, r.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, c.fn.slick = function() {
        var e, t, i = this,
            n = arguments[0],
            o = Array.prototype.slice.call(arguments, 1),
            s = i.length;
        for (e = 0; e < s; e++)
            if ("object" == typeof n || void 0 === n ? i[e].slick = new r(i[e], n) : t = i[e].slick[n].apply(i[e].slick, o), void 0 !== t) return t;
        return i
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define(["./dependencyLibs/inputmask.dependencyLib", "./global/window", "./global/document"], e) : "object" == typeof exports ? module.exports = e(require("./dependencyLibs/inputmask.dependencyLib"), require("./global/window"), require("./global/document")) : window.Inputmask = e(window.dependencyLib || jQuery, window, document)
}(function(Q, Y, J, Z) {
    function ee(e, t, i) {
        if (!(this instanceof ee)) return new ee(e, t, i);
        this.el = Z, this.events = {}, this.maskset = Z, !(this.refreshValue = !1) !== i && (Q.isPlainObject(e) ? t = e : (t = t || {}).alias = e, this.opts = Q.extend(!0, {}, this.defaults, t), this.noMasksCache = t && t.definitions !== Z, this.userOptions = t || {}, this.isRTL = this.opts.numericInput, d(this.opts.alias, t, this.opts))
    }

    function d(e, t, i) {
        var n = ee.prototype.aliases[e];
        return n ? (n.alias && d(n.alias, Z, i), Q.extend(!0, i, n), Q.extend(!0, i, t), !0) : (null === i.mask && (i.mask = e), !1)
    }

    function s(i, a) {
        function e(e, t, i) {
            var n = !1;
            if (null !== e && "" !== e || ((n = null !== i.regex) ? e = (e = i.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (n = !0, e = ".*")), 1 === e.length && !1 === i.greedy && 0 !== i.repeat && (i.placeholder = ""), 0 < i.repeat || "*" === i.repeat || "+" === i.repeat) {
                var o = "*" === i.repeat ? 0 : "+" === i.repeat ? 1 : i.repeat;
                e = i.groupmarker.start + e + i.groupmarker.end + i.quantifiermarker.start + o + "," + i.repeat + i.quantifiermarker.end
            }
            var s, r = n ? "regex_" + i.regex : i.numericInput ? e.split("").reverse().join("") : e;
            return ee.prototype.masksCache[r] === Z || !0 === a ? (s = {
                mask: e,
                maskToken: ee.prototype.analyseMask(e, n, i),
                validPositions: {},
                _buffer: Z,
                buffer: Z,
                tests: {},
                metadata: t,
                maskLength: Z
            }, !0 !== a && (ee.prototype.masksCache[r] = s, s = Q.extend(!0, {}, ee.prototype.masksCache[r]))) : s = Q.extend(!0, {}, ee.prototype.masksCache[r]), s
        }
        if (Q.isFunction(i.mask) && (i.mask = i.mask(i)), Q.isArray(i.mask)) {
            if (1 < i.mask.length) {
                i.keepStatic = null === i.keepStatic || i.keepStatic;
                var n = i.groupmarker.start;
                return Q.each(i.numericInput ? i.mask.reverse() : i.mask, function(e, t) {
                    1 < n.length && (n += i.groupmarker.end + i.alternatormarker + i.groupmarker.start), t.mask === Z || Q.isFunction(t.mask) ? n += t : n += t.mask
                }), e(n += i.groupmarker.end, i.mask, i)
            }
            i.mask = i.mask.pop()
        }
        return i.mask && i.mask.mask !== Z && !Q.isFunction(i.mask.mask) ? e(i.mask.mask, i.mask, i) : e(i.mask, i.mask, i)
    }

    function te(e, t, z) {
        function o(e, t, i) {
            t = t || 0;
            for (var n, o, s, r = [], a = 0, l = C(); !0 === e && B().validPositions[a] ? (o = (s = B().validPositions[a]).match, n = s.locator.slice(), r.push(!0 === i ? s.input : !1 === i ? o.nativeDef : O(a, o))) : (o = (s = k(a, n, a - 1)).match, n = s.locator.slice(), (!1 === z.jitMasking || a < l || "number" == typeof z.jitMasking && isFinite(z.jitMasking) && z.jitMasking > a) && r.push(!1 === i ? o.nativeDef : O(a, o))), a++, (L === Z || a < L) && (null !== o.fn || "" !== o.def) || a < t;);
            return "" === r[r.length - 1] && r.pop(), B().maskLength = a + 1, r
        }

        function B() {
            return t
        }

        function T(e) {
            var t = B();
            t.buffer = Z, !0 !== e && (t.validPositions = {}, t.p = 0)
        }

        function C(e, t, i) {
            var n = -1,
                o = -1,
                s = i || B().validPositions;
            for (var r in e === Z && (e = -1), s) {
                var a = parseInt(r);
                s[a] && (t || !0 !== s[a].generatedInput) && (a <= e && (n = a), e <= a && (o = a))
            }
            return -1 !== n && 1 < e - n || o < e ? n : o
        }

        function b(e, t, i, n) {
            var o, s = e,
                r = Q.extend(!0, {}, B().validPositions),
                a = !1;
            for (B().p = e, o = t - 1; s <= o; o--) B().validPositions[o] !== Z && (!0 !== i && (!B().validPositions[o].match.optionality && function(e) {
                var t = B().validPositions[e];
                if (t === Z || null !== t.match.fn) return !1;
                var i = B().validPositions[e - 1],
                    n = B().validPositions[e + 1];
                return i !== Z && n !== Z
            }(o) || !1 === z.canClearPosition(B(), o, C(), n, z)) || delete B().validPositions[o]);
            for (T(!0), o = s + 1; o <= C();) {
                for (; B().validPositions[s] !== Z;) s++;
                if (o < s && (o = s + 1), B().validPositions[o] === Z && j(o)) o++;
                else {
                    var l = k(o);
                    !1 === a && r[s] && r[s].match.def === l.match.def ? (B().validPositions[s] = Q.extend(!0, {}, r[s]), B().validPositions[s].input = l.input, delete B().validPositions[o], o++) : w(s, l.match.def) ? !1 !== A(s, l.input || O(o), !0) && (delete B().validPositions[o], o++, a = !0) : j(o) || (o++, s--), s++
                }
            }
            T(!0)
        }

        function f(e, t) {
            for (var i, n = e, o = C(), s = B().validPositions[o] || S(0)[0], r = s.alternation !== Z ? s.locator[s.alternation].toString().split(",") : [], a = 0; a < n.length && (!((i = n[a]).match && (z.greedy && !0 !== i.match.optionalQuantifier || (!1 === i.match.optionality || !1 === i.match.newBlockMarker) && !0 !== i.match.optionalQuantifier) && (s.alternation === Z || s.alternation !== i.alternation || i.locator[s.alternation] !== Z && h(i.locator[s.alternation].toString().split(","), r))) || !0 === t && (null !== i.match.fn || /[0-9a-bA-Z]/.test(i.match.def))); a++);
            return i
        }

        function k(e, t, i) {
            return B().validPositions[e] || f(S(e, t ? t.slice() : t, i))
        }

        function g(e) {
            return B().validPositions[e] ? B().validPositions[e] : S(e)[0]
        }

        function w(e, t) {
            for (var i = !1, n = S(e), o = 0; o < n.length; o++)
                if (n[o].match && n[o].match.def === t) {
                    i = !0;
                    break
                }
            return i
        }

        function S(L, e, t) {
            function M(O, P, e, t) {
                function _(e, i, t) {
                    function s(i, n) {
                        var o = 0 === Q.inArray(i, n.matches);
                        return o || Q.each(n.matches, function(e, t) {
                            if (!0 === t.isQuantifier && (o = s(i, n.matches[e - 1]))) return !1
                        }), o
                    }

                    function l(e, o, s) {
                        var r, a;
                        if (B().validPositions[e - 1] && s && B().tests[e])
                            for (var t = B().validPositions[e - 1].locator, i = B().tests[e][0].locator, n = 0; n < s; n++)
                                if (t[n] !== i[n]) return t.slice(s + 1);
                        return (B().tests[e] || B().validPositions[e]) && Q.each(B().tests[e] || [B().validPositions[e]], function(e, t) {
                            var i = s !== Z ? s : t.alternation,
                                n = t.locator[i] !== Z ? t.locator[i].toString().indexOf(o) : -1;
                            (a === Z || n < a) && -1 !== n && (r = t, a = n)
                        }), r ? r.locator.slice((s !== Z ? s : r.alternation) + 1) : s !== Z ? l(e, o) : Z
                    }
                    if (1e4 < I) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + B().mask;
                    if (I === L && e.matches === Z) return q.push({
                        match: e,
                        locator: i.reverse(),
                        cd: R
                    }), !0;
                    if (e.matches !== Z) {
                        if (e.isGroup && t !== e) {
                            if (e = _(O.matches[Q.inArray(e, O.matches) + 1], i)) return !0
                        } else if (e.isOptional) {
                            var n = e;
                            if (e = M(e, P, i, t)) {
                                if (!s(H = q[q.length - 1].match, n)) return !0;
                                F = !0, I = L
                            }
                        } else if (e.isAlternator) {
                            var o, r = e,
                                a = [],
                                c = q.slice(),
                                d = i.length,
                                u = 0 < P.length ? P.shift() : -1;
                            if (-1 === u || "string" == typeof u) {
                                var p, f = I,
                                    h = P.slice(),
                                    m = [];
                                if ("string" == typeof u) m = u.split(",");
                                else
                                    for (p = 0; p < r.matches.length; p++) m.push(p);
                                for (var v = 0; v < m.length; v++) {
                                    if (p = parseInt(m[v]), q = [], P = l(I, p, d) || h.slice(), !0 !== (e = _(r.matches[p] || O.matches[p], [p].concat(i), t) || e) && e !== Z && m[m.length - 1] < r.matches.length) {
                                        var g = Q.inArray(e, O.matches) + 1;
                                        O.matches.length > g && (e = _(O.matches[g], [g].concat(i.slice(1, i.length)), t)) && (m.push(g.toString()), Q.each(q, function(e, t) {
                                            t.alternation = i.length - 1
                                        }))
                                    }
                                    o = q.slice(), I = f, q = [];
                                    for (var y = 0; y < o.length; y++) {
                                        var b = o[y],
                                            k = !1;
                                        b.alternation = b.alternation || d;
                                        for (var w = 0; w < a.length; w++) {
                                            var x = a[w];
                                            if ("string" != typeof u || -1 !== Q.inArray(b.locator[b.alternation].toString(), m)) {
                                                if (N = x, (D = b).match.nativeDef === N.match.nativeDef || D.match.def === N.match.nativeDef || D.match.nativeDef === N.match.def) {
                                                    k = !0, b.alternation === x.alternation && -1 === x.locator[x.alternation].toString().indexOf(b.locator[b.alternation]) && (x.locator[x.alternation] = x.locator[x.alternation] + "," + b.locator[b.alternation], x.alternation = b.alternation), b.match.nativeDef === x.match.def && (b.locator[b.alternation] = x.locator[x.alternation], a.splice(a.indexOf(x), 1, b));
                                                    break
                                                }
                                                if (b.match.def === x.match.def) {
                                                    k = !1;
                                                    break
                                                }
                                                if (j = x, null === (A = b).match.fn && null !== j.match.fn && j.match.fn.test(A.match.def, B(), L, !1, z, !1) || ($ = x, null !== (E = b).match.fn && null !== $.match.fn && $.match.fn.test(E.match.def.replace(/[\[\]]/g, ""), B(), L, !1, z, !1))) {
                                                    b.alternation === x.alternation && -1 === b.locator[b.alternation].toString().indexOf(x.locator[x.alternation].toString().split("")[0]) && (b.na = b.na || b.locator[b.alternation].toString(), -1 === b.na.indexOf(b.locator[b.alternation].toString().split("")[0]) && (b.na = b.na + "," + b.locator[x.alternation].toString().split("")[0]), k = !0, b.locator[b.alternation] = x.locator[x.alternation].toString().split("")[0] + "," + b.locator[b.alternation], a.splice(a.indexOf(x), 0, b));
                                                    break
                                                }
                                            }
                                        }
                                        k || a.push(b)
                                    }
                                }
                                "string" == typeof u && (a = Q.map(a, function(e, t) {
                                    if (isFinite(t)) {
                                        var i = e.alternation,
                                            n = e.locator[i].toString().split(",");
                                        e.locator[i] = Z, e.alternation = Z;
                                        for (var o = 0; o < n.length; o++) - 1 !== Q.inArray(n[o], m) && (e.locator[i] !== Z ? (e.locator[i] += ",", e.locator[i] += n[o]) : e.locator[i] = parseInt(n[o]), e.alternation = i);
                                        if (e.locator[i] !== Z) return e
                                    }
                                })), q = c.concat(a), I = L, F = 0 < q.length, e = 0 < a.length, P = h.slice()
                            } else e = _(r.matches[u] || O.matches[u], [u].concat(i), t);
                            if (e) return !0
                        } else if (e.isQuantifier && t !== O.matches[Q.inArray(e, O.matches) - 1])
                            for (var T = e, C = 0 < P.length ? P.shift() : 0; C < (isNaN(T.quantifier.max) ? C + 1 : T.quantifier.max) && I <= L; C++) {
                                var S = O.matches[Q.inArray(T, O.matches) - 1];
                                if (e = _(S, [C].concat(i), S)) {
                                    if ((H = q[q.length - 1].match).optionalQuantifier = C > T.quantifier.min - 1, s(H, S)) {
                                        if (C > T.quantifier.min - 1) {
                                            F = !0, I = L;
                                            break
                                        }
                                        return !0
                                    }
                                    return !0
                                }
                            } else if (e = M(e, P, i, t)) return !0
                    } else I++;
                    var E, $, A, j, D, N
                }
                for (var i = 0 < P.length ? P.shift() : 0; i < O.matches.length; i++)
                    if (!0 !== O.matches[i].isQuantifier) {
                        var n = _(O.matches[i], [i].concat(e), t);
                        if (n && I === L) return n;
                        if (L < I) break
                    }
            }

            function i(e) {
                if (z.keepStatic && 0 < L && e.length > 1 + ("" === e[e.length - 1].match.def ? 1 : 0) && !0 !== e[0].match.optionality && !0 !== e[0].match.optionalQuantifier && null === e[0].match.fn && !/[0-9a-bA-Z]/.test(e[0].match.def)) {
                    if (B().validPositions[L - 1] === Z) return [f(e)];
                    if (B().validPositions[L - 1].alternation === e[0].alternation) return [f(e)];
                    if (B().validPositions[L - 1]) return [f(e)]
                }
                return e
            }
            var H, n, o, s = B().maskToken,
                I = e ? t : 0,
                r = e ? e.slice() : [0],
                q = [],
                F = !1,
                R = e ? e.join("") : "";
            if (-1 < L) {
                if (e === Z) {
                    for (var a, l = L - 1;
                        (a = B().validPositions[l] || B().tests[l]) === Z && -1 < l;) l--;
                    a !== Z && -1 < l && (n = a, o = [], Q.isArray(n) || (n = [n]), 0 < n.length && (n[0].alternation === Z ? 0 === (o = f(n.slice()).locator.slice()).length && (o = n[0].locator.slice()) : Q.each(n, function(e, t) {
                        if ("" !== t.def)
                            if (0 === o.length) o = t.locator.slice();
                            else
                                for (var i = 0; i < o.length; i++) t.locator[i] && -1 === o[i].toString().indexOf(t.locator[i]) && (o[i] += "," + t.locator[i])
                    })), R = (r = o).join(""), I = l)
                }
                if (B().tests[L] && B().tests[L][0].cd === R) return i(B().tests[L]);
                for (var c = r.shift(); c < s.length && !(M(s[c], r, [c]) && I === L || L < I); c++);
            }
            return (0 === q.length || F) && q.push({
                match: {
                    fn: null,
                    cardinality: 0,
                    optionality: !0,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                cd: R
            }), e !== Z && B().tests[L] ? i(Q.extend(!0, [], q)) : (B().tests[L] = Q.extend(!0, [], q), i(B().tests[L]))
        }

        function y() {
            return B()._buffer === Z && (B()._buffer = o(!1, 1), B().buffer === Z && (B().buffer = B()._buffer.slice())), B()._buffer
        }

        function E(e) {
            return B().buffer !== Z && !0 !== e || (B().buffer = o(!0, C(), !0)), B().buffer
        }

        function $(e, t, i) {
            var n, o;
            if (!0 === e) T(), e = 0, t = i.length;
            else
                for (n = e; n < t; n++) delete B().validPositions[n];
            for (n = o = e; n < t; n++)
                if (T(!0), i[n] !== z.skipOptionalPartCharacter) {
                    var s = A(o, i[n], !0, !0);
                    !1 !== s && (T(!0), o = s.caret !== Z ? s.caret : s.pos + 1)
                }
        }

        function h(e, t, i) {
            for (var n, o = z.greedy ? t : t.slice(0, 1), s = !1, r = i !== Z ? i.split(",") : [], a = 0; a < r.length; a++) - 1 !== (n = e.indexOf(r[a])) && e.splice(n, 1);
            for (var l = 0; l < e.length; l++)
                if (-1 !== Q.inArray(e[l], o)) {
                    s = !0;
                    break
                }
            return s
        }

        function A(m, e, t, x, i, n) {
            function v(e) {
                var t = I ? 1 < e.begin - e.end || e.begin - e.end == 1 : 1 < e.end - e.begin || e.end - e.begin == 1;
                return t && 0 === e.begin && e.end === B().maskLength ? "full" : t
            }

            function s(u, p, f) {
                var h = !1;
                return Q.each(S(u), function(e, t) {
                    for (var i = t.match, n = p ? 1 : 0, o = "", s = i.cardinality; n < s; s--) o += (r = u - (s - 1), B().validPositions[r] === Z ? O(r) : B().validPositions[r].input);
                    var r;
                    if (p && (o += p), E(!0), !1 !== (h = null != i.fn ? i.fn.test(o, B(), u, f, z, v(m)) : (p === i.def || p === z.skipOptionalPartCharacter) && "" !== i.def && {
                            c: O(u, i, !0) || i.def,
                            pos: u
                        })) {
                        var a = h.c !== Z ? h.c : p;
                        a = a === z.skipOptionalPartCharacter && null === i.fn ? O(u, i, !0) || i.def : a;
                        var l = u,
                            c = E();
                        if (h.remove !== Z && (Q.isArray(h.remove) || (h.remove = [h.remove]), Q.each(h.remove.sort(function(e, t) {
                                return t - e
                            }), function(e, t) {
                                b(t, t + 1, !0)
                            })), h.insert !== Z && (Q.isArray(h.insert) || (h.insert = [h.insert]), Q.each(h.insert.sort(function(e, t) {
                                return e - t
                            }), function(e, t) {
                                A(t.pos, t.c, !0, x)
                            })), h.refreshFromBuffer) {
                            var d = h.refreshFromBuffer;
                            if ($(!0 === d ? d : d.start, d.end, c), h.pos === Z && h.c === Z) return h.pos = C(), !1;
                            if ((l = h.pos !== Z ? h.pos : u) !== u) return h = Q.extend(h, A(l, a, !0, x)), !1
                        } else if (!0 !== h && h.pos !== Z && h.pos !== u && (l = h.pos, $(u, l, E().slice()), l !== u)) return h = Q.extend(h, A(l, a, !0)), !1;
                        return (!0 === h || h.pos !== Z || h.c !== Z) && (0 < e && T(!0), g(l, Q.extend({}, t, {
                            input: function(e, t, i) {
                                switch (z.casing || t.casing) {
                                    case "upper":
                                        e = e.toUpperCase();
                                        break;
                                    case "lower":
                                        e = e.toLowerCase();
                                        break;
                                    case "title":
                                        var n = B().validPositions[i - 1];
                                        e = 0 === i || n && n.input === String.fromCharCode(ee.keyCode.SPACE) ? e.toUpperCase() : e.toLowerCase();
                                        break;
                                    default:
                                        if (Q.isFunction(z.casing)) {
                                            var o = Array.prototype.slice.call(arguments);
                                            o.push(B().validPositions), e = z.casing.apply(this, o)
                                        }
                                }
                                return e
                            }(a, i, l)
                        }), x, v(m)) || (h = !1), !1)
                    }
                }), h
            }

            function g(e, t, i, n) {
                if (n || z.insertMode && B().validPositions[e] !== Z && i === Z) {
                    var o, s = Q.extend(!0, {}, B().validPositions),
                        r = C(Z, !0);
                    for (o = e; o <= r; o++) delete B().validPositions[o];
                    B().validPositions[e] = Q.extend(!0, {}, t);
                    var a, l = !0,
                        c = B().validPositions,
                        d = !1,
                        u = B().maskLength;
                    for (o = a = e; o <= r; o++) {
                        var p = s[o];
                        if (p !== Z)
                            for (var f = a; f < B().maskLength && (null === p.match.fn && c[o] && (!0 === c[o].match.optionalQuantifier || !0 === c[o].match.optionality) || null != p.match.fn);) {
                                if (f++, !1 === d && s[f] && s[f].match.def === p.match.def) B().validPositions[f] = Q.extend(!0, {}, s[f]), B().validPositions[f].input = p.input, y(f), a = f, l = !0;
                                else if (w(f, p.match.def)) {
                                    var h = A(f, p.input, !0, !0);
                                    l = !1 !== h, a = h.caret || h.insert ? C() : f, d = !0
                                } else if (!(l = !0 === p.generatedInput) && f >= B().maskLength - 1) break;
                                if (B().maskLength < u && (B().maskLength = u), l) break
                            }
                        if (!l) break
                    }
                    if (!l) return B().validPositions = Q.extend(!0, {}, s), T(!0), !1
                } else B().validPositions[e] = Q.extend(!0, {}, t);
                return T(!0), !0
            }

            function y(e) {
                for (var t = e - 1; - 1 < t && !B().validPositions[t]; t--);
                var i, n;
                for (t++; t < e; t++) B().validPositions[t] === Z && (!1 === z.jitMasking || z.jitMasking > t) && ("" === (n = S(t, k(t - 1).locator, t - 1).slice())[n.length - 1].match.def && n.pop(), (i = f(n)) && (i.match.def === z.radixPointDefinitionSymbol || !j(t, !0) || Q.inArray(z.radixPoint, E()) < t && i.match.fn && i.match.fn.test(O(t), B(), t, !1, z)) && !1 !== (r = s(t, O(t, i.match, !0) || (null == i.match.fn ? i.match.def : "" !== O(t) ? O(t) : E()[t]), !0)) && (B().validPositions[r.pos || t].generatedInput = !0))
            }
            t = !0 === t;
            var o = m;
            m.begin !== Z && (o = I && !v(m) ? m.end : m.begin);
            var r = !0,
                a = Q.extend(!0, {}, B().validPositions);
            if (Q.isFunction(z.preValidation) && !t && !0 !== x && !0 !== n && (r = z.preValidation(E(), o, e, v(m), z)), !0 === r) {
                if (y(o), v(m) && (P(Z, ee.keyCode.DELETE, m, !0, !0), o = B().p), o < B().maskLength && (L === Z || o < L) && (r = s(o, e, t), (!t || !0 === x) && !1 === r && !0 !== n)) {
                    var l = B().validPositions[o];
                    if (!l || null !== l.match.fn || l.match.def !== e && e !== z.skipOptionalPartCharacter) {
                        if ((z.insertMode || B().validPositions[D(o)] === Z) && !j(o, !0))
                            for (var c = o + 1, d = D(o); c <= d; c++)
                                if (!1 !== (r = s(c, e, t))) {
                                    ! function(e, t) {
                                        var i = B().validPositions[t];
                                        if (i)
                                            for (var r = i.locator, a = r.length, n = e; n < t; n++)
                                                if (B().validPositions[n] === Z && !j(n, !0)) {
                                                    var o = S(n).slice(),
                                                        l = f(o, !0),
                                                        c = -1;
                                                    "" === o[o.length - 1].match.def && o.pop(), Q.each(o, function(e, t) {
                                                        for (var i = 0; i < a; i++) {
                                                            if (t.locator[i] === Z || !h(t.locator[i].toString().split(","), r[i].toString().split(","), t.na)) {
                                                                var n = r[i],
                                                                    o = l.locator[i],
                                                                    s = t.locator[i];
                                                                n - o > Math.abs(n - s) && (l = t);
                                                                break
                                                            }
                                                            c < i && (c = i, l = t)
                                                        }
                                                    }), (l = Q.extend({}, l, {
                                                        input: O(n, l.match, !0) || l.match.def
                                                    })).generatedInput = !0, g(n, l, !0), B().validPositions[t] = Z, s(t, i.input, !0)
                                                }
                                    }(o, r.pos !== Z ? r.pos : c), o = c;
                                    break
                                }
                    } else r = {
                        caret: D(o)
                    }
                }!1 === r && z.keepStatic && !t && !0 !== i && (r = function(d, u, p) {
                    var e, f, t, i, h, m, v, g, y = Q.extend(!0, {}, B().validPositions),
                        b = !1,
                        n = C();
                    for (i = B().validPositions[n]; 0 <= n; n--)
                        if ((t = B().validPositions[n]) && t.alternation !== Z) {
                            if (e = n, f = B().validPositions[e].alternation, i.locator[t.alternation] !== t.locator[t.alternation]) break;
                            i = t
                        }
                    if (f !== Z) {
                        g = parseInt(e);
                        var k = i.locator[i.alternation || f] !== Z ? i.locator[i.alternation || f] : v[0];
                        0 < k.length && (k = k.split(",")[0]);
                        var w = B().validPositions[g],
                            o = B().validPositions[g - 1];
                        Q.each(S(g, o ? o.locator : Z, g - 1), function(e, t) {
                            v = t.locator[f] ? t.locator[f].toString().split(",") : [];
                            for (var i = 0; i < v.length; i++) {
                                var n = [],
                                    o = 0,
                                    s = 0,
                                    r = !1;
                                if (k < v[i] && (t.na === Z || -1 === Q.inArray(v[i], t.na.split(",")) || -1 === Q.inArray(k.toString(), v))) {
                                    B().validPositions[g] = Q.extend(!0, {}, t);
                                    var a = B().validPositions[g].locator;
                                    for (B().validPositions[g].locator[f] = parseInt(v[i]), null == t.match.fn ? (w.input !== t.match.def && ((r = !0) !== w.generatedInput && n.push(w.input)), s++, B().validPositions[g].generatedInput = !/[0-9a-bA-Z]/.test(t.match.def), B().validPositions[g].input = t.match.def) : B().validPositions[g].input = w.input, h = g + 1; h < C(Z, !0) + 1; h++)(m = B().validPositions[h]) && !0 !== m.generatedInput && /[0-9a-bA-Z]/.test(m.input) ? n.push(m.input) : h < d && o++, delete B().validPositions[h];
                                    for (r && n[0] === t.match.def && n.shift(), T(!0), b = !0; 0 < n.length;) {
                                        var l = n.shift();
                                        if (l !== z.skipOptionalPartCharacter && !(b = A(C(Z, !0) + 1, l, !1, x, !0))) break
                                    }
                                    if (b) {
                                        B().validPositions[g].locator = a;
                                        var c = C(d) + 1;
                                        for (h = g + 1; h < C() + 1; h++)((m = B().validPositions[h]) === Z || null == m.match.fn) && h < d + (s - o) && s++;
                                        b = A((d += s - o) > c ? c : d, u, p, x, !0)
                                    }
                                    if (b) return !1;
                                    T(), B().validPositions = Q.extend(!0, {}, y)
                                }
                            }
                        })
                    }
                    return b
                }(o, e, t)), !0 === r && (r = {
                    pos: o
                })
            }
            if (Q.isFunction(z.postValidation) && !1 !== r && !t && !0 !== x && !0 !== n) {
                var u = z.postValidation(E(!0), r, z);
                if (u.refreshFromBuffer && u.buffer) {
                    var p = u.refreshFromBuffer;
                    $(!0 === p ? p : p.start, p.end, u.buffer)
                }
                r = !0 === u ? r : u
            }
            return r && r.pos === Z && (r.pos = o), !1 !== r && !0 !== n || (T(!0), B().validPositions = Q.extend(!0, {}, a)), r
        }

        function j(e, t) {
            var i = k(e).match;
            if ("" === i.def && (i = g(e).match), null != i.fn) return i.fn;
            if (!0 !== t && -1 < e) {
                var n = S(e);
                return n.length > 1 + ("" === n[n.length - 1].match.def ? 1 : 0)
            }
            return !1
        }

        function D(e, t) {
            var i = B().maskLength;
            if (i <= e) return i;
            var n = e;
            for (1 < S(i + 1).length && (o(!0, i + 1, !0), i = B().maskLength); ++n < i && (!0 === t && (!0 !== g(n).match.newBlockMarker || !j(n)) || !0 !== t && !j(n)););
            return n
        }

        function x(e, t) {
            var i, n = e;
            if (n <= 0) return 0;
            for (; 0 < --n && (!0 === t && !0 !== g(n).match.newBlockMarker || !0 !== t && !j(n) && ((i = S(n)).length < 2 || 2 === i.length && "" === i[1].match.def)););
            return n
        }

        function N(e, t, i, n, o) {
            if (n && Q.isFunction(z.onBeforeWrite)) {
                var s = z.onBeforeWrite.call(H, n, t, i, z);
                if (s) {
                    if (s.refreshFromBuffer) {
                        var r = s.refreshFromBuffer;
                        $(!0 === r ? r : r.start, r.end, s.buffer || t), t = E(!0)
                    }
                    i !== Z && (i = s.caret !== Z ? s.caret : i)
                }
            }
            e !== Z && (e.inputmask._valueSet(t.join("")), i === Z || n !== Z && "blur" === n.type ? u(e, i, 0 === t.length) : se && n && "input" === n.type ? setTimeout(function() {
                m(e, i)
            }, 0) : m(e, i), !0 === o && (q = !0, Q(e).trigger("input")))
        }

        function O(e, t, i) {
            if ((t = t || g(e).match).placeholder !== Z || !0 === i) return Q.isFunction(t.placeholder) ? t.placeholder(z) : t.placeholder;
            if (null !== t.fn) return z.placeholder.charAt(e % z.placeholder.length);
            if (-1 < e && B().validPositions[e] === Z) {
                var n, o = S(e),
                    s = [];
                if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0))
                    for (var r = 0; r < o.length; r++)
                        if (!0 !== o[r].match.optionality && !0 !== o[r].match.optionalQuantifier && (null === o[r].match.fn || n === Z || !1 !== o[r].match.fn.test(n.match.def, B(), e, !0, z)) && (s.push(o[r]), null === o[r].match.fn && (n = o[r]), 1 < s.length && /[0-9a-bA-Z]/.test(s[0].match.def))) return z.placeholder.charAt(e % z.placeholder.length)
            }
            return t.def
        }

        function d(u, e, p, t, i) {
            var f = t.slice(),
                h = "",
                m = -1,
                v = Z;
            if (T(), p || !0 === z.autoUnmask) m = D(m);
            else {
                var n = y().slice(0, D(-1)).join(""),
                    o = f.join("").match(new RegExp("^" + ee.escapeRegex(n), "g"));
                o && 0 < o.length && (f.splice(0, o.length * n.length), m = D(m))
            }
            if (-1 === m ? (B().p = D(m), m = 0) : B().p = m, Q.each(f, function(e, t) {
                    if (t !== Z)
                        if (B().validPositions[e] === Z && f[e] === O(e) && j(e, !0) && !1 === A(e, f[e], !0, Z, Z, !0)) B().p++;
                        else {
                            var i = new Q.Event("_checkval");
                            i.which = t.charCodeAt(0), h += t;
                            var n = C(Z, !0),
                                o = B().validPositions[n],
                                s = k(n + 1, o ? o.locator.slice() : Z, n);
                            if (c = m, d = h, -1 === y().slice(c, D(c)).join("").indexOf(d) || j(c) || g(c).match.nativeDef !== d.charAt(d.length - 1) || p || z.autoUnmask) {
                                var r = p ? e : null == s.match.fn && s.match.optionality && n + 1 < B().p ? n + 1 : B().p;
                                v = U.keypressEvent.call(u, i, !0, !1, p, r), m = r + 1, h = ""
                            } else v = U.keypressEvent.call(u, i, !0, !1, !0, n + 1);
                            if (!1 !== v && !p && Q.isFunction(z.onBeforeWrite)) {
                                var a = v;
                                if (v = z.onBeforeWrite.call(H, i, E(), v.forwardPosition, z), (v = Q.extend(a, v)) && v.refreshFromBuffer) {
                                    var l = v.refreshFromBuffer;
                                    $(!0 === l ? l : l.start, l.end, v.buffer), T(!0), v.caret && (B().p = v.caret, v.forwardPosition = v.caret)
                                }
                            }
                        }
                    var c, d
                }), e) {
                var s = Z;
                J.activeElement === u && v && (s = z.numericInput ? x(v.forwardPosition) : v.forwardPosition), N(u, E(), s, i || new Q.Event("checkval"), i && "input" === i.type)
            }
        }

        function i(e) {
            if (e) {
                if (e.inputmask === Z) return e.value;
                e.inputmask && e.inputmask.refreshValue && U.setValueEvent.call(e)
            }
            var t = [],
                i = B().validPositions;
            for (var n in i) i[n].match && null != i[n].match.fn && t.push(i[n].input);
            var o = 0 === t.length ? "" : (I ? t.reverse() : t).join("");
            if (Q.isFunction(z.onUnMask)) {
                var s = (I ? E().slice().reverse() : E()).join("");
                o = z.onUnMask.call(H, s, o, z)
            }
            return o
        }

        function m(e, t, i, n) {
            function o(e) {
                return !0 === n || !I || "number" != typeof e || z.greedy && "" === z.placeholder || (e = E().join("").length - e), e
            }
            var s;
            if (t === Z) return e.setSelectionRange ? (t = e.selectionStart, i = e.selectionEnd) : Y.getSelection ? (s = Y.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && s.commonAncestorContainer !== e || (t = s.startOffset, i = s.endOffset) : J.selection && J.selection.createRange && (i = (t = 0 - (s = J.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + s.text.length), {
                begin: o(t),
                end: o(i)
            };
            if (t.begin !== Z && (i = t.end, t = t.begin), "number" == typeof t) {
                t = o(t), i = "number" == typeof(i = o(i)) ? i : t;
                var r = parseInt(((e.ownerDocument.defaultView || Y).getComputedStyle ? (e.ownerDocument.defaultView || Y).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                if (e.scrollLeft = r > e.scrollWidth ? r : 0, ie || !1 !== z.insertMode || t !== i || i++, e.setSelectionRange) e.selectionStart = t, e.selectionEnd = i;
                else if (Y.getSelection) {
                    if (s = J.createRange(), e.firstChild === Z || null === e.firstChild) {
                        var a = J.createTextNode("");
                        e.appendChild(a)
                    }
                    s.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), s.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), s.collapse(!0);
                    var l = Y.getSelection();
                    l.removeAllRanges(), l.addRange(s)
                } else e.createTextRange && ((s = e.createTextRange()).collapse(!0), s.moveEnd("character", i), s.moveStart("character", t), s.select());
                u(e, {
                    begin: t,
                    end: i
                })
            }
        }

        function r(e) {
            var t, i, n = E(),
                o = n.length,
                s = C(),
                r = {},
                a = B().validPositions[s],
                l = a !== Z ? a.locator.slice() : Z;
            for (t = s + 1; t < n.length; t++) l = (i = k(t, l, t - 1)).locator.slice(), r[t] = Q.extend(!0, {}, i);
            var c = a && a.alternation !== Z ? a.locator[a.alternation] : Z;
            for (t = o - 1; s < t && ((i = r[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || c && (c !== r[t].locator[a.alternation] && null != i.match.fn || null === i.match.fn && i.locator[a.alternation] && h(i.locator[a.alternation].toString().split(","), c.toString().split(",")) && "" !== S(t)[0].def)) && n[t] === O(t, i.match); t--) o--;
            return e ? {
                l: o,
                def: r[o] ? r[o].match : Z
            } : o
        }

        function l(e) {
            for (var t, i = r(), n = e.length, o = B().validPositions[C()]; i < n && !j(i, !0) && (t = o !== Z ? k(i, o.locator.slice(""), o) : g(i)) && !0 !== t.match.optionality && (!0 !== t.match.optionalQuantifier && !0 !== t.match.newBlockMarker || i + 1 === n && "" === (o !== Z ? k(i + 1, o.locator.slice(""), o) : g(i + 1)).match.def);) i++;
            for (;
                (t = B().validPositions[i - 1]) && t && t.match.optionality && t.input === z.skipOptionalPartCharacter;) i--;
            return e.splice(i), e
        }

        function v(e) {
            if (Q.isFunction(z.isComplete)) return z.isComplete(e, z);
            if ("*" === z.repeat) return Z;
            var t = !1,
                i = r(!0),
                n = x(i.l);
            if (i.def === Z || i.def.newBlockMarker || i.def.optionality || i.def.optionalQuantifier) {
                t = !0;
                for (var o = 0; o <= n; o++) {
                    var s = k(o).match;
                    if (null !== s.fn && B().validPositions[o] === Z && !0 !== s.optionality && !0 !== s.optionalQuantifier || null === s.fn && e[o] !== O(o, s)) {
                        t = !1;
                        break
                    }
                }
            }
            return t
        }

        function P(r, e, t, i, n) {
            if ((z.numericInput || I) && (e === ee.keyCode.BACKSPACE ? e = ee.keyCode.DELETE : e === ee.keyCode.DELETE && (e = ee.keyCode.BACKSPACE), I)) {
                var o = t.end;
                t.end = t.begin, t.begin = o
            }
            e === ee.keyCode.BACKSPACE && (t.end - t.begin < 1 || !1 === z.insertMode) ? (t.begin = x(t.begin), B().validPositions[t.begin] !== Z && B().validPositions[t.begin].input === z.groupSeparator && t.begin--) : e === ee.keyCode.DELETE && t.begin === t.end && (t.end = j(t.end, !0) && B().validPositions[t.end] && B().validPositions[t.end].input !== z.radixPoint ? t.end + 1 : D(t.end) + 1, B().validPositions[t.begin] !== Z && B().validPositions[t.begin].input === z.groupSeparator && t.end++), b(t.begin, t.end, !1, i), !0 !== i && function() {
                if (z.keepStatic) {
                    for (var e = [], t = C(-1, !0), i = Q.extend(!0, {}, B().validPositions), n = B().validPositions[t]; 0 <= t; t--) {
                        var o = B().validPositions[t];
                        if (o) {
                            if (!0 !== o.generatedInput && /[0-9a-bA-Z]/.test(o.input) && e.push(o.input), delete B().validPositions[t], o.alternation !== Z && o.locator[o.alternation] !== n.locator[o.alternation]) break;
                            n = o
                        }
                    }
                    if (-1 < t)
                        for (B().p = D(C(-1, !0)); 0 < e.length;) {
                            var s = new Q.Event("keypress");
                            s.which = e.pop().charCodeAt(0), U.keypressEvent.call(r, s, !0, !1, !1, B().p)
                        } else B().validPositions = Q.extend(!0, {}, i)
                }
            }();
            var s = C(t.begin, !0);
            if (s < t.begin) B().p = D(s);
            else if (!0 !== i && (B().p = t.begin, !0 !== n))
                for (; B().p < s && B().validPositions[B().p] === Z;) B().p++
        }

        function s(c) {
            var d = (c.ownerDocument.defaultView || Y).getComputedStyle(c, null),
                e = J.createElement("div");
            e.style.width = d.width, e.style.textAlign = d.textAlign, (M = J.createElement("div")).className = "im-colormask", c.parentNode.insertBefore(M, c), c.parentNode.removeChild(c), M.appendChild(e), M.appendChild(c), c.style.left = e.offsetLeft + "px", Q(c).on("click", function(e) {
                return m(c, function(e) {
                    var t, i = J.createElement("span");
                    for (var n in d) isNaN(n) && -1 !== n.indexOf("font") && (i.style[n] = d[n]);
                    i.style.textTransform = d.textTransform, i.style.letterSpacing = d.letterSpacing, i.style.position = "absolute", i.style.height = "auto", i.style.width = "auto", i.style.visibility = "hidden", i.style.whiteSpace = "nowrap", J.body.appendChild(i);
                    var o, s = c.inputmask._valueGet(),
                        r = 0;
                    for (t = 0, o = s.length; t <= o; t++) {
                        if (i.innerHTML += s.charAt(t) || "_", i.offsetWidth >= e) {
                            var a = e - r,
                                l = i.offsetWidth - e;
                            i.innerHTML = s.charAt(t), t = (a -= i.offsetWidth / 3) < l ? t - 1 : t;
                            break
                        }
                        r = i.offsetWidth
                    }
                    return J.body.removeChild(i), t
                }(e.clientX)), U.clickEvent.call(c, [e])
            }), Q(c).on("keydown", function(e) {
                e.shiftKey || !1 === z.insertMode || setTimeout(function() {
                    u(c)
                }, 0)
            })
        }

        function u(t, i, e) {
            function n() {
                c || null !== s.fn && r.input !== Z ? c && (null !== s.fn && r.input !== Z || "" === s.def) && (c = !1, l += "</span>") : (c = !0, l += "<span class='im-static'>")
            }

            function o(e) {
                !0 !== e && d !== i.begin || J.activeElement !== t || (l += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>")
            }
            var s, r, a, l = "",
                c = !1,
                d = 0;
            if (M !== Z) {
                var u = E();
                if (i === Z ? i = m(t) : i.begin === Z && (i = {
                        begin: i,
                        end: i
                    }), !0 !== e) {
                    for (var p = C(); o(), B().validPositions[d] ? (r = B().validPositions[d], s = r.match, a = r.locator.slice(), n(), l += u[d]) : (r = k(d, a, d - 1), s = r.match, a = r.locator.slice(), (!1 === z.jitMasking || d < p || "number" == typeof z.jitMasking && isFinite(z.jitMasking) && z.jitMasking > d) && (n(), l += O(d, s))), d++, (L === Z || d < L) && (null !== s.fn || "" !== s.def) || d < p || c;); - 1 === l.indexOf("im-caret") && o(!0), c && n()
                }
                var f = M.getElementsByTagName("div")[0];
                f.innerHTML = l, t.inputmask.positionColorMask(t, f)
            }
        }
        t = t || this.maskset, z = z || this.opts;
        var _, a, L, M, n, H = this,
            c = this.el,
            I = this.isRTL,
            p = !1,
            q = !1,
            F = !1,
            R = !1,
            W = {
                on: function(e, t, s) {
                    var i = function(e) {
                        if (this.inputmask === Z && "FORM" !== this.nodeName) {
                            var t = Q.data(this, "_inputmask_opts");
                            t ? new ee(t).mask(this) : W.off(this)
                        } else {
                            if ("setvalue" === e.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === z.tabThrough && e.keyCode === ee.keyCode.TAB))) {
                                switch (e.type) {
                                    case "input":
                                        if (!0 === q) return q = !1, e.preventDefault();
                                        break;
                                    case "keydown":
                                        q = p = !1;
                                        break;
                                    case "keypress":
                                        if (!0 === p) return e.preventDefault();
                                        p = !0;
                                        break;
                                    case "click":
                                        if (ne || oe) {
                                            var i = this,
                                                n = arguments;
                                            return setTimeout(function() {
                                                s.apply(i, n)
                                            }, 0), !1
                                        }
                                }
                                var o = s.apply(this, arguments);
                                return !1 === o && (e.preventDefault(), e.stopPropagation()), o
                            }
                            e.preventDefault()
                        }
                    };
                    e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(i), -1 !== Q.inArray(t, ["submit", "reset"]) ? null !== e.form && Q(e.form).on(t, i) : Q(e).on(t, i)
                },
                off: function(n, e) {
                    var t;
                    n.inputmask && n.inputmask.events && (e ? (t = [])[e] = n.inputmask.events[e] : t = n.inputmask.events, Q.each(t, function(e, t) {
                        for (; 0 < t.length;) {
                            var i = t.pop(); - 1 !== Q.inArray(e, ["submit", "reset"]) ? null !== n.form && Q(n.form).off(e, i) : Q(n).off(e, i)
                        }
                        delete n.inputmask.events[e]
                    }))
                }
            },
            U = {
                keydownEvent: function(e) {
                    var t, i, n, o = this,
                        s = Q(o),
                        r = e.keyCode,
                        a = m(o);
                    if (r === ee.keyCode.BACKSPACE || r === ee.keyCode.DELETE || oe && r === ee.keyCode.BACKSPACE_SAFARI || e.ctrlKey && r === ee.keyCode.X && (t = J.createElement("input"), (n = (i = "oncut") in t) || (t.setAttribute(i, "return;"), n = "function" == typeof t[i]), t = null, !n)) e.preventDefault(), P(o, r, a), N(o, E(!0), B().p, e, o.inputmask._valueGet() !== E().join("")), o.inputmask._valueGet() === y().join("") ? s.trigger("cleared") : !0 === v(E()) && s.trigger("complete");
                    else if (r === ee.keyCode.END || r === ee.keyCode.PAGE_DOWN) {
                        e.preventDefault();
                        var l = D(C());
                        z.insertMode || l !== B().maskLength || e.shiftKey || l--, m(o, e.shiftKey ? a.begin : l, l, !0)
                    } else r === ee.keyCode.HOME && !e.shiftKey || r === ee.keyCode.PAGE_UP ? (e.preventDefault(), m(o, 0, e.shiftKey ? a.begin : 0, !0)) : (z.undoOnEscape && r === ee.keyCode.ESCAPE || 90 === r && e.ctrlKey) && !0 !== e.altKey ? (d(o, !0, !1, _.split("")), s.trigger("click")) : r !== ee.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === z.tabThrough && r === ee.keyCode.TAB ? (!0 === e.shiftKey ? (null === g(a.begin).match.fn && (a.begin = D(a.begin)), a.end = x(a.begin, !0), a.begin = x(a.end, !0)) : (a.begin = D(a.begin, !0), a.end = D(a.begin, !0), a.end < B().maskLength && a.end--), a.begin < B().maskLength && (e.preventDefault(), m(o, a.begin, a.end))) : e.shiftKey || !1 === z.insertMode && (r === ee.keyCode.RIGHT ? setTimeout(function() {
                        var e = m(o);
                        m(o, e.begin)
                    }, 0) : r === ee.keyCode.LEFT && setTimeout(function() {
                        var e = m(o);
                        m(o, I ? e.begin + 1 : e.begin - 1)
                    }, 0)) : (z.insertMode = !z.insertMode, m(o, z.insertMode || a.begin !== B().maskLength ? a.begin : a.begin - 1));
                    z.onKeyDown.call(this, e, E(), m(o).begin, z), F = -1 !== Q.inArray(r, z.ignorables)
                },
                keypressEvent: function(e, t, i, n, o) {
                    var s = this,
                        r = Q(s),
                        a = e.which || e.charCode || e.keyCode;
                    if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || F)) return a === ee.keyCode.ENTER && _ !== E().join("") && (_ = E().join(""), setTimeout(function() {
                        r.trigger("change")
                    }, 0)), !0;
                    if (a) {
                        46 === a && !1 === e.shiftKey && "" !== z.radixPoint && (a = z.radixPoint.charCodeAt(0));
                        var l, c = t ? {
                                begin: o,
                                end: o
                            } : m(s),
                            d = String.fromCharCode(a);
                        B().writeOutBuffer = !0;
                        var u = A(c, d, n);
                        if (!1 !== u && (T(!0), l = u.caret !== Z ? u.caret : t ? u.pos + 1 : D(u.pos), B().p = l), !1 !== i && (setTimeout(function() {
                                z.onKeyValidation.call(s, a, u, z)
                            }, 0), B().writeOutBuffer && !1 !== u)) {
                            var p = E();
                            N(s, p, z.numericInput && u.caret === Z ? x(l) : l, e, !0 !== t), !0 !== t && setTimeout(function() {
                                !0 === v(p) && r.trigger("complete")
                            }, 0)
                        }
                        if (e.preventDefault(), t) return !1 !== u && (u.forwardPosition = l), u
                    }
                },
                pasteEvent: function(e) {
                    var t, i = this,
                        n = e.originalEvent || e,
                        o = Q(i),
                        s = i.inputmask._valueGet(!0),
                        r = m(i);
                    I && (t = r.end, r.end = r.begin, r.begin = t);
                    var a = s.substr(0, r.begin),
                        l = s.substr(r.end, s.length);
                    if (a === (I ? y().reverse() : y()).slice(0, r.begin).join("") && (a = ""), l === (I ? y().reverse() : y()).slice(r.end).join("") && (l = ""), I && (t = a, a = l, l = t), Y.clipboardData && Y.clipboardData.getData) s = a + Y.clipboardData.getData("Text") + l;
                    else {
                        if (!n.clipboardData || !n.clipboardData.getData) return !0;
                        s = a + n.clipboardData.getData("text/plain") + l
                    }
                    var c = s;
                    if (Q.isFunction(z.onBeforePaste)) {
                        if (!1 === (c = z.onBeforePaste.call(H, s, z))) return e.preventDefault();
                        c || (c = s)
                    }
                    return d(i, !1, !1, I ? c.split("").reverse() : c.toString().split("")), N(i, E(), D(C()), e, _ !== E().join("")), !0 === v(E()) && o.trigger("complete"), e.preventDefault()
                },
                inputFallBackEvent: function(e) {
                    var n = this,
                        s = n.inputmask._valueGet();
                    if (E().join("") !== s) {
                        var t = m(n);
                        if (!1 === function(e, t, i) {
                                if ("." === t.charAt(i.begin - 1) && "" !== z.radixPoint && ((t = t.split(""))[i.begin - 1] = z.radixPoint.charAt(0), t = t.join("")), t.charAt(i.begin - 1) === z.radixPoint && t.length > E().length) {
                                    var n = new Q.Event("keypress");
                                    return n.which = z.radixPoint.charCodeAt(0), U.keypressEvent.call(e, n, !0, !0, !1, i.begin - 1), !1
                                }
                            }(n, s, t)) return !1;
                        if (s = s.replace(new RegExp("(" + ee.escapeRegex(y().join("")) + ")*"), ""), !1 === function(e, t, i) {
                                if (ne) {
                                    var n = s.replace(E().join(""), "");
                                    if (1 === n.length) {
                                        var o = new Q.Event("keypress");
                                        return o.which = n.charCodeAt(0), U.keypressEvent.call(e, o, !0, !0, !1, B().validPositions[i.begin - 1] ? i.begin : i.begin - 1), !1
                                    }
                                }
                            }(n, 0, t)) return !1;
                        t.begin > s.length && (m(n, s.length), t = m(n));
                        var i = E().join(""),
                            o = s.substr(0, t.begin),
                            r = s.substr(t.begin),
                            a = i.substr(0, t.begin),
                            l = i.substr(t.begin),
                            c = t,
                            d = "",
                            u = !1;
                        if (o !== a) {
                            c.begin = 0;
                            for (var p = (u = o.length >= a.length) ? o.length : a.length, f = 0; o.charAt(f) === a.charAt(f) && f < p; f++) c.begin++;
                            u && (d += o.slice(c.begin, c.end))
                        }
                        r !== l && (r.length > l.length ? u && (c.end = c.begin) : r.length < l.length ? c.end += l.length - r.length : r.charAt(0) !== l.charAt(0) && c.end++), N(n, E(), c), 0 < d.length ? Q.each(d.split(""), function(e, t) {
                            var i = new Q.Event("keypress");
                            i.which = t.charCodeAt(0), F = !1, U.keypressEvent.call(n, i)
                        }) : (c.begin === c.end - 1 && m(n, x(c.begin + 1), c.end), e.keyCode = ee.keyCode.DELETE, U.keydownEvent.call(n, e)), e.preventDefault()
                    }
                },
                setValueEvent: function(e) {
                    this.inputmask.refreshValue = !1;
                    var t = this.inputmask._valueGet(!0);
                    Q.isFunction(z.onBeforeMask) && (t = z.onBeforeMask.call(H, t, z) || t), t = t.split(""), d(this, !0, !1, I ? t.reverse() : t), _ = E().join(""), (z.clearMaskOnLostFocus || z.clearIncomplete) && this.inputmask._valueGet() === y().join("") && this.inputmask._valueSet("")
                },
                focusEvent: function(e) {
                    var t = this,
                        i = t.inputmask._valueGet();
                    z.showMaskOnFocus && (!z.showMaskOnHover || z.showMaskOnHover && "" === i) && (t.inputmask._valueGet() !== E().join("") ? N(t, E(), D(C())) : !1 === R && m(t, D(C()))), !0 === z.positionCaretOnTab && !1 === R && "" !== i && (N(t, E(), m(t)), U.clickEvent.apply(t, [e, !0])), _ = E().join("")
                },
                mouseleaveEvent: function(e) {
                    if (R = !1, z.clearMaskOnLostFocus && J.activeElement !== this) {
                        var t = E().slice(),
                            i = this.inputmask._valueGet();
                        i !== this.getAttribute("placeholder") && "" !== i && (-1 === C() && i === y().join("") ? t = [] : l(t), N(this, t))
                    }
                },
                clickEvent: function(e, c) {
                    var d = this;
                    setTimeout(function() {
                        if (J.activeElement === d) {
                            var e = m(d);
                            if (c && (I ? e.end = e.begin : e.begin = e.end), e.begin === e.end) switch (z.positionCaretOnClick) {
                                case "none":
                                    break;
                                case "radixFocus":
                                    if (function(e) {
                                            if ("" !== z.radixPoint) {
                                                var t = B().validPositions;
                                                if (t[e] === Z || t[e].input === O(e)) {
                                                    if (e < D(-1)) return !0;
                                                    var i = Q.inArray(z.radixPoint, E());
                                                    if (-1 !== i) {
                                                        for (var n in t)
                                                            if (i < n && t[n].input !== O(n)) return !1;
                                                        return !0
                                                    }
                                                }
                                            }
                                            return !1
                                        }(e.begin)) {
                                        var t = E().join("").indexOf(z.radixPoint);
                                        m(d, z.numericInput ? D(t) : t);
                                        break
                                    }
                                default:
                                    var i = e.begin,
                                        n = C(i, !0),
                                        o = D(n);
                                    if (i < o) m(d, j(i, !0) || j(i - 1, !0) ? i : D(i));
                                    else {
                                        var s = B().validPositions[n],
                                            r = k(o, s ? s.match.locator : Z, s),
                                            a = O(o, r.match);
                                        if ("" !== a && E()[o] !== a && !0 !== r.match.optionalQuantifier && !0 !== r.match.newBlockMarker || !j(o, !0) && r.match.def === a) {
                                            var l = D(o);
                                            (l <= i || i === o) && (o = l)
                                        }
                                        m(d, o)
                                    }
                            }
                        }
                    }, 0)
                },
                dblclickEvent: function(e) {
                    var t = this;
                    setTimeout(function() {
                        m(t, 0, D(C()))
                    }, 0)
                },
                cutEvent: function(e) {
                    var t = this,
                        i = Q(t),
                        n = m(t),
                        o = e.originalEvent || e,
                        s = Y.clipboardData || o.clipboardData,
                        r = I ? E().slice(n.end, n.begin) : E().slice(n.begin, n.end);
                    s.setData("text", I ? r.reverse().join("") : r.join("")), J.execCommand && J.execCommand("copy"), P(t, ee.keyCode.DELETE, n), N(t, E(), B().p, e, _ !== E().join("")), t.inputmask._valueGet() === y().join("") && i.trigger("cleared")
                },
                blurEvent: function(e) {
                    var t = Q(this);
                    if (this.inputmask) {
                        var i = this.inputmask._valueGet(),
                            n = E().slice();
                        "" !== i && (z.clearMaskOnLostFocus && (-1 === C() && i === y().join("") ? n = [] : l(n)), !1 === v(n) && (setTimeout(function() {
                            t.trigger("incomplete")
                        }, 0), z.clearIncomplete && (T(), n = z.clearMaskOnLostFocus ? [] : y().slice())), N(this, n, Z, e)), _ !== E().join("") && (_ = n.join(""), t.trigger("change"))
                    }
                },
                mouseenterEvent: function(e) {
                    R = !0, J.activeElement !== this && z.showMaskOnHover && this.inputmask._valueGet() !== E().join("") && N(this, E())
                },
                submitEvent: function(e) {
                    _ !== E().join("") && a.trigger("change"), z.clearMaskOnLostFocus && -1 === C() && c.inputmask._valueGet && c.inputmask._valueGet() === y().join("") && c.inputmask._valueSet(""), z.removeMaskOnSubmit && (c.inputmask._valueSet(c.inputmask.unmaskedvalue(), !0), setTimeout(function() {
                        N(c, E())
                    }, 0))
                },
                resetEvent: function(e) {
                    c.inputmask.refreshValue = !0, setTimeout(function() {
                        a.trigger("setvalue")
                    }, 0)
                }
            };
        if (ee.prototype.positionColorMask = function(e, t) {
                e.style.left = t.offsetLeft + "px"
            }, e !== Z) switch (e.action) {
            case "isComplete":
                return c = e.el, v(E());
            case "unmaskedvalue":
                return c !== Z && e.value === Z || (n = e.value, n = (Q.isFunction(z.onBeforeMask) && z.onBeforeMask.call(H, n, z) || n).split(""), d(Z, !1, !1, I ? n.reverse() : n), Q.isFunction(z.onBeforeWrite) && z.onBeforeWrite.call(H, Z, E(), 0, z)), i(c);
            case "mask":
                ! function(e) {
                    W.off(e);
                    var t = function(e, a) {
                        var t = e.getAttribute("type"),
                            i = "INPUT" === e.tagName && -1 !== Q.inArray(t, a.supportsInputType) || e.isContentEditable || "TEXTAREA" === e.tagName;
                        if (!i)
                            if ("INPUT" === e.tagName) {
                                var n = J.createElement("input");
                                n.setAttribute("type", t), i = "text" === n.type, n = null
                            } else i = "partial";
                        return !1 !== i ? function(e) {
                            function t() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== C() || !0 !== a.nullable ? J.activeElement === this && a.clearMaskOnLostFocus ? (I ? l(E().slice()).reverse() : l(E().slice())).join("") : n.call(this) : "" : n.call(this)
                            }

                            function i(e) {
                                o.call(this, e), this.inputmask && Q(this).trigger("setvalue")
                            }
                            var n, o, s;
                            if (!e.inputmask.__valueGet) {
                                if (!0 !== a.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(e) {
                                            return e.__proto__
                                        } : function(e) {
                                            return e.constructor.prototype
                                        });
                                        var r = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : Z;
                                        r && r.get && r.set ? (n = r.get, o = r.set, Object.defineProperty(e, "value", {
                                            get: t,
                                            set: i,
                                            configurable: !0
                                        })) : "INPUT" !== e.tagName && (n = function() {
                                            return this.textContent
                                        }, o = function(e) {
                                            this.textContent = e
                                        }, Object.defineProperty(e, "value", {
                                            get: t,
                                            set: i,
                                            configurable: !0
                                        }))
                                    } else J.__lookupGetter__ && e.__lookupGetter__("value") && (n = e.__lookupGetter__("value"), o = e.__lookupSetter__("value"), e.__defineGetter__("value", t), e.__defineSetter__("value", i));
                                    e.inputmask.__valueGet = n, e.inputmask.__valueSet = o
                                }
                                e.inputmask._valueGet = function(e) {
                                    return I && !0 !== e ? n.call(this.el).split("").reverse().join("") : n.call(this.el)
                                }, e.inputmask._valueSet = function(e, t) {
                                    o.call(this.el, null === e || e === Z ? "" : !0 !== t && I ? e.split("").reverse().join("") : e)
                                }, n === Z && (n = function() {
                                    return this.value
                                }, o = function(e) {
                                    this.value = e
                                }, function(e) {
                                    if (Q.valHooks && (Q.valHooks[e] === Z || !0 !== Q.valHooks[e].inputmaskpatch)) {
                                        var i = Q.valHooks[e] && Q.valHooks[e].get ? Q.valHooks[e].get : function(e) {
                                                return e.value
                                            },
                                            o = Q.valHooks[e] && Q.valHooks[e].set ? Q.valHooks[e].set : function(e, t) {
                                                return e.value = t, e
                                            };
                                        Q.valHooks[e] = {
                                            get: function(e) {
                                                if (e.inputmask) {
                                                    if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                                    var t = i(e);
                                                    return -1 !== C(Z, Z, e.inputmask.maskset.validPositions) || !0 !== a.nullable ? t : ""
                                                }
                                                return i(e)
                                            },
                                            set: function(e, t) {
                                                var i, n = Q(e);
                                                return i = o(e, t), e.inputmask && n.trigger("setvalue"), i
                                            },
                                            inputmaskpatch: !0
                                        }
                                    }
                                }(e.type), s = e, W.on(s, "mouseenter", function(e) {
                                    var t = Q(this);
                                    this.inputmask._valueGet() !== E().join("") && t.trigger("setvalue")
                                }))
                            }
                        }(e) : e.inputmask = Z, i
                    }(e, z);
                    if (!1 !== t && (a = Q(c = e), -1 === (L = c !== Z ? c.maxLength : Z) && (L = Z), !0 === z.colorMask && s(c), se && (c.hasOwnProperty("inputmode") && (c.inputmode = z.inputmode, c.setAttribute("inputmode", z.inputmode)), "rtfm" === z.androidHack && (!0 !== z.colorMask && s(c), c.type = "password")), !0 === t && (W.on(c, "submit", U.submitEvent), W.on(c, "reset", U.resetEvent), W.on(c, "mouseenter", U.mouseenterEvent), W.on(c, "blur", U.blurEvent), W.on(c, "focus", U.focusEvent), W.on(c, "mouseleave", U.mouseleaveEvent), !0 !== z.colorMask && W.on(c, "click", U.clickEvent), W.on(c, "dblclick", U.dblclickEvent), W.on(c, "paste", U.pasteEvent), W.on(c, "dragdrop", U.pasteEvent), W.on(c, "drop", U.pasteEvent), W.on(c, "cut", U.cutEvent), W.on(c, "complete", z.oncomplete), W.on(c, "incomplete", z.onincomplete), W.on(c, "cleared", z.oncleared), se || !0 === z.inputEventOnly ? c.removeAttribute("maxLength") : (W.on(c, "keydown", U.keydownEvent), W.on(c, "keypress", U.keypressEvent)), W.on(c, "compositionstart", Q.noop), W.on(c, "compositionupdate", Q.noop), W.on(c, "compositionend", Q.noop), W.on(c, "keyup", Q.noop), W.on(c, "input", U.inputFallBackEvent), W.on(c, "beforeinput", Q.noop)), W.on(c, "setvalue", U.setValueEvent), _ = y().join(""), "" !== c.inputmask._valueGet(!0) || !1 === z.clearMaskOnLostFocus || J.activeElement === c)) {
                        var i = Q.isFunction(z.onBeforeMask) && z.onBeforeMask.call(H, c.inputmask._valueGet(!0), z) || c.inputmask._valueGet(!0);
                        "" !== i && d(c, !0, !1, I ? i.split("").reverse() : i.split(""));
                        var n = E().slice();
                        _ = n.join(""), !1 === v(n) && z.clearIncomplete && T(), z.clearMaskOnLostFocus && J.activeElement !== c && (-1 === C() ? n = [] : l(n)), N(c, n), J.activeElement === c && m(c, D(C()))
                    }
                }(c);
                break;
            case "format":
                return n = (Q.isFunction(z.onBeforeMask) && z.onBeforeMask.call(H, e.value, z) || e.value).split(""), d(Z, !0, !1, I ? n.reverse() : n), e.metadata ? {
                    value: I ? E().slice().reverse().join("") : E().join(""),
                    metadata: te.call(this, {
                        action: "getmetadata"
                    }, t, z)
                } : I ? E().slice().reverse().join("") : E().join("");
            case "isValid":
                e.value ? (n = e.value.split(""), d(Z, !0, !0, I ? n.reverse() : n)) : e.value = E().join("");
                for (var G = E(), X = r(), V = G.length - 1; X < V && !j(V); V--);
                return G.splice(X, V + 1 - X), v(G) && e.value === E().join("");
            case "getemptymask":
                return y().join("");
            case "remove":
                return c && c.inputmask && (a = Q(c), c.inputmask._valueSet(z.autoUnmask ? i(c) : c.inputmask._valueGet(!0)), W.off(c), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(c), "value") && c.inputmask.__valueGet && Object.defineProperty(c, "value", {
                    get: c.inputmask.__valueGet,
                    set: c.inputmask.__valueSet,
                    configurable: !0
                }) : J.__lookupGetter__ && c.__lookupGetter__("value") && c.inputmask.__valueGet && (c.__defineGetter__("value", c.inputmask.__valueGet), c.__defineSetter__("value", c.inputmask.__valueSet)), c.inputmask = Z), c;
            case "getmetadata":
                if (Q.isArray(t.metadata)) {
                    var K = o(!0, 0, !1).join("");
                    return Q.each(t.metadata, function(e, t) {
                        if (t.mask === K) return K = t, !1
                    }), K
                }
                return t.metadata
        }
    }
    var e = navigator.userAgent,
        ie = /mobile/i.test(e),
        ne = /iemobile/i.test(e),
        oe = /iphone/i.test(e) && !ne,
        se = /android/i.test(e) && !ne;
    return ee.prototype = {
        dataAttribute: "data-inputmask",
        defaults: {
            placeholder: "_",
            optionalmarker: {
                start: "[",
                end: "]"
            },
            quantifiermarker: {
                start: "{",
                end: "}"
            },
            groupmarker: {
                start: "(",
                end: ")"
            },
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: Q.noop,
            onincomplete: Q.noop,
            oncleared: Q.noop,
            repeat: 0,
            greedy: !0,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: Q.noop,
            onBeforeMask: null,
            onBeforePaste: function(e, t) {
                return Q.isFunction(t.onBeforeMask) ? t.onBeforeMask.call(this, e, t) : e
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: Q.noop,
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            radixPointDefinitionSymbol: Z,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "password"],
            ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
            isComplete: null,
            canClearPosition: Q.noop,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: Z,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: !1,
            androidHack: !1,
            importDataAttributes: !0
        },
        definitions: {
            9: {
                validator: "[0-9ï¼‘-ï¼™]",
                cardinality: 1,
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-zÐ-ÑÐÑ‘Ã€-Ã¿Âµ]",
                cardinality: 1,
                definitionSymbol: "*"
            },
            "*": {
                validator: "[0-9ï¼‘-ï¼™A-Za-zÐ-ÑÐÑ‘Ã€-Ã¿Âµ]",
                cardinality: 1
            }
        },
        aliases: {},
        masksCache: {},
        mask: function(e) {
            var o = this;
            return "string" == typeof e && (e = J.getElementById(e) || J.querySelectorAll(e)), e = e.nodeName ? [e] : e, Q.each(e, function(e, t) {
                var i = Q.extend(!0, {}, o.opts);
                ! function(i, e, n, o) {
                    function t(e, t) {
                        null !== (t = t !== Z ? t : i.getAttribute(o + "-" + e)) && ("string" == typeof t && (0 === e.indexOf("on") ? t = Y[t] : "false" === t ? t = !1 : "true" === t && (t = !0)), n[e] = t)
                    }
                    if (!0 === e.importDataAttributes) {
                        var s, r, a, l, c = i.getAttribute(o);
                        if (c && "" !== c && (c = c.replace(new RegExp("'", "g"), '"'), r = JSON.parse("{" + c + "}")), r)
                            for (l in a = Z, r)
                                if ("alias" === l.toLowerCase()) {
                                    a = r[l];
                                    break
                                }
                        for (s in t("alias", a), n.alias && d(n.alias, n, e), e) {
                            if (r)
                                for (l in a = Z, r)
                                    if (l.toLowerCase() === s.toLowerCase()) {
                                        a = r[l];
                                        break
                                    }
                            t(s, a)
                        }
                    }
                    Q.extend(!0, e, n), ("rtl" === i.dir || e.rightAlign) && (i.style.textAlign = "right"), ("rtl" === i.dir || e.numericInput) && (i.dir = "ltr", i.removeAttribute("dir"), e.isRTL = !0)
                }(t, i, Q.extend(!0, {}, o.userOptions), o.dataAttribute);
                var n = s(i, o.noMasksCache);
                n !== Z && (t.inputmask !== Z && (t.inputmask.opts.autoUnmask = !0, t.inputmask.remove()), t.inputmask = new ee(Z, Z, !0), t.inputmask.opts = i, t.inputmask.noMasksCache = o.noMasksCache, t.inputmask.userOptions = Q.extend(!0, {}, o.userOptions), t.inputmask.isRTL = i.isRTL || i.numericInput, (t.inputmask.el = t).inputmask.maskset = n, Q.data(t, "_inputmask_opts", i), te.call(t.inputmask, {
                    action: "mask"
                }))
            }), e && e[0] && e[0].inputmask || this
        },
        option: function(e, t) {
            return "string" == typeof e ? this.opts[e] : "object" == typeof e ? (Q.extend(this.userOptions, e), this.el && !0 !== t && this.mask(this.el), this) : void 0
        },
        unmaskedvalue: function(e) {
            return this.maskset = this.maskset || s(this.opts, this.noMasksCache), te.call(this, {
                action: "unmaskedvalue",
                value: e
            })
        },
        remove: function() {
            return te.call(this, {
                action: "remove"
            })
        },
        getemptymask: function() {
            return this.maskset = this.maskset || s(this.opts, this.noMasksCache), te.call(this, {
                action: "getemptymask"
            })
        },
        hasMaskedValue: function() {
            return !this.opts.autoUnmask
        },
        isComplete: function() {
            return this.maskset = this.maskset || s(this.opts, this.noMasksCache), te.call(this, {
                action: "isComplete"
            })
        },
        getmetadata: function() {
            return this.maskset = this.maskset || s(this.opts, this.noMasksCache), te.call(this, {
                action: "getmetadata"
            })
        },
        isValid: function(e) {
            return this.maskset = this.maskset || s(this.opts, this.noMasksCache), te.call(this, {
                action: "isValid",
                value: e
            })
        },
        format: function(e, t) {
            return this.maskset = this.maskset || s(this.opts, this.noMasksCache), te.call(this, {
                action: "format",
                value: e,
                metadata: t
            })
        },
        analyseMask: function(e, u, p) {
            function t(e, t, i, n) {
                this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = n || !1, this.quantifier = {
                    min: 1,
                    max: 1
                }
            }

            function s(i, e, n) {
                n = n !== Z ? n : i.matches.length;
                var o = i.matches[n - 1];
                if (u) 0 === e.indexOf("[") || m && /\\d|\\s|\\w]/i.test(e) || "." === e ? i.matches.splice(n++, 0, {
                    fn: new RegExp(e, p.casing ? "i" : ""),
                    cardinality: 1,
                    optionality: i.isOptional,
                    newBlockMarker: o === Z || o.def !== e,
                    casing: null,
                    def: e,
                    placeholder: Z,
                    nativeDef: e
                }) : (m && (e = e[e.length - 1]), Q.each(e.split(""), function(e, t) {
                    o = i.matches[n - 1], i.matches.splice(n++, 0, {
                        fn: null,
                        cardinality: 0,
                        optionality: i.isOptional,
                        newBlockMarker: o === Z || o.def !== t && null !== o.fn,
                        casing: null,
                        def: p.staticDefinitionSymbol || t,
                        placeholder: p.staticDefinitionSymbol !== Z ? t : Z,
                        nativeDef: t
                    })
                })), m = !1;
                else {
                    var t = (p.definitions ? p.definitions[e] : Z) || ee.prototype.definitions[e];
                    if (t && !m) {
                        for (var s = t.prevalidator, r = s ? s.length : 0, a = 1; a < t.cardinality; a++) {
                            var l = a <= r ? s[a - 1] : [],
                                c = l.validator,
                                d = l.cardinality;
                            i.matches.splice(n++, 0, {
                                fn: c ? "string" == typeof c ? new RegExp(c, p.casing ? "i" : "") : new function() {
                                    this.test = c
                                } : new RegExp("."),
                                cardinality: d || 1,
                                optionality: i.isOptional,
                                newBlockMarker: o === Z || o.def !== (t.definitionSymbol || e),
                                casing: t.casing,
                                def: t.definitionSymbol || e,
                                placeholder: t.placeholder,
                                nativeDef: e
                            }), o = i.matches[n - 1]
                        }
                        i.matches.splice(n++, 0, {
                            fn: t.validator ? "string" == typeof t.validator ? new RegExp(t.validator, p.casing ? "i" : "") : new function() {
                                this.test = t.validator
                            } : new RegExp("."),
                            cardinality: t.cardinality,
                            optionality: i.isOptional,
                            newBlockMarker: o === Z || o.def !== (t.definitionSymbol || e),
                            casing: t.casing,
                            def: t.definitionSymbol || e,
                            placeholder: t.placeholder,
                            nativeDef: e
                        })
                    } else i.matches.splice(n++, 0, {
                        fn: null,
                        cardinality: 0,
                        optionality: i.isOptional,
                        newBlockMarker: o === Z || o.def !== e && null !== o.fn,
                        casing: null,
                        def: p.staticDefinitionSymbol || e,
                        placeholder: p.staticDefinitionSymbol !== Z ? e : Z,
                        nativeDef: e
                    }), m = !1
                }
            }

            function i() {
                if (0 < g.length) {
                    if (s(a = g[g.length - 1], o), a.isAlternator) {
                        l = g.pop();
                        for (var e = 0; e < l.matches.length; e++) l.matches[e].isGroup = !1;
                        0 < g.length ? (a = g[g.length - 1]).matches.push(l) : v.matches.push(l)
                    }
                } else s(v, o)
            }
            var n, o, r, a, l, c, d, f = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                h = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                m = !1,
                v = new t,
                g = [],
                y = [];
            for (u && (p.optionalmarker.start = Z, p.optionalmarker.end = Z); n = u ? h.exec(e) : f.exec(e);) {
                if (o = n[0], u) switch (o.charAt(0)) {
                    case "?":
                        o = "{0,1}";
                        break;
                    case "+":
                    case "*":
                        o = "{" + o + "}"
                }
                if (m) i();
                else switch (o.charAt(0)) {
                    case p.escapeChar:
                        m = !0, u && i();
                        break;
                    case p.optionalmarker.end:
                    case p.groupmarker.end:
                        if ((r = g.pop()).openGroup = !1, r !== Z)
                            if (0 < g.length) {
                                if ((a = g[g.length - 1]).matches.push(r), a.isAlternator) {
                                    l = g.pop();
                                    for (var b = 0; b < l.matches.length; b++) l.matches[b].isGroup = !1, l.matches[b].alternatorGroup = !1;
                                    0 < g.length ? (a = g[g.length - 1]).matches.push(l) : v.matches.push(l)
                                }
                            } else v.matches.push(r);
                        else i();
                        break;
                    case p.optionalmarker.start:
                        g.push(new t(!1, !0));
                        break;
                    case p.groupmarker.start:
                        g.push(new t(!0));
                        break;
                    case p.quantifiermarker.start:
                        var k = new t(!1, !1, !0),
                            w = (o = o.replace(/[{}]/g, "")).split(","),
                            x = isNaN(w[0]) ? w[0] : parseInt(w[0]),
                            T = 1 === w.length ? x : isNaN(w[1]) ? w[1] : parseInt(w[1]);
                        if ("*" !== T && "+" !== T || (x = "*" === T ? 0 : 1), k.quantifier = {
                                min: x,
                                max: T
                            }, 0 < g.length) {
                            var C = g[g.length - 1].matches;
                            (n = C.pop()).isGroup || ((d = new t(!0)).matches.push(n), n = d), C.push(n), C.push(k)
                        } else(n = v.matches.pop()).isGroup || (u && null === n.fn && "." === n.def && (n.fn = new RegExp(n.def, p.casing ? "i" : "")), (d = new t(!0)).matches.push(n), n = d), v.matches.push(n), v.matches.push(k);
                        break;
                    case p.alternatormarker:
                        if (0 < g.length) {
                            var S = (a = g[g.length - 1]).matches[a.matches.length - 1];
                            c = a.openGroup && (S.matches === Z || !1 === S.isGroup && !1 === S.isAlternator) ? g.pop() : a.matches.pop()
                        } else c = v.matches.pop();
                        if (c.isAlternator) g.push(c);
                        else if (c.alternatorGroup ? (l = g.pop(), c.alternatorGroup = !1) : l = new t(!1, !1, !1, !0), l.matches.push(c), g.push(l), c.openGroup) {
                            var E = new t(!(c.openGroup = !1));
                            E.alternatorGroup = !0, g.push(E)
                        }
                        break;
                    default:
                        i()
                }
            }
            for (; 0 < g.length;) r = g.pop(), v.matches.push(r);
            return 0 < v.matches.length && (function n(o) {
                o && o.matches && Q.each(o.matches, function(e, t) {
                    var i = o.matches[e + 1];
                    (i === Z || i.matches === Z || !1 === i.isQuantifier) && t && t.isGroup && (t.isGroup = !1, u || (s(t, p.groupmarker.start, 0), !0 !== t.openGroup && s(t, p.groupmarker.end))), n(t)
                })
            }(v), y.push(v)), (p.numericInput || p.isRTL) && function e(t) {
                for (var i in t.matches = t.matches.reverse(), t.matches)
                    if (t.matches.hasOwnProperty(i)) {
                        var n = parseInt(i);
                        if (t.matches[i].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                            var o = t.matches[i];
                            t.matches.splice(i, 1), t.matches.splice(n + 1, 0, o)
                        }
                        t.matches[i].matches !== Z ? t.matches[i] = e(t.matches[i]) : t.matches[i] = ((s = t.matches[i]) === p.optionalmarker.start ? s = p.optionalmarker.end : s === p.optionalmarker.end ? s = p.optionalmarker.start : s === p.groupmarker.start ? s = p.groupmarker.end : s === p.groupmarker.end && (s = p.groupmarker.start), s)
                    }
                var s;
                return t
            }(y[0]), y
        }
    }, ee.extendDefaults = function(e) {
        Q.extend(!0, ee.prototype.defaults, e)
    }, ee.extendDefinitions = function(e) {
        Q.extend(!0, ee.prototype.definitions, e)
    }, ee.extendAliases = function(e) {
        Q.extend(!0, ee.prototype.aliases, e)
    }, ee.format = function(e, t, i) {
        return ee(t).format(e, i)
    }, ee.unmask = function(e, t) {
        return ee(t).unmaskedvalue(e)
    }, ee.isValid = function(e, t) {
        return ee(t).isValid(e)
    }, ee.remove = function(e) {
        Q.each(e, function(e, t) {
            t.inputmask && t.inputmask.remove()
        })
    }, ee.escapeRegex = function(e) {
        return e.replace(new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim"), "\\$1")
    }, ee.keyCode = {
        ALT: 18,
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
        X: 88
    }, ee
}), $(document).ready(function() {
        var e = $(".js_mask");
        new Inputmask({
            mask: "+38(999)999-99-99"
        }).mask(e), $(".js_mask").on("keyup", function() {
            var e = $(this).closest(".ajaxForm").find(".js_mask");
            12 <= e.val().replace(/[^.\d]+/g, "").length ? e.removeClass("invalid") : e.addClass("invalid")
        }), $(".ajaxForm button:submit").on("click", function() {
            var e = $(this).closest(".ajaxForm").find(".js_mask");
            12 <= e.val().replace(/[^.\d]+/g, "").length ? e.removeClass("invalid") : e.addClass("invalid")
        }), $(".modal").on("hidden.bs.modal", function() {
            $(".js_mask").removeClass("invalid")
        })
    }), jQuery.cookie = function(e, t, i) {
        if (void 0 === t) {
            var n = null;
            if (document.cookie && "" != document.cookie)
                for (var o = document.cookie.split(";"), s = 0; s < o.length; s++) {
                    var r = jQuery.trim(o[s]);
                    if (r.substring(0, e.length + 1) == e + "=") {
                        n = decodeURIComponent(r.substring(e.length + 1));
                        break
                    }
                }
            return n
        }
        i = i || {}, null === t && (t = "", i.expires = -1);
        var a, l = "";
        i.expires && ("number" == typeof i.expires || i.expires.toUTCString) && ("number" == typeof i.expires ? (a = new Date).setTime(a.getTime() + 24 * i.expires * 60 * 60 * 1e3) : a = i.expires, l = "; expires=" + a.toUTCString());
        var c = i.path ? "; path=" + i.path : "",
            d = i.domain ? "; domain=" + i.domain : "",
            u = i.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(t), l, c, d, u].join("")
    },
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
    }(function(P) {
        "use strict";

        function i(e) {
            var t = e.data;
            e.isDefaultPrevented() || (e.preventDefault(), P(e.target).ajaxSubmit(t))
        }

        function n(e) {
            var t = e.target,
                i = P(t);
            if (!i.is("[type=submit],[type=image]")) {
                var n = i.closest("[type=submit]");
                if (0 === n.length) return;
                t = n[0]
            }
            var o = this;
            if ("image" == (o.clk = t).type)
                if (void 0 !== e.offsetX) o.clk_x = e.offsetX, o.clk_y = e.offsetY;
                else if ("function" == typeof P.fn.offset) {
                var s = i.offset();
                o.clk_x = e.pageX - s.left, o.clk_y = e.pageY - s.top
            } else o.clk_x = e.pageX - t.offsetLeft, o.clk_y = e.pageY - t.offsetTop;
            setTimeout(function() {
                o.clk = o.clk_x = o.clk_y = null
            }, 100)
        }

        function _() {
            if (P.fn.ajaxSubmit.debug) {
                var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
            }
        }
        var b = {};
        b.fileapi = void 0 !== P("<input type='file'/>").get(0).files, b.formdata = void 0 !== window.FormData;
        var L = !!P.fn.prop;
        P.fn.attr2 = function() {
            if (!L) return this.attr.apply(this, arguments);
            var e = this.prop.apply(this, arguments);
            return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
        }, P.fn.ajaxSubmit = function(j) {
            function e(e) {
                function d(t) {
                    var i = null;
                    try {
                        t.contentWindow && (i = t.contentWindow.document)
                    } catch (e) {
                        _("cannot get iframe.contentWindow document: " + e)
                    }
                    if (i) return i;
                    try {
                        i = t.contentDocument ? t.contentDocument : t.document
                    } catch (e) {
                        _("cannot get iframe.contentDocument: " + e), i = t.document
                    }
                    return i
                }

                function t() {
                    var e = N.attr2("target"),
                        t = N.attr2("action"),
                        i = N.attr("enctype") || N.attr("encoding") || "multipart/form-data";
                    a.setAttribute("target", s), (!D || /post/i.test(D)) && a.setAttribute("method", "POST"), t != p.url && a.setAttribute("action", p.url), p.skipEncodingOverride || D && !/post/i.test(D) || N.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), p.timeout && (y = setTimeout(function() {
                        g = !0, u(k)
                    }, p.timeout));
                    var n = [];
                    try {
                        if (p.extraData)
                            for (var o in p.extraData) p.extraData.hasOwnProperty(o) && (P.isPlainObject(p.extraData[o]) && p.extraData[o].hasOwnProperty("name") && p.extraData[o].hasOwnProperty("value") ? n.push(P('<input type="hidden" name="' + p.extraData[o].name + '">').val(p.extraData[o].value).appendTo(a)[0]) : n.push(P('<input type="hidden" name="' + o + '">').val(p.extraData[o]).appendTo(a)[0]));
                        p.iframeTarget || h.appendTo("body"), m.attachEvent ? m.attachEvent("onload", u) : m.addEventListener("load", u, !1), setTimeout(function e() {
                            try {
                                var t = d(m).readyState;
                                _("state = " + t), t && "uninitialized" == t.toLowerCase() && setTimeout(e, 50)
                            } catch (e) {
                                _("Server abort: ", e, " (", e.name, ")"), u(w), y && clearTimeout(y), y = void 0
                            }
                        }, 15);
                        try {
                            a.submit()
                        } catch (e) {
                            document.createElement("form").submit.apply(a)
                        }
                    } finally {
                        a.setAttribute("action", t), a.setAttribute("enctype", i), e ? a.setAttribute("target", e) : N.removeAttr("target"), P(n).remove()
                    }
                }

                function u(e) {
                    if (!v.aborted && !C) {
                        if ((T = d(m)) || (_("cannot access response document"), e = w), e === k && v) return v.abort("timeout"), void b.reject(v, "timeout");
                        if (e == w && v) return v.abort("server abort"), void b.reject(v, "error", "server abort");
                        if (T && T.location.href != p.iframeSrc || g) {
                            m.detachEvent ? m.detachEvent("onload", u) : m.removeEventListener("load", u, !1);
                            var t, i = "success";
                            try {
                                if (g) throw "timeout";
                                var n = "xml" == p.dataType || T.XMLDocument || P.isXMLDoc(T);
                                if (_("isXml=" + n), !n && window.opera && (null === T.body || !T.body.innerHTML) && --S) return _("requeing onLoad callback, DOM not available"), void setTimeout(u, 250);
                                var o = T.body ? T.body : T.documentElement;
                                v.responseText = o ? o.innerHTML : null, v.responseXML = T.XMLDocument ? T.XMLDocument : T, n && (p.dataType = "xml"), v.getResponseHeader = function(e) {
                                    return {
                                        "content-type": p.dataType
                                    }[e.toLowerCase()]
                                }, o && (v.status = Number(o.getAttribute("status")) || v.status, v.statusText = o.getAttribute("statusText") || v.statusText);
                                var s = (p.dataType || "").toLowerCase(),
                                    r = /(json|script|text)/.test(s);
                                if (r || p.textarea) {
                                    var a = T.getElementsByTagName("textarea")[0];
                                    if (a) v.responseText = a.value, v.status = Number(a.getAttribute("status")) || v.status, v.statusText = a.getAttribute("statusText") || v.statusText;
                                    else if (r) {
                                        var l = T.getElementsByTagName("pre")[0],
                                            c = T.getElementsByTagName("body")[0];
                                        l ? v.responseText = l.textContent ? l.textContent : l.innerText : c && (v.responseText = c.textContent ? c.textContent : c.innerText)
                                    }
                                } else "xml" == s && !v.responseXML && v.responseText && (v.responseXML = E(v.responseText));
                                try {
                                    x = A(v, s, p)
                                } catch (e) {
                                    i = "parsererror", v.error = t = e || i
                                }
                            } catch (e) {
                                _("error caught: ", e), i = "error", v.error = t = e || i
                            }
                            v.aborted && (_("upload aborted"), i = null), v.status && (i = 200 <= v.status && v.status < 300 || 304 === v.status ? "success" : "error"), "success" === i ? (p.success && p.success.call(p.context, x, "success", v), b.resolve(v.responseText, "success", v), f && P.event.trigger("ajaxSuccess", [v, p])) : i && (void 0 === t && (t = v.statusText), p.error && p.error.call(p.context, v, i, t), b.reject(v, "error", t), f && P.event.trigger("ajaxError", [v, p, t])), f && P.event.trigger("ajaxComplete", [v, p]), f && !--P.active && P.event.trigger("ajaxStop"), p.complete && p.complete.call(p.context, v, i), C = !0, p.timeout && clearTimeout(y), setTimeout(function() {
                                p.iframeTarget ? h.attr("src", p.iframeSrc) : h.remove(), v.responseXML = null
                            }, 100)
                        }
                    }
                }
                var i, n, p, f, s, h, m, v, o, r, g, y, a = N[0],
                    b = P.Deferred();
                if (b.abort = function(e) {
                        v.abort(e)
                    }, e)
                    for (n = 0; n < O.length; n++) i = P(O[n]), L ? i.prop("disabled", !1) : i.removeAttr("disabled");
                if ((p = P.extend(!0, {}, P.ajaxSettings, j)).context = p.context || p, s = "jqFormIO" + (new Date).getTime(), p.iframeTarget ? (r = (h = P(p.iframeTarget)).attr2("name")) ? s = r : h.attr2("name", s) : (h = P('<iframe name="' + s + '" src="' + p.iframeSrc + '" />')).css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    }), m = h[0], v = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function(e) {
                            var t = "timeout" === e ? "timeout" : "aborted";
                            _("aborting upload... " + t), this.aborted = 1;
                            try {
                                m.contentWindow.document.execCommand && m.contentWindow.document.execCommand("Stop")
                            } catch (e) {}
                            h.attr("src", p.iframeSrc), v.error = t, p.error && p.error.call(p.context, v, t, e), f && P.event.trigger("ajaxError", [v, p, t]), p.complete && p.complete.call(p.context, v, t)
                        }
                    }, (f = p.global) && 0 == P.active++ && P.event.trigger("ajaxStart"), f && P.event.trigger("ajaxSend", [v, p]), p.beforeSend && !1 === p.beforeSend.call(p.context, v, p)) return p.global && P.active--, b.reject(), b;
                if (v.aborted) return b.reject(), b;
                (o = a.clk) && ((r = o.name) && !o.disabled && (p.extraData = p.extraData || {}, p.extraData[r] = o.value, "image" == o.type && (p.extraData[r + ".x"] = a.clk_x, p.extraData[r + ".y"] = a.clk_y)));
                var k = 1,
                    w = 2,
                    l = P("meta[name=csrf-token]").attr("content"),
                    c = P("meta[name=csrf-param]").attr("content");
                c && l && (p.extraData = p.extraData || {}, p.extraData[c] = l), p.forceSync ? t() : setTimeout(t, 10);
                var x, T, C, S = 50,
                    E = P.parseXML || function(e, t) {
                        return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                    },
                    $ = P.parseJSON || function(e) {
                        return window.eval("(" + e + ")")
                    },
                    A = function(e, t, i) {
                        var n = e.getResponseHeader("content-type") || "",
                            o = "xml" === t || !t && 0 <= n.indexOf("xml"),
                            s = o ? e.responseXML : e.responseText;
                        return o && "parsererror" === s.documentElement.nodeName && P.error && P.error("parsererror"), i && i.dataFilter && (s = i.dataFilter(s, t)), "string" == typeof s && ("json" === t || !t && 0 <= n.indexOf("json") ? s = $(s) : ("script" === t || !t && 0 <= n.indexOf("javascript")) && P.globalEval(s)), s
                    };
                return b
            }
            if (!this.length) return _("ajaxSubmit: skipping submit process - no element selected"), this;
            var D, t, i, N = this;
            "function" == typeof j ? j = {
                success: j
            } : void 0 === j && (j = {}), D = j.type || this.attr2("method"), (i = (i = "string" == typeof(t = j.url || this.attr2("action")) ? P.trim(t) : "") || window.location.href || "") && (i = (i.match(/^([^#]+)/) || [])[1]), j = P.extend(!0, {
                url: i,
                success: P.ajaxSettings.success,
                type: D || P.ajaxSettings.type,
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, j);
            var n = {};
            if (this.trigger("form-pre-serialize", [this, j, n]), n.veto) return _("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (j.beforeSerialize && !1 === j.beforeSerialize(this, j)) return _("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            var o = j.traditional;
            void 0 === o && (o = P.ajaxSettings.traditional);
            var s, O = [],
                r = this.formToArray(j.semantic, O);
            if (j.data && (j.extraData = j.data, s = P.param(j.data, o)), j.beforeSubmit && !1 === j.beforeSubmit(r, this, j)) return _("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [r, this, j, n]), n.veto) return _("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            var a = P.param(r, o);
            s && (a = a ? a + "&" + s : s), "GET" == j.type.toUpperCase() ? (j.url += (0 <= j.url.indexOf("?") ? "&" : "?") + a, j.data = null) : j.data = a;
            var l = [];
            if (j.resetForm && l.push(function() {
                    N.resetForm()
                }), j.clearForm && l.push(function() {
                    N.clearForm(j.includeHidden)
                }), !j.dataType && j.target) {
                var c = j.success || function() {};
                l.push(function(e) {
                    var t = j.replaceTarget ? "replaceWith" : "html";
                    P(j.target)[t](e).each(c, arguments)
                })
            } else j.success && l.push(j.success);
            if (j.success = function(e, t, i) {
                    for (var n = j.context || this, o = 0, s = l.length; o < s; o++) l[o].apply(n, [e, t, i || N, N])
                }, j.error) {
                var d = j.error;
                j.error = function(e, t, i) {
                    var n = j.context || this;
                    d.apply(n, [e, t, i, N])
                }
            }
            if (j.complete) {
                var u = j.complete;
                j.complete = function(e, t) {
                    var i = j.context || this;
                    u.apply(i, [e, t, N])
                }
            }
            var p = 0 < P("input[type=file]:enabled", this).filter(function() {
                    return "" !== P(this).val()
                }).length,
                f = "multipart/form-data",
                h = N.attr("enctype") == f || N.attr("encoding") == f,
                m = b.fileapi && b.formdata;
            _("fileAPI :" + m);
            var v, g = (p || h) && !m;
            !1 !== j.iframe && (j.iframe || g) ? j.closeKeepAlive ? P.get(j.closeKeepAlive, function() {
                v = e(r)
            }) : v = e(r) : v = (p || h) && m ? function(e) {
                for (var i = new FormData, t = 0; t < e.length; t++) i.append(e[t].name, e[t].value);
                if (j.extraData) {
                    var n = function(e) {
                        var t, i, n = P.param(e, j.traditional).split("&"),
                            o = n.length,
                            s = [];
                        for (t = 0; t < o; t++) n[t] = n[t].replace(/\+/g, " "), i = n[t].split("="), s.push([decodeURIComponent(i[0]), decodeURIComponent(i[1])]);
                        return s
                    }(j.extraData);
                    for (t = 0; t < n.length; t++) n[t] && i.append(n[t][0], n[t][1])
                }
                j.data = null;
                var o = P.extend(!0, {}, P.ajaxSettings, j, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: D || "POST"
                });
                j.uploadProgress && (o.xhr = function() {
                    var e = P.ajaxSettings.xhr();
                    return e.upload && e.upload.addEventListener("progress", function(e) {
                        var t = 0,
                            i = e.loaded || e.position,
                            n = e.total;
                        e.lengthComputable && (t = Math.ceil(i / n * 100)), j.uploadProgress(e, i, n, t)
                    }, !1), e
                }), o.data = null;
                var s = o.beforeSend;
                return o.beforeSend = function(e, t) {
                    j.formData ? t.data = j.formData : t.data = i, s && s.call(this, e, t)
                }, P.ajax(o)
            }(r) : P.ajax(j), N.removeData("jqxhr").data("jqxhr", v);
            for (var y = 0; y < O.length; y++) O[y] = null;
            return this.trigger("form-submit-notify", [this, j]), this
        }, P.fn.ajaxForm = function(e) {
            if ((e = e || {}).delegation = e.delegation && P.isFunction(P.fn.on), e.delegation || 0 !== this.length) return e.delegation ? (P(document).off("submit.form-plugin", this.selector, i).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, e, i).on("click.form-plugin", this.selector, e, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", e, i).bind("click.form-plugin", e, n);
            var t = {
                s: this.selector,
                c: this.context
            };
            return !P.isReady && t.s ? (_("DOM not ready, queuing ajaxForm"), P(function() {
                P(t.s, t.c).ajaxForm(e)
            })) : _("terminating; zero elements found by selector" + (P.isReady ? "" : " (DOM not ready)")), this
        }, P.fn.ajaxFormUnbind = function() {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, P.fn.formToArray = function(e, t) {
            var i = [];
            if (0 === this.length) return i;
            var n, o, s, r, a, l, c, d, u = this[0],
                p = this.attr("id"),
                f = e ? u.getElementsByTagName("*") : u.elements;
            if (f && !/MSIE [678]/.test(navigator.userAgent) && (f = P(f).get()), p && ((n = P(':input[form="' + p + '"]').get()).length && (f = (f || []).concat(n))), !f || !f.length) return i;
            for (o = 0, c = f.length; o < c; o++)
                if ((r = (l = f[o]).name) && !l.disabled)
                    if (e && u.clk && "image" == l.type) u.clk == l && (i.push({
                        name: r,
                        value: P(l).val(),
                        type: l.type
                    }), i.push({
                        name: r + ".x",
                        value: u.clk_x
                    }, {
                        name: r + ".y",
                        value: u.clk_y
                    }));
                    else if ((a = P.fieldValue(l, !0)) && a.constructor == Array)
                for (t && t.push(l), s = 0, d = a.length; s < d; s++) i.push({
                    name: r,
                    value: a[s]
                });
            else if (b.fileapi && "file" == l.type) {
                t && t.push(l);
                var h = l.files;
                if (h.length)
                    for (s = 0; s < h.length; s++) i.push({
                        name: r,
                        value: h[s],
                        type: l.type
                    });
                else i.push({
                    name: r,
                    value: "",
                    type: l.type
                })
            } else null != a && (t && t.push(l), i.push({
                name: r,
                value: a,
                type: l.type,
                required: l.required
            }));
            if (!e && u.clk) {
                var m = P(u.clk),
                    v = m[0];
                (r = v.name) && !v.disabled && "image" == v.type && (i.push({
                    name: r,
                    value: m.val()
                }), i.push({
                    name: r + ".x",
                    value: u.clk_x
                }, {
                    name: r + ".y",
                    value: u.clk_y
                }))
            }
            return i
        }, P.fn.formSerialize = function(e) {
            return P.param(this.formToArray(e))
        }, P.fn.fieldSerialize = function(o) {
            var s = [];
            return this.each(function() {
                var e = this.name;
                if (e) {
                    var t = P.fieldValue(this, o);
                    if (t && t.constructor == Array)
                        for (var i = 0, n = t.length; i < n; i++) s.push({
                            name: e,
                            value: t[i]
                        });
                    else null != t && s.push({
                        name: this.name,
                        value: t
                    })
                }
            }), P.param(s)
        }, P.fn.fieldValue = function(e) {
            for (var t = [], i = 0, n = this.length; i < n; i++) {
                var o = this[i],
                    s = P.fieldValue(o, e);
                null == s || s.constructor == Array && !s.length || (s.constructor == Array ? P.merge(t, s) : t.push(s))
            }
            return t
        }, P.fieldValue = function(e, t) {
            var i = e.name,
                n = e.type,
                o = e.tagName.toLowerCase();
            if (void 0 === t && (t = !0), t && (!i || e.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !e.checked || ("submit" == n || "image" == n) && e.form && e.form.clk != e || "select" == o && -1 == e.selectedIndex)) return null;
            if ("select" != o) return P(e).val();
            var s = e.selectedIndex;
            if (s < 0) return null;
            for (var r = [], a = e.options, l = "select-one" == n, c = l ? s + 1 : a.length, d = l ? s : 0; d < c; d++) {
                var u = a[d];
                if (u.selected) {
                    var p = u.value;
                    if (p || (p = u.attributes && u.attributes.value && !u.attributes.value.specified ? u.text : u.value), l) return p;
                    r.push(p)
                }
            }
            return r
        }, P.fn.clearForm = function(e) {
            return this.each(function() {
                P("input,select,textarea", this).clearFields(e)
            })
        }, P.fn.clearFields = P.fn.clearInputs = function(i) {
            var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function() {
                var e = this.type,
                    t = this.tagName.toLowerCase();
                n.test(e) || "textarea" == t ? this.value = "" : "checkbox" == e || "radio" == e ? this.checked = !1 : "select" == t ? this.selectedIndex = -1 : "file" == e ? /MSIE/.test(navigator.userAgent) ? P(this).replaceWith(P(this).clone(!0)) : P(this).val("") : i && (!0 === i && /hidden/.test(e) || "string" == typeof i && P(this).is(i)) && (this.value = "")
            })
        }, P.fn.resetForm = function() {
            return this.each(function() {
                ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
            })
        }, P.fn.enable = function(e) {
            return void 0 === e && (e = !0), this.each(function() {
                this.disabled = !e
            })
        }, P.fn.selected = function(i) {
            return void 0 === i && (i = !0), this.each(function() {
                var e = this.type;
                if ("checkbox" == e || "radio" == e) this.checked = i;
                else if ("option" == this.tagName.toLowerCase()) {
                    var t = P(this).parent("select");
                    i && t[0] && "select-one" == t[0].type && t.find("option").selected(!1), this.selected = i
                }
            })
        }, P.fn.ajaxSubmit.debug = !1
    });