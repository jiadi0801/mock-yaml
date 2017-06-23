var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './lib/mockyaml.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mockyaml.js',
        library: 'Mockyaml',
        libraryTarget: 'umd'
    }
}