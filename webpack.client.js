const Path = require('path');
const webpackMerge = require('webpack-merge');

const conf = require('./webpack.base');
const clientConfig = {
    mode: 'development',
    entry: './src/client/index.js',
    output: { 
        filename: 'index.js',
        path: Path.resolve(__dirname, 'public')
    }
}
module.exports = webpackMerge(clientConfig, conf);