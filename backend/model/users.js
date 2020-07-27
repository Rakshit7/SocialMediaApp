const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  mname: {
    type: String,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  handlename: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = users = mongoose.model("user", UserSchema);
