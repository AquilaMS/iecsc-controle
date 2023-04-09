const membroService = require('../services/Membro')

const insertNewMembro = async(req, res) =>{
    const newMembro = membroService.insertNewMembro(req.body)
    return res.send(newMembro)
}

const getAllMembros = async(req,res) =>{
    const allMembros = await membroService.getAllMembros()
    return res.send(allMembros)
}

module.exports = {
    insertNewMembro,
    getAllMembros
}