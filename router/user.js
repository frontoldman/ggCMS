var router = require('koa-router')();
var UserGroup = require('../model/UserGroup')

//添加userGroup
router.post('/group',function *(next){
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

//获取用户组详情
router.get('/group/:id',function *(next){
	var userGroup = yield UserGroup.findOne({_id:this.params.id})
	this.body = userGroup;
})

router.put('/group/:id',function *(next){
	var body = this.request.body;
	var userGroup = yield UserGroup.update(
		{_id:this.params.id},
		{name: body.name,updateTime: new Date()})
	this.body = userGroup;
})

module.exports = router