const LocalStrategy   = require('passport-local').Strategy;
const User            = require('../models/user.model');
const bcrypt          = require('bcrypt');

function configure(passport){

  passport.serializeUser((loggedInUser, next) => {
    next(null, loggedInUser._id);
  });

     passport.deserializeUser((userIdFromSession, next) => {
       User.findById(userIdFromSession)
       .then(user => next(null,user))
       .catch(e => next(e));
     });

  passport.use(new LocalStrategy((username, password, next) => {
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



}

module.exports = configure;
