const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Pedido = db.define('Pedido', {
    cod_item: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    },
    categoria: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING  
    }
});

module.exports = Pedido;