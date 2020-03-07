import database from './database';

const Trainee = {
  async readAll(req, res) {
    try {
      const readAllQuery = 'SELECT * FROM trainees';
      const { rows } = await database.query(readAllQuery);
      return res.send({ rows });
    } catch (error) {
      return res.send(error);
    }
  }
};

export default User;
