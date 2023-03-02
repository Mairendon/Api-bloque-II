const router = require('express').Router();

const { 
    getDoctors,
    getOneDoctor,
    createDoctor,
    updateDoctor,
    deleteDoctor
} = require('../controllers/doctor.controller');

router.get('/', getDoctors);
router.get('/:id', getOneDoctor);

router.post('/', createDoctor);
router.put('/:id', updateDoctor);

router.delete('/:id', deleteDoctor);

module.exports = router;

