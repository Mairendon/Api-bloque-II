const router = require('express').Router();

const {
    getDoctors,
    getOneDoctor,
    getDocClinica,
    updateDoctor,
    deleteDoctor,
    removeConnectionDocClinica,
    removeConnectionDocSpecialty,
    getDocSpecialty
} = require('../controllers/doctor.controller');

const { checkAuth, checkadmin } = require('../utils/index');

router.get('/', checkAuth, checkadmin, getDoctors);
router.get('/:id', checkAuth, getOneDoctor);
router.get('/clinica/:clinicaId', checkAuth, getDocClinica);
router.get('/specialty/:specialtyId', checkAuth, getDocSpecialty);

router.put('/:id', checkAuth, updateDoctor);

router.delete('/:id', checkAuth, deleteDoctor);
router.delete('/:doctorId/clinica/:clinicaId', checkAuth, removeConnectionDocClinica);
router.delete('/:doctorId/specialty/:specialtyId', checkAuth, removeConnectionDocSpecialty);

module.exports = router;

