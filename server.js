const express = require('express')
const app = express()

//import models

const { Building, Architect, Style } = require('./models')

const PORT = process.env.PORT || 6969

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))