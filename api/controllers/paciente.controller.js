const Paciente = require('../models/paciente.model');
const Doctor = require('../models/doctor.model');
const Clinica = require('../models/clinica.model')
const Specialty = require('../models/specialty.model')

module.exports = {
    getAllPatientes,
    getOnePaciente,
    createPaciente,
    updatePaciente,
    deletePaciente,
    getPacDoc,
    removeConnectionPacienteDoc,
    removeConnectionPacienteClinica,
    removeConnectionPacienteSpecialty,
   // addConnectionPacienteSpecialty

}

async function getAllPatientes(req, res) {
    try {
        const paciente = await Paciente.findAll({
            where: req.query,
            attributes: ["id", "name", "lastName", "phone", "dni"]
        })
        if (paciente) {
            return res.status(200).json(paciente)
        } else {
            return res.status(404).send('Paciente not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function getOnePaciente(req, res) {
    try {
        const paciente = await Paciente.findByPk(req.params.id)
        if (paciente) {
            return res.status(200).json(paciente)
        } else {
            return res.status(404).send('Paciente not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function createPaciente(req, res) {
    try {
        const paciente = await Paciente.create(req.body)
        return res.status(200).json({ message: 'Paciente create', paciente: paciente })
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function updatePaciente(req, res) {
    try {
        const [pacienteExist, paciente] = await Paciente.update(req.body, {
            returning: true,
            where: { id: req.params.id }
        })
        if (pacienteExist !== 0) {
            return res.status(200).json({ message: 'Paciente updated', paciente: paciente })
        } else {
            return res.status(404).send('Paciente not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function deletePaciente(req, res) {
    try {
        const paciente = await Paciente.findOne({ where: { id: req.params.id } })
        if (paciente) {
            await paciente.destroy()
            return res.status(200).json('Paciente deleted')
        } else {
            return res.status(404).send('Paciente not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function getPacDoc(req, res) { //JP non DJ
    try {
        const doctor = await Doctor.findByPk(req.params.id, {
            include: [{ model: Paciente }]
        })
        if (!doctor) {
            return res.status(404).send('doc not found')
        } else {
            //const pacientes = await doctor.getPacientes()
            return res.status(200).json(doctor)
        }
    } catch (error) {
        return res.status(500).send(`Error retrieving doctor's patients: ${error.message}`)
    }
};

async function removeConnectionPacienteDoc(req, res) {
    try {
        const paciente = await Paciente.findByPk(req.params.pacienteId);
        const doctor = await Doctor.findByPk(req.params.doctorId);

        if (!paciente) {
            return res.status(404).send('Paciente not found')
        } else {
            await doctor.removePaciente(paciente)
            return res.status(200).json('PacienteDoctor relationship removed')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

async function removeConnectionPacienteClinica(req, res) {
    try {
        const paciente = await Paciente.findByPk(req.params.pacienteId);
        const clinica = await Clinica.findByPk(req.params.clinicaId);

        if (!paciente) {
            return res.status(404).send('Paciente not found')
        } else {
            await clinica.removePaciente(paciente)
            return res.status(200).json('PacienteClinica relationship removed')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

async function removeConnectionPacienteSpecialty(req, res) {
    try {
        const paciente = await Paciente.findByPk(req.params.pacienteId);
        const specialty = await Specialty.findByPk(req.params.specialtyId)
        if (!paciente) {
            return res.status(404).send('Paciente not found')
        } else {
            await specialty.removePaciente(paciente)
            await paciente.removeSpecialty(specialty)
            return res.status(200).json('PacienteSpecialty relationship removed')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

/*async function addConnectionPacienteSpecialty(req, res) {
    try {
        const paciente = await Paciente.findByPk(req.params.pacienteId);
        const specialty = await Specialty.findByPk(req.params.SpecialtyId);
        
        await paciente.addSpecialty(specialty)
        return res.status(200).json({ message: 'Paciente added', paciente: paciente})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}*/
