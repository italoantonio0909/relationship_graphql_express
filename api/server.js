const { GraphQLServer } = require("graphql-yoga");
const Resolver = require("./graphql/resolver");
const Schema = require("./graphql/schema");

const server = new GraphQLServer({
  typeDefs: Schema,
  resolvers: Resolver,
});

module.exports = server;
