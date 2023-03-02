const router = require('express').Router()

const {
    getCitas,
    getOneCita,
    createCita,
    updateCita,
    deleteCita
} = require('../controllers/citas.controller'); 

router.get('/', getCitas)
router.get('/:id', getOneCita)

router.post('/', createCita)
router.put('/:id', updateCita)

router.delete('/:id', deleteCita)

module.exports = router