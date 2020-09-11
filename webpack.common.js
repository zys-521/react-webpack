const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const WorkboxPlugin = require('workbox-webpack-plugin');
const postcssPxToViewport = require('postcss-px-to-viewport');

module.exports = {
    entry: {
        // 打包后的js会按这里的顺序引入
        // print: './src/print.js',
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        filename: '[name].[hash:4].bundle.js',
        chunkFilename: '[name].[chunkhash:8].chunk.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: "favicon.ico",
            title: 'Caching',
            template: './index.html'
        }),
        // PWA
        // new WorkboxPlugin.GenerateSW({
        //     // 这些选项帮助 ServiceWorkers 快速启用
        //     // 不允许遗留任何“旧的” ServiceWorkers
        //     clientsClaim: true,
        //     skipWaiting: true
        // })

    ]
}