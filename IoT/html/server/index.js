const { exec } = require('child_process');
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require('fs');

dotenv.config(); // Initialize dotenv

// Initialize the app
const app = express();
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors()); // To allow cross-origin requests

// Database Connection 👍
const mongoDB = require("./Database/db");
mongoDB();

const SlotBooking = require("./models/SlotBooking");

// Function to process each license number
const processLicenseNumber = (licenseNumber) => {
  SlotBooking.findOne({ "booking_details.vehicleRegistered": licenseNumber })
    .then((booking) => {
      if (booking) {
        // License number exists in the database
        console.log(`License number ${licenseNumber} exists in the database. Activating servo motor.`);
        // TODO: activate servo motor
        exec('python servo_control.py', (error, stdout, stderr) => {
          if (error) {
            console.error(`Servo_control.py has ERROR: ${error.message}`);
            return;
          }

          console.log(`servo_control.py stdout: ${stdout}`);
          console.error(`servo_control.py stderr: ${stderr}`);
        });
      } else {
        console.log(`License number ${licenseNumber} does not exist in the database. So the servor motor does not START!!!`);
      }
    })
    .catch((error) => console.error("MongoDB Error --> Error checking license number:", error));
};

// Read license numbers from the file and process them
const licenseNumbers = fs.readFileSync("/var/www/html/app/license_number.txt", "utf-8").split("\n");

// Seachres for every updated license_number
for (const licenseNumber of licenseNumbers) {
  processLicenseNumber(licenseNumber);
}

// Protected Route
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
