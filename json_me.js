const express = require('express');
const fs = require('fs');
const PORT = Number(process.argv[2]);
const fileURL = process.argv[3];
const app = express();
app.get('/books', function(req, res) {
  fs.readFile(fileURL, (err, data)=> {
    if (err) return res.sendStatus(500);
    try {
      let result = JSON.parse(data);
      res.json(result);
    } catch (error) {
      res.sendStatus(500);
    }
  })
});
app.listen(PORT);