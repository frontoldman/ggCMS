/**
 * Created by 52913 on 2016/4/6.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:[
        'webpack-hot-middleware/client',
        './static/index.js'
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
            }
        ]
    }
}