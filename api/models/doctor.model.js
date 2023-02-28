const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Doctor = sequelize.define (
    'doctor',
    {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dni:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = Doctor;