const beerService = require('../services/beer');

const create = async (req, res) => {
  const beer = await beerService.create(req.body);
  res.status(201).json(beer);
};

const list = async (req, res) => {
  const beers = await beerService.findAll();
  res.status(200).json(beers);
};

const get = async (req, res) => {
  const beer = await beerService.findById(req.params.id);
  res.status(200).json(beer);
};

const update = async (req, res, next) => {
  const [affectedRows] = await beerService.update(req.params.id, req.body);
  if (!affectedRows) return next();

  const updatedBeer = await beerService.findById(req.params.id);
  return res.status(200).json(updatedBeer);
};

const destroy = async (req, res) => {
  await beerService.destroy(req.params.id);
  res.status(200).send();
};

module.exports = {
  create,
  list,
  get,
  update,
  destroy,
};
