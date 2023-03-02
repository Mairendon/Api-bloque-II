const Cita = require('../models/citas.model')

module.export = {
 getCitas,
 getOneCita,
 createCita,
 updateCita,
 deleteCita
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

async function createCita (req, res) {
    try {
        const cita = await Cita.create(req.body)
        return res. status(200).json({ message: 'Cita created', cita: cita})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateCita(req, res) {
    try{
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
            return res. status(200).json('Cita deleted')
        } else {
            return res.status(404).send('Cita not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
};