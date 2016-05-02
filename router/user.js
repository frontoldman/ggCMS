var router = require('koa-router')();
var UserGroup = require('../model/UserGroup');
var User = require('../model/User');

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

//修改用户组信息
router.put('/group/:id',function *(next){
	var body = this.request.body;
	var userGroup = yield UserGroup.update(
		{_id: this.params.id},
		{name: body.name,updateTime: new Date()})
	this.body = userGroup;
})

//删除单个用户组信息
router.delete('/group/:id',function *(next){
	var userGroup = yield UserGroup.remove({_id: this.params.id});
	this.body = userGroup
})

//增加单个用户
router.post('/admin',function *(next){

})

module.exports = router