const jsyaml = require('js-yaml');

// mockjs: 'name|min-max': string
const MinMax = new jsyaml.Type('!str/min-max', {
    kind: 'scalar',
    construct: function (data) {
        var regex = /^.*\s+/;
        var rule = data.match(regex)[0].replace(/\s*$/, '');
        var content = data.replace(regex, '');

        var range = rule.split('-');
        range[0] = Number(range[0]);
        range[1] = Number(range[1]);
        var time = Math.round((range[1] - range[0]) * Math.random()) + range[0];
        var result = '';
        for (var i = 0; i < time; i++) {
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

        var time = Number(rule);
        var result = '';
        for (var i = 0; i < time; i++) {
            result += content;
        }
        return result;
    }
}); 

module.exports = [MinMax, Count];
