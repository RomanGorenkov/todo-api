const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: 'http://localhost:3000/auth/google/callback',
    }, () => {
        // passport callback function
        console.log('++||||||||++');
    }),
);

// passport.authenticate('google', {
//     scope: ['profile']
// });

console.log('||||++++');

