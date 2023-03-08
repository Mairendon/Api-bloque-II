const router = require('express').Router()

const {
    getAllPatientes,
    getOnePaciente,
    createPaciente,
    updatePaciente,
    deletePaciente,
    getPacDoc,
    removeConnectionPacienteDoc,
    removeConnectionPacienteClinica,
    removeConnectionPacienteSpecialty,
    getPacClc,
    getPacSpecialty,
    addConnectionPacienteSpecialty
} = require('../controllers/paciente.controller')

const { checkAuth } = require('../utils/index')

router.get('/', checkAuth, getAllPatientes)
router.get('/:id', checkAuth, getOnePaciente)
router.get('/doctor/:doctorId', checkAuth, getPacDoc)
router.get('/clinica/:clinicaId', checkAuth, getPacClc)
router.get('/specialty/:specialtyId', checkAuth, getPacSpecialty)

router.post('/', checkAuth, createPaciente)
router.post('/:pacienteId/specialty/:specialtyId', checkAuth, addConnectionPacienteSpecialty)

router.put('/:id', checkAuth, updatePaciente)

router.delete('/:id', checkAuth, deletePaciente)
router.delete('/:pacienteId/doctor/:doctorId', checkAuth, removeConnectionPacienteDoc)
router.delete('/:pacienteId/clinica/:clinicaId', checkAuth, removeConnectionPacienteClinica)
router.delete('/:pacienteId/specialty/:specialtyId', checkAuth, removeConnectionPacienteSpecialty)

module.exports = router