const router = require('express').Router()

const {
    getCitas,
    getOneCita,
    createCita,
    updateCita,
    deleteCita,
    removeConnectionCitaDoc,
    removeConnectionCitaPac,
    removeConnectionCitaClinica,
    removeConnectionCitaSpecialty,
    getCitaSpecialty,
    getCitaClinica,
    getCitaPaciente,
    getCitaDoc
} = require('../controllers/citas.controller');

const { checkAuth } = require('../utils/index');

router.get('/', checkAuth, getCitas)
router.get('/:id', checkAuth, getOneCita)
router.get('/specialty/:specialtyId', checkAuth, getCitaSpecialty)
router.get('/clinica/:clinicaId', checkAuth, getCitaClinica)
router.get('/paciente/:pacienteId', checkAuth, getCitaPaciente)
router.get('/doctor/:doctorId', checkAuth, getCitaDoc)

router.post('/', checkAuth, createCita)

router.put('/:id', checkAuth, updateCita)

router.delete('/:id', checkAuth, deleteCita)
router.delete('/:citaId/doctor/:doctorId', checkAuth, removeConnectionCitaDoc)
router.delete('/:citaId/paciente/:pacienteId', checkAuth, removeConnectionCitaPac)
router.delete('/:citaId/clinica/:clinicaId', checkAuth, removeConnectionCitaClinica)
router.delete('/:citaId/specialty/:specialtyId', checkAuth, removeConnectionCitaSpecialty)



module.exports = router