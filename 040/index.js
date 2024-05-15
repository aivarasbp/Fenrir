const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
  console.log(__dirname);
});

app.post('/write', (req, res) => {

  const digit = req.body.digit;

  let data = fs.readFileSync('./data/digits.json', 'utf8');

  data = JSON.parse(data);

  data.push(digit);

  data = JSON.stringify(data);

  fs.writeFileSync('./data/digits.json', data);

  res.json({
    message: 'ok'
  });

});

app.get('/read', function (req, res) {
  let data = fs.readFileSync('./data/digits.json', 'utf8');
  data = JSON.parse(data);

  res.json({
    message: 'ok',
    digits: data
  });
});

app.listen(port, _ => {
  console.log(`040 app listening on port ${port}`);
});