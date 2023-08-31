const express = require("express"); // Express
const mongoose = require("mongoose"); // MongoDB
const cors = require("cors"); // Cross Origin Resource Sharing
const dotenv = require('dotenv'); // Dotenv

const app = express(); // Express app

app.use(express.json()); // Use JSON
app.use(cors()); // Use CORS

const SignupModel = require("./models/Signup"); // Signup Model
mongoose.connect("mongodb://127.0.0.1:27017/parkmate"); // Connect to MongoDB

app.post('/user_info', (req, res) => {
    SignupModel.create(req.body)
        .then(signup => res.json(signup))
        .catch(err => res.json(err))
})

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    SignupModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (password === user.password) {
                    res.json("Success")
                } else {
                    res.json("Wrong Password")
                }
            } else {
                res.json("User does not exist")
            }
        })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
