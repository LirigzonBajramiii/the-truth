const express = require("express");
const router = express.Router();
const newsModel = require("../models/newsModel");
const mongoose = require("mongoose");

// GET news
router.get("/list", async (req, res) => {
  try {
    const list = await newsModel.find();
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET single news
router.get("/list/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ error: "No such news id is valid" });
    }
    const singleNews = await newsModel.findById(id);

    if (!singleNews) {
      res.status(404).json({ error: "No such news" });
    }

    res.status(200).json(singleNews);
  } catch (error) {
    console.log(error);
  }
});

// POST new news
router.post("/create", async (req, res) => {
  // Desctructuring the payload that we received
  console.log(req.body);
  const { title, author, desc, category, imageUrl } = req.body;

  try {
    const newNews = await newsModel.create({
      title,
      author,
      desc,
      category,
      imageUrl,
    });

    res.status(200).json(newNews);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// PUT news
router.put("/list/:id", (req, res) => {
  res.json({ message: "Update news" });
});

// DELETE news
router.delete("/list/:id", (req, res) => {
  res.json({ message: "Delete news" });
});

module.exports = router;
