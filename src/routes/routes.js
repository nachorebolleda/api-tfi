const express = require('express')
const router = express.Router();
const DB = require('../db')

// GET /alumnos
router.get('/alumnos', async (req,res)=>{
  res.send("Entré a la ruta /alumnos")
    // const datos = await DB.Routes.getDatos();    
    // res.status(200).json(datos)
});

// GET /contenedores
router.get('/contenedores', async (req,res)=>{
    const datos = await DB.Routes.getInfo();    
    res.status(200).json(datos)
});


module.exports=router