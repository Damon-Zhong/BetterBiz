const mongoose = require( 'mongoose' )
const Yelp = require( '../app/apiRoute')
const bcrypt = require('bcrypt')

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
        const user = await db.User.find({email: userEmail})
        return user
    },

    registerUser: async (userInfo, session) =>{
        //hashing password
        const passwordHash = await bcrypt.hash(userInfo.password, 10)
        const userData = {
            email: userInfo.email,
            password: passwordHash,
            firstName: userInfo.firstName,
            lastName: userInfo.LastName,
            session:session}
        await db.User.create(userData)
        const user = await db.User.findOne({email: userData.email})
        return user
    },

    matchUser: async (userEmail, userPwd) => {
        const user = await db.User.findOne({email: userEmail, password:userPwd})
        if( user !== null ){
            return user
        }else{
            return ' '
        }
    }
}

module.exports = orm;
