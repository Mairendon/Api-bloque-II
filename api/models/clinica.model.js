const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Clinica = sequelize.define(
    'clinica',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        population: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ingresos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gastos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tratamientosPopu: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
)

module.exports = Clinica