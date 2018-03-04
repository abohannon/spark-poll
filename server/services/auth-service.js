const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const User = mongoose.model('users');

// find user on login and check email and password
const findSingleUser = async (req) => {
  const { email, password } = req.body;

  // find user
  const singleUser = await User.findOne({ email });

  // check if user is found
  if (!singleUser) return null;

  // if user is found, validate password
  if (await singleUser.isPasswordValid(password)) {
    return singleUser;
  }

  return 'unauthorized';
};

/* JWT helper functions */

// generate the jwt token with secret
const generateToken = user => jwt.sign(user, keys.JWT_SECRET);

// set the payload we want each user to carry
const setJwtPayload = (data) => {
  const { email } = data;
  const time = new Date().getTime();
  const iat = time;
  const exp = time + (60 * 60 * 24 * 1000);
  return { email, iat, exp };
};

module.exports = {
  findSingleUser,
  generateToken,
  setJwtPayload,
};
