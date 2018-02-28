const mongoose = require('mongoose');

const Poll = mongoose.model('polls');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.post('/api/create_poll', async (req, res) => {
    try {
      const { title } = await req.body;

      const newPoll = new Poll({
        title,
      });

      await newPoll.save();
      await res.status(200).send(newPoll);
      console.log('Poll saved', newPoll);
    } catch (error) {
      console.log('Error saving poll.', error);
    }
  });

  app.get('/api/fetch_polls', async (req, res) => {
    Poll.find({}, (err, polls) => {
      if (!err) {
        console.log(polls);
        res.send(polls);
      } else {
        console.log('Error fetching polls', err);
      }
    });
  });

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
          res.status(403).send('An account with that email already exists.');
        } else {
          newUser.save();
          res.status(201).send('User successfully created.');
        }
      });
    } else {
      res.status(400).send('All fields are required.');
    }
  });
};
