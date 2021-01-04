const express = require('express');
const PORT = Number(process.argv[2]);
const app = express();
app.get('/search', function(req, res) {
  const query = req.query;
  res.send(query);
});
app.listen(PORT);