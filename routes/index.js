var express = require('express')
var router = express.Router()
var nodemailer = require('nodemailer')
var sgTransport = require('nodemailer-sendgrid-transport')

const Profile = require('../models/profile')
const projectsController = require('../controllers/projects_controller')
const educationsController = require('../controllers/educations_controller')
const worksController = require('../controllers/works_controller')
const skillsController = require('../controllers/skills_controller')

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
/* GET home page. */
router.get('/', function (req, res) {
  Profile.findOne({}, (err, profile) => {
    if(err) return res.status(404).json({message: 'Profile not found'})
    res.json(profile)
  })
})

/* GET projects page. */
router.get('/projects', projectsController.index)

// /* GET projects/:id page. */
// router.get('/projects/:id', projectsController.show)

/* GET educations page. */
router.get('/educations', educationsController.index)

/* GET skills page.  */
router.get('/skills', skillsController.index)

// /* GET education/:id page. */
// router.get('/education/:id', educationsController.show)

/* GET work page. */
router.get('/works', worksController.index)

/* POST email */
router.post('/postmsg', sendMsg)

var options = {
  auth: {
    api_key: process.env.API_KEY
  }
}

function sendMsg (req, res) {
  var mailer = nodemailer.createTransport(sgTransport(options))
  console.log(req.body)
  var mailOptions = {
    from: {name: req.body.name,
          address: req.body.email},
      to: 'myapikanta@gmail.com', // list of receivers
      subject: req.body.subject, // Subject line
      headers: {contact: req.body.contact},
      html: 'By: ' + req.body.name + '<br>' + '<strong>' + req.body.text + '</strong>' + '<br> Contact No: ' + req.body.contact // html body
  };

  // console.log(req.body)

  mailer.sendMail(mailOptions, function(error, info) {

    if (error) return res.status(401).json({error: 'Message unsuccessfully sent 2'})
    res.status(200).json({message: 'Message is successfully sent!', info})
  })
}

module.exports = router
