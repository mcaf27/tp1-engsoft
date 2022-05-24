const { Model, DataTypes } = require('sequelize');

class BookUser extends Model {
    static init(sequelize){
        super.init({
            user_id: DataTypes.INTEGER,
            book_id: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
        this.belongsTo(models.Book, { foreignKey: 'book_id', as: 'book'});
    }
}

module.exports = BookUser;