import User from '../models/User';
import { cleanObject } from '../helpers/cleanObject';

export const seeUsers = async () => await User.find();

export const seeUser = async (_, { id }) => await User.findById(id);

export const createUser = async (_, { name, email }) => {
  const user = new User({ name, email });
  return await user.save();
};

export const updateUser = async (_, { id, name, email }) => {
  const data = cleanObject({ name, email });
  return await User.findByIdAndUpdate(id, data);
};

export const deleteUser = async (_, { id }) => await User.findByIdAndDelete(id);
