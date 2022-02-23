const mongoose = require("mongoose");

let RewardSchema = new mongoose.Schema({
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

let RewardHist = mongoose.model("RewardHistory", RewardSchema);

module.exports = RewardHist;
