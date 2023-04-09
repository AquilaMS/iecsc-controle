const express = require('express')
const router = express.Router()
const entradaController = require('../controllers/Entrada')

router.post('/insert', entradaController.insertNewEntrada)


module.exports = router