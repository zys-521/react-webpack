// 公共静态资源打包配置

const path = require('path')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // dll
const {dllPath, library} = require('./dll.config')

module.exports = {
    mode: 'production',
    entry: library,
    output: {
        path: path.join(__dirname, dllPath),
        filename: '[name].dll.js',
        library: '[name]_[hash]',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            path: path.join(__dirname, dllPath, "[name]-manifest.json"),
            name: '[name]_[hash]'
        })
    ]
}