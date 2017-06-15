const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TypeCallSchema = new Schema({
    name: String
});

let TypeCallModel = mongoose.model('group', TypeCallSchema);


module.exports =  TypeCallModel;
