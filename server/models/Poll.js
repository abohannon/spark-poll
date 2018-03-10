const mongoose = require('mongoose');

const { Schema } = mongoose;
const OptionsSchema = require('./Options');

const pollSchema = new Schema({
  title: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateCreated: { type: Date, default: Date.now },
  tags: [String],
  totalVotes: Number,
  options: [OptionsSchema],
});

mongoose.model('polls', pollSchema);
