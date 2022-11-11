const sequelize = require('../config/seq');
const{DataTypes, ValidationError}= require('sequelize');
const BootCampModel = require ('../models/bootcamp');
const bootcamp = require('../models/bootcamp');
const BootCamp = BootCampModel(sequelize, DataTypes);


//Establecer las rutas de bootcamp

//Get: Traer los BootCamps
exports.traerBootcamps=async (req, res)=>{
    const traerBootcamp= await BootCamp.findAll(req.body)
    res.status(200).json(
    {
        "succes": true,
        "data":  traerBootcamp
    }
    )
}

//Traer BootCamp por id
exports.traerBootcampId= async (req, res)=>{
    try {
        const bootCampId= await BootCamp.findByPk(req.params.id)
        if (!bootCampId) {
            res.status(422).json( 
            {
                "success": false,
                "errors":[
                    "BootCamp no existe"
                ]
            }
            )
        } else {
            res.status(200).json({
                "success": true,
                "data": bootCampId
            })
        }
    } catch (error) {
        res
        .status(500)
        .json({
            "success": true,
            "errors": "Erro de servidor"
        })
    }
}

//Crear BootCamp
exports.crearBootCamp= async (req, res)=>{
try {
    const newBootCamp = await BootCamp.create(req.body)
    res.status(201).json({
        "success": true,
        "data": newBootCamp
    })
} catch (error) {
    if (error instanceof ValidationError) {
        const errores = error.errors.map((e)=>{
            return e.message;
        })
        res.status(422).json({
            "success": false,
            "error": errores
        })
    } else {
        res.status(500).json({
            "success": false,
            "error": error.message
        });
    }
}
}

//Actualizar BootCamp
exports.actualizarBootCamp=async (req, res)=>{
    await BootCamp.update(req.body,{
        where: {
            id: req.params.id
        }
    });
    const upBootCamp = await BootCamp.findByPk(req.params.id)
    res.status(200).json({
        "success": true,
        "data": upBootCamp
    })
}

//Eliminar BootCamp
exports.eliminarBootCamp = async (req, res)=>{
    const u = await BootCamp.findByPk(req.params.id)

    const deleteBootCamp = await BootCamp.destroy({
        where:{
            id: req.params.id
        }
    })
    res.status(200).json(
        {
            "success" : true,
            "data" : deleteBootCamp,
            "BootCamo Eliminado": u.name
        }
        )
}