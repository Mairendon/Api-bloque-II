const router = require('express').Router()

const clinicaRouter = require('./clinica.route')

router.use('/clinica', clinicaRouter)

module.exports = router