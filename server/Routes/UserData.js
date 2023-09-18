// userDataRoute.js
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const SignupModel = require("../models/Signup");
const dotenv = require("dotenv");

dotenv.config();

router.get("/", async (req, res) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
      // console.log(err);
      if (err) {
        return "token expired";
      }
      return res;
    });
    if (decoded === "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }
    const user = await SignupModel.findOne({ _id: decoded.id });
    if (!user) {
      return res.json({ message: "User not found" });
    }

    return res.json({
      status: "success",
      message: "User data retrieved",
      username: user.username,
      email: user.email,
      license_number: user.license_number, // use this later if needed!
    });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Error retrieving user data" });
  }
});

module.exports = router;
