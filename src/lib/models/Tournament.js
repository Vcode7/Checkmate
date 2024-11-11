// models/registerModel.js
import mongoose from 'mongoose';

const TournamentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  MaxMember: {
    type: Number,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date:{
    type:Date,
    required:true
  },
  result: {
    type: String
  }
}, {
  timestamps: true,
});

// Prevent model overwrite issue in development
export default mongoose.models.Tournament || mongoose.model('Tournament', TournamentSchema );
