const express = require('express');

const router = express.Router();
const beerCategoryController = require('../controllers/beerCategoryController');
const beerController = require('../controllers/beerController');
const { catchErrors } = require('../handlers/errorHandler');

// Beer categories
router.get('/beer-categories', catchErrors(beerCategoryController.list));
router.post('/beer-categories', catchErrors(beerCategoryController.create));
router.get('/beer-categories/:id', catchErrors(beerCategoryController.get));
router.put('/beer-categories/:id', catchErrors(beerCategoryController.update));
router.delete('/beer-categories/:id', catchErrors(beerCategoryController.destroy));

// Beers
router.get('/beers', catchErrors(beerController.list));
router.post('/beers', catchErrors(beerController.create));
router.get('/beers/:id', catchErrors(beerController.get));
router.put('/beers/:id', catchErrors(beerController.update));
router.delete('/beers/:id', catchErrors(beerController.destroy));

module.exports = router;
