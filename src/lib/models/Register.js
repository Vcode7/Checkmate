// models/registerModel.js
import mongoose from 'mongoose';

const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'is invalid'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  college: {
    type: String
  },
  course: {
    type: String
  },
  semester: {
    type: String
  },
  chessId: {
    type: String
  },
  avatar: {
    type: String
  },
}, {
  timestamps: true,
});

// Prevent model overwrite issue in development
export default mongoose.models.Register || mongoose.model('Register', RegisterSchema);
