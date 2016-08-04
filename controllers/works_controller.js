const Work = require('../models/work')

function listWorks (req, res) {
  Work.find((err, worksArray) => {
    if (err) return res.status(404).json({message: 'Work not found'})

    // create a simplified list to return selective info
    const simplifiedList = []
    for (let i = 0; i < worksArray.length; ++i) {
      simplifiedList.push({company: worksArray[i].company, role: worksArray[i].role, duty: worksArray[i].duty})
    }
    res.status(200).json(simplifiedList)
  })
}
function showWorks (req, res) {
  Work.findById({_id: req.params.id}, (err, work) => {
    if (err) return res.status(404).json({message: 'Work not found'})
    // else

    res.status(200).json(work)
  })
}

module.exports = {
  index: listWorks,
  show: showWorks
}
