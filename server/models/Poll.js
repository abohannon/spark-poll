const mongoose = require('mongoose');

const { Schema } = mongoose;
// const OptionsSchema = require('./Options');

const pollSchema = new Schema({
  title: { type: String, required: true },
  // author: { type: String },
  // dateCreated: { type: Date, default: Date.now },
  // tags: [String],
  // options: [OptionsSchema],
});

mongoose.model('polls', pollSchema);
