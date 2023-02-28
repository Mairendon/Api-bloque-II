const router = require('express').Router()

const clinicaRouter = require('./clinica.route')
const doctorRouter = require('./doctor.route')
const pacienteRouter = require('./paciente.route')

router.use('/clinicas', clinicaRouter)
router.use('/doctor', doctorRouter)
router.use('/pacientes', pacienteRouter)

module.exports = router