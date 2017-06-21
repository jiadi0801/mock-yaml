const jsyaml = require('js-yaml');
const Parser = require('mockjs/src/mock/parser.js');
const Random = require('mockjs/src/mock/random/');

// mockjs: 'name|1': array
const Arr = new jsyaml.Type('!array/1', {
    kind: 'sequence',
    construct: function (data) {
        if (!data || data.length < 1) {
            return data;
        }

        var idx = Math.floor(data.length * Math.random());

        return data[idx];
    }
});

// mockjs: 'name|min-max': array
const ArrMM = new jsyaml.Type('!array/min-max', {
    kind: 'sequence',
    construct: function (data) {
        var rule = data[0];
        rule = 'placeholder|' + rule;
        rule = Parser.parse(rule);

        var content = data;
        if (typeof rule.min === 'number' && typeof rule.max === 'number') {
            content = data.slice(1);
        } else {
            return data;
        }

        var result = [];
        for (var i = 0; i < rule.count; i++) {
            result = result.concat(content);
        }

        return result;
    }
}); 

// mockjs: 'name|count': array
const ArrCount = new jsyaml.Type('!array/count', {
    kind: 'sequence',
    construct: function (data) {
        var rule = data[0];

        rule = 'placeholder|' + rule;
        rule = Parser.parse(rule);

        var content = data;
        if (typeof rule.count === 'number') {
            content = data.slice(1);
        } else {
            return data;
        }

        var result = [];
        for (var i = 0; i < rule.count; i++) {
            result = result.concat(content);
        }

        return result;
    }
}); 

module.exports = [Arr, ArrMM, ArrCount];
