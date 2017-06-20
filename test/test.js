const fs = require('fs');
const jsyaml = require('js-yaml');
const StringType = require('../lib/mockjs/string.js');
const NumberType = require('../lib/mockjs/number.js');
const BooleanType = require('../lib/mockjs/boolean.js');


const SCHEMA = jsyaml.Schema.create([].concat(StringType, NumberType, BooleanType));

var doc = jsyaml.load(fs.readFileSync('test.yml'), {
    schema: SCHEMA
});

console.log(doc);
