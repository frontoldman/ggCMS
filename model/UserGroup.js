
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserGroupSchema = new Schema({
	name: String,
	users: [{type: Schema.Types.ObjectId, ref: 'User'}],
	createTime: { type: Date, default: Date.now },
	updateTime: { type: Date, default: Date.now }
})

var UserGroup = mongoose.model("UserGroup",UserGroupSchema);



module.exports = UserGroup