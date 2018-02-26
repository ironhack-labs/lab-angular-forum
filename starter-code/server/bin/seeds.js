const mongoose = require('mongoose');
const Thread = require('../models/thread.model');
// const User = require('../models/user.model');

const dbName = 'forum-development';
mongoose.connect(`mongodb://localhost/${dbName}`);

const threads = [
  {
    _author: "Paco",
    title: "Pa cogerte",
    content: "Pa cogerte, pa comentarte, pa comer",
  },
  {

  _author: "Paca Garse",
  title: "Pa cantarte",
  content: "Pa cantar, pa comentarte, pa comer",
},
  
]

Thread.create(threads, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${threads.length} threads`)
});