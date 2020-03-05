import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

import indexRouter from './routes/indexRouter';
import traineesRouter from './routes/traineesRouter';

dotenv.config();

export const app = express();
const PORT = process.env.PORT || 7000;
const JWT_KEY = process.env.JWT_KEY;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MG_CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/trainees', traineesRouter);

app.listen(PORT, () => {
  console.log(`New server running at: http://localhost:${PORT}/`);
});

