const { DataTypes } = require('sequelize');
const db = require('../bd').sequelize

const Entrada = db.define('Entrada', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    valor: {
        type: DataTypes.FLOAT
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    membro_nome: {
        type: DataTypes.STRING
    },
}, {
});

module.exports = Entrada