import { GraphQLServer } from 'graphql-yoga';
import { initMiddlewares } from './middlewares';

import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';

const server = new GraphQLServer({
  resolvers,
  typeDefs,
});

const { express } = server;
initMiddlewares(express);

export default server;
