const Skill = require('../models/skill')

function listSkills (req, res) {
  Skill.find((err, skillsArray) => {
    if (err) return res.status(404).json({message: 'Skill not found'})

    // create a simplified list to return selective info
    const simplifiedList = []
    for (let i = 0; i < skillsArray.length; ++i) {
      simplifiedList.push(skillsArray[i])
    }
    res.status(200).json(simplifiedList)
  })
}

module.exports = {
  index: listSkills
}
