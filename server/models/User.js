const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.isPasswordValid = function (rawPassword, callback) {
  const user = this;
  bcrypt.compare(rawPassword, user.password, (err, same) => {
    if (err) {
      callback(err);
    }
    callback(null, same);
  });
};

const saltRounds = 10;

userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, saltRounds, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

mongoose.model('users', userSchema);
