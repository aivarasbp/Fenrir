const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const animalsList = require('./animalsList');

const app = express();
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  const id = req.cookies.ANIMALS || '';
  let data = fs.readFileSync('./data/sessions.json', 'utf8');
  data = JSON.parse(data);
  if (!id) {
    const newId = uuidv4();
    data.push({ id: newId, d: {} });
    data = JSON.stringify(data);
    fs.writeFileSync('./data/sessions.json', data);
    res.cookie('ANIMALS', newId, { maxAge: 24 * 60 * 60 * 1000 });
    req.sessionID = newId; // Corrected assignment here
  } else {
    let session = data.find(s => s.id === id);
    if (!session) {
      const newId = uuidv4();
      data.push({ id: newId, d: {} });
      data = JSON.stringify(data);
      fs.writeFileSync('./data/sessions.json', data);
      res.cookie('ANIMALS', newId, { maxAge: 24 * 60 * 60 * 1000 });
      req.sessionID = newId; // Corrected assignment here
    } else {
      req.sessionID = id; // Corrected assignment here
      res.cookie('ANIMALS', id, { maxAge: 24 * 60 * 60 * 1000 });
    }
  }
  next();
});


// Function to add a message to the session
const addMessage = (id, text, type) => {
  let data = fs.readFileSync('./data/sessions.json', 'utf8');
  data = JSON.parse(data);
  data = data.map(s => s.id === id ? { id, d: { ...s.d, msg: { text, type } } } : s);
  data = JSON.stringify(data);
  fs.writeFileSync('./data/sessions.json', data);
}

// Function to show a message from the session
const showMessage = (id, isNewAnimal) => {
  let data = fs.readFileSync('./data/sessions.json', 'utf8');
  data = JSON.parse(data);
  const session = data.find((s) => s.id === id);
  if (!session || !session.d?.msg) {
    return '';
  }
  const { text, type } = session.d.msg;
  delete session.d.msg;
  data = JSON.stringify(data);
  fs.writeFileSync('./data/sessions.json', data);

  // Generate the HTML with the message
  let messageHTML = `
    <div class="mt-3 ms-5 me-5 alert alert-${type}" role="alert" id="message">
      ${text}
    </div>
  `;

  // Include script tag to remove the message after 2 seconds
  messageHTML += `
    <script>
      setTimeout(() => {
        const messageElement = document.getElementById('message');
        if (messageElement) {
          messageElement.remove();
        }
      }, 2000);
    </script>
  `;

  return messageHTML;
};


const addNav = (html) => {
  const nav = fs.readFileSync('./data/nav.html', 'utf8');
  if (!html) {
    console.error('Error: HTML content is undefined');
    return '';
  }
  return html.replace('{{NAV}}', nav);
}

const generateAnimalList = (data, sort) => {
  if (sort === 'asc') {
    data.sort((a, b) => a.animal.name.localeCompare(b.animal.name));
  } else if (sort === 'desc') {
    data.sort((a, b) => b.animal.name.localeCompare(a.animal.name));
  }

  return data.map((a, index) => `
    <li>
      <span>${index + 1}. Name: ${a.animal.name}</span>
      <span>Species: ${a.animal.species}</span>
      <span>Age: ${a.animal.age} years</span>

      <button class="btn btn-warning" data-id="${a.id}" onclick="window.location.href='http://localhost/edit-animal/${a.id}'">Edit</button>
      <button class="btn btn-danger" data-id="${a.id}" onclick="window.location.href='http://localhost/delete-confirm/${a.id}'">Delete</button>
    </li>
  `).join('');
}



