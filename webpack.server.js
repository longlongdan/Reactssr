//服务器端 不需要吧path的内容都打包进来
const Path = require('path');
const nodeExternals = require('webpack-node-externals');
//浏览器端
// require('path')
module.exports = {
    target: 'node', //针对服务器端，对于require这样的代码进行与客户端不同的处理
    mode: 'development',
    entry: './src/index.js',
    output: { 
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader', //需要安装babel-loader babel-core
            exclude: /node-modules/,
            options: {
                presets: [ //编译规则
                    'react',  //需要安装babel-preset-react
                    'stage-0', //用那个就需要安装那个 babel-preset-stage-0
                    'es2015', //babel-preset-es2015
                    ['env', { targets: {browsers: ['last 2 versions']} }] //兼容所有浏览器最后的两个版本 babel-preset-env
                ]
            }
        }]
    }
}