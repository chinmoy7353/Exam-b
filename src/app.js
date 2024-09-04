const express = require('express')
const { cartRouter } = require('./router/catRouter')
const dbConection = require('./config/database')
const app = express()
const cors = require('cors')
const port = 3000

dbConection()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// router
app.use('/api/cart', cartRouter)


module.exports = {app, port}