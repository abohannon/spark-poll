const mongoose = require('mongoose');

const User = mongoose.model('users');
const { findSingleUser } = require('../services/auth-service');

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
    console.log(user);
    res.send(user);
  });
};
