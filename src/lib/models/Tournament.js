// models/registerModel.js
import mongoose from 'mongoose';

const TournamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  maxMembers: { type: Number, required: true }, // Ensure it matches the payload
  start: { type: String, required: true },
  end: { type: String, required: true },
  time: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: Date, required: true },
  resulth:{type:String}
});

// Prevent model overwrite issue in development
export default mongoose.models.Tournament || mongoose.model('Tournament', TournamentSchema );
