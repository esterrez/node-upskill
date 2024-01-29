"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "order_items",
      {
        id: {
          type: Sequelize.INTEGER(16).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        order_id: {
          type: Sequelize.INTEGER(16).UNSIGNED,
          allowNull: false,
          references: {
            model: "orders",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "restrict",
        },
        product_id: {
          type: Sequelize.INTEGER(16).UNSIGNED,
          allowNull: false,
          references: {
            model: "products",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "restrict",
        },
        quantity: Sequelize.INTEGER(5).UNSIGNED,
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
    await queryInterface.dropTable("order_items");
  },
};
