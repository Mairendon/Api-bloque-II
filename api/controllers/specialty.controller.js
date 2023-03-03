const Specialty = require('../models/specialty.model');
const Doctor = require('../models/doctor.model');
const Paciente = require('../models/paciente.model');

module.exports = {
    getSpecialtys,
    getOneSpecialty,
    createSpecialty,
    updateSpecialty,
    deleteSpecialty,
    removeConnectionSpecialtyDoc,
    removeConnectionSpecialtyPaciente
};

async function getSpecialtys(req, res) {
    try {
        const specialty = await Specialty.findAll({
            where: req.query,
            attributes: ["id", "tratamiento"]
        })
        if (specialty) {
            return res.status(200).json(specialty)
        } else {
            return res.status(404).send('Specialty not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function getOneSpecialty(req, res) {
    try {
        const specialty = await Specialty.findByPk(req.params.id)
        if (specialty) {
            return res.status(200).json(specialty)
        } else {
            return res.status(404).send('Specialty not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function createSpecialty(req, res) {
    try {
        const specialty = await Specialty.create(req.body)
        return res.status(200).json({
            message: 'Specialty created',
            specialty: specialty
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function updateSpecialty(req, res) {
    try {
        const [specialtyExist, specialty] = await Specialty.update(req.body, {
            returning: true,
            where: { id: req.params.id }
        })
        if (specialtyExist !== 0) {
            return res.status(200).json({ message: 'Specialty updated', specialty: specialty })
        } else {
            return res.status(404).send('Specialty not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

async function deleteSpecialty(req, res) {
    try {
        const specialty = await Specialty.findOne({ where: { id: req.params.id } })
        if (specialty) {
            await specialty.destroy()
            return res.status(200).json('Specialty deleted');
        } else {
            return res.status(404).send('Specialty not found');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

async function removeConnectionSpecialtyDoc(req, res) {
    try {
        const doctor = Doctor.findByPk(req.params.doctorId);
        const specialty = Specialty.findByPk(req.params.specialtyId);

        await specialty.removeDoctor(doctor)
        if (specialty) {
            return res.status(200).json('Specialty-Doctor relationship removed');
        } else {
            return res.status(404).send('Specialty-Doctor not found');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

async function removeConnectionSpecialtyPaciente(req, res) {
    try {
        const paciente = Paciente.findByPk(req.params.pacienteId);
        const specialty = Specialty.findByPk(req.params.specialtyId);

        await specialty.removePaciente(paciente)
        if (specialty) {
            return res.status(200).json('Specialty-Paciente relationship removed');
        } else {
            return res.status(404).send('Specialty-Paciente not found');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};