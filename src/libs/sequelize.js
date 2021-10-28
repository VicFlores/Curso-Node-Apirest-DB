const { Sequelize } = require('sequelize');
const config = require('../../config/config');
const setupModels = require('../db/models/model');

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
};

if (config.isProd) {
  options.ssl = {
    rejectUnauthorized: false,
  };
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

/* sequelize.sync(); // Sincroniza y va a ejecutar todo para crear la table */

module.exports = sequelize;
