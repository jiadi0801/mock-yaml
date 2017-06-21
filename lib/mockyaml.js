const jsyaml = require('js-yaml');
const SCHEMA = require('./schema');
const PH = require('./placeholder');

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