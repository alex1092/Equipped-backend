const express =require('express')
const router = express.Router()
const passport = require('passport')
const User = require("../../models/User");

// @route   GET api/users
// @desc    READ user route 
// @access  public
router.get('/', (req, res) => res.send('GET - User router'))

// @route   POST api/users/create
// @desc    CREATE user route
// @access  public

// router.get('/create', (req, res) => res.send('CREATE - User router'))

// @route   PUT api/users/create
// @desc    UPDATE user route
// @access  public


// router.get('/update', (req, res) => res.send('UPDATE - User router'))

// @route   DELETE api/users/create
// @desc    DELETE user route
// @access  public

// router.get('/delete', (req, res) => res.send('DELETE - User router'))


// router.get('/add', (req, res) => res.send('User router'))

  
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  );
  
  router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/failed" }),
    function (req, res) {
      User.create(
        { googleId: req.user.id, displayName: req.user.displayName },
        function (err, user) {
          if (err) {
            User.findOne({ googleId: req.user.id }, function (err, user) {
              res.redirect("https://elated-tesla-903010.netlify.app");
            });
          } else {
            res.redirect("https://elated-tesla-903010.netlify.app");
          }
        }
      );
    }
  );

module.exports = router