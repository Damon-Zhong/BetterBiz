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

    registerUser: async function (userInfo, session=''){
        //check duplicate user
        const duplicateUser = await db.User.findOne({ email: userInfo.email })
        if(duplicateUser){
            return {isExist:true, message:'This email has been registered, please log in instead.', session:false}
        }
        //hashing password
        const passwordHash = await bcrypt.hash(userInfo.password, 10)
        const userData = {
            email: userInfo.email,
            password: passwordHash,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            session:session}
        const newUser = await db.User.create(userData)
        // const user = await db.User.findOne({email: userData.email})
        if( newUser._id ){
            return {
                isExist: false,
                messgae:`Success! ${newUser.email} was successfully registered`,
                firstName: newUser.firstName,
                email: newUser.email,
                session
            }
        }else{
            return {
                isExist: false,
                message:'Registration failed',
            }
        }
    },

    updateUser: async(userEmail, userPwd)=>{
        const updateUser = await db.User.findOne({email: userEmail})
        console.log(updateUser)
        if(updateUser){
            await db.User.updateOne({email: userEmail},{password: userPwd })
            return true
        }else{
            return false
        }
    },

    loginUser: async function (userData, session){
        //check user type
        //if user type is one of the providers return provider information
        if( userData.type !== 'Customer'){
            return {
                isLogin: true,
                message: `Successfully Logging in! with ${userData.type}`,
                id: userData.authId,
                name: userData.name,
                session: userData.session
            }
        }
        if( !session ){
            return { isLogin:false, message:'System session not provided!'}
        }
        //check if email exsits
        const userDB = await db.User.findOne({ email: userData.email }, '-createdAt -updatedAt')
        if( !userDB ) {
            return { isLogin: false, message: 'Email does not exsit. Please sign up.' }
        }
        //compare crypted password
        const isValidPassword = await bcrypt.compare( userData.password, userDB.password )
        if( !isValidPassword ) {
            return { isLogin: false, message: 'Invalid password' }
        }
        //update user session
        await db.User.findOneAndUpdate({ _id: userDB._id},{ session: session})
        //return user information with session
        return {
            isLogin: true,
            message: 'Successfully Logging in!',
            id: userDB._id,
            name: userDB.firstName,
            email: userDB.email,
            session: userDB.session,
            // createdAt: userDB.createdAt
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
