const { User, UserSchema } = require('./user.model');
const { Category, categorySchema } = require('./categories.model');
const { Product, productSchema } = require('./products.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(categorySchema, Category.config(sequelize));
  Product.init(productSchema, Product.config(sequelize));
}

module.exports = setupModels;
