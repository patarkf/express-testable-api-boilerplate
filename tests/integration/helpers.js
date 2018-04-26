const expect = require('expect.js');
const supertest = require('supertest');
const app = require('../../app');
const models = require('../../models');

global.request = supertest(app);
global.expect = expect;
global.models = models;
