const Sequelize = require('sequelize');

const connection = new Sequelize('tp_es', 'arthur', '123456', {
  host: 'localhost',
  dialect: 'postgresql'
});

module.exports = connection;
