describe('Routes: Beer categories', () => {
  before(() => models.sequelize.sync());

  beforeEach(() => Promise.all([
    models.BeerCategory.destroy({
      truncate: true,
    }),
  ]));

  it('POST /beer-categories', async () => {
    await request
      .post('/beer-categories')
      .send({ name: 'johndoe beer category' })
      .expect(201)
      .expect(/johndoe beer category/);
  });

  it('GET /beer-categories', async () => {
    await models.BeerCategory.create({ name: 'johndoe beer category' });

    await request
      .get('/beer-categories')
      .expect(200)
      .expect(/johndoe beer category/);
  });

  it('GET /beer-categories/:id', async () => {
    const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });

    await request
      .get(`/beer-categories/${beerCategory.id}`)
      .expect(200)
      .expect(/johndoe beer category/);
  });

  it('PUT /beer-categories/:id', async () => {
    const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });

    await request
      .put(`/beer-categories/${beerCategory.id}`)
      .send({ name: 'johndoe edited beer category' })
      .expect(200)
      .expect(/johndoe edited beer category/);
  });

  it('DELETE /beer-categories/:id', async () => {
    const beerCategory = await models.BeerCategory.create({ name: 'johndoe beer category' });

    await request
      .delete(`/beer-categories/${beerCategory.id}`)
      .expect(200);
  });
});
