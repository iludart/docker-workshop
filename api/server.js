const express = require('express');
const cors = require('cors');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'workshop'
  }
});

const app = express();
app.use(cors());

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  knex.select('*').from('users').where({ id }).then((rows) => {
    res.send(rows[0]);
  });
});

app.listen(3001, () => console.log('Server is listening on port 3001'));