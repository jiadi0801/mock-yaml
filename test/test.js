const fs = require('fs');
const StringType = require('../lib/mockjs/string.js');
const jsyaml = require('js-yaml');


const SCHEMA = jsyaml.Schema.create([].concat(StringType));

var doc = jsyaml.load(fs.readFileSync('test.yml'), {
    schema: SCHEMA
});

console.log(doc);
