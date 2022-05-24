const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Book, { foreignKey: 'user_id', as: 'books'});
        this.hasMany(models.BookUser, { foreignKey: 'user_id', as: 'book_users'});
    }
}

module.exports = User;