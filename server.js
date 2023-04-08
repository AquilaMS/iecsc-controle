const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  const data = { message: 'Hello from the backend!' };
  res.json(data);
});


app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
