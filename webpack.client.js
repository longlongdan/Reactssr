const Path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    output: { 
        filename: 'index.js',
        path: Path.resolve(__dirname, 'public')
    },
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