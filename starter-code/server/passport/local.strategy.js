const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require("../models/user.model")

console.log("Configure local strategy");
passport.use(new LocalStrategy((username, password, next) => {
  console.log("Received userpassword");
  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      next(err);
      return;
    }

    if (!foundUser) {
      next(null, false, { message: 'Incorrect username' });
      return;
    }

    if (!bcrypt.compareSync(password, foundUser.password)) {
      next(null, false, { message: 'Incorrect password' });
      return;
    }

    next(null, foundUser);
  });
}));