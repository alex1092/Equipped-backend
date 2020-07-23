const express = require("express");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./config/index");
const chalk = require("chalk");

const User = require("./models/User");

const connectDB = require("./config/db");
const app = express();

// Require bodyParser
app.use(express.json({ extended: false }))

app.use(cors());
app.use(passport.initialize());



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
        callbackURL: "/auth/google/callback",
      },
      (accessToken, refreshToken, profile, callback) => {
        console.log(chalk.green(JSON.stringify(profile)));
        user = { ...profile };
        return callback(null, profile);
      }
    )
  );
  
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    User.create(
      { googleId: req.user.id, displayName: req.user.displayName },
      function (err, user) {
        if (err) {
          User.findOne({ googleId: req.user.id }, function (err, user) {
            res.redirect("http://localhost:3000");
          });
        } else {
          res.redirect("http://localhost:3000");
        }
      }
    );
  }
);




// Connect db
connectDB();

app.get("/", (req, res) => res.send("API running"));

// Define route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/products", require("./routes/api/products"));
app.use("/api/quotes", require("./routes/api/quotes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
