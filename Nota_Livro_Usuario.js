const Sequelize = require ('sequelize');
const database = require('./db');

const Nota_Livro_Usuario = database.define('produto', {
    idNota : {type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    Nota : {type : Sequelize.INTEGER,
        allowNull : false,
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

module.exports = Nota_Livro_Usuario;