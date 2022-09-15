const express = require('express');
const router = express.Router();

const ManagerProduct = require('../manager.js');
const manager = new ManagerProduct('productos.json');

router.get('/', (req, res) => {
	const productos = manager.getAll().then((prod) => {
		res.render('get-products', { productos });
	});
});

router.post('/', (req, res) => {
	if (!req.body.title || !req.body.price || !req.body.thumbnail)
		return res.send({ error: 'data is required' });
	manager.createProduct(req.body).then((prod) => {
		res.redirect('/');
	});
});

module.exports = router;
