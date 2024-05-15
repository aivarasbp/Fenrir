const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/query', (req, res) => {
  const name = req.query.n;
  const surname = req.query.s;

  res.json({
    message: 'ok',
    got: {
      name, surname
    }
  });
});

app.post('/body', (req, res) => {
  const name = req.body.n;
  const surname = req.body.s;

  res.json({
    message: 'ok',
    got: {
      name, surname
    }
  });
});

app.listen(port, () => {
  console.log(`039 app listening on port ${port}`)
});