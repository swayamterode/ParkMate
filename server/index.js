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
const registerRoute = require("./Routes/Register");
const loginRoute = require("./Routes/Login");
const vehicleRegistrationRoute = require("./Routes/VechicleRegistration");
const userDataRoute = require("./Routes/UserData");
const licensePlateRoute = require("./Routes/GetLicensePlate"); // Require the new route
const deleteLicensePlateRoute = require("./Routes/DeleteLicensePlate"); // Require the new route

// Middleware
app.use("/user-data", userDataRoute);
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/vehicle-registration", vehicleRegistrationRoute);
app.use("/get-license-plate", licensePlateRoute);
app.use("/delete-license-plate", deleteLicensePlateRoute);

// Protected Route
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
