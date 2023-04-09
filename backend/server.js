const express = require('express');
const app = express();
const bd = require('./bd').sequelize
const cors = require('cors');

const Membro = require('./models/membro')
const Entrada = require('./models/Entrada')

const membroRouter = require('./routes/Membro')
const entradaRouter = require('./routes/Entrada')

app.use(cors());
app.use(express.json())

app.use('/membro', membroRouter)
app.use('/entrada', entradaRouter)

const syncDB = async ()=>{
  try{
    await Membro.sync()
    await Entrada.sync()
    console.log("All models were synchronized successfully.");
  }catch(error){
    console.error('Unable to connect to the database:', error);
  }
}

app.get('/', (req, res) => {
  const data = { message: 'Hello from the backend!' };
  res.json(data);
});

app.get('/get', syncDB, async (req, res) => {
  
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
