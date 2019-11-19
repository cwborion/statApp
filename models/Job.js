const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
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
  skillsPreferred: {
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
