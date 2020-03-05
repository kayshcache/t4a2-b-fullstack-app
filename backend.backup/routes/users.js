import express from 'express';
import User from '../models/user';

const router = express.Router();

/* GET users listing. */
router.get('/', User.readAll);

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
