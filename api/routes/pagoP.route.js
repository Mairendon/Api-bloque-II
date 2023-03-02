const router = require('express').Router()

const {
    getPagos,
    getOnePago,
    createPago,
    updatePago,
    deletePago
} = require('../controllers/pagoP.controller')

router.get('/', getPagos)
router.get('/:id', getOnePago)

router.post('/', createPago)
router.put('/:id', updatePago)

router.delete('/:id', deletePago)

module.exports = router