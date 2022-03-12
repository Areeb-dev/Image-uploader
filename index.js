const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/User");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/ImageUpload");

// middlewares
app.use(express.json());
app.use(cors());

app.use(express.static("public"));
app.use("/public", express.static("public"));

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`App is running on localhost:${PORT}`);
});
