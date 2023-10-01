const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI; // Load MongoDB Atlas connection string from .env file

// Connect to MongoDB with Mongoose - don't touch this code
const mongoDB = async () => {
  try {
    mongoose
      .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("Connected to MongoDB 🚀🔥");
      });
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
};

module.exports = mongoDB;