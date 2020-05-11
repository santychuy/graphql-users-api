import {
  seeUser,
  seeUsers,
  createUser,
  deleteUser,
  updateUser,
} from '../../controllers/users.controller';

export const resolvers = {
  Query: {
    seeUsers,
    seeUser,
  },
  Mutation: {
    createUser,
    deleteUser,
    updateUser,
  },
};
