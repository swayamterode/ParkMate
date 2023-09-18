// loginRoute.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SignupModel = require("../models/Signup");
const dotenv = require("dotenv");

dotenv.config();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await SignupModel.findOne({ email });

  if (!user) {
    return res.json({ success: false, message: "User does not exist" });
  }

  // Compare the provided password with the user's stored hashed password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.json({ success: false, message: "Incorrect password" });
  }

  // Generate and send a JWT token on successful login
  const payload = {
    id: user.id,
    username: user.username,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return res.json({
    success: true,
    message: "Login successful",
    token: token,
    userId: user.id,
  });
});

module.exports = router;
