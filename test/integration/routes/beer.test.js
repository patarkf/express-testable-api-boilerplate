describe('Routes: Beers', () => {
  beforeAll(() => models.sequelize.sync());

  beforeEach(() => Promise.all([
    models.Beer.destroy({ truncate: true }),
    models.BeerCategory.destroy({ truncate: true }),
  ]));

  describe('POST /beers', () => {
    test('should create a beer and respond with its body', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
      await request
        .post('/beers')
        .send({ name: 'johndoe beer', beer_category_id: beerCategory.id })
        .expect(201)
        .expect(/johndoe beer/);
    });

    test('should invalidate when name is too short', async () => {
      await request
        .post('/beers')
        .send({ name: 'jo' })
        .expect(422)
        .expect(/Min allowed length is 3/);
    });

    test('should invalidate when name is not a string', async () => {
      await request
        .post('/beers')
        .send({ name: 42 })
        .expect(422)
        .expect(/Value must be a string/);
    });

    test('should invalidate when beer category is an invalid id', async () => {
      await request
        .post('/beers')
        .send({ name: 'valid name', beer_category_id: 42 })
        .expect(422)
        .expect(/Invalid beer category id/);
    });
  });

  describe('GET /beers', () => {
    test('should list all beers if any', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
      await models.Beer.create({ name: 'johndoe beer', beer_category_id: beerCategory.id });

      await request
        .get('/beers')
        .expect(200)
        .expect(/johndoe beer/);
    });
  });

  describe('GET /beers/:id', () => {
    test('should show a specific beer by its id', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
      const beer = await models.Beer.create({ name: 'johndoe beer', beer_category_id: beerCategory.id });

      await request
        .get(`/beers/${beer.id}`)
        .expect(200)
        .expect(/johndoe beer/);
    });

    test('should return a 404 in case of invalid beer id', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
      const beer = await models.Beer.create({ name: 'johndoe beer', beer_category_id: beerCategory.id });

      await request
        .get(`/beers/${beer.id}`)
        .expect(200)
        .expect(/johndoe beer/);
    });
  });

  describe('PUT /beers/:id', () => {
    test('should update a beer and respond with its body', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
      const beer = await models.Beer.create({ name: 'johndoe beer', beer_category_id: beerCategory.id });

      await request
        .put(`/beers/${beer.id}`)
        .send({ name: 'johndoe edited beer', beer_category_id: beerCategory.id })
        .expect(200)
        .expect(/johndoe edited beer/);
    });

    test('should invalidate when name is too short', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
      const beer = await models.Beer.create({ name: 'johndoe beer', beer_category_id: beerCategory.id });

      await request
        .put(`/beers/${beer.id}`)
        .send({ name: 'jo', beer_category_id: beerCategory.id })
        .expect(422)
        .expect(/Min allowed length is 3/);
    });

    test('should invalidate when name is not a string', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
      const beer = await models.Beer.create({ name: 'johndoe beer', beer_category_id: beerCategory.id });

      await request
        .put(`/beers/${beer.id}`)
        .send({ name: 42, beer_category_id: beerCategory.id })
        .expect(422)
        .expect(/Value must be a string/);
    });

    test('should invalidate when beer category is an invalid id', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
      const beer = await models.Beer.create({ name: 'johndoe beer', beer_category_id: beerCategory.id });

      await request
        .put(`/beers/${beer.id}`)
        .send({ name: 'valid name', beer_category_id: 42 })
        .expect(422)
        .expect(/Invalid beer category id/);
    });
  });

  describe('DELETE /beers/:id', () => {
    test('should delete a specific beer by its id', async () => {
      const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });
      const beer = await models.Beer.create({ name: 'johndoe beer', beer_category_id: beerCategory.id });

      await request
        .delete(`/beers/${beer.id}`)
        .expect(200);
    });
  });
});
