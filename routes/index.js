const router = require('express').Router();
const db = require('../db');

router.get('/', (req,res,next)=> {
	res.render('index');
});

router.get('/categories', (req,res,next)=> {
	res.render('categories', {categories: db.getCategories()});
});

router.get('/categories/:id', (req,res,next)=> {
	const category = db.getCategory(req.params.id*1);
	console.log('category = ',category)
	res.render('category', {category: category, products: category.products} );
});

module.exports = router;