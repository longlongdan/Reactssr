const Path = require('path');
const nodeExternals = require('webpack-node-externals'); //针对服务器端，对于require这样的代码进行与客户端不同的处理
const webpackMerge = require('webpack-merge');

const conf = require('./webpack.base')
const serverConfig = {
    target: 'node', //针对服务器端，对于require这样的代码进行与客户端不同的处理
    mode: 'development',
    entry: './src/server/index.js',
    output: { 
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
}
module.exports = webpackMerge(serverConfig,conf)