const express = require	('express');
const path = require('path');

const shopControllers = require('../controllers/shop');

const router = express.Router();

//GET
router.get('/add-product', shopControllers.getAddProduct);

router.get('/products', shopControllers.getAdminProducts);

//POST
router.post('/add-product', shopControllers.postAddProduct);




module.exports = router;