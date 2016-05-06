/**
 * Created by 52913 on 2016/4/18.
 */

var fs = require('fs')
var path = require('path')
var koa = require('koa')
var bodyParser = require('koa-bodyparser');
var logger = require('koa-logger');
var session = require('koa-session-store');
var MongooseStore = require('koa-session-mongoose');
var favicon = require('koa-favicon');
var render = require('koa-ejs');

var config = require('./config')
var authNotStop = require('./middleware/authNotStop')
var router = require('./router/')

var app = koa();

//cookie签名
app.keys = ['gg', 'fat gg'];

//中间件集合
app.use(logger())
app.use(favicon(__dirname + '/static/favicon.ico'))
app.use(session({
  store: new MongooseStore()
}));
app.use(bodyParser());
render(app, {
  root: path.join(__dirname, 'view'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: true
});

app.use(router.routes())

app.use(function *(next){
    if(this.path == '/static/bundle.js'){
        this.body = fs.createReadStream('./dist/bundle.js');
        this.type = 'application/javascript; charset=utf-8';
    }else{
        yield *next;
    }
})

app.use(authNotStop)
app.use(function *(next){
    if(this.path.indexOf('/api') === -1 ){
        // var _user = this.session.user,
        //     user = {};
        // if(_user){
        //     user.nickname = _user.nickname;
        //     user._id = _user._id;
        //     user.username = _user.username;
        // }

        yield this.render('index',{
            data: this.session.user || {}
        });
    }
})

app.on('error', function(err, ctx){
    console.error('system err: ', err);
})

var server = function(fn){
    app.listen(config.port, fn)
}

module.exports = server;