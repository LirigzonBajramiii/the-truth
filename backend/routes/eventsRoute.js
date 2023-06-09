const express = require("express");
const router = express.Router();
const eventsModel = require("../models/eventsModel");
const mongoose = require("mongoose");

//GET events
router.get("/list", async (req, res) => {
  try {
    const list = await eventsModel.find();
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//GET an event
router.get("/list/:id", async (req, res) => {
  try {
    const { id } = req.params;

    //Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ error: "No such event id is valid" });
    }
    const event = await eventsModel.findById(id);

    if (!event) {
      res.status(404).json({ error: "No such event" });
    }

    res.status(200).json(event);
  } catch (error) {
    console.log(error);
  }
});

//POST new events
router.post("/create", async (req, res) => {
  //Destructuring the payload which we received
  console.log(req.body);
  const { name, date1, date2, desc } = req.body;

  try {
    const newEvent = await eventsModel.create({
      name,
      date1,
      date2,
      desc,
    });

    res.status(200).json(newEvent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//PUT events
router.put("/list/:id", async (req, res) => {
  await eventsModel.updateOne({ _id: req.params.id }, req.body);

  const updatedEvents = await eventsModel.find({
    _id: req.params.id,
  });

  return res.json(updatedEvents);
});

//DELETE events
router.delete("/list/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await eventsModel.deleteOne({ _id: id });
    return res.json({ deleted: true });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

module.exports = router;
