const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Event name is Required'
    },
    description: {
        type: String,
    },
    image: {
        type: String
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    location: {
        type: String
    },
    isFree:{
        type: Boolean
    },
    createBy:{
        type:String
    }
},
{
    timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
}
);

const Event = mongoose.model('Event', EventSchema)

module.exports = Event