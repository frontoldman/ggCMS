var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserGroup = require('./UserGroup')

var UserSchema = new Schema({
	username: String,
	nickname: String,
	password: String,
	group: { type: Schema.Types.ObjectId, ref: 'UserGroup' },
	createTime: { type: Date, default: Date.now },
	updateTime: { type: Date, default: Date.now }
})

// UserSchema.post('save', function(doc, next){
// 	UserGroup
// 	.update(
// 		{_id:doc.group}, 
// 		{'$addToSet': {users: doc._id}}
// 	)
// 	.then(() => next())
// })

// UserSchema.post('remove', function(doc, next){
// 	console.log(doc)
// 	next();
// })

// UserSchema.pre('remove', function(next){
// 	console.log(arguments)
// 	next();
// })

// UserSchema.post('update', function(doc, next){
// 	console.log(doc);
// 	next();
// })

var User = mongoose.model("User",UserSchema);

module.exports = User