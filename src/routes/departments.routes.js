const express = require('express')
const router = express.Router();
const DB = require('../db')

// GET /alumnos
router.get('/alumnos',async (req,res)=>{
    const datos = await DB.Departmens.getDatos();    
    res.status(200).json(datos)
});

module.exports=router