//completo, solo falta importar addrelations()
process.stdout.write('\x1B[2J\x1B[0f')
require('dotenv').config()

const { checkConnection, syncModels, } = require('./database/index')
const addRelations = require('./database/relations')

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');


async function check() {
    await checkConnection();
    addRelations()
    await syncModels();
};

function inicialieAndListenWithExpress() {
    const app = express()
        .use(helmet())
        .use(cors())
        .use(express.json())
        .use(morgan('dev'))
        .use('/api', require('./api/routes'))

        .listen(process.env.PORT, () => {
            console.log(`> Listening on port: ${process.env.PORT}`)
        });
};

async function startApi() {
    await check()
    inicialieAndListenWithExpress()
}

startApi()
