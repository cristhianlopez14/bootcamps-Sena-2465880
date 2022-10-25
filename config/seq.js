const Sequelize = require('sequelize')

//Definir objeto sequelize de conexion:
const sequelize = new Sequelize(
    'devcamp-2465880',
    'root',
    '',
    {
        host:'localhost',
        dialect: 'mysql', 
        port: '3307'
    }
)

module.exports = sequelize