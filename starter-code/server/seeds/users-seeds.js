const mongoose = require("mongoose");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const dbName = "forum-development";
mongoose.connect(`mongodb://localhost/${dbName}`);

let salt = bcrypt.genSaltSync(bcryptSalt);
const users = [
  {
    username: "User1",
    password: bcrypt.hashSync("1234", salt),
    email: "user1@gmail.com"
  },
  {
    username: "User2",
    password: bcrypt.hashSync("1234", salt),
    email: "user2@gmail.com"
  },
  {
    username: "User3",
    password: bcrypt.hashSync("1234", salt),
    email: "user3@gmail.com"
  },
  {
    username: "User4",
    password: bcrypt.hashSync("1234", salt),
    email: "user4@gmail.com"
  },
  {
    username: "User5",
    password: bcrypt.hashSync("1234", salt),
    email: "user5@gmail.com"
  }
];

User.collection.drop();

users.forEach(p => {
  let pr = new User(p);
  pr
    .save()
    .then(user => console.log(`User: ${user.username}`))
    .catch(err => console.log(err));
});
