const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    type: {
        type: String,
        default: 'Customer' },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email:  {
        type: String,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    password: {
        type: String,
        trim: true
    },
    authId: { type: String, default: '' },
    session: { type: String, default: '' },

}, {
    timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
});

const User = mongoose.model('User', UserSchema)

module.exports = User

