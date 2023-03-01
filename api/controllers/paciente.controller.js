const Paciente = require('../models/paciente.model');
const Doctor = require('../models/doctor.model');

module.exports = {
    getAllPatientes,
    getOnePaciente,
    createPaciente,
    updatePaciente,
    deletePaciente,
    getPacDoc

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
}

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
}

async function createPaciente(req, res) {
    try {
        const paciente = await Paciente.create(req.body)
        return res.status(200).json({ message: 'Paciente create', paciente: paciente })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

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
}

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
}

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
}

//async function 