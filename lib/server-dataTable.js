/**
 * Module : kero app serverEvent dataTable
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-07-29 09:34:01
 */
import { isArray } from 'tinper-sparrow/src/util';

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

export { addDataTable, addDataTables, addAllDataTables, updateDataTables };