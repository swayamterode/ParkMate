const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const SignupModel = require("./models/Signup");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI; // Load MongoDB Atlas connection string from .env file

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

//   The register route is working  dont touch this code✅
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 10);
  try {
    const oldUser = await SignupModel.findOne({ email });
    if (oldUser) {
      return res.json({ message: "User already exists" });
    }
    
    await SignupModel.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    res.send({ message: "User Created" });
  } catch (err) {
    res.send({ message: "Error creating user" });
  }
});

app.post("/login", async (req, res) => {
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
    expiresIn: 3600,
  });

  return res.status(200).json({ success: true, message: "Login successful", token: token });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
