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
    summary: {
        type: String
    },
    highlight:[{
        type: String
    }],
    yelpId: {
        type: String
    },
    website: {
        type: String
    },
    ownDelivery: {
        type: Boolean
    },
    deliveryWebsite: {
        type: String
    }
});

const Business = mongoose.model('Business', BusinessSchema)

module.exports = Business