const LocalStrategy   = require('passport-local').Strategy;
const User            = require('../models/user.model');
const bcrypt          = require('bcrypt');

function configure(passport){
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
   User.findById(id, function(err, user) {
       done(err, user);
   });
  });

  passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return next(null, false, { message: "Incorrect username" });
      }

      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, { message: "Incorrect password" });
      }

      return next(null, user);
    });
  }));
}

module.exports = configure;
