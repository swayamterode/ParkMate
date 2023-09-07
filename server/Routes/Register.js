// registerRoute.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const SignupModel = require("../models/Signup");

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 10);
  
  try {
    const oldUser = await SignupModel.findOne({ email });
    if (oldUser) {
      return res.json({ message: "User already exists" });
    }

    const newUser = await SignupModel.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    res.send({ message: "User Created", userId: newUser._id });
  } catch (err) {
    res.send({ message: "Error creating user" });
  }
});

module.exports = router;
