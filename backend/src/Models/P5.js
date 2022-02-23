const mongoose = require("mongoose");

let P5Schme = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  Amount: {
    type: Number,
  },
  UserId: {
    type: String,
  },
});

let P5Hist = mongoose.model("P5History", P5Schme);

module.exports = P5Hist;
