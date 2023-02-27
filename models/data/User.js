import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  },
  receiveNotifications: {
    type: Boolean,
    default: false
  },
  age: Number,
  gender: String,
  address: String,
  phone: String,
  avatar: String,
  role: {
    type: String,
    default: 'user'
  },
  is_online: {
    type: Boolean,
    default: false
  },
  is_admin: {
    type: Boolean,
    default: false
  },
  is_author: {
    type: Boolean,
    default: false
  }
},
{timestamps: true});

let User = mongoose.model('users', userSchema);


export default User;
