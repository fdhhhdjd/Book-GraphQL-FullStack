const Book = require("../models/Book");
const Author = require("../models/Author");

const mongoDataMethods = {
  getAllBooks: async (condition = null) =>
    condition === null ? await Book.find() : await Book.find(condition),
  getBookId: async (id) => await Book.findById(id),
  getallAuthor: async () => await Author.find(),
  getAuthId: async (id) => await Author.findById(id),
  createAuthor: async (args) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
  createBook: async (args) => {
    const newBook = new Book(args);
    return await newBook.save();
  },
};

module.exports = mongoDataMethods;
