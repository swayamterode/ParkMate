const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
    username: String,
    email: String,
    password:String,
}, {
    collection : "user_details"
});

const SignupModel = mongoose.model("signup", SignupSchema);
module.exports = SignupModel;
