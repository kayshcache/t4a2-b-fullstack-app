import express from 'express';
import {
  addNewTrainee,
  getTrainees,
} from '../controllers/traineeController';

const router = express.Router();

/* GET users listing. */
router.get('/', getTrainees);
// Hit the endpoint:
// curl -X POST localhost:7000/trainees -d '{"firstName": "t1", "lastName": "tsn1", "email": "go@gogo.go", "phone": "0444444444"}' -H 'Content-Type: application/json'
router.post('/', addNewTrainee);

/* eg POSSIBLY CAN CHAIN METHODS AND MIDDLEWARE HERE
 * Check that on Express docs later
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

export default router;
