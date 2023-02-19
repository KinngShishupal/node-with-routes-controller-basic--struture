const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const useRouter = require('./routes/userRoutes');

// MIddlewares
app.use(morgan('dev')); // to log which api is called and its related things like time status etc
app.use(express.json()); // middleware to read body data also called body parser

// custom middleware
app.use((req, res, next) => {
  // middleware applies to every request whether it is get post put patch delete etc
  console.log('hello from middleware ...');
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// Routes
app.use('/api/v1/tours', tourRouter); // this is called mounting of routers
app.use('/api/v1/users', useRouter);

// Server
module.exports = app;
