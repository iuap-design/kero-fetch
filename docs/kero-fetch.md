<a name="ServerEvent"></a>

## ServerEvent : <code>object</code>
前端请求事件


* [ServerEvent](#ServerEvent) : <code>object</code>
    * [.addDataTable(dataTableId, rule)](#ServerEvent.addDataTable)
    * [.addDataTables(dataTables)](#ServerEvent.addDataTables)
    * [.addAllDataTables(rule)](#ServerEvent.addAllDataTables)
    * [.fire(p)](#ServerEvent.fire)
    * [.processXHRError(self, rsl, state, xhr)](#ServerEvent.processXHRError)
    * [.setCompression(compression)](#ServerEvent.setCompression)
    * [.add参数eter(key, value)](#ServerEvent.add参数eter)
    * [.setEvent(event)](#ServerEvent.setEvent)

<a name="ServerEvent.addDataTable"></a>

### ServerEvent.addDataTable(dataTableId, rule)
增加一个datatable


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| dataTableId | <code>number</code> | dataTable的id：唯一标示 |
| rule | <code>string</code> | DataTable.SUBMIT.current('current') ：当前选中行 DataTable.SUBMIT.focus('focus') ：当前focus行 DataTable.SUBMIT.all('all') ：所有行 DataTable.SUBMIT.select('select') ：当前页选中行 DataTable.SUBMIT.change('change') ：发生改变的行 DataTable.SUBMIT.empty('empty') ：不获取数据，返回空数组 DataTable.SUBMIT.allSelect('allSelect') ：所有页选中行 DataTable.SUBMIT.allPages('allPages') ：所有页的数据 |

**Example**  
```js
ServerEvent.addDataTable('datatableid','all')
```
<a name="ServerEvent.addDataTables"></a>

### ServerEvent.addDataTables(dataTables)
增加多个datatable


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| dataTables | <code>array</code> | dataTable的数组 |

**Example**  
```js
ServerEvent.addDataTables([datatable,datatable1,datatable2])
```
<a name="ServerEvent.addAllDataTables"></a>

### ServerEvent.addAllDataTables(rule)
将rule对着匹配的datatable列表全部加入进来


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| rule | <code>string</code> | DataTable.SUBMIT.current('current') ：当前选中行 DataTable.SUBMIT.focus('focus') ：当前focus行 DataTable.SUBMIT.all('all') ：所有行 DataTable.SUBMIT.select('select') ：当前页选中行 DataTable.SUBMIT.change('change') ：发生改变的行 DataTable.SUBMIT.empty('empty') ：不获取数据，返回空数组 DataTable.SUBMIT.allSelect('allSelect') ：所有页选中行 DataTable.SUBMIT.allPages('allPages') ：所有页的数据 |

**Example**  
```js
ServerEvent.addAllDataTables('all')
```
<a name="ServerEvent.fire"></a>

### ServerEvent.fire(p)
前端缓存:前端会存储所有页的数据信息
fire方法发出去的参数模型
{
     "environment": {
         "clientAttributes": {}
     },
     "dataTables": {
         "dict类型Da": {
             "meta": {
                 ...
             },
             "params": {
                 "cls": "com.yonyou.iuap.example.entity.mybatis.SysDict类型",
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
     "compress类型": "",
     "parameters": {}
}
fire方法返回的数据模型
{
     "dataTables": {
         "dict类型Da": {
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
     "content类型": ""
}


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| p | <code>object</code> | 请求的json参数字段，必须包含url |
| [p.type] | <code>string</code> | 请求类型 |
| [p.url] | <code>string</code> | 请求地址 |
| [p.success] | <code>string</code> | 请求成功回调方法 |
| [p.error] | <code>string</code> | 请求失败回调方法 |

**Example**  
```js
app.serverEvent().addDataTable('dataTableid').fire({
 type:"get",
 url:"..../list",
 success:function(data){
 },
 error:function(data){
 }
})
```
<a name="ServerEvent.processXHRError"></a>

### ServerEvent.processXHRError(self, rsl, state, xhr)
通过去判断请求头来验证请求是否成功


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| self | <code>object</code> | ServerEvent的this对象 |
| rsl | <code>object</code> | 请求返回的数据 |
| state | <code>object</code> | 描述状态的字符串 |
| xhr | <code>object</code> | jqXHR对象 |

<a name="ServerEvent.setCompression"></a>

### ServerEvent.setCompression(compression)
设置数据是否压缩


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| compression | <code>boolean</code> | 是否压缩的参数值 |

<a name="ServerEvent.add参数eter"></a>

### ServerEvent.add参数eter(key, value)
为fire方法添加请求参数


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| key | <code>string</code> | 参数key |
| value | <code>string</code> | 参数value |

<a name="ServerEvent.setEvent"></a>

### ServerEvent.setEvent(event)
为fire的ajax请求参数中设置事件参数


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| event | <code>string</code> | 事件名 |

