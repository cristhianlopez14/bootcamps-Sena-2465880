const express = require('express')
const {crearReview, traerReviews, traerReviewPorId, actualizarReview, eliminarReview} =require ('../controllers/ReviewsController')
// const { route } = require('./BootcampRoutes')
const router = express.Router()


//Rutas de usuario 

router.route('/')
            .get(traerReviews)
            .post(crearReview) 

router.route('/:id')
            .get(traerReviewPorId)
            .put(actualizarReview)
            .delete(eliminarReview)

module.exports = router
