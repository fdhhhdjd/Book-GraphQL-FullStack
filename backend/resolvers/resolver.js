const { books, authors } = require("../configs/static");
const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id === Number(args.id)),
    authors: () => authors,
    author: (parent, args) =>
      authors.find((author) => author.id == Number(args.id)),
  },
  Book: {
    author: (parent, args) => {
      return authors.find((author) => author.id == parent.authorId);
    },
  },
  Author: {
    books: (parent, args) => {
      return books.filter((book) => book.authorId == parent.id);
    },
  },
  Mutation: {
    createAuthor: (parent, args) => args,
    createBook: (parent, args) => args,
  },
};

module.exports = resolvers;
