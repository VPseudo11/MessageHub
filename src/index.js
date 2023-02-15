const express = require('express')
const responseHandlers = require('./utils/handleResponse')
const { api } = require('../config')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const usersRouter = require('./users/users.router')

const app = express()
app.use(express.json())

db.authenticate()
    .then(() => console.log('DB autentication successfully'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('DB synced'))
    .catch((err) => console.log(err))

initModels()

app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'OK',
        data: {
            'users': 'http://localhost:9000/api/v1/users'
        }
    })
})

app.use('/api/v1/users', usersRouter)

app.use('*', (req, res) => {
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found, please try with http://localhost:9000/'
    })
})

app.listen(api.port, () => console.log('Succes 😼😼😼 ' + api.port))