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

const { checkAuth, checkadmin } = require('../utils/index')

router.get('/', checkAuth, getSpecialtys);
router.get('/:id', checkAuth, getOneSpecialty);
router.get('/paciente/:pacienteId', checkAuth, getSpecialtyPaciente);

router.post('/', checkAuth, checkadmin, createSpecialty);

router.put('/:id', checkAuth,checkadmin, updateSpecialty);

router.delete('/:id', checkAuth, checkadmin,deleteSpecialty)
router.delete('/:specialtyId/paciente/:pacienteId', checkAuth, checkadmin,removeConnectionSpecialtyPaciente);

module.exports = router