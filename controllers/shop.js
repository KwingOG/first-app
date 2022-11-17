const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
	res.render('admin/add-product', {
		pageTitle: 'Add product',
		path: '/admin/add-product'
	});
};

exports.postAddProduct = (req, res, next) => {
	const product = new Product(req.body.title);
	product.save();
	res.redirect('/');
};

exports.getShop = (req, res, next) => {
	Product.fetchAll(products => {
		res.render('shop/product-list', {
			prods: products,
			pageTitle: 'Shop',
			path: '/',
			//hasProducts: products.length > 0,
			//activeShop: true,
			//productCSS: true
		});
	});
};

exports.getCart = (req, res, next) => {
	res.render('shop/cart', {
		pageTitle: 'Cart',
		path: '/cart'
	});
};

/*exports.getProducts = (req, res, next) => {
	res.render('shop/products', {
		pageTitle: 'Products',
		path: '/products'
	});
};*/

/*exports.getCheckput = (req, res, next) => {
	res.render('shop/checkout', {
		pageTitle: 'Checkout',
		path: '/checkout'
	});
};*/

exports.getAdminProducts = (req, res, next) => {
	res.render('admin/products', {
		pageTitle: 'Admin: Product list',
		path: 'admin/products'
	});
};


