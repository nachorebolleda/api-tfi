const express = require('express')
const router = express.Router();
const DB = require('../db')

// GET /alumnos
router.get('/alumnos', (req,res)=>{
    const datos = DB.Departmens.getDatos();    
    res.status(200).json(datos)
});

module.exports=router