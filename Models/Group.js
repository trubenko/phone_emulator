const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let GroupSchema = new Schema({
    name: String,
});

let GroupModel = mongoose.model('group', GroupSchema);


module.exports =  GroupModel;
