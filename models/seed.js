//  load in the environment vars
require('dotenv').config()

var seeder = require('mongoose-seed')

// Connect to MongoDB via mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/profile.js',
    'models/project.js',
    'models/education.js',
    'models/work.js',
    'models/skill.js'
  ])
  // Clear specified collections
  seeder.clearModels(['Profile', 'Project', 'Education', 'Work', 'Skill'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(me)
  })
})

// Data array containing seed data -documents organised by Model
var me = [
  {
    'model': 'Profile',
    'documents': [
      {
        'first_name': 'Andrian',
        'last_name': 'Kanta',
        'email': 'a.kanta22@gmail.com',
        'description': 'Full-stack Developer',
        'socials': [{name: 'https://github.com/Akanta21'},
                    {name: 'https://sg.linkedin.com/in/andriankanta'}],
        'picture': '../public/images/DSC_4225.jpg'
      }
    ]
  },
  {
    'model': 'Project',
    'documents': [
      {
        'title': 'Twittee',
        'description': 'A educational blog to link up students and tutors',
        'link': 'https://twitty3.herokuapp.com/',
        'image': 'img/twittee.png'
      },
      {
        'title': 'Housify',
        'description': 'A web application which potentially makes house search a much simpler task.',
        'link': 'https://akanta21.github.io/Miniproject3a',
        'image': 'img/hdbapi.png'
      },
      {
        'title': 'JS Memory Game',
        'description': 'Memory Game created with Javascript + JQuery',
        'link': 'https://akanta21.github.io/game',
        'image': 'img/memorygame.png'
      },
      {
        'title': 'Tic-Tac-Toe',
        'description': 'Tic-Tac-Toe that allows two users to go against one another',
        'link': 'https://akanta21.github.io/tic-tac-toe',
        'image': 'img/tictactoe.png'
      }
    ]
  },
  {
    'model': 'Education',
    'documents': [
      {
        'school': 'Nanyang Technological University',
        'subjects': [{name: 'Materials Science Engineering'}]
      },
      {
        'school': 'Jurong Junior College',
        'subjects': [{name: 'Math'},
                     {name: 'Chemistry'},
                     {name: 'Physics'},
                     {name: 'Economics'}]
      }
    ]
  },
  {
    'model': 'Work',
    'documents': [
      {
        'company': 'Temasek Laboratories',
        'role': 'Project Officer',
        'duty': 'Ensuring research projects delivery are met. Carrying out procurement duty and liason with project partners.'
      },
      {
        'company': 'Micron Semiconductor',
        'role': 'Process Coordinator and Production Supervisory',
        'duty': 'Implementing and updating SOPs, making sure that all angles are covered to prevent recalls.'
      }
    ]
  },
  {
    'model': 'Skill',
    'documents': [
      {
        'HTML': 8,
        'CSS': 8,
        'Javascript': 8.5,
        'JQuery': 9,
        'MongoDB': 9,
        'Express': 8,
        'AngularJS': 8.5,
        'NodeJS': 9,
        'Ruby': 7
      }
    ]
  }
]
