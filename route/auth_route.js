const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const userlist = require('../model/user')

const path = require('path')

router.get('/', (req, res) => {
    res.send("This is working")
})

router.post('/login', (req, res) => {
    if (userlist[0].email == req.body.name && userlist[0].password == req.body.password){
        const token = jwt.sign({id: userlist[0].id}, 'himankkasecrethaiyeh')
        res.send(token)
    }

    else{
        res.status(400).send({error: "Please enter correct mail and password"})
    }
})

module.exports = router