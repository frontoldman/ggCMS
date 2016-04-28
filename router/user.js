var router = require('koa-router')();
var UserGroup = require('../model/UserGroup')

//添加userGroup
router.post('/group/add',function *(next){
	var body = this.request.body;
	var userGroup = yield UserGroup.create({
		name: body.name
	})
	
	this.body = {code:1000};
})

//获取userGroup列表
router.get('/group',function *(next){
	var userGroupList = yield UserGroup.find();
	this.body = userGroupList;
})

module.exports = router