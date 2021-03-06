const express = require("express");
const router = express.Router();
const passport = require("passport");
const local = require("passport-local");
const User = require("../../models/User");




// @route   GET api/users/me
// @desc    Shows user profile
// @access  public
router.get('/me', (req, res) => {
    console.log("User:")
    console.log(req.user)
    res.send(req.user)
})

// @route   POST api/users/register
// @desc    Registers a user
// @access  public

router.post("/register", (req, res) => {
  User.register(
    new User({ username: req.body.username, displayName: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.send({ fail: err });
      } else {
        passport.authenticate("local")(req, res, function () {
          return res.send(user);
        });
      }
    }
  );
});

// @route   POST api/users/login
// @desc    user log in route
// @access  public

router.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    console.log('hello')
      if (err) throw err
      // if no user found or password doesn't match etc
      if (!user) {
          res.status(401).send({name: "Incorrect Credentials", message: "The details you have entered are not correct"})
      } else {
          // log in the user through the request object
          req.logIn(user, err => {
            console.log('hi')
              if (err) throw err
              res.send(req.user)
          })
      }
  })(req, res, next)
})

// @route   Get api/users/logout
// @desc    Logs out user
// @access  public

router.get('/logout', (req, res) => {
    req.logOut()
    res.sendStatus(200)
})


// @route   GET api/users/auth/google
// @desc    Oauth google route
// @access  Public
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

// Google Oauth Callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    User.create(
      { googleId: req.user.id, displayName: req.user.displayName },
      function (err, user) {
        if (err) {
          User.findOne({ googleId: req.user.id }, function (err, user) {
            res.redirect("https://equippedvr.com/");
          });
        } else {
          res.redirect("https://equippedvr.com/");
        }
      }
    );
  }
);

module.exports = router;
