const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const User = require("./models/User");

require("./passport");

const connectDB = require("./config/db");
const app = express();

// Middleware
app.use(express.json({ extended: false }));
app.use(cors(
//   {
//   origin: "https://elated-tesla-903010.netlify.app",
//   credentials: true
// }
));

// Session saved session
app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  cookie: {
      maxAge: 3600
  }
}))

// Cookies session
app.use(cookieParser("secret"))
app.use(passport.initialize())
app.use(passport.session())

app.get('/failed', (req, res) => {
    res.send(400)
})



// Init passport
app.use(passport.initialize());


// Connect db
connectDB();

app.get("/", (req, res) => res.send("API running"));

// Define route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/products", require("./routes/api/products"));
app.use("/api/quotes", require("./routes/api/quotes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
