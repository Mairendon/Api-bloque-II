const { DataTypes} = require('sequelize')
const { sequelize } = require('../../database')

const Clinica = sequelize.define (
    'clinica', 
    {
        street: {
            type: DataTypes.STRING
        },
        number: {
            type: DataTypes.INTEGER
        },
    },
    { timestamps: false }
)

module.exports = Clinica