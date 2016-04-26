
var mongoose = require('mongoose');
var settings = require("../config");

function db(fn){
	mongoose.connect(settings.db.url,fn);
}

module.exports = db;
