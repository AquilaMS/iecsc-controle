import axios from "axios";

const membroTeste = {
    nome: 'joao',
    data_nascimento: '01/01/2001',
    estado_civil: 'solteiro'
}

const connect = () => {
    axios.get('http://localhost:3001/membro/get', membroTeste)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

export default {
    connect
}