const Sequelize  = require('sequelize');
const sequelize = new Sequelize('engsoft', 'root', 'engsoft', {
    dialect : 'mysql',
    host : 'localhost',
})

module.exports = sequelize;