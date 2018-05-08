const { Beer } = require('../models');

const create = beer => Beer.create(beer);

const destroy = id => Beer.destroy({ where: { id } });

const findById = id => Beer.findById(id);

const findAll = () => Beer.findAll();

const update = (id, beer) => Beer.update(beer, { where: { id } });

module.exports = {
  create,
  destroy,
  findAll,
  findById,
  update,
};
