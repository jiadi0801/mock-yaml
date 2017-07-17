# 服务端使用
1、服务器中存放文件----`./yaml/baseinfo.yml`
```YAML
success: true
data:
  usercode: '@integer(10000, 99999)' #工号
  username: '@cname' #姓名
  sex: '@sex' #性别
  age: '@integer(18, 99)' #年龄
  birthday: '@date("yyyy-MM-dd")' #生日
  email: '@email' #邮箱
  company: '@string(4, 14)' #就职公司
  constellation: '@pickone("白羊座","双子座","处女座")' #星座
```
2、服务器启动脚本index.js
```JavaScript
var fs = require('fs');
var app = require('express')();
var cors = require('cors');
var mockyaml = require('./mockyaml');

// 跨域
app.use(cors());

// 扩展mock占位符
mockyaml.Random.extend({
    sex: function () {
        return Math.random() < 0.5 ? '男' : '女';
    },
    marriagestatus: function () {
        return Math.random() < 0.5 ? 'A' : 'B';
    },
    pickone: function () {
        return arguments[Math.floor(arguments.length * Math.random())];
    }
});

function readFile(filename){
    try {
        // 将yaml文件转为json，'path.join' is better
        return mockyaml.toJSON(fs.readFileSync('./yaml/' + filename, 'utf8'));
    } catch (e) {
        console.log(e);
    }
}

app.post('/manage/baseinfo', function(req, res){
    res.json(readFile('baseinfo.yml'));
});

app.listen(3000, function(){
    console.log('Server is running!');
});
```
3、客户端发起ajax请求，返回结果
```JSON
{
  "success": true,
  "data": {
    "usercode": 29208,
    "username": "姜勇",
    "sex": "男",
    "age": 92,
    "birthday": "1978-04-09",
    "email": "u.yjlh@irkoqcj.cx",
    "company": "LqCKgW",
    "constellation": "双子座"
  }
}
```
# 客户端使用
```
var json = document.querySelector('#json');
var yaml = document.querySelector('#yaml');
function toJSON() {
    json.value = JSON.stringify(Mockyaml.toJSON(yaml.value), null, 2);
}
function toYAML() {
    yaml.value = Mockyaml.toYAML(JSON.parse(json.value));
}
```