const mongoose = require('mongoose');

const TitleSchema = new mongoose.Schema({
  jobTitle: {
    type: [String],
    required: true
  },
  jobDescription: {
    type: String,
  }
})


module.exports = Title = mongoose.model("title", TitleSchema);
