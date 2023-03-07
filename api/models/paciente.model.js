const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Paciente = sequelize.define(
    'paciente',
    {
        name: {
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
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        historialMedico: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        historialDental: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        tratamientosDone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.ENUM('paciente'),
            defaultValue: 'paciente'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { timestamps: false }
)

module.exports = Paciente