const app = require('../../../src/app');
const request = require('supertest')(app);
const models = require('../../../src/models');

describe('Routes: Beer categories', () => {
  beforeAll(() => models.sequelize.sync());

  beforeEach(() => models.BeerCategory.destroy({ truncate: true }));

  describe('POST /beer-categories', () => {
    test('should create a beer category and respond with its body', async () => {
      await request
        .post('/beer-categories')
        .send({ name: 'johndoe beer category' })
        .expect(201)
        .expect(/johndoe beer category/);
    });

    test('should invalidate when name is too short', async () => {
      await request
        .post('/beer-categories')
        .send({ name: 'jo' })
        .expect(422)
        .expect(/Min allowed length is 3/);
    });

    test('should invalidate when name is not a string', async () => {
      await request
        .post('/beer-categories')
        .send({ name: 42 })
        .expect(422)
        .expect(/Value must be a string/);
    });
  });

  describe('GET /beer-categories', () => {
    test('should list all beer categories if any', async () => {
      await models.BeerCategory.create({ name: 'johndoe beer category' });

      await request
        .get('/beer-categories')
        .expect(200)
        .expect(/johndoe beer category/);
    });
  });

  describe('GET /beer-categories/:id', () => {
    test('should show a specific beer category by its id', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });

      await request
        .get(`/beer-categories/${beerCategory.id}`)
        .expect(200)
        .expect(/johndoe beer category/);
    });
  });

  describe('PUT /beer-categories/:id', () => {
    test('should update a beer category and respond with its body', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });

      await request
        .put(`/beer-categories/${beerCategory.id}`)
        .send({ name: 'johndoe edited beer category' })
        .expect(200)
        .expect(/johndoe edited beer category/);
    });

    test('should invalidate when name is too short', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });

      await request
        .put(`/beer-categories/${beerCategory.id}`)
        .send({ name: 'jo' })
        .expect(422)
        .expect(/Min allowed length is 3/);
    });

    test('should invalidate when name is not a string', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });

      await request
        .put(`/beer-categories/${beerCategory.id}`)
        .send({ name: 42 })
        .expect(422)
        .expect(/Value must be a string/);
    });
  });

  describe('DELETE /beer-categories/:id', () => {
    test('should delete a specific beer category by its id', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });

      await request
        .delete(`/beer-categories/${beerCategory.id}`)
        .expect(200);
    });
  });
});
