const mongoose = require('mongoose');

const User = mongoose.model('users');
const Poll = mongoose.model('polls');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello World!!!');
  });

  // TODO: Not complete, only for testing
  app.post('/api/create_poll', async (req, res) => {
    try {
      const {
        title,
        options,
        email,
        firstName,
      } = await req.body;

      const foundUser = await User.findOne({ email }, (err, user) => {
        if (!err) {
          console.log('found user:', user);
        } else {
          console.log(err);
        }
      });

      const newPoll = await new Poll({
        title,
        user: foundUser.id,
        author: firstName,
        options: options.map(option => ({ name: option })),
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
};
