const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    if (req.body.password){
        userInput = req.body.password;
        if (userInput == process.env.PASSWORD) {
            res.send({
                success: true
        
            });
        } else {
            res.status(401).send({
                success: false
            })
        }
    } else {
        res.send({
            error: "no data recieved"
        });
    }
});

module.exports = router;