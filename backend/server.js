const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000
const app = express()
const colors = require('colors')
const connectDB = require('./config/db')

connectDB()

//Allows the server to accept text being sent back
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/meeting', require('./routes/meetingRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port}`))