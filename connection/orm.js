const mongoose = require( 'mongoose' );
const Yelp = require( '../app/apiRoute');

mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost/betterbiz', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

// include mongoose models
const db = require( '../model' );

const orm = {
    getAllBusinesses: async () => {
        await db.Business.find({})
    },

    // getBusinessByName: async () => {

    // },

    insertBusiness: async (busData) => {
        console.log('Data received:', busData)
        await db.Business.create(busData)
    },

    readBusiness: async (businessUrl) => {
        const businesses = await db.Business.find({url: businessUrl});

        if (businesses.length) {
            const businessData = businesses[0];
            const yelpData = await Yelp.yelpBusinessResult(businessData.yelpId);
            return { businessData, yelpData };
        }

        return { businessData: {} };
    }
}

module.exports = orm;
