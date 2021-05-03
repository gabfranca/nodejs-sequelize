'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const CompanyModel = require('./CompanyModel');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  config.username = process.env['sql_username'];
  config.password = process.env['sql_password'];
  config.host = process.env['sql_host'];
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
db.CompanyModel = CompanyModel;
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
  db[modelName].init(sequelize);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
