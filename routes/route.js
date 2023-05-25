const express = require('express')
const { createUser, getUser } = require('../controller/userController')
const router = express.Router()
// const {mysqlConnection} = require('../index')

router.post('/createuser', createUser)

router.get('/getuser/:id', getUser)

module.exports = router