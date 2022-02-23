const express = require("express");
const User = require("../Models/User");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Home page from Rote");
});

route.post("/newuser", async (req, res) => {
  try {
    let newCreatedUser = await User({
      name: req.body.name,
      P5: req.body.P5,
      Reward: req.body.Reward,
    });
    let createdUser = await newCreatedUser.save();
    res.status(201).send("User created");
  } catch {
    res.status(400).send("User not created");
  }
});

route.get("/newuser/", async (req, res) => {
  let userDetails = await User.find();
  res.send(userDetails);
});

route.get("/newuser/:id", async (req, res) => {
  let usrId = req.params.id;
  let _id = usrId.toString();
  let SpecificUser = await User.findOne({ _id });
  res.send(SpecificUser);
});

module.exports = route;
