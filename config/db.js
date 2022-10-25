const sequelize = require('./seq')
//Dependencia a la funcion para crear el modelo
const UserModel = require('../models/user')
//Dependencia a DataTypes
const {DataTypes} = require('sequelize')
const colors = require('colors')

//crear el modelo
const User = UserModel(sequelize , DataTypes)

//Crear una funciión asincrona para conexion
const connectDB = async() =>{
    try {
        await sequelize.authenticate()
        console.log('Se establecio la conexion de manera correcta'.bgYellow.red);
        //Seleccionar los users:
        //const users = await User.findAll()
        //console.log(users);

        //Crear nuevo users
    //const Sara = await User.create({ name: "Sara", email: "Sara@gmail.com", password:"1234"  });
    // console.log("Nombre:", Sara.name);
   } catch (error) {
        console.error(error);
    }
}

//Ejecutar la función de la conexion
module.exports = connectDB