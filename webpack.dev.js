const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const env = require('minimist')(process.argv.slice(2));

console.log('process.argv.slice(2)----------------------')
console.log(process.argv)
console.log(env)
console.log(env.test)


module.exports = merge(common, {
    mode: 'development',
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                        },
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 8000,
        contentBase: './dist',
        hot: true,
        inline:true,
	    historyApiFallback:true
    },
    plugins: [
        // 会显示HMR模块的相对路径
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})
