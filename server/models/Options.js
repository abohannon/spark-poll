const mongoose = require('mongoose');

const { Schema } = mongoose;

const optionsSchema = new Schema({
  name: String,
  votes: { type: Number, default: 0 },
});

module.exports = optionsSchema;
