const router = require('express').Router()

const { getAllPatientes, getOnePaciente, createPaciente, updatePaciente, deletePaciente } = require('../controllers/paciente.controller')


router.get('/', getAllPatientes)
router.get('/:id', getOnePaciente)

router.post('/', createPaciente)
router.post('/:id', updatePaciente)

router.delete('/:id', deletePaciente)

 module.exports = router