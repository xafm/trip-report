const express = require('express');
const app = express();
require('dotenv').config();

const authenticationRoutes = require('./routes/authentication.js');
const tripRoutes = require('./routes/trip.js');
const swaggerRoutes = require('./routes/swagger.js');
const notFoundRoute = require('./routes/notFound.js');
const db = require('./loaders/database.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(authenticationRoutes);
app.use(tripRoutes);
app.use(swaggerRoutes);
app.use(notFoundRoute);

/* Connects db and starts server */
db.connect({expressApp: app});

app.use((err, req, res, next) => {
  const status = err.getStatusCode ? err.getStatusCode() : 500
  return res.status(status).json({
    success: false,
    errors: [{message: err.message}],
  });
});

module.exports = app;
