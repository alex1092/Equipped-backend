const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require("./models/User");
const keys = require("./config/index");
const chalk = require("chalk");


passport.serializeUser((user, callback) => {
    callback(null, user);
  });
  
  passport.deserializeUser((user, cb) => {
    callback(null, user);
  });
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