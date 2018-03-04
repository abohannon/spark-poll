const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
require('./models/Poll');
require('./models/User');
const { authRoutes, pollRoutes } = require('./routes');
const jwtStrategy = require('./services/jwt-strategy');


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(keys.MONGODB_URI, (error) => {
  if (error) {
    console.log('Error connecting to MongoDB', error);
  } else {
    console.log('Awww yeaaaa! Successfully connected to MongoDB!');
  }
});

passport.use(jwtStrategy);
app.use(cors());
app.use(bodyParser.json());

pollRoutes(app);
authRoutes(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`w00t! Server up on port ${PORT}!`);
});

module.exports = app;
