const router = require('express').Router()

const { getClinicas, getOneClinica, createClinica, updateClinica, deleteClinica } = require('../controllers/clinica.controller')

router.get('/', getClinicas)
router.get('/:id', getOneClinica) //ver como se hace el comando de solicitar

router.post('/', createClinica)
router.post('/:id', updateClinica)

router.delete('/:id', deleteClinica)
module.exports = router