var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require("../settings").config;

var user = new Schema({
    username: String
});

mongoose.model('User', user);
mongoose.connect('mongodb://'+config.ip+'/user');