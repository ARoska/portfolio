'use strict';

// Load dependencies
const express = require('express');
const app = express();

// load dotenv to manage variables
require('dotenv').config();

// Load app
app.use(express.static('./public'));

// Establish PORT number
const PORT = process.env.PORT || 3000;

// Create routes
app.get('/', (request, response) => {
  response.redirect('/index.html');
});

// Added catch-all
app.use('*', (request, response) => response.send(`Sorry, that route does not exist`));

// Turn server on
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
