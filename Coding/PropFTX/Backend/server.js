require("dotenv").config();
const express = require("express");
const connect = require("./config/connect");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors()); //it is for global request access
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/movies", require("./routes/movieRoutes"));

connect()  //called connect here so that once the database is working, then only server will start
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(" MongoDB connection failed", err.message);
    process.exit(1);
  });
