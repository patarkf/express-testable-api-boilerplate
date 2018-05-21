describe('models/index', () => {
  test('returns the beer model', () => {
    expect(models.Beer).toBeInstanceOf(Function);
  });

  test('returns the beer category model', () => {
    expect(models.BeerCategory).toBeInstanceOf(Function);
  });
});
