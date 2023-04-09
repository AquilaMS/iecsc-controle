const express = require('express');
const app = express();
const bd = require('./bd').sequelize
const cors = require('cors');

const membroRouter = require('./routes/Membro')

app.use(cors());
app.use(express.json())

app.use('/membro', membroRouter)

const syncDB = async ()=>{
  try{
    await bd.sync()
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
