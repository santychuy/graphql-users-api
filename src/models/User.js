import { model, Schema } from 'mongoose';
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
      validator: function (v) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(v).toLowerCase());
      },
    },
  },
});

export default model('User', userSchema, 'users');
