const LocalStrategy = require('passport-local').Strategy;
const secret = require('../config/secret');
const bcrypt = require('bcryptjs');
const sql = require('seriate');
sql.setDefaultConfig(secret);

module.exports = function(passport){
    // Local Strategy
    passport.use(new LocalStrategy(function(username, password, done){
        // Match Username
        sql.execute({
            query: sql.fromFile('../sql/users/user'),
            params: {
                username: {	type: sql.NVARCHAR(30), val: username }
            }
        }).then( function(user){
            if(!user[0]){
                return done(null, false, {message: 'No user found'});
            }
    
            // console.log(user[0]);
            // console.log(user[0].password);
            // console.log(password);
            // Match password
            bcrypt.compare(password, user[0].password, function(err, isMatch){
                // console.log('isMatch: ' + isMatch);
                // console.log('err: ' + err);
                if(isMatch){
                    return done(null, user[0]);
                } else {
                    return done(null, false, {message: 'Wrong password'});
                }
            });
        }, function (err){
            console.log ('Coś się stało: LocalStrategy: ', err);
        });
    }));
  
    passport.serializeUser(function(user, done) {
        // console.log('serializeUser: '+user.id);
        done(null, user.id);
    });
  
    passport.deserializeUser(function(id, done) {
        // console.log('deserializeUser: id: '+id);
        sql.execute({
            query: sql.fromFile('../sql/users/userById'),
            params: {
                id: {	type: sql.INT, val: id }
            }
        }).then( function(user){
            console.log('deserializeUser: user: '+user);
            done(null, user);
        }, function (err){
            // console.log ('Coś się stało: deserializeUser: ', err);
            done(err, undefined);
        });

        // User.findById(id, function(err, user) {
        //     done(err, user);
        // });
    });
}
  