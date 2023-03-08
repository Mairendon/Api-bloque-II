const router = require('express').Router();

const {
    getSpecialtys,
    getOneSpecialty,
    getSpecialtyPaciente,
    createSpecialty,
    updateSpecialty,
    deleteSpecialty,
    removeConnectionSpecialtyPaciente
} = require('../controllers/specialty.controller');

const { checkAuth } = require('../utils/index')

router.get('/', checkAuth, getSpecialtys);
router.get('/:id', checkAuth, getOneSpecialty);
router.get('/paciente/:pacienteId', checkAuth, getSpecialtyPaciente);

router.post('/', checkAuth, createSpecialty);

router.put('/:id', checkAuth, updateSpecialty);

router.delete('/:id', checkAuth, deleteSpecialty)
router.delete('/:specialtyId/paciente/:pacienteId', checkAuth, removeConnectionSpecialtyPaciente);

module.exports = router