const express = require("express");
const router = express.Router();
const SignupModel = require("../models/Signup");

router.post("/", async (req, res) => {
    const { license_number, userId } = req.body;

    try {
        //  Find the user by id
        const user = await SignupModel.findOne({ _id: userId });

        // Check if the user exists
        if (!user) {
            return res.json({ message: "User not found" });
        }

        // Capitalize the license number
        const capitalizedLicenseNumber = license_number.toUpperCase();

        // Check if the license number is already associated with the user
        if (user.license_number.includes(capitalizedLicenseNumber)) {
            return res.json({ message: "Vehicle already registered for this user" });
        }

        // if the license number != 10 characters
        if (capitalizedLicenseNumber.length != 10) {
            return res.json({ message: "Invalid License number plate!" });
        }

        // check first 2 characters of the license number are letters
        const firstTwoLetters = capitalizedLicenseNumber.substring(0, 2);
        // check 3rd and 4th characters of the license number are numbers
        const thirdAndFourthLetters = capitalizedLicenseNumber.substring(2, 4);
        // check 5th and 6th characters of the license number are letters
        const fifthAndSixthLetters = capitalizedLicenseNumber.substring(4, 6);
        // check last 4 characters of the license number are numbers
        const lastFourLetters = capitalizedLicenseNumber.substring(6, 10);

        const letters = /^[A-Z]+$/; // regex for capital letters
        const digits = /^[0-9]+$/; // regex for digits

        // 1st and 2nd char are letters
        if (!firstTwoLetters.match(letters)) {
            return res.json({
                message: `(-- XX XXXX) ➡️ Replace "--" with your State Code!`,
            });
        }

        // 3 and 4th char are numbers
        if (!thirdAndFourthLetters.match(digits)) {
            return res.json({
                message: `Not a valid license number!`,
            });
        }

        // 5 and 6th char are letters
        if (!fifthAndSixthLetters.match(letters)) {
            return res.json({
                message: `Not a valid license number!`,
            });
        }

        // Last 4 are number
        if (!lastFourLetters.match(digits)) {
            return res.json({
                message: "Not a valid license number!",
            });
        }

        user.license_number.push(capitalizedLicenseNumber);
        await user.save(); // Save the updated user record

        res.send({ message: "Vehicle Registered" });
    } catch (err) {
        console.log(err);
        res.send({ message: "Error registering vehicle" });
    }
});

module.exports = router;
