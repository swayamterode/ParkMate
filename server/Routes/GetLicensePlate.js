// LicensePlate.js
const express = require("express");
const router = express.Router();
const SignupModel = require("../models/Signup"); // Import the model from the Signup.js file

// Define the route for getting the license plate number
router.get("/", async (req, res) => {
  // get the userId from the request query
  const userId = req.query.userId;

  try {
    // Find the user by id
    const user = await SignupModel.findOne({ _id: userId });

    // Check if the user exists
    if (!user) {
      return res.json({ message: "User not found" });
    }

    // Check if the user has registered a vehicle
    if (!user.license_number) {
      return res.json({ message: "No vehicle registered for this user" });
    }

    // Return the license number
    return res.json({ license_number: user.license_number });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Something went wrong" });
  }
});

module.exports = router;
