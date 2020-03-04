import database from './database';

const User = {
  async readAll(req, res) {
    try {
      const readAllQuery = 'SELECT * FROM users';
      const { rows } = await database.query(readAllQuery);
      return res.send({ rows });
    } catch (error) {
      return res.send(error);
    }
  }
};

export default User;
