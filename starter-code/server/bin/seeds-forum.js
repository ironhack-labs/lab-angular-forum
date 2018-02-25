const mongoose = require('mongoose');
const Thread = require('../models/thread.model');
const Reply = require('../models/reply.model');

mongoose.connect("mongodb://localhost/forum-development");

const threads = [
  {
    _author: "5a92c453b23592148c74c4a0",
    title: "Pollo con patatas",
    content:
      "Brownie gingerbread chupa chups fruitcake tart chocolate cake. Gingerbread dessert croissant. Lemon drops halvah brownie.",
    date: new Date(),
      
  },
  {
    _author: "5a92c453b23592148c74c4a0",
    title: "Hoygan",
    content:
      "Brownie gingerbread chupa chups fruitcake tart chocolate cake. Gingerbread dessert croissant. Lemon drops halvah brownie.",
    date: new Date(),
      
  },
  {
    _author: "5a92c453b23592148c74c4a0",
    title: "Pues parece que va a llover",
    content:
      "Brownie gingerbread chupa chups fruitcake tart chocolate cake. Gingerbread dessert croissant. Lemon drops halvah brownie.",
    date: new Date(),
      
  }
];

Thread.create(threads, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${threads.length} threads`)
});