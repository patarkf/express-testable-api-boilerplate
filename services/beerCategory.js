const { BeerCategory, Beer } = require('../models');

const create = beerCategory => BeerCategory.create(beerCategory);

const destroy = id => BeerCategory.destroy({ where: { id } });

const findById = id => BeerCategory.findById(id);

const findAll = () => BeerCategory.findAll({ include: [{ model: Beer, as: 'beers' }] });

const update = (id, beerCategory) => BeerCategory.update(beerCategory, { where: { id } });

module.exports = {
  create,
  destroy,
  findAll,
  findById,
  update,
};
