const mongoose = require('mongoose');
const Team = require('./Team');
const Title = require('./Title');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  consented: {
    type: Boolean,
    required: true
  },
  dateHired: {
    type: Date
  },
  dateCreated: {
    type: Date
  },
  dateLastUpdated: {
    type: Date,
    default: Date.now
  },
  isSuperUser: {
    type: Boolean,
    default: false
  },
  skills: {
    type: [String],
  },
  bio: {
    type: String
  },
  title: {
    type: mongoose.Schema.Types.ObjectId,
    red: "title"
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "team"
  },
})


module.exports = User = mongoose.model("user", UserSchema);
