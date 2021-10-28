const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const userDB = await models.User.create(data);
    return userDB;
  }

  async find() {
    const userDB = await models.User.findAll();
    return userDB;
  }

  async findOne(id) {
    const userDB = await models.User.findByPk(id);
    if (!userDB) {
      throw boom.notFound('User not found');
    }
    return userDB;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const userDB = await user.update(changes);
    return userDB;
  }

  async delete(id) {
    const userDB = await this.findOne(id);
    await userDB.destroy();
    return { id };
  }
}

module.exports = UserService;
