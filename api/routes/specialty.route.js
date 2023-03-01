const router = require('express').Router();

const { 
    getSpecialtys, 
    getOneSpecialty,
    createSpecialty,
    updateSpecialty,
    deleteSpecialty
} = require('../controllers/specialty.controller');

router.get('/', getSpecialtys)
router.get('/:id', getOneSpecialty)

router.post('/', createSpecialty)
router.post('/:id', updateSpecialty)

router.delete('/:id', deleteSpecialty)

module.exports = router