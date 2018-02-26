const User = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptSalt = 5;

mongoose
  .connect("mongodb://localhost/forum-development")
  .then(() => {
    console.log("Connect to DB");
  })
  .catch(e => {
    console.log(e);
  });

const salt = bcrypt.genSaltSync(bcryptSalt);
const password = "1234";
const encryptedPass = bcrypt.hashSync(password, salt);

const users= [
    {
  username: "pepe",
  email: "pepe@gmail.com",
  password: encryptedPass
},
{
  username: "carlos",
  email: "carlos@gmail.com",
  password: encryptedPass
},
{
  username: "maria",
  email: "maria@hotmail.com",
  password: encryptedPass
},
]

User.collection.drop();

User.create(users, (err, user) => {
  if (err) {
    throw err;
  }
  console.log(user);
});