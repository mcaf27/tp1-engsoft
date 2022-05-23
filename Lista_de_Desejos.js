const Sequelize = require ('sequelize');
const database = require('./db');

const Lista_de_Desejos = database.define('lista de desejos', {
    idDesejo : {type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    idUsuario : {type: Sequelize.INTEGER,
        allowNull : false,
        foreignKey : true
    },
    idLivro : {type : Sequelize.INTEGER,
        allowNull : false,
        foreignKey : true
    }
})

module.exports = Lista_de_Desejos;
