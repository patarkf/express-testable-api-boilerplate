const beerCategoryService = require('../services/beerCategory');
const { validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

const create = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(errors);

  const beerCategory = await beerCategoryService.create(matchedData(req));
  return res.status(201).json(beerCategory);
};

const list = async (req, res) => {
  const beerCategories = await beerCategoryService.findAll();
  res.status(200).json(beerCategories);
};

const get = async (req, res) => {
  const beer = await beerCategoryService.findById(req.params.id);
  res.status(200).json(beer);
};

const update = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(errors);

  const [affectedRows] = await beerCategoryService.update(req.params.id, matchedData(req));
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
  list,
  get,
  update,
  destroy,
};
