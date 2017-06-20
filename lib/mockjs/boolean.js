const jsyaml = require('js-yaml');
const Parser = require('mockjs/src/mock/parser.js');
const Random = require('mockjs/src/mock/random/');

// mockjs: 'name|1': boolean
const Bool = new jsyaml.Type('!bool/1', {
    kind: 'scalar',
    construct: function (data) {
        return Random.boolean(1, 1);
    }
});

// mockjs: 'name|min-max': value
const BoolMM = new jsyaml.Type('!bool/min-max', {
    kind: 'scalar',
    construct: function (data) {
        var regex = /^.*\s+/;
        var rule = data.match(regex)[0].replace(/\s*$/, '');
        var content = data.replace(regex, '');

        rule = 'placeholder|' + rule;
        rule = Parser.parse(rule);

        var cur = true;
        if (content === 'false') {
            cur = false;
        }

        return Random.boolean(rule.min, rule.max, cur);
    }
}); 

module.exports = [Bool, BoolMM];
