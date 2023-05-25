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

// GET SINGLE Category
router.get("/list/:id", async (req, res) => {
  try {
    const { id } = req.params;

    //Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ error: "No such category id is valid" });
    }
    const category = await categoriesModel.findById(id);

    if (!category) {
      res.status(404).json({ error: "No such category" });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//PUT category
router.put("/list/:id", async (req, res) => {
  await categoriesModel.updateOne({ _id: req.params.id }, req.body);

  const updatedCategory = await categoriesModel.find({
    _id: req.params.id,
  });

  return res.json(updatedCategory);
});

//DELETE category

router.delete("/list/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await categoriesModel.deleteOne({ _id: id });
    return res.json({ deleted: true });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

module.exports = router;
