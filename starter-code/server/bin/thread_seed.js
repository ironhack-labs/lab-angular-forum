const mongoose = require('mongoose');
const Thread = require('../models/thread.model');

const threads = [
  {
    title: "aqui aburrido",
    content: "blblablalblablalblablablalblablalblablabl",
  },
  {
    title: "post 2",
    content: "blblablalblablalblablablalblablalblablabl",
  },
  {
    title: "gñeeeee",
    content: "blblablalblablalblablablalblablalblablabl",
  },
  {
    title: "holaquease",
    content: "blblablalblablalblablablalblablalblablabl",
  }
];

mongoose
  .connect('mongodb://localhost/forum-development')
  .then(() => {
    Thread.collection.drop()
    Thread.create(threads)
    .then(thread => {
      console.log('All the threads inserted', `Thread list: ${thread}`);
      mongoose.disconnect();   
    })
    .catch(err => console.log(err))
  });
