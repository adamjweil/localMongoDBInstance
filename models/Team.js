const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
    unique: true
  },
  teamDescription: {
    type: String
  }
});

module.exports = Team = mongoose.model("team", TeamSchema);
