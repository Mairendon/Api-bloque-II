const router = require('express').Router()

const {  signupDoctor, loginDoctor } = require('../controllers/auth.controller')


//completar revisar S
router.post('/signup', signupDoctor)
router.post('/login', loginDoctor)

module.exports = router