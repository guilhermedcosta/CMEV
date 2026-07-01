const { DataTypes } = require('sequelize');
const sequelize = require('../config/conn');

const Pedido = sequelize.define('Pedido', {
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
});

module.exports = Pedido;