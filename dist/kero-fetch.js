/**
 * kero-fetch v3.2.2
 * kero-fetch - 基于 Promise 实现的 http 库
 * author :
 * homepage : https://github.com/iuap-design/kero-fetch#readme
 * bugs : https://github.com/iuap-design/kero-fetch/issues
 */

(function () {
'use strict';

/**
 * Module : Sparrow util tools
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

/**
 * 创建一个带壳的对象,防止外部修改
 * @param {Object} proto
 */
var isArray = Array.isArray || function(val) {
	return Object.prototype.toString.call(val) === '[object Array]';
};
var each = function(obj, callback) {
	if(obj.forEach) {
		obj.forEach(function(v, k) {
			callback(k, v);
		});

	} else if(obj instanceof Object) {
		for(var k in obj) {
			callback(k, obj[k]);
		}
	} else {
		return;
	}

};
try{
	NodeList.prototype.forEach = Array.prototype.forEach;
}catch(e){
	
}


/**
 * 获得字符串的字节长度
 */
String.prototype.lengthb = function() {
	//	var str = this.replace(/[^\x800-\x10000]/g, "***");
	var str = this.replace(/[^\x00-\xff]/g, "**");
	return str.length;
};

/**
 * 将AFindText全部替换为ARepText
 */
String.prototype.replaceAll = function(AFindText, ARepText) {
	//自定义String对象的方法
	var raRegExp = new RegExp(AFindText, "g");
	return this.replace(raRegExp, ARepText);
};

/**
 * Module : kero app serverEvent dataTable
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-07-29 09:34:01
 */
/**
 * 增加一个datatable
 * @memberof ServerEvent
 * @param  {number} dataTableId dataTable的id：唯一标示
 * @param  {string} rule
 * all：所有数据；
 * current：当前行数据；
 * focus：焦点行数据；
 * select：选中行数据；
 * change：发生改变的数据；
 * @example
 * app.serverEvent().addDataTable('datatableid','all')
 */
var addDataTable = function addDataTable(dataTableId, rule) {
    var dataTable = this.app.getDataTable(dataTableId);
    this.datas[dataTableId] = dataTable.getDataByRule(rule);
    return this;
};

/**
 * 增加多个datatable
 * @memberof ServerEvent
 * @param  {array} dataTables dataTable的数组
 * @param  {string} rule
 * all：所有数据；
 * current：当前行数据；
 * focus：焦点行数据；
 * select：选中行数据；
 * change：发生改变的数据；
 * @example
 * app.serverEvent().addDataTables([datatableId,datatableId1,datatableId2],'all')
 */
var addDataTables = function addDataTables(dataTables, rule) {
    if (arguments.length == 2) {
        for (var i = 0; i < dataTables.length; i++) {
            var rule;
            if (typeof arguments[1] == 'string') {
                rule = arguments[1];
            } else if (isArray(arguments[1])) {
                rule = arguments[1][i];
            }
            this.addDataTable(dataTables[i], rule);
        }
    } else {
        for (var i = 0; i < dataTables.length; i++) {
            var dt = dataTables[i];
            if (typeof dt == 'string') this.addDataTable(dt);else {
                for (var key in dt) {
                    this.addDataTable(key, dt[key]);
                }
            }
        }
    }
    return this;
};

/**
 * 将rule对着匹配的datatable列表全部加入进来
 * @memberof ServerEvent
 * @param  {string} rule
 * all：所有数据；
 * current：当前行数据；
 * focus：焦点行数据；
 * select：选中行数据；
 * change：发生改变的数据；
 * @example
 * app.serverEvent().addAllDataTables('all')
 */
var addAllDataTables = function addAllDataTables(rule) {
    var dts = this.app.dataTables;
    for (var i = 0; i < dts.length; i++) {
        this.addDataTable(dts[i].id, rule);
    }
};

//将datable的列表更新
var updateDataTables = function updateDataTables(dataTables) {
    for (var key in dataTables) {
        var dt = this.app.getDataTable(key);
        if (dt) {
            dt.setData(dataTables[key]);
            dt.updateMeta(dataTables[key].meta);
        }
    }
};

/**
 * Module : Sparrow extend enum
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

var enumerables = true;
var enumerablesTest = {
		toString: 1
	};
for(var i in enumerablesTest) {
	enumerables = null;
}
if(enumerables) {
	enumerables = ['hasOwnProperty', 'valueOf', 'isPrototypeOf', 'propertyIsEnumerable',
		'toLocaleString', 'toString', 'constructor'
	];
}

/**
 * Module : Sparrow extend
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

/**
 * 复制对象属性
 *
 * @param {Object}  目标对象
 * @param {config} 源对象
 */
var extend = function(object, config) {
	var args = arguments,
		options;
	if(args.length > 1) {
		for(var len = 1; len < args.length; len++) {
			options = args[len];
			if(object && options && typeof options === 'object') {
				var i, j, k;
				for(i in options) {
					object[i] = options[i];
				}
				if(enumerables) {
					for(j = enumerables.length; j--;) {
						k = enumerables[j];
						if(options.hasOwnProperty && options.hasOwnProperty(k)) {
							object[k] = options[k];
						}
					}
				}
			}
		}
	}
	return object;
};

if(!Object.assign){
	Object.assign = extend;
}

/**
 * Module : Sparrow browser environment
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-27 21:46:50
 */

var u$1 = {};


extend(u$1, {
	isIE:  false,
	isFF: false,
	isOpera: false,
	isChrome: false,
	isSafari: false,
	isWebkit: false,
	isIE8_BEFORE: false,
	isIE8: false,
	isIE8_CORE: false,
	isIE9: false,
	isIE9_CORE: false,
	isIE10: false,
	isIE10_ABOVE: false,
	isIE11: false,
	isEdge: false,
	isIOS: false,
	isIphone: false,
	isIPAD: false,
	isStandard: false,
	version: 0,
	isWin: false,
	isUnix: false,
	isLinux: false,
	isAndroid: false,
	isAndroidPAD:false,
	isAndroidPhone:false,
	isMac: false,
	hasTouch: false,
	isMobile: false
});

(function() {
	var userAgent = navigator.userAgent,
		rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
		rFirefox = /(firefox)\/([\w.]+)/,
		rOpera = /(opera).+version\/([\w.]+)/,
		rChrome = /(chrome)\/([\w.]+)/,
		rSafari = /version\/([\w.]+).*(safari)/,
		version,
		ua = userAgent.toLowerCase(),
		s,
		browserMatch = {
			browser: "",
			version: ''
		},
		match = rMsie.exec(ua);

	if(match != null) {
		browserMatch = {
			browser: "IE",
			version: match[2] || "0"
		};
	}
	match = rFirefox.exec(ua);
	if(match != null) {
		browserMatch = {
			browser: match[1] || "",
			version: match[2] || "0"
		};
	}
	match = rOpera.exec(ua);
	if(match != null) {
		browserMatch = {
			browser: match[1] || "",
			version: match[2] || "0"
		};
	}
	match = rChrome.exec(ua);
	if(match != null) {
		browserMatch = {
			browser: match[1] || "",
			version: match[2] || "0"
		};
	}
	match = rSafari.exec(ua);
	if(match != null) {
		browserMatch = {
			browser: match[2] || "",
			version: match[1] || "0"
		};
	}

	if(userAgent.indexOf("Edge") > -1){
		u$1.isEdge = true;
	}
	if(s = ua.match(/opera.([\d.]+)/)) {
		u$1.isOpera = true;
	} else if(browserMatch.browser == "IE" && browserMatch.version == 11) {
		u$1.isIE11 = true;
		u$1.isIE = true;
	} else if(s = ua.match(/chrome\/([\d.]+)/)) {
		u$1.isChrome = true;
		u$1.isStandard = true;
	} else if(s = ua.match(/version\/([\d.]+).*safari/)) {
		u$1.isSafari = true;
		u$1.isStandard = true;
	} else if(s = ua.match(/gecko/)) {
		//add by licza : support XULRunner
		u$1.isFF = true;
		u$1.isStandard = true;
	} else if(s = ua.match(/msie ([\d.]+)/)) {
		u$1.isIE = true;
	} else if(s = ua.match(/firefox\/([\d.]+)/)) {
		u$1.isFF = true;
		u$1.isStandard = true;
	}
	if(ua.match(/webkit\/([\d.]+)/)) {
		u$1.isWebkit = true;
	}
	if(ua.match(/ipad/i)) {
		u$1.isIOS = true;
		u$1.isIPAD = true;
		u$1.isStandard = true;
	}

	if(ua.match(/iphone/i)) {
		u$1.isIOS = true;
		u$1.isIphone = true;
	}

	if((navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel")) {
		//u.isIOS = true;
		u$1.isMac = true;
	}

	if((navigator.platform == "Win32") || (navigator.platform == "Windows") || (navigator.platform == "Win64")) {
		u$1.isWin = true;
	}

	if((navigator.platform == "X11") && !u$1.isWin && !u$1.isMac) {
		u$1.isUnix = true;
	}
	if((String(navigator.platform).indexOf("Linux") > -1)) {
		u$1.isLinux = true;
	}

	if(ua.indexOf('Android') > -1 || ua.indexOf('android') > -1 || ua.indexOf('Adr') > -1 || ua.indexOf('adr') > -1) {
		u$1.isAndroid = true;
	}

	u$1.version = version ? (browserMatch.version ? browserMatch.version : 0) : 0;
	if(u$1.isAndroid){
		if(window.screen.width>=768&&window.screen.width<1024){
			u$1.isAndroidPAD=true;
		}
		if(window.screen.width<=768) {
			u$1.isAndroidPhone = true;
		}
	}
	if(u$1.isIE) {
		var intVersion = parseInt(u$1.version);
		var mode = document.documentMode;
		if(mode == null) {
			if(intVersion == 6 || intVersion == 7) {
				u$1.isIE8_BEFORE = true;
			}
		} else {
			if(mode == 7) {
				u$1.isIE8_BEFORE = true;
			} else if(mode == 8) {
				u$1.isIE8 = true;
			} else if(mode == 9) {
				u$1.isIE9 = true;
				u$1.isSTANDARD = true;
			} else if(mode == 10) {
				u$1.isIE10 = true;
				u$1.isSTANDARD = true;
				u$1.isIE10_ABOVE = true;
			} else {
				u$1.isSTANDARD = true;
			}
			if(intVersion == 8) {
				u$1.isIE8_CORE = true;
			} else if(intVersion == 9) {
				u$1.isIE9_CORE = true;
			} else if(browserMatch.version == 11) {
				u$1.isIE11 = true;
			}
		}
	}
	if("ontouchend" in document) {
		u$1.hasTouch = true;
	}
	if(u$1.isIphone || u$1.isAndroidPhone)
		u$1.isMobile = true;

})();

var env = u$1;

/**
 * Module : Sparrow ajax
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 19:06:36
 */

var XmlHttp = {
	get: "get",
	post: "post",
	reqCount: 4,
	createXhr: function() {
		var xmlhttp = null;
		/*if (window.XMLHttpRequest) {
		  xmlhttp = new XMLHttpRequest();
		} else {
		  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}*/
		if(env.isIE8) {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //IE低版本创建XMLHTTP
		} else if(env.isIE) {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); //IE高版本创建XMLHTTP
		} else if(window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}
		return xmlhttp;
	},
	ajax: function(_json) {
		var url = _json["url"];
		var callback = _json["success"];
		var async = (_json["async"] == undefined ? true : _json["async"]);
		var error = _json["error"];
		var params = _json["data"] || {};
		var method = (_json["type"] == undefined ? XmlHttp.post : _json["type"]).toLowerCase();
		var gzipFlag = params.compressType;
		url = XmlHttp.serializeUrl(url);
		params = XmlHttp.serializeParams(params);
		if(method == XmlHttp.get && params != null) {
			url += ("&" + params);
			params = null; //如果是get请求,保证最终会执行send(null)
		}

		var xmlhttp = XmlHttp.createXhr();
		//xmlhttp.open(method, url+ escape(new Date()), async);
		xmlhttp.open(method, url, async);

		if(method == XmlHttp.post) {
			xmlhttp.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded;charset=UTF-8");
		}

		var execount = 0;
		// 异步
		if(async) {
			// readyState 从 1~4发生4次变化
			xmlhttp.onreadystatechange = function() {
				execount++;
				// 等待readyState状态不再变化之后,再执行回调函数
				//if (execount == XmlHttp.reqCount) {// 火狐下存在问题，修改判断方式
				if(xmlhttp.readyState == XmlHttp.reqCount) {
					XmlHttp.execBack(xmlhttp, callback, error);
				}
			};
			// send方法要在在回调函数之后执行
			xmlhttp.send(params);
		} else {
			// 同步 readyState 直接变为 4
			// 并且 send 方法要在回调函数之前执行
			xmlhttp.send(params);
			XmlHttp.execBack(xmlhttp, callback, error);
		}
	},
	execBack: function(xmlhttp, callback, error) {
		//if (xmlhttp.readyState == 4
		if(xmlhttp.status == 200 || xmlhttp.status == 304 || xmlhttp.readyState == 4) {
			callback(xmlhttp.responseText, xmlhttp.status, xmlhttp);
		} else {
			if(error) {
				error(xmlhttp.responseText, xmlhttp.status, xmlhttp);
			} else {
				var errorMsg = "no error callback function!";
				if(xmlhttp.responseText) {
					errorMsg = xmlhttp.responseText;
				}
				alert(errorMsg);
				// throw errorMsg;
			}
		}
	},
	serializeUrl: function(url) {
		var cache = "cache=" + Math.random();
		if(url.indexOf("?") > 0) {
			url += ("&" + cache);
		} else {
			url += ("?" + cache);
		}
		return url;
	},
	serializeParams: function(params) {
		var ud = undefined;
		if(ud == params || params == null || params == "") {
			return null;
		}
		if(params.constructor == Object) {
			var result = "";
			for(var p in params) {
				result += (p + "=" + encodeURIComponent(params[p]) + "&");
			}
			return result.substring(0, result.length - 1);
		}
		return params;
	}
};


var ajax = XmlHttp.ajax;

/**
 * Module : kero app serverEvent fire
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-07-29 09:34:01
 */
/**
 * 前端缓存:前端会存储所有页的数据信息
 * @memberof ServerEvent
 * @param  {object} p 请求的json参数字段，必须包含url
 * @param  {string} p.url 请求地址
 * @param  {string} [p.type] 请求类型
 * @param  {string} [p.success] 请求成功回调方法
 * @param  {string} [p.error] 请求失败回调方法
 * @example <caption>fire方法的使用示例</caption>
 * app.serverEvent().addDataTable('dataTableid').fire({
 *  type:"get",
 *  url:"..../list",
 *  success:function(data){
 *  },
 *  error:function(data){
 *  }
 * })
 * @example <caption>fire方法传递给后台的数据示例</caption>
 * {
     "environment": {
         "clientAttributes": {}
     },
     "dataTables": {
         "dictTypeDa": {
             "meta": {
                 ...
             },
             "params": {
                 "cls": "com.yonyou.iuap.example.entity.mybatis.SysDictType",
                 "search_dicttypecode": "",
                 "search_dicttypename": ""
             },
             "pages": [{
                 "index": 0,
                 "select": [],
                 "focus": -1,
                 "rows": []
             }],
             "pageSize": 5,
             "pageIndex": 0,
             "isChanged": false,
             "master": "",
             "pageCache": true
         }
     },
     "compression": false,
     "compressType": "",
     "parameters": {}
 * }
 * @example <caption>fire方法后台返回的数据示例</caption>
 * {
     "dataTables": {
         "dictTypeDa": {
             "pageSize": 5,
             "pageIndex": 0,
             "totalPages": 5,
             "totalRow": 25,
             "pages": [{
                 "index": 0,
                 "select": [],
                 "current": -1,
                 "rows": [{
                     "id": "r22901",
                     "status": "nrm",
                     "data": {
                         ...
                     }
                 }...]
             }],
             "meta": null
         }
     },
     "comps": "",
     "custom": "",
     "contentType": ""
 * }
 */
var fire = function fire(p) {
    var self = this;
    var data = this.getData();
    data.parameters = ko.utils.stringifyJson(this.params);
    var params = {
        type: p.type || "POST",
        data: p.params || {},
        url: p.url || ServerEvent.DEFAULT.url,
        async: typeof p.async == 'undefined' ? ServerEvent.DEFAULT.async : p.async,
        singleton: p.singleton || ServerEvent.DEFAULT.singleton,
        success: p.success,
        error: p.error,
        dataType: 'json'
    };
    params.data.ctrl = p.ctrl;
    params.data.method = p.method;
    if (this.event) params.data.event = ko.utils.stringifyJson(this.event);
    var preSuccess = p.preSuccess || function () {};
    var orignSuccess = p.success || function () {};
    var orignError = params.error; //|| function(){}
    this.orignError = orignError;
    var deferred = params.deferred;
    if (!deferred || !deferred.resolve) {
        deferred = {
            resolve: function resolve() {}, reject: function reject() {}
        };
    }
    params.success = function (data, state, xhr) {
        if (typeof data === 'string') data = JSON.parse(data);
        if (self.processXHRError(self, data, state, xhr)) {
            preSuccess.call(null, data);
            self._successFunc(data, deferred);
            orignSuccess.call(null, data.custom);
            deferred.resolve();
        } else {
            deferred.reject();
        }
    };
    params.error = function (data, state, xhr) {
        if (typeof data === 'string') data = JSON.parse(data);
        if (self.processXHRError(self, data, state, xhr)) {
            if (orignError) orignError.call(null, data.custom);
            //				self._successFunc(data, deferred)
        } else {
            deferred.reject();
        }
    };
    params.data = extend(params.data, data);
    if ($) $.ajax(params);else ajax(params);
};

//数据请求成功后的回调方法实现
//deferred对象是从jQuery 1.5.0版本开始引入的
//deferred对象有三种执行状态----未完成，已完成和已失败
//deferred.resolve()，将deferred对象的执行状态从"未完成"改为"已完成"，从而触发success()方法。
//deferred.reject()，将deferred对象的执行状态从"未完成"改为"已失败"，从而触发error()方法。
var _successFunc = function _successFunc(data, deferred) {
    if (typeof data === 'string') data = JSON.parse(data);
    var dataTables = data.dataTables;
    var dom = data.dom;
    if (dom) this.updateDom(JSON.parse(dom));
    if (dataTables) this.updateDataTables(dataTables, deferred);
};

//设置成功回调方法
var setSuccessFunc = function setSuccessFunc(func) {
    this._successFunc = func;
};

/**
 * Module : kero app serverEvent processXHRError
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-07-29 09:34:01
 */

/****
 * 通过去判断请求头来验证请求是否成功
 * @memberof ServerEvent
 * @param  {object} self  ServerEvent的this对象
 * @param  {object} rsl   请求返回的数据
 * @param  {object} state 描述状态的字符串
 * @param  {object} xhr   jqXHR对象
 */
var processXHRError = function processXHRError(self, rsl, state, xhr) {
    if (typeof rsl === 'string') rsl = JSON.parse(rsl);
    if (xhr.getResponseHeader && xhr.getResponseHeader("X-Error")) {
        if (self.orignError) self.orignError.call(self, rsl, state, xhr);else {
            if (u.showMessageDialog) u.showMessageDialog({ type: "info", title: "提示", msg: rsl["message"], backdrop: true });else alert(rsl["message"]);
            if (rsl["operate"]) {
                eval(rsl["operate"]);
            }
        }
        return false;
    }
    return true;
};

/**
 * Module : Sparrow touch event
 * Author : Kvkens(yueming@yonyou.com)
 * Date	  : 2016-07-28 14:41:17
 */

var trigger = function(element, eventName) {
	if(element["uEvent"] && element["uEvent"][eventName]) {
		element["uEvent"][eventName + 'fn']();
	}
};

/**
 * Module : kero app serverEvent util
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-07-29 09:34:01
 */
/**
 * 设置数据是否压缩，fire方法默认是false
 * @memberof ServerEvent
 * @param  {boolean} compression 是否压缩的参数值
 * @example
 * app.serverEvent().setCompression(true)
 */
var setCompression = function setCompression(compression) {
    if (!env.isIE8 && !window.pako && compression == true) alert("can't compression, please include  pako!");else this.compression = compression;
};

/**
 * 为fire方法添加请求参数
 * @memberof ServerEvent
 * @param  {string} key   参数key
 * @param  {string} value 参数value
 * @example
 * app.serverEvent().addParameter('key', 'value')
 */
var addParameter = function addParameter(key, value) {
    this.params[key] = value;
    return this;
};

/**
 * 为fire的ajax请求参数中设置事件参数,设置到params.data.event上面
 * @memberof ServerEvent
 * @param  {string} event 事件
 * @example
 * app.serverEvent().setEvent(function(){
 *  ...
 * })
 */
var setEvent = function setEvent(event) {
    this.event = _formatEvent(event);
    return this;
};

//转换事件
var _formatEvent = function _formatEvent(event) {
    return event;
};

//获取会话等参数数据，并将参数传递到fire参数中
var getData = function getData() {
    var envJson = ko.utils.stringifyJson(this.app.getEnvironment()),
        datasJson = ko.utils.stringifyJson(this.datas, function replacer(key, value) {
        if (typeof value === "undefined" || value == null) {
            return '';
        }
        return value;
    }),
        compressType = '',
        compression = false;
    if (window.trimServerEventData) {
        datasJson = window.trimServerEventData(datasJson);
    }
    if (this.compression) {
        if (!env.isIE8 && window.pako) {
            envJson = encodeBase64(window.pako.gzip(envJson));
            datasJson = encodeBase64(window.pako.gzip(datasJson));
            compression = true;
            compressType = 'gzip';
        }
    }
    return {
        environment: envJson,
        dataTables: datasJson,
        compression: compression,
        compressType: compressType
    };
};

//iuap_quickstart项目中没有，不太清楚该功能
var updateDom = function updateDom() {
    each(dom, function (i, n) {
        var vo = n.two;
        var key = n.one;
        _updateDom(key, vo);
    });
};

//TODO 去除jQuery后有问题待修改
//iuap_quickstart项目中没有，不太清楚该功能
function _updateDom(key, vos) {
    for (var i in vos) {
        var vo = vos[i];
        for (var key in vo) {
            var props = vo[key];
            if (key == 'trigger') {
                trigger(key, props[0]);
            } else {
                if (u.isArray(props)) {
                    each(props, function (i, n) {
                        key[i](n);
                    });
                } else try {
                    key[i](vo);
                } catch (error) {
                    key[i](vo[i]);
                }
            }
        }
    }
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/**
 * Module : Kero webpack entry serverEvnet index
 * Author : liuyk(liuyuekai@yonyou.com)
 * Date   : 2016-08-09 15:24:46
 */

//相关依赖导入
/**
 * ServerEvent
 * @namespace
 * @description 前端请求事件
 */

var ServerEvent$1 = function ServerEvent(app) {
    classCallCheck(this, ServerEvent);


    this.app = app;
    this.datas = {};
    this.params = {};
    this.event = null;
    this.ent = u.core.collectEnvironment();
    if (!u.debugMode) {
        //此处需要修改
        this.compression = true;
    }
};

// dataTable


ServerEvent$1.prototype.addDataTable = addDataTable;
ServerEvent$1.prototype.addDataTables = addDataTables;
ServerEvent$1.prototype.addAllDataTables = addAllDataTables;
ServerEvent$1.prototype.updateDataTables = updateDataTables;

// fire
ServerEvent$1.prototype.fire = fire;
ServerEvent$1.prototype.setSuccessFunc = setSuccessFunc;
ServerEvent$1.prototype._successFunc = _successFunc;

// processXHRError
ServerEvent$1.prototype.processXHRError = processXHRError;

//util
ServerEvent$1.prototype.setCompression = setCompression;
ServerEvent$1.prototype.addParameter = addParameter;
ServerEvent$1.prototype.setEvent = setEvent;
ServerEvent$1.prototype.getData = getData;
ServerEvent$1.prototype.updateDom = updateDom;

ServerEvent$1.DEFAULT = {
    async: true,
    singleton: true,
    url: (window.$ctx || '/iwebap') + '/evt/dispatch'
};

window.ServerEvent = ServerEvent$1;

}());
