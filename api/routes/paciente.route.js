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

const { checkAuth, checkadmin } = require('../utils/index')

router.get('/', checkAuth, getAllPatientes)
router.get('/:id', checkAuth, getOnePaciente)
router.get('/doctor/:doctorId', checkAuth, getPacDoc)
router.get('/clinica/:clinicaId', checkAuth, getPacClc)
router.get('/specialty/:specialtyId', checkAuth, getPacSpecialty)

router.post('/', checkAuth, checkadmin, createPaciente)
router.post('/:pacienteId/specialty/:specialtyId', checkAuth, checkadmin, addConnectionPacienteSpecialty)

router.put('/:id', checkAuth, updatePaciente)

router.delete('/:id', checkAuth, deletePaciente)
router.delete('/:pacienteId/doctor/:doctorId', checkAuth, checkadmin, removeConnectionPacienteDoc)
router.delete('/:pacienteId/clinica/:clinicaId', checkAuth, checkadmin, removeConnectionPacienteClinica)
router.delete('/:pacienteId/specialty/:specialtyId', checkAuth, checkadmin, removeConnectionPacienteSpecialty)

module.exports = router