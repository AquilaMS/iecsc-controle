const express = require('express')
const router = express.Router()
const membroController = require('../controllers/Membro')

router.post('/insert', membroController.insertNewMembro)
router.get('/get', membroController.getAllMembros)

module.exports = router