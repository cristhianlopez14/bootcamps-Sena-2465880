const express = require('express');
const {crearBootCamp,traerBootcamps, traerBootcampId, actualizarBootCamp, eliminarBootCamp} = require('../controllers/BootCampsController');
// const { route } = require('./BootcampRoutes')
const router = express.Router()

//Rutas para BootCamps

router.route('/')
            .get(traerBootcamps)
            .post(crearBootCamp)
 
router.route('/:id')
            .get(traerBootcampId)
            .put(actualizarBootCamp)
            .delete(eliminarBootCamp)

module.exports = router
