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

router.get('/', checkAuth,  getDoctors);
router.get('/:id', checkAuth, getOneDoctor);
router.get('/clinica/:clinicaId', checkAuth, getDocClinica);
router.get('/specialty/:specialtyId', checkAuth, getDocSpecialty);

router.put('/:id', checkAuth, checkadmin, updateDoctor);

router.delete('/:id', checkAuth, checkadmin, deleteDoctor);
router.delete('/:doctorId/clinica/:clinicaId', checkAuth,checkadmin, removeConnectionDocClinica);
router.delete('/:doctorId/specialty/:specialtyId', checkAuth,checkadmin, removeConnectionDocSpecialty);

module.exports = router;

