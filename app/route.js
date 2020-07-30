const yelp = require('./apiRoute')
const orm = require('../connection/orm')
// const path = require('path')

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