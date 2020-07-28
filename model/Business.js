const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Business name is Required"
    },
    image: {
        type: String,
    },
    address:{
        city: String,
        country: String,
        address1: String,
        zip_code: String
    },
    hightlight:[String]
});

const Business = mongoose.model("Business", BusinessSchema);

module.exports = Business;
