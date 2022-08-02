const express = require('express')
const router = express.Router();
const DB = require('./database')

// GET /alumnos
router.get('/alumnos', async (req,res)=>{
//  res.send("Entré a la ruta /alumnos")
    const datos = await DB.query('SELECT * FROM alumnos')    
    res.status(200).json(datos)
});

// GET /contenedores
router.get('/contenedores', async (req,res)=>{
    const datos = await DB.query('SELECT * FROM contenedores')    
    res.status(200).json(datos)
});


module.exports=router