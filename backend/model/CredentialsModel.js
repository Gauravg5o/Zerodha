const { model } = require("mongoose");

const { SignUp } = require("../schemas/Credentials");

const SignUpModel = model("credential", SignUp);

module.exports = { SignUpModel };