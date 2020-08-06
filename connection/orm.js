const mongoose = require( 'mongoose' );
const Yelp = require( '../app/apiRoute');
const bcrypt = require('bcrypt');
var Filter = require('bad-words'),
    filter = new Filter();

mongoose.connect(process.env.MONGODB_URI|| 
    'mongodb://damon:Heroku1021@ds117859.mlab.com:17859/heroku_ns0kn10t', 
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

// include mongoose models
const db = require( '../model' )
const categoryList = ['Restaurant', 'Shop', 'Service', 'Leisure', 'Culture']

const orm = {
    getAllBusinesses: async () => {
        await db.Business.find({})
    },

    getBusByAttribute: async (category) => {
        //if category is one of the business type return 
        // if( categoryList.indexOf(category)>-1 ){
        const DBresult = await db.Business.find({ $or:[{busType: category},{hightlight: category}] })
        return DBresult
    },

    insertBusiness: async (busData) => {
        const returnBusiness = await db.Business.findOne({yelpId: busData.yelpId});
        if(returnBusiness){
            throw new Error('This business already exists. Each business can only be added once to BetterBiz.');
        } else {
            console.log('[insertBusiness] Data received:', busData)
            await db.Business.create(busData)
        }
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
            type: userInfo.type,
            email: userInfo.email,
            password: passwordHash,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            session:session}
        const newUser = await db.User.create(userData)
        if( newUser._id ){
            return {
                isExist: false,
                messgae:`Success! ${newUser.email} was successfully registered`,
                type: newUser.type,
                id:newUser._id,
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
            const passwordHash = await bcrypt.hash(userPwd, 10)
            await db.User.updateOne({email: userEmail},{password: passwordHash })
            return true
        }else{
            return false
        }
    },

    loginUser: async function (userData, session){
        //check user type
        //if user type is one of the providers return provider information
        if( userData.type === 'facebook'||userData.type === 'google'||userData.type === 'twitter'){
            const returnUser = await db.User.findOne({firstName: userData.firstName})
            console.log(`Return user from ${userData.type}: ${returnUser}`)
            if( !returnUser ){
                await db.User.create(userData)
            }
            return {
                isLogin: true,
                message: `Successfully Logging in! with ${userData.type}`,
                type: userData.type,
                id: userData.authId,
                name: userData.firstName,
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
            type: userDB.type,
            id: userDB._id,
            name: userDB.firstName,
            email: userDB.email,
            session: userDB.session,
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
        const dataToSubmit = {
            ...reviewData,
            review: {
                ...reviewData.review, 
                body: filter.clean(reviewData.review.body)
            }
        }
        await db.Review.create(dataToSubmit);
        const reviews = await db.Review.aggregate([
            { '$match': {
                userId: dataToSubmit.userId,
                businessId: dataToSubmit.businessId,
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
    },

    submitEvent: async (eventInput) => {
        console.log(`[submitEvent] data received: ${eventInput}`)
        const newEvent = await db.Event.create(eventInput)
        return newEvent
    }
}

module.exports = orm;
