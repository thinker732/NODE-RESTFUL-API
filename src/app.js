const express=require('express')
const { Mongoose } = require('mongoose')

const app=express()
require('./db/mongoose')

app.use(express.json())


module.exports=app