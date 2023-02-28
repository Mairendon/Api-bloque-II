const router = require('express').Router()

const { getClinica, getOneClinica, createClinica, updateClinica, deleteClinica } = require('../controllers/clinica.controller')

router.get('/', getClinica)
router.get('/:id?', getOneClinica)

router.post('/', createClinica)
router.post('/:id', updateClinica)

router.delete('/:id', deleteClinica)
module.exports = router