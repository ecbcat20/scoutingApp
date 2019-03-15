const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/scoutingAppDB').catch((err) => {
    console.log(err);
});

const morgan = require('morgan');
const cors = require('cors');

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


app.listen(3000, () => {
    console.log("Listening on localhost:3000");
})