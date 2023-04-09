const Entrada = require('../models/Entrada')

const insertNewEntrada = async (entrada) => {
    const newEntrada = await Entrada.create({
        valor: entrada.valor,
        membro_nome: entrada.membro_nome,
        tipo: entrada.tipo
    })
    return newEntrada
}

module.exports = {
    insertNewEntrada,
}