const express = require('express')

const router = express.Router()


//Establecer las rutas de Usuario

router.get('/', (req, res)=>{
    res.status(200).json(
    {
        "message" : "aqui se va a mostrar todos los Usuario"
    }
    )
})

router.get('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va mostrarse el usuario cuyo id es: ${req.params.id}` 
        }
        )
})

router.post('/', (req, res)=>{
    res.status(201).json(
        {
            "message" : `aqui va a crear el usuario` 
        }
        )
})


router.put('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va a actualizar cuyo Usuario tenga como id: ${req.params.id}` 
        }
        )
})


router.delete('/:id' , (req, res)=>{
    res.status(200).json(
        {
            "message" : `aqui se va a eliminar cuyo Usuario tenga como id: ${req.params.id}` 
        }
        )
})

module.exports = router
