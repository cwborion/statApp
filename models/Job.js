const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  // Confirm this is everything that should be in schema*****
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  jobTitle: {
    type: String
    // required: true
  },
  employer: {
    type: String
    // required: true
  },
  jobDescription: {
    type: String
    // required: true
  },
  skills: {
    type: String
    // required: true
  },
  dateApplied: {
    // required: true
    type: Date
  },
  notes: {
    type: String
  }
});

module.exports = Job = mongoose.model('profile', JobSchema);
