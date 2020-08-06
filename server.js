require( 'dotenv' ).config()
const mongoose = require( 'mongoose' );
const express = require('express')
const router = require('./app/route')
const orm = require('./connection/orm')
const uuid = require('uuid')
const app = express()
const PORT = process.env.PORT || 8080
const API_URL = process.env.NODE_ENV === 'production' ? 'https://betterbiz01.herokuapp.com/' : 'http://localhost:8080'
//connect to database
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/betterbiz',
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// OAUTH Authentication
async function createOAuthSession( userData ){
    console.log( '[createOAuthSession] called for', userData )
    const session = uuid.v4()
    const authUserData = await orm.loginUser( userData, session )
    // returns the logged-in user info to javascript
    return authUserData
}
require('./app/oAuth')(app, API_URL, ['twitter','google','facebook'], createOAuthSession)
router(app)

// for serving media assets
app.use( express.static('client/build') )
if( process.env.NODE_ENV === 'production' ){
    app.use( express.static('client/build') )
}

app.get('/*', function (req, res) {
    console.log( `[/*] (${req.protocol}//${req.get('host')}/${req.originalUrl} -- sending file: ${__dirname}/client/build/index.html` );
    res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(PORT, function() {
    console.log( `Listening on port: ${PORT}` )
})
