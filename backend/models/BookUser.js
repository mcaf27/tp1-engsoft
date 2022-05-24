const Sequelize = require ('sequelize');
const database = require('../database/connection');

const BookUser = database.define('booksUsers', {
  bookId: {
    type: Sequelize.BIGINT,
    allowNull: false,
    validate: {
      notNull: true
    }
  },
  userId: {
    type: Sequelize.BIGINT,
    allowNull: false,
    validate: {
      notNull: true
    }
  },
  score: {
    type: Sequelize.BIGINT,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 5
    }
  },
  inWishList: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = BookUser;
