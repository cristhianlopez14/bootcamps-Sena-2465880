const sequelize = require('../config/seq')
const{DataTypes,ValidationError} = require('sequelize')
const ReviewsModel = require('../models/reviews')
 const reviews = require('../models/reviews')
const Review = ReviewsModel(sequelize, DataTypes)

//Get: Para traer los reviews
exports.traerReviews =async(req, res)=>{
    const traerReview = await Review.findAll(req.body)
    res.status(200).json(
    {
        "success" : true,
        "data" : traerReview
    }
    )
}

// Para traer los reviews por Id
exports.traerReviewPorId = async  (req , res )=>{
    try {
        const reviewId = await Review.findByPk(req.params.id)
        if(!reviewId){
            res.status(422).json(
                {
                    "success": false,
                    "errors": [
                    "Review no existe"
                    ]  
                }
               )   
        }else{
            res.status(200).json(
                {
                    "success": true,
                    "data": reviewId  
                }
               )   
        }     
    } catch (error) {
        res
        .status(500)
        .json({
             "success": false, 
             "errors":  "error de servidor"  
        })
    }
 }

exports.crearReview = async(req, res)=>{
    try {
        const newReview = await Review.create(req.body)
         res.status(201).json({
            "success" : true,
            "data" : newReview
        });
    } catch (error) {
        if (error instanceof ValidationError) {
            const errores = error.errors.map((e)=>{
                return e.message
            })
            res.status(422).json({
                "success" : false,
                "error" : errores
            });
        }else{
            res.status(500).json({
                "success" : false,
                "error" : error.message
            });
        }
        
        // console.log(error.errors[0].message);
    }

}

exports.actualizarReview=async (req, res)=>{
   await Review.update(req.body,{
    where: {
        id: req.params.id
    }
   } );
 const upReview = await Review.findByPk(req.params.id)
    res.status(200).json(
        {
            "success" : true,
            "data" : upReview
        }
    )
}



exports.eliminarReview = async(req, res)=>{

    const u = await Review.findByPk(req.params.id)

    const deleteReview = await Review.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json(
        {
            "success" : true,
            "data" : deleteReview,
            "Usuario eliminado": u.name
        }
    )
}