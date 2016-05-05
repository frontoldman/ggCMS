/**
 * Created by 52913 on 2016/4/18.
 */

var fs = require('fs')
var koa = require('koa')
var bodyParser = require('koa-bodyparser');
var logger = require('koa-logger');
var favicon = require('koa-favicon');
var config = require('./config')
var router = require('./router/')

var app = koa();

//cookie签名
app.keys = ['gg', 'fat gg'];

//中间件集合
app.use(logger())
app.use(favicon(__dirname + '/static/favicon.ico'))
app.use(bodyParser());


app.use(router.routes())

app.use(function *(next){
    if(this.path == '/static/bundle.js'){
        this.body = fs.createReadStream('./dist/bundle.js');
        this.type = 'application/javascript; charset=utf-8';
    }else{
        yield *next;
    }
})

app.use(function *(next){
    if(this.path.indexOf('/api') === -1 ){
        try{
            this.body = fs.createReadStream(config.entry);
        }catch(e){
            console.log(e);
        }
        this.type = 'text/html; charset=utf-8';
    }
})

app.on('error', function(err, ctx){
    console.error('system err: ', err, ctx);
})

var server = function(fn){
    app.listen(config.port, fn)
}

module.exports = server;