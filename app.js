const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

// set ejs as templating engine
// ejs tutorial ->  https://www.geeksforgeeks.org/use-ejs-as-template-engine-in-node-js/
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'views')));

app.use(routes);
app.listen(3000);
