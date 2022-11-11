const express = require('express')
const {crearUser, traerUsers, traerUserPorId, actualizarUser, eliminarUser} =require ('../controllers/UserController')
// const { route } = require('./BootcampRoutes')
const router = express.Router()


//Rutas de usuario 

router.route('/')
            .get(traerUsers)
            .post(crearUser) 

router.route('/:id')
            .get(traerUserPorId)
            .put(actualizarUser)
            .delete(eliminarUser)

module.exports = router
