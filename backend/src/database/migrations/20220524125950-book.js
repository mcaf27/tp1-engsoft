'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', { 
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
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cover: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avaliations: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sum: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      score: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
    await queryInterface.dropTable('books');
  }
};
