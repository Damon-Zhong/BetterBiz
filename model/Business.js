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
    url: {
        type: String,
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
    highlight:[{
        type: String
    }],
    yelpId: {
        type: String
    },
    ownDelivery: {
        type: Boolean
    }
});

const Business = mongoose.model('Business', BusinessSchema);

module.exports = Business;

