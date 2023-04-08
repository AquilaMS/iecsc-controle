const express = require('express');
const app = express();
const db = require('./db').db;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  const data = { message: 'Hello from the backend!' };
  res.json(data);
});

app.get('/get', async (req, res) => {
  try {
    const rows = await new Promise((resolve, reject) => {
      db.all('SELECT * FROM membros', [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });

    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
