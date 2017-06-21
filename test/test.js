const fs = require('fs');
const mockyaml = require('../lib/mockyaml');

var yamlfile = fs.readFileSync('test.yml');
var obj = mockyaml.toJSON(yamlfile);

console.log(JSON.stringify(obj, null, 2));

obj.f = function () {
    return 'a'
}
yamlfile = mockyaml.toYAML(obj);

console.log(yamlfile);