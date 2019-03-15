const express = require('express');
const app = express();

require('dotenv').config();

console.log(process.env.MONGO_URI, {useNewUrlParser:true});

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected");
}).catch(err => {
    console.log(err);
});

const morgan = require('morgan');
const cors = require('cors');

const authRoutes = require("./auth/auth");

// Middleware
app.use(express.json());
app.use(morgan("combined"));
app.use(cors());

/* Testing server */
// app.get("/test", (req, res, next) => {
//     res.json({
//         message: "Test successful"
//     })
// });

// app.post("/test", (req, res, next) => {
//     console.log(req.body.testData);
//     res.send({
//         message: "Works",
//         sendData: req.body
//     });
// });

app.use("/auth", authRoutes);


app.listen(3000, () => {
    console.log("Listening on localhost:3000");
})