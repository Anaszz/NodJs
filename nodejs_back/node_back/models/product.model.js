const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let ProductSchema = new Schema ({
    name: String,
    description: String,
    prix: Number,
    tva: Number
});

module.exports = mongoose.model('Product' , ProductSchema);
