const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Cita = sequelize.define(
    'cita',
    {
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

    },
    { timestamps: false },
)

module.exports = Cita