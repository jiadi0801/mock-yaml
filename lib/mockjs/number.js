const jsyaml = require('js-yaml');
const Parser = require('mockjs/src/mock/parser.js');
const Random = require('mockjs/src/mock/random/');

// mockjs: 'name|min-max': number
const MinMax = new jsyaml.Type('!num/min-max', {
    kind: 'scalar',
    construct: function (data) {
        var regex = /^.*\s+/;
        var rule = data.match(regex)[0].replace(/\s*$/, '');
        var content = data.replace(regex, '');

        rule = 'placeholder|' + rule;
        rule = Parser.parse(rule);
        return rule.count;
    }
});

// mockjs: 'name|min-max.dmin-dmax': number
const MMDiDa = new jsyaml.Type('!num/min-max.dmin-dmax', {
    kind: 'scalar',
    construct: function (data) {
        var regex = /^.*\s+/;
        var rule = data.match(regex)[0].replace(/\s*$/, '');
        var content = data.replace(regex, '');

        rule = 'placeholder|' + rule;
        rule = Parser.parse(rule);

        return Random.float(rule.min, rule.max, rule.dmin, rule.dmax);
    }
}); 


// 'name|min-max.dcount': number
const MMDc = new jsyaml.Type('!num/min-max.dcount', {
    kind: 'scalar',
    construct: function (data) {
        var regex = /^.*\s+/;
        var rule = data.match(regex)[0].replace(/\s*$/, '');
        var content = data.replace(regex, '');

        rule = 'placeholder|' + rule;
        rule = Parser.parse(rule);

        return Random.float(rule.min, rule.max, rule.dcount, rule.dcount);
    }
});

// 'name|count.dmin-dmax': number
const CMiMa = new jsyaml.Type('!num/count.dmin-dmax', {
    kind: 'scalar',
    construct: function (data) {
        var regex = /^.*\s+/;
        var rule = data.match(regex)[0].replace(/\s*$/, '');
        var content = data.replace(regex, '');

        rule = 'placeholder|' + rule;
        rule = Parser.parse(rule);

        return Random.float(rule.count, rule.count, rule.dmin, rule.dmax);
    }
});

// 'name|count.dcount': number
const CD = new jsyaml.Type('!num/count.dcount', {
    kind: 'scalar',
    construct: function (data) {
        var regex = /^.*\s+/;
        var rule = data.match(regex)[0].replace(/\s*$/, '');
        var content = data.replace(regex, '');

        rule = 'placeholder|' + rule;
        rule = Parser.parse(rule);

        return Random.float(rule.count, rule.count, rule.dcount, rule.dcount);
    }
});

module.exports = [MinMax, MMDiDa, MMDc, CMiMa, CD];
