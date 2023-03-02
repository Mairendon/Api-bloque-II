const router = require('express').Router()

const {
    getAllPatientes,
    getOnePaciente,
    createPaciente,
    updatePaciente,
    deletePaciente,
    getPacDoc
} = require('../controllers/paciente.controller')


router.get('/', getAllPatientes)
router.get('/:id', getOnePaciente)
router.get('/doctor/:id', getPacDoc)

router.post('/', createPaciente)
router.put('/:id', updatePaciente)

router.delete('/:id', deletePaciente)

module.exports = router