app.post('/add-animal', (req, res) => {
  console.log('Request body:', req.body);

  const { name, species, age } = req.body.animal;

  // Check if any of the required fields are empty
  if (!name || !species || !age) {
    addMessage(req.sessionID, 'Please fill in all required fields', 'danger');
    const htmlPath = path.join(__dirname, 'data', 'add-animal.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    const errorMessage = showMessage(req.sessionID);
    const errorClass = errorMessage ? 'error-input' : '';

    let modifiedHtml = addNav(html);
    modifiedHtml = modifiedHtml.replace('{{MSG}}', errorMessage);
    modifiedHtml = modifiedHtml.replace('{{ERROR_CLASS}}', errorClass);

    return res.send(modifiedHtml);
  }

  let data = fs.readFileSync('./data/animals.json', 'utf8');
  data = JSON.parse(data);

  const existingAnimal = data.find(animal => animal.animal.name === name);
  if (existingAnimal) {
    addMessage(req.sessionID, 'Animal with the same name already exists', 'danger');
    const htmlPath = path.join(__dirname, 'data', 'add-animal.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    const errorMessage = showMessage(req.sessionID);
    const errorClass = errorMessage ? 'error-input' : '';

    let modifiedHtml = addNav(html);
    modifiedHtml = modifiedHtml.replace('{{MSG}}', errorMessage);
    modifiedHtml = modifiedHtml.replace('{{ERROR_CLASS}}', errorClass);

    return res.send(modifiedHtml);
  }

  const id = uuidv4();
  data.push({ id, animal: { name, species, age } });

  fs.writeFileSync('./data/animals.json', JSON.stringify(data));

  addMessage(req.sessionID, 'Animal added successfully', 'success');
  return res.redirect(302, '/animal-list'); // Redirect to animal_list after adding animal
});

app.get('/edit-animal/:id', (req, res) => {
  const animalId = req.params.id;

  let data = fs.readFileSync('./data/animals.json', 'utf8');
  data = JSON.parse(data);

  const animal = data.find(a => a.id === animalId);
  if (!animal) {
    addMessage(req.sessionID, 'Animal not found', 'danger');
    return res.redirect('/animal-list');
  }

  const editAnimalPath = path.join(__dirname, 'data', 'edit-animal.html');
  let html = fs.readFileSync(editAnimalPath, 'utf8');

  html = addNav(html);
  html = html.replace('{{ID}}', animalId);
  html = html.replace('{{NAME}}', animal.animal.name);
  html = html.replace('{{SPECIES}}', animal.animal.species);
  html = html.replace('{{AGE}}', animal.animal.age);
  html = html.replace('{{MSG}}', showMessage(req.sessionID));

  res.send(html);
});

app.post('/edit-animal/:id', (req, res) => {
  const animalId = req.params.id;
  const { name, species, age } = req.body;

  let data = fs.readFileSync('./data/animals.json', 'utf8');
  data = JSON.parse(data);

  const animalIndex = data.findIndex(a => a.id === animalId);
  if (animalIndex === -1) {
    addMessage(req.sessionID, 'Animal not found', 'danger');
    return res.redirect('/animal-list');
  }

  data[animalIndex].animal = { name, species, age };

  fs.writeFileSync('./data/animals.json', JSON.stringify(data));
  addMessage(req.sessionID, 'Animal updated successfully', 'success');
  res.redirect('/animal-list');
});

app.put('/edit-animal/:id', (req, res) => {
  const animalId = req.params.id;
  const { name, species, age } = req.body.animal;

  let data = fs.readFileSync('./data/animals.json', 'utf8');
  data = JSON.parse(data);

  const animalIndex = data.findIndex(animal => animal.id === animalId);
  if (animalIndex !== -1) {
    data[animalIndex].animal = { name, species, age };
    fs.writeFileSync('./data/animals.json', JSON.stringify(data));
    addMessage(req.sessionID, 'Animal updated successfully', 'success');
    res.status(200).json({ success: true });
  } else {
    res.status(404).json({ success: false, message: 'Animal not found' });
  }
});

// Add this route before your other routes

app.get('/delete-confirm/:id', (req, res) => {
  const deletePagePath = path.join(__dirname, 'data', 'delete.html');
  const html = fs.readFileSync(deletePagePath, 'utf8'); // Read the content of the delete confirmation page template
  const animalId = req.params.id;
  const modifiedHtml = html.replace('{{animalId}}', animalId); // Pass the animalId to the template
  res.send(modifiedHtml);
});



app.post('/delete-animal/:id', (req, res) => {
  const animalId = req.params.id;

  let data = fs.readFileSync('./data/animals.json', 'utf8');
  data = JSON.parse(data);

  const animalIndex = data.findIndex(a => a.id === animalId);
  if (animalIndex === -1) {
    // Animal not found
    addMessage(req.sessionID, 'Animal not found', 'danger');
    return res.status(404).send('Animal not found');
  }

  // Delete the animal
  data.splice(animalIndex, 1);

  // Save the updated data
  fs.writeFileSync('./data/animals.json', JSON.stringify(data));

  // Add message to session
  addMessage(req.sessionID, 'Animal deleted successfully', 'success');

  // Redirect to animal list page
  res.redirect('/animal-list');
});



// Delete the animal
app.delete('/delete-animal/:id', (req, res) => {
  const animalId = req.params.id;

  let data = fs.readFileSync('./data/animals.json', 'utf8');
  data = JSON.parse(data);

  const animalIndex = data.findIndex(a => a.id === animalId);
  if (animalIndex === -1) {
    addMessage(req.sessionID, 'Animal not found', 'danger');
    return res.status(404).send('Animal not found');
  }

  data.splice(animalIndex, 1);

  fs.writeFileSync('./data/animals.json', JSON.stringify(data));
  addMessage(req.sessionID, 'Animal deleted successfully', 'warning');
  res.status(200).send('Animal deleted');
});


app.post('/destroy/:id', (req, res) => {

  let data = fs.readFileSync('./data/animals.json', 'utf8');
  data = JSON.parse(data);
  data = data.filter(a => a.id !== req.params.id);
  data = JSON.stringify(data);
  fs.writeFileSync('./data/animals.json', data);

  addMessage(req.sessionsId, 'Animal was deleted', 'info');

  res.redirect(302, 'http://localhost/animal-list');
});

// app.delete('/delete-animal/:id', (req, res) => {
//   const animalId = req.params.id;

//   let data = fs.readFileSync('./data/animals.json', 'utf8');
//   data = JSON.parse(data);

//   const animalIndex = data.findIndex(a => a.id === animalId);
//   if (animalIndex === -1) {
//     addMessage(req.sessionID, 'Animal not found', 'danger');
//     return res.status(404).send('Animal not found');
//   }

//   data.splice(animalIndex, 1);

//   fs.writeFileSync('./data/animals.json', JSON.stringify(data));
//   addMessage(req.sessionID, 'Animal deleted successfully', 'warning');
//   res.status(200).send('Animal deleted');
// });

app.post('/seed-animals', (req, res) => {
  let data = fs.readFileSync('./data/animals.json', 'utf8');
  data = JSON.parse(data);

  animalsList.forEach(animal => {
    const id = uuidv4();
    data.push({ id, animal });
  });

  fs.writeFileSync('./data/animals.json', JSON.stringify(data));

  addMessage(req.sessionID, 'Animals seeded successfully', 'success');
  res.redirect(302, '/animal-list');
});

app.post('/delete-all-animals', (req, res) => {
  fs.writeFileSync('./data/animals.json', '[]', 'utf8');

  addMessage(req.sessionID, 'All animals deleted successfully', 'warning');
  res.redirect(302, '/animal-list');
});

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'data', 'index.html');

  fs.readFile(indexPath, 'utf8', (err, html) => {
    if (err) {
      console.error('Error reading index.html:', err);
      return res.status(500).send('Server error');
    }

    html = addNav(html);
    html = html.replace('{{MSG}}', showMessage(req.sessionID));

    res.send(html);
  });
});

