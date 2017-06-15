const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let MFUSchema = new Schema({
    contact: { type: Schema.Types.ObjectId, ref: "contact"},
    counter: 0
});

let MFUModel = mongoose.model('mfu', GroupSchema);


module.exports =  MFUModel;
