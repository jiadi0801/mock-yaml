const fs = require('fs');
const jsyaml = require('js-yaml');
const StringType = require('../lib/mockjs/string.js');
const NumberType = require('../lib/mockjs/number.js');
const BooleanType = require('../lib/mockjs/boolean.js');
const ObjectType = require('../lib/mockjs/object.js');


const SCHEMA = jsyaml.Schema.create([].concat(StringType, NumberType, BooleanType, ObjectType));

var doc = jsyaml.load(fs.readFileSync('test.yml'), {
    schema: SCHEMA
});

console.log(JSON.stringify(doc, null, 2));
