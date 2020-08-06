const yelp = require('./apiRoute')
const orm = require('../connection/orm')
const uuid = require('uuid')
var Filter = require('bad-words'),
    filter = new Filter();

const db = require( '../model' )

function router( app ){
    //[GET] business by category
    app.get('/api/businesses/:category', async ( req, res ) => {
        console.log( '[GET] business by category.....' )
        const category = req.params.category
        // const term = req.query.term
        const results = await orm.getBusByAttribute(category)
        res.send(results)
    })
    //[GET] match business by yelp ID
    app.get('/businessess/:id', async( req, res ) => {
        const yelpId = req.params.id
        const results = await yelp.getBusById(yelpId)
        res.send(results)
    })

    app.get('/api/businesses/:businessUrl', async (req, res) => {
        const renderData = await orm.readBusiness(req.params.businessUrl);
        res.status(200).send(renderData);
    })

    // [GET] get reviews from database
    app.get('/api/reviews/:businessId', async (req, res) => {
        const renderData = await orm.getReviews(req.params.businessId);
        res.status(200).send(renderData);
    })

    //[POST] save review
    app.post('/api/review', async (req, res) => {
        try {
            const reviewContent = await orm.submitReview(req.body);

            if (reviewContent.existingReview === true){
                res.status(403).send({
                    success: false,
                    message: 'You have already reviewed this business and cannot add additional reviews.',
                });
            } else {
                res.send({ success: true, body: reviewContent });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({ success: false, message: 'There has been an error saving your review. Please try again.' });
        }
    })

    //[POST] save user credentials
    app.post('/api/register', async ( req, res ) => {
        const userData = req.body;
        const registerResult = await orm.registerUser( userData );
        res.send( registerResult );
    })

    //[POST] login user
    app.post('/api/login', async ( req, res )=>{
        const userData = req.body
        //create a session for login
        const session = uuid.v4()
        const loginResult = await orm.loginUser( userData, session )
        res.send( loginResult )
    })
    //[PUT] change password
    app.put('/api/changepassword', async ( req, res ) => {
        console.log(`[PUT] change password: ${req.body}`)
        const result = await orm.updateUser(req.body.email, req.body.password)
        res.send(result)
    })
    //[POST] submit business name and city for suggestions
    app.post('/api/business/suggestion', async ( req, res ) => {
        console.log(`[POST] fetching suggestions for: ${req.body}`)
        const suggestList = await yelp.getSuggestionList(req.body)

        if (Array.isArray(suggestList)) {
            const yelpId = suggestList[0].id;
            // Check if we already have this business
            const returnBusiness = await db.Business.findOne({ yelpId });
            if(returnBusiness){
                res.send({ status: false, message: 'This business already exists. Each business can only be added once to BetterBiz.' });
            }
        }

        res.send(suggestList);
    })
    //[POST] submit business information
    app.post('/api/submit', async ( req, res ) => {
        if( !req.body.busType || !req.body.name ){
            res.send({status:false, message:'Business Type and Name is required.'})
        }else{
            const filteredData = filter.clean(req.body.summary);
            if(filteredData.includes('*')){
                res.send({status: false, message: 'We have detected that your summary contains words or characters that we do not accept on the platform. Please check your submission again.'})
            } else {
                try {
                    await orm.insertBusiness(req.body)
                    res.send({status:true, message:'Success'});
                } catch(error) {
                    res.send({status: false, message: error.toString()});
                }
            }
        }
    })

    //[POST] get events
    app.post('/api/events', async ( req, res )=>{
        const input = req.body
        const eventList = await yelp.getEvent(input)
        res.send(eventList)
    })

    //[POST] submit event (business user only)
    app.post('/api/event/submit', async ( req, res )=>{
        const eventInput = req.body
        console.log(`[POST] submit event - data received:${eventInput}`)
        const newEvent = await orm.submitEvent(eventInput)
        res.send(newEvent)
    })
}

module.exports = router;