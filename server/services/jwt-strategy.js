const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
opts.secretOrKey = keys.JWT_SECRET;

const jwtStrategy = new JwtStrategy(opts, (jwt_payload, done) => {
  console.log('jwt_payload', jwt_payload);
  User.findOne({ email: jwt_payload.email }, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  });
});

module.exports = jwtStrategy;
