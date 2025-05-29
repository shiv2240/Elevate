// Understanding Basic Server Concepts
const express = require("express");
const connect = require("./config/connect");
const bookRouter = require("./routes/bookRoutes");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/api/book/",bookRouter)
connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is runing on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to Server", err);
  });
