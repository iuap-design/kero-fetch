<a name="ServerEvent"></a>

## ServerEvent : <code>object</code>
前端请求事件


* [ServerEvent](#ServerEvent) : <code>object</code>
    * [.addDataTable(dataTableId, rule)](#ServerEvent.addDataTable)
    * [.addDataTables(dataTables)](#ServerEvent.addDataTables)
    * [.addAllDataTables(rule)](#ServerEvent.addAllDataTables)
    * [.updateDataTables(dataTables, deferred)](#ServerEvent.updateDataTables)
    * [.fire(p)](#ServerEvent.fire)
    * [._successFunc(data, deferred)](#ServerEvent._successFunc)
    * [.setSuccessFunc(func)](#ServerEvent.setSuccessFunc)
    * [.processXHRError(self, rsl, state, xhr)](#ServerEvent.processXHRError)
    * [.add参数eter(key, value)](#ServerEvent.add参数eter)
    * [.setEvent(event)](#ServerEvent.setEvent)
    * [.getData()](#ServerEvent.getData)
    * [.updateDom()](#ServerEvent.updateDom)
    * [._updateDom(key, vos)](#ServerEvent._updateDom)

<a name="ServerEvent.addDataTable"></a>

### ServerEvent.addDataTable(dataTableId, rule)
增加一个datatable


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| dataTableId | <code>number</code> | dataTable的id：唯一标示 |
| rule | <code>string</code> | dataTable的规则 |

<a name="ServerEvent.addDataTables"></a>

### ServerEvent.addDataTables(dataTables)
增加多个datatable


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| dataTables | <code>array</code> | dataTable的数组 |

<a name="ServerEvent.addAllDataTables"></a>

### ServerEvent.addAllDataTables(rule)
将rule对着匹配的datatable列表全部加入进来


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| rule | <code>string</code> | dataTable的规则 |

<a name="ServerEvent.updateDataTables"></a>

### ServerEvent.updateDataTables(dataTables, deferred)
将datable的列表更新


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| dataTables | <code>array</code> | dataTable的列表 |
| deferred | <code>string</code> |  |

<a name="ServerEvent.fire"></a>

### ServerEvent.fire(p)
前端缓存:前端会存储所有页的数据信息


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| p | <code>string</code> | [description] |

<a name="ServerEvent._successFunc"></a>

### ServerEvent._successFunc(data, deferred)
数据请求成功后的回调方法实现


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | <code>json</code> | 请求返回的数据 |
| deferred | <code>string</code> | deferred |

<a name="ServerEvent.setSuccessFunc"></a>

### ServerEvent.setSuccessFunc(func)
设置成功回调方法


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| func | <code>function</code> | 函数的名字 |

<a name="ServerEvent.processXHRError"></a>

### ServerEvent.processXHRError(self, rsl, state, xhr)
[description]


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| self | <code>object</code> | [description] |
| rsl | <code>string</code> | [description] |
| state | <code>object</code> | [description] |
| xhr | <code>object</code> | [description] |

<a name="ServerEvent.add参数eter"></a>

### ServerEvent.add参数eter(key, value)
设置参数


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| key | <code>string</code> | 参数key |
| value | <code>string</code> | 参数value |

<a name="ServerEvent.setEvent"></a>

### ServerEvent.setEvent(event)
设置事件


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| event | <code>string</code> | 事件名 |

<a name="ServerEvent.getData"></a>

### ServerEvent.getData()
获取数据

<a name="ServerEvent.updateDom"></a>

### ServerEvent.updateDom()
更新dom节点

<a name="ServerEvent._updateDom"></a>

### ServerEvent._updateDom(key, vos)
更新dom节点


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| key | <code>string</code> | description |
| vos | <code>array</code> | description |

