const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Saved = mongoose.model("Saved", savedSchema);

module.exports = Saved;
