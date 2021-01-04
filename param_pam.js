const express = require('express');
const crypto = require('crypto');
const PORT = Number(process.argv[2]);
const app = express();
app.put('/message/:id', function(req, res) {
 const id = req.params.id;
 const result = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex');
 res.send(result);
});
app.listen(PORT);