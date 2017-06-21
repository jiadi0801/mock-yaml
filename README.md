# mock-yaml
用yaml语法作为数据结构，兼容绝大部分[mockjs](https://github.com/nuysoft/Mock)语法，同时获得yaml的强大扩展能力。

## TODO
[todo] 编写mockjs兼容文档
[todo] 测试用例
agree [discuss] Mock.mock() 将会转义函数
[todo] xhr mock，增强且覆盖尽可能多的库
[todo] 增加mock占位符

## mockjs数据模板
|类型              | 数据模板            | 兼容(default Y)   | 备注  |
|------------------|---------------------|-------------|-------|
|string            | min-max             |            |       |
|string            | count               |            |       |
|number            | min-max             |            |       |
|number            | min-max.dmin-dmax   |            |       |
|number            | min-max.dcount      |            |       |
|number            | count.dmin-dmax     |            |       |
|number            | count.dcount        |            |       |
|number            | count               |  N          | 不必要 |
|number            | +step               |  N          |       |
|boolean           | 1                   |            |       |
|boolean           | min-max             |            |       |
|object            | count               |            |       |
|object            | min-max             |            |       |
|array             | 1                   |            |       |
|array             | +1                  |  N         |       |
|array             | min-max             |            |       |
|array             | count               |            |       |
|function          | !!js/function >     |            |  内置 |
|regexp            |                     |            |       |
|regexp            | min-max             |  N         |       |

## mockjs占位符
|类型              | 占位符            | 兼容(default Y) | 备注  |
|------------------|-------------------|------------|-------|
|all               | all               |   Y        |       |

## 注意事项
yml语法的`@`字符已被保留，所以如果存在以`@`为首字母的字符串，那么需要用引号将其包裹起来，如果`@`不是首字母，那么可以省略引号
``` yaml
placeholder: 
    - '@url'
    - hello @string(5,10)
```

