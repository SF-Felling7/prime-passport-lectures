var mongoose = require('mongoose');
var User = require('../models/user.model');
var Schema = mongoose.Schema;


var itemSchema = new Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    imgUrl: {type: String, required: true},

});

var item = mongoose.model('item', itemSchema);

module.exports = mongoose.model('item', itemSchema);
