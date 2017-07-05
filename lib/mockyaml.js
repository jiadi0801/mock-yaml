const jsyaml = require('js-yaml');
const SCHEMA = require('./schema');
const PH = require('./placeholder');

const mockyaml = {
    toJSON: function (ymlfilecontent) {
        var doc = jsyaml.load(ymlfilecontent, {
            schema: SCHEMA
        });
        return PH.placeholder(doc);
    },
    toYAML: function (object) {
        return jsyaml.dump(object);
    },
    Random: PH.Random
};

module.exports = mockyaml;