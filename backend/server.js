const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const mongoDataMethods = require("./controllers/BookCtl");
const connectDB = require("./configs/db");
// Load schema & resolvers
const typeDefs = require("./schemas/schema");
const resolvers = require("./resolvers/resolver");
//Server GraphQL
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods }),
});
//Connect MongoDb
connectDB();

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  return res.status(200).json({
    status: "200",
    message: "WellCome To Tai Heo ^-^ !!",
  });
});
server.start().then(() => {
  server.applyMiddleware({ app });
});

const PORT = process.env.PORT || 5000;
app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
