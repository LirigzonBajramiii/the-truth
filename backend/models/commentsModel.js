const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    comment: String,
    commentId: String,
    userName: String,
  },
  { timestamps: true }
);

const model = mongoose.model("comments", schema);

module.exports = model;
