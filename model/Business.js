const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    busType: {
        type: String,
        trim: true,
        required: 'Business type is Required'
    },
    name: {
        type: String,
        trim: true,
        required: 'Business name is Required'
    },
    image: {
        type: String,
    },
    address:{
        city: String,
        country: String,
        address1: String,
        zipCode: String
    },
    attributes:[{
        type: String
    }]
});

const Business = mongoose.model('Business', BusinessSchema);

module.exports = Business;

