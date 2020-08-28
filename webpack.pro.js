const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 清除dist
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const {dllPath, library} = require('./dll.config');
const dllKeys = Object.keys(library)

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        filename: '[name].[hash:4].bundle.js',
        chunkFilename: 'scripts/[name].[chunkhash:8].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            limit: 10000,
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
    // optimization: {
    //     // 优化项,公用代码拆分
    //     splitChunks: {
    //       cacheGroups: {
    //         vendor: {
    //           test: /[\\/]node_modules[\\/]/,
    //           // cacheGroupKey here is `commons` as the key of the cacheGroup
    //           name(module, chunks, cacheGroupKey) {
    //             const moduleFileName = module.identifier().split('/').reduceRight(item => item);
    //             const allChunksNames = chunks.map((item) => item.name).join('~');
    //             return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
    //           },
    //           chunks: 'all'
    //         }
    //       }
    //     }
    //   },
    // externals: {
    //     jquery: 'jQuery'
    // },
    plugins: [
        new CleanWebpackPlugin(),
        // 包分析
        // new BundleAnalyzerPlugin(),
        // 静态文件引入, 将静态文件打包到dll文件夹下
        new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, dllPath, './*.dll.js'),
            publicPath: 'dll/',
            outputPath: 'dll/'
        }),
        ...dllKeys.map(key => {
            return new webpack.DllReferencePlugin({
                manifest: path.join(__dirname, dllPath, `/${key}-manifest.json`)
            })
        })
    ]
})
