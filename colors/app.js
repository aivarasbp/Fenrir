const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');
const fs = require('fs');
const app = express();
const port = 80;

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Utility functions
const readFileSyncJSON = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));
const writeFileSyncJSON = (filePath, data) => fs.writeFileSync(filePath, JSON.stringify(data));

// const addNav2 = (id, html) => {
//   let nav = fs.readFileSync('./data/nav.html', 'utf8');
//   let userHtml;
//   let data = fs.readFileSync('./data/sessions.json', 'utf8');
//   data = JSON.parse(data);
//   const session = data.find(s => s.id === id);

//   if (!session || !session.d?.user) {
//     userHtml = fs.readFileSync('./data/navAnon.html', 'utf8');
//   } else {
//     userHtml = fs.readFileSync('./data/navUser.html', 'utf8');
//     const email = getUserEmail(id);
//     userHtml = userHtml.replace('{{NAME}}', email);
//   }
//   nav = nav.replace('{{USER}}', userHtml);
//   return html.replace('{{NAV}}', nav);
// };

const addNav = (id, html) => {
  let nav = fs.readFileSync('./data/nav.html', 'utf8');
  let userHtml;
  if (!isLogged(id)) {
    userHtml = fs.readFileSync('./data/navAnon.html', 'utf8');
  } else {
    userHtml = fs.readFileSync('./data/navUser.html', 'utf8');
    const email = getUserEmail(id);
    userHtml = userHtml.replace('{{NAME}}', email);
  }
  nav = nav.replace('{{USER}}', userHtml);
  return html.replace('{{NAV}}', nav);
}

const getUserEmail = (id) => {
  let data = readFileSyncJSON('./data/sessions.json');
  const session = data.find(s => s.id === id);
  return session && session.d?.user ? session.d.user : '';
}

const addMessage = (id, text, type) => {
  let data = readFileSyncJSON('./data/sessions.json');
  data = data.map(s => s.id === id ? { id, d: { ...s.d, msg: { text, type } } } : s);
  writeFileSyncJSON('./data/sessions.json', data);
}

const showMessage = (id) => {
  let data = readFileSyncJSON('./data/sessions.json');
  const session = data.find(s => s.id === id);
  if (!session || !session.d?.msg) return '';

  const { text, type } = session.d.msg;
  delete session.d.msg;
  writeFileSyncJSON('./data/sessions.json', data);

  return `
    <div class="mt-3 ms-5 me-5 alert alert-${type}" role="alert">
    ${text}
    </div>
  `;
}

const loginUser = (id, user) => {
  let data = readFileSyncJSON('./data/sessions.json');
  data = data.map(s => s.id === id ? { id, d: { ...s.d, user: user.email } } : s);
  writeFileSyncJSON('./data/sessions.json', data);
}

const isLogged = (id) => {
  let data = readFileSyncJSON('./data/sessions.json');
  const session = data.find(s => s.id === id);
  return !!session && !!session.d?.user;
}

// Middleware to handle sessions
app.use((req, res, next) => {
  const id = req.cookies.COLORS || '';
  let data = readFileSyncJSON('./data/sessions.json');

  if (!id || !data.find(s => s.id === id)) {
    const newId = uuidv4();
    data.push({ id: newId, d: {} });
    writeFileSyncJSON('./data/sessions.json', data);
    res.cookie('COLORS', newId, { maxAge: 24 * 60 * 60 * 1000 });
    req.sessionsId = newId;
  } else {
    req.sessionsId = id;
    res.cookie('COLORS', id, { maxAge: 24 * 60 * 60 * 1000 });
  }
  next();
});

// Routes
app.get('/', (req, res) => {
  let html = fs.readFileSync('./data/home.html', 'utf8');
  html = addNav(req.sessionsId, html).replace('{{MSG}}', showMessage(req.sessionsId));
  res.send(html);
});

app.get('/colors', (req, res) => {
  if (!isLogged(req.sessionsId)) return res.redirect(302, 'http://colors.test/login');

  let html = fs.readFileSync('./data/index.html', 'utf8');
  const listItem = fs.readFileSync('./data/listItem.html', 'utf8');
  const data = readFileSyncJSON('./data/colors.json');
  let listItems = data.map(li => listItem.replaceAll('{{ID}}', li.id).replace('{{SHAPE}}', li.shape).replace('COLOR', li.color)).join('');

  html = html.replace('{{LI}}', listItems).replace('{{MSG}}', showMessage(req.sessionsId));
  html = addNav(req.sessionsId, html);
  res.send(html);
});

app.get('/create', (req, res) => {
  if (!isLogged(req.sessionsId)) return res.redirect(302, 'http://colors.test/login');

  let html = fs.readFileSync('./data/create.html', 'utf8');
  html = addNav(req.sessionsId, html);
  res.send(html);
});

app.post('/store', (req, res) => {
  if (!isLogged(req.sessionsId)) return res.redirect(302, 'http://colors.test/login');

  const { color, shape } = req.body;
  const id = uuidv4();
  let data = readFileSyncJSON('./data/colors.json');
  data.push({ id, color, shape: parseInt(shape) });
  writeFileSyncJSON('./data/colors.json', data);

  addMessage(req.sessionsId, 'New color was added', 'success');
  res.redirect(302, 'http://colors.test/colors');
});

