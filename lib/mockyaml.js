const jsyaml = require('js-yaml');
const PH = require('./placeholder');

const StringType = require('../lib/mockjs/string.js');
const NumberType = require('../lib/mockjs/number.js');
const BooleanType = require('../lib/mockjs/boolean.js');
const ObjectType = require('../lib/mockjs/object.js');
const ArrayType = require('../lib/mockjs/array.js');
const RegExpType = require('../lib/mockjs/regexp.js');

const SCHEMA = jsyaml.Schema.create([].concat(
    StringType,
    NumberType,
    BooleanType,
    ObjectType,
    ArrayType,
    RegExpType)
);

module.exports = {
    toJSON: function (ymlfilecontent) {
        var doc = jsyaml.load(ymlfilecontent, {
            schema: SCHEMA
        });
        return PH.placeholder(doc);
    },
    toYAML: function (object) {
        return jsyaml.dump(object);
    }
}