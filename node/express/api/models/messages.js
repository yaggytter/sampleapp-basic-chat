"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Messages.belongsTo(models.Users, {
        foreignKey: "user_id",
      });
    }
  }
  Messages.init(
    {
      tenant_id: DataTypes.STRING,
      user_id: DataTypes.STRING,
      message: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "messages",
      modelName: "Messages",
      createdAt: "created_at", // alias
      updatedAt: "updated_at",
    }
  );
  return Messages;
};
