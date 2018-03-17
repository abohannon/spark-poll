const mongoose = require('mongoose');

const { Schema } = mongoose;
const OptionsSchema = require('./Options');

const pollSchema = new Schema({
  title: { type: String, required: true },
  user: { type: String, required: true },
  author: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  totalVotes: { type: Number, required: true },
  options: [OptionsSchema],
});

mongoose.model('polls', pollSchema);
