const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));

app.use(routes);
app.listen(3000);
