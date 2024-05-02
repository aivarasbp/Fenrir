const express = require('express');
const app = express();
const port = 80;
app.use(express.static('public'));

// Router

app.get('/bebras', (req, res) => {
  const content = '<h1>Labas Bebrai</h1>';
  res.send(content);
});

app.get('/bebras/jonas', (req, res) => {
  const content = '<h1>Labas Bebrai vardu Jonas</h1>';
  res.send(content);
});

app.get('/zveris/:animal', (req, res) => {
  const animal = req.params.animal;
  const content = '<h1>Labas, ' + animal + '</h1>';
  res.send(content);
});

app.get('/sum/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const sum = num1 + num2;
  const content = `<h1>'Sum: ${sum}</h1>`;
  res.send(content);
});

app.get('/:num1/:what/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  let rez = '';
  if (req.params.what == 'plus') {
    rez = num1 + num2;
  } else if (req.params.what == 'minus') {
    rez = num1 - num2;
  }
  const content = `<h1>'Sum: ${rez}</h1>`;
  res.send(content);
})

app.get('/narve', (req, res) => {

  const kas = req.query.sedi;
  const kas2 = req.query.guli;

  const content = '<h1>Sedi:' + kas + '</h1><h1>Guli:' + kas2 + '</h1><h1>';
  res.send(content);
})

// http://localhost/narve?sedi=karve&guli=zuikis


// localhost/sumatorius?a=5&b=8
app.get('/sumatorius', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b)

  const rez = a + b;
  const content = '<h1>Sum:' + rez + '</h1>';
  res.send(content);
})



app.listen(port, () => {
  console.log(`Zoologijos sodas veikia ant ${port} porto`);
});