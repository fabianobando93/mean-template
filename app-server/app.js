const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const config = require('./config/database');
const itemService = require('./services/item-service');

mongoose.connect(config.database);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/item', itemService);

app.get('/', (req,res) => {
    res.send("Invalid page");
})



app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);   
});




