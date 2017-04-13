/**
 * Module : kero app serverEvent dataTable
 * Author : liuyk(liuyk@yonyou.com)
 * Date	  : 2016-07-29 09:34:01
 */
import {
    isArray
} from 'tinper-sparrow/src/util';

/**
 * 增加一个datatable
 * @memberof ServerEvent
 * @param  {number} dataTableId dataTable的id：唯一标示
 * @param  {string} rule        dataTable的规则
 *
 */
const addDataTable = function(dataTableId, rule) {
    var dataTable = this.app.getDataTable(dataTableId)
    this.datas[dataTableId] = dataTable.getDataByRule(rule)
    return this
}

/**
 * 增加多个datatable
 * @memberof ServerEvent
 * @param  {array} dataTables dataTable的数组
 *
 */
const addDataTables = function(dataTables) {
    if (arguments.length == 2) {
        for (var i = 0; i < dataTables.length; i++) {
            var rule;
            if (typeof arguments[1] == 'string') {
                rule = arguments[1]
            } else if (isArray(arguments[1])) {
                rule = arguments[1][i]
            }
            this.addDataTable(dataTables[i], rule)
        }
    } else {
        for (var i = 0; i < dataTables.length; i++) {
            var dt = dataTables[i]
            if (typeof dt == 'string')
                this.addDataTable(dt)
            else {
                for (var key in dt)
                    this.addDataTable(key, dt[key])
            }
        }
    }
    return this
}

/**
 * 将rule对着匹配的datatable列表全部加入进来
 * @memberof ServerEvent
 * @param  {string} rule dataTable的规则
 *
 */
const addAllDataTables = function(rule) {
    var dts = this.app.dataTables
    for (var i = 0; i < dts.length; i++) {
        this.addDataTable(dts[i].id, rule)
    }
}

/**
 * 将datable的列表更新
 * @memberof ServerEvent
 * @param  {array} dataTables dataTable的列表
 * @param  {string} deferred 
 *
 */
const updateDataTables = function(dataTables, deferred) {
    for (var key in dataTables) {
        var dt = this.app.getDataTable(key)
        if (dt) {
            dt.setData(dataTables[key])
            dt.updateMeta(dataTables[key].meta)
        }
    }
}

export {
    addDataTable,
    addDataTables,
    addAllDataTables,
    updateDataTables
}
