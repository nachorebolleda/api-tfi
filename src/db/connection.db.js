const mysql = require('mysql')

const pool = mysql.createConnection({
    host: process.env.DB_HOST           ||'localhost', 
    user: process.env.DB_USER           ||'root', 
    password: process.env.DB_PASSWORD   ||'sf41649501',
    database: process.env.DB_DATABASE   ||'virtualizacion',
    connectionLimit: 5,
});

module.exports=pool