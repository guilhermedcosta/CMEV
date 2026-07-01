const { DataTypes } = require('sequelize');
const sequelize = require('../config/conn');

const Pedido = sequelize.define('Pedido', {

    cod_item: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
        allowNull: false
    }

}, {
    timestamps: false
});

module.exports = Pedido;