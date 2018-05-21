const app = require('../src/app');
const request = require('supertest')(app);
const models = require('../src/models');

global.app = app;
global.request = request;
global.models = models;
