const router = require('express').Router()

const { getClinica, getOneClinica, createClinica } = require('../controllers/clinica.controller')

router.get('/', getClinica)
router.get('/:id', getOneClinica)

router.post('/', createClinica)
module.exports = router