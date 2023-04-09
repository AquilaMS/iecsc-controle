const { Sequelize, DataTypes } = require('sequelize');
const db = require('../bd').sequelize

const Membro = db.define('Membro', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    estado_civil: {
        type: DataTypes.STRING
    },
}, {
});

module.exports = Membro