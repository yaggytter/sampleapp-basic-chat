"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Password extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Password.init(
    {
      // 必要なものを追加
      email: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "password",
      modelName: "Password",
    }
  );
  return Password;
};
