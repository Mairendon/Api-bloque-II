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
    //addCitasDoc,
    getCitaSpecialty,
    getCitaClinica,
    getCitaPaciente,
    getCitaDoc
} = require('../controllers/citas.controller'); 

router.get('/', getCitas)
router.get('/:id', getOneCita)
router.get('/specialty/:specialtyId', getCitaSpecialty)
router.get('/clinica/:clinicaId', getCitaClinica)
router.get('/paciente/:pacienteId', getCitaPaciente)
router.get('/doctor/:doctorId', getCitaDoc)

router.post('/', createCita)

router.put('/:id', updateCita)

router.delete('/:id', deleteCita)
//no hay que olvidadr añadir los dos puntos delante del :Id
router.delete('/:citaId/doctor/:doctorId', removeConnectionCitaDoc)
router.delete('/:citaId/paciente/:pacienteId', removeConnectionCitaPac)
router.delete('/:citaId/clinica/:clinicaId', removeConnectionCitaClinica)
router.delete('/:citaId/specialty/:specialtyId', removeConnectionCitaSpecialty)



module.exports = router