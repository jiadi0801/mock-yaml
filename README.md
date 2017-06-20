# mock-yaml
用yaml语法作为数据结构，兼容绝大部分[mockjs](https://github.com/nuysoft/Mock)语法，同时获得yaml的强大扩展能力。

## TODO
编写mockjs兼容文档
测试用例

## mockjs语法兼容列表
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

