const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).catch((err) => {
    console.log("Error in database connection: " + err);
});
const morgan = require('morgan');
const cors = require('cors');


app.use(express.json());