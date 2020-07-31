const yelp = require('./apiRoute')
const orm = require('../connection/orm')
const path = require('path')

function router( app ){
    //[GET] general serach by term
    app.get('/businesses', async ( req, res ) => {
        const location = req.query.location
        const term = req.query.term
        const results = await yelp.generalSearch(location, term)
        res.send(results) //send back yelp ID for later use
    })
    //[GET] match business by yelp ID
    app.get('/businessess/:id', async( req, res ) => {
        const yelpID = req.params.id
        const results = await yelp.getBusById(yelpID)
        res.send(results)
    })

    app.get('/businesses/:businessName', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '/client/build/index.html'));
    })

    app.get('/api/businesses/:businessUrl', async (req, res) => {
        const renderData = await orm.readBusiness(req.params.businessUrl);
        res.send({status: 200, ...renderData });
    })
    //[POST] save user credentials
    app.post('/api/register', async ( req, res ) => {
        const isExist = await orm.findUser(req.body.email) //return true/false
        if(isExist) {
            res.send({status:"exists"}) //
        }else{
            const userId = await orm.registerUser(req.body)
            res.send({status:'new', message:"Register successfully!", insertId:userId._id })
        }
    })
    //[GET] login user
    app.get('/api/login', async ( req, res )=>{
        const userEmail = req.query.email
        const userPwd = req.query.pwd
        const matchUser = await orm.matchUser( userEmail, userPwd )
        if(matchUser !== ' '){
            res.send({isMatch:true, body:matchUser})
        }else{
            console.log(`Login FAILED`)
            res.send({isMatch:false, body:' '})
        }
    })
    //[POST] submit business information
    app.post('/api/submit', async ( req, res ) => {
        if( !req.body.busType || !req.body.name ){
            res.send({status:false, message:'Business Type and Name is required.'})
        }else{
            const busData = {
                busType: req.body.busType,
                name: req.body.name,
                address:{
                    address1: req.body.address,
                    city: req.body.city,
                    country: req.body.country,
                    postalCode: req.body.postalCode
                },
                attributes: req.body.attributes.split(',')
            }
            await orm.insertBusiness(busData)
            res.send({status:true, message:'Success'})
        }
    })
}

module.exports = router;