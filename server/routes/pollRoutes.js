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

  app.post('/api/delete_poll', async (req, res) => {
    const { id } = await req.body;
    Poll.findOneAndRemove({ _id: id }, (err, poll) => {
      if (err) return res.status(500).send(err);

      const response = {
        message: 'Poll successfully deleted',
        poll,
      };
      return res.status(200).send(response);
    });
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
