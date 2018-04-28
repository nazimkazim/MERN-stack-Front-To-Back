const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
    require: true
  },
  avatar: {
    type: Date,
    require: Date.now
  }
});

module.exports = Users = mongoose.model("users", UserSchema);
