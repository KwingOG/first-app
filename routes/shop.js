const express = require	('express');
const path = require('path');
const router = express.Router();

const shopControllers = require('../controllers/shop');


router.get('/', shopControllers.getShop);

router.get('/cart', shopControllers.getCart);

router.get('/products');

router.get('/checkout');

module.exports = router;