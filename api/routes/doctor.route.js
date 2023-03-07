const router = require('express').Router();

const { 
    getDoctors,
    getOneDoctor,
    getDocClinica,
    createDoctor,
    updateDoctor,
    deleteDoctor,
    removeConnectionDocClinica
} = require('../controllers/doctor.controller');

const { checkAuth, checkadmin } = require('../utils/index');

router.get('/', checkAuth, checkadmin, getDoctors);
router.get('/:id', getOneDoctor);
router.get('/clinica/:clinicaId', getDocClinica);

router.post('/', createDoctor);

router.put('/:id', updateDoctor);

router.delete('/:id', deleteDoctor);
router.delete('/:doctorId/clinica/:clinicaId', removeConnectionDocClinica);

module.exports = router;

