"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "username", {
      type: Sequelize.STRING(100),
      unique: true,
      allowNull: false,
    });
    await queryInterface.addColumn("users", "password", {
      type: Sequelize.STRING(100),
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("users", "username");
    await queryInterface.removeColumn("users", "password");
  },
};
