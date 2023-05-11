const express = require('express')
const router = express.Router()
const newsModel  = require('../models/newsModel');

const arr = [1,3,5,6];
// GET news
router.get('/list', async (req, res) => {
  try {
    const list = await newsModel.find();
    res.status(200).json(list)
  }
  catch(error) {
    res.status(400).json({message: error.message})
  }
})

// GET single news
router.get('/list/:id', (req,res) => {
  res.json({message: "Single news response"})
})

// POST new news
router.post('/create', (req,res) => {

  const {title, desc, author} = req.body;
  
  res.json({message: "new news  route"})
})

// PUT news
router.put('/list/:id', (req, res) => {
  res.json({message: "Update news"})
})


// DELETE news
router.delete('/list/:id', (req,res) => {
  res.json({message: "Delete news"})
})

module.exports = router

