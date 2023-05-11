const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    title: String,
  },
  { timestamps: true }
);

const model = mongoose.model("categories", schema);

module.exports = model;
