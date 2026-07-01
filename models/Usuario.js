const { DataTypes } = require('sequelize')
const sequelize = require("../config/db");

const Usuario = sequelize.define("Usuario", {

    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = Usuario;