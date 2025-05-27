const express = require("express");
const {
  getAllMovies,
  addToWatchlist,
  getWatchlist,
} = require("../controllers/movieController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getAllMovies);
router.post("/:id/watch", auth, addToWatchlist);
router.get("/watchlist/me", auth, getWatchlist);

module.exports = router;
