/**
 * Created by 52913 on 2016/4/18.
 */

var fs = require('fs')
var koa = require('koa')
var config = require('./config')
var app = koa();

app.use(function *(next){
    if(this.path.indexOf('/static/bundle.js') > -1 ){
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

var server = function(fn){
    app.listen(config.port, fn)
}

module.exports = server;