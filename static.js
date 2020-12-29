const express = require('express');
const path = require('path');
const PORT = Number(process.argv[2]);
const app = express();
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.listen(PORT);