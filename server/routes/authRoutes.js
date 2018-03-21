const mongoose = require('mongoose');
const passport = require('passport');

const User = mongoose.model('users');
const Polls = mongoose.model('polls');

const {
  findSingleUser,
  setJwtPayload,
  generateToken,
} = require('../services/auth-service');

module.exports = (app) => {
  app.post('/api/create_user', async (req, res) => {
    const { firstName, email, password } = await req.body;
    if (firstName && email && password) {
      const newUser = new User({
        firstName,
        email,
        password,
      });

      User.findOne({ email }, (err, user) => {
        if (user) {
          res.send('An account with that email already exists.');
        } else {
          newUser.save();
          res.status(201).send('User successfully created.');
        }
      });
    } else {
      res.send('All fields are required.');
    }
  });

  app.post('/api/login_user', async (req, res) => {
    const user = await findSingleUser(req);

    if (!user) {
      return res.status(401).json({ status: 'User not found.' });
    }

    if (user === 'unauthorized') {
      return res.status(401).json({ success: false, status: 'Invalid password' });
    }

    const userInfo = setJwtPayload(user);
    return res.status(200).json({
      token: `JWT ${generateToken(userInfo)}`,
      data: userInfo,
    });
  });

  app.get(
    '/api/get_user',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      const { id } = req.user;

      // check if user exists
      const user = await User.findOne({ _id: id });
      // then fetch their polls
      const userPolls = await Polls.find({ user: id });

      // create a new object with retrieved data
      const userData = {};
      userData.firstName = user.firstName;
      userData.email = user.email;
      userData.id = user._id;
      userData.polls = userPolls;

      if (user) return res.status(200).send(userData);

      return res.status(401).send('Unauthorized');
    },
  );
};
