import mongoose from 'mongoose';
import { TraineeSchema } from '../models/traineeModel';

const Trainee = mongoose.model('Trainee', TraineeSchema);

export const addNewTrainee = (req, res) => {
  let newTrainee = new Trainee(req.body);

  newTrainee.save((err, Trainee) => {
    if (err) res.send(err);
    res.json(Trainee);
  });
}

export const getTrainees = (req, res) => {
  Trainee.find({}, (err, Trainee) => {
    if (err) res.send(err);
    res.json(Trainee);
  });
}

