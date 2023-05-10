require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const newsRouter = require('./routes/newsRoute')
const cors = require('cors')

// Krijimi i nje express app
const app = express();
app.use(cors()) // enables request from frontend
const PORT = process.env.PORT

// Middleware
app.use('/api/news', newsRouter)


mongoose.connect(process.env.MONGO_URI).then(() => {
  // Listen for requests only if it's connected to database
  app.listen(PORT, () => {
    console.log(`Connected to db & Listening on port ${PORT}`);
  });

    

    app.use(express.urlencoded({extended: true}))
    app.use(express.json());


})
.catch((error) => {
  console.log(error);
});


