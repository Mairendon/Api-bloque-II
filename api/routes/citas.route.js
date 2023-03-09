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

const { checkAuth, checkadmin } = require('../utils/index');

router.get('/', checkAuth, getCitas)
router.get('/:id', checkAuth, getOneCita)
router.get('/specialty/:specialtyId', checkAuth, getCitaSpecialty)
router.get('/clinica/:clinicaId', checkAuth, getCitaClinica)
router.get('/paciente/:pacienteId', checkAuth, getCitaPaciente)
router.get('/doctor/:doctorId', checkAuth, getCitaDoc)

router.post('/', checkAuth, checkadmin, createCita)

router.put('/:id', checkAuth, checkadmin, updateCita)

router.delete('/:id', checkAuth, checkadmin, deleteCita)
router.delete('/:citaId/doctor/:doctorId', checkAuth, checkadmin, removeConnectionCitaDoc)
router.delete('/:citaId/paciente/:pacienteId', checkAuth, checkadmin, removeConnectionCitaPac)
router.delete('/:citaId/clinica/:clinicaId', checkAuth, checkadmin, removeConnectionCitaClinica)
router.delete('/:citaId/specialty/:specialtyId', checkAuth, checkadmin, removeConnectionCitaSpecialty)



module.exports = router