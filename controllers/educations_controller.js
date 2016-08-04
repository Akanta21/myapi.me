const Education = require('../models/education')

function listEducations (req, res) {
  Education.find((err, educationsArray) => {
    if (err) return res.status(404).json({message: 'Education not found'})

    // create a simplified list to return selective info
    const simplifiedList = []
    for (let i = 0; i < educationsArray.length; ++i) {
      simplifiedList.push({id: educationsArray[i].school, title: educationsArray[i].subjects})
    }
    res.status(200).json(simplifiedList)
  })
}
function showEducation (req, res) {
  Education.findById({_id: req.params.id}, (err, ed) => {
    if (err) return res.status(404).json({message: 'Education not found'})
    // else

    res.status(200).json(ed)
  })
}

module.exports = {
  index: listEducations,
  show: showEducation
}
