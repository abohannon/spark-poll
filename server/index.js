const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/Poll');
const routes = require('./routes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(keys.MONGODB_URI, (error) => {
  if (error) {
    console.log('Error connecting to MongoDB', error);
  } else {
    console.log('Awww yeaaaa! Successfully connected to MongoDB!');
  }
});

app.use(bodyParser.json());

routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`w00t! Server up on port ${PORT}!`);
});

module.exports = app;
