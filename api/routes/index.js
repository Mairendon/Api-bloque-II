const router = require('express').Router()

const clinicaRouter = require('./clinica.route')
const doctorRouter = require('./doctor.route')
const pacienteRouter = require('./paciente.route')
const specialtyRouter = require('./specialty.route')
const pagoPacienteRouter = require('./pagoP.route')
const citasRouter = require('./citas.route')
const authRouter = require('./auth.router')

router.use('/clinicas', clinicaRouter)
router.use('/doctors', doctorRouter)
router.use('/pacientes', pacienteRouter)
router.use('/specialties', specialtyRouter)
router.use('/pagos', pagoPacienteRouter)
router.use('/citas', citasRouter)
router.use('/auth', authRouter)

module.exports = router