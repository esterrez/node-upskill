"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "orders",
      {
        id: {
          type: Sequelize.INTEGER(16).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        user_id: {
          type: Sequelize.INTEGER(16).UNSIGNED,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "restrict",
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      },
    );
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable("orders");
  },
};
