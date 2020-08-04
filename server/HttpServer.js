const express = require("express")
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyparser.json())

app.listen(3001, ()=>{
    console.log('express is running on 3001')
})

app.use('/api', (req, res) => {
    console.log('request from client')
    res.json({name:'express'})
})