const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require("./config/index");
const chalk = require("chalk");
const User = require("./models/User")



passport.serializeUser((user, callback) => {
    callback(null, user);
  });
  
  passport.deserializeUser((user, cb) => {
    cb(null, user);
  });

  // passport.use(User.createStrategy())

  // Google Strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.GOOGLE.clientID,
        clientSecret: keys.GOOGLE.clientSecret,
        callbackURL: "/api/users/auth/google/callback",
      },
      (accessToken, refreshToken, profile, callback) => {
        console.log(chalk.green(JSON.stringify(profile)));
        user = { ...profile };
        return callback(null, profile);
      }
    )
  );



  