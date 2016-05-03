var router = require('koa-router')();
var crypto = require('crypto');
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
	var body = this.request.body;

	//默认密码
	var defaultPassword = '1';
	var passwordHashed = crypto.createHash('md5').update(defaultPassword).digest('hex')

	var user = yield User.create({
		name: body.name,
		group: body.group,
		password: passwordHashed
	})

	this.body = user;
})

router.get('/admin', function *(next){
	var userList = yield User
						.find()
						.populate('group')
	this.body = userList;
})

router.delete('/admin/:id', function *(next){
	var user = yield User.remove({_id: this.params.id})
	this.body = user;
})

module.exports = router