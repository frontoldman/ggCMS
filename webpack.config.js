/**
 * Created by 52913 on 2016/4/6.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:[
        './static/shared/index.js'
    ],
    output:{
        path : path.join(__dirname, 'dist'),
        filename : 'bundle.js',
        publicPath : '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        loaders:[
            {
                test : /\.js$/,
                loaders: ['babel'],
                exclude : ['node_modules'],
                include : __dirname
            },
            {
                test: /\.css$/,
                loader: "style!css",
                include : __dirname
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            }
        ]
    }
}