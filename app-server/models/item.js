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

module.exports.getAll = (callback) => {
    Items.find(callback);
}

module.exports.getItemById = (id, callback) => {
    let query = {_id: id};
    Items.find(query, callback);
}

//newItem.save is used to insert the document into MongoDB
module.exports.addItem = (newList, callback) => {
    Items.save(callback);
}

//Here we need to pass an id parameter to BUcketList.remove
module.exports.deleteItemById = (id, callback) => {
    let query = {_id: id};
    Items.remove(query, callback);
}