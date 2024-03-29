const express = require('express')
const app = express()

const db = require('./db')
const router = require('./router')

app.use(express.json())
app.use(express.static('public'))

db.connect()
    .then(() => {
        router(app)

        app.listen(3000,
            () => console.log('server is up'))
    })