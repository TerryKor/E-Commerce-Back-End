require('dotenv').config();

const Sequelize = require('sequelize');
// DB_NAME = "ecommerce_db",
// DB_USER = "localhost",
// DB_PW = "sql369369"
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port:3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
