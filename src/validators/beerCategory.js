const { check } = require('express-validator/check');

exports.beerCategoryValidator = [
  check('name')
    .exists().withMessage('You must provide a value')
    .isString()
    .withMessage('Value must be a string')
    .isLength({ min: 3 })
    .withMessage('Min allowed length is 3'),
];
