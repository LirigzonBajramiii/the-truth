const express = require("express");
const router = express.Router();
const categoriesModel = require("../models/categoriesModel");

//GET categories
router.get("/", async (req, res) => {
  try {
    const categoriesList = await categoriesModel.find();
    res.status(200).json(categoriesList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//get single category

//POST new categories
router.post("/create", async (req, res) => {
  // Desctructuring the payload that we received
  console.log(req.body);
  const { title } = req.body;

  try {
    const newCategory = await categoriesModel.create({ title });

    res.status(200).json(newCategory);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//PUT category

//DELETE category

module.exports = router;
