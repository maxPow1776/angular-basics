const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const animals = require('./animals.routes')

require('dotenv').config()
const USER = process.env.MONGO_USERNAME
const PASSWORD = process.env.MONGO_PASSWORD

const app = express()

const port = process.env.PORT || 8080

app.use(cors())

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(`mongodb://${USER}:${PASSWORD}@testdb-shard-00-00.vadd7.mongodb.net:27017,testdb-shard-00-01.vadd7.mongodb.net:27017,testdb-shard-00-02.vadd7.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-l1ui51-shard-0&authSource=admin&retryWrites=true&w=majority`)
mongoose.connection.on('connected', () => console.log('Successful connection to the database'))
mongoose.connection.on('error', err => console.log(`Unsuccessful database connection: ${err}`))

app.use('/animals', animals)

app.listen(port, () => {
    console.log(`running on port: ${port}`)
})