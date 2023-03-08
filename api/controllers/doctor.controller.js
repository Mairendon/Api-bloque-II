const Doctor = require('../models/doctor.model');
const Clinica = require('../models/clinica.model');
const Specialty = require('../models/specialty.model')

module.exports = {
    getDoctors,
    getOneDoctor,
    getDocClinica,
    getDocSpecialty,    
    updateDoctor,
    deleteDoctor,
    removeConnectionDocClinica,
    removeConnectionDocSpecialty
};

async function getDoctors(req, res) {
    try {
        const doctor = await Doctor.findAll({
            where: req.query,
            attributes: [ "id", "name", "phone", "dni",]
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

async function getDocClinica(req, res) {
    try {
        const clinica = await Clinica.findByPk(req.params.clinicaId, {
            include: [{ model: Doctor, attributes: [ "id", "name", "phone" ] }]
        })
        if (!clinica) {
            return res.status(404).send('Doctor not found')
        } else {
            return res.status(200).json(clinica)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function getDocSpecialty(req, res) {
    try {
        const specialty = await Specialty.findByPk(req.params.specialtyId, {
            include: [{ model: Doctor}]
        })
        if (!specialty) {
            return res.status(404).send('Specialty not found')
        } else {
            return res.status(200).json(specialty)
        }
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

async function removeConnectionDocClinica(req, res) {
    try {
        const clinica = await Clinica.findByPk(req.params.clinicaId);
        const doctor = await Doctor.findByPk(req.params.doctorId);

        if (doctor) {
            await doctor.removeClinica(clinica)
            return res.status(200).json('Doctor-Clinica relationship removed');
        } else {
            return res.status(404).send('Doctor not found');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

async function removeConnectionDocSpecialty(req, res) {
    try {
        const doctor = await Doctor.findByPk(req.params.doctorId);
        const specialty = await Specialty.findByPk(req.params.specialtyId);

        if (doctor) {

            await specialty.removeDoctor(doctor)
            return res.status(200).json('Specialty-Doctor relationship removed');

        } else {
            return res.status(404).send('Specialty-Doctor not found');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};