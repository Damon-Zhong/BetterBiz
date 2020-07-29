// const yelp = require('./apiRoute')

function router( app ){
    //[GET] yelp results
    // app.get('/api/yelp', async ( req, res ) => {
    //     const result = await yelp()
    //     console.log(result)
    //     res.send(result)
    // })
    // app.get('/api/words', async function(req, res) {
    //     console.log( '[GET] getting word')

    //     res.send( list )
    // })

    // app.post( '/api/words', async function( req, res ){
    //     console.log( '[POST /api/words] req.body: ', req.body )

    //     const saveResult = { _id: true }
    //     console.log( '[POST /api/dogs] saveResult: ', saveResult )

    //     if( saveResult._id ){
    //         res.send( { status: true, message: 'Dog saved' } )
    //     } else {
    //         res.send( { status: false, message: 'Someting went wong' } )
    //     }

    // })
}

module.exports = router