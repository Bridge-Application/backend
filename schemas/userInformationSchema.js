const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInformationSchema = new Schema({
    dob: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    smoke: {
        type: Boolean,
        required: true,
    },
    ethnicity: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    diabetes: {
        type: Boolean,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('accountInformations', userInformationSchema);