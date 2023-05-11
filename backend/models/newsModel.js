const mongoose = require('mongoose')

const schema = mongoose.Schema({
  title: String,
  description: String,
  author: String
}, 
  {timestamps: true}
)

const model = mongoose.model('news', schema)

module.exports = model;