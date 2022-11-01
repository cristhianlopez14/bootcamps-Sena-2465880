//Objeto de conexion
const sequelize = require('../config/seq')
//DataTypes
const{DataTypes} = require('sequelize')
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

exports.traerUserPorId =async(req, res)=>{
    const traerUserId = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "success" : true,
            "data": traerUserId
        }
        )
}

exports.crearUser = async(req, res)=>{
const newUser = await User.create(req.body)
    res.status(201).json({
        "success" : true,
        "data" : newUser
    })
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


