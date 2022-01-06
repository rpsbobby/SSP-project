const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

// set ejs as templating engine
// mvc pattern with node -> https://www.sitepoint.com/node-js-mvc-application/

// setting templating engine
app.set('view engine', 'ejs');

// setting body parser allows us to access response body
app.use(bodyParser.urlencoded({ extended: false }));
// serving static content from folder views
app.use(express.static(path.join(__dirname, 'views')));

// adding routes to express server
app.use(routes);

// setting up a server to listen on port 80
app.listen(3000);
