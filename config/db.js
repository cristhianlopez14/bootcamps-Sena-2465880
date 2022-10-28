const sequelize = require('./seq')
const colors = require('colors')

//Crear una funciión asincrona para conexion
const connectDB = async() =>{
    try {
        await sequelize.authenticate()
        console.log('Se establecio la conexion de manera correcta'.bgYellow.red);
    } catch (error) {
        console.error(error);
    }
}
module.exports = connectDB