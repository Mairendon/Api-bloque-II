const router = require('express').Router()

const {
    getClinicas,
    getOneClinica,
    createClinica,
    updateClinica,
    deleteClinica
} = require('../controllers/clinica.controller')

const { checkAuth } = require('../utils/index')

router.get('/', checkAuth, getClinicas)
router.get('/:id', checkAuth, getOneClinica)
router.post('/', checkAuth, createClinica)
router.put('/:id', checkAuth, updateClinica)

router.delete('/:id', checkAuth, deleteClinica)

module.exports = router