const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

const Doctor = sequelize.define(
    'doctor',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dni: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'doctor',
            validate: {
              customValidator: (value) => {
                const enums = ['doctor', 'admin']
                if (!enums.includes(value)) {
                  throw new Error('not a valid option')
                }
              }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
);

module.exports = Doctor;