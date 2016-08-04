const mongoose = require('mongoose')

const WorkSchema = mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  duty: { type: String, required: true }
})

module.exports = mongoose.model('Work', WorkSchema)
