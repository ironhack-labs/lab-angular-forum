const express  = require('express');
const passport = require('passport');
const router   = express.Router();
const User     = require('../../models/user.model');
const bcrypt   = require('bcrypt');

const logInPromise = (user, req) => new Promise((resolve,reject) => {
  req.login(user, (err) => {
      if (err) return reject('Something went wrong');
      resolve(user);
    });
}); 

router.post('/login', (req, res, next) => {
  const {username, password} = req.body;

  if (!username || !password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  User.findOne({ username })
  .then( user => {
      if(!user) throw new Error('The username does not exist');
      if(!bcrypt.compareSync(password, user.password)) throw new Error('The password is not correct');
      return logInPromise(user,req);    
  })
  .then(user => res.status(200).json(user))
  .catch(e => res.status(500).json({message:e.message}));

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
