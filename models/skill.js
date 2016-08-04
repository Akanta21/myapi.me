const mongoose = require('mongoose')

const SkillSchema = mongoose.Schema({
  HTML: { type: Number, required: true },
  CSS: { type: Number, required: true },
  Javascript: { type: Number, required: true },
  JQuery: { type: Number, required: true },
  MongoDB: { type: Number, required: true },
  Express: { type: Number, required: true },
  AngularJS: { type: Number, required: true },
  NodeJS: { type: Number, required: true },
  Ruby: { type: Number, required: true }
})

module.exports = mongoose.model('Skill', SkillSchema)
