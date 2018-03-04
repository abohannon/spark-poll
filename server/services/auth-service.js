const mongoose = require('mongoose');

const User = mongoose.model('users');

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

module.exports = {
  findSingleUser,
};
