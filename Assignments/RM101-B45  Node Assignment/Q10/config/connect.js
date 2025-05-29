const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI
const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("COnnected to MongoDB Databsse");
  } catch (err) {
    console.log("Failed to connect to Database", err);
  }
};
module.exports = connect;
