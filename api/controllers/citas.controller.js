const Cita = require('../models/citas.model')
const Doctor = require('../models/doctor.model')
const Paciente = require('../models/paciente.model')
const Specialty = require('../models/specialty.model')
const Clinica = require('../models/clinica.model')

module.exports = {
    getCitas,
    getOneCita,
    createCita,
    updateCita,
    deleteCita,
    getCitaDoc,
    getCitaPaciente,
    getCitaSpecialty,
    getCitaClinica,
    removeConnectionCitaDoc,
    removeConnectionCitaPac,
    removeConnectionCitaClinica,
    removeConnectionCitaSpecialty,

};

async function getCitas(req, res) {
    try {
        const cita = await Cita.findAll({
            where: req.query,
            attributes: ["id", "date"]
        })
        if (cita) {
            return res.status(200).json(cita)
        } else {
            return res.status(404).send('Cita not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function getOneCita(req, res) {
    try {
        const cita = await Cita.findByPk(req.params.id)
        if (cita) {

            return res.status(200).json(cita)
        } else {
            return res.status(404).send('Cita not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

async function getCitaDoc(req, res) {
    try {
        const doctor = await Doctor.findByPk(req.params.doctorId, {
            include: [{ model: Cita }]
        })
        if (!doctor) {
            return res.status(404).send('Cita not found')
        } else {
            return res.status(200).json(doctor)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
} 

async function getCitaPaciente(req, res) {
    try {
        const paciente = await Paciente.findByPk(req.params.pacienteId, {
            include: [{ model: Cita }]
        })
        if (!paciente) {
            return res.status(404).send('Cita not found')
        } else {
            return res.status(200).json(paciente)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getCitaSpecialty(req, res) {
    try {
        const specialty = await Specialty.findByPk(req.params.specialtyId, {
            include: [{ model: Cita }]
        })
        if (!specialty) {
            return res.status(404).send('Cita not found')
        } else {
            return res.status(200).json(specialty)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getCitaClinica(req, res) {
    try {
        const clinica = await Clinica.findByPk(req.params.clinicaId, {
            include: [{ model: Cita }]
        })
        if (!clinica) {
            return res.status(404).send('Cita not found')
        } else {
            return res.status(200).json(clinica)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createCita(req, res) {
    try {
        const cita = await Cita.create(req.body)
        return res.status(200).json({ message: 'Cita created', cita: cita })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateCita(req, res) {
    try {
        const [citaExist, cita] = await Cita.update(req.body, {
            returning: true,
            where: { id: req.params.id }
        })
        if (citaExist !== 0) {

            return res.status(200).json({ message: 'cita update', cita: cita })
        } else {
            return res.status(404).send('Cita not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

async function deleteCita(req, res) {
    try {
        const cita = await Cita.findOne({
            where: { id: req.params.id }
        })
        if (cita) {
            await cita.destroy()
            return res.status(200).json('Cita deleted')
        } else {
            return res.status(404).send('Cita not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

async function removeConnectionCitaDoc(req, res) {
    try {
        const doctor = await Doctor.findByPk(req.params.doctorId);
        const cita = await Cita.findByPk(req.params.citaId);
        
        if (!cita) {
            return res.status(404).send('Citas not found')
        } else {
            
            await doctor.removeCita(cita)
           
            return res.status(200).json('Doctor-Cita relationship remove')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

async function removeConnectionCitaPac(req, res) {
    try {
        const paciente = await Paciente.findByPk(req.params.pacienteId);
        const cita = await Cita.findByPk(req.params.citaId);

        if (!cita) {
            return res.status(404).send('Citas not found')

        } else {
            await paciente.removeCita(cita)
            return res.status(200).json('Paciente-Cita relationship remove')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

async function removeConnectionCitaClinica(req, res) {
    try {
        const clinica = await Clinica.findByPk(req.params.clinicaId);
        const cita = await Cita.findByPk(req.params.citaId);

        if (!cita) {
            return res.status(404).send('Citas not found')

        } else {
            await clinica.removeCita(cita)
            return res.status(200).json('Clinica-Cita relationship remove')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

async function removeConnectionCitaSpecialty(req, res) {
    try {
        const specialty = await Specialty.findByPk(req.params.specialtyId);
        const cita = await Cita.findByPk(req.params.citaId);

        if (!specialty) {
            return res.status(404).send('Specialty not found')
        }

        if (!cita) {
            return res.status(404).send('Cita not found')
        
        } else {
            await specialty.removeCita(cita)
            return res.status(200).json('Specialty-Cita relationship remove')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

