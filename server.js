const express= require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const { response } = require('express')
const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require('./routes/UserRoutes')
const connectDB = require('./config/db')
const listEndpoints = require('express-list-endpoints')


//Establecer el archivo de configuración
//con variables de entorno

dotenv.config({
    path: './config_env/config.env'
})


//1. Crear el objeto app
const app = express()
app.use(express.json())

connectDB()

app.use('/api/v1/bootcamps', bootcampRoutes )
app.use('/api/v1/users', userRoutes )

console.log(listEndpoints(app));
//3. Ejecutar servidor de desarrollo de express

app.listen(process.env.PORT , ()=>{
    console.log(`Servidor iniciado en puerto:${process.env.PORT}`.bgWhite.black);
})