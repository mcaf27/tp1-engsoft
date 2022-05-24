'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('book_users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'users', key: 'id' },
        unUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      book_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'books', key: 'id' },
        unUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('book_users');
  }
};
