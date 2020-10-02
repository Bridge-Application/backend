const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInformationSchema = new Schema({
    //Format: month.date.year
    dob: {
        type: String,
        required: true,
    },
    //Kilograms
    weight: {
        type: Number,
        required: true,
    },
    //True, false
    smoke: {
        type: Boolean,
        required: true,
    },
    //Single ethnicity string
    ethnicity: {
        type: String,
        required: true,
    },
    //Male or female
    sex: {
        type: String,
        required: true,
    },
    //True or false
    diabetes: {
        type: Boolean,
        required: true,
    },
    //Employed, unemployed, or student
    status: {
        type: String,
        required: true,
    },
    //Patient code
    code: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('accountInformations', userInformationSchema);