const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/about', (req, res) => {
  res.send('About Page');
})

app.get('/api', (req, res) => {
  res.json({
    name: 'Ari',
    age: 22
  });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
