const mongoose = require( 'mongoose' )
const Yelp = require( '../app/apiRoute')

mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost/betterbiz', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

// include mongoose models
const db = require( '../model' )

const orm = {
    getAllBusinesses: async () => {
        await db.Business.find({})
    },

    // getBusinessByName: async () => {

    // },

    insertBusiness: async (busData) => {
        console.log('[insertBusiness] Data received:', busData)
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
    },

    findUser: async (userEmail) => {
        const user = await db.User.findOne({email: userEmail})
        return user ? true:false
    },

    registerUser: async (userData) =>{
        console.log('[registerUser] Data received:', userData)
        await db.User.create(userData)
        const userID = await db.User.findOne({email: userData.email}, '_id')
        return userID
    },

    matchUser: async (userEmail, userPwd) => {
        const user = await db.User.findOne({email: userEmail}) //this becomes null if we couldn't match any user
        if( user !== null ){
            return user.password === userPwd ? true : false
        }else{
            return false
        }
    }
}

module.exports = orm;
