const express = require("express");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./config/index");
const chalk = require("chalk");
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
