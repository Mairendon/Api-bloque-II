const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Specialty = sequelize.define(
    'specialty',
    {
        tratamiento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paciente: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        doctor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = Specialty;