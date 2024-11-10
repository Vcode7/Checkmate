// models/registerModel.js
import mongoose from 'mongoose';

const TournamentSchema = new mongoose.Schema({
  TournamentName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
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
}, {
  timestamps: true,
});

// Prevent model overwrite issue in development
export default mongoose.models.Tournament || mongoose.model('Tournament', TournamentSchema );
