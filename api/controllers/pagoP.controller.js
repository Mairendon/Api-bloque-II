const Pago = require('../models/pagoP.model');
const Clinica = require('../models/clinica.model');
const Paciente = require('../models/paciente.model');
const Specialty = require('../models/specialty.model');

module.exports = {
    getPagos,
    getOnePago,
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

async function createPago(req, res) {
    try {
        const pago = await Pago.create(req.body)
        return res.status(200).json({ message: 'Pago create', pago: pago })
    }catch (error) {
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
            return res.status(200).json({ message: 'Pago updated', pago: pago})
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
        const clinica = Clinica.findByPk(req.params.clinicaId);
        const pago = Pago.findByPk(req.params.pagoId);

        await pago.removeClinica(clinica)
        if (pago) {
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
        const paciente = Paciente.findByPk(req.params.pacienteId);
        const pago = Pago.findByPk(req.params.pagoId);

        await pago.removePaciente(paciente)
        if (pago) {
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
        const specialty = Specialty.findByPk(req.params.specialtyId);
        const pago = Pago.findByPk(req.params.pagoId);

        await pago.removeSpecialty(specialty)
        if (pago) {
            return res.status(200).json('Pago-Specialty relationship removed');
        } else {
            return res.status(404).send('Pago-Specialty not found');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
};