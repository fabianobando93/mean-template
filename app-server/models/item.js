//Require mongoose package
const mongoose = require('mongoose');

//Define ItemSchema with title, description and category
const ItemSchema = mongoose.Schema({
    title: String,
    description: String,
    price : Number,
    category: {
        type: String,
        required: true,
    }
});

//Create a model using mongoose.model and export it
const Items = module.exports = mongoose.model('Items', ItemSchema );