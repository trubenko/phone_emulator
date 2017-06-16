const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let FavSchema = new Schema({
    contact: {type: Schema.Types.ObjectId, ref: 'contact'}
});

let FavModel = mongoose.model('favs', FavSchema);


module.exports = FavModel;
