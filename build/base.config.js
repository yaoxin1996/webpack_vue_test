const path = require('path')
const webpack = require('webpack')
const config = require('../package')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'last.js',
        // webpack默认会把生成的路径直接返回
        // 这里可以加上 publicPath， 只要涉及到url 都会在前面加上 dist/
        // publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 加载图片小于limit(如：11.3kb -> 11.3*1024)时,会将图片编译成base64字符串形式
                            // 加载图片大于limit时，会使用file-loader加载图片
                            // file-loader 不需要配置 直接安装即可
                            limit: 8192,
                            // 为防止重复，图片自动生成的是32位的hash值
                            // 开发中通常会把打包的图片放在一个文件夹 并跟上原来的名字 为了防止重复 再加上hash值的前8位
                            // img/ 要打包到的文件夹
                            // [变量] [name]-> name图片原来的名字
                            // [hash:8]->截取前8位hash值
                            // [ext] 图片原来的扩展名
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                // 转换ES6时 排除node_modules和bower_components文件
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['@babel/preset-env'] 会去找babelrc文件
                        // 安装时使用 babel-preset-es2015 时  presets直接这样配置
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ],
    },
    resolve: {
        // alias 别名
        // 通过别名的方式指定当前要使用的版本
        alias: {
            // 相当于使用 runtime-compiler
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.vue', '.css']
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `${config.version} ${config.name}`
        }),
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}




