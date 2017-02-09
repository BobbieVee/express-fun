const router = require('express').Router();
const db = require('../db');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));
router.use(bodyParser.urlencoded({extended: false}));

router.get('/categories/seed', (req,res,next)=> {
	db.seed();
	res.redirect('/categories');
});

router.get('/', (req,res,next)=> {
	res.render('index', {categories: db.getCategories()});
});

router.get('/categories', (req,res,next)=> {
	res.render('categories', {categories: db.getCategories()});
});

router.get('/categories/:id', (req,res,next)=> {
	const category = db.getCategory(req.params.id*1);
	res.render('category', {category: category, products: category.products, categories: db.getCategories()} );
});
router.post('/categories', (req,res,next)=> {
	db.addCategory(req.body.category);
	res.redirect('/categories');
});

router.delete('/categories/:id', (req,res,next)=> {
	db.categoryDelete(req.params.id);
	res.redirect('/categories');
});

router.delete('/categories/:categoryId/products/:id', (req,res,next)=> {
	db.productDelete(req.params.categoryId*1, req.params.id*1);
	res.redirect('/categories/' + req.params.categoryId)
});

router.post('/categories/:catId', (req,res,next)=> {
	const categoryId = req.params.catId*1
	db.addProduct(categoryId, req.body.name);
	res.redirect('/categories/' + categoryId);
});

module.exports = router;