const expect = require('expect.js');
const supertest = require('supertest');
const app = require('../../src/app');
const models = require('../../src/models');

global.request = supertest(app);
global.expect = expect;
global.models = models;
