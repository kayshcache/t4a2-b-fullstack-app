import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { TraineeSchema } from '../models/traineeModel';
require('dotenv').config();

const Trainee = mongoose.model('Trainee', TraineeSchema);

export const requireAuthorization = (req, res, next) => {
  if (!req.user) return res.status(401).json({message: 'Unauthorized'});
  return next();
}

export const registerTrainee = (req, res) => {
  const newTrainee = new Trainee(req.body);
  newTrainee.hashPassword = bcrypt.hashSync(req.body.plainPassword, 10);
  newTrainee.save((err, trainee) => {
    if (err) return res.status(400).send({message: err});
    user.hashPassword = undefined;
    return res.json(user);
  });
}

export const authorizeUser = (req, res) => {
  console.dir(req.body);
  Trainee.findOne({email: req.body.email}, (err, user) => {
    if (err) throw err;
    if (!user) res.status(401).json({message: 'No such user'});
    if (!user.comparePassword(req.body.plainPassword, user.hashPassword)) {
      res.status(401).json({message: "Auth fail, b-arch"});
    } else {
      return res.json({
	token: jwt.sign({email: user.email, _id: user.id}, process.env.JWT_KEY)
      });
    }
  });
}

