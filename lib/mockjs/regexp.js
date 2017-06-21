const jsyaml = require('js-yaml');
const RE = require('mockjs/src/mock/regexp/');

// mockjs: 'name': regexp
const Reg = new jsyaml.Type('!regexp/1', {
    kind: 'scalar',
    construct: function (data) {
        data = data.replace(/^\/|\/$/g, '');

        var result = '';
        result = RE.Handler.gen(
            RE.Parser.parse(
                data
            )
        );
        return result;
    }
});

module.exports = Reg;
