const jsyaml = require('js-yaml');
const Parser = require('mockjs/src/mock/parser.js');
const Random = require('mockjs/src/mock/random/');

// mockjs: 'name|min-max': string
const MinMax = new jsyaml.Type('!str/min-max', {
    kind: 'scalar',
    construct: function (data) {
        var regex = /^.*\s+/;
        var rule = data.match(regex)[0].replace(/\s*$/, '');
        var content = data.replace(regex, '');

        rule = 'placeholder|' + rule;
        rule = Parser.parse(rule);

        if (rule.count < 0) {
            return '';
        }

        var result = '';
        for (var i = 0; i < rule.count; i++) {
            result += content;
        }
        return result;
    }
});

// mockjs: 'name|count': string
const Count = new jsyaml.Type('!str/count', {
    kind: 'scalar',
    construct: function (data) {
        var regex = /^.*\s+/;
        var rule = data.match(regex)[0].replace(/\s*$/, '');
        var content = data.replace(regex, '');

        rule = 'placeholder|' + rule;
        rule = Parser.parse(rule);

        if (rule.count < 0) {
            return '';
        }

        var result = '';
        for (var i = 0; i < rule.count; i++) {
            result += content;
        }
        return result;
    }
}); 

module.exports = [MinMax, Count];
