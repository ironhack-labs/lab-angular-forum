const express  = require('express');
const passport = require('passport');
const router   = express.Router();
const User     = require('../../models/user.model');
const bcrypt   = require('bcrypt');

router.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, user, info) =>  {
    if (err) { return next(err); }

    if (!user) { return res.status(401).json(info); }

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({
          message: 'something went wrong :('
        });
      }
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  console.log(req.body)
  const { username, email, password } = req.body;

  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "Please provide all fields" });
    ;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      return res
          .status(400)
          .json({ message: "The username already exists" });
    }

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = User({
      username,
      email,
      password: hashPass
    });

    newUser.save((err) => {
      if (err) {
        res.status(400).json({ message: "Something went wrong" });
      } else {
        req.login(newUser, function(err) {
          if (err) {
            return res.status(500).json({
              message: 'something went wrong'
            });
          }
          return res.status(200).json(req.user);
        });
      }
    });
  });
});

router.post("/logout", function(req, res) {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

router.post("/loggedin", function(req, res) {
  if(req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }

  return res.status(403).json({ message: 'Unauthorized' });
});

module.exports = router;
// const express = require("express");
// const passport = require("passport");
// const router = express.Router();
// const User = require("../../models/user.model");
// const bcrypt = require("bcrypt");

// const login = (req, user) => {
//   return new Promise((resolve, reject) => {
//     req.login(user, err => {
//       if (err) {
//         reject(new Error(`Something went wrong`));
//       } else {
//         resolve(user);
//       }
//     });
//   });
// };
// // LOGIN
// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, failureDetails) => {
//     // Check if errors
//     if (err) next(new Error(`Something went wrong`));
//     if (!user) next(failureDetails);
//     // Return user and logged in
//     login(req, user).then(user => res.status(200).json(req.user));
//   })(req, res, next);
// });

// // SIGNUP
// router.post("/signup", (req, res, next) => {
//   console.log(req.body);

//   const { username, email, password } = req.body;
//   //None empty
//   if (!username || !password || !email) {
//     next(new Error(`Please provide all fields`));
//   }
//   //If user already exists
//   User.findOne({ username })
//     .then(userFounded => {
//       if (userFounded) throw new Error(`The username already exists`);

//       const salt = bcrypt.genSaltSync(10);
//       const hashPass = bcrypt.hashSync(password, salt);

//       return new User({
//         username,
//         email,
//         password: hashPass
//       }).save();
//     })
//     .then(savedUser => login(req, savedUser)) //login user using passport
//     .then(user => res.json({ status: `signedup and loggedin`, user })) //Answer JSON
//     .catch(e => next(e));
// });

// router.post("/logout", function(req, res) {
//   req.logout();
//   res.status(200).json({ message: "Success" });
// });

// router.post("/loggedin", function(req, res) {
//   if (req.isAuthenticated()) {
//     return res.status(200).json(req.user);
//   }

//   return res.status(403).json({ message: "Unauthorized" });
// });

// module.exports = router;
