const router = require('express').Router()

const clinicaRouter = require('./clinica.route')

router.use('/clinicas', clinicaRouter)

module.exports = router