const express = require('express');
const router = express.Router();

const ManagerProduct = require('../manager.js');
const manager = new ManagerProduct('productos.json');

router.get('/', async (req, res) => {
	let pp = await manager.getAll();
	res.render('get-products', { productos: pp.message });
});

router.post('/', (req, res) => {
	if (!req.body.title || !req.body.price || !req.body.thumbnail)
		return res.send({ error: 'data is required' });
	manager.createProduct(req.body).then((prod) => {
		res.redirect('/');
	});
});

module.exports = router;
