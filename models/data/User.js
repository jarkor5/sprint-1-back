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
  }
},
{timestamps: true});

let User = mongoose.model('users', userSchema);


export default User;
