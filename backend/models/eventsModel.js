const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    date1: String,
    date2: String,
    desc: String,
  },
  { timestamps: true }
);

const model = mongoose.model("events", schema);

module.exports = model;
