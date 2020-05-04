const mongoose = require("mongoose");

const EpisodeSchema = new mongoose.Schema({
  episodeNumber: {
    type: Number,
    required: [true, "Please add the number of the episode."],
  },
  episodeTitle: {
    type: String,
    trim: true,
    required: [true, "Please add the title of the episode."],
  },
  michaelScore: {
    type: Number,
    required: [true, "Please add Michael's score"],
  },

  jordanScore: {
    type: Number,
    required: [true, "Please add Jordan's score"],
  },
  average: {
    type: Number,
    required: [
      true,
      "Please average the 2 scores together to populate this field",
    ],
  },
  airDate: {
    type: Date,
    required: [true, "Please add the air date of the episode."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Episode", EpisodeSchema);
