const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Initialize dotenv

// Initialize the app
const app = express();
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors()); // To allow cross-origin requests

// Database Connection 👍
const mongoDB = require("./Database/db");
mongoDB();

// Models
const SignupModel = require("./models/Signup"); // Import the model from the Signup.js file

//  Routes
const registerRoute = require("./Routes/Register"); // Register route
const loginRoute = require("./Routes/Login"); // Login route
const vehicleRegistrationRoute = require("./Routes/VechicleRegistration"); // Vehicle registration route
const userDataRoute = require("./Routes/UserData"); // User data route
const licensePlateRoute = require("./Routes/GetLicensePlate"); // Get license plate route
const deleteLicensePlateRoute = require("./Routes/DeleteLicensePlate"); // Delete license plate route
const slotsBookingRoute = require("./Routes/Slots"); // Slot booking route
const getSlotsLeftRoute = require("./Routes/GetSlotsLeft"); // Get slots left route

// Middleware
app.use("/user-data", userDataRoute); // User data route
app.use("/register", registerRoute); // Register route
app.use("/login", loginRoute); // Login route
app.use("/vehicle-registration", vehicleRegistrationRoute); // Vehicle registration route
app.use("/get-license-plate", licensePlateRoute); // Get license plate route
app.use("/delete-license-plate", deleteLicensePlateRoute); // Delete license plate route
app.use("/slot-booking", slotsBookingRoute); // Slot booking route
app.use("/getSlotsLeft", getSlotsLeftRoute); // Get slots left route

// Protected Route
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
