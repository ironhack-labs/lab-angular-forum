require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Thread = require("../models/thread.model");
const User = require("../models/user.model");

mongoose.connect(`${process.env.BASE_URL}`);

const users = [
  {
    username: "Saitama",
    email: "100pushups@staystrong.com",
    password: bcrypt.hashSync("kungfupanda", 10)
  },
  {
    username: "Brendan Eich",
    email: "beich@bravesoftware.com",
    password: bcrypt.hashSync("1234", 10)
  },
  {
    username: "Kenny",
    email: "kenny@southparkhigh.com",
    password: bcrypt.hashSync("OhMyG0DTheyKi11edKenny", 10)
  },
  {
    username: "Miško Hevery",
    email: "misko@miskatonicuni.com",
    password: bcrypt.hashSync("admin", 10)
  }
];
User.create(users, (err, userArray) => {
  if (err) {
    throw err;
  }
  const forumUsers = []
  userArray.forEach(e => forumUsers.push(e));
  console.log(`${forumUsers.length} users created`);
  const threads = [
    {
      _author: forumUsers[3]._id,
      title: "Angular magic",
      content: "All you ever wanted to know but where too afraid to ask",
      date: new Date()
    },
    {
      _author: forumUsers[1]._id,
      title: "Let's talk about JavaScript",
      content: "It has Batman",
      date: new Date()
    },
    {
      _author: forumUsers[0]._id,
      title: "Extreme Japanese burushitu",
      content: "Stories that nobody believes",
      date: new Date()
    },
    {
      _author: forumUsers[2]._id,
      title: "Best South Park jokes",
      content: "You can find some Immanuel Kant references here.",
      date: new Date()
    }
  ];

  Thread.create(threads, err => {
    if (err) {
      throw err;
    }
    console.log("Threads added");
    mongoose.connection.close();
  });
});
