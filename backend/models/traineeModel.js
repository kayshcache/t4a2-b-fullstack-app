import mongoose from 'mongoose';
//import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

export const TraineeSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number
  },
  hashPassword: {
    type: String,
    required: true,
    default: 'vulnerablePassword'
  },
  hasCompleted: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

// For later hashing passwords in DB
// TraineeSchema.methods.comparePassword = (textPassword, hashPassword) => bcrypt.compareSync(textPassword, hashPassword);

