const router = require('express').Router();
// Import todo model 
const todoItemsModel = require('../models/todoItems');


// Create first route --add Todo Item to database
router.post('/api/item', async (req, res)=>{
  try{
    const newItem = new todoItemsModel({
      item: req.body.item
    })
    //save this item in database
    const saveItem = await newItem.save()
    res.status(200).json(saveItem);
  }catch(err){
    res.json(err);
  }
})

// Create second route -- get data from database
router.get('/api/items', async (req, res)=>{
  try{
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).json(allTodoItems)
  }catch(err){
    res.json(err);
  }
})


// Update item
router.put('/api/item/:id', async (req, res)=>{
  try{
    // Find the item by its id and update it
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200).json(updateItem);
  }catch(err){
    res.json(err);
  }
})


// Delete item from database
router.delete('/api/item/:id', async (req, res)=>{
  try{
    // Find the item by its id and delete it
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Item Deleted');
  }catch(err){
    res.json(err);
  }
})


// Export router
module.exports = router;