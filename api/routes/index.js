const router = require('express').Router()

const clinicaRouter = require('./clinica.route')

const pacienteRouter = require('./paciente.route')

router.use('/clinicas', clinicaRouter)

router.use('/pacientes', pacienteRouter)

module.exports = router