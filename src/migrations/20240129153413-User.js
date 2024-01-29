"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "users",
      {
        id: {
          type: Sequelize.INTEGER(16).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        firstName: Sequelize.STRING(100),
        lastName: Sequelize.STRING(100),
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE,
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable("users");
  },
};
