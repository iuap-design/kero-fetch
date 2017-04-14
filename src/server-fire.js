/**
 * Module : kero app serverEvent fire
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-07-29 09:34:01
 */
import {extend} from 'tinper-sparrow/src/extend';
import {ajax} from 'tinper-sparrow/src/ajax';

/**
 * 前端缓存:前端会存储所有页的数据信息
 * fire方法发出去的参数模型
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
 * fire方法返回的数据模型
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
 * @memberof ServerEvent
 * @param  {object} p 请求的json参数字段，必须包含url
 * @param  {string} p.url 请求地址
 * @param  {string} [p.type] 请求类型
 * @param  {string} [p.success] 请求成功回调方法
 * @param  {string} [p.error] 请求失败回调方法
 * @example
 * app.serverEvent().addDataTable('dataTableid').fire({
 *  type:"get",
 *  url:"..../list",
 *  success:function(data){
 *  },
 *  error:function(data){
 *  }
 * })
 */
const fire = function (p) {
    var self = this
    var data = this.getData();
    data.parameters = ko.utils.stringifyJson(this.params)
    var params = {
        type: p.type || "POST",
        data: p.params || {},
        url: p.url || ServerEvent.DEFAULT.url,
        async: typeof p.async == 'undefined' ? ServerEvent.DEFAULT.async : p.async,
        singleton: p.singleton || ServerEvent.DEFAULT.singleton,
        success: p.success,
        error: p.error,
        dataType: 'json'
    }
    params.data.ctrl = p.ctrl
    params.data.method = p.method
    if (this.event)
        params.data.event = ko.utils.stringifyJson(this.event)
    var preSuccess = p.preSuccess || function () {
        }
    var orignSuccess = p.success || function () {
        }
    var orignError = params.error //|| function(){}
    this.orignError = orignError
    var deferred = params.deferred;
    if (!deferred || !deferred.resolve) {
        deferred = {
            resolve: function () {
            }, reject: function () {
            }
        }
    }
    params.success = function (data, state, xhr) {
        if (typeof data === 'string')
            data = JSON.parse(data)
        if (self.processXHRError(self, data, state, xhr)) {
            preSuccess.call(null, data)
            self._successFunc(data, deferred)
            orignSuccess.call(null, data.custom)
            deferred.resolve();
        } else {
            deferred.reject();
        }
    }
    params.error = function (data, state, xhr) {
        if (typeof data === 'string')
            data = JSON.parse(data)
        if (self.processXHRError(self, data, state, xhr)) {
            if (orignError)
                orignError.call(null, data.custom)
//				self._successFunc(data, deferred)
        } else {
            deferred.reject();
        }
    }
    params.data = extend(params.data, data);
    if($)
        $.ajax(params)
    else
        ajax(params)
}

//数据请求成功后的回调方法实现
//deferred对象是从jQuery 1.5.0版本开始引入的
//deferred对象有三种执行状态----未完成，已完成和已失败
//deferred.resolve()，将deferred对象的执行状态从"未完成"改为"已完成"，从而触发success()方法。
//deferred.reject()，将deferred对象的执行状态从"未完成"改为"已失败"，从而触发error()方法。
const _successFunc = function (data, deferred) {
    if (typeof data === 'string')
        data = JSON.parse(data)
    var dataTables = data.dataTables
    var dom = data.dom
    if (dom)
        this.updateDom(JSON.parse(dom))
    if (dataTables)
        this.updateDataTables(dataTables, deferred)
}



//设置成功回调方法
const setSuccessFunc = function (func) {
    this._successFunc = func
}

export {
	fire,
    _successFunc,
	setSuccessFunc
}
