const Pago = require('../models/pagoP.model');
const Clinica = require('../models/clinica.model');
const Paciente = require('../models/paciente.model');
const Specialty = require('../models/specialty.model');

module.exports = {
    getPagos,
    getOnePago,
    getPagoPaciente,
    getPagoSpecialty,
    getPagosClinica,
    createPago,
    updatePago,
    deletePago,
    removeConnectionPagoClinica,
    removeConnectionPagoPaciente,
    removeConnectionPagoSpecialty,
}

async function getPagos(req, res) {
    try {
        const pagoP = await Pago.findAll({
            where: req.query,
            attributes: ["Total", "pagoMensual", "deuda", "metodoPago"]
        })
        if (pagoP) {
            return res.status(200).json(pagoP)
        } else {
            return res.status(404).send('Pagos not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOnePago(req, res) {
    try {
        const pago = await Pago.findByPk(req.params.id)
        if (pago) {
            return res.status(200).json(pago)
        } else {
            return res.status(404).send('Pago not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}
async function getPagoPaciente(req, res) {
    try {
        const paciente = await Paciente.findByPk(req.params.pacienteId, {
            include: [{ model: Pago }]
        })
        if (!paciente) {
            return res.status(404).send('Paciente not found')
        } else {
            return res.status(200).json(paciente)
        }
    } catch (error) {
        return res.status(500).send(`Error retrieving paciente's pago: ${error.message}`)
    }
};

async function getPagoSpecialty(req, res) {
    try {
        const specialty = await Specialty.findByPk(req.params.specialtyId, {
            include: [{ model: Pago }]
        })
        if (!specialty) {
            return res.status(404).send('Specialty not found')
        } else {
            return res.status(200).json(specialty)
        }
    } catch (error) {
        return res.status(500).send(`Error retrieving specialty's pago: ${error.message}`)
    }
};

async function getPagosClinica(req, res) {
    try {
        const clinica = await Clinica.findByPk(req.params.clinicaId, {
            include: [{ model: Pago }]
        })
        if (!clinica) {
            return res.status(404).send('clinica not found')
        } else {
            return res.status(200).json(clinica)
        }
    } catch (error) {
        return res.status(500).send(`Error retrieving clinica's pago: ${error.message}`)
    }
};

async function createPago(req, res) {
    try {
        const pago = await Pago.create(req.body)
        return res.status(200).json({ message: 'Pago create', pago: pago })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updatePago(req, res) {
    try {
        const [pagoExist, pago] = await Pago.update(req.body, {
            returning: true,
            where: { id: req.params.id }
        })
        if (pagoExist !== 0) {
            return res.status(200).json({ message: 'Pago updated', pago: pago })
        } else {
            return res.status(404).send('Pago not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deletePago(req, res) {
    try {
        const pago = await Pago.findOne({ where: { id: req.params.id } })
        if (pago) {
            await pago.destroy()
            return res.status(200).json('Pago deleted')
        } else {
            return res.status(404).send('Pago not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function removeConnectionPagoClinica(req, res) {
    try {
        const clinica = await Clinica.findByPk(req.params.clinicaId);
        const pago = await Pago.findByPk(req.params.pagoPId);

        if (pago) {
            await clinica.removePago(pago)
            return res.status(200).json('Pago-Clinica relationship removed');
        } else {
            return res.status(404).send('Pago-Clinica not found');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

async function removeConnectionPagoPaciente(req, res) {
    try {
        const paciente = await Paciente.findByPk(req.params.pacienteId);
        const pago = await Pago.findByPk(req.params.pagoPId);

        if (pago) {
            await paciente.removePago(pago)
            return res.status(200).json('Pago-Paciente relationship removed');
        } else {
            return res.status(404).send('Pago-Paciente not found');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

async function removeConnectionPagoSpecialty(req, res) {
    try {
        const specialty = await Specialty.findByPk(req.params.specialtyId);
        const pago = await Pago.findByPk(req.params.pagoPId);

        if (pago) {
            await specialty.removePago(pago)
            return res.status(200).json('Pago-Specialty relationship removed');
        } else {
            return res.status(404).send('Pago-Specialty not found');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};