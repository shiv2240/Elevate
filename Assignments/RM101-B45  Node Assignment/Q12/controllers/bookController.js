const Book = require("../models/bookModel");

module.exports.getBooks = async (req, res) => {
  try {
      const book = await Book.find({});
      return res.status(200).json({ message: "Book found Successfully", book });
  } catch (err) {
    res
      .status(501)
      .json({ message: "Failed to get books", error: err.message });
  }
};

module.exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    res.status(200).json({ message: "Book Deleted Successfully", deletedBook });
  } catch (err) {
    res
      .status(501)
      .json({ message: "Failed to delete book", error: err.message });
  }
};

module.exports.createBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = await Book.create({ title, author });
    res.status(201).json({ message: "Book created Successfully", book });
  } catch (err) {
    res
      .status(501)
      .json({ message: "Failed to create book", error: err.message });
  }
};

module.exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, { title, author });
    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book Updated Successfully", updatedBook });
  } catch (err) {
    res
      .status(501)
      .json({ message: "Failed to update book", error: err.message });
  }
};
