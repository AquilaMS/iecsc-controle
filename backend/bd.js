const { Sequelize } = require('sequelize');
const path = require('path')

const dbPath = path.resolve(__dirname, '../test-db/test_db_iecsc.db');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath
});

module.exports = {
    sequelize
}