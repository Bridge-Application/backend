const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userModel = require('../../schemas/userSchema');
const userInformationModel = require('../../schemas/userInformationSchema')

//Create a new account
router.post('/new', async (req, res) => {
    try {
        //Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 6,);
        //Create model
        const newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        //Save model to the databse
        await newUser.save();
        //Send 200 response back to client
        res.status(200).send();
    } catch (error) {
        console.log(error);
        //send 500 response back to client
        res.status(500).send();
    };
});

//Add information associated with the user
router.post('/information', async (req, res) => {
    try {
        const newUserInformation = new userInformationModel({
            dob: req.body.dob,
            weight: req.body.weight,
            smoke: req.body.smoke,
            ethnicity: req.body.ethnicity,
            gender: req.body.gender,
            diabetes: req.body.diabetes,
            status: req.body.status,
        });

        await newUserInformation.save();
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});
router.get('/', (req, res) => {
    res.send('Hit the page');
});

module.exports = router;