const mongoose = require('mongoose');
const Reply=require("../models/reply.model");
const User=require("../models/user.model");
const Thread = require('../models/thread.model');

const dbName = 'forum-development';
mongoose.connect(`mongodb://localhost/${dbName}`);

const threads = [
  {
    author: "Juanito",
    tittle: "Más vale pajara en mano que paja con la mano",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    author: "Roger Rabbit",
    tittle: "¿Quién me engañó?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }


];
Thread.collection.drop

Thread.create(threads, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${threads.length} threads`)
});