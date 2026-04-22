const { Schema } = require("mongoose");

const SignUp = new Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  mobile: String,
});

module.exports = { SignUp };