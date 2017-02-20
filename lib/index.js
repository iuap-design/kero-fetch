'use strict';

var _serverDataTable = require('./server-dataTable');

var _serverFire = require('./server-fire');

var _serverProcessXHRError = require('./server-processXHRError');

var _serverUtil = require('./server-util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Module : Kero webpack entry serverEvnet index
                                                                                                                                                           * Author : liuyk(liuyuekai@yonyou.com)
                                                                                                                                                           * Date   : 2016-08-09 15:24:46
                                                                                                                                                           */

//相关依赖导入


var ServerEvent = function ServerEvent(app) {
    _classCallCheck(this, ServerEvent);

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


ServerEvent.prototype.addDataTable = _serverDataTable.addDataTable;
ServerEvent.prototype.addDataTables = _serverDataTable.addDataTables;
ServerEvent.prototype.addAllDataTables = _serverDataTable.addAllDataTables;
ServerEvent.prototype.updateDataTables = _serverDataTable.updateDataTables;

// fire
ServerEvent.prototype.fire = _serverFire.fire;
ServerEvent.prototype.setSuccessFunc = _serverFire.setSuccessFunc;
ServerEvent.prototype._successFunc = _serverFire._successFunc;

// processXHRError
ServerEvent.prototype.processXHRError = _serverProcessXHRError.processXHRError;

//util
ServerEvent.prototype.setCompression = _serverUtil.setCompression;
ServerEvent.prototype.addParameter = _serverUtil.addParameter;
ServerEvent.prototype.setEvent = _serverUtil.setEvent;
ServerEvent.prototype.getData = _serverUtil.getData;
ServerEvent.prototype.updateDom = _serverUtil.updateDom;

ServerEvent.DEFAULT = {
    async: true,
    singleton: true,
    url: (window.$ctx || '/iwebap') + '/evt/dispatch'
};

window.ServerEvent = ServerEvent;