const router = require('express').Router()
//mai hola
const {
    getCitas,
    getOneCita,
    createCita,
    updateCita,
    deleteCita
} = require('../controllers/citas.controller'); 

//router.get('/', getCitas)
//router.get('/:id', getOneCita)

//router.post('/', createCita)
//router.post('/:id', updateCita)

router.delete('/:id', deleteCita)

module.exports = router