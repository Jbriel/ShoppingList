const { Sequelize, DataTypes } = require('sequelize');

const shoppingListModel = require('./shoppingListModel')

const dbConnection = process.env.DB_CONNECTION
const dbHost = process.env.DB_HOST
const dbDialect = process.env.DB_DIALECT

const sequelize = new Sequelize(dbConnection, {
    host: dbHost,
    dialect: dbDialect
})

sequelize.authenticate()
  .then(() => {
    console.info(`Success connecting postgres`);
  }).catch((err) => {
    console.error('Unable to connect to the database');
  });

let db = {}

db.sequelize = sequelize

db.shoppingListModel = shoppingListModel(sequelize, DataTypes)
db.shoppingListModel.sync()

module.exports = db