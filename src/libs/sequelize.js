const { Sequelize } = require('sequelize');
const config = require('../../config/config');
const setupModels = require('../db/models/model');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false,
});

setupModels(sequelize);

/* sequelize.sync(); // Sincroniza y va a ejecutar todo para crear la table */

module.exports = sequelize;
