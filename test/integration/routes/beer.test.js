const app = require('../../../src/app');
const request = require('supertest')(app);
const models = require('../../../src/models');

describe('Routes: Beers', () => {
  beforeAll(() => models.sequelize.sync());

  beforeEach(() => Promise.all([
    models.Beer.destroy({ truncate: true }),
    models.BeerCategory.destroy({ truncate: true }),
  ]));

  test('POST /beers', async () => {
    const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
    await request
      .post('/beers')
      .send({ name: 'johndoe beer', beer_category_id: beerCategory.id })
      .expect(201)
      .expect(/johndoe beer/);
  });

  test('GET /beers', async () => {
    const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
    await models.Beer.create({ name: 'johndoe beer', beer_category_id: beerCategory.id });

    await request
      .get('/beers')
      .expect(200)
      .expect(/johndoe beer/);
  });

  test('GET /beers/:id', async () => {
    const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
    const beer = await models.Beer.create({ name: 'johndoe beer', beer_category_id: beerCategory.id });

    await request
      .get(`/beers/${beer.id}`)
      .expect(200)
      .expect(/johndoe beer/);
  });

  test('PUT /beers/:id', async () => {
    const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
    const beer = await models.Beer.create({ name: 'johndoe beer', beer_category_id: beerCategory.id });

    await request
      .put(`/beers/${beer.id}`)
      .send({ name: 'johndoe edited beer' })
      .expect(200)
      .expect(/johndoe edited beer/);
  });

  test('DELETE /beers/:id', async () => {
    const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
    const beer = await models.Beer.create({ name: 'johndoe beer', beer_category_id: beerCategory.id });

    await request
      .delete(`/beers/${beer.id}`)
      .expect(200);
  });
});
