const jsyaml = require('js-yaml');
const SCHEMA = require('./schema');
const PH = require('./placeholder');
const Mock = require('mockjs');

const mockyaml = {
    toJSON: function (ymlfilecontent, pureyaml) {
        var doc = jsyaml.load(ymlfilecontent, {
            schema: SCHEMA
        });

        if (!!pureyaml) {
            return doc;
        } else {
            return  PH.placeholder(doc);
        }
    },
    toYAML: function (object) {
        return jsyaml.dump(object);
    },
    Random: PH.Random,
    Mock: Mock
};

module.exports = mockyaml;