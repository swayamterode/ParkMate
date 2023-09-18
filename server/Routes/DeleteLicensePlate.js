const express = require("express");
const router = express.Router();
const SignupModel = require("../models/Signup");

router.delete("/", async (req, res) => {
  try {
    const { userId, licenseNumber } = req.query; // 🧵I was passing as req.body, but it should be req.query

    // Find the user's license plate and remove the specified licenseNumber
    const userLicensePlate = await SignupModel.findOne({ _id: userId });

    if (!userLicensePlate) {
      return res.json({ message: "User not found" });
    }

    if (!userLicensePlate.license_number.includes(licenseNumber)) {
      return res.json({ message: "License plate not found" });
    }

    userLicensePlate.license_number = userLicensePlate.license_number.filter(
      (plate) => plate !== licenseNumber
    );

    await userLicensePlate.save();
    res.json({ message: "License Plate Deleted" });
  } catch (error) {
    console.error("Error deleting license plate:", error);
    res.json({ message: "Internal server error" });
  }
});

module.exports = router;
