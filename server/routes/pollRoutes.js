const mongoose = require('mongoose');

const Poll = mongoose.model('polls');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello World!!!');
  });

  // TODO: Not complete, only for testing
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
};
