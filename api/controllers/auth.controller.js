const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Doctor = require('../models/doctor.model');
const Paciente = require('../models/paciente.model');

async function signupDoctor(req, res) {
  try {
    const hashed_pwd = await bcrypt.hashSync(req.body.password, 10);

    const doctor = await Doctor.create({
      name: req.body.name,
      dni: req.body.dni,
      password: hashed_pwd
    })
    
    const doctor_data = { name: doctor.name, dni: doctor.dni }
    const token = jwt.sign(
      doctor_data,
      process.env.SECRET,
      { expiresIn: '1h' }
    )
    return res.status(200).json({ token: token, ...doctor_data })

  } catch (error) {
    res.status(500).send(error.message)
  }

}

async function loginDoctor(req, res) {
  try {
    const doctor = await Doctor.findOne({ where: { dni: req.body.dni } })

    if (!doctor) {
      return res.status(404).json({ error: 'Wrong dni or password' })
    }

    const result = await bcrypt.compare(req.body.password, doctor.password)

    if (!result) {
      return res.json({ error: "wrong password or dni" })
    }

    const doctor_data = { name: doctor.name, dni: doctor.dni }
    const token = jwt.sign(
      doctor_data,
      process.env.SECRET,
      { expiresIn: '1h' }
    )
    return res.status(200).json({ token: token, ...doctor_data })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  signupDoctor,
  loginDoctor
}