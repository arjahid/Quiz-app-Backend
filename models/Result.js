const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  user: { type: String, default: "Guest" }, // later can connect with Firebase Auth
  score: { type: Number, required: true },
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Result", resultSchema);
