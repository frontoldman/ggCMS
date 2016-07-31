var co = require('co');
var crypto = require('crypto');
var db = require('./model/');
var UserGroup = require('./model/UserGroup');
var User = require('./model/User');

co(function *() {
	var dbServerError = yield db;

	var userGroup = yield UserGroup.create({
		name: '超级管理员',
		creater: null
	})

	var defaultPassword = '1';
	var passwordHashed = crypto.createHash('md5').update(defaultPassword).digest('hex')

	var user = yield User.create({
		username: 'admin',
		nickname: '超级管理员',
		group: userGroup._id,
		password: passwordHashed
	})

	yield UserGroup.update(
		{_id: userGroup._id},
		{
			creater: user._id,
			'$addToSet': {users: user._id},
			updateTime: new Date()
		}
		)

	yield global.connection.disconnect();

	return {
		userGroup: userGroup,
		user: user
	}
	
}).then(result => {
	console.log(
			'migrate successfully'
		)
})
.catch(e => console.log(e))

