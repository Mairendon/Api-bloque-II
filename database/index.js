//completo
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false,
});

async function checkConnection() {
    try {
        await sequelize.authenticate()
        console.log('Conecction to DB is successfuly')
    } catch (error) {
        throw error
    }
}

async function syncModels(value) {
    const state = {
        alter: { alter: true },
        force: { force: true },
    }
    try {
        await sequelize.sync(state[value] || '')
        console.log('All OK')
    } catch (error) {
        throw error
    }
}

module.exports = {
    sequelize,
    checkConnection,
    syncModels

}