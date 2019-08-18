const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true, 
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: String,
    default: '$00.00'
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;