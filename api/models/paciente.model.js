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
        birthDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        dni: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        historialMedico: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        historialDental: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tratamientosDone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nextAppointment: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
    { timestamps: false }
)

module.exports = Paciente