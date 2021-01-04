const express = require('express');
const path = require('path');
const PORT = Number(process.argv[2]);
const app = express();
app.use(require('stylus').middleware(process.argv[3]))
app.use(express.static(process.argv[3]))
app.listen(PORT);