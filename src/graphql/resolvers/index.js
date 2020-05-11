import { ping } from '../../controllers/example.controller';

export const resolvers = {
  Query: {
    ping,
  },
};
