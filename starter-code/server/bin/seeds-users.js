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
  username: "josiño34",
  email: "josiño34@hotmail.com",
  password: encryptedPass,
},
{
  username: "herminia11",
  email: "herminia11@hotmail.com",
  password: encryptedPass,
},
{
  username: "pacoco",
  email: "paquito@hotmail.com",
  password: encryptedPass,
},
]

User.collection.drop();

User.create(users, (err, user) => {
  if (err) {
    throw err;
  }
  console.log(user);
});
