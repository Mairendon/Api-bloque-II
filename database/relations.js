const Clinica = require('../api/models/clinica.model')
const Doctor = require('../api/models/doctor.model');

const Paciente = require('../api/models/paciente.model')
const Specialty = require('../api/models/specialty.model');

function addRelations() {
    try {
        console.log('relations added to all models')
    } catch (error) {
        throw error
    }
}
module.exports = addRelations