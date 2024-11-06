// models/registerModel.js
import mongoose from 'mongoose';

const RegisterSchema = new mongoose.Schema({
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
  confirmPassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  college: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  chessId: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true,
});

// Prevent model overwrite issue in development
export default mongoose.models.Register || mongoose.model('Register', RegisterSchema);
