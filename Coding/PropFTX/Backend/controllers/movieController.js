const Movie = require("../models/Movie");
const User = require("../models/User");

module.exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(201).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.addToWatchlist = async (req, res) => {
  const userId = req.user.id;
  const movieId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (user.watchlist.includes(movieId)) {
      return res.status(400).json({ message: "Movie already in watchlist" });
    }
    user.watchlist.push(movieId);
    await user.save();

    res.status(201).json({ message: "Added to watchlist", movieId});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.getWatchlist = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId).populate("watchlist");
    res.status(201).json(user.watchlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
