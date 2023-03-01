const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Paciente = sequelize.define(
    'paciente',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dni: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        nextAppointment: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
    { timestamps: false }
)

module.exports = Paciente