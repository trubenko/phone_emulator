const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = require('./Group');

let ContactSchema = new Schema({
    name: String,
    surname:String,
    phone: Number,
    email: String,
    group: [{
        type: Schema.Types.ObjectId, ref: 'group'
    }],
    avatar: String,
    age: Number,
    favorite: {
        type: Boolean,
        default: false
    }
});


let ContactModel = mongoose.model('contact', ContactSchema);


module.exports =  ContactModel;
