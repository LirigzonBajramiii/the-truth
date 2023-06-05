const express = require("express");
const router = express.Router();
const commentsModel = require("../models/commentsModel");

router.get("/", async (req, res) => {
  try {
    const commentsList = await commentsModel.find();
    res.status(200).json(commentsList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/create", async (req, res) => {
  const { comment, userName, commentId } = req.body;
  try {
    const newComment = await commentsModel.create({
      comment,
      userName,
      commentId,
    });

    res.status(200).json(newComment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
