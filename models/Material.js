const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Material = sequelize.define('Material', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cod_item: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ncm: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
});

module.exports = Material;
