const express = require('express');
const router = express.Router();
const items = require('../models/item');

router.get('/',(req,res) => {
    items.getAll((err, lists)=> {
        if(err) {
            res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, lists:lists},null,2));
            res.end();

    }
    });
});

router.post('/', (req,res,next) => {
    let newItem = new item({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category
    });
    items.addItem(newItem,(err, list) => {
        if(err) {
            res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

        }
        else
            res.json({success:true, message: "Added successfully."});

    });
});

router.delete('/:id', (req,res,next)=> {

      let id = req.params.id;

      item.deleteItemById(id,(err,list) => {
          if(err) {
              res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
          }
          else if(list) {
              res.json({success:true, message: "Deleted successfully"});
          }
          else
              res.json({success:false});
      })
  });

module.exports = router;