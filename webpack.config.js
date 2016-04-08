
'use strict';
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: './build/bundle.js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};