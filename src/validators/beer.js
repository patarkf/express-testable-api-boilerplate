const { check } = require('express-validator/check');
const beerCategoryService = require('../services/beerCategory');

exports.beerValidator = [
  check('name')
    .isString().withMessage('Value must be a string')
    .isLength({ min: 3 })
    .withMessage('Min allowed length is 3'),

  check('beer_category_id')
    .custom(async (beerCategoryId) => {
      const beerCategory = await beerCategoryService.findById(beerCategoryId);
      return beerCategory !== null;
    }).withMessage('Invalid beer category id'),
];
