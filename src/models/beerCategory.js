module.exports = (sequelize, DataTypes) => {
  const BeerCategory = sequelize.define('BeerCategory', {
    name: DataTypes.STRING,
  });

  BeerCategory.associate = (models) => {
    models.BeerCategory.hasMany(models.Beer, {
      as: 'beers',
      foreignKey: 'beer_category_id',
    });
  };

  return BeerCategory;
};
