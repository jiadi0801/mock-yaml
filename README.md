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

## 示例
* file.yml
```yaml
root: 
  str:
    -10--1: !str/min-max -10--1 ★
    1-10: !str/min-max 1-10 ★
    4: !str/count 4 ★
  number:
    -10-10: !num/min-max -10-10  1
    1-10.2-3: !num/min-max.dmin-dmax 1-10.2-3  10
    -10-1.1-4: !num/min-max.dmin-dmax -10-1.1-4  10
    1-10.3: !num/min-max.dcount 1-10.3 1
    1-10.-3: !num/min-max.dcount 1-10.-3 1
    -30.1-2: !num/count.dmin-dmax -30.1-2 1
    -23.4: !num/count.dcount -23.4 1
  boolean:
    anychar: !bool/1 1 1
    true1-3: !bool/min-max 1-3 true
    false1-3: !bool/min-max 1-3 false
  object:
    2: &aliasobj1  !object/count
      /rule: 2
      310000: 北京市
      320000: 江苏省
      330000: 浙江省
      340000: 安徽省
    1-3: &aliasobj2 !object/count
      /rule: 1-3
      310000: 北京市
      320000: 江苏省
      330000: 浙江省
      340000: 安徽省
  array:
    1-3: !array/min-max &alias1
      - 1-3
      - 北京市
      - 江苏省
      - 浙江省
      - 安徽省
    2: !array/count 
      - 2
      - 北京市
      - 江苏省
      - 浙江省
      - 安徽省
  func: !!js/function >
      function foobar() {
        return 'Wow! JS-YAML Rocks!';
      }
  regexp: 
    - !regexp/1 /[a-z][A-Z][0-9]/
    - !regexp/1 /\w\W\s\S\d\D/
    - !regexp/1 /\d{5,10}/
    - !regexp/1 /@color/
  placeholder:
    - '@check' 
    - '@url'
    - hello @string(5,10)
    - '@now'
  alias: *alias1
  aliasobj: 
    <<: *aliasobj1
    <<: *aliasobj2
```

* json
```json
{
  "root": {
    "str": {
      "4": "★★★★",
      "-10--1": "",
      "1-10": "★★★★★★★"
    },
    "number": {
      "-10-10": 2,
      "1-10.2-3": 9.361,
      "-10-1.1-4": -8.07,
      "1-10.3": 2.412,
      "1-10.-3": 8.6158,
      "-30.1-2": -30.37,
      "-23.4": -23.9829
    },
    "boolean": {
      "anychar": false,
      "true1-3": false,
      "false1-3": false
    },
    "object": {
      "2": {
        "310000": "北京市",
        "320000": "江苏省"
      },
      "1-3": {
        "310000": "北京市",
        "330000": "浙江省",
        "340000": "安徽省"
      }
    },
    "array": {
      "2": [
        "北京市",
        "江苏省",
        "浙江省",
        "安徽省",
        "北京市",
        "江苏省",
        "浙江省",
        "安徽省"
      ],
      "1-3": [
        "北京市",
        "江苏省",
        "浙江省",
        "安徽省",
        "北京市",
        "江苏省",
        "浙江省",
        "安徽省"
      ]
    },
    "regexp": [
      "fG8",
      "V@ u1\"",
      "54677466",
      "#79f2af"
    ],
    "placeholder": [
      "extend success",
      "tn3270://vdqsmnf.sa/weo",
      "hello GmFmah",
      "2017-06-21 22:42:15"
    ],
    "alias": [
      "北京市",
      "江苏省",
      "浙江省",
      "安徽省",
      "北京市",
      "江苏省",
      "浙江省",
      "安徽省"
    ],
    "aliasobj": {
      "310000": "北京市",
      "320000": "江苏省",
      "330000": "浙江省",
      "340000": "安徽省"
    },
    "func": "Wow! JS-YAML Rocks!"
  }
}

```
