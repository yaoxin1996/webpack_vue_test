const webpackMerge = require('webpack-merge')
const uglifyJSPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
    plugins: [
        new uglifyJSPlugin()
    ]
})
