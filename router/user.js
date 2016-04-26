var router = require('koa-router')();
var UserGroup = require('../model/UserGroup')

router.post('/group/add',function *(next){
	var userGroup = yield UserGroup.create({
		name:'hi'
	})

	this.body = this.path;
})

module.exports = router