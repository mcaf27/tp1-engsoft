const Sequelize = require ('sequelize');
const database = require('./db');

const Usuario = database.define('usuario', {
    idUsuario : {type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    e_mail : {type : Sequelize.STRING,
        allowNull : false
    },
    username : {type : Sequelize.STRING,
        allowNull : false
    },
    encrypt_password : {type : Sequelize.STRING,
        allowNull : false
    }
})

module.exports = Usuario;
