const express = require('express');
const PORT = Number(process.argv[2]);
const app = express();
app.get('/home', function(req, res) {
  res.end('Hello World!');
});
app.listen(PORT);