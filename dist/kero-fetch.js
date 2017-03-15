/*!
 * kero-fetch v3.1.26
 * kero-fetch - 基于 Promise 实现的 http 库
 * author : 
 * homepage : https://github.com/iuap-design/kero-fetch#readme
 * bugs : https://github.com/iuap-design/kero-fetch/issues
 */
!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    var installedModules = {};
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.i = function(value) {
        return value;
    }, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 10);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__extend__ = __webpack_require__(1);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return env;
    });
    var u = {};
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__extend__.a)(u, {
        isIE: !1,
        isFF: !1,
        isOpera: !1,
        isChrome: !1,
        isSafari: !1,
        isWebkit: !1,
        isIE8_BEFORE: !1,
        isIE8: !1,
        isIE8_CORE: !1,
        isIE9: !1,
        isIE9_CORE: !1,
        isIE10: !1,
        isIE10_ABOVE: !1,
        isIE11: !1,
        isEdge: !1,
        isIOS: !1,
        isIphone: !1,
        isIPAD: !1,
        isStandard: !1,
        version: 0,
        isWin: !1,
        isUnix: !1,
        isLinux: !1,
        isAndroid: !1,
        isAndroidPAD: !1,
        isAndroidPhone: !1,
        isMac: !1,
        hasTouch: !1,
        isMobile: !1
    }), function() {
        var version, userAgent = navigator.userAgent, rMsie = /(msie\s|trident.*rv:)([\w.]+)/, rFirefox = /(firefox)\/([\w.]+)/, rOpera = /(opera).+version\/([\w.]+)/, rChrome = /(chrome)\/([\w.]+)/, rSafari = /version\/([\w.]+).*(safari)/, ua = userAgent.toLowerCase(), browserMatch = {
            browser: "",
            version: ""
        }, match = rMsie.exec(ua);
        if (null != match && (browserMatch = {
            browser: "IE",
            version: match[2] || "0"
        }), match = rFirefox.exec(ua), null != match && (browserMatch = {
            browser: match[1] || "",
            version: match[2] || "0"
        }), match = rOpera.exec(ua), null != match && (browserMatch = {
            browser: match[1] || "",
            version: match[2] || "0"
        }), match = rChrome.exec(ua), null != match && (browserMatch = {
            browser: match[1] || "",
            version: match[2] || "0"
        }), match = rSafari.exec(ua), null != match && (browserMatch = {
            browser: match[2] || "",
            version: match[1] || "0"
        }), userAgent.indexOf("Edge") > -1 && (u.isEdge = !0), ua.match(/opera.([\d.]+)/) ? u.isOpera = !0 : "IE" == browserMatch.browser && 11 == browserMatch.version ? (u.isIE11 = !0, 
        u.isIE = !0) : ua.match(/chrome\/([\d.]+)/) ? (u.isChrome = !0, u.isStandard = !0) : ua.match(/version\/([\d.]+).*safari/) ? (u.isSafari = !0, 
        u.isStandard = !0) : ua.match(/gecko/) ? (u.isFF = !0, u.isStandard = !0) : ua.match(/msie ([\d.]+)/) ? u.isIE = !0 : ua.match(/firefox\/([\d.]+)/) && (u.isFF = !0, 
        u.isStandard = !0), ua.match(/webkit\/([\d.]+)/) && (u.isWebkit = !0), ua.match(/ipad/i) && (u.isIOS = !0, 
        u.isIPAD = !0, u.isStandard = !0), ua.match(/iphone/i) && (u.isIOS = !0, u.isIphone = !0), 
        "Mac68K" != navigator.platform && "MacPPC" != navigator.platform && "Macintosh" != navigator.platform && "MacIntel" != navigator.platform || (u.isMac = !0), 
        "Win32" != navigator.platform && "Windows" != navigator.platform && "Win64" != navigator.platform || (u.isWin = !0), 
        "X11" != navigator.platform || u.isWin || u.isMac || (u.isUnix = !0), String(navigator.platform).indexOf("Linux") > -1 && (u.isLinux = !0), 
        (ua.indexOf("Android") > -1 || ua.indexOf("android") > -1 || ua.indexOf("Adr") > -1 || ua.indexOf("adr") > -1) && (u.isAndroid = !0), 
        u.version = version && browserMatch.version ? browserMatch.version : 0, u.isAndroid && (window.screen.width >= 768 && window.screen.width < 1024 && (u.isAndroidPAD = !0), 
        window.screen.width <= 768 && (u.isAndroidPhone = !0)), u.isIE) {
            var intVersion = parseInt(u.version), mode = document.documentMode;
            null == mode ? 6 != intVersion && 7 != intVersion || (u.isIE8_BEFORE = !0) : (7 == mode ? u.isIE8_BEFORE = !0 : 8 == mode ? u.isIE8 = !0 : 9 == mode ? (u.isIE9 = !0, 
            u.isSTANDARD = !0) : 10 == mode ? (u.isIE10 = !0, u.isSTANDARD = !0, u.isIE10_ABOVE = !0) : u.isSTANDARD = !0, 
            8 == intVersion ? u.isIE8_CORE = !0 : 9 == intVersion ? u.isIE9_CORE = !0 : 11 == browserMatch.version && (u.isIE11 = !0));
        }
        "ontouchend" in document && (u.hasTouch = !0), (u.isIphone || u.isAndroidPhone) && (u.isMobile = !0);
    }();
    var env = u;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__enumerables__ = __webpack_require__(8);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return extend;
    });
    var extend = function(object, config) {
        var options, args = arguments;
        if (args.length > 1) for (var len = 1; len < args.length; len++) if (options = args[len], 
        object && options && "object" == typeof options) {
            var i, j, k;
            for (i in options) object[i] = options[i];
            if (__WEBPACK_IMPORTED_MODULE_0__enumerables__.a) for (j = __WEBPACK_IMPORTED_MODULE_0__enumerables__.a.length; j--; ) k = __WEBPACK_IMPORTED_MODULE_0__enumerables__.a[j], 
            options.hasOwnProperty && options.hasOwnProperty(k) && (object[k] = options[k]);
        }
        return object;
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return isArray;
    }), __webpack_require__.d(__webpack_exports__, "a", function() {
        return each;
    });
    var isArray = Array.isArray || function(val) {
        return "[object Array]" === Object.prototype.toString.call(val);
    }, each = function(obj, callback) {
        if (obj.forEach) obj.forEach(function(v, k) {
            callback(k, v);
        }); else {
            if (!(obj instanceof Object)) return;
            for (var k in obj) callback(k, obj[k]);
        }
    };
    try {
        NodeList.prototype.forEach = Array.prototype.forEach;
    } catch (e) {}
    String.prototype.lengthb = function() {
        return this.replace(/[^\x00-\xff]/g, "**").length;
    }, String.prototype.replaceAll = function(AFindText, ARepText) {
        var raRegExp = new RegExp(AFindText, "g");
        return this.replace(raRegExp, ARepText);
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_util__ = __webpack_require__(2);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return addDataTable;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return addDataTables;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return addAllDataTables;
    }), __webpack_require__.d(__webpack_exports__, "d", function() {
        return updateDataTables;
    });
    var addDataTable = function(dataTableId, rule) {
        var dataTable = this.app.getDataTable(dataTableId);
        return this.datas[dataTableId] = dataTable.getDataByRule(rule), this;
    }, addDataTables = function(dataTables) {
        if (2 == arguments.length) for (var i = 0; i < dataTables.length; i++) {
            var rule;
            "string" == typeof arguments[1] ? rule = arguments[1] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_util__.b)(arguments[1]) && (rule = arguments[1][i]), 
            this.addDataTable(dataTables[i], rule);
        } else for (var i = 0; i < dataTables.length; i++) {
            var dt = dataTables[i];
            if ("string" == typeof dt) this.addDataTable(dt); else for (var key in dt) this.addDataTable(key, dt[key]);
        }
        return this;
    }, addAllDataTables = function(rule) {
        for (var dts = this.app.dataTables, i = 0; i < dts.length; i++) this.addDataTable(dts[i].id, rule);
    }, updateDataTables = function(dataTables, deferred) {
        for (var key in dataTables) {
            var dt = this.app.getDataTable(key);
            dt && (dt.setData(dataTables[key]), dt.updateMeta(dataTables[key].meta));
        }
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_extend__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_ajax__ = __webpack_require__(7);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return fire;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return _successFunc;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return setSuccessFunc;
    });
    var fire = function(p) {
        var self = this, data = this.getData();
        data.parameters = ko.utils.stringifyJson(this.params);
        var params = {
            type: p.type || "POST",
            data: p.params || {},
            url: p.url || ServerEvent.DEFAULT.url,
            async: void 0 === p.async ? ServerEvent.DEFAULT.async : p.async,
            singleton: p.singleton || ServerEvent.DEFAULT.singleton,
            success: p.success,
            error: p.error,
            dataType: "json"
        };
        params.data.ctrl = p.ctrl, params.data.method = p.method, this.event && (params.data.event = ko.utils.stringifyJson(this.event));
        var preSuccess = p.preSuccess || function() {}, orignSuccess = p.success || function() {}, orignError = params.error;
        this.orignError = orignError;
        var deferred = params.deferred;
        deferred && deferred.resolve || (deferred = {
            resolve: function() {},
            reject: function() {}
        }), params.success = function(data, state, xhr) {
            "string" == typeof data && (data = JSON.parse(data)), self.processXHRError(self, data, state, xhr) ? (preSuccess.call(null, data), 
            self._successFunc(data, deferred), orignSuccess.call(null, data.custom), deferred.resolve()) : deferred.reject();
        }, params.error = function(data, state, xhr) {
            "string" == typeof data && (data = JSON.parse(data)), self.processXHRError(self, data, state, xhr) ? orignError && orignError.call(null, data.custom) : deferred.reject();
        }, params.data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_extend__.a)(params.data, data), 
        $ ? $.ajax(params) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_ajax__.a)(params);
    }, _successFunc = function(data, deferred) {
        "string" == typeof data && (data = JSON.parse(data));
        var dataTables = data.dataTables, dom = data.dom;
        dom && this.updateDom(JSON.parse(dom)), dataTables && this.updateDataTables(dataTables, deferred);
    }, setSuccessFunc = function(func) {
        this._successFunc = func;
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return processXHRError;
    });
    var processXHRError = function processXHRError(self, rsl, state, xhr) {
        return "string" == typeof rsl && (rsl = JSON.parse(rsl)), !xhr.getResponseHeader || !xhr.getResponseHeader("X-Error") || (self.orignError ? self.orignError.call(self, rsl, state, xhr) : (u.showMessageDialog ? u.showMessageDialog({
            type: "info",
            title: "提示",
            msg: rsl.message,
            backdrop: !0
        }) : alert(rsl.message), rsl.operate && eval(rsl.operate)), !1);
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function _updateDom(key, vos) {
        for (var i in vos) {
            var vo = vos[i];
            for (var key in vo) {
                var props = vo[key];
                if ("trigger" == key) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_event__.a)(key, props[0]); else if (u.isArray(props)) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_util__.a)(props, function(i, n) {
                    key[i](n);
                }); else try {
                    key[i](vo);
                } catch (error) {
                    key[i](vo[i]);
                }
            }
        }
    }
    var __WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_util__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_event__ = __webpack_require__(9), __WEBPACK_IMPORTED_MODULE_2_tinper_sparrow_src_env__ = __webpack_require__(0);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return setCompression;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return addParameter;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return setEvent;
    }), __webpack_require__.d(__webpack_exports__, "d", function() {
        return getData;
    }), __webpack_require__.d(__webpack_exports__, "e", function() {
        return updateDom;
    });
    var setCompression = function(compression) {
        __WEBPACK_IMPORTED_MODULE_2_tinper_sparrow_src_env__.a.isIE8 || window.pako || 1 != compression ? this.compression = compression : alert("can't compression, please include  pako!");
    }, addParameter = function(key, value) {
        return this.params[key] = value, this;
    }, setEvent = function(event) {
        return this.event = _formatEvent(event), this;
    }, _formatEvent = function(event) {
        return event;
    }, getData = function() {
        var envJson = ko.utils.stringifyJson(this.app.getEnvironment()), datasJson = ko.utils.stringifyJson(this.datas, function(key, value) {
            return void 0 === value || null == value ? "" : value;
        }), compressType = "", compression = !1;
        return window.trimServerEventData && (datasJson = window.trimServerEventData(datasJson)), 
        this.compression && !__WEBPACK_IMPORTED_MODULE_2_tinper_sparrow_src_env__.a.isIE8 && window.pako && (envJson = encodeBase64(window.pako.gzip(envJson)), 
        datasJson = encodeBase64(window.pako.gzip(datasJson)), compression = !0, compressType = "gzip"), 
        {
            environment: envJson,
            dataTables: datasJson,
            compression: compression,
            compressType: compressType
        };
    }, updateDom = function() {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_util__.a)(dom, function(i, n) {
            var vo = n.two;
            _updateDom(n.one, vo);
        });
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(0);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ajax;
    });
    var XmlHttp = {
        get: "get",
        post: "post",
        reqCount: 4,
        createXhr: function() {
            var xmlhttp = null;
            return __WEBPACK_IMPORTED_MODULE_0__env__.a.isIE8 ? xmlhttp = new ActiveXObject("Microsoft.XMLHTTP") : __WEBPACK_IMPORTED_MODULE_0__env__.a.isIE ? xmlhttp = new ActiveXObject("Msxml2.XMLHTTP") : window.XMLHttpRequest && (xmlhttp = new XMLHttpRequest()), 
            xmlhttp;
        },
        ajax: function(_json) {
            var url = _json.url, callback = _json.success, async = void 0 == _json.async || _json.async, error = _json.error, params = _json.data || {}, method = (void 0 == _json.type ? XmlHttp.post : _json.type).toLowerCase();
            params.compressType;
            url = XmlHttp.serializeUrl(url), params = XmlHttp.serializeParams(params), method == XmlHttp.get && null != params && (url += "&" + params, 
            params = null);
            var xmlhttp = XmlHttp.createXhr();
            xmlhttp.open(method, url, async), method == XmlHttp.post && xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            var execount = 0;
            async ? (xmlhttp.onreadystatechange = function() {
                execount++, xmlhttp.readyState == XmlHttp.reqCount && XmlHttp.execBack(xmlhttp, callback, error);
            }, xmlhttp.send(params)) : (xmlhttp.send(params), XmlHttp.execBack(xmlhttp, callback, error));
        },
        execBack: function(xmlhttp, callback, error) {
            if (200 == xmlhttp.status || 304 == xmlhttp.status || 4 == xmlhttp.readyState) callback(xmlhttp.responseText, xmlhttp.status, xmlhttp); else if (error) error(xmlhttp.responseText, xmlhttp.status, xmlhttp); else {
                var errorMsg = "no error callback function!";
                xmlhttp.responseText && (errorMsg = xmlhttp.responseText), alert(errorMsg);
            }
        },
        serializeUrl: function(url) {
            var cache = "cache=" + Math.random();
            return url += url.indexOf("?") > 0 ? "&" + cache : "?" + cache;
        },
        serializeParams: function(params) {
            if (void 0 == params || null == params || "" == params) return null;
            if (params.constructor == Object) {
                var result = "";
                for (var p in params) result += p + "=" + encodeURIComponent(params[p]) + "&";
                return result.substring(0, result.length - 1);
            }
            return params;
        }
    }, ajax = XmlHttp.ajax;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return enumerables;
    });
    var enumerables = !0, enumerablesTest = {
        toString: 1
    };
    Object.prototype.toString;
    for (var i in enumerablesTest) enumerables = null;
    enumerables && (enumerables = [ "hasOwnProperty", "valueOf", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "constructor" ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(0);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return trigger;
    });
    var u = {};
    u.event = {};
    var touchStartEvent = __WEBPACK_IMPORTED_MODULE_0__env__.a.hasTouch ? "touchstart" : "mousedown", touchStopEvent = __WEBPACK_IMPORTED_MODULE_0__env__.a.hasTouch ? "touchend" : "mouseup", touchMoveEvent = __WEBPACK_IMPORTED_MODULE_0__env__.a.hasTouch ? "touchmove" : "mousemove";
    u.event.tap = {
        tapholdThreshold: 750,
        emitTapOnTaphold: !0,
        touchstartFun: function() {
            trigger(this, "vmousedown");
        },
        touchendFun: function() {
            trigger(this, "vmouseup"), trigger(this, "vclick");
        },
        setup: function() {
            var thisObject = this, isTaphold = !1;
            on(thisObject, "vmousedown", function(event) {
                function clearTapTimer() {
                    clearTimeout(timer);
                }
                function clearTapHandlers() {
                    clearTapTimer(), off(thisObject, "vclick"), off(thisObject, "vmouseup"), off(document, "vmousecancel");
                }
                function clickHandler(event) {
                    clearTapHandlers(), isTaphold || origTarget !== event.target ? isTaphold && event.preventDefault() : trigger(thisObject, "tap");
                }
                if (isTaphold = !1, event.which && 1 !== event.which) return !1;
                var timer, origTarget = event.target;
                on(thisObject, "vmouseup", clearTapTimer), on(thisObject, "vclick", clickHandler), 
                on(document, "vmousecancel", clearTapHandlers), timer = setTimeout(function() {
                    u.event.tap.emitTapOnTaphold || (isTaphold = !0), trigger(thisObject, "taphold"), 
                    clearTapHandlers();
                }, u.event.tap.tapholdThreshold);
            }), on(thisObject, "touchstart", u.event.tap.touchstartFun), on(thisObject, "touchend", u.event.tap.touchendFun);
        },
        teardown: function() {
            off(thisObject, "vmousedown"), off(thisObject, "vclick"), off(thisObject, "vmouseup"), 
            off(document, "vmousecancel");
        }
    }, u.event.taphold = u.event.tap, u.event.swipe = {
        scrollSupressionThreshold: 30,
        durationThreshold: 1e3,
        horizontalDistanceThreshold: 30,
        verticalDistanceThreshold: 30,
        getLocation: function(event) {
            var winPageX = window.pageXOffset, winPageY = window.pageYOffset, x = event.clientX, y = event.clientY;
            return 0 === event.pageY && Math.floor(y) > Math.floor(event.pageY) || 0 === event.pageX && Math.floor(x) > Math.floor(event.pageX) ? (x -= winPageX, 
            y -= winPageY) : (y < event.pageY - winPageY || x < event.pageX - winPageX) && (x = event.pageX - winPageX, 
            y = event.pageY - winPageY), {
                x: x,
                y: y
            };
        },
        start: function(event) {
            var data = event.touches ? event.touches[0] : event, location = u.event.swipe.getLocation(data);
            return {
                time: new Date().getTime(),
                coords: [ location.x, location.y ],
                origin: event.target
            };
        },
        stop: function(event) {
            var data = event.touches ? event.touches[0] : event, location = u.event.swipe.getLocation(data);
            return {
                time: new Date().getTime(),
                coords: [ location.x, location.y ]
            };
        },
        handleSwipe: function(start, stop, thisObject, origTarget) {
            if (stop.time - start.time < u.event.swipe.durationThreshold && Math.abs(start.coords[0] - stop.coords[0]) > u.event.swipe.horizontalDistanceThreshold && Math.abs(start.coords[1] - stop.coords[1]) < u.event.swipe.verticalDistanceThreshold) {
                var direction = start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight";
                return trigger(thisObject, "swipe"), trigger(thisObject, direction), !0;
            }
            return !1;
        },
        eventInProgress: !1,
        setup: function() {
            var events, thisObject = this, context = {};
            events = thisObject["mobile-events"], events || (events = {
                length: 0
            }, thisObject["mobile-events"] = events), events.length++, events.swipe = context, 
            context.start = function(event) {
                if (!u.event.swipe.eventInProgress) {
                    u.event.swipe.eventInProgress = !0;
                    var stop, start = u.event.swipe.start(event), origTarget = event.target, emitted = !1;
                    context.move = function(event) {
                        start && (stop = u.event.swipe.stop(event), emitted || (emitted = u.event.swipe.handleSwipe(start, stop, thisObject, origTarget)) && (u.event.swipe.eventInProgress = !1), 
                        Math.abs(start.coords[0] - stop.coords[0]) > u.event.swipe.scrollSupressionThreshold && event.preventDefault());
                    }, context.stop = function() {
                        emitted = !0, u.event.swipe.eventInProgress = !1, off(document, touchMoveEvent, context.move), 
                        context.move = null;
                    }, on(document, touchMoveEvent, context.move), on(document, touchStopEvent, context.stop);
                }
            }, on(thisObject, touchStartEvent, context.start);
        },
        teardown: function() {
            var events, context;
            events = thisObject["mobile-events"], events && (context = events.swipe, delete events.swipe, 
            0 === --events.length && (thisObject["mobile-events"] = null)), context && (context.start && off(thisObject, touchStartEvent, context.start), 
            context.move && off(document, touchMoveEvent, context.move), context.stop && off(document, touchStopEvent, context.stop));
        }
    }, u.event.swipeleft = u.event.swipe, u.event.swiperight = u.event.swipe;
    var event = u.event, on = function(element, eventName, child, listener) {
        if (element) {
            if (arguments.length < 4) listener = child, child = void 0; else var childlistener = function(e) {
                if (e) {
                    element.querySelectorAll(child).forEach(function(node) {
                        node == e.target && listener.call(e.target, e);
                    });
                }
            };
            if (element.uEvent || (element.uEvent = {}), element.uEvent[eventName]) {
                var lis = child ? childlistener : listener, hasLis = !1;
                element.uEvent[eventName].forEach(function(fn) {
                    fn == lis && (hasLis = !0);
                }), hasLis || element.uEvent[eventName].push(child ? childlistener : listener);
            } else element.uEvent[eventName] = [ child ? childlistener : listener ], u.event && u.event[eventName] && u.event[eventName].setup && u.event[eventName].setup.call(element), 
            element.uEvent[eventName + "fn"] = function(e) {
                e || (e = void 0 !== event && event ? event : window.event), element.uEvent[eventName].forEach(function(fn) {
                    try {
                        e.target = e.target || e.srcElement;
                    } catch (ee) {}
                    fn && fn.call(element, e);
                });
            }, element.addEventListener ? element.addEventListener(eventName, element.uEvent[eventName + "fn"]) : element.attachEvent ? element.attachEvent("on" + eventName, element.uEvent[eventName + "fn"]) : element["on" + eventName] = element.uEvent[eventName + "fn"];
        }
    }, off = function(element, eventName, listener) {
        if (listener) return void (element && element.uEvent && element.uEvent[eventName] && element.uEvent[eventName].forEach(function(fn, i) {
            fn == listener && element.uEvent[eventName].splice(i, 1);
        }));
        var eventfn;
        element && element.uEvent && element.uEvent[eventName + "fn"] && (eventfn = element.uEvent[eventName + "fn"]), 
        element.removeEventListener ? element.removeEventListener(eventName, eventfn) : element.removeEvent ? element.removeEvent("on" + eventName, eventfn) : delete element["on" + eventName], 
        u.event && u.event[eventName] && u.event[eventName].teardown && u.event[eventName].teardown.call(element), 
        element && element.uEvent && element.uEvent[eventName] && (element.uEvent[eventName] = void 0), 
        element && element.uEvent && element.uEvent[eventName + "fn"] && (element.uEvent[eventName + "fn"] = void 0);
    }, trigger = function(element, eventName) {
        element.uEvent && element.uEvent[eventName] && element.uEvent[eventName + "fn"]();
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0__server_dataTable__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__server_fire__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_2__server_processXHRError__ = __webpack_require__(5), __WEBPACK_IMPORTED_MODULE_3__server_util__ = __webpack_require__(6), ServerEvent = function ServerEvent(app) {
        _classCallCheck(this, ServerEvent), this.app = app, this.datas = {}, this.params = {}, 
        this.event = null, this.ent = u.core.collectEnvironment(), u.debugMode || (this.compression = !0);
    };
    ServerEvent.prototype.addDataTable = __WEBPACK_IMPORTED_MODULE_0__server_dataTable__.a, 
    ServerEvent.prototype.addDataTables = __WEBPACK_IMPORTED_MODULE_0__server_dataTable__.b, 
    ServerEvent.prototype.addAllDataTables = __WEBPACK_IMPORTED_MODULE_0__server_dataTable__.c, 
    ServerEvent.prototype.updateDataTables = __WEBPACK_IMPORTED_MODULE_0__server_dataTable__.d, 
    ServerEvent.prototype.fire = __WEBPACK_IMPORTED_MODULE_1__server_fire__.a, ServerEvent.prototype.setSuccessFunc = __WEBPACK_IMPORTED_MODULE_1__server_fire__.b, 
    ServerEvent.prototype._successFunc = __WEBPACK_IMPORTED_MODULE_1__server_fire__.c, 
    ServerEvent.prototype.processXHRError = __WEBPACK_IMPORTED_MODULE_2__server_processXHRError__.a, 
    ServerEvent.prototype.setCompression = __WEBPACK_IMPORTED_MODULE_3__server_util__.a, 
    ServerEvent.prototype.addParameter = __WEBPACK_IMPORTED_MODULE_3__server_util__.b, 
    ServerEvent.prototype.setEvent = __WEBPACK_IMPORTED_MODULE_3__server_util__.c, ServerEvent.prototype.getData = __WEBPACK_IMPORTED_MODULE_3__server_util__.d, 
    ServerEvent.prototype.updateDom = __WEBPACK_IMPORTED_MODULE_3__server_util__.e, 
    ServerEvent.DEFAULT = {
        async: !0,
        singleton: !0,
        url: (window.$ctx || "/iwebap") + "/evt/dispatch"
    }, window.ServerEvent = ServerEvent;
} ]);