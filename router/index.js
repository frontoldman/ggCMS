/**
*	user 路由
**/

var user = require('./user');
var router = require('koa-router')();

router.use('/api/user',user.routes())

module.exports = router