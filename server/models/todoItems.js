// Import mongoose to create mongoose model
const mongoose = require('mongoose');

// Create Schema
const TodoItemSchema = new mongoose.Schema({
  item:{
    type:String,
    required: true
  }
})

// Export this Schema
module.exports = mongoose.model('todo', TodoItemSchema);