const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  goalJob: {
    type: String,
    required: true
  },
  jobs: [
    {
      jobTitle: {
        type: String,
        required: true
      },
      employer: {
        type: String,
        required: true
      },
      jobDescription: {
        type: String,
        required: true
      },
      skillsPreferred: {
        type: [String],
        required: true
      },
      dateApplied: {
        required: true,
        type: Date
      },
      notes: {
        type: String
      }
    }
  ]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
