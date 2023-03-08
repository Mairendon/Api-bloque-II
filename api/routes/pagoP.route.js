const router = require('express').Router()

const {
    getPagos,
    getOnePago,
    getPagoPaciente,
    getPagoSpecialty,
    createPago,
    updatePago,
    deletePago,
    removeConnectionPagoClinica,
    removeConnectionPagoPaciente,
    removeConnectionPagoSpecialty,
    getPagosClinica
} = require('../controllers/pagoP.controller')

const { checkAuth } = require('../utils/index')
router.get('/', checkAuth, getPagos)
router.get('/:id', checkAuth, getOnePago)
router.get('/paciente/:pacienteId', checkAuth, getPagoPaciente)
router.get('/clinica/:clincaId', checkAuth, getPagosClinica)
router.get('/specialty/:specialtyId', checkAuth, getPagoSpecialty)

router.post('/', checkAuth, createPago)

router.put('/:id', checkAuth, updatePago)

router.delete('/:id', checkAuth, deletePago)
router.delete('/:pagoPId/clinica/:clinicaId', checkAuth, removeConnectionPagoClinica);
router.delete('/:pagoPId/paciente/:pacienteId', checkAuth, removeConnectionPagoPaciente);
router.delete('/:pagoPId/specialty/:specialtyId', checkAuth, removeConnectionPagoSpecialty);

module.exports = router