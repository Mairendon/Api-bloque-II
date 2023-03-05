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
        // faltaba añadir el await delante de la variable
        if (!cita) {
            return res.status(404).send('Citas not found')
        } else {
            //await cita.removeDoctor(doctor)
            await doctor.removeCita(cita)
            // no hace falta llamar a las dos porque sólo hay info en una tabla
            //eso es una sentencia lógica, sacar el paciente de la cita, de la otra manera no funciona porque las citas no estan en doctor.
            return res.status(200).json('DoctorCita relationship remove')
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
            return res.status(200).json('PacienteCita relationship remove')
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
            return res.status(200).json('ClinicaCita relationship remove')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

async function removeConnectionCitaSpecialty(req, res) {
    try {
        const specialty = await Specialty.findByPk(req.params.specialtyId);
        const cita = await Cita.findByPk(req.params.citaId);

        if (!cita) {
            return res.status(404).send('Citas not found')

        } else {
            await specialty.removeCita(cita)
            return res.status(200).json('SpecialtyCita relationship remove')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

//add citas cosas
async function addCitasDoc(req, res) {
    try {
        const doctor = await Doctor.findByPk(req.params.doctorId);
        const cita = await Cita.findByPk(req.params.citaId);

        if (!cita) {
            return res.status(404).send('Citas not found')
        } else {
            await doctor.addCita(cita)
            return res.status(200).json({ message: 'Doctor Added', cita: cita, doctor: [doctor.name] })
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
