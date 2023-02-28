const Clinica = require('../api/models/clinica.model')

const Paciente = require('../api/models/paciente.model')

function addRelations() {
    try {
        console.log('relations added to all models')
    } catch (error) {
        throw error
    }
}
module.exports = addRelations