"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "products",
      {
        id: {
          type: Sequelize.INTEGER(16).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: Sequelize.STRING(128),
        price: Sequelize.FLOAT(10, 2).UNSIGNED,
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
    await queryInterface.dropTable("products");
  },
};
