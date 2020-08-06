require( 'dotenv' ).config()

const express = require('express')
const router = require('./app/route')
const orm = require('./connection/orm')
const uuid = require('uuid')
const app = express()
const PORT = process.env.PORT || 8080
const API_URL = process.env.NODE_ENV === 'production' ? 'https://betterbiz2020.herokuapp.com' : 'http://localhost:8080'

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

app.listen(PORT, function() {
    console.log( `Listening on port: ${PORT}` )
})
