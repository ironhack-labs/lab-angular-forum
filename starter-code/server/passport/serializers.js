const passport = require('passport');
const User = require("../models/user.model")

passport.serializeUser((loggedInUser, cb) => {
    cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
    User.findById(userIdFromSession)
        .then(user => cb(null, user))
        .catch(e => cb(e));
});