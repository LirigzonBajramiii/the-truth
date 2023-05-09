const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({message: "Hi from backend"})
  console.log('Home from backend');
})

module.exports = router

