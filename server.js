require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const routes = require('./routes/api')


const DATABASE = process.env.DATABASE
mongoose.connect(DATABASE, () => console.log('Connected to database'))

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', routes)


const PORT = process.env.PORT || 8800
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))