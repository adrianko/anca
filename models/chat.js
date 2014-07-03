var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require("../settings").config;

var chat = new Schema({
    participants: [
        Schema.Types.ObjectId
    ],
    messages: [
        {
            participant: Schema.Types.ObjectId,
            message: String
        }
    ]
});

mongoose.model('Chat', chat);
mongoose.connect('mongodb://'+config.ip+'/chat');