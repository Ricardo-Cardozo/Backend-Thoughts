const mongoose = require('mongoose')

const {Schema} = mongoose

const Thought = mongoose.model('Thought', new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true }))

module.exports = Thought
