const express = require('express');
const app = express();
const port = 3000;


let mock =[
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'grass'
  },
  {
    id: 2,
    name: 'Charmander',
    type: 'fire'
  },
  {
    id: 3,
    name: 'Squirtle',
    type: 'water'
  }
]

app.get('/pokemons', (req, res) => {
  res.json(mock)
})

app.get('/pokemons/:id', (req, res) => {
  let { id } = req.params;
  let data = mock.filter(pokemon => pokemon.id == id)
  let response = data.length > 0 ? data[0] : {}

  res.json(response)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
