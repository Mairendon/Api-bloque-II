const Doctor = require('../models/doctor.model');

module.exports = {
    getDoctors,
    getOneDoctor,
    createDoctor,
    updateDoctor,
    deleteDoctor
};

async function getDoctors(req, res) {
    try {
        const doctor = await Doctor.findAll({
            where: req.query,
            attributes: [ "id", "name", "lastName", "phone", "dni",]
        })
        if (doctor) {
            return res.status(200).json(doctor)
        } else {
            return res.status(404).send('Doctor not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function getOneDoctor(req, res) {
    try {
        const doctor = await Doctor.findByPk(req.params.id)
        if (doctor) {
            return res.status(200).json(doctor)
        } else {
            return res.status(404).send('Doctor not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function createDoctor(req, res) {
    try {
        const doctor = await Doctor.create(req.body)
        return res.status(200).json({
            message: 'Doctor created',
            doctor: doctor
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function updateDoctor(req, res) {
    try {
        const [doctorExist, doctor] = await Doctor.update(req.body, {
            returning: true,
            where: { id: req.params.id }
        })
        if (doctorExist !== 0) {
            return res.status(200).json({
                message: 'Doctor updated',
                doctor: doctor
            })
        } else {
            return res.status(404).send('Doctor not found')
        }
    } catch (erro) {
        return res.status(500).send(error.message)
    }
};

async function deleteDoctor(req, res) {
    try {
        const doctor = await Doctor.findOne({ 
            where: { id: req.params.id } 
        })
        if (doctor) {
            await doctor.destroy()
            return res.status(200).json('Doctor: deleted')
        } else {
            return res.status(404).send(`Doctor not found`)
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};