const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    userId: {
        type: String
    },
    businessId: {
        type: String
    },
    review: {
        title: String,
        body: String
    }
},
{
    timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;