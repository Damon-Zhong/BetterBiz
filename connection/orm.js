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
        const user = await db.User.find({email: userEmail})
        return user
    },

    registerUser: async (userData) =>{
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
    },

    getReviews: async (businessId) => {
        // const reviews = await db.Review.find({businessId: businessId});
        const reviews = await db.Review.aggregate([
            { '$match': {
                businessId: businessId
            }
            },
            { '$lookup': {
                'let': { 'userObjId': { '$toObjectId': '$userId' } },
                'from': 'users',
                'pipeline': [
                    { '$match': { '$expr': { '$eq': [ '$_id', '$$userObjId' ] } } }
                ],
                'as': 'userDetails'
            }},
            { '$project': {
                '_id': 1,
                'review': 1,
                'createdAt': 1,
                'userDetails.firstName': 1,
                'userDetails.lastName': 1
            }
            }
        ])
        return reviews;
    },

    submitReview: async (reviewData) => {
        // Limiting to 1 review per business and user
        // Step 1: Looking if user has already submitted a review for that business
        const existingReview = await db.Review.findOne({userId: reviewData.userId, businessId: reviewData.businessId});
        // If it exists, our function returns (cancelling submission)
        if(existingReview){
            return {existingReview: true};
        }
        // If it does not exist yet, we'll create a new review
        await db.Review.create(reviewData);
        const reviews = await db.Review.aggregate([
            { '$match': {
                userId: reviewData.userId,
                businessId: reviewData.businessId,
            }
            },
            { '$lookup': {
                'let': { 'userObjId': { '$toObjectId': '$userId' } },
                'from': 'users',
                'pipeline': [
                    { '$match': { '$expr': { '$eq': [ '$_id', '$$userObjId' ] } } }
                ],
                'as': 'userDetails'
            }},
            { '$project': {
                '_id': 1,
                'review': 1,
                'createdAt': 1,
                'userDetails.firstName': 1,
                'userDetails.lastName': 1
            }
            }
        ])
        return reviews[0];
    }
}

module.exports = orm;
