const Clinica = require('../models/clinica.model');

module.exports = { 
    getClinica, 
    getOneClinica, 
    createClinica
 };

async function getClinica(req, res) {
    try {
        const clinica = await Clinica.findAll({ paranoid: false })
        if (clinica) {
            return res.status(200).json(clinica)
        } else {
            return res.status(404).send('No clinica found')
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