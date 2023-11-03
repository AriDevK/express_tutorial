const express = require('express');
const { faker } = require('@faker-js/faker');

import { User } from "./models/user.model";
import { Application, Request, Response } from 'express';


const app: Application = express();
const port = 3000;


let mock: User[] = []
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


app.get('/users', (req: Request, res: Response) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    let data = mock.slice(offset, limit)
    res.json(data)
  }
  else {
    res.json(mock)
  }
})

app.get('/users/:id', (req: Request, res: Response) => {
  let { id } = req.params;
  let data = mock.filter(user => user.id == id)
  let response = data.length > 0 ? data[0] : {}

  res.json(response)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
