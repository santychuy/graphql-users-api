import './database';
import server from './app';
import GraphqlConfig from './config/graphqlServer';

server.start(GraphqlConfig, ({ port }) => {
  console.log(`Server on: http://localhost:${port}`);
});
