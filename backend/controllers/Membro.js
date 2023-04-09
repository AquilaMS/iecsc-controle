const membroService = require('../services/Membro')

const insertNewMembro = async(req, res) =>{
    console.log(req.body)
    const newMembro = membroService.insertNewMembro(req.body)
    return res.send(newMembro)
}

module.exports = {
    insertNewMembro
}