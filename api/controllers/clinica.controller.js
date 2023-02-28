const Clinica = require('../models/clinica.model');

module.exports = {
    getClinicas,
    getOneClinica,
    createClinica,
    updateClinica,
    deleteClinica
};

async function getClinicas(req, res) {
    try {
        const clinica = await Clinica.findAll({
            where: req.query,
            attributes: ["id", "name", "population", "phone",]
        })
        if (clinica) {
            return res.status(200).json(clinica)
        } else {
            return res.status(404).send('Clinica not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneClinica(req, res) {
    try {
        const clinica = await Clinica.findByPk(req.params.id)
        if (clinica) {
            return res.status(200).json(clinica)
        } else {
            return res.status(404).send('Clinica not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createClinica(req, res) {
    try {
        const clinica = await Clinica.create(req.body)
        return res.status(200).json({ message: 'Clinica create', clinica: clinica })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateClinica(req, res) {
    try {
        const [clinicaExist, clinica] = await Clinica.update(req.body, {
            returning: true,
            where: { id: req.params.id }
        })
        if (clinicaExist !== 0) {
            return res.status(200).json({ message: 'clinica update', clinica: clinica })
        } else {
            return res.status(404).send('Clinica not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteClinica(req, res) {
    try {
        const clinica = await Clinica.findOne({ where: { id: req.params.id } })
        if (clinica) {
            await clinica.destroy()
            return res.status(200).json('Clinica deleted')
        } else {
            return res.status(404).send(`Clinica not found`)
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

