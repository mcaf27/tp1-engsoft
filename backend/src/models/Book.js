const { Model, DataTypes } = require('sequelize');

class Book extends Model {
    static init(sequelize) {
        super.init({
            user_id: DataTypes.INTEGER,
            title: DataTypes.STRING,
            author: DataTypes.STRING,
            cover: DataTypes.STRING,
            genre: DataTypes.STRING,
            avaliations: DataTypes.INTEGER,
            sum: DataTypes.INTEGER,
            score: DataTypes.FLOAT,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
        this.hasMany(models.BookUser, { foreignKey: 'book_id', as: 'book_users'});
    }
}

module.exports = Book;