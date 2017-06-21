const jsyaml = require('js-yaml');
const Parser = require('mockjs/src/mock/parser.js');
const Random = require('mockjs/src/mock/random/');
const Util = require('mockjs/src/mock/util.js');

// mockjs: name|count': object
const Count = new jsyaml.Type('!object/count', {
    kind: 'mapping',
    construct: function (data) {
        return genResult(data);
    }
});

// mockjs: 'name|min-max': object
const MM = new jsyaml.Type('!object/min-max', {
    kind: 'scalar',
    construct: function (data) {
        return genResult(data);
    }
}); 

function genResult(data) {
    var rule = data['/rule'];
    if (!rule) {
        return data;
    }

    rule = 'placeholder|' + rule;
    rule = Parser.parse(rule);

    var keys = Util.keys(data);
    keys = keys.filter(function (item) {
        return item !== '/rule';
    });
    keys = keys.sort(function () {
        return Math.random() - 0.5;
    });

    var result = {};
    for (var i = 0; i < rule.count; i++) {
        result[keys[i]] = data[keys[i]];
    }
    
    return result;
}

module.exports = [Count, MM];
