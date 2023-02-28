const router = require('express').Router()

const clinicaRouter = require('./clinica.route')
const doctorRouter = require('./doctor.route')

router.use('/clinicas', clinicaRouter)
router.use('/doctor', doctorRouter)

module.exports = router