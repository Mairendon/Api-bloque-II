const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Pago = sequelize.define(
    'pago',
    {
        Total: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        metodoPago: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pagoMensual: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        deuda: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        deudaPagada: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        }
    },
    { timestamps: false }
)

module.exports = Pago