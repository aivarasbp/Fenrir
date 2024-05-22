const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const fs = require('node:fs');
const animalsList = require('./animalsList');

const app = express();
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/add-animal', (req, res) => {
  console.log('Request body:', req.body);

  if (!req.body.animal) {
    return res.status(400).send('Bad Request: Missing animal data');
  }

  const { name, species, age } = req.body.animal;
  const id = uuidv4();

  let data = fs.readFileSync('./data/animals.json', 'utf8');
  data = JSON.parse(data);

  data.push({ id, animal: { name, species, age } });

  data = JSON.stringify(data);

  fs.writeFileSync('./data/animals.json', data);

  res.redirect(302, '/');
});

app.post('/seed-animals', (req, res) => {
  let data = fs.readFileSync('./data/animals.json', 'utf8');
  data = JSON.parse(data);

  animalsList.forEach(animal => {
    const id = uuidv4();
    data.push({ id, animal });
  });

  data = JSON.stringify(data);

  fs.writeFileSync('./data/animals.json', data);

  res.redirect(302, '/');
});

app.post('/delete-all-animals', (req, res) => {
  fs.writeFileSync('./data/animals.json', '[]', 'utf8');
  res.redirect(302, '/');
});

app.get('/', (req, res) => {
  let html = fs.readFileSync('./data/index.html', 'utf8');
  let data = fs.readFileSync('./data/animals.json', 'utf8');
  data = JSON.parse(data);

  const sort = req.query.sort;

  if (sort === 'asc') {
    data.sort((a, b) => a.animal.name.localeCompare(b.animal.name));
  } else if (sort === 'desc') {
    data.sort((a, b) => b.animal.name.localeCompare(a.animal.name));
  }

  let list = '';
  data.forEach(a => {
    list += `
    <li>
        <span>Name: ${a.animal.name}</span>
        <span>Species: ${a.animal.species}</span>
        <span>Age: ${a.animal.age} years</span>
        <a href="http://localhost/show-animal/${a.id}">show</a>
    </li>
    `;
  });

  html = html.replace('{{LIST}}', list);

  res.send(html);
});

app.listen(port, () => {
  console.log(`Zoo app listening on port ${port}`);
});
