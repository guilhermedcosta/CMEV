const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    nome_produto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade_atual: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0 
    },
    cod_item: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
    }   
});     

module.exports = Produto;
