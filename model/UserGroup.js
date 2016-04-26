
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserGroupSchema = new Schema({
	name: String,
	createTime: { type: Date, default: Date.now }
})

var UserGroup = mongoose.model("UserGroup",UserGroupSchema);

module.exports = UserGroup