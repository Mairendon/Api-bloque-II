const router = require('express').Router();

const { 
    getSpecialtys, 
    getOneSpecialty,
    getSpecialtyDoc,
    getSpecialtyPaciente,
    createSpecialty,
    updateSpecialty,
    deleteSpecialty,
    removeConnectionSpecialtyDoc,
    removeConnectionSpecialtyPaciente
} = require('../controllers/specialty.controller');

router.get('/', getSpecialtys);
router.get('/:id', getOneSpecialty);
router.get('/doctor/:doctorId', getSpecialtyDoc);
router.get('/paciente/:pacienteId', getSpecialtyPaciente);

router.post('/', createSpecialty);

router.put('/:id', updateSpecialty);

router.delete('/:id', deleteSpecialty)
router.delete('/:specialtyId/doctor/:doctorId', removeConnectionSpecialtyDoc);
router.delete('/:specialtyId/paciente/:pacienteId', removeConnectionSpecialtyPaciente);

module.exports = router