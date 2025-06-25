const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  user: String,
  activity: String,
  duration: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);
