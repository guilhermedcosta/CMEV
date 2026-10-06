const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('Pedido', {
    cod_item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    setor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    material: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Pedido;
