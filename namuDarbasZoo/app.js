app.get('/colors', (req, res) => {

  if (!isLogged(req.sessionsId)) {
    res.redirect(302, 'http://colors.test/login').end();
  }

  let html = fs.readFileSync('./data/index.html', 'utf8');
  const listItem = fs.readFileSync('./data/listItem.html', 'utf8');
  let data = fs.readFileSync('./data/colors.json', 'utf8');
  data = JSON.parse(data);
  let listItems = '';
  data.forEach(li => {
    let liHtml = listItem;
    liHtml = liHtml.replaceAll('{{ID}}', li.id).replace('{{SHAPE}}', li.shape).replace('COLOR', li.color);
    listItems += liHtml;
  });
  html = html.replace('{{LI}}', listItems).replace('{{MSG}}', showMessage(req.sessionsId));
  html = addNav(req.sessionsId, html);
  res.send(html);
}); 