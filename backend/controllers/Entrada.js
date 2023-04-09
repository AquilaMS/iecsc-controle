const entradaService = require('../services/Entrada')

const insertNewEntrada = async(req, res) =>{
    const newEntrada = entradaService.insertNewEntrada(req.body)
    return res.send(newEntrada)
}

module.exports = {
    insertNewEntrada,
}