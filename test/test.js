const fs = require('fs');
const path = require('path');
const mockyaml = require('../lib/mockyaml');

var yamlfile = fs.readFileSync(path.resolve(__dirname, './test.yml'));
var obj = mockyaml.toJSON(yamlfile);

console.log(JSON.stringify(obj, null, 2));

obj.f = function () {
    return 'a'
}
yamlfile = mockyaml.toYAML(obj);

console.log(yamlfile);