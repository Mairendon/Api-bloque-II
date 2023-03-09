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

const { checkAuth, checkadmin } = require('../utils/index')
router.get('/', checkAuth, getPagos)
router.get('/:id', checkAuth, getOnePago)
router.get('/paciente/:pacienteId', checkAuth, getPagoPaciente)
router.get('/clinica/:clincaId', checkAuth, getPagosClinica)
router.get('/specialty/:specialtyId', checkAuth, getPagoSpecialty)

router.post('/', checkAuth, checkadmin, createPago)

router.put('/:id', checkAuth, checkadmin, updatePago)

router.delete('/:id', checkAuth, checkadmin, deletePago)
router.delete('/:pagoPId/clinica/:clinicaId', checkAuth, checkadmin, removeConnectionPagoClinica);
router.delete('/:pagoPId/paciente/:pacienteId', checkAuth, checkadmin, removeConnectionPagoPaciente);
router.delete('/:pagoPId/specialty/:specialtyId', checkAuth, checkadmin, removeConnectionPagoSpecialty);

module.exports = router