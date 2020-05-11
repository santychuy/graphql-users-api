import { model, Schema } from 'mongoose';

import { validateEmail } from '../helpers/validateEmail';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      message: 'Este E-mail ya está registrado',
      validator: validateEmail(v),
    },
  },
});

export default model('User', userSchema, 'users');
