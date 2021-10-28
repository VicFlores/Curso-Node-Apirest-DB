const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class productService {
  constructor() {}

  async create(data) {
    const product = await models.Product.create(data);
    return product;
  }

  async find() {
    const product = await models.Product.findAll();
    return product;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async update(id, body) {
    const product = await this.findOne(id);
    const productDB = await product.update(body);
    return productDB;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }
}

module.exports = productService;
