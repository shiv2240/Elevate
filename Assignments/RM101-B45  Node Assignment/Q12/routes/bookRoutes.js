const bookRouter = require("express").Router();
const {
  createBook,
  getBooks,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

bookRouter.get("/getbooks", getBooks);
bookRouter.post("/createbook", createBook);
bookRouter.put("/updateBook/:id", updateBook);
bookRouter.delete("/deleteBook/:id", deleteBook);

module.exports = bookRouter;
