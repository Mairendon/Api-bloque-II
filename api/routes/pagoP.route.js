const router = require('express').Router()

const {
    getPagos,
    getOnePago,
    createPago,
    updatePago,
    deletePago,
    removeConnectionPagoClinica,
    removeConnectionPagoPaciente,
    removeConnectionPagoSpecialty
} = require('../controllers/pagoP.controller')

router.get('/', getPagos)
router.get('/:id', getOnePago)

router.post('/', createPago)
router.put('/:id', updatePago)

router.delete('/:id', deletePago)

router.delete('/:pagoPId/clinica/:clinicaId', removeConnectionPagoClinica);
router.delete('/:pagoPId/paciente/:pacienteId', removeConnectionPagoPaciente);
router.delete('/:pagoPId/specialty/:specialtyId', removeConnectionPagoSpecialty);

module.exports = router