"use strict";
var bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const nodeId = 1;
    const reactId = 2;
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id: "1",
          name: "Nodeユーザー1",
          email: "user@example.com",
          role_id: nodeId,
          password: bcrypt.hashSync("password", bcrypt.genSaltSync(10)),
          created_at: now,
          updated_at: now,
        },
        {
          id: "2",
          name: "Reactユーザー1",
          email: "user2@example.com",
          role_id: reactId,
          password: bcrypt.hashSync("password", bcrypt.genSaltSync(10)),
          created_at: now,
          updated_at: now,
        },
        {
          id: "3",
          name: "Nodeユーザー2",
          email: "user3@example.com",
          role_id: nodeId,
          password: bcrypt.hashSync("password", bcrypt.genSaltSync(10)),
          created_at: now,
          updated_at: now,
        },
        {
          id: "4",
          name: "Reactユーザー2",
          email: "user4@example.com",
          role_id: reactId,
          password: bcrypt.hashSync("password", bcrypt.genSaltSync(10)),
          created_at: now,
          updated_at: now,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
