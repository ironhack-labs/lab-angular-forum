const mongoose = require('mongoose');
const Thread = require('../models/thread.model');
const Reply = require('../models/reply.model');

mongoose.connect("mongodb://localhost/forum-development");

const threads = [
  {
    _author: "5a930459b0377032454568c1",
    title: "Thread1",
    content:"Comment1",
    date: new Date()
  },
  {
    _author: "5a930459b0377032454568c1",
    title: "Thread2",
    content: "Comment2",
    date: new Date()
  },
  {
    _author: "5a930459b0377032454568c1",
    title: "Thread3",
    content: "Comment3",
    date: new Date()
  }
];

Thread.create(threads, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${threads.length} threads`)
});
