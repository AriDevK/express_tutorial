const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;


let mock =[]
for (let i = 1; i <= 100; i++) {
    mock.push({
      id: i,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      image: faker.image.avatar(),
      biography: faker.person.bio(),
    })
}


app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    let data = mock.slice(offset, limit)
    res.json(data)
  }
  else {
    res.json(mock)
  }
})

app.get('/users/:id', (req, res) => {
  let { id } = req.params;
  let data = mock.filter(pokemon => pokemon.id == id)
  let response = data.length > 0 ? data[0] : {}

  res.json(response)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
