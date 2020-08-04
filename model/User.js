const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // type: {
    //     type: String,
    //     required: true },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email:  {
        type: String,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    // authId: { type: String, default: '' },
    // password:  { type: String, trim: true },
    session: { type: String, default: '' },

}, {
    timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
});

const User = mongoose.model('User', UserSchema)

module.exports = User

