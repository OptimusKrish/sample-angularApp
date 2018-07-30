var express = require('express');
var path = require('path');
var app = express();

// Render HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Public assets
app.use('/public', express.static('public'));

// Index Route
app.get('/index', (req, res) => {
  res.render('index.html');
});

app.listen('3000', () => {
  console.log('Listening in port: 3000');
});