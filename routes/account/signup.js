//SIGN UP ROUTE

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const sha256 = require('crypto-js/sha256');
const userModel = require('../../schemas/userSchema');
const userInformationModel = require('../../schemas/userInformationSchema');
const institutionVerificationModel = require('../../schemas/institutionVerificationModel');

router.get('/', (req, res) => {
    res.send("You've hit the /account route");
})

router.post('/signup', async (req, res) => {
    try {

        
        //Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 6);
        //Create model
        const newUser = new userModel({
            firstName: req.body.firstName, 
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
        });
        //Save model to the databse
        await newUser.save();
        //Send 200 success response back to client
        res.status(200).send("account created");
    } catch (error) {
        //Error indicates duplicate email
        if(error.keyValue.email){
            res.status(409).send("Duplicate email detected");
            return;
        }
        //Send back generic error response
        //send 500 response back to client
        res.status(500).send(error);
    }
});

//Patient information
router.post('/information', async (req, res) => {
    try {
        //Check to see if code is valid
        const code = sha256(req.body.firstName + req.body.lastName + req.body.institutionName + process.env.SALT);
        const shortenCode = code.toString().substring(0, 5);
        console.log(shortenCode);
        
        //Query institution database
        const query = await institutionVerificationModel.findOne({firstName: req.body.firstName, lastName: req.body.lastName, code: shortenCode});
        
        if(!query){
            throw "User does not exist"
        }
        
        const newUserInformation = new userInformationModel({
            dob: req.body.dob, //month.date.year
            weight: req.body.weight, //kilograms
            smoke: req.body.smoke, //true or false
            ethnicity: req.body.ethnicity, //single ethnicity
            sex: req.body.sex, //male or female
            diabetes: req.body.diabetes, //true or false
            status: req.body.status,
            institutionName: req.body.institutionName, //unemployed, employed, student
            code: req.body.code, //5 digit code provided by instutiton
        });

        await newUserInformation.save();
        res.status(200).send("Sucessfully added information");
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;