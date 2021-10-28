const boom = require('@hapi/boom');
const pool = require('../libs/postgres');

class OrderService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async create(data) {
    const query = 'INSERT INTO table_name';
    const response = await this.pool.query(query);
    return response.rows;
  }

  async find() {
    const query = 'SELECT * FROM table_name';
    const response = await this.pool.query(query);
    return response.rows;
  }

  async findOne(id) {
    const query = `SELECT * FROM table_name WHERE id_table = ${id}`;
    const response = await this.pool.query(query);
    return response.rows;
  }

  async update(id, changes) {
    const query = `ALTER TABLE table_name`;
    const response = await this.pool.query(query);
    return response.rows;
  }

  async delete(id) {
    const query = `ALTER TABLE table_name`;
    const response = await this.pool.query(query);
    return response.rows;
  }
}

module.exports = OrderService;
