const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    license_number: [String],
  },
  {
    collection: "user_details",
  }
);

const SignupModel = mongoose.model("user_details", SignupSchema);
module.exports = SignupModel;
