var express = require('express');
var path = require('path');
var app = express();

// Public assets
app.use('/js', express.static('js'));

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen('3000', () => {
  console.log('Listening in port: 3000');
});