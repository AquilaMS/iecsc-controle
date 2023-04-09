const Membro = require('../models/membro')

const insertNewMembro = async(membro)=>{
    try{
        console.log({membro})
        const newMembro = await Membro.create({
            nome: membro.nome,
            data_nascimento: membro.data_nascimento,
            estado_civil: membro.estado_civil
        })
        return newMembro
    }catch(err){
        return err.errors;
    }
}

module.exports = {
    insertNewMembro
}