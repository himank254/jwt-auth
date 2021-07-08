const express = require('express')
const path = require('path')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express()


const port = 5000

app.use(cors())
app.use(express.json())
app.use('/', require(path.join(__dirname, '/route/auth_route.js')))



app.listen(port, ()=>{
    console.log(`Auth is litening at http://localhost:${port}`)
})