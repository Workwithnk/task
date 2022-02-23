const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  P5: {
    balance: { type: Number, default: 100 },
    history: [],
  },
  Reward: {
    balance: { type: Number, default: 0 },
    history: [],
  },
});

let User = mongoose.model("User", UserSchema);

module.exports = User;
