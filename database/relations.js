const Clinica = require('../api/models/clinica.model')
const Doctor = require('../api/models/doctor.model');
const Paciente = require('../api/models/paciente.model')
const Specialty = require('../api/models/specialty.model');
const Pago = require('../api/models/pagoP.model');
const Cita = require('../api/models/citas.model');

function addRelations() {
    try {
        //Relation one to many
        Doctor.hasMany(Paciente)
        Paciente.belongsTo(Doctor)

        Doctor.hasMany(Cita)
        Cita.belongsTo(Doctor)

        Clinica.hasMany(Doctor)
        Doctor.belongsTo(Clinica)

        Clinica.hasMany(Paciente)
        Paciente.belongsTo(Clinica)

        Paciente.hasMany(Cita)
        Cita.belongsTo(Paciente)

        Clinica.hasMany(Cita)
        Cita.belongsTo(Clinica)

        Specialty.hasMany(Cita)
        Cita.belongsTo(Specialty)
        
        //relation one to one

        Clinica.hasOne(Pago)
        Pago.belongsTo(Clinica)

        Doctor.hasOne(Specialty)
        Specialty.belongsTo(Doctor)

        Specialty.hasOne(Pago)
        Pago.belongsTo(Specialty)

        Paciente.hasOne(Pago)
        Pago.belongsTo(Paciente)

        //relation many to many

        Paciente.belongsToMany(Specialty,
            {
                through: '_PacienteSpecialtys_',
                timestamps: false
            })
        Specialty.belongsToMany(Paciente,
            { through: '_PacienteSpecialtys_' })

        console.log('relations added to all models')
    } catch (error) {
        throw error
    }
}
module.exports = addRelations