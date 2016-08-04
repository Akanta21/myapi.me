const Project = require('../models/project')

function listProjects (req, res) {
  Project.find((err, projectsArray) => {
    if (err) return res.status(404).json({message: 'Project not found'})

    // create a simplified list to return selective info
    const simplifiedList = []
    for (let i = 0; i < projectsArray.length; ++i) {
      simplifiedList.push({title: projectsArray[i].title, description: projectsArray[i].description, link: projectsArray[i].link, image: projectsArray[i].image})
    }
    res.status(200).json(simplifiedList)
  })
}
function showProjects (req, res) {
  Project.findById({_id: req.params.id}, (err, project) => {
    if (err) return res.status(404).json({message: 'Project not found'})
    // else

    res.status(200).json(project)
  })
}

module.exports = {
  index: listProjects,
  show: showProjects
}
