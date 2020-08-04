const cors = require('cors')
const passport = require('passport')
const session = require('express-session')
const { Strategy: FacebookStrategy } = require('passport-facebook')

function oAuth( app, API_URL, providers, createOAuthSession ){
    console.log( '[oAuth] adding oAuth related endpoints & middleware' )
    // we need to enable API calls from OUTSIDE our system
    // as the oAuth will be coming from another server
    app.use( cors() )
    // oAuth requires session-library
    app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }))
    app.use(passport.initialize())
    // Allowing passport to serialize and deserialize users into sessions
    passport.serializeUser((user, cb) => cb(null, user))
    passport.deserializeUser((obj, cb) => cb(null, obj))
    // The callback is what the strategy uses below.
    // const callback = (accessToken, refreshToken, profile, cb) => cb(null, profile, accessToken, refreshToken)

    let CONFIG = {
        clientID: process.env.FACEBOOK_KEY,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: `${API_URL}/oauth/facebook/callback`
    }

    passport.use(new FacebookStrategy(CONFIG,
        function(accessToken, refreshToken, profile, done) {
            console.log('[Facebook] Auth done', accessToken )
            done( null, profile )
        }
    ))

    // OAUTH ENDPOINTS
    // For the popup window, this will organize the initil login box on provider
    app.get( '/oauth/facebook', function( req,res,next ){
        // const provider = req.params.provider;
        // console.log( `[/oauth/${provider}/] popup called.` );
        // we are running this, as it will generate code an actual function(req,res,next)
        passport.authenticate('facebook')
    })

    // this is called BY the provider with the auth-token + access-token + user-info for us
    app.get('/oauth/facebook/callback', function( req,res,next ){
        // const provider = req.params.provider;
        // console.log( `[/oauth/${provider}/callback] oAuth callback received...` );
        // we are running this, as it will generate code an actual function
        // passport.authenticate(provider, (provider==='google'?{ scope: ['profile'] }:undefined))(req,res,next);
        passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' })
    },
    // chain a SECOND function on that handles the call-back result
    async function( req,res ){
        const provider = 'facebook' //req.params.provider;

        // make the returned user structure consistent
        let user = { type: provider };
        switch( provider ){
        case 'google':
            console.log(req.user)
            user.firstName = req.user.displayName
            user.lastName = req.user.displayName
            // user.thumbnail = req.user.photos[0].value.replace(/sz=50/gi, 'sz=250');
            user.authId = `googleid:${req.user.id}`;
            break;
        case 'facebook':
            console.log(req.user)
            user.firstName = req.user.name.givenName,
            user.lastName = req.user.name.familyName
            // user.thumbnail = req.user.photos[0].value;
            user.authId = `facebookid:${req.user.id}`;
            break;
        default:
            console.log( `[ERROR] Unknown provider ${provider}`, req.user );
            break;
        }

        console.log( ' ... parsed the result to get user (passing to createOAuthSession): ', user );

        // create a session for this user
        const authUserData = JSON.stringify( await createOAuthSession( user ) )

        // this login info is secure [only on node side];
        // we don't need to send all of it to client, but we do in our case - for easy integration with prior login
        // it goes back to the popup authentication window, that then passes it on to the parent.

        // notify the calling (parent) window, and give our session + user info
        res.send(`<html><body><script>window.opener.postMessage('${authUserData}', '*');</script>Please wait...</body></html>`);
    });

}

module.exports = oAuth;