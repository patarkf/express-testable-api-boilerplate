const beerCategoryService = require('../services/beerCategory');

const create = async (req, res) => {
  const beerCategory = await beerCategoryService.create(req.body);
  res.status(201).json(beerCategory);
};

const list = async (req, res) => {
  const beerCategories = await beerCategoryService.findAll();
  res.status(200).json(beerCategories);
};

const update = async (req, res, next) => {
  const [affectedRows] = await beerCategoryService.update(req.params.id, req.body);
  if (!affectedRows) return next();

  const updatedBeerCategory = await beerCategoryService.findById(req.params.id);
  return res.status(200).json(updatedBeerCategory);
};

const destroy = async (req, res) => {
  await beerCategoryService.destroy(req.params.id);
  res.status(200).send();
};

module.exports = {
  create,
  destroy,
  update,
  list,
};
