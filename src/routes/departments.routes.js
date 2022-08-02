const express = require('express')
const router = express.Router();
const DB = require('../db')

// GET /alumnos
router.get('/alumnos', (req,res)=>{
    const datos = DB.Departmens.getDatos();    
    res.json(datos)
});

module.exports=router