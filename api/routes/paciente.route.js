const router = require('express').Router()

const {
    getAllPatientes,
    getOnePaciente,
    createPaciente,
    updatePaciente,
    deletePaciente,
    getPacDoc,
    removeConnectionPacienteDoc,
    //addConnectionPacienteSpecialty
} = require('../controllers/paciente.controller')


router.get('/', getAllPatientes)
router.get('/:id', getOnePaciente)
router.get('/doctor/:id', getPacDoc)

router.post('/', createPaciente)
//router.post('/:pacienteId/specialty/:specialtyId', addConnectionPacienteSpecialty)

router.put('/:id', updatePaciente)

router.delete('/:id', deletePaciente)
router.delete('/:pacienteId/doctor/:doctorId', removeConnectionPacienteDoc)

module.exports = router