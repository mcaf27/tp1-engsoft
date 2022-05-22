const Sequelize = require ('sequelize');
const database = require('./db');

const Livro = database.define('livro', {
    idLivro : {type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    titulo : {type : Sequelize.STRING,
        allowNull : false,
    },
    autor : {type : Sequelize.STRING,
        allowNull : false
    },
    editora : {type : Sequelize.STRING,
    allowNull:false
    },
    genero : {type : Sequelize.STRING,
        allowNull : false
    },
    Capa : {type : Sequelize.STRING (1000),
        allowNull:false
    }
})

module.exports = Livro;
