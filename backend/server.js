require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const newsRouter = require("./routes/newsRoute");
const cors = require("cors");
const categoriesRouter = require("./routes/categoriesRoute");
const uploadImgRouter = require("./routes/uploadImgRoute");
const eventsRouter = require("./routes/eventsRoute");
const userRouter = require("./routes/userRoute");

// Krijimi i nje express app
const app = express();
app.use(cors()); // enables request from frontend
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware
app.use(express.static("public"));
app.use("/api/news", newsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/upload", uploadImgRouter);
app.use("/api/events", eventsRouter);
app.use("/api/user", userRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests only if it's connected to database
    app.listen(PORT, () => {
      console.log(`Connected to db & Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
