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
    //addConnectionPacienteSpecialty
} = require('../controllers/paciente.controller')


router.get('/', getAllPatientes)
router.get('/:id', getOnePaciente)
router.get('/doctor/:doctorId', getPacDoc)
router.get('/clinica/:clinicaId', getPacClc)
router.get('/specialty/:specialtyId', getPacSpecialty)

router.post('/', createPaciente)
//router.post('/:pacienteId/specialty/:specialtyId', addConnectionPacienteSpecialty)

router.put('/:id', updatePaciente)

router.delete('/:id', deletePaciente)
router.delete('/:pacienteId/doctor/:doctorId', removeConnectionPacienteDoc)
router.delete('/:pacienteId/clinica/:clinicaId', removeConnectionPacienteClinica)
router.delete('/:pacienteId/specialty/:specialtyId', removeConnectionPacienteSpecialty)

module.exports = router