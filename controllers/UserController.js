//Objeto de conexion
const sequelize = require('../config/seq')
//DataTypes
const{DataTypes,ValidationError} = require('sequelize')
//El modelo
const UserModel = require('../models/user')
const user = require('../models/user')
//Crear el objeto usuario
const User = UserModel(sequelize, DataTypes)
//Get: Para traer los users
exports.traerUsers =async(req, res)=>{
    const traerUser = await User.findAll(req.body)
    res.status(200).json(
    {
        "success" : true,
        "data" : traerUser
    }
    )
}

exports.traerUserPorId = async  (req , res )=>{
    try {
        const userId = await User.findByPk(req.params.id)
        //si usuario no existe
        if(!userId){
            res.status(422).json(
                {
                    "success": false,
                    "errors": [
                    "usuario no existe"
                    ]  
                }
               )   
        }else{
            res.status(200).json(
                {
                    "success": true,
"data": userId  
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

exports.crearUser = async(req, res)=>{
    try {
        const newUser = await User.create(req.body)
         res.status(201).json({
            "success" : true,
            "data" : newUser
        });
    } catch (error) {
    //    console.log(error);
        if (error instanceof ValidationError) {
            //Llevar errores al response
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

exports.actualizarUser=async (req, res)=>{
    //Actualizar usuario por id
   await User.update(req.body,{
    where: {
        id: req.params.id
    }
   } );
//Consultar datos actualizados
 const upUser = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "success" : true,
            "data" : upUser
        }
    )
}

//DELETE: borrar un user
exports.eliminarUser = async(req, res)=>{
    //Buscar al user por id

    const u = await User.findByPk(req.params.id)

    //Borrar al user por id
    const deleteUser = await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json(
        {
            "success" : true,
            "data" : deleteUser,
            "Usuario eliminado": u.name
        }
    )
}