
  
const Sequelize = require ('sequelize');
const database = require('../database/connection');
const BCrypt = require('../helpers/bcrypt');

const User = database.define('users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: true,
      notEmpty: true,
      isEmail: true
    }
  },
  encryptedPassword: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  loginToken: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.VIRTUAL,
    get() {
      return undefined;
    },
    set(value) {
      this.encryptedPassword = BCrypt.hashSync(value);
    }
  }
})

module.exports = User;
