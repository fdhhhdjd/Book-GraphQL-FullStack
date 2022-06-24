const { books, authors } = require("../configs/static");
const Author = require("../models/Author");
const Book = require("../models/Book");
const resolvers = {
  Query: {
    // books: async (parent, args, context) => {
    books: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks(),
    book: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getBookId(id),

    authors: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getallAuthor(),
    author: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthId(id),
  },
  Book: {
    author: async ({ authorId }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthId(authorId),
  },
  Author: {
    books: async ({ id }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks({ authorId: id }),
  },
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createAuthor(args),
    createBook: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createBook(args),
  },
};

module.exports = resolvers;
