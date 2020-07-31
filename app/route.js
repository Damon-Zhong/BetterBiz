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
        res.status(200).send(...renderData );
    })
    //[POST] save user credentials
    app.post('/api/register', async ( req, res ) => {
        const user = await orm.findUser(req.body.email)
        if(user.length !== 0) {
            res.send( { isExist: true, body: user })
        }else{
            const userNew = await orm.registerUser(req.body)
            res.send( { isExist: false, body: userNew })
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
            console.log('Login FAILED')
            res.send({isMatch:false, body:' '})
        }
    })
    //[PUT] change password
    app.put('/api/changepassword', async ( req, res ) => {
        console.log(`[PUT] change password: ${req.body}`)

        const result = await orm.updateUser(req.body.email, req.body.password)
        res.send(result)
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