const Mock = require('mockjs');
const Random = Mock.Random;

Random.extend({
    check: function () {
        console.log(arguments);
        return 'extend success';
    },

});


module.exports = {
    placeholder: function (obj) {
        return Mock.mock(obj);
    }
}