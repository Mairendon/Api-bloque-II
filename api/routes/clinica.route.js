const router = require('express').Router()

const {
    getClinicas,
    getOneClinica,
    createClinica,
    updateClinica,
    deleteClinica
} = require('../controllers/clinica.controller')

const { checkAuth, checkadmin } = require('../utils/index')

router.get('/', checkAuth, getClinicas)
router.get('/:id', checkAuth, getOneClinica)
router.post('/', checkAuth, checkadmin, createClinica)
router.put('/:id', checkAuth, checkadmin, updateClinica)

router.delete('/:id', checkAuth, checkadmin, deleteClinica)

module.exports = router