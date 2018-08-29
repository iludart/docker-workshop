const express = require('express');
const cors = require('cors');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'db',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
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

app.listen(80, () => console.log('Server is listening on port 80'));