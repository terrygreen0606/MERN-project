const express = require('express')
const app = express()

const config = require('config')

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoose = require('mongoose')

const port = process.env.PORT || 5000

const db = config.get('mongoURI')
mongoose
    .connect( db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then( ()=>console.log("MongoDB is connected") )
    .catch(err => console.log(err))

// Using routes
app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))
// End using routes

app.listen(
    port,
    ()=>console.log('Server running on port ' + port)
)