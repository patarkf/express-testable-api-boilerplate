const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const errorHandlers = require('./handlers/errorHandler');
const routes = require('./routes/index');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

app.use(errorHandlers.notFound);
app.use(errorHandlers.displayErrors);

module.exports = app;
