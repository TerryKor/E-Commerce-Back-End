const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      //AUTO_INCREMENT:1,
    },
    category_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    //initialAutoIncrement: 1,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

