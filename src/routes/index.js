const express = require('express');

const router = express.Router();
const beerCategoryController = require('../controllers/beerCategoryController');
const beerController = require('../controllers/beerController');
const { beerValidator } = require('../validators/beer');
const { beerCategoryValidator } = require('../validators/beerCategory');
const { catchErrors } = require('../handlers/errorHandler');

// Beer categories
router.get('/beer-categories', catchErrors(beerCategoryController.list));
router.get('/beer-categories/:id', catchErrors(beerCategoryController.get));
router.post('/beer-categories', beerCategoryValidator, catchErrors(beerCategoryController.create));
router.put('/beer-categories/:id', beerCategoryValidator, catchErrors(beerCategoryController.update));
router.delete('/beer-categories/:id', catchErrors(beerCategoryController.destroy));

// Beers
router.get('/beers', catchErrors(beerController.list));
router.get('/beers/:id', catchErrors(beerController.get));
router.post('/beers', beerValidator, catchErrors(beerController.create));
router.put('/beers/:id', beerValidator, catchErrors(beerController.update));
router.delete('/beers/:id', catchErrors(beerController.destroy));

module.exports = router;
