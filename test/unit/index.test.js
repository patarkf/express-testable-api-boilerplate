const expect = require('expect.js');
const models = require('../../models');

describe('models/index', () => {
  it('returns the beer model', () => {
    expect(models.Beer).to.be.ok();
  });

  it('returns the beer category model', () => {
    expect(models.BeerCategory).to.be.ok();
  });
});
