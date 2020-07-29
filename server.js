require( 'dotenv' ).config()

const express = require("express");
const router = require("./app/route");

const app = express();

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// for routes
router(app)

// for serving media assets
app.use( express.static('client/build') )

app.listen(PORT, function() {
    console.log( `Listening on port: ${PORT}` );
})
