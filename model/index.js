var mongoose = require('mongoose');
var settings = require("../config");

function db(fn){
	var connection = mongoose.connect(settings.db.url,fn);
	global.connection = connection;
}

module.exports = db;
