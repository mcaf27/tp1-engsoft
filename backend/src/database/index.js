const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const User = require('../models/User');
const Book = require('../models/Book');
const BookUser = require('../models/BookUser');

const connection = new Sequelize(dbConfig);

User.init(connection);
Book.init(connection);
BookUser.init(connection);

User.associate(connection.models);
Book.associate(connection.models);
BookUser.associate(connection.models);

module.exports = connection;