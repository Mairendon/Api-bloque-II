const jwt = require('jsonwebtoken')
const Doctor = require('../models/doctor.model');

module.exports = {
  checkAuth,
  checkadmin

}

async function checkAuth(req, res, next) {
  try {
    if (!req.headers.token) {
      res.status(403).json({ error: 'no token found' })
    }
    const decodedToken = jwt.verify(req.headers.token, process.env.SECRET)
    res.locals.doctor = await Doctor.findOne({ where: { dni: decodedToken.dni } })
    next()
  } catch (error) {
    res.status(403).json({ error: error.message })
  }
}

async function checkadmin(req, res, next) {
  try {
    if(res.locals.doctor.role !== 'admin') {
      res.status(402).json({ error: 'Doctor not authorised'})
    } else {
      next()
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}