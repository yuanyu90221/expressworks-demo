const express = require('express');
const path = require('path');
const PORT = Number(process.argv[2]);
const app = express();
app.set('view engine', 'pug');
app.set('views', process.argv[3]);
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});
app.listen(PORT);