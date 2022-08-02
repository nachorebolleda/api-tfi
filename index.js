require('dotenv').config()
const app = require('./src/app')

const PORT = process.env.HTTP_PORT || 4500

app.listen(PORT,()=>{
    console.log(`API corriendo en http://localhost:${PORT}/`)
})

