const express = require('express');
const app = express();

require('dotenv').config();

console.log(process.env.MONGO_URI, {useNewUrlParser:true});

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected");
}).catch(err => {
    console.log(err);
    console.group("Error. Exit with code 1");
});

const morgan = require('morgan');
const cors = require('cors');

const authRoutes = require("./auth/auth");

// Middleware
app.use(express.json());
app.use(morgan("combined"));
app.use(cors());


// Server test for functionality
app.get("/test", (req, res, next) => {
     res.json({
         message: "Test successful"
     })
 });

 app.post("/test", (req, res, next) => {
     console.log(req.body.testData);
     res.send({
         message: "Connected",
         sendData: req.body
     });
 });

app.use("/auth", authRoutes);


app.listen(3000, () => {
    console.log("Listening on localhost:3000");
    console.log("Enjoy your time here! Internet access will not be functional until you disconnect from our LAN");
})