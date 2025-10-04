const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

// Sample data
let books = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
  },
];

// GraphQL schema
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
    updateBook(id: ID!, title: String, author: String): Book
    deleteBook(id: ID!): Boolean!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find(book => book.id === id),
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = {
        id: String(books.length + 1),
        title,
        author,
      };
      books.push(newBook);
      return newBook;
    },
    updateBook: (_, { id, title, author }) => {
      const book = books.find(b => b.id === id);
      if (!book) return null;
      if (title !== undefined) book.title = title;
      if (author !== undefined) book.author = author;
      return book;
    },
    deleteBook: (_, { id }) => {
      const index = books.findIndex(b => b.id === id);
      if (index === -1) return false;
      books.splice(index, 1);
      return true;
    },
  },
};

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();