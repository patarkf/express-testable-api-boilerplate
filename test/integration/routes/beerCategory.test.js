const app = require('../../../src/app');
const request = require('supertest')(app);
const models = require('../../../src/models');

describe('Routes: Beer categories', () => {
  beforeAll(() => models.sequelize.sync());

  beforeEach(() => models.BeerCategory.destroy({ truncate: true }));

  test('POST /beer-categories', async () => {
    await request
      .post('/beer-categories')
      .send({ name: 'johndoe beer category' })
      .expect(201)
      .expect(/johndoe beer category/);
  });

  test('GET /beer-categories', async () => {
    await models.BeerCategory.create({ name: 'johndoe beer category' });

    await request
      .get('/beer-categories')
      .expect(200)
      .expect(/johndoe beer category/);
  });

  test('GET /beer-categories/:id', async () => {
    const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });

    await request
      .get(`/beer-categories/${beerCategory.id}`)
      .expect(200)
      .expect(/johndoe beer category/);
  });

  test('PUT /beer-categories/:id', async () => {
    const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });

    await request
      .put(`/beer-categories/${beerCategory.id}`)
      .send({ name: 'johndoe edited beer category' })
      .expect(200)
      .expect(/johndoe edited beer category/);
  });

  test('DELETE /beer-categories/:id', async () => {
    const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });

    await request
      .delete(`/beer-categories/${beerCategory.id}`)
      .expect(200);
  });
});
