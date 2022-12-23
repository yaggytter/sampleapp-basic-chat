"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    return queryInterface.bulkInsert(
      "roles",
      [
        { name: "Node", created_at: now, updated_at: now },
        { name: "React", created_at: now, updated_at: now },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
