/**
 * Created by 52913 on 2016/4/18.
 */

var fs = require('fs')
var koa = require('koa')
var webpack = require('webpack')
var webpackDevMiddleware = require('koa-webpack-dev-middleware')
var webpackHotMiddleware = require("koa-webpack-hot-middleware")
var config = require('./webpack.config')

var app = koa();

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: false, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler));

app.use(function *(next){
    if(this.path.indexOf('/api') === -1 ){
        this.body = fs.createReadStream('./static/index.html');
        this.type = 'text/html; charset=utf-8';
    }
});

app.listen(3000,() => console.log('listen on 3000!'));