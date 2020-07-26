const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  displayName: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", UserSchema);
