const Specialty = require('../models/specialty.model');

module.exports = {
    getSpecialtys,
    getOneSpecialty,
    createSpecialty,
    updateSpecialty,
    deleteSpecialty,
};

async function getSpecialtys(req, res) {
    try {
        const specialty = await Specialty.findAll({
            where: req.query,
            attributes: ["id", "tratamiento", "paciente", "doctor"]
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
        const specialty = await Specialty.findByPK(req.params.id)
        if (specialty) {
            return res.status(200).json(specialty)
        } else {
            return res.status(404).send('Specialty not found')
        }
    } catch (erro) {
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
    } catch (erro) {
        res.status(500).send(error.message)
    }
};

async function updateSpecialty(req, res) {
    try {
        const [specialtyExist, specialty] = await Specialty.update(re.body, {
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
            return res.status(200).json('Specialty deleted')
        } else {
            return res.status(404).send('Specialty not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}