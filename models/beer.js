module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    name: DataTypes.STRING,
  });

  Beer.associate = (models) => {
    models.Beer.belongsTo(models.BeerCategory, {
      onDelete: 'CASCADE',
      foreignKey: 'beer_category_id',
    });
  };

  return Beer;
};