app.get('/delete/:id', (req, res) => {
  if (!isLogged(req.sessionsId)) return res.redirect(302, 'http://colors.test/login');

  const data = readFileSyncJSON('./data/colors.json');
  const color = data.find(c => c.id === req.params.id);
  if (!color) {
    res.status(404).send(fs.readFileSync('./data/404.html', 'utf8'));
  } else {
    let html = fs.readFileSync('./data/delete.html', 'utf8');
    html = addNav(req.sessionsId, html).replace('{{ID}}', color.id).replace('{{SHAPE}}', color.shape).replace('COLOR', color.color);
    res.send(html);
  }
});

app.post('/destroy/:id', (req, res) => {
  if (!isLogged(req.sessionsId)) return res.redirect(302, 'http://colors.test/login');

  let data = readFileSyncJSON('./data/colors.json');
  data = data.filter(c => c.id !== req.params.id);
  writeFileSyncJSON('./data/colors.json', data);

  addMessage(req.sessionsId, 'Color was deleted', 'info');
  res.redirect(302, 'http://colors.test/colors');
});

app.get('/edit/:id', (req, res) => {
  if (!isLogged(req.sessionsId)) return res.redirect(302, 'http://colors.test/login');

  const data = readFileSyncJSON('./data/colors.json');
  const color = data.find(c => c.id === req.params.id);
  if (!color) {
    res.status(404).send(fs.readFileSync('./data/404.html', 'utf8'));
  } else {
    let html = fs.readFileSync('./data/edit.html', 'utf8');
    html = addNav(req.sessionsId, html).replace('{{ID}}', color.id).replace('{{SHAPE}}', color.shape).replaceAll('COLOR', color.color);
    [1, 2, 3].forEach(v => html = html.replace(`{{VAL${v}}}`, v === color.shape ? 'checked' : ''));
    res.send(html);
  }
});

app.post('/update/:id', (req, res) => {
  if (!isLogged(req.sessionsId)) return res.redirect(302, 'http://colors.test/login');

  const { color, shape } = req.body;
  let data = readFileSyncJSON('./data/colors.json');
  data = data.map(c => c.id === req.params.id ? { ...c, color, shape: parseInt(shape) } : c);
  writeFileSyncJSON('./data/colors.json', data);

  addMessage(req.sessionsId, 'Color was edited', 'success');
  res.redirect(302, 'http://colors.test/colors');
});

app.get('/register', (req, res) => {
  if (isLogged(req.sessionsId)) return res.redirect(302, 'http://colors.test/');

  if (req.body.password.length < 8) {
    addMessage(req.sessionsId, 'Password must be at least 8 characters', 'danger');
    return res.redirect(302, 'http://colors.test/register');
  }

  let html = fs.readFileSync('./data/register.html', 'utf8');
  html = addNav(req.sessionsId, html).replace('{{MSG}}', showMessage(req.sessionsId));
  res.send(html);
});

app.post('/register', (req, res) => {
  if (isLogged(req.sessionsId)) return res.redirect(302, 'http://colors.test/');

  const { email, password } = req.body;
  const id = uuidv4();
  let data = readFileSyncJSON('./data/users.json');
  data.push({ id, email, password: md5(password) });
  writeFileSyncJSON('./data/users.json', data);

  addMessage(req.sessionsId, 'You are successfully registered', 'success');
  res.redirect(302, 'http://colors.test');
});

app.get('/login', (req, res) => {
  if (isLogged(req.sessionsId)) return res.redirect(302, 'http://colors.test/');

  let html = fs.readFileSync('./data/login.html', 'utf8');
  html = html.replace('{{MSG}}', showMessage(req.sessionsId));
  res.send(html);
});

app.post('/login', (req, res) => {
  if (isLogged(req.sessionsId)) return res.redirect(302, 'http://colors.test/');

  const { email, password } = req.body;
  let data = readFileSyncJSON('./data/users.json');
  const user = data.find(u => u.email === email && u.password === md5(password));

  if (user) {
    loginUser(req.sessionsId, user);
    addMessage(req.sessionsId, 'You are logged in successfully', 'success');
    res.redirect(302, 'http://colors.test');
  } else {
    addMessage(req.sessionsId, 'Invalid password or email', 'danger');
    res.redirect(302, 'http://colors.test/login');
  }
});


const logoutUser = (req, res) => {
  const id = req.sessionsId;
  if (!id) {
    res.redirect(302, 'http://colors.test/').end();
    return;
  }

  let data = readFileSyncJSON('./data/sessions.json');
  data = data.filter(s => s.id !== id);
  writeFileSyncJSON('./data/sessions.json', data);

  res.clearCookie('COLORS');
  res.redirect(302, 'http://colors.test/');
};

app.get('/logout', (req, res) => {
  const id = req.sessionsId;
  if (!id) {
    res.redirect(302, 'http://colors.test/').end();
    return;
  }

  let data = readFileSyncJSON('./data/sessions.json');
  data = data.filter(s => s.id !== id);
  writeFileSyncJSON('./data/sessions.json', data);

  res.clearCookie('COLORS');
  res.redirect(302, 'http://colors.test/');
});

app.post('/logout', (req, res) => {
  if (!isLogged(req.sessionsId)) {
    res.redirect(302, 'http://colors.test/').end();
  }
  logoutUser(req, res);
});

app.listen(port, () => {
  console.log(`Colors app listening on port ${port}`);
});