app.get('/add-animal', (req, res) => {
  const addAnimalPath = path.join(__dirname, 'data', 'add-animal.html');

  try {
    const html = fs.readFileSync(addAnimalPath, 'utf8');

    const errorMessage = showMessage(req.sessionID);
    const errorClass = errorMessage ? 'error-input' : '';

    let modifiedHtml = addNav(html);
    modifiedHtml = modifiedHtml.replace('{{MSG}}', errorMessage);
    modifiedHtml = modifiedHtml.replace('{{ERROR_CLASS}}', errorClass);

    res.send(modifiedHtml);
  } catch (error) {
    console.error('Error reading add-animal.html:', error);
    res.status(500).send('Server error');
  }
});

app.get('/animal-list', (req, res) => {
  const animalListPath = path.join(__dirname, 'data', 'animal-list.html');

  fs.readFile(animalListPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading animal-list.html:', err);
      return res.status(500).send('Server error');
    }

    fs.readFile(path.join(__dirname, 'data', 'animals.json'), 'utf8', (err, animalData) => {
      if (err) {
        console.error('Error reading animals.json:', err);
        return res.status(500).send('Server error');
      }

      animalData = JSON.parse(animalData);
      const list = generateAnimalList(animalData, req.query.sort);
      data = data.replace('{{LIST}}', list);
      let html = addNav(data);
      html = html.replace('{{MSG}}', showMessage(req.sessionID));

      res.send(html);
    });
  });
});


app.get('/animals', (req, res) => {
  const dataPath = path.join(__dirname, 'data', 'animals.json');

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading animals.json:', err);
      return res.status(500).send('Server error');
    }

    const animals = JSON.parse(data);
    res.json(animals);
  });
});

app.use((req, res, next) => {
  const id = req.cookies.ANIMALS || '';
  let data = fs.readFileSync('./data/sessions.json', 'utf8');
  data = JSON.parse(data);
  if (!id) {
    const newId = uuidv4();
    data.push({ id: newId, d: {} });
    data = JSON.stringify(data);
    fs.writeFileSync('./data/sessions.json', data);
    res.cookie('ANIMALS', newId, { maxAge: 24 * 60 * 60 * 1000 });
    req.sessionsId = newId
  } else {
    let session = data.find(s => s.id === id);
    if (!session) {
      const newId = uuidv4();
      data.push({ id: newId, d: {} });
      data = JSON.stringify(data);
      fs.writeFileSync('./data/sessions.json', data);
      res.cookie('ANIMALS', newId, { maxAge: 24 * 60 * 60 * 1000 });
      req.sessionsId = newId
    } else {
      req.sessionsId = id;
      res.cookie('ANIMALS', id, { maxAge: 24 * 60 * 60 * 1000 });
    }
  }
  next();
});

app.listen(port, () => {
  console.log(`Zoo app listening on port ${port}`);
});
